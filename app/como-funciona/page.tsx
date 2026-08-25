import type { Metadata } from "next"
import Link from "next/link"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import FloatingWhatsAppButton from "@/components/app/floating-whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Trophy,
  Award,
  Gift,
  Calendar,
  ListChecks,
  CalendarCheck,
  Building2,
  ShieldCheck,
  MessageCircle,
  UserCircle,
  PlusCircle,
  BarChart3,
  Download,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "MeshMe | Como funciona o app",
  description:
    "Veja como funcionam os desafios premiados, os torneios, os desafios da empresa e as recompensas da MeshMe, tela por tela.",
  openGraph: {
    title: "MeshMe | Como funciona o app",
    description:
      "Veja como funcionam os desafios premiados, os torneios, os desafios da empresa e as recompensas da MeshMe, tela por tela.",
    type: "website",
  },
}

const steps = [
  {
    number: "01",
    icon: Trophy,
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    title: "Desafios premiados, da empresa e em grupo",
    description:
      "Na tela inicial você encontra os desafios premiados da plataforma, os desafios fechados da sua empresa e os desafios em grupo que você mesmo pode criar com amigos ou colegas de trabalho.",
    image: "/Screenshots/Desafios.png",
  },
  {
    number: "02",
    icon: Award,
    color: "bg-[#99F700]",
    iconColor: "text-black",
    title: "Participe e acompanhe o ranking",
    description:
      'Ao entrar em um desafio premiado, veja os detalhes da premiação, toque em "Participar" e acompanhe sua posição no ranking em tempo real.',
    image: "/Screenshots/Detalhes desafio premiado.png",
  },
  {
    number: "03",
    icon: Gift,
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    title: "Troque MeshCoins por recompensas",
    description:
      "No topo da tela inicial fica o contador de MeshCoins, a moeda da MeshMe. Toque nele para abrir a loja de recompensas e trocar seus pontos por vouchers de marcas parceiras.",
    image: "/Screenshots/Loja para trocar meshcoins por vouchers.png",
  },
  {
    number: "04",
    icon: Calendar,
    color: "bg-[#99F700]",
    iconColor: "text-black",
    title: "Próximos torneios e histórico",
    description:
      "No segundo menu da barra de navegação, a aba Torneios mostra os próximos eventos que estão por vir e o histórico completo de edições anteriores.",
    image: "/Screenshots/Torneios.png",
  },
  {
    number: "05",
    icon: ListChecks,
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    title: "Detalhes de cada torneio",
    description:
      "Toque em um torneio para ver todas as informações do evento e navegar entre as abas disponíveis.",
    image: "/Screenshots/Detalhes do torneio.png",
  },
  {
    number: "06",
    icon: CalendarCheck,
    color: "bg-[#99F700]",
    iconColor: "text-black",
    title: "Acompanhe os jogos agendados",
    description:
      "Dentro do torneio, a aba Agendados mostra todos os jogos programados, para você nunca perder a próxima partida.",
    image: "/Screenshots/Jogos do torneio.png",
  },
  {
    number: "07",
    icon: Building2,
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    title: "Crie sua empresa ou entre com um código",
    description:
      "No menu Empresas, crie o perfil da sua empresa do zero ou entre em uma já existente usando o código enviado pelo responsável de RH.",
    image: "/Screenshots/Empresa.png",
  },
  {
    number: "08",
    icon: ShieldCheck,
    color: "bg-[#99F700]",
    iconColor: "text-black",
    title: "Desafios fechados e Painel de RH",
    description:
      "Dentro da empresa, participe de desafios fechados criados para incentivar a atividade física do time. Quem cria a empresa recebe um e-mail com acesso ao Painel de RH, um painel próprio para gerenciar tudo pelo navegador.",
    image: "/Screenshots/Detalhes da empresa.png",
  },
  {
    number: "09",
    icon: MessageCircle,
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    title: "Feed, curtidas e comentários",
    description:
      "Os desafios da empresa têm um feed próprio, onde você curte, comenta e acompanha as publicações dos colegas de trabalho enquanto o desafio avança.",
    image: "/Screenshots/Detalhes desafio da empresa.png",
  },
  {
    number: "10",
    icon: UserCircle,
    color: "bg-[#99F700]",
    iconColor: "text-black",
    title: "Acompanhe suas estatísticas no perfil",
    description:
      "No perfil você acompanha check-ins, distância, tempo e outras estatísticas, além de navegar pelas abas de torneios, desafios e registros para ver todo o seu histórico.",
    image: "/Screenshots/Perfil.png",
  },
  {
    number: "11",
    icon: PlusCircle,
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    title: "Registre sua atividade em qualquer tela",
    description:
      "O botão flutuante fica acessível nas quatro abas principais do app. Escolha em qual desafio quer registrar a atividade, ou registre direto no seu perfil para bater suas metas pessoais.",
    image: "/Screenshots/Registrar atividades.png",
  },
  {
    number: "12",
    icon: BarChart3,
    color: "bg-[#99F700]",
    iconColor: "text-black",
    title: "Todos os seus registros, organizados",
    description:
      "Veja o histórico completo de atividades registradas e acompanhe sua evolução ao longo do tempo.",
    image: "/Screenshots/Acompanhar registros.png",
  },
]

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[180px] md:w-[200px] lg:w-[210px]">
      {/* Phone body */}
      <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="relative bg-white rounded-[1.5rem] overflow-hidden aspect-[1206/2622]">
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        </div>
      </div>
      {/* Side button */}
      <div className="absolute right-[-2px] top-20 w-0.5 h-8 bg-gray-800 rounded-l-sm" />
      {/* Volume buttons */}
      <div className="absolute left-[-2px] top-16 w-0.5 h-5 bg-gray-800 rounded-r-sm" />
      <div className="absolute left-[-2px] top-24 w-0.5 h-8 bg-gray-800 rounded-r-sm" />
    </div>
  )
}

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent via-white to-accent/50 pt-32 pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF7816]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-[#99F700]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <div className="inline-block mb-6">
            <span className="bg-[#99F700] text-black px-4 py-2 rounded-full text-sm font-semibold">
              Tour pelo app
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Como funciona a
            <span className="text-[#FF7816]"> MeshMe</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Veja como é usar o app, tela por tela, do primeiro desafio até o pódio.
          </p>
          <Button size="lg" className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group" asChild>
            <a href="https://apps.apple.com/br/app/meshme/id6453362660" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Começar agora. É grátis.
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-md shrink-0`}
                    >
                      <step.icon className={`h-6 w-6 ${step.iconColor}`} />
                    </div>
                    <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3">{step.title}</h2>
                  <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Image Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative flex justify-center items-center py-6 h-[420px] md:h-[470px] lg:h-[500px]">
                    <PhoneMockup src={step.image} alt={step.title} />
                    {/* Decorative gradient */}
                    <div
                      className={`absolute -z-10 inset-0 ${step.color} opacity-10 rounded-xl blur-2xl transform scale-105`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#FF7816]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 left-10 w-32 h-32 bg-[#99F700]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="container mx-auto px-4 max-w-2xl relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Pronto para começar?</h2>
          <p className="text-gray-300 text-xl mb-10">
            Baixe o app e comece sua jornada esportiva hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group" asChild>
              <a href="https://apps.apple.com/br/app/meshme/id6453362660" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Começar agora. É grátis.
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/">Voltar para a home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
