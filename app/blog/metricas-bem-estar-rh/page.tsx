import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "As 5 métricas que todo RH deveria acompanhar sobre bem-estar corporativo | Blog MeshMe",
  description:
    "Descubra os indicadores essenciais que revelam o impacto real das ações de saúde e qualidade de vida nas empresas.",
}

export default function MetricasBemEstarRHPost() {
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
                As 5 métricas que todo RH deveria acompanhar sobre bem-estar corporativo
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />5 de Janeiro, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />7 min de leitura
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                "O que não se mede, não se gerencia." Esta máxima é especialmente verdadeira quando falamos de bem-estar
                corporativo. Muitas empresas investem em programas de qualidade de vida, mas poucas sabem realmente
                medir seu impacto. Vamos descobrir as métricas essenciais que todo RH deveria acompanhar.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Por que medir bem-estar corporativo?</h2>
              <p className="text-gray-700 mb-6">
                Além de justificar investimentos, as métricas de bem-estar ajudam a identificar problemas antes que se
                tornem crises, orientam decisões estratégicas e demonstram o valor real dos programas de RH para a
                liderança da empresa.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">As 5 métricas essenciais</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                1. Taxa de Participação em Programas de Bem-estar
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>O que medir:</strong> Percentual de colaboradores que participam ativamente de programas de
                saúde, esporte corporativo, palestras de bem-estar, etc.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Como calcular:</strong> (Número de participantes únicos / Total de colaboradores) × 100
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Meta ideal:</strong> Acima de 60% de participação indica engajamento saudável. Abaixo de 30%
                sugere necessidade de revisão dos programas.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                2. Índice de Absenteísmo por Motivos de Saúde
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>O que medir:</strong> Frequência e duração das ausências relacionadas a problemas de saúde
                física e mental.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Como calcular:</strong> (Dias de ausência por saúde / Total de dias úteis) × 100
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Insight importante:</strong> Acompanhe tendências sazonais e correlacione com eventos
                estressantes na empresa. Uma redução consistente indica eficácia dos programas de bem-estar.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                3. Net Promoter Score (NPS) de Bem-estar
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>O que medir:</strong> Probabilidade dos colaboradores recomendarem a empresa como um bom lugar
                para trabalhar, especificamente em relação ao cuidado com o bem-estar.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Pergunta-chave:</strong> "Em uma escala de 0 a 10, o quanto você recomendaria nossa empresa para
                um amigo, considerando nosso cuidado com o bem-estar dos colaboradores?"
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Interpretação:</strong> NPS acima de 50 é excelente, entre 0-50 é bom, abaixo de 0 indica
                problemas sérios.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Custo per Capita com Saúde</h3>
              <p className="text-gray-700 mb-4">
                <strong>O que medir:</strong> Gastos totais com plano de saúde, medicamentos, licenças médicas e outros
                custos relacionados à saúde, dividido pelo número de colaboradores.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Como calcular:</strong> Custos totais de saúde / Número de colaboradores
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Objetivo:</strong> Programas eficazes de bem-estar devem resultar em redução gradual deste custo
                ao longo do tempo.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Índice de Engajamento e Satisfação</h3>
              <p className="text-gray-700 mb-4">
                <strong>O que medir:</strong> Nível de satisfação dos colaboradores especificamente com iniciativas de
                bem-estar e qualidade de vida.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Componentes:</strong> Satisfação com programas oferecidos, percepção de cuidado da empresa,
                impacto na qualidade de vida pessoal.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Frequência:</strong> Pesquise trimestralmente para capturar mudanças e ajustar estratégias
                rapidamente.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Métricas complementares importantes</h2>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>
                  <strong>Taxa de Turnover:</strong> Correlacione com investimentos em bem-estar
                </li>
                <li>
                  <strong>Tempo médio de licença médica:</strong> Indica gravidade dos problemas de saúde
                </li>
                <li>
                  <strong>Produtividade por colaborador:</strong> Meça o impacto do bem-estar na performance
                </li>
                <li>
                  <strong>Frequência de uso de benefícios:</strong> Identifique quais programas são mais valorizados
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Como implementar o monitoramento</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Estabeleça uma baseline</h3>
              <p className="text-gray-700 mb-6">
                Antes de implementar novos programas, meça o estado atual de todas as métricas. Isso permitirá avaliar o
                impacto real das iniciativas.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Use ferramentas adequadas</h3>
              <p className="text-gray-700 mb-6">
                Plataformas como a MeshMe oferecem dashboards integrados que facilitam o acompanhamento dessas métricas
                em tempo real, automatizando coleta e análise de dados.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Crie relatórios regulares</h3>
              <p className="text-gray-700 mb-6">
                Estabeleça uma rotina de análise mensal das métricas, com relatórios trimestrais para a liderança.
                Inclua insights, tendências e recomendações de ação.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Aja com base nos dados</h3>
              <p className="text-gray-700 mb-8">
                Métricas sem ação são inúteis. Use os insights para ajustar programas, realocar recursos e criar
                iniciativas mais eficazes.
              </p>

              <p className="text-gray-700 mb-8">
                O acompanhamento sistemático dessas métricas transforma o RH de um centro de custo em um parceiro
                estratégico, demonstrando valor tangível e orientando decisões baseadas em evidências.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitore o bem-estar da sua empresa</h3>
              <p className="text-gray-700 mb-6">
                Descubra como a MeshMe pode ajudar você a acompanhar essas métricas essenciais com dashboards intuitivos
                e relatórios automatizados.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/app">
                  Conheça nossos dashboards
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
