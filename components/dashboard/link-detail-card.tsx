'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkData } from '@/types/links';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';
import { Check, ClipboardCopy, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LinkDetailCardProps {
  link: LinkData;
}

export function LinkDetailCard({ link }: LinkDetailCardProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(`https://bouncy.ai/go/${link.slug}`);
    setCopied(true);
    toast({
      title: 'Copied!',
      description: 'Link copied to clipboard',
    });
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Link Details</CardTitle>
        <CardDescription>View and manage this link's settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Short Link
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-medium">
                bouncy.ai/go/{link.slug}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={copyLink}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <ClipboardCopy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Status
            </div>
            <Badge variant={link.status === 'active' ? 'default' : 'secondary'}>
              {link.status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Destination URL
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-medium max-w-[300px] truncate">
                {link.destination}
              </span>
              <a
                href={link.destination}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Created
            </div>
            <div className="text-base font-medium">
              {formatDistanceToNow(new Date(link.createdAt), { addSuffix: true })}
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-muted/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">
                Total Clicks
              </div>
              <div className="text-3xl font-bold">{link.clicks}</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">
                Unique Visitors
              </div>
              <div className="text-3xl font-bold">{Math.floor(link.clicks * 0.8)}</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">
                Desktop
              </div>
              <div className="text-3xl font-bold">{Math.floor(link.clicks * 0.6)}</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-muted-foreground">
                Mobile
              </div>
              <div className="text-3xl font-bold">{Math.floor(link.clicks * 0.4)}</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-6 flex justify-between">
        <Button variant="outline">Edit Link</Button>
        <Button variant="destructive">Delete Link</Button>
      </CardFooter>
    </Card>
  );
}