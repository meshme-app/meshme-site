import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Trophy, Music, Users, Calendar } from "lucide-react"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Eventos - MeshMe",
  description: "Conheça os eventos exclusivos da MeshMe: Liga da Firma e Healthy Hour. Esporte, networking e bem-estar corporativo.",
}

const events = [
  {
    title: "Liga da Firma",
    subtitle: "O maior torneio esportivo entre empresas do Brasil",
    description: "Empresas competem em diferentes modalidades, fortalecem o espírito de equipe e promovem employer branding com visibilidade, integração e pertencimento.",
    href: "/liga-da-firma",
    image: "/images/sports-action.gif",
    color: "bg-[#FF7816]",
    hoverColor: "hover:border-[#FF7816]",
    stats: [
      { icon: Trophy, label: "9 modalidades" },
      { icon: Users, label: "150+ empresas" },
    ],
  },
  {
    title: "Healthy Hour",
    subtitle: "Esporte, música e networking no coração de SP",
    description: "O encontro quinzenal da MeshMe para unir esporte, música e networking. Uma experiência única para profissionais que querem se conectar de forma diferente.",
    href: "/healthy-hour",
    image: "/healthy-hour-hero-bg.png",
    color: "bg-[#99F700]",
    hoverColor: "hover:border-[#99F700]",
    stats: [
      { icon: Calendar, label: "Quinzenal" },
      { icon: Music, label: "DJ ao vivo" },
    ],
  },
]

export default function EventosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-[#FF7816]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#99F700]/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-[#FF7816] text-white text-sm font-semibold rounded-full mb-6">
                Eventos MeshMe
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Experiências que
                <span className="text-[#99F700]"> conectam</span> pessoas
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Conheça os eventos exclusivos da MeshMe e faça parte de uma comunidade que une esporte, bem-estar e networking.
              </p>
            </div>
          </div>
        </section>

        {/* Events Cards Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {events.map((event, index) => (
                <Link
                  key={index}
                  href={event.href}
                  className={`group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 ${event.hoverColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 ${event.color} px-4 py-2 rounded-full`}>
                      <span className={`text-sm font-bold ${index === 0 ? 'text-white' : 'text-black'}`}>
                        {event.title}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FF7816] transition-colors">
                      {event.title}
                    </h2>
                    <p className="text-lg font-medium text-gray-700 mb-4">
                      {event.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4 mb-6">
                      {event.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"
                        >
                          <stat.icon className="h-4 w-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 font-semibold ${index === 0 ? 'text-[#FF7816]' : 'text-[#99F700]'}`}>
                      <span>Saiba mais</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
