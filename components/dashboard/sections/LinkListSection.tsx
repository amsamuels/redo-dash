// Example: LinkListSection.tsx
import { useEffect, useState } from 'react';
import { LinkList } from '../link-list';
import { LinkData } from '@/types/links';

export function LinkListSection() {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshLinks = async () => {
    try {
      const res = await fetch('/api/links');
      if (!res.ok) throw new Error('Failed to fetch links');
      
      const text = await res.text();
      const data = text ? JSON.parse(text) : [];
      setLinks(data);
    } catch (err) {
      console.error('Error fetching links:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshLinks();
  }, []);

  const handleDeleteLink = async (linkId: string) => {
    try {
      const res = await fetch(`/api/links/?id=${linkId}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete link');
      await refreshLinks(); // Re-fetch all links
    } catch (err) {
      console.error('Error deleting link:', err);
    }
  };

  if (loading) return <p>Loading links...</p>;
  if (links.length === 0) return <p>No links found. Create your first link!</p>;

  return <LinkList links={links} onDeleteLink={handleDeleteLink} />;
}