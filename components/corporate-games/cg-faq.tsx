"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqItems = [
  {
    question: "O que é o Corporate Games?",
    answer:
      "O Corporate Games é uma olimpíada corporativa global que une empresas através do esporte. Com presença em mais de 20 países e mais de 1 milhão de participantes no mundo, o evento promove integração, bem-estar e employer branding para organizações de todos os portes.",
  },
  {
    question: "Como minha empresa pode participar?",
    answer:
      "O processo é simples: entre em contato através do formulário de inscrição, nossa equipe apresentará o evento e os formatos de participação, sua empresa escolhe as modalidades e faz o cadastro dos colaboradores. Pronto, a delegação está formada!",
  },
  {
    question: "Quais modalidades esportivas estão disponíveis?",
    answer:
      "O Corporate Games São Paulo oferece 12 modalidades: Natação, Beach Tennis, Tênis de Mesa, Tênis, Futevôlei, Corrida, Vôlei de Praia, Futebol Society, Padel, Basquete, Ciclismo e CrossFit. A empresa pode escolher participar em quantas modalidades desejar.",
  },
  {
    question: "É necessário ter experiência prévia nas modalidades?",
    answer:
      "Não! O Corporate Games é inclusivo e aceita participantes de todos os níveis. O foco está na integração e no espírito esportivo, não apenas na competição de alto rendimento.",
  },
  {
    question: "Onde e quando acontece o evento?",
    answer:
      "O Corporate Games São Paulo acontece anualmente em São Paulo, em locais de alto padrão que comportam todas as modalidades. As datas específicas são divulgadas com antecedência para que as empresas possam se organizar.",
  },
  {
    question: "Qual é o investimento para participar?",
    answer:
      "O investimento varia de acordo com o número de modalidades e participantes. Entre em contato para receber uma proposta personalizada de acordo com o perfil da sua empresa.",
  },
  {
    question: "Que benefícios minha empresa recebe além das competições?",
    answer:
      "Além das competições, sua empresa recebe: materiais de comunicação interna prontos, acesso ao aplicativo de desafios gamificados, painel do RH com métricas e dados, espaço para ativação de marca, networking com outras empresas e conteúdo para alimentar canais internos durante todo o ano.",
  },
  {
    question: "Posso inscrever mais de uma equipe por modalidade?",
    answer:
      "Sim! Empresas podem inscrever múltiplas equipes em cada modalidade, aumentando a participação e o engajamento dos colaboradores.",
  },
]

export default function CGFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Corporate Games
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:text-[#B91C1C] transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Não encontrou o que procurava?</p>
            <Button
              variant="link"
              className="text-[#B91C1C] hover:text-[#991B1B] font-semibold"
              asChild
            >
              <a href="mailto:corporategames@meshme.com.br">
                corporategames@meshme.com.br
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
