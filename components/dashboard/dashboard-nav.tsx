'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, BarChart3, LinkIcon, Settings, Users } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
}

export function DashboardNav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      title: 'Links',
      href: '/dashboard',
      icon: LinkIcon,
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: BarChart3,
    },
    {
      title: 'Team',
      href: '/team',
      icon: Users,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: Settings,
    },
    {
      title: 'Homepage',
      href: '/',
      icon: ArrowUpRight,
      isExternal: true,
    },
  ];

  return (
    <nav className="grid items-start gap-2 pt-6">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target={item.isExternal ? '_blank' : undefined}
          rel={item.isExternal ? 'noreferrer' : undefined}
        >
          <Button
            variant={pathname === item.href ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start',
              pathname === item.href && 'bg-muted font-medium'
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
            {item.isExternal && <ArrowUpRight className="ml-2 h-3 w-3" />}
          </Button>
        </Link>
      ))}
    </nav>
  );
}