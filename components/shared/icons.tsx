'use client';

import { ArrowUpRight, ExternalLink, Link, LinkIcon, Moon, Sun } from 'lucide-react';

export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 12l10 10 10-10-10-10z" />
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  );
}

export function LogoWithText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon className="h-6 w-6" />
      <span className="font-bold text-xl">Bouncy.ai</span>
    </div>
  );
}