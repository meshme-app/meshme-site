"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "O que é o Corporate Games?",
    answer:
      "O Corporate Games é a maior olimpíada corporativa do Brasil, uma marca global presente em mais de 20 países. É um evento de esporte, cultura, employer branding e team building para empresas que querem engajar colaboradores, fortalecer pertencimento e gerar histórias internas que mobilizam RH e liderança.",
  },
  {
    question: "Como minha empresa pode participar do Corporate Games?",
    answer:
      "Para participar do Corporate Games, é só preencher o formulário de pré-inscrição disponível no nosso site. Essa etapa serve apenas para que você receba mais informações sobre o evento. Depois disso, nossa equipe entrará em contato para explicar tudo direitinho e orientar o processo completo de inscrição das equipes.",
  },
  {
    question: "Qual é o investimento necessário para participar?",
    answer:
      "O investimento varia de acordo com o número de modalidades e atletas que sua empresa deseja inscrever. Oferecemos pacotes personalizados para atender às necessidades de cada empresa. Entre em contato conosco para receber uma proposta detalhada.",
  },
  {
    question: "Quais modalidades esportivas estão disponíveis?",
    answer:
      "Atualmente, oferecemos competições nas seguintes modalidades: Futebol Society, Vôlei de praia 4x4, Tennis, Beach Tennis, Futevôlei, Padel, Tênis de Mesa, Natação, Corrida, Basquete 3x3, Queimada e E-sports. Estamos sempre abertos a sugestões para incluir novas modalidades.",
  },
  {
    question: "É necessário ter experiência prévia nas modalidades?",
    answer:
      "Não é necessário ter experiência prévia. O Corporate Games é inclusivo e visa promover a prática esportiva para todos os níveis de habilidade. Temos categorias diferentes para acomodar desde iniciantes até atletas mais experientes.",
  },
  {
    question: "Onde acontecem os jogos e competições?",
    answer:
      "Os jogos acontecem na Arena Ibirapuera (Av. Dr. Dante Pazzanese, 421 - Ibirapuera, São Paulo - SP, 04012-180).",
  },
  {
    question: "Qual é a duração do evento?",
    answer:
      "O Corporate Games acontece ao longo de um final de semana (sexta a domingo). A cerimônia de abertura acontece na sexta-feira, as competições no sábado e domingo, com encerramento e premiação no domingo à noite.",
  },
  {
    question: "Minha empresa pode inscrever mais de uma equipe por modalidade?",
    answer:
      "Sim, sua empresa pode inscrever múltiplas equipes por modalidade, dependendo do número de colaboradores interessados. Isso permite maior participação e engajamento dos funcionários.",
  },
  {
    question: "Qual a relação do Corporate Games com a MeshMe?",
    answer:
      "A MeshMe é a operadora oficial do Corporate Games no Brasil a partir de 2026. Isso significa mais estrutura, tecnologia e qualidade na experiência para empresas, patrocinadores e participantes.",
  },
  {
    question: "Existe algum benefício para as empresas participantes além das competições?",
    answer:
      "Além das competições esportivas, o Corporate Games oferece networking entre empresas, exposição da marca, conteúdo para comunicação interna e externa, e relatórios de engajamento dos colaboradores, que podem ser utilizados em programas de bem-estar corporativo.",
  },
]

export default function CGFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <section id="faq" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#B91C1C]/5 skew-y-[2deg] transform origin-bottom-left"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#B91C1C] px-4 py-2 mb-2 skew-x-[-5deg] transform">
            <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Perguntas Frequentes</h2>
          </div>
          <p className="text-gray-600 mt-2">Tire suas dúvidas sobre o Corporate Games</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 hover:bg-white/80 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:text-[#B91C1C] transform hover:translate-x-1 transition-transform">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-gray-600">Não encontrou o que procurava? Entre em contato conosco</p>
            <Button
              variant="link"
              className="text-[#B91C1C] hover:text-[#B91C1C]/80 transform hover:scale-105 transition-transform"
            >
              corporategames@meshme.com.br
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
