import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div
            className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
            style={{
              background:
                'linear-gradient(90deg, rgba(131,58,180,0.2) 0%, rgba(253,29,29,0.2) 50%, rgba(252,176,69,0.2) 100%)',
            }}
          >
            Get Started Today
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to boost your link performance?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of companies already using Bouncy.ai to create powerful branded links.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link href="/signup">
              <Button size="lg" className="gap-1 group">
                Start for free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}