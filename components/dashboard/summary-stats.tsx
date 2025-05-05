import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, LinkIcon, MousePointer, Timer } from 'lucide-react';

interface SummaryStatsProps {
  totalLinks: number;
  totalClicks: number;
  activeLinks: number;
}

export function SummaryStats({
  totalLinks,
  totalClicks,
  activeLinks,
}: SummaryStatsProps) {
  const stats = [
    {
      title: 'Total Links',
      value: totalLinks.toString(),
      icon: LinkIcon,
      description: 'Total links created',
    },
    {
      title: 'Total Clicks',
      value: totalClicks.toString(),
      icon: MousePointer,
      description: 'All-time click count',
    },
    {
      title: 'Active Links',
      value: activeLinks.toString(),
      icon: Timer,
      description: 'Currently active links',
    },
    {
      title: 'Click Rate',
      value: totalLinks ? `${(totalClicks / totalLinks).toFixed(1)}` : '0',
      icon: ArrowUp,
      description: 'Avg. clicks per link',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}