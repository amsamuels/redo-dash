import { DashboardNav } from '@/components/dashboard/dashboard-nav';
import { UserAccountNav } from '@/components/dashboard/user-account-nav';
import { MobileNav } from '@/components/dashboard/mobile-nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MobileNav />
          <UserAccountNav
            user={{
              name: 'John Doe',
              email: 'john@example.com',
              image: 'https://avatars.githubusercontent.com/u/124599?v=4',
            }}
          />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}