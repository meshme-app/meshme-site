"use client"

export default function VideoTeaser() {
  return (
    <section id="video" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-[2deg] transform origin-bottom-left"></div>
      <div className="absolute top-[15%] right-[5%] w-[150px] h-[150px] opacity-20 overflow-hidden">
        <div className="w-full h-full animate-rotate-slow">
          <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[8%] w-[130px] h-[130px] opacity-25 overflow-hidden">
        <div className="w-full h-full animate-pulse-slow">
          <img src="/starburst-orange.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary px-4 py-2 mb-2 skew-x-[-5deg] transform">
            <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Assista ao Teaser</h2>
          </div>
          <p className="text-gray-600 mt-2">Veja como é a energia da Liga da Firma</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <iframe
              src="https://www.youtube.com/embed/LQvSaVdqkOw"
              title="Liga da Firma 2025 - Teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Sinta a energia, a competição e a confraternização que só a Liga da Firma proporciona!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/SqD9f7rjD5yFJT7k7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-transform inline-block text-center"
              >
                Inscreva sua empresa
              </a>
              <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-transform">
                Saiba mais sobre os eventos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
