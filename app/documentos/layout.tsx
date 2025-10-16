import type React from "react"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <div className="pt-16 flex-1">{children}</div>
      <Footer />
    </div>
  )
}
