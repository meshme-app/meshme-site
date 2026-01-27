import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog da MeshMe | Artigos sobre esporte corporativo e bem-estar",
  description:
    "Descubra insights sobre esporte corporativo, bem-estar no trabalho, RH e cultura organizacional. Artigos práticos para transformar sua empresa.",
  openGraph: {
    title: "Blog da MeshMe | Artigos sobre esporte corporativo e bem-estar",
    description:
      "Descubra insights sobre esporte corporativo, bem-estar no trabalho, RH e cultura organizacional. Artigos práticos para transformar sua empresa.",
    type: "website",
  },
}

const blogPosts = [
  {
    slug: "formula-da-resiliencia",
    title: "A fórmula da resiliência: o que atletas e líderes têm em comum",
    description: "Descubra como o esporte desenvolve a capacidade de adaptação e fortalece a liderança corporativa.",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
  },
  {
    slug: "soft-skills-mulheres",
    title: "O esporte como ferramenta para desenvolver soft skills em mulheres",
    description: "Esporte fortalece habilidades como liderança, autoconfiança e comunicação entre mulheres.",
    date: "12 de Janeiro, 2024",
    readTime: "4 min",
  },
  {
    slug: "estresse-cronico-rh",
    title: "O papel do RH no combate ao estresse crônico nas empresas",
    description: "RH como agente de mudança: ações práticas para prevenir o estresse no ambiente de trabalho.",
    date: "10 de Janeiro, 2024",
    readTime: "6 min",
  },
  {
    slug: "remuneracao-atividade-fisica",
    title: "Remunerar por atividade física? Veja o que empresas inovadoras estão fazendo",
    description: "Empresas estão premiando hábitos saudáveis com recompensas reais — veja como.",
    date: "8 de Janeiro, 2024",
    readTime: "5 min",
  },
  {
    slug: "metricas-bem-estar-rh",
    title: "As 5 métricas que todo RH deveria acompanhar sobre bem-estar corporativo",
    description: "Indicadores que revelam o impacto real das ações de saúde e qualidade de vida nas empresas.",
    date: "5 de Janeiro, 2024",
    readTime: "7 min",
  },
  {
    slug: "burnout-silencioso",
    title: "Burnout silencioso: como identificar e agir antes que vire um problema real",
    description: "Como detectar sinais invisíveis de esgotamento e promover uma cultura mais saudável.",
    date: "3 de Janeiro, 2024",
    readTime: "6 min",
  },
  {
    slug: "esporte-como-habito",
    title: "Como transformar esporte em hábito dentro da rotina de trabalho",
    description: "Veja estratégias práticas para incorporar movimento no dia a dia corporativo.",
    date: "1 de Janeiro, 2024",
    readTime: "4 min",
  },
  {
    slug: "employer-branding-esporte",
    title: "Esporte como estratégia de employer branding: lições da Buser e outras empresas",
    description: "Empresas usam o esporte para atrair e engajar talentos. Entenda os resultados.",
    date: "28 de Dezembro, 2023",
    readTime: "8 min",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-accent/30">
      <MainNavbar />
      <div className="pt-16 flex-1">
        {/* Hero Section */}
        <section className="bg-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-30 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-primary px-4 py-2 skew-x-[-5deg] transform mb-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white skew-x-[5deg] transform">
                  Blog da MeshMe
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Insights sobre esporte corporativo, bem-estar no trabalho e cultura organizacional para transformar sua
                empresa
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="bg-white hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 line-clamp-3 mb-4">{post.description}</CardDescription>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      asChild
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Ler mais
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute top-[20%] left-[15%] w-[100px] h-[100px] opacity-40 overflow-hidden">
            <div className="w-full h-full animate-rotate-slow">
              <img src="/sun-green.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-secondary px-4 py-2 mb-6 skew-x-[-5deg] transform">
              <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">
                Transforme sua empresa com a MeshMe
              </h2>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Descubra como nossa plataforma pode revolucionar o bem-estar e a cultura da sua organização através do
              esporte.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/app">
                Conheça a plataforma
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
