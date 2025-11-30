import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "AB Classes - Best Coaching Classes in New Delhi | Mathematics, Science, English",
  description:
    "AB Classes offers top-quality coaching for Mathematics, Science, English, and Competitive Exams in New Delhi. Affordable fees starting from ₹2500. Expert faculty with proven results.",
  keywords:
    "Best classes in New Delhi, Affordable classes in Indian Rupees, Mathematics coaching Delhi, Science tuition, English classes, Competitive exam coaching, CBSE coaching, Board exam preparation",
  authors: [{ name: "AB Classes" }],
  openGraph: {
    title: "AB Classes - Best Coaching Classes in New Delhi",
    description:
      "Top-quality coaching for Mathematics, Science, English, and Competitive Exams. Expert faculty, affordable fees.",
    type: "website",
    locale: "en_IN",
    siteName: "AB Classes",
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Classes - Best Coaching Classes in New Delhi",
    description: "Top-quality coaching for Mathematics, Science, English, and Competitive Exams.",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e67e22",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
