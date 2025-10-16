"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import Link from "next/link"

export default function UKCorporateGames2025Page() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState(searchParams.get("lang") || "en")

  const translations = {
    "pt-BR": {
      title: "UK Corporate Games 2025",
      subtitle: "Acordo de Serviços (Tradução PT-BR)",
      backToEvents: "Voltar para Termos de Eventos",
      lastUpdated: "Última atualização",
      content: `
      <div class="space-y-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <p class="text-sm leading-relaxed">
            Este Acordo estabelece os Termos e Condições aplicáveis aos serviços fornecidos pela <strong>UK Corporate Sports
            & Events Ltd</strong>, uma empresa constituída na Inglaterra e País de Gales sob o número de registro 12050110, com
            sede registrada em 32A East St, Saint Ives PE27 5PD, Reino Unido.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">1. Definições e Serviços</h2>
          <div class="space-y-4 ml-4">
            <p><strong>1.1 Serviços Esportivos:</strong> Participação ativa em eventos esportivos organizados pela UK Corporate Sports & Events Ltd, incluindo mas não limitado a futebol, tênis, basquetebol, natação, atletismo e outros esportes corporativos.</p>
            
            <p><strong>1.2 Atividades Complementares:</strong> Participação em atividades não esportivas associadas aos Jogos, incluindo cerimônias de abertura e encerramento, eventos de networking, workshops e atividades sociais.</p>
            
            <p><strong>1.3 Plataformas Digitais:</strong> Acesso aos serviços através dos websites corporategamesuk.com, corporate-games.com, aplicativo móvel oficial e outras plataformas digitais autorizadas.</p>
            
            <p><strong>1.4 Aplicativo Móvel:</strong> Uso do aplicativo oficial Corporate Games desenvolvido pela MeshMe Ltd para Corporate Games Worldwide Ltd, incluindo funcionalidades de registro, comunicação, resultados e networking.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">2. Registro e Elegibilidade</h2>
          <div class="space-y-4 ml-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-bold mb-3 text-blue-800">2.1 Critérios de Elegibilidade:</h3>
              <ul class="list-disc pl-6 space-y-2 text-blue-700">
                <li>Idade mínima de 18 anos (exceto categorias específicas)</li>
                <li>Vínculo empregatício ou associação com empresa/organização participante</li>
                <li>Condições físicas adequadas para participação esportiva</li>
                <li>Concordância com todos os termos e condições</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 class="font-bold mb-3">2.2 Informações Obrigatórias:</h3>
              <ul class="list-disc pl-6 space-y-1">
                <li>Nome completo e data de nascimento</li>
                <li>Gênero e categoria de participação</li>
                <li>Endereço de e-mail válido e único</li>
                <li>Número de telefone para contato</li>
                <li>Nome da empresa ou organização</li>
                <li>Informações médicas relevantes (alergias, condições especiais)</li>
                <li>Contato de emergência</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">3. Responsabilidades e Isenções</h2>
          <div class="space-y-4 ml-4">
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 class="font-bold mb-3 text-red-700">3.1 Isenção de Responsabilidade:</h3>
              <p class="mb-3">Ao se registrar, você concorda em isentar completamente a UK Corporate Sports & Events Ltd, seus organizadores, parceiros, patrocinadores, voluntários e afiliados de qualquer responsabilidade por:</p>
              <ul class="list-disc pl-6 space-y-1">
                <li>Lesões pessoais, doenças ou acidentes durante os eventos</li>
                <li>Danos ou perda de propriedade pessoal</li>
                <li>Consequências de condições climáticas adversas</li>
                <li>Alterações de cronograma ou cancelamentos</li>
                <li>Problemas técnicos com equipamentos ou instalações</li>
              </ul>
            </div>

            <p><strong>3.2 Seguro Obrigatório:</strong> Todos os participantes devem possuir seguro de acidentes pessoais e de viagem válido. A organização não fornece cobertura de seguro para participantes.</p>

            <p><strong>3.3 Assistência Médica:</strong> Você consente em receber tratamento médico de emergência se necessário. Custos médicos são de responsabilidade do participante.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">4. Proteção de Dados e Privacidade</h2>
          <div class="space-y-4 ml-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-bold mb-3 text-green-800">4.1 Tratamento de Dados Pessoais:</h3>
              <p class="mb-3">Seus dados serão processados de acordo com o GDPR do Reino Unido e a Lei de Proteção de Dados de 2018 para:</p>
              <ul class="list-disc pl-6 space-y-1 text-green-700">
                <li>Administração e organização dos eventos</li>
                <li>Comunicação sobre o evento e atualizações</li>
                <li>Segurança e controle de acesso</li>
                <li>Marketing de eventos futuros (com consentimento)</li>
                <li>Análise estatística e melhoria dos serviços</li>
              </ul>
            </div>

            <p><strong>4.2 Direitos do Titular:</strong> Você pode solicitar acesso, correção, exclusão ou portabilidade de seus dados a qualquer momento contactando info@corporategamesuk.com.</p>

            <p><strong>4.3 Compartilhamento de Dados:</strong> Dados podem ser compartilhados com parceiros autorizados, fornecedores de serviços e autoridades quando legalmente exigido.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">5. Uso de Imagem e Mídia</h2>
          <div class="space-y-4 ml-4">
            <p><strong>5.1 Consentimento de Imagem:</strong> Ao participar, você autoriza automaticamente o uso de sua imagem, voz e performance em:</p>
            <ul class="list-disc pl-6 space-y-1 mb-4">
              <li>Materiais promocionais e publicitários</li>
              <li>Transmissões ao vivo e gravadas</li>
              <li>Redes sociais e websites oficiais</li>
              <li>Relatórios e documentação do evento</li>
              <li>Materiais de marketing para eventos futuros</li>
            </ul>

            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-sm"><strong>Opt-out:</strong> Se você não deseja que sua imagem seja utilizada, deve notificar por escrito para info@corporategamesuk.com até 7 dias antes do evento.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">6. Regras de Conduta e Fair Play</h2>
          <div class="space-y-4 ml-4">
            <p><strong>6.1 Código de Conduta:</strong> Todos os participantes devem:</p>
            <ul class="list-disc pl-6 space-y-1 mb-4">
              <li>Demonstrar espírito esportivo e fair play</li>
              <li>Respeitar adversários, oficiais e organizadores</li>
              <li>Seguir todas as regras específicas de cada modalidade</li>
              <li>Abster-se de linguagem ofensiva ou comportamento inadequado</li>
              <li>Não usar substâncias proibidas ou álcool durante competições</li>
            </ul>

            <p><strong>6.2 Penalidades:</strong> Violações podem resultar em advertência, desqualificação ou banimento de eventos futuros.</p>

            <p><strong>6.3 Anti-Doping:</strong> Testes aleatórios podem ser realizados. Participantes devem declarar medicamentos em uso.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">7. Aspectos Financeiros</h2>
          <div class="space-y-4 ml-4">
            <p><strong>7.1 Taxas de Participação:</strong> Todas as taxas devem ser pagas conforme especificado no momento do registro.</p>

            <p><strong>7.2 Política de Reembolso:</strong> Reembolsos não são concedidos exceto em circunstâncias excepcionais determinadas pela organização.</p>

            <p><strong>7.3 Cancelamentos:</strong> Em caso de cancelamento por força maior, a organização não é obrigada a reembolsar taxas pagas.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">8. Propriedade Intelectual</h2>
          <div class="space-y-4 ml-4">
            <p><strong>8.1 Direitos Autorais:</strong> Todos os logotipos, designs, conteúdo e materiais dos UK Corporate Games são propriedade da UK Corporate Sports & Events Ltd ou seus licenciadores.</p>

            <p><strong>8.2 Uso Não Autorizado:</strong> É proibido reproduzir, distribuir ou usar comercialmente qualquer material protegido sem autorização expressa.</p>

            <p><strong>8.3 Marcas Registradas:</strong> "UK Corporate Games", "Corporate Games" e marcas relacionadas são propriedade registrada.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">9. Disposições Gerais</h2>
          <div class="space-y-4 ml-4">
            <p><strong>9.1 Idioma Oficial:</strong> O inglês é o idioma oficial dos eventos. Traduções são fornecidas apenas para conveniência.</p>

            <p><strong>9.2 Jurisdição:</strong> Estes termos são regidos pelas leis da Inglaterra e País de Gales.</p>

            <p><strong>9.3 Alterações:</strong> A organização reserva-se o direito de alterar estes termos mediante notificação adequada.</p>

            <p><strong>9.4 Força Maior:</strong> A organização não é responsável por impossibilidade de cumprimento devido a eventos fora de seu controle.</p>
          </div>
        </div>

        <div class="mt-8 p-6 bg-gray-100 rounded-lg">
          <h3 class="font-bold mb-3 text-center">Informações de Contato</h3>
          <div class="text-center space-y-2">
            <p><strong>E-mail:</strong> info@corporategamesuk.com</p>
            <p><strong>Telefone:</strong> +44 (0) 1480 388 388</p>
            <p><strong>Endereço:</strong> 32A East St, Saint Ives PE27 5PD, Reino Unido</p>
            <p class="text-sm text-gray-600 mt-4">
              Para questões sobre proteção de dados: dataprotection@corporategamesuk.com
            </p>
          </div>
        </div>
      </div>
    `,
    },
    en: {
      title: "UK Corporate Games 2025",
      subtitle: "Service Agreement",
      backToEvents: "Back to Event Terms",
      lastUpdated: "Last updated",
      content: `
        <div class="space-y-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-sm leading-relaxed">
              This Agreement sets out the Terms & Conditions applicable to services provided by <strong>UK Corporate Sports
              & Events Ltd</strong>, a company incorporated in England & Wales under registration number 12050110, with
              its registered address at 32A East St, Saint Ives PE27 5PD, United Kingdom.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">1. Definitions and Services</h2>
            <div class="space-y-4 ml-4">
              <p><strong>1.1 Sports Services:</strong> Active participation in sporting events organized by UK Corporate Sports & Events Ltd, including but not limited to football, tennis, basketball, swimming, athletics, and other corporate sports.</p>
              
              <p><strong>1.2 Complementary Activities:</strong> Participation in non-sporting activities associated with the Games, including opening and closing ceremonies, networking events, workshops, and social activities.</p>
              
              <p><strong>1.3 Digital Platforms:</strong> Access to services through the websites corporategamesuk.com, corporate-games.com, official mobile application, and other authorized digital platforms.</p>
              
              <p><strong>1.4 Mobile Application:</strong> Use of the official Corporate Games application developed by MeshMe Ltd for Corporate Games Worldwide Ltd, including registration, communication, results, and networking functionalities.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">2. Registration and Eligibility</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold mb-3 text-blue-800">2.1 Eligibility Criteria:</h3>
                <ul class="list-disc pl-6 space-y-2 text-blue-700">
                  <li>Minimum age of 18 years (except for specific categories)</li>
                  <li>Employment or association with a participating company/organization</li>
                  <li>Adequate physical condition for sports participation</li>
                  <li>Agreement with all terms and conditions</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h3 class="font-bold mb-3">2.2 Required Information:</h3>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Full name and date of birth</li>
                  <li>Gender and participation category</li>
                  <li>Valid and unique email address</li>
                  <li>Phone number for contact</li>
                  <li>Name of the company or organization</li>
                  <li>Relevant medical information (allergies, special conditions)</li>
                  <li>Emergency contact</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">3. Responsibilities and Waivers</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h3 class="font-bold mb-3 text-red-700">3.1 Disclaimer:</h3>
                <p class="mb-3">By registering, you agree to fully exempt UK Corporate Sports & Events Ltd, its organizers, partners, sponsors, volunteers, and affiliates from any liability for:</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Personal injuries, illnesses, or accidents during events</li>
                  <li>Damage or loss of personal property</li>
                  <li>Consequences of adverse weather conditions</li>
                  <li>Schedule changes or cancellations</li>
                  <li>Technical issues with equipment or facilities</li>
                </ul>
              </div>

              <p><strong>3.2 Mandatory Insurance:</strong> All participants must have valid personal accident and travel insurance. The organization does not provide insurance coverage for participants.</p>

              <p><strong>3.3 Medical Assistance:</strong> You consent to receive emergency medical treatment if necessary. Medical costs are the responsibility of the participant.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">4. Data Protection and Privacy</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-bold mb-3 text-green-800">4.1 Processing of Personal Data:</h3>
                <p class="mb-3">Your data will be processed in accordance with the UK GDPR and the Data Protection Act 2018 for:</p>
                <ul class="list-disc pl-6 space-y-1 text-green-700">
                  <li>Administration and organization of events</li>
                  <li>Communication about the event and updates</li>
                  <li>Security and access control</li>
                  <li>Marketing of future events (with consent)</li>
                  <li>Statistical analysis and improvement of services</li>
                </ul>
              </div>

              <p><strong>4.2 Data Subject Rights:</strong> You may request access, correction, deletion, or portability of your data at any time by contacting info@corporategamesuk.com.</p>

              <p><strong>4.3 Data Sharing:</strong> Data may be shared with authorized partners, service providers, and authorities when legally required.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">5. Use of Image and Media</h2>
            <div class="space-y-4 ml-4">
              <p><strong>5.1 Image Consent:</strong> By participating, you automatically authorize the use of your image, voice, and performance in:</p>
              <ul class="list-disc pl-6 space-y-1 mb-4">
                <li>Promotional and advertising materials</li>
                <li>Live and recorded broadcasts</li>
                <li>Social media and official websites</li>
                <li>Reports and event documentation</li>
                <li>Marketing materials for future events</li>
              </ul>

              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-sm"><strong>Opt-out:</strong> If you do not want your image to be used, you must notify in writing to info@corporategamesuk.com up to 7 days before the event.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">6. Rules of Conduct and Fair Play</h2>
            <div class="space-y-4 ml-4">
              <p><strong>6.1 Code of Conduct:</strong> All participants must:</p>
              <ul class="list-disc pl-6 space-y-1 mb-4">
                <li>Demonstrate sportsmanship and fair play</li>
                <li>Respect opponents, officials, and organizers</li>
                <li>Follow all specific rules of each sport</li>
                <li>Refrain from offensive language or inappropriate behavior</li>
                <li>Not use prohibited substances or alcohol during competitions</li>
              </ul>

              <p><strong>6.2 Penalties:</strong> Violations may result in warning, disqualification, or banishment from future events.</p>

              <p><strong>6.3 Anti-Doping:</strong> Random tests may be performed. Participants must declare medications in use.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">7. Financial Aspects</h2>
            <div class="space-y-4 ml-4">
              <p><strong>7.1 Participation Fees:</strong> All fees must be paid as specified at the time of registration.</p>

              <p><strong>7.2 Refund Policy:</strong> Refunds are not granted except in exceptional circumstances determined by the organization.</p>

              <p><strong>7.3 Cancellations:</strong> In case of cancellation due to force majeure, the organization is not obliged to refund fees paid.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">8. Intellectual Property</h2>
            <div class="space-y-4 ml-4">
              <p><strong>8.1 Copyright:</strong> All logos, designs, content, and materials of the UK Corporate Games are the property of UK Corporate Sports & Events Ltd or its licensors.</p>

              <p><strong>8.2 Unauthorized Use:</strong> It is prohibited to reproduce, distribute, or commercially use any protected material without express authorization.</p>

              <p><strong>8.3 Trademarks:</strong> "UK Corporate Games", "Corporate Games", and related marks are registered property.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">9. General Provisions</h2>
            <div class="space-y-4 ml-4">
              <p><strong>9.1 Official Language:</strong> English is the official language of the events. Translations are provided for convenience only.</p>

              <p><strong>9.2 Jurisdiction:</strong> These terms are governed by the laws of England and Wales.</p>

              <p><strong>9.3 Amendments:</strong> The organization reserves the right to change these terms with adequate notice.</p>

              <p><strong>9.4 Force Majeure:</strong> The organization is not responsible for impossibility of fulfillment due to events beyond its control.</p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 class="font-bold mb-3 text-center">Contact Information</h3>
            <div class="text-center space-y-2">
              <p><strong>E-mail:</strong> info@corporategamesuk.com</p>
              <p><strong>Phone:</strong> +44 (0) 1480 388 388</p>
              <p><strong>Address:</strong> 32A East St, Saint Ives PE27 5PD, United Kingdom</p>
              <p class="text-sm text-gray-600 mt-4">
                For questions about data protection: dataprotection@corporategamesuk.com
              </p>
            </div>
          </div>
        </div>
      `,
    },
    es: {
      title: "UK Corporate Games 2025",
      subtitle: "Acuerdo de Servicios (Traducción ES)",
      backToEvents: "Volver a Términos de Eventos",
      lastUpdated: "Última actualización",
      content: `
        <div class="space-y-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-sm leading-relaxed">
              Este Acuerdo establece los Términos y Condiciones aplicables a los servicios proporcionados por <strong>UK Corporate Sports
              & Events Ltd</strong>, una empresa constituida en Inglaterra y Gales bajo el número de registro 12050110, con
              domicilio social en 32A East St, Saint Ives PE27 5PD, Reino Unido.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">1. Definiciones y Servicios</h2>
            <div class="space-y-4 ml-4">
              <p><strong>1.1 Servicios Deportivos:</strong> Participación activa en eventos deportivos organizados por UK Corporate Sports & Events Ltd, incluyendo pero no limitado a fútbol, tenis, baloncesto, natación, atletismo y otros deportes corporativos.</p>
              
              <p><strong>1.2 Actividades Complementarias:</strong> Participación en actividades no deportivas asociadas a los Jocuegos, incluyendo ceremonias de apertura y clausura, eventos de networking, talleres y actividades sociales.</p>
              
              <p><strong>1.3 Plataformas Digitales:</strong> Acceso a los servicios a través de los sitios web corporategamesuk.com, corporate-games.com, aplicación móvil oficial y otras plataformas digitales autorizadas.</p>
              
              <p><strong>1.4 Aplicación Móvil:</strong> Uso de la aplicación oficial Corporate Games desarrollada por MeshMe Ltd para Corporate Games Worldwide Ltd, incluyendo funcionalidades de registro, comunicación, resultados y networking.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">2. Registro y Elegibilidad</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold mb-3 text-blue-800">2.1 Criterios de Elegibilidad:</h3>
                <ul class="list-disc pl-6 space-y-2 text-blue-700">
                  <li>Edad mínima de 18 años (excepto categorías específicas)</li>
                  <li>Vínculo laboral o asociación con empresa/organización participante</li>
                  <li>Condiție fizică adecvată pentru participarea sportivă</li>
                  <li>Acord cu toți termenii și condițiile</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h3 class="font-bold mb-3">2.2 Informații Obligatorii:</h3>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Numele complet și data nașterii</li>
                  <li>Sexul și categoria de participación</li>
                  <li>Dirección de correo electrónico válida y única</li>
                  <li>Número de teléfono para contacto</li>
                  <li>Nombre de la empresa u organización</li>
                  <li>Información médica relevante (alergias, condiciones especiales)</li>
                  <li>Contacto de emergencia</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">3. Responsabilidades y Exenciones</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h3 class="font-bold mb-3 text-red-700">3.1 Exención de Responsabilidad:</h3>
                <p class="mb-3">Al registrarse, usted acepta eximir completamente a UK Corporate Sports & Events Ltd, sus organizadores, socios, patrocinadores, voluntarios y afiliados de cualquier responsabilidad por:</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Lesiones personales, enfermedades o accidentes durante los eventos</li>
                  <li>Daños o pérdida de propiedad personal</li>
                  <li>Consecuencias de condiciones climáticas adversas</li>
                  <li>Cambios de horario o cancelaciones</li>
                  <li>Problemas técnicos con equipos o instalaciones</li>
                </ul>
              </div>

              <p><strong>3.2 Seguro Obligatorio:</strong> Todos los participantes deben poseer un seguro de accidentes personales y de viaje válido. La organización no proporciona cobertura de seguro para los participantes.</p>

              <p><strong>3.3 Asistencia Médica:</strong> Usted consiente en recibir tratamiento médico de emergencia si es necesario. Los costos médicos son responsabilidad del participante.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">4. Protección de Datos y Privacidad</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-bold mb-3 text-green-800">4.1 Tratamiento de Datos Personales:</h3>
                <p class="mb-3">Sus datos serán procesados de acuerdo con el RGPD del Reino Unido y la Ley de Protección de Datos de 2018 para:</p>
                <ul class="list-disc pl-6 space-y-1 text-green-700">
                  <li>Administración y organización de los eventos</li>
                  <li>Comunicación sobre el evento y actualizaciones</li>
                  <li>Seguridad y control de acceso</li>
                  <li>Marketing de eventos futuros (con consentimiento)</li>
                  <li>Análisis estadístico y mejora de los servicios</li>
                </ul>
              </div>

              <p><strong>4.2 Derechos del Titular:</strong> Puede solicitar acceso, corrección, eliminación o portabilidad de sus datos en cualquier momento contactando a info@corporategamesuk.com.</p>

              <p><strong>4.3 Compartir Datos:</strong> Los datos pueden ser compartidos con socios autorizados, proveedores de servicios y autoridades cuando sea legalmente requerido.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">5. Uso de Imagen y Medios</h2>
            <div class="space-y-4 ml-4">
              <p><strong>5.1 Consentimiento de Imagen:</strong> Al participar, usted autoriza automáticamente el uso de su imagen, voz y actuación en:</p>
              <ul class="list-disc pl-6 space-y-1 mb-4">
                <li>Materiales promocionales y publicitarios</li>
                <li>Transmisiones en vivo y grabadas</li>
                <li>Redes sociales y sitios web oficiales</li>
                <li>Informes y documentación del evento</li>
                <li>Materiales de marketing para eventos futuros</li>
              </ul>

              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-sm"><strong>Opt-out:</strong> Si no desea que su imagen sea utilizada, debe notificar por escrito a info@corporategamesuk.com hasta 7 días antes del evento.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">6. Reglas de Conducta y Juego Limpio</h2>
            <div class="space-y-4 ml-4">
              <p><strong>6.1 Código de Conducta:</strong> Todos los participantes deben:</p>
              <ul class="list-disc pl-6 space-y-1 mb-4">
                <li>Demostrar espíritu deportivo y juego limpio</li>
                <li>Respetar a los oponentes, oficiales y organizadores</li>
                <li>Seguir todas las reglas específicas de cada modalidad</li>
                <li>Abstenerse de lenguaje ofensivo o comportamiento inapropiado</li>
                <li>No usar sustancias prohibidas o alcohol durante las competiciones</li>
              </ul>

              <p><strong>6.2 Sanciones:</strong> Las violaciones pueden resultar en advertencia, descalificación o prohibición de eventos futuros.</p>

              <p><strong>6.3 Anti-Dopaje:</strong> Se pueden realizar pruebas aleatorias. Los participantes deben declarar los medicamentos en uso.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">7. Aspectos Financieros</h2>
            <div class="space-y-4 ml-4">
              <p><strong>7.1 Tarifas de Participación:</strong> Todas las tarifas deben pagarse según lo especificado en el momento del registro.</p>

              <p><strong>7.2 Política de Reembolso:</strong> No se otorgan reembolsos excepto en circunstancias excepcionales determinadas por la organización.</p>

              <p><strong>7.3 Cancelaciones:</strong> En caso de cancelación por fuerza mayor, la organización no está obligada a reembolsar las tarifas pagadas.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">8. Propiedad Intelectual</h2>
            <div class="space-y-4 ml-4">
              <p><strong>8.1 Derechos de Autor:</strong> Todos los logotipos, diseños, contenido y materiales de los UK Corporate Games son propiedad de UK Corporate Sports & Events Ltd o sus licenciantes.</p>

              <p><strong>8.2 Uso No Autorizado:</strong> Está prohibido reproducir, distribuir o utilizar comercialmente cualquier material protegido sin autorización expresa.</p>

              <p><strong>8.3 Marcas Registradas:</strong> "UK Corporate Games", "Corporate Games" y las marcas relacionadas son propiedad registrada.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">9. Disposiciones Generales</h2>
            <div class="space-y-4 ml-4">
              <p><strong>9.1 Idioma Oficial:</strong> El inglés es el idioma oficial de los eventos. Las traducciones se proporcionan solo por conveniencia.</p>

              <p><strong>9.2 Jurisdicción:</strong> Estos términos se rigen por las leyes de Inglaterra y Gales.</p>

              <p><strong>9.3 Modificaciones:</strong> La organización se reserva el derecho de cambiar estos términos con la debida notificación.</p>

              <p><strong>9.4 Fuerza Mayor:</strong> La organización no es responsable por la imposibilidad de cumplimiento debido a eventos fuera de su control.</p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 class="font-bold mb-3 text-center">Información de Contacto</h3>
            <div class="text-center space-y-2">
              <p><strong>Correo electrónico:</strong> info@corporategamesuk.com</p>
              <p><strong>Teléfono:</strong> +44 (0) 1480 388 388</p>
              <p><strong>Dirección:</strong> 32A East St, Saint Ives PE27 5PD, Reino Unido</p>
              <p class="text-sm text-gray-600 mt-4">
                Para preguntas sobre protección de datos: dataprotection@corporategamesuk.com
              </p>
            </div>
          </div>
        </div>
      `,
    },
    ro: {
      title: "UK Corporate Games 2025",
      subtitle: "Acord de Servicii (Traducere RO)",
      backToEvents: "Înapoi la Termenii Evenimentelor",
      lastUpdated: "Ultima actualizare",
      content: `
        <div class="space-y-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-sm leading-relaxed">
              Acest Acord stabilește Termenii și Condițiile aplicabile serviciilor furnizate de <strong>UK Corporate Sports
              & Events Ltd</strong>, o companie înregistrată în Anglia și Țara Galilor sub numărul de înregistrare 12050110, cu
              sediul social la 32A East St, Saint Ives PE27 5PD, Regatul Unit.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">1. Definiții și Servicii</h2>
            <div class="space-y-4 ml-4">
              <p><strong>1.1 Servicii Sportive:</strong> Participarea activă la evenimente sportive organizate de UK Corporate Sports & Events Ltd, inclusiv, dar fără a se limita la fotbal, tenis, baschet, înot, atletism și alte sporturi corporative.</p>
              
              <p><strong>1.2 Activități Complementare:</strong> Participarea la activități non-sportive asociate cu Jocurile, inclusiv ceremonii de deschidere și închidere, evenimente de networking, ateliere și activități sociale.</p>
              
              <p><strong>1.3 Platforme Digitale:</strong> Acces la servicii prin intermediul site-urilor web corporategamesuk.com, corporate-games.com, aplicația mobilă oficială și alte platforme digitale autorizate.</p>
              
              <p><strong>1.4 Aplicația Mobilă:</strong> Utilizarea aplicației oficiale Corporate Games dezvoltată de MeshMe Ltd pentru Corporate Games Worldwide Ltd, inclusiv funcționalitățile de înregistrare, comunicare, rezultate și networking.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">2. Înregistrare și Eligibilitate</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold mb-3 text-blue-800">2.1 Criterii de Eligibilitate:</h3>
                <ul class="list-disc pl-6 space-y-2 text-blue-700">
                  <li>Vârsta minimă de 18 ani (cu excepția categoriilor specifice)</li>
                  <li>Legătură de angajare sau asociere cu o companie/organizație participantă</li>
                  <li>Condiție fizică adecvată pentru participarea sportivă</li>
                  <li>Acord cu toți termenii și condițiile</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h3 class="font-bold mb-3">2.2 Informații Obligatorii:</h3>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Numele complet și data nașterii</li>
                  <li>Sexul și categoria de participare</li>
                  <li>Adresa de e-mail validă și unică</li>
                  <li>Număr de telefon pentru contact</li>
                  <li>Numele companiei sau organizației</li>
                  <li>Informații medicale relevante (alergii, condiții speciale)</li>
                  <li>Contact de urgență</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">3. Responsabilități și Renunțări</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h3 class="font-bold mb-3 text-red-700">3.1 Renunțare la Responsabilitate:</h3>
                <p class="mb-3">Înregistrându-se, acordați să renunțați complet la responsabilitatea UK Corporate Sports & Events Ltd, organizațorilor sale, partenerilor, sponsorilor, voluntarilor și afiliaților pentru:</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Îngrijorări personale, boală sau accidente în timpul evenimentelor</li>
                  <li>Damaj sau pierderea de proprietate personală</li>
                  <li>Consecințe ale condițiilor climatice adverse</li>
                  <li>Modificări ale programului sau anulări</li>
                  <li>Probleme tehnice cu echipamente sau instalări</li>
                </ul>
              </div>

              <p><strong>3.2 Asigurare Obligatorie:</strong> Toți participanții trebuie să aibă o asigurare validă de accidente personale și călătorii. Organizația nu oferă acoperire de asigurare pentru participanți.</p>

              <p><strong>3.3 Asistență Medicală:</strong> Acordați să primiți tratament medical de urgență dacă este necesar. Costurile medicale sunt responsabilitatea participanților.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">4. Protecția Datelor și Confidențialitatea</h2>
            <div class="space-y-4 ml-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-bold mb-3 text-green-800">4.1 Procesarea Datelor Personale:</h3>
                <p class="mb-3">Datele dumneavoastră vor fi procesate în conformitate cu RGPD din Regatul Unit și Legea de Protecție a Datelor din 2018 pentru:</p>
                <ul class="list-disc pl-6 space-y-1 text-green-700">
                  <li>Administrația și organizarea evenimentelor</li>
                  <li>Comunicarea despre eveniment și actualizări</li>
                  <li>Securitate și control de acces</li>
                  <li>Marketingul evenimentelor viitoare (cu acord)</li>
                  <li>Analiza statistică și îmbunătățirea serviciilor</li>
                </ul>
              </div>

              <p><strong>4.2 Drepturile Subiectului de Date:</strong> Puteți solicita accesul, corectarea, ștergerea sau portabilitatea datelor dumneavoastră în orice moment contactând info@corporategamesuk.com.</p>

              <p><strong>4.3 Partajarea Datelor:</strong> Datele pot fi partajate cu partenerii autorizați, furnizorii de servicii și autoritățile când este legal necesar.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">5. Utilizarea Imaginii și Media</h2>
            <div class="space-y-4 ml-4">
              <p><strong>5.1 Acord de Imagini:</strong> Înregistrându-se, acordați utilizarea automată a imaginii, vocii și performanței dumneavoastră în:</p>
              <ul class="list-disc pl-6 space-y-1 mb-4">
                <li>Material promotional și publicitar</li>
                <li>Transmiteri live și înregistrate</li>
                <li>Rețele sociale și site-uri web oficiale</li>
                <li>Rapoarte și documentație a evenimentului</li>
                <li>Material promotional pentru evenimentele viitoare</li>
              </ul>

              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-sm"><strong>Opt-out:</strong> Dacă nu doriți ca imaginea dumneavoastră să fie utilizată, trebuie să notificați în scris la info@corporategamesuk.com până în 7 zile înainte de eveniment.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">6. Reguli de Comportament și Joc Fair Play</h2>
            <div class="space-y-4 ml-4">
              <p><strong>6.1 Cod de Comportament:</strong> Toți participanții trebuie să:</p>
              <ul class="list-disc pl-6 space-y-1 mb-4">
                <li>Demonstreze spirițul sportiv și jocul fair play</li>
                <li>Respete adversarii, oficialii și organizațorii</li>
                <li>Urmeze toate regulile specifice fiecărei modalități</li>
                <li>Se abțin de la limbaj ofensiv sau comportament inapropiat</li>
                <li>Nu folosească substanțe interzise sau alcool în timpul competițiilor</li>
              </ul>

              <p><strong>6.2 Penalități:</strong> Violațiile pot duce la o advertenție, dezqualificare sau interzicere din evenimentele viitoare.</p>

              <p><strong>6.3 Anti-Doping:</strong> Se pot efectua teste aleatorii. Participanții trebuie să declare medicamentele în uz.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">7. Aspecte Financiare</h2>
            <div class="space-y-4 ml-4">
              <p><strong>7.1 Taxe de Participare:</strong> Toate taxele trebuie plătite conform specificațiilor la momentul înregistrării.</p>

              <p><strong>7.2 Politica de Refund:</strong> Refundurile nu sunt acordate, cu excepția circumstanțelor excepționale determinate de organizație.</p>

              <p><strong>7.3 Anulări:</strong> În cazul anulării din cauza unei forțe majeure, organizația nu este obligată să refunce taxele plătite.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">8. Proprietatea Intelectuală</h2>
            <div class="space-y-4 ml-4">
              <p><strong>8.1 Drepturi de Autor:</strong> Toate logourile, designurile, conținutul și materialele UK Corporate Games sunt proprietatea UK Corporate Sports & Events Ltd sau licențiatorilor săi.</p>

              <p><strong>8.2 Utilizarea neautorizată:</strong> Este interzis să reproduceți, distribuiți sau să utilizați comercial orice material protejat fără autorizare expresă.</p>

              <p><strong>8.3 Marcuri:</strong> "UK Corporate Games", "Corporate Games" și mărcile asociate sunt proprietate înregistrată.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500/20 pb-2">9. Provisions Generale</h2>
            <div class="space-y-4 ml-4">
              <p><strong>9.1 Limbaj Oficial:</strong> Engleză este limbajul oficial al evenimentelor. Traduceriile sunt furnizate doar pentru conveniență.</p>

              <p><strong>9.2 Jurisdicție:</strong> Aceste termeni sunt reglementați de legea din Anglia și Țara Galilor.</p>

              <p><strong>9.3 Modificări:</strong> Organizația se rezervă dreptul de a schimba aceste termeni cu notificare adecvată.</p>

              <p><strong>9.4 Forță Majeură:</strong> Organizația nu este responsabilă pentru imposibilitatea de îndeplinire din cauza evenimentelor în afara controlului său.</p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 class="font-bold mb-3 text-center">Informații de Contact</h3>
            <div class="text-center space-y-2">
              <p><strong>E-mail:</strong> info@corporategamesuk.com</p>
              <p><strong>Telefon:</strong> +44 (0) 1480 388 388</p>
              <p><strong>Adresă:</strong> 32A East St, Saint Ives PE27 5PD, Regatul Unit</p>
              <p class="text-sm text-gray-600 mt-4">
                Pentru întrebări despre protecția datelor: dataprotection@corporategamesuk.com
              </p>
            </div>
          </div>
        </div>
      `,
    },
  }

  const currentTranslation = translations[language]

  useEffect(() => {
    const lang = searchParams.get("lang")
    if (lang && lang !== language) {
      setLanguage(lang)
    }
  }, [searchParams, language])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-4xl">
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Link href="/documentos/termos-eventos" className="flex items-center gap-2">
              <ArrowLeft />
              {currentTranslation.backToEvents}
            </Link>
            <LanguageSelector currentLanguage={language} setLanguage={setLanguage} />
          </div>
          <h1 className="text-3xl font-bold text-center">{currentTranslation.title}</h1>
          <h2 className="text-xl font-semibold text-center">{currentTranslation.subtitle}</h2>
          <p className="text-sm text-center">{currentTranslation.lastUpdated}: 2023-10-01</p>
          <div dangerouslySetInnerHTML={{ __html: currentTranslation.content }} />
        </CardContent>
      </Card>
    </div>
  )
}
