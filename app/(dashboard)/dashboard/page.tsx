'use client';

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { LinkCreateForm } from '@/components/dashboard/link-create-form';
import { LinkList } from '@/components/dashboard/link-list';
import { SummaryStats } from '@/components/dashboard/summary-stats';
import { LinkData } from '@/types/links';
import { LinkAnalyticsChart } from '@/components/dashboard/link-analytics-chart';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export default function DashboardPage() {
 
  //   const { user, backendUser, loading } = useCurrentUser();

  // if (loading) return <p>Loading...</p>;
  // if (!user) return <p>You are not logged in.</p>;

  const [links, setLinks] = useState<LinkData[]>([
    {
      id: '1',
      slug: 'welcome',
      destination: 'https://example.com/welcome-page',
      createdAt: new Date(2023, 4, 15).toISOString(),
      clicks: 245,
      status: 'active',
    },
    {
      id: '2',
      slug: 'promo-summer',
      destination: 'https://example.com/summer-promotion',
      createdAt: new Date(2023, 5, 1).toISOString(),
      clicks: 189,
      status: 'active',
    },
    {
      id: '3',
      slug: 'landing-v2',
      destination: 'https://example.com/new-landing-page',
      createdAt: new Date(2023, 5, 10).toISOString(),
      clicks: 56,
      status: 'active',
    },
  ]);

  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);

  const handleCreateLink = (newLink: LinkData) => {
    setLinks([newLink, ...links]);
  };

  const handleDeleteLink = (linkId: string) => {
    setLinks(links.filter((link) => link.id !== linkId));
  };

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Links"
        description="Create and manage your short links."
      />
      <div className="grid gap-8">
        <SummaryStats
          totalLinks={links.length}
          totalClicks={totalClicks}
          activeLinks={links.filter((l) => l.status === 'active').length}
        />
        <div className="grid gap-8 md:grid-cols-2">
          <LinkCreateForm onCreateLink={handleCreateLink} />
          <LinkAnalyticsChart links={links} />
        </div>
        <LinkList links={links} onDeleteLink={handleDeleteLink} />
      </div>
    </DashboardShell>
  );
}