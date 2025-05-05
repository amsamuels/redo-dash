'use client';

import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { LinkAnalyticsChart } from '@/components/dashboard/link-analytics-chart';
import { LinkDeviceStats } from '@/components/dashboard/link-device-stats';
import { LinkReferrerStats } from '@/components/dashboard/link-referrer-stats';
import { LinkClicksTable } from '@/components/dashboard/link-clicks-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnalyticsPage() {
  // Mock data for demonstration
  const mockLinks = [
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
  ];

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Analytics Overview"
        description="View detailed analytics across all your links."
      />
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Overall Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <LinkAnalyticsChart links={mockLinks} />
          </CardContent>
        </Card>
        <div className="grid gap-8 md:grid-cols-2">
          <LinkDeviceStats />
          <LinkReferrerStats />
        </div>
        <LinkClicksTable />
      </div>
    </DashboardShell>
  );
}