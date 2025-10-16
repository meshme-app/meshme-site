import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MeshMe | Esporte corporativo, cultura ativa e bem-estar no trabalho",
  description:
    "A plataforma que conecta colaboradores por meio do esporte. Com desafios gamificados, torneios corporativos e comunidades esportivas, a MeshMe promove bem-estar corporativo, engajamento contínuo e cultura organizacional saudável — tudo em um app de RH leve e mensurável.",
  verification: {
    google: "-mAwD9j8nrn82YecEBHXpCnxV-jIVTYWSo_o5ZK-Cn8",
  },
  openGraph: {
    title: "MeshMe | Esporte corporativo, cultura ativa e bem-estar no trabalho",
    description:
      "A plataforma que conecta colaboradores por meio do esporte. Com desafios gamificados, torneios corporativos e comunidades esportivas, a MeshMe promove bem-estar corporativo, engajamento contínuo e cultura organizacional saudável — tudo em um app de RH leve e mensurável.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshMe | Esporte corporativo, cultura ativa e bem-estar no trabalho",
    description:
      "A plataforma que conecta colaboradores por meio do esporte. Com desafios gamificados, torneios corporativos e comunidades esportivas, a MeshMe promove bem-estar corporativo, engajamento contínuo e cultura organizacional saudável — tudo em um app de RH leve e mensurável.",
  },
}

import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import AppHero from "@/components/app/app-hero"
import AppCompanies from "@/components/app/app-companies"
import AppAbout from "@/components/app/app-about"
import AppFeatures from "@/components/app/app-features"
import AppChallenges from "@/components/app/app-challenges"
import AppRunningClubs from "@/components/app/app-running-clubs"
import AppTournaments from "@/components/app/app-tournaments"
import AppClub from "@/components/app/app-club"
import AppBenefits from "@/components/app/app-benefits"
import AppDashboard from "@/components/app/app-dashboard"
import AppTestimonials from "@/components/app/app-testimonials"
import AppCTA from "@/components/app/app-cta"
import AppFAQ from "@/components/app/app-faq"
import FloatingWhatsAppButton from "@/components/app/floating-whatsapp-button"

export default function AppPage() {
  return (
    <div className="min-h-screen flex flex-col bg-accent/30">
      <MainNavbar />
      <div className="pt-16">
        <AppHero />
        <AppCompanies />
        <AppAbout />
        <AppFeatures />
        <AppChallenges />
        <AppRunningClubs />
        <AppClub />
        <AppTournaments />
        <AppBenefits />
        <AppDashboard />
        <AppTestimonials />
        <AppCTA />
        <AppFAQ />
      </div>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
