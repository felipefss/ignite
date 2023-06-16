import { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/registry';

import '@/styles/global.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookWise',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
