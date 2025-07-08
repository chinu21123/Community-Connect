import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gaon-Saathi',
  description: 'Digital Village Platform for Empowering Rural Communities',
  generator: 'Chelsea',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
