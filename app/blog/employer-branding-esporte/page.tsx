import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Esporte como estratégia de employer branding: lições da Buser e outras empresas | Blog MeshMe",
  description:
    "Descubra como empresas usam o esporte para atrair e engajar talentos, fortalecendo sua marca empregadora com resultados mensuráveis.",
}

export default function EmployerBrandingEsportePost() {
  return (
    <div className="min-h-screen flex flex-col bg-accent/30">
      <MainNavbar />
      <div className="pt-16 flex-1">
        <article className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o blog
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Esporte como estratégia de employer branding: lições da Buser e outras empresas
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  28 de Dezembro, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />8 min de leitura
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Em um mercado onde talentos têm múltiplas opções, como uma empresa se destaca como empregadora? A Buser
                e outras empresas inovadoras descobriram que o esporte corporativo não é apenas um benefício — é uma
                poderosa ferramenta de employer branding que atrai, engaja e retém os melhores profissionais.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">O que é employer branding esportivo?</h2>
              <p className="text-gray-700 mb-6">
                Employer branding esportivo é o uso estratégico de programas, eventos e cultura esportiva para construir
                e comunicar a identidade da empresa como empregadora. Vai além de ter uma quadra ou patrocinar um time —
                é sobre criar uma narrativa autêntica de que a empresa valoriza saúde, equipe e alta performance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                O case da Buser: esporte como DNA corporativo
              </h2>
              <p className="text-gray-700 mb-6">
                A Buser transformou o esporte em parte fundamental de sua identidade corporativa. A empresa não apenas
                patrocina eventos esportivos, mas integra a mentalidade esportiva em seus valores, processos de
                contratação e cultura organizacional.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Estratégias implementadas:</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Times corporativos em múltiplas modalidades</li>
                <li>Eventos esportivos internos regulares</li>
                <li>Parcerias com atletas e influenciadores esportivos</li>
                <li>Comunicação externa focada na cultura esportiva</li>
                <li>Processo seletivo que valoriza mentalidade de alta performance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Resultados mensuráveis:</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Aumento de 45% na qualidade dos candidatos</li>
                <li>Redução de 30% no tempo de contratação</li>
                <li>Melhoria de 60% no Net Promoter Score interno</li>
                <li>Crescimento de 200% no engajamento nas redes sociais</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Outras empresas que se destacam</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Nike: Autenticidade em ação</h3>
              <p className="text-gray-700 mb-6">
                A Nike não apenas vende produtos esportivos — vive o esporte. Seus escritórios têm quadras, pistas de
                corrida e academias. Colaboradores recebem tempo remunerado para exercitar-se e são incentivados a
                participar de competições.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Google: Bem-estar como diferencial</h3>
              <p className="text-gray-700 mb-6">
                O Google oferece mais de 20 modalidades esportivas em seus escritórios, desde yoga até escalada. O
                programa "gFit" gamifica a atividade física e conecta colaboradores globalmente através de desafios
                esportivos.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Salesforce: Comunidade através do esporte
              </h3>
              <p className="text-gray-700 mb-6">
                A Salesforce criou o "Ohana Groups" — comunidades internas organizadas por interesses, incluindo
                diversos grupos esportivos. Isso fortalece conexões interpessoais e cria senso de pertencimento.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Por que o esporte funciona no employer branding?
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Diferenciação autêntica</h3>
              <p className="text-gray-700 mb-6">
                Em um mar de benefícios similares (plano de saúde, vale-refeição, home office), programas esportivos bem
                estruturados criam diferenciação real e memorável.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Atração de perfis específicos</h3>
              <p className="text-gray-700 mb-6">
                Profissionais que valorizam saúde e bem-estar tendem a ser mais produtivos, resilientes e engajados. O
                esporte atrai naturalmente esses perfis.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Conteúdo para redes sociais</h3>
              <p className="text-gray-700 mb-6">
                Eventos esportivos geram conteúdo visual atrativo e autêntico para redes sociais, mostrando a cultura da
                empresa de forma natural e envolvente.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Networking e parcerias</h3>
              <p className="text-gray-700 mb-6">
                Eventos esportivos corporativos criam oportunidades de networking com outras empresas, potenciais
                clientes e parceiros de negócio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Como implementar uma estratégia esportiva de employer branding
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Passo 1: Defina sua narrativa esportiva</h3>
              <p className="text-gray-700 mb-6">
                Que valores esportivos se alinham com sua cultura? Alta performance, trabalho em equipe, superação,
                disciplina? Defina 2-3 valores centrais que guiarão sua estratégia.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Passo 2: Comece internamente</h3>
              <p className="text-gray-700 mb-6">
                Antes de comunicar externamente, construa uma cultura esportiva sólida internamente. Colaboradores
                engajados são seus melhores embaixadores.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Passo 3: Crie conteúdo autêntico</h3>
              <p className="text-gray-700 mb-6">
                Documente jornadas reais de colaboradores, celebre conquistas esportivas, mostre bastidores de eventos.
                Autenticidade é fundamental.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Passo 4: Integre ao processo seletivo</h3>
              <p className="text-gray-700 mb-6">
                Mencione a cultura esportiva em job descriptions, mostre as instalações durante entrevistas, pergunte
                sobre interesses esportivos dos candidatos.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Passo 5: Meça e otimize</h3>
              <p className="text-gray-700 mb-6">
                Acompanhe métricas como qualidade dos candidatos, tempo de contratação, engajamento nas redes sociais e
                satisfação dos colaboradores.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Erros comuns a evitar</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>
                  <strong>Falta de autenticidade:</strong> Não force uma cultura esportiva se ela não existe
                  internamente
                </li>
                <li>
                  <strong>Exclusividade:</strong> Certifique-se de que programas sejam inclusivos para diferentes níveis
                  de habilidade
                </li>
                <li>
                  <strong>Foco apenas na comunicação:</strong> A substância deve vir antes da comunicação
                </li>
                <li>
                  <strong>Não medir resultados:</strong> Sem métricas, é impossível otimizar a estratégia
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">O futuro do employer branding esportivo</h2>
              <p className="text-gray-700 mb-8">
                Com a crescente valorização do bem-estar e work-life balance, especialmente entre as gerações mais
                jovens, o esporte corporativo deixará de ser diferencial para se tornar expectativa. Empresas que
                começarem agora terão vantagem competitiva significativa na atração e retenção de talentos.
              </p>

              <p className="text-gray-700 mb-8">
                O esporte como estratégia de employer branding não é sobre criar atletas — é sobre criar uma cultura de
                alta performance, bem-estar e conexão humana que ressoa com os melhores profissionais do mercado.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fortaleça sua marca empregadora com esporte</h3>
              <p className="text-gray-700 mb-6">
                Descubra como a MeshMe pode ajudar sua empresa a desenvolver uma estratégia de employer branding
                esportivo autêntica e eficaz.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/app">
                  Transforme sua marca empregadora
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}
