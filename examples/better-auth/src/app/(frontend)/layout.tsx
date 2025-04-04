import '@/styles/globals.css'

import { AdminBar } from '@/components/admin-bar'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'
import { BetterAuthProvider } from '@/lib/auth/context'
import { getContextProps } from '@/lib/auth/context/get-context-props'
import { ImpersonatingBar } from '@/components/impersonating-bar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Payload Better Auth',
  description: 'A Payload CMS plugin for Better Auth'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="app relative flex min-h-screen flex-col">
            <BetterAuthProvider {...getContextProps()}>
              <AdminBar />
              <ImpersonatingBar />
              <Header />
              {children}
              <Footer />
            </BetterAuthProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
