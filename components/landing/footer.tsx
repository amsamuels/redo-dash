import { LogoWithText } from '@/components/shared/icons';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="about" className="border-t py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <LogoWithText className="h-6" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Branded redirect links with powerful analytics to help you boost conversions.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="font-medium">Product</div>
            <nav className="grid gap-2">
              <Link href="#features" className="text-sm hover:underline underline-offset-4">
                Features
              </Link>
              <Link href="#pricing" className="text-sm hover:underline underline-offset-4">
                Pricing
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Roadmap
              </Link>
            </nav>
          </div>
          <div className="grid gap-4">
            <div className="font-medium">Company</div>
            <nav className="grid gap-2">
              <Link href="#about" className="text-sm hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Blog
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Careers
              </Link>
            </nav>
          </div>
          <div className="grid gap-4">
            <div className="font-medium">Legal</div>
            <nav className="grid gap-2">
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Bouncy.ai. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}