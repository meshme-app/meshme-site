"use client"

export default function CGAbout() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
              SOBRE O EVENTO
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              O QUE É O<br />CORPORATE GAMES
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                O esporte no Brasil está evoluindo. Mais do que uma prática para se exercitar, ele está se tornando uma ferramenta poderosa dentro do ambiente corporativo: construindo equipes, fortalecendo cultura, ampliando networking e criando momentos de conexão real entre colaboradores.
              </p>
              <p>
                O Corporate Games é um movimento global que traz essa transformação para as empresas. Presente em diferentes países, o evento conecta organizações por meio do esporte e transforma a participação em uma experiência de integração, reconhecimento e engajamento. Em São Paulo, o evento chega para reunir empresas em uma jornada que vai além da competição. Com 4 edições realizadas no Brasil e presença em mais de 20 países, o evento une tradição global com execução local de alto nível.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/gallery/team-green-smoke.png"
                alt="Time celebrando no Corporate Games"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
