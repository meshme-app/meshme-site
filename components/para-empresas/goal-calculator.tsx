"use client"

import { useState } from "react"
import { AlertTriangle, Info } from "lucide-react"

const AVG_SESSION_MINUTES = 45
const AVG_SESSION_KM = 4.5

const FREQ_NOTES: Record<number, string> = {
  1: "Muito baixo — abaixo da recomendação da OMS. Adequado para desafios de inclusão total.",
  2: "Baixo — abaixo da OMS (150min/sem), mas compatível com perfil sedentário em transição. 47% dos brasileiros praticam nessa frequência ou menos (VIGITEL 2021).",
  3: "Equilibrado — alinha com a OMS e com o perfil dos brasileiros ativos. 13% dos brasileiros praticam ao menos 3×/semana (SESI, 2023).",
  4: "Ativo — acima da média nacional. Adequado para times já engajados com saúde.",
  5: "Alto — apenas ~22% dos brasileiros praticam diariamente (SESI, 2023). Recomendado apenas para desafios com equipes muito ativas.",
}

type SysKey = "dias" | "registros" | "tempo" | "distancia"

interface SysInfo {
  label: string
  rule: string
  icon: string
  calcPts: (weeks: number, freq: number) => number
  dataText: (freq: number, weeks: number) => string
  tiers: (pts: number, freq: number) => { easy: string; mid: string; hard: string }
  breakdown: (weeks: number, freq: number, days: number, pts: number) => string[]
  easyMult: number
  hardMult: number
}

