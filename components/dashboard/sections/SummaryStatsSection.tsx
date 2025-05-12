import { useEffect, useState } from 'react';
import { SummaryStats } from '@/components/dashboard/summary-stats';

export function SummaryStatsSection() {
  const [totalLinks, setTotalLinks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [activeLinks, setActiveLinks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/links');
        if (!res.ok) throw new Error('Failed to fetch stats');
        
        const text = await res.text();
        const data = text ? JSON.parse(text) : [];
        
        if (Array.isArray(data)) {
          setTotalLinks(data.length);
          setTotalClicks(data.reduce((sum, link) => sum + link.clicks, 0));
          setActiveLinks(data.filter((l) => l.status === 'active').length);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return null;

  return (
    <SummaryStats
      totalLinks={totalLinks}
      totalClicks={totalClicks}
      activeLinks={activeLinks}
    />
  );
}