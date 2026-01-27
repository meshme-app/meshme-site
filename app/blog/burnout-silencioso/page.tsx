import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Burnout silencioso: como identificar e agir antes que vire um problema real | Blog MeshMe",
  description:
    "Aprenda a detectar sinais invisíveis de esgotamento e promover uma cultura mais saudável antes que o burnout se torne crítico.",
}

export default function BurnoutSilenciosoPost() {
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
                Burnout silencioso: como identificar e agir antes que vire um problema real
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />3 de Janeiro, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />6 min de leitura
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                O burnout silencioso é mais perigoso que o burnout tradicional. Enquanto o segundo é óbvio — com
                sintomas claros de exaustão e desengajamento —, o primeiro se desenvolve nas sombras, mascarado por uma
                aparente normalidade. Como identificar e combater esse inimigo invisível?
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">O que é burnout silencioso?</h2>
              <p className="text-gray-700 mb-6">
                O burnout silencioso é caracterizado por uma deterioração gradual do bem-estar mental e físico, sem os
                sinais dramáticos tradicionalmente associados ao esgotamento profissional. O colaborador continua
                produtivo, presente e aparentemente engajado, mas internamente está se esgotando.
              </p>

              <p className="text-gray-700 mb-6">
                É como uma bateria que vai perdendo carga lentamente — funciona normalmente até o momento em que
                simplesmente para de funcionar.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Sinais sutis para ficar atento</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Mudanças comportamentais discretas</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Diminuição gradual da criatividade e inovação</li>
                <li>Respostas mais curtas e diretas em comunicações</li>
                <li>Menos participação em conversas informais</li>
                <li>Redução da proatividade em projetos</li>
                <li>Aumento sutil no tempo para completar tarefas habituais</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Indicadores físicos sutis</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Cansaço que não melhora com descanso</li>
                <li>Pequenos esquecimentos mais frequentes</li>
                <li>Mudanças nos hábitos alimentares no trabalho</li>
                <li>Postura corporal mais fechada ou tensa</li>
                <li>Evitar atividades sociais da empresa</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sinais emocionais mascarados</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Cinismo disfarçado de "realismo"</li>
                <li>Perda gradual do entusiasmo por projetos</li>
                <li>Sensação de estar "no piloto automático"</li>
                <li>Dificuldade para sentir satisfação com conquistas</li>
                <li>Irritabilidade contida ou controlada</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Por que é tão perigoso?</h2>
              <p className="text-gray-700 mb-6">O burnout silencioso é particularmente perigoso porque:</p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>
                  <strong>Passa despercebido:</strong> Nem o colaborador nem a empresa percebem até ser tarde demais
                </li>
                <li>
                  <strong>Efeito dominó:</strong> Pode afetar toda a equipe sem que ninguém entenda o porquê
                </li>
                <li>
                  <strong>Perda de talentos:</strong> Bons profissionais saem "do nada", sem sinais de alerta
                </li>
                <li>
                  <strong>Impacto na qualidade:</strong> O trabalho continua sendo entregue, mas com qualidade
                  decrescente
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Estratégias de identificação precoce</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Check-ins regulares e estruturados</h3>
              <p className="text-gray-700 mb-6">
                Implemente conversas semanais de 15 minutos focadas não apenas em tarefas, mas no bem-estar geral.
                Pergunte sobre energia, motivação e satisfação com o trabalho.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Monitoramento de padrões de trabalho</h3>
              <p className="text-gray-700 mb-6">
                Observe mudanças sutis: horários de entrada e saída, frequência de pausas, participação em reuniões,
                tempo de resposta a e-mails. Ferramentas de analytics podem ajudar a identificar padrões.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Pesquisas de pulso frequentes</h3>
              <p className="text-gray-700 mb-6">
                Em vez de pesquisas anuais extensas, faça pesquisas curtas mensais com 3-5 perguntas focadas em
                bem-estar, energia e satisfação.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                4. Observação de mudanças na dinâmica social
              </h3>
              <p className="text-gray-700 mb-6">
                Preste atenção em quem para de participar de atividades sociais, almoços em grupo ou conversas
                informais. O isolamento gradual é um sinal importante.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ações preventivas eficazes</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Programas de bem-estar proativos</h3>
              <p className="text-gray-700 mb-6">
                Implemente atividades regulares que promovam conexão e alívio do estresse: esporte corporativo, sessões
                de mindfulness, grupos de interesse e atividades de team building que não sejam obrigatórias.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Flexibilidade e autonomia</h3>
              <p className="text-gray-700 mb-6">
                Ofereça opções de trabalho flexível, autonomia na organização de tarefas e possibilidade de personalizar
                o ambiente de trabalho. O controle sobre o próprio trabalho é um dos maiores preventivos do burnout.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cultura de pausas e desconexão</h3>
              <p className="text-gray-700 mb-6">
                Normalize e incentive pausas regulares, férias reais (sem trabalho) e desconexão após o horário. Líderes
                devem dar o exemplo, não enviando e-mails fora do horário.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Reconhecimento frequente e específico</h3>
              <p className="text-gray-700 mb-6">
                Reconheça não apenas grandes conquistas, mas também esforços diários e melhorias incrementais. O
                reconhecimento regular mantém a motivação e o senso de propósito.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">O papel do esporte na prevenção</h2>
              <p className="text-gray-700 mb-6">
                A atividade física regular é uma das ferramentas mais eficazes contra o burnout silencioso:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Libera endorfinas naturalmente, melhorando o humor</li>
                <li>Oferece uma válvula de escape para o estresse acumulado</li>
                <li>Cria oportunidades de socialização fora do contexto de trabalho</li>
                <li>Melhora a qualidade do sono e a energia geral</li>
                <li>Desenvolve resiliência física e mental</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Quando agir</h2>
              <p className="text-gray-700 mb-6">Se você identificou sinais de burnout silencioso em um colaborador:</p>

              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li>
                  <strong>Aja rapidamente:</strong> Não espere que os sintomas se intensifiquem
                </li>
                <li>
                  <strong>Tenha uma conversa privada:</strong> Aborde o assunto com empatia e sem julgamentos
                </li>
                <li>
                  <strong>Ofereça suporte concreto:</strong> Reduza temporariamente a carga de trabalho ou ofereça
                  recursos de apoio
                </li>
                <li>
                  <strong>Monitore de perto:</strong> Acompanhe a evolução e ajuste as intervenções conforme necessário
                </li>
                <li>
                  <strong>Considere apoio profissional:</strong> Sugira acompanhamento psicológico se apropriado
                </li>
              </ol>

              <p className="text-gray-700 mb-8">
                O burnout silencioso é prevenível quando há atenção, cuidado e ação proativa. Investir na identificação
                precoce e prevenção é muito mais eficaz — e menos custoso — do que lidar com as consequências de um
                burnout completo.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Previna o burnout silencioso na sua empresa</h3>
              <p className="text-gray-700 mb-6">
                Descubra como a MeshMe pode ajudar você a criar um ambiente mais saudável e identificar sinais precoces
                de esgotamento através de programas de bem-estar estruturados.
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
