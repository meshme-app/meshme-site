import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MeshMe | Para Empresas - Plataforma de bem-estar corporativo",
  description:
    "People-first, com governanca para o RH. Acompanhe engajamento real, crie desafios ilimitados e fortaleca comunidades esportivas na sua empresa.",
  openGraph: {
    title: "MeshMe | Para Empresas - Plataforma de bem-estar corporativo",
    description:
      "People-first, com governanca para o RH. Acompanhe engajamento real, crie desafios ilimitados e fortaleca comunidades esportivas na sua empresa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshMe | Para Empresas - Plataforma de bem-estar corporativo",
    description:
      "People-first, com governanca para o RH. Acompanhe engajamento real, crie desafios ilimitados e fortaleca comunidades esportivas na sua empresa.",
  },
}

import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import ParaEmpresasHero from "@/components/para-empresas/para-empresas-hero"
import ParaEmpresasProblem from "@/components/para-empresas/para-empresas-problem"
import ParaEmpresasDifferential from "@/components/para-empresas/para-empresas-differential"
import ParaEmpresasFeatures from "@/components/para-empresas/para-empresas-features"
import ParaEmpresasCTA from "@/components/para-empresas/para-empresas-cta"
import FloatingWhatsAppButton from "@/components/app/floating-whatsapp-button"
import CompanyCarousel from "@/components/company-carousel"

export default function ParaEmpresasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <div>
        <ParaEmpresasHero />
        <CompanyCarousel />
        <ParaEmpresasProblem />
        <ParaEmpresasDifferential />
        <ParaEmpresasFeatures />
        <ParaEmpresasCTA />
      </div>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
