"use client"

import { Button } from "@/components/ui/button"
import { Download, Play, ArrowRight } from "lucide-react"

export default function AppHero() {
  return (
    <section
      id="sobre-app"
      className="relative bg-gradient-to-br from-accent via-white to-accent/50 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🏃‍♂️ Transforme sua empresa
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                O app que conecta
                <span className="text-primary"> esporte nas empresas</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Engaje colaboradores, promova bem-estar e transforme sua empresa em uma
                <span className="font-semibold"> comunidade ativa</span> com a MeshMe — a plataforma mais completa de
                <span className="font-semibold"> esporte no trabalho</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group" asChild>
                <a href="https://apps.apple.com/br/app/meshme/id6453362660" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Baixar o App
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 group"
                asChild
              >
                <a href="#funcionalidades">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Ver Funcionalidades
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="/app-hero-phones.png"
                alt="MeshMe App - Desafios e Torneios"
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
