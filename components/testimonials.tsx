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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-[-2deg] transform origin-top-right"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary px-4 py-2 mb-2 skew-x-[-5deg] transform">
            <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Depoimentos</h2>
          </div>
          <p className="text-gray-600 mt-2">O que as empresas participantes dizem sobre a Liga da Firma</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border-none shadow-lg transform hover:rotate-1 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse-scale">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                <div className="pt-6">
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                      <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative inline-block mb-6 -ml-2">
                    <div className="absolute inset-0 bg-primary transform rotate-[-2deg] skew-x-[-8deg] rounded-tr-2xl rounded-bl-2xl"></div>
                    <div className="absolute inset-0 bg-secondary transform rotate-[1deg] skew-x-[-4deg] rounded-tl-2xl rounded-br-2xl opacity-80"></div>
                    <div className="absolute inset-0 bg-black transform rotate-[-1deg] skew-x-[-2deg]"></div>
                    <p className="relative z-10 text-lg text-white italic px-4 py-2">
                      <span className="inline-block transform -rotate-1">"{testimonials[currentIndex].quote}"</span>
                    </p>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-60 animate-pulse-slow"></div>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-secondary rounded-full opacity-60 animate-pulse-slow"></div>
                  </div>

                  <div className="flex items-center">
                    <Avatar className="h-16 w-16 mr-4 border-3 border-primary shadow-lg">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary text-white font-bold text-lg">
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gray-600 font-medium">{testimonials[currentIndex].role}</p>
                      <p className="text-sm text-primary font-semibold">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-gray-300 hover:bg-primary/10 hover:border-primary transform hover:scale-110 transition-transform"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2 flex-wrap justify-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transform hover:scale-125 transition-transform ${
                      index === currentIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-gray-300 hover:bg-primary/10 hover:border-primary transform hover:scale-110 transition-transform"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Testimonial Counter */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                {currentIndex + 1} de {testimonials.length} depoimentos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
