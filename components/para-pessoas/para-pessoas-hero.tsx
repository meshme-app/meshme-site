"use client"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { Users, Trophy } from "lucide-react" // Importing Users and Trophy icons

export default function ParaPessoasHero() {
  return (
    <section
      id="para-pessoas"
      className="relative bg-gradient-to-br from-accent via-white to-accent/50 py-20 overflow-hidden"
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
                  Para Pessoas
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Sozinho, com colegas ou com a sua empresa.
                <span className="text-[#FF7816]"> Comece agora na MeshMe.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Registre suas atividades, crie desafios e participe de eventos reais.
                <span className="font-semibold"> Prêmios e comunidade</span> fazem parte da jornada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group" asChild>
                <a href="https://apps.apple.com/br/app/meshme/id6453362660" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Começar agora. É grátis.
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
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
