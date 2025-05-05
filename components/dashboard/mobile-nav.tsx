'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';
import { LogoWithText } from '@/components/shared/icons';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center justify-between w-full gap-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <Link
            href="/"
            className="flex items-center mb-8"
            onClick={() => setOpen(false)}
          >
            <LogoWithText />
          </Link>
          <div className="my-8 h-[calc(100vh-8rem)] pb-10 pl-6">
            <DashboardNav />
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex-1 flex justify-center">
        <Link href="/dashboard" className="flex items-center">
          <LogoWithText />
        </Link>
      </div>
      <div className="w-12" /> {/* Spacer to balance the menu button */}
    </div>
  );
}