import Link from "next/link"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "O esporte como ferramenta para desenvolver soft skills em mulheres | Blog MeshMe",
  description:
    "Descubra como o esporte fortalece habilidades como liderança, autoconfiança e comunicação entre mulheres no ambiente corporativo.",
}

export default function SoftSkillsMulheresPost() {
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
                O esporte como ferramenta para desenvolver soft skills em mulheres
              </h1>

              <p className="font-bold">
                Você sabia que 69% das mulheres que praticavam esportes exercem pelo menos uma função de liderança?
              </p>

              <p>
                Esse dado, revelado pela <em>Women's Sports Foundation</em>, reforça o que líderes e educadores já
                intuíram há tempos: o esporte não é só sobre saúde física — é sobre desenvolver habilidades para a vida
                toda.
              </p>

              <p>
                No caso das mulheres, ele pode ser um divisor de águas na formação de confiança, protagonismo e
                liderança.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                O que os esportes ensinam — e por que importa para a carreira
              </h2>

              <p>
                Desde cedo, meninas que praticam esportes desenvolvem competências que vão além das quadras. De acordo
                com o estudo, as principais soft skills associadas à prática esportiva feminina são:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Trabalho em equipe</strong> (73%)
                </li>
                <li>
                  <strong>Aprendizado com erros</strong> (53%)
                </li>
                <li>
                  <strong>Gestão de pressão</strong> (51%)
                </li>
                <li>
                  <strong>Superação de limites físicos e mentais</strong> (46%)
                </li>
              </ul>

              <p>
                Essas são as mesmas habilidades valorizadas em cargos de liderança, especialmente em ambientes de alta
                exigência como o mundo corporativo. E o mais poderoso: o esporte oferece um espaço seguro para errar,
                tentar de novo e evoluir — algo essencial para o crescimento profissional.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Do campo para a liderança: um caminho real</h2>

              <p>
                A relação entre esporte e liderança feminina já foi comprovada por diversas pesquisas. Em um
                levantamento da EY com a espnW, por exemplo,{" "}
                <strong>94% das mulheres em cargos de diretoria afirmaram ter praticado esportes na infância</strong>.
              </p>

              <p>
                Mais do que coincidência, isso mostra como o esporte cria uma base sólida para o desenvolvimento de:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Autoconfiança</strong>: por meio da superação constante e reconhecimento por esforço
                </li>
                <li>
                  <strong>Proatividade</strong>: decisões rápidas em ambientes competitivos e dinâmicos
                </li>
                <li>
                  <strong>Comunicação clara</strong>: essencial em jogos coletivos e times profissionais
                </li>
                <li>
                  <strong>Resiliência emocional</strong>: perder, tentar de novo, aprender — repetir
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">A importância de incentivar desde cedo</h2>

              <p>
                Nos Estados Unidos, um marco importante nesse processo foi o <em>Título IX</em>, parte das Emendas
                Educacionais de 1972, que garantiu acesso igualitário ao esporte para meninas. O impacto disso vai muito
                além das escolas:{" "}
                <strong>
                  muitas líderes globais relatam que sua confiança e disciplina nasceram nos treinos esportivos
                </strong>
                .
              </p>

              <p>
                No Brasil, ainda enfrentamos desafios como a sexualização precoce, falta de infraestrutura e estigmas em
                torno da participação feminina em esportes. Incentivar meninas a praticarem esportes é uma ação concreta
                para construir igualdade desde a base — e empresas também podem ter um papel nisso.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">E no mundo corporativo, o que dá pra fazer?</h2>

              <p>
                RHs e lideranças podem usar o esporte como ferramenta de desenvolvimento intencional. Algumas ideias:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Desafios esportivos com foco na inclusão de mulheres</strong>
                </li>
                <li>
                  <strong>Ações internas com protagonismo feminino nos times</strong>
                </li>
                <li>
                  <strong>Parcerias com projetos que incentivam o esporte entre meninas</strong>
                </li>
                <li>
                  <strong>Eventos que conectem colaboradoras em torno de metas físicas e bem-estar</strong>
                </li>
              </ul>

              <p>
                Criar esses espaços significa construir ambientes mais diversos, colaborativos e humanos — onde a
                liderança feminina pode florescer com autenticidade.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusão: esporte é potência para liderar</h2>

              <p>
                Desenvolver lideranças femininas começa com o que parece simples: criar oportunidades para que meninas e
                mulheres testem seus limites, descubram sua força e construam vínculos verdadeiros com outras pessoas. O
                esporte oferece tudo isso.
              </p>

              <p>E se a sua empresa quer fazer parte dessa transformação, a MeshMe pode ajudar.</p>

              <p>
                👉{" "}
                <Link href="/app" className="text-primary hover:underline">
                  Fale com a gente e descubra como usar o esporte para engajar, desenvolver e inspirar mulheres na sua
                  empresa
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
