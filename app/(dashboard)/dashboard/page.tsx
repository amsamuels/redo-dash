'use client';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useSearchParams } from 'next/navigation';
import { SummaryStatsSection } from '@/components/dashboard/sections/SummaryStatsSection';
import { LinkAnalyticsSection } from '@/components/dashboard/sections/LinkAnalyticsSection';
import { LinkListSection } from '@/components/dashboard/sections/LinkListSection';
import { LinkCreateFormSection } from '@/components/dashboard/sections/LinkCreateFormSection';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const flow = searchParams?.get('flow') || undefined;
  const { backendUser, loading } = useCurrentUser(flow);

  if (!backendUser) return <p>Loading user info...</p>;
  if (loading) return <p>Loading dashboard...</p>;

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Links"
        description="Create and manage your short links."
      />

      <div className="grid gap-8">
        <SummaryStatsSection />
        <div className="grid gap-8 md:grid-cols-2">
          <LinkCreateFormSection />
          <LinkAnalyticsSection />
        </div>
        <LinkListSection />
      </div>
    </DashboardShell>
  );
}