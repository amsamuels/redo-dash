import { ArrowRight, BarChart3, Link, Lock, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function FeatureSection() {
  const features = [
    {
      title: 'Branded Links',
      description:
        'Create custom branded links that build trust and increase click-through rates.',
      icon: Link,
    },
    {
      title: 'Real-time Analytics',
      description:
        'Track clicks, locations, devices, and referrers in real-time to optimize your campaigns.',
      icon: BarChart3,
    },
    {
      title: 'Lightning Fast',
      description:
        'Ensure your audience reaches their destination quickly with our optimized redirect engine.',
      icon: Zap,
    },
    {
      title: 'Secure by Design',
      description:
        'Protect your links from bots and scrapers with our advanced security features.',
      icon: Lock,
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="space-y-2">
            <div
              className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
              style={{
                background:
                  'linear-gradient(90deg, rgba(131,58,180,0.2) 0%, rgba(253,29,29,0.2) 50%, rgba(252,176,69,0.2) 100%)',
              }}
            >
              Powerful Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything you need to supercharge your links
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bouncy.ai provides all the tools you need to create, manage, and analyze your links.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-12">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-200 hover:shadow-md dark:hover:shadow-white/5">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}