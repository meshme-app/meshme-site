import type { Metadata } from "next"
import Image from "next/image"
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
  Lightbulb,
  Building2,
  ImageIcon,
  Mail,
  Hash,
  UserPlus,
  Activity,
  ThumbsUp,
  FileSpreadsheet,
} from "lucide-react"
import GoalCalculator from "@/components/para-empresas/goal-calculator"

export const metadata: Metadata = {
  title: "MeshMe | Guia de Onboarding — Desafios Corporativos",
  description:
    "Guia completo de onboarding da MeshMe: passo a passo para RH configurar o programa de wellness e para colaboradores começarem a participar dos desafios.",
  openGraph: {
    title: "MeshMe | Guia de Onboarding — Desafios Corporativos",
    description:
      "Guia completo de onboarding da MeshMe: passo a passo para RH configurar o programa de wellness e para colaboradores começarem a participar dos desafios.",
    type: "website",
  },
}

/* ─────────────────────────────────────────────
   Componentes de apoio reutilizáveis
───────────────────────────────────────────── */

function SectionBadge({ text }: { text: string }) {
  return (
    <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">
      {text}
    </span>
  )
}

function SubStep({
  num,
  title,
  desc,
}: {
  num: string
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-sm font-black text-gray-500 shrink-0">
        {num}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-500 leading-relaxed mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

function ScreenshotPlaceholder({ label, src }: { label: string; src?: string }) {
  if (src) {
    return (
      <div className="mt-6">
        <Image
          src={src}
          alt={label}
          width={400}
          height={700}
          className="w-full h-auto"
        />
      </div>
    )
  }
  return (
    <div className="mt-6 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-3 py-12 px-6 text-center">
      <ImageIcon className="h-8 w-8 text-gray-300" />
      <p className="text-sm text-gray-400 font-medium">{label}</p>
    </div>
  )
}

function TipBox({ text }: { text: string }) {
  return (
    <div className="mt-6 bg-[#99F700]/10 border border-[#99F700]/30 rounded-2xl p-5 flex gap-3 items-start">
      <Lightbulb className="h-5 w-5 text-[#99F700] shrink-0 mt-0.5" />
      <p className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

/* ─────────────────────────────────────────────
   Página principal
───────────────────────────────────────────── */

export default function GuiaDesafiosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />

      {/* ── HERO ── */}
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
              Guia de Onboarding
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
            Corporate Wellness &amp;
            <span className="text-[#99F700]"> Desafios Corporativos</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Passo a passo completo para que empresas configurem o ambiente corporativo e colaboradores comecem a participar dos desafios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#empresa"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FF7816] hover:bg-[#FF7816]/90 text-white font-semibold rounded-full transition-colors"
            >
              <Building2 className="h-4 w-4 shrink-0" />
              Visão da Empresa (RH)
            </a>
            <a
              href="#colaborador"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#99F700] hover:bg-[#99F700]/90 text-gray-900 font-semibold rounded-full transition-colors"
            >
              <Smartphone className="h-4 w-4 shrink-0" />
              Visão do Colaborador
            </a>
          </div>
        </div>
      </section>

      {/* ── ÍNDICE / VISÃO GERAL ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <SectionBadge text="O que você vai encontrar" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
              Este guia tem duas partes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parte 1 */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[#FF7816] text-xs font-semibold uppercase tracking-widest">Parte 1</p>
                  <h3 className="text-white font-bold text-lg">Visão da Empresa (RH)</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Criar conta no aplicativo",
                  "Criar e configurar a empresa",
                  "Criar o desafio corporativo",
                  "Enviar código aos colaboradores",
                  "Gerir dados pelo Painel de RH",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF7816]/20 flex items-center justify-center text-[#FF7816] text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Parte 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center shrink-0">
                  <Smartphone className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <p className="text-[#99F700] text-xs font-semibold uppercase tracking-widest">Parte 2</p>
                  <h3 className="text-gray-900 font-bold text-lg">Visão do Colaborador</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Receber o código de convite",
                  "Baixar o app e criar conta",
                  "Entrar na empresa com o código",
                  "Visualizar e participar do desafio",
                  "Publicar atividades no feed",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#99F700]/20 flex items-center justify-center text-gray-700 text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PARTE 1 — VISÃO DA EMPRESA / RH
      ════════════════════════════════════════ */}
      <section id="empresa" className="py-6 bg-[#FF7816] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl flex items-center gap-4">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Parte 1</p>
            <h2 className="text-white font-bold text-xl">Visão da Empresa — RH / Administrador</h2>
          </div>
        </div>
      </section>

      {/* ── P1 · Passo 1 — Criar conta ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0">
              1
            </div>
            <div>
              <p className="text-[#FF7816] text-xs font-semibold uppercase tracking-widest">Passo 1</p>
              <h3 className="text-2xl font-bold text-gray-900">Criar conta na plataforma</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title="Baixar o app da MeshMe"
                desc="Abra a App Store (iPhone) ou Google Play (Android) e pesquise por &quot;MeshMe&quot;. Faça o download gratuito."
              />
              <SubStep
                num="02"
                title='Clique em "Criar conta"'
                desc="Na tela inicial, selecione a opção de cadastro de novo usuário."
              />
              <SubStep
                num="03"
                title="Preencha as informações pessoais"
                desc="Faça login social (Google/Apple) ou use e-mail e senha. Insira seus dados básicos e confirme o e-mail pelo link enviado para sua caixa de entrada."
              />
              <SubStep
                num="04"
                title="Acesse a conta"
                desc="Você será redirecionado automaticamente no app após confirmar o e-mail de cadastro."
              />
            </div>
            <ScreenshotPlaceholder label="Print da tela de cadastro / login do app" src="/images/Visão da Empresa RH  Administrador/login do app.png" />
          </div>
        </div>
      </section>

      {/* ── P1 · Passo 2 — Criar empresa ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0">
              2
            </div>
            <div>
              <p className="text-[#FF7816] text-xs font-semibold uppercase tracking-widest">Passo 2</p>
              <h3 className="text-2xl font-bold text-gray-900">Criar e configurar a empresa</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title='Acesse a seção "Empresas"'
                desc='Na barra de navegação, acesse o menu "Empresa" e toque no botão "Criar empresa".'
              />
              <SubStep
                num="02"
                title="Preencha os dados da empresa"
                desc="Insira o nome da empresa, logotipo, imagem de capa e o código de acesso que será usado pelos colaboradores para ingressar."
              />
              <SubStep
                num="03"
                title="Salve e confirme a criação"
                desc="A empresa estará criada e visível para que os colaboradores acessem via o código que você definiu."
              />
              <TipBox text="O <strong>código de acesso</strong> é uma sequência numérica definida por você na criação da empresa. Compartilhe apenas com os colaboradores autorizados para evitar acessos indevidos." />
            </div>
            <ScreenshotPlaceholder label="Print da tela de criação de empresa no app" src="/images/Visão da Empresa RH  Administrador/Print da tela de criação de empresa no app.png" />
          </div>
        </div>
      </section>

      {/* ── P1 · Passo 3 — Criar desafio ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0">
              3
            </div>
            <div>
              <p className="text-[#FF7816] text-xs font-semibold uppercase tracking-widest">Passo 3</p>
              <h3 className="text-2xl font-bold text-gray-900">Criar o desafio corporativo</h3>
            </div>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Dentro do perfil da sua empresa, acesse a aba <strong>Desafios</strong> e siga os passos abaixo:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title='Clique em "Criar desafio da empresa"'
                desc="Esse tipo de desafio é visível apenas para colaboradores da sua empresa — diferente dos desafios públicos da plataforma."
              />
              <SubStep
                num="02"
                title="Defina o nome e a descrição"
                desc="Escreva o nome do desafio, uma descrição motivacional, a data de início e fim, e uma meta de pontuação individual para que cada colaborador veja sua barra de progresso."
              />
              <SubStep
                num="03"
                title="Configure as métricas de pontuação"
                desc="Escolha uma ou mais métricas: dias ativos, duração, distância ou registros totais. Veja a tabela ao lado para decidir qual faz mais sentido para o seu programa."
              />
              <SubStep
                num="04"
                title="Publique o desafio"
                desc='Revise todas as informações e clique em "Criar". O desafio ficará visível para os colaboradores assim que eles ingressarem na empresa.'
              />
            </div>
            <ScreenshotPlaceholder label="Print da tela de criação de desafio no app" src="/images/Visão da Empresa RH  Administrador/Print da tela de criação de desafio no app.png" />
          </div>

          {/* Tabela de métricas */}
          <div className="mt-12">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Resumo dos sistemas de pontuação disponíveis</h4>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Métrica</th>
                    <th className="text-left px-5 py-4 font-semibold">O que mede</th>
                    <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">Exemplo de uso</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      icon: <CheckCircle className="h-4 w-4 text-[#99F700]" />,
                      metric: "Dias Ativos",
                      measures: "Conta apenas o 1º registro de cada dia",
                      example: '"Seja ativo 15 dias neste mês"',
                    },
                    {
                      icon: <Clock className="h-4 w-4 text-[#FF7816]" />,
                      metric: "Tempo",
                      measures: "Total de minutos de atividade registrados",
                      example: '"Acumule 600 minutos de exercício"',
                    },
                    {
                      icon: <MapPin className="h-4 w-4 text-[#99F700]" />,
                      metric: "Distância",
                      measures: "Total de quilômetros percorridos",
                      example: '"Percorra 50 km durante o desafio"',
                    },
                    {
                      icon: <BarChart3 className="h-4 w-4 text-[#FF7816]" />,
                      metric: "Registros",
                      measures: "Quantidade total de atividades postadas",
                      example: '"Faça 20 publicações no mês"',
                    },
                  ].map((row, i) => (
                    <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          {row.icon}
                          {row.metric}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-gray-600">{row.measures}</td>
                      <td className="px-5 py-4 text-gray-500 italic">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculadora de Meta ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <SectionBadge text="Planejamento" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
              Calculadora de Meta Individual
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              A meta é individual — cada participante vê seu próprio progresso em uma barra de porcentagem. Use a calculadora para definir a pontuação ideal para o seu desafio.
            </p>
          </div>
          <GoalCalculator />
        </div>
      </section>

      {/* ── P1 · Passo 4 — Enviar código ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0">
              4
            </div>
            <div>
              <p className="text-[#FF7816] text-xs font-semibold uppercase tracking-widest">Passo 4</p>
              <h3 className="text-2xl font-bold text-gray-900">Enviar o código para os colaboradores</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title="Localize o código da empresa"
                desc='No aplicativo, acesse a aba "Informações" dentro do perfil da empresa e copie o código único.'
              />
              <SubStep
                num="02"
                title="Copie o código de acesso"
                desc='O código é uma combinação única. Clique em "Copiar código" para tê-lo pronto para compartilhar.'
              />
              <SubStep
                num="03"
                title="Compartilhe com os colaboradores"
                desc="Envie por e-mail corporativo, grupo interno (Slack, Teams, WhatsApp) ou inclua em comunicados de RH."
              />
              <SubStep
                num="04"
                title="Oriente os colaboradores"
                desc='Instrua-os a baixar o app MeshMe, criar conta e inserir o código na seção "Empresas" do aplicativo.'
              />
            </div>
            <ScreenshotPlaceholder label="Print da tela com o código da empresa no app" src="/images/Visão da Empresa RH  Administrador/Print da tela com o código da empresa no app.png" />
          </div>

          {/* Template de mensagem */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-[#FF7816]" />
              <h4 className="font-bold text-gray-900">Modelo de mensagem para colaboradores</h4>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 relative">
              <div className="absolute top-4 right-4 bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full">
                Copie e adapte
              </div>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                {`Olá, [Nome]! 👋

Estamos lançando nosso programa de wellness corporativo na MeshMe! Para participar dos desafios de saúde e atividade física da empresa, siga os passos:

1. Baixe o app MeshMe (iOS ou Android)
2. Crie sua conta com seu e-mail
3. Acesse "Empresas" e insira o código: [CÓDIGO-DA-EMPRESA]
4. Clique em participar no desafio corporativo e comece a registrar suas atividades! 🏃

Qualquer dúvida, entre em contato com o RH. Bora se movimentar! 💪`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── P1 · Passo 5 — Painel de RH ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#FF7816] rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0">
              5
            </div>
            <div>
              <p className="text-[#FF7816] text-xs font-semibold uppercase tracking-widest">Passo 5</p>
              <h3 className="text-2xl font-bold text-gray-900">Gestão de dados pelo Painel de RH</h3>
            </div>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl text-sm">
            Após os colaboradores ingressarem e começarem a participar dos desafios, o painel de RH oferece uma visão completa do engajamento.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title="Acesse o Painel Corporativo"
                desc="Assim que você cria o ambiente da empresa pelo aplicativo, seu e-mail ganha acesso automático ao painel web de RH — acessível por navegador usando o mesmo e-mail da conta."
              />
              <SubStep
                num="02"
                title="Monitore publicações e interações"
                desc="Acompanhe o volume de atividades publicadas no feed e o nível de engajamento entre os colaboradores."
              />
              <SubStep
                num="03"
                title="Exporte relatórios"
                desc="Gere uma planilha com os dados consolidados do desafio selecionado para apresentar aos gestores ou para registros internos de RH."
              />
              <SubStep
                num="04"
                title="Criar desafios pelo painel"
                desc="Também é possível criar novos desafios diretamente pelo painel de RH, seguindo um fluxo semelhante ao do aplicativo. Acesse a aba Desafios e crie."
              />
              <SubStep
                num="05"
                title="Gerencie participantes"
                desc="Na aba Colaboradores, você pode inserir uma lista de e-mails autorizados. Apenas e-mails cadastrados conseguem ingressar — mesmo que a pessoa tenha o código. É uma barreira extra de segurança, mas opcional."
              />
            </div>
            <div className="space-y-5">
              <ScreenshotPlaceholder label="Print do painel de RH — visão geral de engajamento" src="/images/Visão da Empresa RH  Administrador/Print do painel de RH — visão geral de engajamento.png" />
              <ScreenshotPlaceholder label="Print do painel de RH — ranking e exportação de dados" src="/images/Visão da Empresa RH  Administrador/Print do painel de RH — ranking e exportação de dados.png" />
            </div>
          </div>

          {/* Tabela de indicadores */}
          <div className="mt-12">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Principais dados disponíveis no Painel de RH</h4>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Indicador</th>
                    <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      icon: <Trophy className="h-4 w-4 text-[#FF7816]" />,
                      name: "Ranking do desafio",
                      desc: "Classificação dos participantes conforme a métrica do desafio",
                    },
                    {
                      icon: <Activity className="h-4 w-4 text-[#99F700]" />,
                      name: "Volume de publicações",
                      desc: "Total de atividades postadas no feed pelos colaboradores",
                    },
                    {
                      icon: <BarChart3 className="h-4 w-4 text-[#FF7816]" />,
                      name: "Histórico de modalidades",
                      desc: "Quais são as modalidades mais praticadas pela sua equipe",
                    },
                    {
                      icon: <FileSpreadsheet className="h-4 w-4 text-[#99F700]" />,
                      name: "Exportação de dados",
                      desc: "Planilha com dados consolidados por desafio para relatórios de RH",
                    },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          {row.icon}
                          {row.name}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-gray-600">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <TipBox text="Compartilhe os resultados mensalmente com as lideranças para manter o programa de wellness como prioridade estratégica e aumentar a adesão ao longo do tempo." />
        </div>
      </section>

      {/* ════════════════════════════════════════
          PARTE 2 — VISÃO DO COLABORADOR
      ════════════════════════════════════════ */}
      <section id="colaborador" className="py-6 bg-[#99F700] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl flex items-center gap-4">
          <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center shrink-0">
            <Smartphone className="h-5 w-5 text-gray-900" />
          </div>
          <div>
            <p className="text-gray-700 text-xs font-semibold uppercase tracking-widest">Parte 2</p>
            <h2 className="text-gray-900 font-bold text-xl">Visão do Colaborador</h2>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-gray-600 max-w-2xl">
            Você recebeu um código da sua empresa e quer começar a participar dos desafios? Siga este guia rápido e comece a se movimentar com seus colegas!
          </p>
        </div>
      </section>

      {/* ── P2 · Passo 1 — Receber código ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center text-gray-900 font-black text-xl shrink-0">
              1
            </div>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Passo 1</p>
              <h3 className="text-2xl font-bold text-gray-900">Receber e guardar o código de convite</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O time de RH da sua empresa vai enviar um código de acesso por e-mail, WhatsApp ou outro canal de comunicação interno.
              </p>
              <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center gap-3">
                <Hash className="h-8 w-8 text-[#99F700]" />
                <p className="text-gray-400 text-sm">Código de acesso</p>
                <p className="text-3xl font-black text-white tracking-widest font-mono">[CÓDIGO]</p>
                <p className="text-gray-500 text-xs text-center mt-2">
                  Guarde este código! Você vai precisar dele na etapa 3.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
              <p className="font-semibold text-gray-900">Onde você pode receber o código:</p>
              {[
                "E-mail corporativo",
                "Grupo de WhatsApp ou Slack da empresa",
                "Comunicado interno de RH",
                "Teams ou outro canal de comunicação",
              ].map((channel) => (
                <div key={channel} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-[#99F700] shrink-0" />
                  <span className="text-sm text-gray-600">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── P2 · Passo 2 — Baixar app ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center text-gray-900 font-black text-xl shrink-0">
              2
            </div>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Passo 2</p>
              <h3 className="text-2xl font-bold text-gray-900">Baixar o app e criar sua conta</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title="Baixe o app MeshMe"
                desc='Acesse a App Store (iPhone) ou Google Play (Android) e busque por "MeshMe". Faça o download gratuito.'
              />
              <SubStep
                num="02"
                title='Toque em "Criar conta"'
                desc="Na tela inicial, selecione a opção de cadastro de novo usuário."
              />
              <SubStep
                num="03"
                title="Preencha seus dados"
                desc="Informe seu nome, e-mail e crie uma senha segura."
              />
              <SubStep
                num="04"
                title="Confirme seu e-mail"
                desc="Acesse seu e-mail e clique no link de confirmação enviado pela MeshMe para ativar sua conta."
              />
            </div>
            <ScreenshotPlaceholder label="Print da tela de cadastro no app (visão do colaborador)" src="/images/Visão do Colaborador/Print da tela de cadastro no app (visão do colaborador).png" />
          </div>
        </div>
      </section>

      {/* ── P2 · Passo 3 — Inserir código ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center text-gray-900 font-black text-xl shrink-0">
              3
            </div>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Passo 3</p>
              <h3 className="text-2xl font-bold text-gray-900">Entrar na empresa com o código</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title='Acesse o menu "Empresas" no app'
                desc='Localize a seção "Empresas" na barra de navegação do app.'
              />
              <SubStep
                num="02"
                title='Toque em "Inserir Código"'
                desc="Selecione a opção para vincular-se a uma empresa usando um código de convite."
              />
              <SubStep
                num="03"
                title="Digite o código recebido"
                desc="Insira o código que o RH enviou para você. Certifique-se de digitar corretamente, sem espaços."
              />
              <SubStep
                num="04"
                title='Confirme e pronto!'
                desc='Toque em "Confirmar" ou "Entrar". Você estará vinculado à empresa e poderá ver os desafios corporativos disponíveis.'
              />
              <TipBox text="Se o código não funcionar, verifique se não há espaços antes ou depois. Em caso de dúvida, solicite um novo código ao RH." />
            </div>
            <ScreenshotPlaceholder label="Print da tela de inserção de código da empresa no app" src="/images/Visão do Colaborador/Print da tela de inserção de código da empresa no app.png" />
          </div>
        </div>
      </section>

      {/* ── P2 · Passo 4 — Participar do desafio ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center text-gray-900 font-black text-xl shrink-0">
              4
            </div>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Passo 4</p>
              <h3 className="text-2xl font-bold text-gray-900">Visualizar e participar do desafio corporativo</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title='Acesse a aba "Desafios"'
                desc='No menu da empresa, toque em "Desafios". Ali estão os desafios corporativos disponíveis da sua empresa.'
              />
              <SubStep
                num="02"
                title="Toque no desafio da empresa"
                desc="Selecione o desafio corporativo para ver todos os detalhes: objetivo, métricas de pontuação e datas."
              />
              <SubStep
                num="03"
                title="Leia a descrição"
                desc="Verifique qual métrica será usada (dias ativos, minutos, quilômetros ou número de registros) e quais atividades são aceitas."
              />
              <SubStep
                num="04"
                title='Toque em "Participar"'
                desc='Confirme sua participação tocando no botão "Participar". A partir deste momento, suas atividades registradas começarão a contar para o desafio!'
              />
              <SubStep
                num="05"
                title="Acompanhe seu progresso"
                desc="Dentro do desafio, você pode ver seu ranking em relação aos colegas e o quanto já avançou em direção à meta individual."
              />
              <TipBox text="Você pode participar do desafio corporativo e de outros desafios da plataforma ao mesmo tempo!" />
            </div>
            <ScreenshotPlaceholder label="Print da tela do desafio corporativo no app (ranking e progresso)" src="/images/Visão do Colaborador/Print da tela do desafio corporativo no app (ranking e progresso).png" />
          </div>
        </div>
      </section>

      {/* ── P2 · Passo 5 — Registrar atividades ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#99F700] rounded-xl flex items-center justify-center text-gray-900 font-black text-xl shrink-0">
              5
            </div>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Passo 5</p>
              <h3 className="text-2xl font-bold text-gray-900">Registrar atividades e publicar no feed</h3>
            </div>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl text-sm">
            Agora é hora de começar a se movimentar! Veja como registrar suas atividades:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <SubStep
                num="01"
                title='Toque no botão "+"'
                desc="Na tela inicial ou no feed, use o botão de nova publicação para iniciar um registro de atividade."
              />
              <SubStep
                num="02"
                title="Escolha o tipo de atividade"
                desc="Selecione o esporte ou atividade física que você realizou: corrida, caminhada, ciclismo, musculação, natação, entre outros."
              />
              <SubStep
                num="03"
                title="Preencha os dados da atividade"
                desc="Informe a duração (em minutos) e, se aplicável, a distância percorrida (em km). Esses dados são usados para calcular sua pontuação no desafio."
              />
              <SubStep
                num="04"
                title="Adicione uma foto ou descrição (opcional)"
                desc="Torne seu registro mais pessoal! Adicione uma foto do treino ou uma mensagem motivacional."
              />
              <SubStep
                num="05"
                title="Publique no feed"
                desc="Toque em &quot;Publicar&quot;. Sua atividade aparecerá no feed social da empresa e contabilizará pontos para o desafio corporativo."
              />
              <SubStep
                num="06"
                title="Interaja com os colegas"
                desc="Curta e comente as atividades dos seus colegas no feed. O engajamento social é parte essencial do programa!"
              />
            </div>
            <ScreenshotPlaceholder label="Print da tela de registro de atividade no app" src="/images/Visão do Colaborador/Print da tela de registro de atividade no app.png" />
          </div>
        </div>
      </section>

      {/* ── P2 · Tabela resumo da jornada ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <SectionBadge text="Resumo" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
              Jornada completa do colaborador
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl w-10">Etapa</th>
                  <th className="text-left px-5 py-4 font-semibold">Ação</th>
                  <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    icon: <Hash className="h-4 w-4 text-[#99F700]" />,
                    step: "1",
                    action: "Receber o código de convite do RH",
                    result: "Código em mãos para vincular à empresa",
                  },
                  {
                    icon: <Smartphone className="h-4 w-4 text-[#FF7816]" />,
                    step: "2",
                    action: "Baixar o app e criar conta",
                    result: "Conta ativa na plataforma MeshMe",
                  },
                  {
                    icon: <Building2 className="h-4 w-4 text-[#99F700]" />,
                    step: "3",
                    action: "Inserir o código e entrar na empresa",
                    result: "Vinculado à empresa e ao programa de wellness",
                  },
                  {
                    icon: <Trophy className="h-4 w-4 text-[#FF7816]" />,
                    step: "4",
                    action: 'Visualizar o desafio e clicar em "Participar"',
                    result: "Participação confirmada e pontuação iniciada",
                  },
                  {
                    icon: <ThumbsUp className="h-4 w-4 text-[#99F700]" />,
                    step: "5",
                    action: "Registrar atividades e publicar no feed",
                    result: "Pontos acumulados e interação com colegas",
                  },
                ].map((row, i) => (
                  <tr key={row.step} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4">
                      <div className="w-8 h-8 rounded-full bg-[#99F700]/20 flex items-center justify-center font-black text-gray-700 text-sm">
                        {row.step}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-900 font-medium">
                      <div className="flex items-center gap-2">
                        {row.icon}
                        {row.action}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
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
              { num: "1", title: "Baixe o app MeshMe", sub: "App Store / Google Play", color: "bg-[#FF7816]" },
              { num: "2", title: "Crie o ambiente", sub: "Configure nome, capa e código", color: "bg-[#99F700]", textColor: "text-gray-900" },
              { num: "3", title: "Lance o desafio", sub: "Defina meta, período e sistema", color: "bg-[#FF7816]" },
            ].map((step) => (
              <div key={step.num} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div
                  className={`${step.color} w-10 h-10 rounded-xl flex items-center justify-center ${step.textColor ?? "text-white"} font-black text-lg mb-4 mx-auto`}
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
