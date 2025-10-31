import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { CookieBanner } from "@/components/CookieBanner"
import { copy } from "@/lib/copy"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${copy.brand.name} - ${copy.brand.tagline}`,
  description: copy.hero.subtitle,
  keywords: ["AI", "Business Operating System", "CRM", "Automation", "Enterprise"],
  authors: [{ name: copy.brand.name }],
  openGraph: {
    title: `${copy.brand.name} - ${copy.brand.tagline}`,
    description: copy.hero.subtitle,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${copy.brand.name} - ${copy.brand.tagline}`,
    description: copy.hero.subtitle,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Icons are automatically handled by Next.js via app/icon.svg
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  )
}

