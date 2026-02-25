import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MeshMe | Para Empresas - Competicoes corporativas que engajam",
  description:
    "A plataforma de competicoes corporativas que recompensa colaboradores pela pratica recorrente de atividade fisica. Utilizada por mais de 600 empresas em 6 paises.",
  openGraph: {
    title: "MeshMe | Para Empresas - Competicoes corporativas que engajam",
    description:
      "A plataforma de competicoes corporativas que recompensa colaboradores pela pratica recorrente de atividade fisica. Utilizada por mais de 600 empresas em 6 paises.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshMe | Para Empresas - Competicoes corporativas que engajam",
    description:
      "A plataforma de competicoes corporativas que recompensa colaboradores pela pratica recorrente de atividade fisica. Utilizada por mais de 600 empresas em 6 paises.",
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
