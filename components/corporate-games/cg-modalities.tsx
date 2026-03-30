"use client"

const modalities = [
  { name: "Beach Tennis", image: "/gallery/beach-tennis-celebration.png" },
  { name: "Vôlei de Praia", image: "/gallery/beach-volleyball-jump.png" },
  { name: "Tênis", image: "/gallery/tennis-players.png" },
  { name: "Tênis Indoor", image: "/gallery/indoor-tennis.png" },
  { name: "Futebol Society", image: "/gallery/soccer-team-orange.png" },
  { name: "Futebol", image: "/gallery/soccer-victory.png" },
  { name: "Vôlei Feminino", image: "/gallery/womens-volleyball-huddle.png" },
  { name: "Celebração", image: "/gallery/team-green-smoke.png" },
  { name: "Confraternização", image: "/gallery/group-celebration.png" },
  { name: "InterGestoras", image: "/gallery/soccer-intergestoras.png" },
]

export default function CGModalities() {
  return (
    <section id="modalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
            ESPORTES
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Modalidades Esportivas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Corporate Games São Paulo oferece uma grade diversificada de modalidades, capaz de atender diferentes perfis de participação e ampliar o potencial de engajamento dentro das empresas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modalities.map((modality, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={modality.image}
                alt={modality.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold">{modality.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
