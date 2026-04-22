import type { Metadata } from "next"
import MainNavbar from "@/components/main-navbar"
import Footer from "@/components/footer"
import FloatingWhatsAppButton from "@/components/app/floating-whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Trophy,
  Users,
  Clock,
  MapPin,
  Calendar,
  Target,
  BarChart3,
  Download,
  Shield,
  AlertTriangle,
  Lightbulb,
  Star,
  Building2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "MeshMe | Guia de Criação de Desafios Corporativos",
  description:
    "Aprenda a configurar e gerenciar seu programa de wellness corporativo na plataforma MeshMe. Passo a passo completo para RH.",
  openGraph: {
    title: "MeshMe | Guia de Criação de Desafios Corporativos",
    description:
      "Aprenda a configurar e gerenciar seu programa de wellness corporativo na plataforma MeshMe. Passo a passo completo para RH.",
    type: "website",
  },
}

export default function GuiaDesafiosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />

      {/* Hero / Título */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF7816]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-[#99F700]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-block mb-6">
            <span className="bg-[#FF7816] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Para RH & Gestores
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
            Guia de Criação de
            <span className="text-[#99F700]"> Desafios Corporativos</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Como configurar e gerenciar o seu programa de wellness na plataforma
          </p>
        </div>
      </section>

      {/* Seção 1 — Visão Geral */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">Visão Geral</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
              Como a MeshMe está organizada
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* App Mobile */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Aplicativo Mobile</h3>
                  <p className="text-sm text-gray-500">Para os colaboradores</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Registro de atividades físicas",
                  "Feed social e ranking",
                  "Participação nos desafios",
                  "Criação do ambiente da empresa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#99F700] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Painel Web */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Painel Web (RH)</h3>
                  <p className="text-sm text-gray-400">Exclusivo para gestores</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Criação de desafios",
                  "Métricas e engajamento",
                  "Exportação de dados (planilha)",
                  "Liberado após criar a empresa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF7816] mt-0.5 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Configuração pelo App */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">Parte 1</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Configuração pelo Aplicativo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Criar conta",
                desc: "Baixe o app MeshMe e crie seu perfil de administrador.",
                color: "bg-[#FF7816]",
              },
              {
                step: "02",
                title: "Criar o ambiente da empresa",
                desc: "Personalize com nome, foto de perfil e imagem de capa.",
                color: "bg-[#99F700]",
              },
              {
                step: "03",
                title: "Definir código de acesso",
                desc: "Sequência numérica que os colaboradores usam para entrar. Compartilhe só com o time.",
                color: "bg-[#FF7816]",
              },
              {
                step: "04",
                title: "Criar o desafio da empresa",
                desc: "Na aba Empresa → Desafios → botão Criar Desafio.",
                color: "bg-[#99F700]",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-5 items-start"
              >
                <div
                  className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0`}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Passo {item.step} — {item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dica importante */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">
            <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Dica importante</p>
              <p className="text-amber-700">
                Crie o desafio sempre pela aba <strong>Empresa</strong> — não pelo botão da home (que gera um desafio público).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 — Configurações do Desafio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">Formulário</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Configurações do Desafio</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: <Star className="h-5 w-5" />, label: "Nome", desc: "Nome do desafio (obrigatório)" },
              { icon: <Target className="h-5 w-5" />, label: "Descrição", desc: "Opcional, mas recomendado" },
              { icon: <Calendar className="h-5 w-5" />, label: "Período", desc: "Data início + data fim (padrão: 1 mês)" },
              { icon: <Trophy className="h-5 w-5" />, label: "Meta", desc: "Pontuação individual — varia por sistema" },
            ].map((field) => (
              <div key={field.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-[#FF7816]/10 rounded-xl flex items-center justify-center text-[#FF7816] mb-4">
                  {field.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{field.label}</h3>
                <p className="text-sm text-gray-500">{field.desc}</p>
              </div>
            ))}
          </div>

          {/* Tipos de desafio */}
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <h3 className="text-white font-bold text-lg">Atenção — Dois tipos de desafio</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-[#99F700]" />
                  <span className="font-semibold text-white">Desafio em Grupo</span>
                </div>
                <p className="text-gray-400 text-sm">Público — qualquer pessoa pode entrar com o link.</p>
              </div>
              <div className="bg-[#FF7816]/10 rounded-xl p-5 border border-[#FF7816]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-[#FF7816]" />
                  <span className="font-semibold text-white">Desafio de Empresa</span>
                </div>
                <p className="text-gray-400 text-sm">Restrito — somente quem tem o código de acesso da empresa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 — Sistemas de Pontuação */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">Como pontuar</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Sistemas de Pontuação</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <CheckCircle className="h-6 w-6" />,
                system: "Dias Ativos",
                rule: "1 pt / dia",
                desc: "Só o 1º registro do dia conta. Promove regularidade e é mais justo para quem não tem tempo de treinar múltiplas vezes.",
                color: "bg-[#FF7816]",
                border: "border-[#FF7816]/30",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                system: "Total de Registros",
                rule: "1 pt / registro",
                desc: "Cada registro conta. Academia de manhã + corrida de tarde = 2 pts. Incentiva volume de atividades.",
                color: "bg-[#99F700]",
                border: "border-[#99F700]/30",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                system: "Tempo",
                rule: "1 pt / minuto",
                desc: "Cada minuto de atividade registrado vale 1 ponto. Favorece quem tem mais tempo disponível.",
                color: "bg-[#FF7816]",
                border: "border-[#FF7816]/30",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                system: "Distância",
                rule: "1 pt / km",
                desc: "Cada km percorrido vale 1 ponto. Ideal para desafios focados em corrida ou caminhada.",
                color: "bg-[#99F700]",
                border: "border-[#99F700]/30",
              },
            ].map((item) => (
              <div key={item.system} className={`bg-white rounded-2xl p-6 border ${item.border} shadow-sm`}>
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.system}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${item.color} mb-3`}>
                  {item.rule}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5 — Como Calcular a Meta */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">Planejamento</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Como Calcular a Meta Individual
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A meta é individual — cada participante vê seu próprio progresso em uma barra de porcentagem.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                <p className="font-semibold text-gray-900 mb-3">Exemplo prático — 30 dias, sistema Dias Ativos:</p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-[#FF7816]" />
                    <span>4 semanas no mês</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-[#FF7816]" />
                    <span>× 4 dias de atividade por semana</span>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-200 mt-2">
                    <ArrowRight className="h-4 w-4 text-[#99F700]" />
                    <span className="font-bold text-gray-900">= 16 pontos como meta mínima recomendada</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                <p className="text-sm text-blue-700">
                  Evite metas diárias — nem todos conseguem praticar todos os dias. Metas semanais são mais acessíveis e motivadoras.
                </p>
              </div>
            </div>

            {/* Destaques numéricos */}
            <div className="grid grid-cols-1 gap-5">
              {[
                { value: "4×", label: "atividades/semana", color: "bg-[#FF7816]" },
                { value: "16 pts", label: "meta recomendada (30 dias)", color: "bg-[#99F700]" },
                { value: "∞", label: "desafios simultâneos", color: "bg-gray-900" },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.color} rounded-2xl p-6 flex items-center gap-5`}>
                  <span className="text-4xl font-black text-white">{stat.value}</span>
                  <span className="text-white/80 text-lg font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 — Painel Web de RH */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-4">
            <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">Parte 2</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Painel Web de RH</h2>
          </div>
          <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
            Liberado automaticamente ao criar o ambiente da empresa. Acesse pelo computador (não responsivo para mobile).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Trophy className="h-6 w-6" />,
                title: "Criar e gerenciar desafios",
                desc: "Crie e edite desafios diretamente pelo painel web, com a mesma flexibilidade do app.",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Métricas de engajamento",
                desc: "Visualize top colaboradores, atividades mais praticadas, dias com mais registros e evolução semanal.",
              },
              {
                icon: <Download className="h-6 w-6" />,
                title: "Exportação de dados",
                desc: "Exporte tudo em planilha para auditoria, relatórios de RH ou apresentações internas.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Moderação de registros",
                desc: "Exclua publicações duplicadas ou indevidas de qualquer participante, com total controle.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-2xl p-6 border border-white/10 flex gap-5">
                <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 7 — Onboarding do Time */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">Time</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
              Como os Colaboradores Acessam
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden mb-10">
            {[
              { num: "01", title: "Baixar o app", desc: "Disponível na App Store e Google Play. Criar conta pessoal no MeshMe.", color: "bg-[#FF7816]" },
              { num: "02", title: "Inserir o código", desc: "Acessar a aba Empresa (3º menu) e digitar o código de acesso da empresa.", color: "bg-[#99F700]" },
              { num: "03", title: "Entrar nos desafios", desc: "Navegar para a aba Desafios dentro do ambiente da empresa e participar.", color: "bg-[#FF7816]" },
              { num: "04", title: "Registrar e competir", desc: "Registrar atividades pela home, subir no ranking e acompanhar o progresso.", color: "bg-[#99F700]" },
            ].map((step) => (
              <div key={step.num} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className={`${step.color} w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm mb-4`}>
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-stretch gap-0 mb-10">
            {[
              { num: "01", title: "Baixar o app", desc: "Disponível na App Store e Google Play. Criar conta pessoal no MeshMe.", color: "bg-[#FF7816]" },
              { num: "02", title: "Inserir o código", desc: "Acessar a aba Empresa (3º menu) e digitar o código de acesso da empresa.", color: "bg-[#99F700]" },
              { num: "03", title: "Entrar nos desafios", desc: "Navegar para a aba Desafios dentro do ambiente da empresa e participar.", color: "bg-[#FF7816]" },
              { num: "04", title: "Registrar e competir", desc: "Registrar atividades pela home, subir no ranking e acompanhar o progresso.", color: "bg-[#99F700]" },
            ].flatMap((step, i, arr) => {
              const card = (
                <div key={step.num} className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className={`${step.color} w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm mb-4`}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              )
              if (i < arr.length - 1) {
                return [card, (
                  <div key={`arrow-${i}`} className="flex items-center justify-center px-2 shrink-0">
                    <ArrowRight className="h-5 w-5 text-gray-300" />
                  </div>
                )]
              }
              return [card]
            })}
          </div>
          <div className="bg-[#99F700]/10 border border-[#99F700]/30 rounded-2xl p-5 flex gap-4 items-start">
            <Lightbulb className="h-5 w-5 text-[#99F700] shrink-0 mt-0.5" />
            <p className="text-gray-700">
              Você pode criar <strong>múltiplos desafios</strong>. Todos ficam disponíveis no ambiente da empresa para quem tiver o código.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 8 — CTA Final */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#FF7816]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 left-10 w-32 h-32 bg-[#99F700]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Pronto para começar?</h2>
          <p className="text-gray-300 text-xl mb-12">
            Configure sua empresa, crie o primeiro desafio e convide o time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                num: "1",
                title: "Baixe o app MeshMe",
                sub: "App Store / Google Play",
                color: "bg-[#FF7816]",
              },
              {
                num: "2",
                title: "Crie o ambiente",
                sub: "Configure nome, capa e código",
                color: "bg-[#99F700]",
              },
              {
                num: "3",
                title: "Lance o desafio",
                sub: "Defina meta, período e sistema",
                color: "bg-[#FF7816]",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div
                  className={`${step.color} w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg mb-4 mx-auto`}
                >
                  {step.num}
                </div>
                <h3 className="text-white font-bold mb-1">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.sub}</p>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            className="bg-[#FF7816] hover:bg-[#FF7816]/90 text-white group"
            asChild
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5511917790769&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Pr%C3%B3%20para%20empresas."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com especialista
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}
