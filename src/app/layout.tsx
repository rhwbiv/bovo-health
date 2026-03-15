import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Bovo — Strong teams. Stronger communities.',
  description: 'Bovo funds your employees\' wellness and routes 3% of every purchase toward free cancer screenings for underserved patients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
