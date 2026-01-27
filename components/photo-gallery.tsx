"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

const photos = [
  {
    src: "/gallery/tennis-players.png",
    alt: "Jogadores de tênis em ação durante partida",
    sport: "Tênis",
  },
  {
    src: "/gallery/soccer-team-orange.png",
    alt: "Time de futebol comemorando em campo",
    sport: "Futebol",
  },
  {
    src: "/gallery/beach-volleyball-jump.png",
    alt: "Jogador de vôlei de praia saltando para atacar",
    sport: "Vôlei de Praia",
  },
  {
    src: "/gallery/beach-tennis-celebration.png",
    alt: "Dupla de beach tennis comemorando ponto",
    sport: "Beach Tennis",
  },
  {
    src: "/gallery/soccer-victory.png",
    alt: "Jogador comemorando vitória no futebol",
    sport: "Futebol",
  },
  {
    src: "/gallery/group-celebration.png",
    alt: "Grande grupo celebrando com brinde",
    sport: "Confraternização",
  },
  {
    src: "/gallery/team-green-smoke.png",
    alt: "Time comemorando com sinalizadores verdes",
    sport: "Celebração",
  },
  {
    src: "/gallery/womens-volleyball-huddle.png",
    alt: "Time feminino de vôlei em concentração",
    sport: "Vôlei Feminino",
  },
  {
    src: "/gallery/indoor-tennis.png",
    alt: "Jogador de tênis em quadra coberta",
    sport: "Tênis Indoor",
  },
  {
    src: "/gallery/soccer-intergestoras.png",
    alt: "Partida do InterGestoras 2024",
    sport: "InterGestoras",
  },
]

export default function PhotoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.8
    const totalWidth = scrollContainer.scrollWidth
    const containerWidth = scrollContainer.clientWidth

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed

      // Reset position when we've scrolled through all photos
      if (scrollPosition >= totalWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    // Start animation after a short delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(scroll)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Duplicate the photos to create a seamless loop
  const duplicatedPhotos = [...photos, ...photos]

  return (
    <section id="galeria" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/5 skew-y-[-2deg] transform origin-top-right"></div>
      <div className="absolute top-[20%] left-[5%] w-[140px] h-[140px] opacity-20 overflow-hidden">
        <div className="w-full h-full animate-rotate-slow">
          <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="absolute bottom-[15%] right-[8%] w-[120px] h-[120px] opacity-25 overflow-hidden">
        <div className="w-full h-full animate-pulse-slow">
          <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary px-4 py-2 mb-2 skew-x-[-5deg] transform">
            <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Reviva os melhores momentos</h2>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 py-4 overflow-x-hidden">
            {duplicatedPhotos.map((photo, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 h-60 overflow-hidden border border-gray-200 transform hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-full w-full group">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-sm bg-primary px-2 py-1 rounded skew-x-[-5deg] transform">
                        <span className="skew-x-[5deg] transform inline-block">{photo.sport}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Quer ver sua empresa nas próximas fotos?{" "}
            <span className="text-primary font-semibold cursor-pointer hover:underline">Inscreva-se agora!</span>
          </p>
        </div>
      </div>
    </section>
  )
}
