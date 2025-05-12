// hooks/useLinks.ts
import { LinkData } from '@/types/links';
import { useState, useEffect } from 'react';

export function useLinks() {
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
      console.error('Error refreshing links:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshLinks();
  }, []);

  return { links, loading, refreshLinks };
}