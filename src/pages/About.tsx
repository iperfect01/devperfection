import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { team } from "@/data/team";
import aniyonkuruImg from "@/assets/team/aniyonkuru.png";
import muhireImg from "@/assets/team/muhire.jpg";
import chanelImg from "@/assets/team/chanel.jpg";
import bonheurImg from "@/assets/team/bonheur.jpg";
import inezaImg from "@/assets/team/ineza.jpg";
import edvinImg from "@/assets/team/edvin.jpg";

const About = () => {
  return (
    <article>
      <SEO title="About — DevPerfection" description="Meet the team and mission behind DevPerfection: where innovation meets perfection." path="/about" />
      <header className="mb-10">
        <h1 className="text-4xl font-display font-semibold">About DevPerfection</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">We’re a bold digital agency crafting high-impact products across web, mobile and AI. We exist to turn ambitious ideas into measurable outcomes.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {team.map((m) => {
          const getImage = (name: string) => {
            const imageMap: Record<string, string> = {
              'Perfect IRAKOZE': aniyonkuruImg,
              'J.D MUHIRE': muhireImg,
              'HERVE Chanel': chanelImg,
              'D.I Bonheur': bonheurImg,
              'T. Sonia': inezaImg,
              'B.U Edvin': edvinImg,
            };
            return imageMap[name];
          };
          
          return (
            <motion.div key={m.name} whileHover={{ y: -4 }} className="rounded-xl p-6 bg-secondary/60 ring-1 ring-border">
              <img 
                src={getImage(m.name)} 
                alt={`${m.name} - ${m.role}`}
                className="h-24 w-24 rounded-full object-cover ring-1 ring-border mb-4"
              />
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </motion.div>
          );
        })}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Values</h2>
        <ul className="grid md:grid-cols-3 gap-4 text-sm">
          {['Outcomes over outputs', 'Accessibility by default', 'Performance is product', 'Design systems at core', 'Automation everywhere', 'Always be learning'].map(v => (
            <li key={v} className="rounded-lg p-4 bg-card ring-1 ring-border">{v}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
