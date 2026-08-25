"use client"

import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Smartphone } from "lucide-react"
import { Users, Trophy } from "lucide-react" // Importing Users and Trophy icons
import { useLanguage } from "@/components/language-provider"
import { homeHero } from "@/lib/site-translations"

export default function ParaPessoasHero() {
  const { language } = useLanguage()
  const t = homeHero[language]

  return (
    <section
      id="para-pessoas"
      className="relative bg-gradient-to-br from-accent via-white to-accent/50 pt-32 pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF7816]/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-40 h-40 bg-[#99F700]/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#99F700] text-black px-4 py-2 rounded-full text-sm font-semibold">
                  {t.badge}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t.titleLine1}
                <span className="text-[#FF7816]"> {t.titleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                {t.paragraphStart}
                <span className="font-semibold">{t.paragraphHighlight}</span>
                {t.paragraphEnd}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group" asChild>
                <a href="https://apps.apple.com/br/app/meshme/id6453362660" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  {t.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF7816] text-[#FF7816] hover:bg-[#FF7816]/10 group bg-transparent"
                asChild
              >
                <Link href="/como-funciona">
                  <Smartphone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {t.ctaSecondary}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/app-hero-phones.png"
                alt="MeshMe App - Para Pessoas"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#99F700] rounded-full opacity-20 animate-pulse" />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF7816] rounded-full opacity-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
