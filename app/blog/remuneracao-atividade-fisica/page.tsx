import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Remunerar por atividade física? Veja o que empresas inovadoras estão fazendo | Blog MeshMe",
  description:
    "Descubra como empresas estão premiando hábitos saudáveis com recompensas reais e os resultados surpreendentes dessa estratégia.",
}

export default function RemuneracaoAtividadeFisicaPost() {
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
                Remunerar por atividade física? Veja o que empresas inovadoras estão fazendo
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />8 de Janeiro, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />5 min de leitura
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                E se você pudesse ganhar dinheiro extra simplesmente por manter-se ativo? Empresas ao redor do mundo
                estão descobrindo que recompensar financeiramente a atividade física dos colaboradores não é apenas um
                benefício — é um investimento inteligente com retorno comprovado.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">A revolução dos incentivos à saúde</h2>
              <p className="text-gray-700 mb-6">
                O conceito não é novo, mas está ganhando força. Empresas como Google, Microsoft e Johnson & Johnson já
                implementaram programas que recompensam colaboradores por atingir metas de atividade física, participar
                de desafios esportivos ou manter hábitos saudáveis consistentes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Modelos de recompensa que funcionam</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Cashback por atividade</h3>
              <p className="text-gray-700 mb-6">
                Algumas empresas oferecem valores em dinheiro por metas atingidas: R$ 50 por mês para quem completa 150
                minutos de atividade semanal, ou bônus de R$ 200 para participação em eventos esportivos corporativos.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Desconto no plano de saúde</h3>
              <p className="text-gray-700 mb-6">
                Colaboradores ativos recebem descontos significativos no plano de saúde — até 30% de redução para quem
                mantém regularidade em atividades físicas e exames em dia.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Vouchers e benefícios</h3>
              <p className="text-gray-700 mb-6">
                Vale-alimentação extra, vouchers para equipamentos esportivos, ou dias de folga adicionais para quem
                atinge metas de bem-estar estabelecidas pela empresa.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                4. Participação nos lucros vinculada à saúde
              </h3>
              <p className="text-gray-700 mb-6">
                Algumas empresas incluem indicadores de saúde e bem-estar como critério para distribuição de
                participação nos lucros, criando um incentivo coletivo para uma cultura mais saudável.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Os resultados surpreendem</h2>
              <p className="text-gray-700 mb-6">Empresas que implementaram esses programas relatam:</p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Redução de 25% nos custos com plano de saúde</li>
                <li>Diminuição de 40% no absenteísmo por doença</li>
                <li>Aumento de 35% no engajamento dos colaboradores</li>
                <li>Melhoria de 20% nos índices de produtividade</li>
                <li>Redução significativa no turnover</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Como implementar na sua empresa</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Passo 1: Defina metas claras</h3>
              <p className="text-gray-700 mb-6">
                Estabeleça objetivos mensuráveis: número de passos diários, participação em atividades esportivas,
                frequência em academias ou conclusão de desafios corporativos.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Passo 2: Escolha o sistema de recompensa
              </h3>
              <p className="text-gray-700 mb-6">
                Decida se será cashback direto, descontos em benefícios, vouchers ou uma combinação. O importante é que
                seja atrativo e sustentável financeiramente.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Passo 3: Use tecnologia para monitoramento
              </h3>
              <p className="text-gray-700 mb-6">
                Plataformas como a MeshMe facilitam o acompanhamento de atividades, criação de desafios e distribuição
                automática de recompensas, tornando o processo transparente e eficiente.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Passo 4: Comunique e engaje</h3>
              <p className="text-gray-700 mb-6">
                Lance o programa com uma campanha interna forte, explique os benefícios e mantenha a comunicação
                constante sobre resultados e conquistas.
              </p>

              <p className="text-gray-700 mb-8">
                Remunerar atividade física não é gasto — é investimento. Os retornos em saúde, produtividade e
                engajamento mais do que compensam os custos iniciais, criando um ciclo virtuoso de bem-estar
                corporativo.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implemente recompensas por atividade física</h3>
              <p className="text-gray-700 mb-6">
                Descubra como a MeshMe pode ajudar sua empresa a criar um programa de incentivos à atividade física
                eficaz e mensurável.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/app">
                  Saiba como implementar
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
