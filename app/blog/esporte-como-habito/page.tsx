import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Como transformar esporte em hábito dentro da rotina de trabalho | Blog MeshMe",
  description:
    "Descubra estratégias práticas para incorporar movimento no dia a dia corporativo e criar uma cultura ativa sustentável.",
}

export default function EsporteComoHabitoPost() {
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
                Como transformar esporte em hábito dentro da rotina de trabalho
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />1 de Janeiro, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />4 min de leitura
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                "Não tenho tempo para exercitar-me" é uma das frases mais ouvidas nos escritórios brasileiros. Mas e se
                o esporte pudesse ser integrado naturalmente à rotina de trabalho, sem comprometer a produtividade?
                Vamos descobrir como transformar movimento em hábito corporativo.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">A ciência por trás dos hábitos esportivos</h2>
              <p className="text-gray-700 mb-6">
                Formar um hábito esportivo requer em média 66 dias de repetição consistente. No ambiente corporativo,
                isso significa criar estruturas que facilitem a prática regular, removendo barreiras e adicionando
                incentivos positivos.
              </p>

              <p className="text-gray-700 mb-6">
                O segredo está em começar pequeno e ser consistente, não em fazer grandes mudanças que são difíceis de
                manter.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Estratégias práticas para implementar</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                1. Micro-exercícios durante o expediente
              </h3>
              <p className="text-gray-700 mb-6">
                Implemente pausas ativas de 5-10 minutos a cada 2 horas. Podem ser alongamentos, caminhadas rápidas,
                exercícios de respiração ou até mesmo subir e descer escadas. O importante é movimentar o corpo
                regularmente.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Reuniões caminhando</h3>
              <p className="text-gray-700 mb-6">
                Para reuniões de brainstorming ou conversas individuais, sugira caminhar. Estudos mostram que caminhar
                aumenta a criatividade em até 60% e melhora a qualidade das discussões.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Desafios coletivos simples</h3>
              <p className="text-gray-700 mb-6">
                Crie desafios de equipe como "10.000 passos por dia", "usar escadas em vez do elevador" ou "pausas
                ativas em grupo". A gamificação e o aspecto social tornam a atividade mais atrativa.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Infraestrutura que facilita</h3>
              <p className="text-gray-700 mb-6">
                Disponibilize vestiários, chuveiros, armários e até mesmo equipamentos básicos como colchonetes para
                alongamento. Remover barreiras logísticas é fundamental para a adesão.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">O modelo dos "3 pilares"</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pilar 1: Facilidade</h3>
              <p className="text-gray-700 mb-6">
                Torne a atividade física a opção mais fácil. Isso pode significar ter uma academia no prédio, oferecer
                aulas durante o horário de almoço, ou simplesmente criar espaços adequados para movimento.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pilar 2: Diversão</h3>
              <p className="text-gray-700 mb-6">
                Atividades prazerosas têm maior adesão. Varie as modalidades, inclua música, crie competições amigáveis
                e celebre pequenas conquistas. O esporte deve ser visto como um momento de prazer, não obrigação.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pilar 3: Flexibilidade</h3>
              <p className="text-gray-700 mb-6">
                Ofereça múltiplas opções de horários, modalidades e intensidades. Nem todos têm o mesmo perfil ou
                disponibilidade. A flexibilidade garante que cada pessoa encontre sua forma de participar.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Superando as principais barreiras</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">"Não tenho tempo"</h3>
              <p className="text-gray-700 mb-6">
                <strong>Solução:</strong> Integre movimento às atividades existentes. Reuniões caminhando, pausas ativas
                obrigatórias, ou até mesmo exercícios que podem ser feitos na própria mesa de trabalho.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">"Não tenho condicionamento"</h3>
              <p className="text-gray-700 mb-6">
                <strong>Solução:</strong> Comece com atividades de baixa intensidade e progressão gradual. Ofereça
                modalidades para iniciantes e crie um ambiente acolhedor, sem julgamentos.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">"Não tenho equipamentos"</h3>
              <p className="text-gray-700 mb-6">
                <strong>Solução:</strong> Foque em atividades que não requerem equipamentos especiais: caminhada,
                alongamento, exercícios com peso corporal, yoga básica.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Medindo o sucesso</h2>
              <p className="text-gray-700 mb-6">Para garantir que os hábitos estão se formando, acompanhe:</p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Taxa de participação semanal nas atividades</li>
                <li>Frequência individual de cada colaborador</li>
                <li>Feedback qualitativo sobre energia e bem-estar</li>
                <li>Impacto na produtividade e satisfação no trabalho</li>
                <li>Redução em indicadores de estresse e absenteísmo</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">O papel da liderança</h2>
              <p className="text-gray-700 mb-6">
                Líderes que participam ativamente dos programas esportivos têm equipes com 40% mais adesão. O exemplo
                vem de cima, e quando a liderança valoriza e pratica atividade física, isso se torna parte da cultura
                organizacional.
              </p>

              <p className="text-gray-700 mb-8">
                Transformar esporte em hábito corporativo não é sobre criar atletas — é sobre criar uma cultura onde
                movimento e bem-estar são valorizados e facilitados. Os resultados aparecem não apenas na saúde
                individual, mas na energia, criatividade e coesão de toda a equipe.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crie hábitos esportivos na sua empresa</h3>
              <p className="text-gray-700 mb-6">
                Descubra como a MeshMe pode ajudar você a implementar programas esportivos que se tornam hábitos
                naturais na rotina dos seus colaboradores.
              </p>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/app">
                  Comece agora
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
