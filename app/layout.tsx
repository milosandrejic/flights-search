import { Poppins } from 'next/font/google';

import Header from '@/app/components/header';

import Providers from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Flight Search App',
  description: 'Find cheap flights fast',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
