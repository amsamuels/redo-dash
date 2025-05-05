import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bouncy.ai - Smart Link Management',
  description: 'Create branded redirect links with powerful analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <UserProvider>
        <Providers>{children}</Providers>
        </UserProvider>
      </body>
    </html>
  );
}