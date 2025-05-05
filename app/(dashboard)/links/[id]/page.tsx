'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { Button } from '@/components/ui/button';
import { LinkData } from '@/types/links';
import { LinkDetailCard } from '@/components/dashboard/link-detail-card';
import { LinkClicksTable } from '@/components/dashboard/link-clicks-table';
import { LinkDeviceStats } from '@/components/dashboard/link-device-stats';
import { LinkReferrerStats } from '@/components/dashboard/link-referrer-stats';
import { ChevronLeft } from 'lucide-react';

export default function LinkDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [link, setLink] = useState<LinkData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setLink({
        id: id as string,
        slug: 'welcome',
        destination: 'https://example.com/welcome-page',
        createdAt: new Date(2023, 4, 15).toISOString(),
        clicks: 245,
        status: 'active',
      });
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <DashboardShell>
        <DashboardHeader
          heading="Link Analytics"
          description="Detailed analytics for your link."
        />
        <div className="grid gap-8">Loading...</div>
      </DashboardShell>
    );
  }

  if (!link) {
    return (
      <DashboardShell>
        <DashboardHeader
          heading="Link Not Found"
          description="The requested link could not be found."
        />
        <div className="mt-8">
          <Button onClick={() => router.push('/dashboard')}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <div className="flex items-start justify-between">
        <DashboardHeader
          heading={`Link: bouncy.ai/go/${link.slug}`}
          description="View detailed analytics for your link."
        />
        <Button variant="outline" onClick={() => router.push('/dashboard')}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
      <div className="grid gap-8">
        <LinkDetailCard link={link} />
        <div className="grid gap-8 md:grid-cols-2">
          <LinkDeviceStats />
          <LinkReferrerStats />
        </div>
        <LinkClicksTable />
      </div>
    </DashboardShell>
  );
}