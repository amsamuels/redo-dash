'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LinkData } from '@/types/links';
import { Check, Loader2 } from 'lucide-react';

interface LinkCreateFormProps {
  onCreateLink: (link: LinkData) => void;
}

export function LinkCreateForm({ onCreateLink }: LinkCreateFormProps) {
  const [destination, setDestination] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination) return;
    
    setIsCreating(true);
    
    // Simulate API call
    setTimeout(() => {
      const newLink: LinkData = {
        id: generateRandomId(),
        slug: customSlug || generateRandomId(),
        destination,
        createdAt: new Date().toISOString(),
        clicks: 0,
        status: 'active',
      };
      
      onCreateLink(newLink);
      setDestination('');
      setCustomSlug('');
      setIsCreating(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create New Link</CardTitle>
        <CardDescription>
          Enter a destination URL to generate a shortened link.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {showSuccess && (
            <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
              <Check className="h-4 w-4" />
              <AlertDescription>Link created successfully!</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="destination">Destination URL</Label>
            <Input
              id="destination"
              placeholder="https://example.com/your-long-url"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="custom-slug">
              Custom Slug (Optional)
            </Label>
            <div className="flex items-center space-x-2">
              <div className="text-sm text-muted-foreground whitespace-nowrap">
                bouncy.ai/go/
              </div>
              <Input
                id="custom-slug"
                placeholder="my-custom-link"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isCreating || !destination}>
            {isCreating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              'Create Link'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}