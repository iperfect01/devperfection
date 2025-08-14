import { useAuth } from "@/hooks/useAuth";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LogOut } from "lucide-react";

const data = [
  { name: 'Mon', visits: 400 },
  { name: 'Tue', visits: 300 },
  { name: 'Wed', visits: 600 },
  { name: 'Thu', visits: 800 },
  { name: 'Fri', visits: 700 },
];

const ClientDashboard = () => {
  const { signOut, profile } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <article>
      <SEO title="Client Dashboard — DevPerfection" description="Your projects, invoices and messages in one place." path="/dashboard" />
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-display font-semibold">Client Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, {profile?.display_name || 'Client'}
          </p>
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader><CardTitle>Visits</CardTitle></CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2b3b50" />
                  <XAxis dataKey="name" stroke="#6b7b90" />
                  <YAxis stroke="#6b7b90" />
                  <Tooltip />
                  <Line type="monotone" dataKey="visits" stroke="#49e27b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Messages</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="p-3 rounded-md bg-secondary/60">Welcome to your dashboard 👋</li>
              <li className="p-3 rounded-md bg-secondary/60">We\'ll keep you posted on milestones.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </article>
  );
};
export default ClientDashboard;
