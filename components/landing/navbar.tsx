'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/shared/mode-toggle';
import { LogoWithText } from '@/components/shared/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60 border-b'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <LogoWithText className="h-8" />
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="text-sm hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="text-sm hover:text-primary">
            Pricing
          </Link>
          <Link href="#about" className="text-sm hover:text-primary">
            About
          </Link>
          <ModeToggle />
          <Link href="/api/auth/login">
            <Button variant="outline" size="sm">
             Login
            </Button>
          </Link>
          <Link  href="/api/auth/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="#features">Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#pricing">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/signup">Get Started</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}