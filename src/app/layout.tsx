import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alexandre Uzan • Sécurité Informatique',
  description: 'Portfolio et CV en ligne d’Alexandre Uzan',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  )
}
