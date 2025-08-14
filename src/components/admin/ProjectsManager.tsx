import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const projectSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required'),
  summary: z.string().min(1, 'Summary is required'),
  tags: z.string(),
  results: z.string(),
  images: z.string(),
  tech: z.string(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface Project {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  results: string[];
  images: string[];
  tech: string[];
  created_at: string;
  updated_at: string;
}

export const ProjectsManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const { toast } = useToast();

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      slug: '',
      title: '',
      summary: '',
      tags: '',
      results: '',
      images: '',
      tech: '',
    },
  });

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to fetch projects',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (data: ProjectFormData) => {
    try {
      const projectData = {
        ...data,
        tags: data.tags.split(',').map(t => t.trim()).filter(Boolean),
        results: data.results.split(',').map(r => r.trim()).filter(Boolean),
        images: data.images.split(',').map(i => i.trim()).filter(Boolean),
        tech: data.tech.split(',').map(t => t.trim()).filter(Boolean),
      };

      if (editingProject) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', editingProject.id);

        if (error) throw error;
        toast({ title: 'Success', description: 'Project updated successfully' });
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData]);

        if (error) throw error;
        toast({ title: 'Success', description: 'Project created successfully' });
      }

      form.reset();
      setEditingProject(null);
      setIsDialogOpen(false);
      fetchProjects();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    form.reset({
      slug: project.slug,
      title: project.title,
      summary: project.summary,
      tags: project.tags.join(', '),
      results: project.results.join(', '),
      images: project.images.join(', '),
      tech: project.tech.join(', '),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: 'Success', description: 'Project deleted successfully' });
      fetchProjects();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to delete project',
        variant: 'destructive',
      });
    }
  };

  const openCreateDialog = () => {
    setEditingProject(null);
    form.reset();
    setIsDialogOpen(true);
  };

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading projects...</div>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Projects Management</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? 'Edit Project' : 'Create New Project'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" {...form.register('title')} />
                  {form.formState.errors.title && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.title.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input id="slug" {...form.register('slug')} />
                  {form.formState.errors.slug && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.slug.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="summary">Summary</Label>
                <Textarea id="summary" {...form.register('summary')} />
                {form.formState.errors.summary && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.summary.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input id="tags" placeholder="web, mobile, ecommerce" {...form.register('tags')} />
              </div>

              <div>
                <Label htmlFor="results">Results (comma-separated)</Label>
                <Input id="results" placeholder="+32% conversion, -45% bounce" {...form.register('results')} />
              </div>

              <div>
                <Label htmlFor="tech">Technologies (comma-separated)</Label>
                <Input id="tech" placeholder="React, TypeScript, Tailwind" {...form.register('tech')} />
              </div>

              <div>
                <Label htmlFor="images">Images (comma-separated URLs)</Label>
                <Input id="images" placeholder="/image1.jpg, /image2.jpg" {...form.register('images')} />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingProject ? 'Update' : 'Create'} Project
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Tech</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.slug}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline">+{project.tags.length - 2}</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                    {project.tech.length > 2 && (
                      <Badge variant="outline">+{project.tech.length - 2}</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(project)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};