/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 

  // Eventos descontinuados (codigo preservado em /_archive).
  // Temporario (307) de proposito: se algum evento voltar, nao fica cache de 308
  // travado no browser dos visitantes.
  async redirects() {
    return [
      { source: "/eventos", destination: "https://www.corporategamesbrasil.com", permanent: false },
      { source: "/liga-da-firma", destination: "https://www.corporategamesbrasil.com", permanent: false },
      { source: "/healthy-hour", destination: "https://www.corporategamesbrasil.com", permanent: false },
    ]
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
