import Link from "next/link"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "A fórmula da resiliência: o que atletas e líderes têm em comum | Blog MeshMe",
  description:
    "Descubra como o esporte desenvolve a capacidade de adaptação e fortalece a liderança corporativa através de exemplos práticos e estratégias comprovadas.",
}

export default function FormulaResilienciaPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MainNavbar />
      <div className="pt-16 flex-1">
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="text-primary hover:underline mb-8 inline-block">
              ← Voltar para o blog
            </Link>

            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-6">
                A fórmula da resiliência: o que atletas e líderes têm em comum
              </h1>

              <p className="font-bold">O que o triathlon tem a ver com liderança? Mais do que você imagina.</p>
              <p>
                A resiliência exigida de quem encara esportes desafiadores como corrida, ciclismo e natação também está
                presente no dia a dia de CEOs, cirurgiões e gestores de grandes equipes.
              </p>

              <p>
                Hoje, cada vez mais profissionais de alta performance estão buscando nos esportes uma forma de treinar
                corpo e mente ao mesmo tempo — e o resultado vai muito além do condicionamento físico.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Alta performance física e profissional andam juntas</h2>

              <p>
                A conexão entre esporte e liderança não é nova, mas está ganhando cada vez mais espaço. O crescimento
                das assessorias esportivas voltadas para executivos mostra uma tendência clara:{" "}
                <strong>
                  líderes estão se preparando para os desafios da carreira como se estivessem se preparando para uma
                  competição
                </strong>
                .
              </p>

              <p>
                É o caso da Sommet, assessoria esportiva especializada no treinamento de executivos-triatletas. Criada
                pelo triatleta profissional Guilherme Muglia, a Sommet desenvolveu um programa flexível voltado para
                profissionais com rotinas intensas — CEOs, advogados, médicos e executivos de grandes empresas. Segundo
                Gui, o sucesso desses líderes nos negócios tem muito em comum com o sucesso nas provas de endurance:
              </p>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                "Essas competições exigem meses de treinos, com foco em disciplina, planejamento e superação. Conceitos
                que também são indispensáveis na vida de quem lidera times ou empreende."
              </blockquote>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Os 4 pilares da mentalidade "type A" no esporte e no trabalho
              </h2>

              <p>A Sommet mapeou quatro pontos em comum entre atletas de alta performance e líderes corporativos:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Busca constante por excelência</strong>: são profissionais perfeccionistas, que querem ir além
                  do esperado em tudo que fazem.
                </li>
                <li>
                  <strong>Clareza de metas</strong>: definem objetivos de curto, médio e longo prazo — e traçam planos
                  para alcançá-los com eficiência.
                </li>
                <li>
                  <strong>Capacidade de execução</strong>: não apenas sonham grande, mas sabem colocar estratégias em
                  prática, com disciplina e foco.
                </li>
                <li>
                  <strong>Visão estratégica</strong>: entendem o "porquê" e o "como" de cada passo — tanto em um pitch
                  para investidores quanto em uma subida de bike.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4">Esporte como laboratório de resiliência</h2>

              <p>
                A resiliência não é apenas uma palavra da moda — é um fator determinante para navegar contextos
                instáveis e liderar com consistência. No esporte, ela aparece nos treinos que parecem impossíveis. Na
                liderança, nos dias em que é preciso manter o time coeso mesmo sob pressão.
              </p>

              <p>
                E o mais interessante? <strong>Essas habilidades podem ser treinadas.</strong>
              </p>

              <p>Líderes que praticam esportes com regularidade tendem a:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Ter maior tolerância ao estresse</li>
                <li>Ser mais adaptáveis a mudanças</li>
                <li>Manter o foco em situações adversas</li>
                <li>Recuperar-se com mais agilidade de falhas ou derrotas</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">O que sua empresa pode aprender com isso?</h2>

              <p>
                Não é à toa que programas de wellness corporativo estão ganhando espaço nas empresas mais inovadoras.
                Muito além da saúde física, o esporte é uma ferramenta de desenvolvimento de competências
                comportamentais (soft skills), como liderança, colaboração, motivação e disciplina.
              </p>

              <p>
                Promover atividades físicas no ambiente de trabalho é, também,{" "}
                <strong>criar oportunidades reais de aprendizado emocional e crescimento profissional</strong>.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                Conclusão: cultura de alta performance se constrói com movimento
              </h2>

              <p>
                Se você lidera um time ou está no RH, vale a pena considerar: o esporte pode ser um aliado estratégico
                para formar líderes mais preparados, saudáveis e resilientes.
              </p>

              <p>Quer transformar a cultura da sua empresa por meio do esporte?</p>

              <p>
                <strong>Conheça o Desafio MeshMe e descubra como unir performance, saúde e pertencimento.</strong>
              </p>

              <p>
                👉{" "}
                <Link href="/app" className="text-primary hover:underline">
                  Fale com a gente pelo site ou baixe o app
                </Link>
              </p>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}
