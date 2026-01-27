"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Como minha empresa pode participar da Liga da Firma?",
    answer:
      "Para participar da Liga da Firma, é só preencher o formulário de pré-inscrição disponível no nosso site. Essa etapa serve apenas para que você receba mais informações sobre o evento. Depois disso, nossa equipe entrará em contato para explicar tudo direitinho e orientar o processo completo de inscrição das equipes.",
  },
  {
    question: "Qual é o investimento necessário para participar?",
    answer:
      "O investimento varia de acordo com o número de modalidades e atletas que sua empresa deseja inscrever. Oferecemos pacotes personalizados para atender às necessidades de cada empresa. Entre em contato conosco para receber uma proposta detalhada.",
  },
  {
    question: "Quais modalidades esportivas estão disponíveis?",
    answer:
      "Atualmente, oferecemos competições nas seguintes modalidades: Futebol Society, Vôlei de praia 4x4, Tennis, Beach Tennis, Futevôlei, Padel, Tênis de Mesa, Truco, Sinuca. Estamos sempre abertos a sugestões para incluir novas modalidades.",
  },
  {
    question: "É necessário ter experiência prévia nas modalidades?",
    answer:
      "Não é necessário ter experiência prévia. A Liga da Firma é inclusiva e visa promover a prática esportiva para todos os níveis de habilidade. Temos categorias diferentes para acomodar desde iniciantes até atletas mais experientes.",
  },
  {
    question: "Onde acontecem os jogos e competições?",
    answer:
      "Os jogos acontecem na Arena Ibirapuera (Av. Dr. Dante Pazzanese, 421 - Ibirapuera, São Paulo - SP, 04012-180).",
  },
  {
    question: "Qual é a duração do evento?",
    answer:
      "Os jogos da Liga da Firma acontecem aos finais de semana e o calendário completo é divulgado após o encerramento das inscrições. Geralmente, cada torneio acontece em um único final de semana (de sexta a domingo), mas esse formato pode variar de acordo com o número de empresas inscritas e a modalidade escolhida.",
  },
  {
    question: "Minha empresa pode inscrever mais de uma equipe por modalidade?",
    answer:
      "Sim, sua empresa pode inscrever múltiplas equipes por modalidade, dependendo do número de colaboradores interessados. Isso permite maior participação e engajamento dos funcionários.",
  },
  {
    question: "Existe algum benefício para as empresas participantes além das competições?",
    answer:
      "Além das competições esportivas, a Liga da Firma oferece networking entre empresas, exposição da marca, conteúdo para comunicação interna e externa, e relatórios de engajamento dos colaboradores, que podem ser utilizados em programas de bem-estar corporativo.",
  },
  {
    question: "Quem pode participar da Liga?",
    answer:
      "Cada edição da Liga da Firma é voltada para um segmento específico, o que garante jogos entre empresas com perfis parecidos e mais chance de conexão real. No InterConsultorias, participam empresas de áreas como: Gestão Estratégica, Tecnologia e Inovação, Recursos Humanos, Finanças e Tributos, Jurídico e Regulação, Marketing e Comunicação, Sustentabilidade e ESG, M&A, Riscos e Segurança, Logística e Consultorias Setoriais. Já o InterTech reúne startups e empresas de tecnologia como: Hubs de inovação, Indústria 4.0, Desenvolvedoras, SaaS, Provedoras de soluções e Cibersegurança.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <section id="faq" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-[2deg] transform origin-bottom-left"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary px-4 py-2 mb-2 skew-x-[-5deg] transform">
            <h2 className="text-3xl font-bold text-white skew-x-[5deg] transform">Perguntas Frequentes</h2>
          </div>
          <p className="text-gray-600 mt-2">Tire suas dúvidas sobre a Liga da Firma</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 hover:bg-white/80 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:text-primary transform hover:translate-x-1 transition-transform">
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
              className="text-primary hover:text-primary/80 transform hover:scale-105 transition-transform"
            >
              ligadafirma@meshme.com.br
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
