'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkData } from '@/types/links';
import { 
  ArrowUpRight, 
  ClipboardCopy, 
  Copy, 
  ExternalLink, 
  MoreHorizontal, 
  Pencil,
  Trash2
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';

interface LinkListProps {
  links: LinkData[];
  onDeleteLink: (id: string) => void;
}

export function LinkList({ links, onDeleteLink }: LinkListProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleCopyLink = (slug: string) => {
    navigator.clipboard.writeText(`https://bouncy.ai/go/${slug}`);
    toast({
      title: 'Link copied',
      description: 'The link has been copied to your clipboard',
    });
  };

  const handleDelete = () => {
    if (deleteId) {
      onDeleteLink(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Links</CardTitle>
        <CardDescription>Manage and track all your shortened links.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Short Link</TableHead>
              <TableHead className="hidden md:table-cell">Destination</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead className="text-right">Clicks</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-muted-foreground">No links created yet</p>
                    <p className="text-xs text-muted-foreground">Create your first link using the form above</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              links.map((link) => (
                <TableRow key={link.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="text-sm">bouncy.ai/go/{link.slug}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleCopyLink(link.slug)}
                      >
                        <Copy className="h-3.5 w-3.5" />
                        <span className="sr-only">Copy</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center gap-2 max-w-[200px] truncate">
                      <span className="truncate text-muted-foreground">
                        {link.destination}
                      </span>
                      <a
                        href={link.destination}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:opacity-80"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span className="sr-only">Visit</span>
                      </a>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                  {link.createdAt
  ? formatDistanceToNow(
      new Date(link.createdAt.replace(/\.\d+Z$/, 'Z')),
      { addSuffix: true }
    )
  : 'Unknown'}
                  
                  </TableCell>
                  <TableCell className="text-right">{link.clicks}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant={link.status === 'active' ? 'default' : 'secondary'}>
                      {link.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => router.push(`/links/${link.id}`)}>
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          View Analytics
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleCopyLink(link.slug)}>
                          <ClipboardCopy className="mr-2 h-4 w-4" />
                          Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onSelect={() => setDeleteId(link.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this link and all of its analytics data.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}