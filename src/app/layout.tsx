import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Banner } from '@/components/organisms/banner'
import { PageWrapper } from '@/components/atoms/page-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visitor Platform',
  description: 'Register A New Visit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Banner title="Visits" />
          <PageWrapper>{children}</PageWrapper>
        </main>
      </body>
    </html>
  )
}
