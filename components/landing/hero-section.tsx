import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div
            className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
            style={{
              background:
                'linear-gradient(90deg, rgba(131,58,180,0.2) 0%, rgba(253,29,29,0.2) 50%, rgba(252,176,69,0.2) 100%)',
            }}
          >
            Introducing Bouncy.ai
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Branded links that{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)',
              }}
            >
              convert
            </span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Create powerful, branded redirect links with real-time analytics. Boost click-through rates and enhance brand trust.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="gap-1 group">
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg mx-auto mt-16 max-w-5xl px-4 shadow-xl dark:shadow-white/5">
        <div
          className="rounded-t-lg bg-gradient-to-r from-slate-800 to-slate-900 p-2"
        >
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="bg-slate-900 p-4">
          <div className="animate-pulse-slow rounded-lg bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-8 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col gap-8">
              <div className="h-10 w-48 rounded-md bg-white/10" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-white/10" />
                <div className="h-4 w-5/6 rounded bg-white/10" />
                <div className="h-4 w-4/6 rounded bg-white/10" />
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-32 rounded-md bg-white/10" />
                <div className="h-10 w-24 rounded-md bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}