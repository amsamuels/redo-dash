import { useEffect, useState } from 'react';
import { LinkAnalyticsChart } from '@/components/dashboard/link-analytics-chart';

export function LinkAnalyticsSection() {
  const [links, setLinks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch('/api/links');
        if (!res.ok) throw new Error('Failed to fetch analytics');
        
        const text = await res.text();
        const data = text ? JSON.parse(text) : [];
        
        if (Array.isArray(data)) setLinks(data);
      } catch (err) {
        console.error('Error fetching analytics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) return null;

  return <LinkAnalyticsChart links={links} />;
}