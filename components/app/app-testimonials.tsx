"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
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
      "O cuidado com o corpo e a mente, tão fundamental para uma vida saudável, não é também essencial para dias produtivos de trabalho, treino e vida?",
    name: "Alexandra D'Azevedo Nunes",
    role: "People and HR Director",
    company: "Peers",
    avatar: "/testimonials/alexandra-nunes-app.png",
    rating: 5,
  },
  {
    quote: "O esporte tem correlação total com o nosso dia a dia no trabalho: colaboração, disciplina & estratégia.",
    name: "Carlos Fan",
    role: "Managing Director",
    company: "Accenture",
    avatar: "/testimonials/carlos-fan-app.png",
    rating: 5,
  },
]

export default function AppTestimonials() {
  return (
    <section className="py-20 bg-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-lg">Depoimentos</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            O que nossos usuários
            <span className="text-primary"> estão dizendo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-gray-600 italic pl-6">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
