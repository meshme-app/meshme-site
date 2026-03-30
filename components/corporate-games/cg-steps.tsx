"use client"

const steps = [
  {
    number: "01",
    title: "Empresa entra em contato",
    description: "A empresa demonstra interesse e entra em contato com a organização do Corporate Games.",
  },
  {
    number: "02",
    title: "Organização apresenta o evento",
    description: "Nossa equipe apresenta o evento, formatos de participação e tira todas as dúvidas.",
  },
  {
    number: "03",
    title: "Empresa escolhe modalidades",
    description: "A empresa define quais modalidades esportivas quer participar conforme seu perfil.",
  },
  {
    number: "04",
    title: "Cadastro e confirmação",
    description: "Os colaboradores são inscritos e a delegação está pronta para viver a experiência.",
  },
]

export default function CGSteps() {
  return (
    <section id="como-funciona" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#B91C1C]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#B91C1C] font-semibold text-sm tracking-wider uppercase mb-4 block">
            PASSO A PASSO
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            COMO SE INSCREVER
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            O processo de inscrição foi pensado para ser simples e direto. Veja como levar sua empresa para o Corporate Games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              {/* Number */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#B91C1C] text-white font-black text-xl rounded-xl mb-4">
                {step.number}
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
