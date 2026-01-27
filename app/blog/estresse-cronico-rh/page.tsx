import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "O papel do RH no combate ao estresse crônico nas empresas | Blog MeshMe",
  description:
    "Descubra como o RH pode atuar como agente de mudança com ações práticas para prevenir o estresse no ambiente de trabalho.",
}

export default function EstresseCronicoRHPost() {
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
                O papel do RH no combate ao estresse crônico nas empresas
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  10 de Janeiro, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />6 min de leitura
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                O estresse crônico no ambiente de trabalho não é apenas um problema individual — é uma questão
                organizacional que demanda ação estratégica do RH. Como transformar o departamento de Recursos Humanos
                em um verdadeiro agente de mudança na promoção do bem-estar corporativo?
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Reconhecendo os sinais do estresse crônico
              </h2>
              <p className="text-gray-700 mb-6">
                Antes de agir, é fundamental identificar os indicadores de estresse crônico na organização:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Aumento do absenteísmo e turnover</li>
                <li>Queda na produtividade e qualidade do trabalho</li>
                <li>Conflitos interpessoais mais frequentes</li>
                <li>Aumento de licenças médicas relacionadas ao estresse</li>
                <li>Baixo engajamento em pesquisas de clima organizacional</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Estratégias práticas para o RH</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Mapeamento de fatores estressores</h3>
              <p className="text-gray-700 mb-6">
                Realize pesquisas regulares para identificar as principais fontes de estresse na organização. Isso pode
                incluir sobrecarga de trabalho, falta de autonomia, comunicação deficiente ou ambiente físico
                inadequado.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Programas de bem-estar estruturados</h3>
              <p className="text-gray-700 mb-6">
                Implemente programas que vão além de palestras pontuais. Considere atividades físicas regulares, sessões
                de mindfulness, grupos de apoio e programas de esporte corporativo que promovam o alívio natural do
                estresse.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Treinamento de lideranças</h3>
              <p className="text-gray-700 mb-6">
                Capacite gestores para reconhecer sinais de estresse em suas equipes e forneça ferramentas para
                conversas de apoio. Líderes bem preparados são a primeira linha de defesa contra o estresse crônico.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Flexibilização e autonomia</h3>
              <p className="text-gray-700 mb-6">
                Revise políticas de trabalho para incluir opções de flexibilidade de horário, trabalho remoto quando
                possível, e maior autonomia na execução de tarefas. O controle sobre o próprio trabalho é um dos maiores
                redutores de estresse.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">O papel do esporte corporativo</h2>
              <p className="text-gray-700 mb-6">
                A atividade física regular é uma das formas mais eficazes de combater o estresse crônico. Programas de
                esporte corporativo oferecem:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Liberação natural de endorfinas</li>
                <li>Oportunidades de socialização fora do ambiente de trabalho</li>
                <li>Desenvolvimento de resiliência física e mental</li>
                <li>Melhoria da qualidade do sono</li>
                <li>Redução dos níveis de cortisol (hormônio do estresse)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Medindo o sucesso das iniciativas</h2>
              <p className="text-gray-700 mb-6">
                Para garantir a eficácia das ações anti-estresse, o RH deve acompanhar métricas como:
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700">
                <li>Índices de satisfação e engajamento</li>
                <li>Taxas de absenteísmo e turnover</li>
                <li>Participação em programas de bem-estar</li>
                <li>Feedback qualitativo dos colaboradores</li>
                <li>Indicadores de saúde ocupacional</li>
              </ul>

              <p className="text-gray-700 mb-8">
                O combate ao estresse crônico é um investimento estratégico que resulta em equipes mais saudáveis,
                produtivas e engajadas. O RH tem o poder de liderar essa transformação.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforme o bem-estar da sua empresa</h3>
              <p className="text-gray-700 mb-6">
                Descubra como a MeshMe pode apoiar seu RH na criação de programas eficazes de combate ao estresse
                através do esporte corporativo.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/app">
                  Conheça nossas soluções
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
