"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function TermsContent() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-20 overflow-hidden">
          <div className="w-full h-full animate-rotate-slow">
            <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-primary px-6 py-3 mb-4 skew-x-[-5deg] transform">
              <h1 className="text-4xl font-bold text-white skew-x-[5deg] transform">Termos e Condições</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Conheça os termos de uso da Liga da Firma e do aplicativo MeshMe
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {/* 1. Definições */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    1
                  </div>
                  Definições
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>"Liga da Firma":</strong> Evento esportivo corporativo organizado pela MeshMe, destinado a
                    promover integração e bem-estar entre empresas participantes.
                  </p>
                  <p>
                    <strong>"MeshMe":</strong> Aplicativo e plataforma digital de gestão esportiva corporativa,
                    desenvolvido pela empresa MeshMe Tecnologia Ltda.
                  </p>
                  <p>
                    <strong>"Participante":</strong> Pessoa física vinculada a empresa participante que se inscreve nos
                    eventos da Liga da Firma.
                  </p>
                  <p>
                    <strong>"Empresa Participante":</strong> Pessoa jurídica que contrata os serviços da Liga da Firma
                    para seus colaboradores.
                  </p>
                  <p>
                    <strong>"Organizador":</strong> MeshMe Tecnologia Ltda., responsável pela organização e execução dos
                    eventos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 2. Aceitação dos Termos */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    2
                  </div>
                  Aceitação dos Termos
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Ao se inscrever na Liga da Firma ou utilizar o aplicativo MeshMe, você concorda integralmente com
                    estes Termos e Condições.
                  </p>
                  <p>
                    Caso não concorde com qualquer disposição destes termos, você não deve participar dos eventos ou
                    utilizar nossos serviços.
                  </p>
                  <p>
                    Estes termos podem ser atualizados periodicamente, e é responsabilidade do usuário verificar as
                    versões mais recentes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 3. Inscrições e Participação */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    3
                  </div>
                  Inscrições e Participação
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>3.1 Elegibilidade:</strong> A participação é restrita a colaboradores de empresas
                    devidamente inscritas na Liga da Firma.
                  </p>
                  <p>
                    <strong>3.2 Documentação:</strong> Todos os participantes devem apresentar documentos válidos e
                    atestado médico quando solicitado.
                  </p>
                  <p>
                    <strong>3.3 Pagamento:</strong> As taxas de inscrição devem ser pagas conforme cronograma
                    estabelecido. Não há reembolso após confirmação da inscrição.
                  </p>
                  <p>
                    <strong>3.4 Cancelamento:</strong> O organizador reserva-se o direito de cancelar eventos por
                    motivos de força maior, com reembolso proporcional.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 4. Regras de Conduta */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    4
                  </div>
                  Regras de Conduta
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>4.1 Fair Play:</strong> Todos os participantes devem manter conduta esportiva e respeitosa.
                  </p>
                  <p>
                    <strong>4.2 Segurança:</strong> É obrigatório o uso de equipamentos de proteção quando exigido pela
                    modalidade.
                  </p>
                  <p>
                    <strong>4.3 Proibições:</strong> São vedados comportamentos discriminatórios, uso de substâncias
                    proibidas e condutas antisportivas.
                  </p>
                  <p>
                    <strong>4.4 Penalidades:</strong> Violações podem resultar em advertência, suspensão ou exclusão
                    definitiva dos eventos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 5. Responsabilidades e Riscos */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    5
                  </div>
                  Responsabilidades e Riscos
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>5.1 Responsabilidade do Participante:</strong> Cada participante é responsável por sua
                    condição física e aptidão para as atividades.
                  </p>
                  <p>
                    <strong>5.2 Seguro:</strong> Recomenda-se que todos os participantes possuam seguro de vida e
                    acidentes pessoais.
                  </p>
                  <p>
                    <strong>5.3 Limitação de Responsabilidade:</strong> O organizador não se responsabiliza por lesões
                    decorrentes da prática esportiva normal.
                  </p>
                  <p>
                    <strong>5.4 Emergências:</strong> Em caso de emergência médica, o organizador prestará primeiros
                    socorros e acionará serviços especializados.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 6. Uso do Aplicativo MeshMe */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    6
                  </div>
                  Uso do Aplicativo MeshMe
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>6.1 Licença de Uso:</strong> Concedemos licença limitada, não exclusiva e revogável para uso
                    do aplicativo.
                  </p>
                  <p>
                    <strong>6.2 Conta do Usuário:</strong> Você é responsável pela segurança de sua conta e senha.
                  </p>
                  <p>
                    <strong>6.3 Conteúdo:</strong> Você mantém direitos sobre o conteúdo que publica, mas concede
                    licença para uso pela plataforma.
                  </p>
                  <p>
                    <strong>6.4 Uso Adequado:</strong> É proibido usar o aplicativo para fins ilegais ou não
                    autorizados.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 7. Privacidade e Dados */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    7
                  </div>
                  Privacidade e Proteção de Dados
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>7.1 LGPD:</strong> Cumprimos integralmente a Lei Geral de Proteção de Dados (Lei
                    13.709/2018).
                  </p>
                  <p>
                    <strong>7.2 Coleta de Dados:</strong> Coletamos apenas dados necessários para prestação dos
                    serviços.
                  </p>
                  <p>
                    <strong>7.3 Uso de Dados:</strong> Seus dados são utilizados exclusivamente para organização de
                    eventos e melhorias dos serviços.
                  </p>
                  <p>
                    <strong>7.4 Compartilhamento:</strong> Não compartilhamos dados pessoais com terceiros sem
                    consentimento expresso.
                  </p>
                  <p>
                    <strong>7.5 Direitos do Titular:</strong> Você pode solicitar acesso, correção ou exclusão de seus
                    dados a qualquer momento.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 8. Propriedade Intelectual */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    8
                  </div>
                  Propriedade Intelectual
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>8.1 Direitos Autorais:</strong> Todo conteúdo da Liga da Firma e MeshMe é protegido por
                    direitos autorais.
                  </p>
                  <p>
                    <strong>8.2 Marcas:</strong> "Liga da Firma" e "MeshMe" são marcas registradas da MeshMe Tecnologia
                    Ltda.
                  </p>
                  <p>
                    <strong>8.3 Uso de Imagem:</strong> Ao participar, você autoriza o uso de sua imagem para divulgação
                    dos eventos.
                  </p>
                  <p>
                    <strong>8.4 Proibições:</strong> É vedada a reprodução não autorizada de qualquer material
                    protegido.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 9. Disposições Gerais */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    9
                  </div>
                  Disposições Gerais
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>9.1 Legislação Aplicável:</strong> Estes termos são regidos pela legislação brasileira.
                  </p>
                  <p>
                    <strong>9.2 Foro:</strong> Fica eleito o foro da Comarca de São Paulo/SP para dirimir questões
                    relacionadas a estes termos.
                  </p>
                  <p>
                    <strong>9.3 Alterações:</strong> Reservamo-nos o direito de alterar estes termos a qualquer momento.
                  </p>
                  <p>
                    <strong>9.4 Validade:</strong> Se alguma disposição for considerada inválida, as demais permanecerão
                    em vigor.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Informações de Contato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-gray-900">Endereço</p>
                        <p className="text-gray-600">Rua Doutor Renato Paes de Barros 618 Conj 1</p>
                        <p className="text-gray-600">Itaim Bibi, São Paulo - SP - 04530-000</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-gray-900">Telefone</p>
                        <p className="text-gray-600">(11) 91779-0769</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-gray-900">E-mail</p>
                        <p className="text-gray-600">ligadafirma@meshme.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-gray-900">CNPJ</p>
                        <p className="text-gray-600">MeshMe Tecnologia Ltda.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
