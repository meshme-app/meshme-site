"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "O que é a MeshMe e como ela funciona?",
    answer:
      "A MeshMe é uma plataforma digital que conecta colaboradores por meio do esporte. Através de desafios gamificados, torneios corporativos e comunidades esportivas, a MeshMe promove saúde, bem-estar e cultura organizacional mais engajada. Tudo funciona por meio de um app leve e intuitivo, disponível para iOS e Android.",
  },
  {
    question: "Quais empresas podem usar a MeshMe?",
    answer:
      "A MeshMe é ideal para empresas de todos os portes que buscam melhorar o clima organizacional, incentivar hábitos saudáveis e fortalecer o senso de pertencimento entre equipes. De startups a grandes corporações, qualquer empresa pode implementar iniciativas esportivas com facilidade usando o app.",
  },
  {
    question: "Quais são os principais recursos do app MeshMe?",
    answer:
      "O app oferece registro de treinos, ranking gamificado, feed social, sistema de recompensas, desafios mensais e eventos esportivos presenciais. Os gestores têm acesso a dashboards de engajamento e métricas de saúde organizacional.",
  },
  {
    question: "O que é a Liga da Firma?",
    answer:
      "A Liga da Firma é o maior torneio esportivo entre empresas do Brasil. Organizado pela MeshMe, reúne equipes corporativas para competições em modalidades como futebol, vôlei, beach tennis e corrida. É uma experiência de engajamento, networking e employer branding na prática.",
  },
  {
    question: "Como a MeshMe impacta o bem-estar dos colaboradores?",
    answer:
      "A MeshMe estimula práticas regulares de atividade física, promove conexões sociais no trabalho e melhora indicadores como engajamento, satisfação e produtividade. As empresas também conseguem medir os resultados com dados e relatórios no painel de RH.",
  },
  {
    question: "Preciso ter quadra ou estrutura interna para usar a MeshMe?",
    answer:
      "Não. A MeshMe pode ser usada 100% de forma digital com treinos individuais e desafios online. Empresas que quiserem realizar jogos presenciais podem ativar o Clube MeshMe e alugar quadras por meio da nossa rede de parceiros.",
  },
]

export default function AppFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <section
      id="app-faq"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/10 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-500 rounded-lg blur-lg opacity-20"></div>
            <h2 className="text-4xl font-bold text-gray-900 relative bg-white px-8 py-4 rounded-lg shadow-lg">
              Dúvidas frequentes
            </h2>
          </div>
          <p className="text-gray-600 mt-4 text-lg">Tire suas dúvidas sobre a plataforma MeshMe</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg mb-4 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="text-left font-semibold py-6 px-6 hover:text-primary transition-colors text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ainda tem dúvidas?</h3>
            <p className="text-gray-600 mb-4">
              Nossa equipe está pronta para ajudar você a implementar o esporte na sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5511917790769&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com especialista
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                contato@meshme.com.br
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
