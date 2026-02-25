import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MeshMe | Para Empresas - Competições corporativas que engajam",
  description:
    "A plataforma de competições corporativas que recompensa colaboradores pela prática recorrente de atividade física. Utilizada por mais de 600 empresas em 6 países.",
  openGraph: {
    title: "MeshMe | Para Empresas - Competições corporativas que engajam",
    description:
      "A plataforma de competições corporativas que recompensa colaboradores pela prática recorrente de atividade física. Utilizada por mais de 600 empresas em 6 países.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshMe | Para Empresas - Competições corporativas que engajam",
    description:
      "A plataforma de competições corporativas que recompensa colaboradores pela prática recorrente de atividade física. Utilizada por mais de 600 empresas em 6 países.",
  },
}

import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import ParaEmpresasHero from "@/components/para-empresas/para-empresas-hero"
import ParaEmpresasProblem from "@/components/para-empresas/para-empresas-problem"
import ParaEmpresasDifferential from "@/components/para-empresas/para-empresas-differential"
import ParaEmpresasFeatures from "@/components/para-empresas/para-empresas-features"
import ParaEmpresasCTA from "@/components/para-empresas/para-empresas-cta"
import ParaEmpresasManifesto from "@/components/para-empresas/para-empresas-manifesto"
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
        <ParaEmpresasManifesto />
      </div>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
