import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsManager } from "@/components/admin/ProjectsManager";
import { PostsManager } from "@/components/admin/PostsManager";
import { ServicesManager } from "@/components/admin/ServicesManager";
import { UsersManager } from "@/components/admin/UsersManager";
import { OrdersManager } from "@/components/admin/OrdersManager";
import { LogOut } from "lucide-react";

const Admin = () => {
  const { signOut, profile } = useAuth();
  const [activeTab, setActiveTab] = useState("projects");

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <article>
      <SEO title="Admin Panel — DevPerfection" description="Manage projects, posts, users and orders." path="/admin" />
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-display font-semibold">Admin Panel</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, {profile?.display_name || 'Admin'}
          </p>
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <ProjectsManager />
        </TabsContent>

        <TabsContent value="posts">
          <PostsManager />
        </TabsContent>

        <TabsContent value="services">
          <ServicesManager />
        </TabsContent>

        <TabsContent value="users">
          <UsersManager />
        </TabsContent>

        <TabsContent value="orders">
          <OrdersManager />
        </TabsContent>
      </Tabs>
    </article>
  );
};
export default Admin;
