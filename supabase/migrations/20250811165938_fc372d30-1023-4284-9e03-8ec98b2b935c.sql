-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user', 'client')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can update all profiles" 
ON public.profiles 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  summary TEXT NOT NULL,
  results TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  tech TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Public read access for projects
CREATE POLICY "Projects are viewable by everyone" 
ON public.projects 
FOR SELECT 
USING (true);

-- Admin write access for projects
CREATE POLICY "Admins can manage projects" 
ON public.projects 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create posts table
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Public read access for published posts
CREATE POLICY "Published posts are viewable by everyone" 
ON public.posts 
FOR SELECT 
USING (published = true);

-- Admin access for all posts
CREATE POLICY "Admins can manage posts" 
ON public.posts 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create services table
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Public read access for services
CREATE POLICY "Services are viewable by everyone" 
ON public.services 
FOR SELECT 
USING (true);

-- Admin write access for services
CREATE POLICY "Admins can manage services" 
ON public.services 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public read access for products
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Admin write access for products
CREATE POLICY "Admins can manage products" 
ON public.products 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Users can view their own orders
CREATE POLICY "Users can view their own orders" 
ON public.orders 
FOR SELECT 
USING (auth.uid() = user_id);

-- Admins can view all orders
CREATE POLICY "Admins can view all orders" 
ON public.orders 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Admin write access for orders
CREATE POLICY "Admins can manage orders" 
ON public.orders 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email),
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample data
INSERT INTO public.projects (slug, title, tags, summary, results, images, tech) VALUES
('apollo-commerce', 'Apollo Commerce', ARRAY['ecommerce', 'web'], 'A conversion-optimized storefront with blazing performance and a delightful checkout.', ARRAY['+32% conversion', '-45% bounce', '+18% AOV'], ARRAY['/placeholder.svg'], ARRAY['React', 'Vite', 'Tailwind', 'Supabase']),
('neon-bank', 'Neon Bank', ARRAY['fintech', 'mobile'], 'A secure mobile banking experience with real-time insights and alerts.', ARRAY['99.98% uptime', 'AppStore 4.8★', '100k MAU'], ARRAY['/placeholder.svg'], ARRAY['React Native', 'Supabase', 'Framer Motion']);

INSERT INTO public.posts (slug, title, excerpt, content, date, tags, published) VALUES
('crafting-performance-for-conversion', 'Crafting Performance for Conversion', 'How we squeeze milliseconds to unlock revenue and user joy.', 'At DevPerfection, performance is a product feature. We approach speed as a narrative—loading states, perceived performance and real metrics...', '2025-07-01', ARRAY['performance', 'ux'], true),
('ai-that-earns-its-keep', 'AI that earns its keep', 'Practical AI that augments teams and pays for itself fast.', 'AI isn''t a checkbox. We design assistants that integrate with your operations and create measurable value...', '2025-06-15', ARRAY['ai', 'strategy'], true);

INSERT INTO public.services (slug, title, summary, features) VALUES
('web-development', 'Web Development', 'High-performance websites and web apps built with modern stacks that scale.', ARRAY['React/TypeScript', 'Accessibility-first', 'SEO & performance', 'CMS integration']),
('mobile-apps', 'Mobile Apps', 'iOS & Android apps with native feel, robust architecture and delightful UX.', ARRAY['React Native', 'Offline-first', 'Push notifications', 'App store readiness']),
('ui-ux', 'UI/UX Design', 'Research-driven experiences that convert and delight users across platforms.', ARRAY['Design systems', 'Prototyping', 'User testing', 'Motion & micro-interactions']),
('branding', 'Branding', 'Distinctive brand identities with bold typography, colors and voice.', ARRAY['Logo & visual ID', 'Guidelines', 'Collateral', 'Launch toolkit']),
('devops', 'DevOps', 'Automated CI/CD, containerization, observability and cloud infrastructure.', ARRAY['Docker & Kubernetes', 'Monitoring', 'Performance', 'Security best practices']),
('ai-integration', 'AI Integration', 'Practical AI that augments your workflows: assistants, RAG, and analytics.', ARRAY['OpenAI/Supabase', 'RAG pipelines', 'Automation', 'Data visualization']);

INSERT INTO public.products (slug, name, price, description) VALUES
('saas-landing-kit', 'SaaS Landing Kit', 59.00, 'A polished landing page kit with A/B-ready sections.'),
('ui-icons-pro', 'UI Icons Pro', 29.00, 'A crisp icon set optimized for product UI.');