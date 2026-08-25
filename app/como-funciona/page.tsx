import type { Metadata } from "next"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import FloatingWhatsAppButton from "@/components/app/floating-whatsapp-button"
import ComoFuncionaContent from "@/components/como-funciona-content"

export const metadata: Metadata = {
  title: "MeshMe | Como funciona o app",
  description:
    "Veja como funcionam os desafios premiados, os torneios, os desafios da empresa e as recompensas da MeshMe, tela por tela.",
  openGraph: {
    title: "MeshMe | Como funciona o app",
    description:
      "Veja como funcionam os desafios premiados, os torneios, os desafios da empresa e as recompensas da MeshMe, tela por tela.",
    type: "website",
  },
}

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <ComoFuncionaContent />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
