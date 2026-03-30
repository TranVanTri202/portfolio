import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Văn Trí | Portfolio',
  description: 'Logic-first developer building scalable systems & AI solutions. Specializing in backend architecture, API design, and AI integration.',
  keywords: ['Backend Developer', 'Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'AI', 'RAG', 'Chatbot'],
  authors: [{ name: 'Backend Developer' }],
  icons: {
    icon: [
      {
        url: '/person.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/person.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
