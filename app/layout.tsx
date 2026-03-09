import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Painel de Gestão",
  description: "Acompanhe as últimas atualizações",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="apollo-tracking" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),
                  o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
              o.async=true;
              o.defer=true;
              o.onload=function(){
                window.trackingFunctions.onLoad({appId:"69adefe54494a2000e28a1a9"})
              };
              document.head.appendChild(o)
            }
            initApollo();
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
