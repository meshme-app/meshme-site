import type { Metadata } from "next"
import CGNavbar from "@/components/corporate-games/cg-navbar"
import CGFooter from "@/components/corporate-games/cg-footer"
import CGInscriptionForm from "@/components/corporate-games/cg-inscription-form"

export const metadata: Metadata = {
  title: "Inscreva sua empresa | Corporate Games São Paulo 2026",
  description:
    "Inscreva sua empresa no Corporate Games São Paulo 2026. Preencha o formulário e nossa equipe entrará em contato.",
}

export default function InscricaoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CGNavbar />
      <main className="flex-1 pt-20">
        <CGInscriptionForm />
      </main>
      <CGFooter />
    </div>
  )
}
