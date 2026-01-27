import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MeshMe | Para Pessoas - Comece sua jornada esportiva",
  description:
    "Sozinho, com colegas ou com a sua empresa. Registre suas atividades, crie desafios e participe de eventos reais. Prêmios e comunidade fazem parte da jornada.",
  openGraph: {
    title: "MeshMe | Para Pessoas - Comece sua jornada esportiva",
    description:
      "Sozinho, com colegas ou com a sua empresa. Registre suas atividades, crie desafios e participe de eventos reais. Prêmios e comunidade fazem parte da jornada.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshMe | Para Pessoas - Comece sua jornada esportiva",
    description:
      "Sozinho, com colegas ou com a sua empresa. Registre suas atividades, crie desafios e participe de eventos reais. Prêmios e comunidade fazem parte da jornada.",
  },
}

import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import ParaPessoasHero from "@/components/para-pessoas/para-pessoas-hero"
import ParaPessoasFeatures from "@/components/para-pessoas/para-pessoas-features"
import ParaPessoasCTA from "@/components/para-pessoas/para-pessoas-cta"
import FloatingWhatsAppButton from "@/components/app/floating-whatsapp-button"

export default function ParaPessoasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-accent/30">
      <MainNavbar />
      <div className="pt-16">
        <ParaPessoasHero />
        <ParaPessoasFeatures />
        <ParaPessoasCTA />
      </div>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
