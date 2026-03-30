import type { Metadata } from "next"
import CGNavbar from "@/components/corporate-games/cg-navbar"
import CGFooter from "@/components/corporate-games/cg-footer"
import CGHero from "@/components/corporate-games/cg-hero"
import CGAbout from "@/components/corporate-games/cg-about"
import CGStats from "@/components/corporate-games/cg-stats"
import CGBenefits from "@/components/corporate-games/cg-benefits"
import CGDifferentials from "@/components/corporate-games/cg-differentials"
import CGModalities from "@/components/corporate-games/cg-modalities"
import CGDeliverables from "@/components/corporate-games/cg-deliverables"
import CGSteps from "@/components/corporate-games/cg-steps"
import CGExclusiveOffer from "@/components/corporate-games/cg-exclusive-offer"
import CGCompanies from "@/components/corporate-games/cg-companies"
import CGTestimonials from "@/components/corporate-games/cg-testimonials"
import CGPhotoGallery from "@/components/corporate-games/cg-photo-gallery"
import CGFAQ from "@/components/corporate-games/cg-faq"
import CGCTA from "@/components/corporate-games/cg-cta"

export const metadata: Metadata = {
  title: "Corporate Games São Paulo 2026 | A Olimpíada Corporativa do Brasil",
  description:
    "O Corporate Games é a maior olimpíada corporativa do Brasil. Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores e fortalecer pertencimento.",
  openGraph: {
    title: "Corporate Games São Paulo 2026 | A Olimpíada Corporativa do Brasil",
    description:
      "O Corporate Games é a maior olimpíada corporativa do Brasil. Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores e fortalecer pertencimento.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Games São Paulo 2026 | A Olimpíada Corporativa do Brasil",
    description:
      "O Corporate Games é a maior olimpíada corporativa do Brasil. Um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores e fortalecer pertencimento.",
  },
}

export default function CorporateGamesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CGNavbar />
      <main>
        <CGHero />
        <CGCompanies />
        <CGAbout />
        <CGStats />
        <CGBenefits />
        <CGDeliverables />
        <CGModalities />
        <CGDifferentials />
        <CGSteps />
        <CGExclusiveOffer />
        <CGPhotoGallery />
        <CGTestimonials />
        <CGFAQ />
        <CGCTA />
      </main>
      <CGFooter />
    </div>
  )
}
