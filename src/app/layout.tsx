import type { Metadata, Viewport } from 'next';
import { Syne, DM_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rafael Giorgi — Desenvolvedor Back-end Node.js & TypeScript | Campinas, SP',
  description:
    'Portfólio de Rafael Giorgi, desenvolvedor back-end especializado em Node.js, TypeScript e APIs REST. Experiência em integração de sistemas corporativos com resultado de 50% de ganho em eficiência operacional. Projetos com IA, IoT e React.',
  keywords: [
    'Node.js',
    'TypeScript',
    'APIs RESTful',
    'Desenvolvedor Back-end',
    'Campinas',
    'Clean Code',
    'Fastify',
    'React',
    'Next.js',
    'PostgreSQL',
    'Prisma ORM',
    'Docker',
    'IoT',
    'IA',
    'Jest',
    'Scrum',
  ],
  authors: [{ name: 'Rafael dos Santos Giorgi', url: 'https://portfolio-rafael.vercel.app' }],
  creator: 'Rafael Giorgi',
  openGraph: {
    type: 'profile',
    url: 'https://portfolio-rafael.vercel.app',
    title: 'Rafael Giorgi — Desenvolvedor Back-end Node.js & TypeScript',
    description:
      'Desenvolvedor back-end especializado em Node.js e TypeScript com 50% de melhoria em eficiência operacional. Projetos com IA, IoT e React.',
    images: [
      {
        url: 'https://portfolio-rafael.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rafael Giorgi — Desenvolvedor Back-end',
      },
    ],
    firstName: 'Rafael',
    lastName: 'Giorgi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Giorgi — Desenvolvedor Back-end',
    description:
      'Desenvolvedor back-end especializado em Node.js e TypeScript com 50% de melhoria em eficiência operacional.',
    images: ['https://portfolio-rafael.vercel.app/og-image.png'],
    creator: '@devraffles',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://portfolio-rafael.vercel.app',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rafael dos Santos Giorgi',
  jobTitle: 'Desenvolvedor Back-end',
  url: 'https://portfolio-rafael.vercel.app',
  email: 'devraffles@gmail.com',
  telephone: '+55-19-98162-7300',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Campinas',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://linkedin.com/in/rafaelsgiorgi',
    'https://github.com/devraffles',
  ],
  knowsAbout: [
    'Node.js',
    'TypeScript',
    'APIs RESTful',
    'Fastify',
    'Clean Code',
    'React',
    'Next.js',
    'PostgreSQL',
    'Prisma ORM',
    'Docker',
    'IoT',
    'IA',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'UniMetrocamp Wyden',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Portfólio Rafael Giorgi',
  url: 'https://portfolio-rafael.vercel.app',
  description: 'Portfólio de Rafael Giorgi, desenvolvedor back-end especializado em Node.js e TypeScript.',
  author: {
    '@type': 'Person',
    name: 'Rafael dos Santos Giorgi',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmMono.variable}`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-bg text-porto font-mono antialiased">
        <a
          href="#projetos"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-green focus:text-bg focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm focus:font-medium"
        >
          Pular para conteúdo principal
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
