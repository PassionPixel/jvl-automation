import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JVL Automation | Automatisations IA pour PME',
  description: 'JVL Automation aide les PME, indépendants et agences à automatiser leurs leads, devis, relances, rapports et dashboards grâce à Make, IA, Tally, Google Sheets et Looker Studio.',
  openGraph: {
    title: 'JVL Automation',
    description: 'Automatisez vos tâches répétitives avec l’IA et Make.com.',
    url: 'https://jvlautomation.com',
    siteName: 'JVL Automation',
    locale: 'fr_BE',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
