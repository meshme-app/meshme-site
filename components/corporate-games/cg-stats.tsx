"use client"

export default function CGStats() {
  const stats = [
    { value: "51 mil", label: "Organizações participantes no mundo" },
    { value: "1 milhão", label: "Participantes no mundo" },
    { value: "Global", label: "Presença internacional" },
  ]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[200px] font-black text-gray-100 opacity-50 select-none pointer-events-none whitespace-nowrap">
        Corporate Games
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Uma marca global. Uma experiência<br />corporativa relevante.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Corporate Games conecta empresas ao redor do mundo por meio de uma proposta que une esporte, cultura, integração e reconhecimento. Mais do que um evento, é uma plataforma global de team building e employer branding com escala, legitimidade e alto valor percebido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-[#B91C1C] mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
