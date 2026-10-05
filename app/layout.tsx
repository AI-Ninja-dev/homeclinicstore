import './globals.css';
import './logo.css';
import './release.css';
import './premium.css';
import './storefront.css';
import type { Metadata } from 'next';
import { Manrope, DM_Sans } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

const display = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-display' });
const body = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://homeclinicstore.co.za'),
  title: { default: 'HomeClinicStore | Next-Gen Healthcare at Home', template: '%s | HomeClinicStore' },
  description: 'Explore CGM, connected home-health devices, CareGrid and biomedical support with HomeClinicStore in South Africa.',
  openGraph: {
    title: 'HomeClinicStore | Next-Gen Healthcare at Home',
    description: 'Home medical devices, connected care and biomedical support for South Africa.',
    url: 'https://homeclinicstore.co.za',
    siteName: 'HomeClinicStore',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-ZA" className={`${display.variable} ${body.variable}`}><body><Header />{children}<Footer /><WhatsAppChat /></body></html>;
}
