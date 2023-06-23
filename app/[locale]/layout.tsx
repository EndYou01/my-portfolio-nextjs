
import './globals.css'
import { Inter } from 'next/font/google'

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jorge Senjudo Portfolio',
  description: 'Generated by create next app',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode,
  params: {
    locale: string
  }
}) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}