"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Participamos deste campeonato há anos, e é sempre um orgulho imenso ver nossa equipe superar limites e alcançar resultados brilhantes.",
    name: "Lilian Giorgi",
    role: "Managing Director",
    company: "Alvarez & Marsal",
    avatar: "/testimonials/lilian-giorgi.png",
    rating: 5,
  },
  {
    quote:
      "Game On! A Day of Sports, Teamwork, and Triumph in Brazil Private Equity… Embora hoje eu mal consiga andar, preciso dizer: 'Uau! Que dia!'",
    name: "Anibal Wadih",
    role: "Managing Partner (Founder)",
    company: "GEF Capital",
    avatar: "/testimonials/anibal-wadih.png",
    rating: 5,
  },
  {
    quote:
      "O cuidado com o corpo e a mente, tão fundamental para uma vida saudável, não é também essencial para dias produtivos de trabalho, treino e vida?",
    name: "Alexandra D'Azevedo Nunes",
    role: "People and HR Director",
    company: "Peers",
    avatar: "/testimonials/alexandra-nunes.png",
    rating: 5,
  },
  {
    quote: "O esporte tem correlação total com o nosso dia a dia no trabalho: colaboração, disciplina & estratégia.",
    name: "Carlos Fan",
    role: "Managing Director",
    company: "Accenture",
    avatar: "/testimonials/carlos-fan.png",
    rating: 5,
  },
  {
    quote:
      "Foi em experiências assim (e também em happy hours) que eu perdi colegas de trabalho para ganhar amigos para a vida.",
    name: "Marcos Tiago Freire",
    role: "Strategy and Consulting",
    company: "Consulting Firm",
    avatar: "/testimonials/marcos-tiago-freire.png",
    rating: 5,
  },
  {
    quote:
      "Vocês fizeram a diferença e administraram os resultados com muita eficiência e rapidez… ferramenta fantástica esse aplicativo de vocês!",
    name: "Carlos Vieira",
    role: "Cofounder",
    company: "E-corp Hub",
    avatar: "/testimonials/carlos-vieira.png",
    rating: 5,
  },
  {
    quote:
      "Colocamos em campo a cultura e alguns dos princípios do JIT (Jeito iFood de Trabalhar). Eles são princípios que tangibilizam a nossa cultura e trazem um direcional de comportamento pensando em cada valor.",
    name: "Marcos Heringer",
    role: "Growth",
    company: "iFood Pago",
    avatar: "/testimonials/marcos-heringer.png",
    rating: 5,
  },
]

export default function CGTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            O que dizem as empresas participantes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="relative">
                <Quote className="h-10 w-10 text-[#B91C1C]/20 absolute -top-2 -left-2" />
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6 pt-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-xl text-gray-700 italic text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center justify-center">
                <Avatar className="h-16 w-16 mr-4 border-2 border-[#B91C1C]/20">
                  <AvatarImage
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-[#B91C1C] text-white font-bold text-lg">
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-[#B91C1C] font-semibold">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-gray-300 hover:bg-[#B91C1C]/10 hover:border-[#B91C1C]"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#B91C1C]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-gray-300 hover:bg-[#B91C1C]/10 hover:border-[#B91C1C]"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              {currentIndex + 1} de {testimonials.length} depoimentos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
