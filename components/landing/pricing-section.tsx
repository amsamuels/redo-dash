import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Best place to get started and test your first deeplink.',
    features: [
      '1 Deeplink',
      'Free Onboarding Call',
      'Link Cloaking',
    ],
  },
  {
    name: 'Pro',
    price: '35',
    description: 'For creators & small businesses',
    popular: true,
    features: [
      '5 Active Deep Links (with Cloaking Shield)',
      'Full-Scale Analytics/Statistics',
      'Full Access to Website Builder',
      'Access to Advance Settings',
      'Up to 2 Custom Domains',
      'Google Tag Manager + Meta Pixel',
    ],
  },
  {
    name: 'Scaling',
    price: '75',
    description: 'For growing businesses & agencies',
    features: [
      '20 Active Deep Links (with Cloaking Shield)',
      'Up to 5 Custom Domains',
      'Priority Support',
      'Team Management (5 members)',
      'Custom Query Analytics',
      'Everything in Growth Plan',
    ],
  },
  {
    name: 'Dominance',
    price: '150',
    description: 'For agencies & enterprises',
    features: [
      '50 Active Deep Links (with Cloaking Shield)',
      'Up to 15 Custom Domains',
      'Unlimited Team Members',
      'Dedicated Account Manager',
      'Early Access to Beta Features',
      'VIP Priority Support',
      'Everything in Scaling Plan',
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/50">
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
              Simple Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose your plan
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select the perfect plan for your needs. All plans include our core features.
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-12 lg:grid-cols-4 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105'
                  : ''
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start for free</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}