const SYS_INFO: Record<SysKey, SysInfo> = {
  dias: {
    label: "Dias Ativos",
    rule: "1 pt por dia com registro",
    icon: "📅",
    calcPts: (weeks, freq) => Math.round(weeks * freq),
    dataText: (freq, weeks) =>
      `Base de cálculo: ${freq} dias ativos/semana × ${weeks.toFixed(1)} semanas. No Brasil, 13% das pessoas ativas praticam ao menos 3×/semana (SESI, 2023). Em programas corporativos gamificados, o engajamento tende a ser ~18% maior que a média da população.`,
    tiers: (pts, freq) => ({
      easy: `${Math.max(1, freq - 1)}×/sem`,
      mid: `${freq}×/sem`,
      hard: `${Math.min(7, freq + 1)}×/sem`,
    }),
    breakdown: (weeks, freq, days, pts) => [
      `Período: <b>${days} dias</b> = <b>${weeks.toFixed(1)} semanas</b>`,
      `Frequência esperada: <b>${freq} dias ativos por semana</b>`,
      `Cálculo: <b>${weeks.toFixed(1)} × ${freq} = ${pts} pontos</b>`,
      `Cada dia em que o colaborador fizer ao menos 1 registro conta como 1 ponto — independente de quantos registros fizer naquele dia.`,
    ],
    easyMult: 0.7,
    hardMult: 1.3,
  },
  registros: {
    label: "Total de Registros",
    rule: "1 pt por registro feito",
    icon: "📋",
    calcPts: (weeks, freq) => Math.round(weeks * freq * 1.3),
    dataText: (freq, weeks) =>
      `Base de cálculo: ${freq} sessões/semana × ${weeks.toFixed(1)} semanas × 1,3 registros médios por sessão. O fator 1,3 reflete que uma parcela dos participantes fará múltiplos registros no mesmo dia (ex: academia + caminhada). Dados SESI 2023 usados para calibrar a frequência base.`,
    tiers: () => ({
      easy: "ritmo leve",
      mid: "ritmo regular",
      hard: "ritmo intenso",
    }),
    breakdown: (weeks, freq, days, pts) => {
      const sessions = Math.round(weeks * freq)
      return [
        `Período: <b>${days} dias</b> = <b>${weeks.toFixed(1)} semanas</b>`,
        `Frequência esperada: <b>${freq} sessões/semana</b> = <b>${sessions} sessões no total</b>`,
        `Fator de múltiplos registros: <b>× 1,3</b> (parcela do grupo faz 2 atividades/dia)`,
        `Cálculo: <b>${sessions} × 1,3 ≈ ${pts} pontos</b>`,
      ]
    },
    easyMult: 0.7,
    hardMult: 1.4,
  },
  tempo: {
    label: "Tempo de Atividade",
    rule: "1 pt por minuto praticado",
    icon: "⏱️",
    calcPts: (weeks, freq) => Math.round(weeks * freq * AVG_SESSION_MINUTES),
    dataText: (freq, weeks) =>
      `Base de cálculo: ${freq} sessões/semana × ${weeks.toFixed(1)} semanas × ${AVG_SESSION_MINUTES} min/sessão. Sessão média de ${AVG_SESSION_MINUTES} min é conservadora: a OMS recomenda 150min/semana total, e brasileiros praticam em média 3h/semana quando ativos (Ipsos, 2021).`,
    tiers: () => ({
      easy: "~30 min/sessão",
      mid: `~${AVG_SESSION_MINUTES} min/sessão`,
      hard: "~60 min/sessão",
    }),
    breakdown: (weeks, freq, days, pts) => {
      const sessions = Math.round(weeks * freq)
      return [
        `Período: <b>${days} dias</b> = <b>${weeks.toFixed(1)} semanas</b>`,
        `Frequência esperada: <b>${freq} sessões/semana</b> = <b>${sessions} sessões no total</b>`,
        `Duração média por sessão: <b>${AVG_SESSION_MINUTES} minutos</b> (base conservadora para Brasil corporativo)`,
        `Cálculo: <b>${sessions} × ${AVG_SESSION_MINUTES} min = ${pts} pontos</b>`,
      ]
    },
    easyMult: 0.7,
    hardMult: 1.4,
  },
  distancia: {
    label: "Distância",
    rule: "1 pt por km percorrido",
    icon: "📍",
    calcPts: (weeks, freq) => Math.round(weeks * freq * AVG_SESSION_KM),
    dataText: (freq, weeks) =>
      `Base de cálculo: ${freq} sessões/semana × ${weeks.toFixed(1)} semanas × ${AVG_SESSION_KM} km/sessão. Média de ${AVG_SESSION_KM} km por sessão considera iniciantes (3-5 km) e intermediários (5-8 km). Corrida é o esporte mais praticado no Brasil após o futebol (Ipsos, 2021).`,
    tiers: () => ({
      easy: "~3 km/sessão",
      mid: `~${AVG_SESSION_KM} km/sessão`,
      hard: "~7 km/sessão",
    }),
    breakdown: (weeks, freq, days, pts) => {
      const sessions = Math.round(weeks * freq)
      return [
        `Período: <b>${days} dias</b> = <b>${weeks.toFixed(1)} semanas</b>`,
        `Frequência esperada: <b>${freq} sessões/semana</b> = <b>${sessions} sessões no total</b>`,
        `Distância média por sessão: <b>${AVG_SESSION_KM} km</b> (perfil iniciante/intermediário brasileiro)`,
        `Cálculo: <b>${sessions} × ${AVG_SESSION_KM} km ≈ ${pts} pontos</b>`,
      ]
    },
    easyMult: 0.6,
    hardMult: 1.6,
  },
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function fmtDate(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function getDefaultDates() {
  const today = new Date()
  const end = new Date(today)
  end.setDate(today.getDate() + 30)
  return { start: fmtDate(today), end: fmtDate(end) }
}

export default function GoalCalculator() {
  const defaults = getDefaultDates()
  const [sys, setSys] = useState<SysKey>("dias")
  const [freq, setFreq] = useState(3)
  const [startDate, setStartDate] = useState(defaults.start)
  const [endDate, setEndDate] = useState(defaults.end)

  const info = SYS_INFO[sys]

  const parseResult = () => {
    if (!startDate || !endDate) return null
    const s = new Date(startDate + "T00:00:00")
    const e = new Date(endDate + "T00:00:00")
    const days = Math.round((e.getTime() - s.getTime()) / 86400000) + 1
    if (days < 1) return null
    const weeks = days / 7
    const pts = info.calcPts(weeks, freq)
    const sessions = Math.round(weeks * freq)
    const easyPts = Math.round(pts * info.easyMult)
    const hardPts = Math.round(pts * info.hardMult)
    const tiers = info.tiers(pts, freq)
    const breakdown = info.breakdown(weeks, freq, days, pts)
    return { days, weeks, pts, sessions, easyPts, hardPts, tiers, breakdown }
  }

  const result = parseResult()

  const dateWarning = (() => {
    if (!startDate || !endDate) return null
    const s = new Date(startDate + "T00:00:00")
    const e = new Date(endDate + "T00:00:00")
    const days = Math.round((e.getTime() - s.getTime()) / 86400000) + 1
    if (days < 1) return "A data de fim deve ser após a data de início."
    if (days < 7) return "Desafios muito curtos (menos de 7 dias) podem não gerar engajamento suficiente. Recomendamos ao menos 2 semanas."
    return null
  })()

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-gray-700">
        <span className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest">
          Calculadora de Meta
        </span>
        <h3 className="text-2xl font-bold text-white mt-2">
          Qual meta colocar no desafio?
        </h3>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed max-w-lg">
          Configure o período e o sistema de pontuação para receber uma recomendação baseada em dados reais de comportamento físico no Brasil.
        </p>
      </div>

      <div className="p-8 space-y-8">
        {/* Step 1 — Sistema */}
        <div>
          <p className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest mb-4">
            01 — Sistema de pontuação
          </p>
          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(SYS_INFO) as SysKey[]).map((key) => {
              const s = SYS_INFO[key]
              const active = sys === key
              return (
                <button
                  key={key}
                  onClick={() => setSys(key)}
                  className={`text-left p-4 rounded-2xl border transition-all ${
                    active
                      ? "border-[#FF7816] bg-[#FF7816]/10"
                      : "border-gray-700 bg-gray-800 hover:border-gray-600"
                  }`}
                >
                  <span className="text-xl block mb-2">{s.icon}</span>
                  <span className={`text-sm font-bold block mb-1 ${active ? "text-white" : "text-gray-300"}`}>
                    {s.label}
                  </span>
                  <span className={`text-xs font-medium ${active ? "text-[#FF7816]" : "text-gray-600"}`}>
                    {s.rule}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2 — Período */}
        <div>
          <p className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest mb-4">
            02 — Período do desafio
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Data de início
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#FF7816] transition-colors [color-scheme:dark]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Data de fim
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#FF7816] transition-colors [color-scheme:dark]"
              />
            </div>
          </div>
          {dateWarning && (
            <div className="mt-3 flex items-start gap-3 bg-amber-900/20 border border-amber-700/40 rounded-2xl p-4">
              <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-amber-300 text-sm leading-relaxed">{dateWarning}</p>
            </div>
          )}
        </div>

        {/* Step 3 — Frequência */}
        <div>
          <p className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest mb-4">
            03 — Frequência esperada dos colaboradores
          </p>
          <div className="flex items-center gap-4 flex-wrap mb-3">
            <span className="text-sm font-medium text-gray-400">Dias ativos por semana:</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((f) => (
                <button
                  key={f}
                  onClick={() => setFreq(f)}
                  className={`w-10 h-10 rounded-xl border text-sm font-bold transition-all ${
                    freq === f
                      ? "border-[#FF7816] bg-[#FF7816]/15 text-[#FF7816]"
                      : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-500 hover:text-gray-200"
                  }`}
                >
                  {f}×
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{FREQ_NOTES[freq]}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/60" />

        {/* Result */}
        {result && !dateWarning?.includes("após") ? (
          <div className="space-y-5">
            {/* Main number */}
            <div className="bg-[#FF7816]/10 border border-[#FF7816]/30 rounded-2xl px-6 py-6 flex items-center gap-5 flex-wrap">
              <span className="text-[#FF7816] font-black leading-none" style={{ fontSize: "clamp(52px,10vw,68px)" }}>
                {result.pts.toLocaleString("pt-BR")}
              </span>
              <div>
                <p className="text-white font-semibold text-base">pontos</p>
                <p className="text-gray-400 text-sm">meta mínima recomendada</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px bg-gray-700/60 rounded-2xl overflow-hidden">
              {[
                { val: result.days, lbl: "dias de desafio" },
                { val: result.weeks.toFixed(1), lbl: "semanas" },
                { val: result.sessions, lbl: "sessões estimadas" },
              ].map((s) => (
                <div key={s.lbl} className="bg-gray-800 py-5 text-center">
                  <span className="block text-2xl font-bold text-white">{s.val}</span>
                  <span className="block text-xs font-medium text-gray-500 mt-1 uppercase tracking-wider">{s.lbl}</span>
                </div>
              ))}
            </div>

            {/* Tiers */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Acessível", pts: result.easyPts, desc: result.tiers.easy, recommended: false },
                { name: "Equilibrado", pts: result.pts, desc: result.tiers.mid, recommended: true },
                { name: "Desafiador", pts: result.hardPts, desc: result.tiers.hard, recommended: false },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-4 text-center border ${
                    tier.recommended
                      ? "border-[#FF7816] bg-[#FF7816]/10"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-px -right-px bg-[#FF7816] text-white text-[9px] font-semibold px-2 py-0.5 rounded-bl-xl rounded-tr-2xl">
                      Recomendado
                    </span>
                  )}
                  <span className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${tier.recommended ? "text-[#FF7816]" : "text-gray-500"}`}>
                    {tier.name}
                  </span>
                  <span className={`block text-2xl font-black mb-1 ${tier.recommended ? "text-white" : "text-gray-300"}`}>
                    {tier.pts.toLocaleString("pt-BR")}
                  </span>
                  <span className="block text-xs text-gray-500 leading-relaxed">{tier.desc}</span>
                </div>
              ))}
            </div>

            {/* Breakdown */}
            <div className="bg-gray-800 rounded-2xl p-5">
              <p className="text-[#FF7816] font-semibold text-sm uppercase tracking-widest mb-4">
                Como chegamos nesse número
              </p>
              <div className="space-y-0 divide-y divide-gray-700/50">
                {result.breakdown.map((step, i) => (
                  <div key={i} className="flex gap-3 py-3">
                    <span className="text-[#FF7816] font-bold text-sm shrink-0 w-5 mt-0.5">{i + 1}</span>
                    <p
                      className="text-sm text-gray-400 leading-relaxed [&_b]:text-gray-200 [&_b]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: step }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Data source */}
            <div className="flex items-start gap-3 bg-gray-800/60 border border-gray-700/50 rounded-2xl p-4">
              <Info className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-500 leading-relaxed">{info.dataText(freq, result.weeks)}</p>
            </div>
          </div>
        ) : !dateWarning?.includes("após") ? (
          <div className="border border-dashed border-gray-700 rounded-2xl p-10 text-center">
            <span className="text-4xl block mb-3">🎯</span>
            <p className="text-gray-500 text-sm font-medium">Selecione as datas para calcular a meta.</p>
          </div>
        ) : null}

        {/* Source */}
        <p className="text-center text-xs text-gray-700 leading-relaxed pt-2 border-t border-gray-800">
          Fontes: SESI (2023) · Ministério da Saúde / VIGITEL 2021 · Ipsos Global Sports Survey (2021)
          · OMS recomenda ≥ 150 min/semana de atividade física moderada
        </p>
      </div>
    </div>
  )
}
