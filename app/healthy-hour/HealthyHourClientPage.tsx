"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Users, Clock, CheckCircle, Mail, ClipboardCheck, CalendarDays } from "lucide-react"
import CompanyCarousel from "@/components/company-carousel"
import MainNavbar from "@/components/main-navbar"

export default function HealthyHourClientPage() {
  const [showGlassCard, setShowGlassCard] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlassCard(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      
      {/* Hero Section com Imagem de Fundo e Glass Card */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/healthy-hour-hero-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Glass Card Overlay com delay */}
        <div
          className={`relative z-10 max-w-4xl mx-auto px-6 transition-all duration-1000 ${
            showGlassCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">Healthy Hour</h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Sextas-feiras esportivas para conectar empresas
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://luma.com/yczdpj6b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF7816] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e66a14] transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Me Inscrever
              </a>
              <a
                href="https://luma.com/yczdpj6b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Arrow */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm font-medium">Role para baixo</span>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* O que é o Healthy Hour? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">O que é o Healthy Hour?</h2>

            {/* Video do YouTube */}
            <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/hcAUhmxAurQ"
                  title="Healthy Hour Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  O <span className="font-bold text-[#FF7816]">Healthy Hour</span> é o evento corporativo que transforma
                  suas sextas-feiras em momentos de conexão, esporte e networking.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Reunimos profissionais de diversas empresas para jogos esportivos, promovendo bem-estar, integração e
                  novas conexões em um ambiente descontraído.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-[#88db02] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Toda sexta-feira</h3>
                      <p className="text-gray-600">Das 18h às 20h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#88db02] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Arena Ibirapuera</h3>
                      <p className="text-gray-600">Av. República do Líbano, 1038 - Ibirapuera, São Paulo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-[#88db02] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Networking Real</h3>
                      <p className="text-gray-600">Conheça profissionais de diversas empresas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/healthy-hour-collage.png"
                  alt="Healthy Hour Collage"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Como funciona?</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/healthy-hour-como-funciona.png"
                  alt="Como funciona o Healthy Hour"
                  className="rounded-2xl shadow-2xl w-full object-contain"
                  style={{ maxHeight: "600px" }}
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#FF7816]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-[#FF7816] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      1
                    </span>
                    Escolha seu esporte
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beach Tennis, Futevôlei, Vôlei ou Futebol - você decide como quer se conectar.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#88db02]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-[#88db02] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      2
                    </span>
                    Inscreva-se online
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Processo rápido e fácil. Reserve sua vaga com antecedência.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#FF7816]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-[#FF7816] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      3
                    </span>
                    Apareça e jogue
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chegue à Arena Ibirapuera, conheça novos colegas e divirta-se!
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#88db02]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="bg-[#88db02] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      4
                    </span>
                    Networking pós-jogo
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Uma cerveja pós-jogo para continuar as conexões em um ambiente descontraído.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passo a Passo - Como Participar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Como Participar</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Siga estes passos simples para garantir sua vaga no Healthy Hour
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Layout - Horizontal */}
            <div className="hidden lg:flex items-start justify-between gap-8">
              {/* Passo 1 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="bg-gradient-to-br from-[#FF7816] to-[#e66a14] rounded-2xl p-8 shadow-xl mb-6 w-full hover:scale-105 transition-transform duration-300">
                  <ClipboardCheck className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Demonstre interesse na página Luma</h3>
                <p className="text-gray-600">Confirme presença de forma rápida e online.</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center pt-12">
                <svg className="w-8 h-8 text-[#88db02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Passo 2 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="bg-gradient-to-br from-[#88db02] to-[#76c102] rounded-2xl p-8 shadow-xl mb-6 w-full hover:scale-105 transition-transform duration-300">
                  <Mail className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Receba o e-mail de confirmação</h3>
                <p className="text-gray-600">Você vai receber todas as informações direto na sua caixa de entrada.</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center pt-12">
                <svg className="w-8 h-8 text-[#88db02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Passo 3 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="bg-gradient-to-br from-[#FF7816] to-[#e66a14] rounded-2xl p-8 shadow-xl mb-6 w-full hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Faça sua inscrição e escolha o esporte</h3>
                <p className="text-gray-600">Garanta sua entrada e selecione a modalidade que quer jogar.</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center pt-12">
                <svg className="w-8 h-8 text-[#88db02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Passo 4 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="bg-gradient-to-br from-[#88db02] to-[#76c102] rounded-2xl p-8 shadow-xl mb-6 w-full hover:scale-105 transition-transform duration-300">
                  <CalendarDays className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aguarde a sexta-feira</h3>
                <p className="text-gray-600">Prepare-se para viver o Healthy Hour na Arena Ibirapuera.</p>
              </div>
            </div>

            {/* Mobile Layout - Vertical */}
            <div className="lg:hidden space-y-8">
              {/* Passo 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#FF7816] to-[#e66a14] rounded-2xl p-8 shadow-xl mb-4 w-full max-w-sm">
                  <ClipboardCheck className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demonstre interesse na página Luma</h3>
                <p className="text-gray-600">Confirme presença de forma rápida e online.</p>
                <div className="my-6">
                  <svg className="w-8 h-8 text-[#88db02] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#88db02] to-[#76c102] rounded-2xl p-8 shadow-xl mb-4 w-full max-w-sm">
                  <Mail className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Receba o e-mail de confirmação</h3>
                <p className="text-gray-600">Você vai receber todas as informações direto na sua caixa de entrada.</p>
                <div className="my-6">
                  <svg className="w-8 h-8 text-[#88db02] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#FF7816] to-[#e66a14] rounded-2xl p-8 shadow-xl mb-4 w-full max-w-sm">
                  <CheckCircle className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Faça sua inscrição e escolha o esporte</h3>
                <p className="text-gray-600">Garanta sua entrada e selecione a modalidade que quer jogar.</p>
                <div className="my-6">
                  <svg className="w-8 h-8 text-[#88db02] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Passo 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#88db02] to-[#76c102] rounded-2xl p-8 shadow-xl mb-4 w-full max-w-sm">
                  <CalendarDays className="w-16 h-16 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aguarde a sexta-feira</h3>
                <p className="text-gray-600">Prepare-se para viver o Healthy Hour na Arena Ibirapuera.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que participar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Por que participar?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#FF7816] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Networking Autêntico</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conheça profissionais de diversas empresas em um ambiente descontraído e natural.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#88db02] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bem-estar e Saúde</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pratique esporte regularmente e cuide da sua saúde física e mental.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#FF7816] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Equilíbrio Vida-Trabalho</h3>
                <p className="text-gray-700 leading-relaxed">
                  Encerre a semana de trabalho de forma saudável e energizante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas Parceiras */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Empresas Parceiras</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Profissionais dessas empresas já fazem parte da nossa comunidade
          </p>

          <CompanyCarousel />
        </div>
      </section>

      {/* Visual Separator */}
      <div className="w-full h-1 bg-gradient-to-r from-[#FF7816] via-[#88db02] to-[#FF7816]"></div>

      {/* Calendário 2025 */}
      <section id="calendario" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Calendário 2025</h2>
          <p className="text-lg text-gray-700 text-center mb-12">Confira as próximas datas do Healthy Hour em 2025:</p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Card 1 - 07/11 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#88db02] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 text-[#88db02]" />
                <span className="bg-[#88db02] text-white px-3 py-1 rounded-full text-sm font-bold">Próximo</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">07 de novembro</h3>
              <p className="text-gray-600 mb-3">Arena Ibirapuera • 18h-20h</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Beach Tennis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Futevôlei
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Vôlei
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Futebol
                </li>
              </ul>
              <a
                href="https://luma.com/yczdpj6b"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#88db02] text-white text-center py-3 rounded-lg font-bold hover:bg-[#76c102] transition-colors duration-300"
              >
                Entrar na Comunidade
              </a>
            </div>

            {/* Card 2 - 21/11 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#FF7816] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 text-[#FF7816]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">21 de novembro</h3>
              <p className="text-gray-600 mb-3">Arena Ibirapuera • 18h-20h</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF7816]" />
                  Beach Tennis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF7816]" />
                  Futevôlei
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF7816]" />
                  Vôlei
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF7816]" />
                  Futebol
                </li>
              </ul>
              <a
                href="https://luma.com/yczdpj6b"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#FF7816] text-white text-center py-3 rounded-lg font-bold hover:bg-[#e66a14] transition-colors duration-300"
              >
                Entrar na Comunidade
              </a>
            </div>

            {/* Card 3 - 5/12 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#88db02] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 text-[#88db02]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5 de dezembro</h3>
              <p className="text-gray-600 mb-3">Arena Ibirapuera • 18h-20h</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Beach Tennis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Futevôlei
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Vôlei
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#88db02]" />
                  Futebol
                </li>
              </ul>
              <a
                href="https://luma.com/yczdpj6b"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#88db02] text-white text-center py-3 rounded-lg font-bold hover:bg-[#76c102] transition-colors duration-300"
              >
                Entrar na Comunidade
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              <span className="font-bold">Atenção:</span> As inscrições abrem toda segunda-feira às 12h para a
              sexta-feira da mesma semana.
            </p>
            <a
              href="https://luma.com/yczdpj6b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF7816] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e66a14] transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Entrar na Comunidade
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-20 bg-gradient-to-r from-[#FF7816] to-[#e66a14] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para transformar suas sextas-feiras?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Junte-se ao Healthy Hour e faça parte de uma comunidade que valoriza bem-estar, networking e diversão.
          </p>
          <a
            href="https://luma.com/yczdpj6b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#FF7816] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Começar Agora
          </a>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://api.whatsapp.com/send/?phone=5511917790769&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF7816] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#e66a14] transform hover:scale-105 transition-all duration-300"
        >
          Fale Conosco
        </a>
      </div>
    </div>
  )
}
