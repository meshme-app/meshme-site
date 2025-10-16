"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const CorporateGamesBucharest2025Page = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState(searchParams.get("lang") || "ro")

  const translations = {
    "pt-BR": {
      title: "Corporate Games Bucharest 2025",
      description: "Acordo de Serviços para Corporate Games Bucharest 2025 (Tradução PT-BR)",
      backToDocuments: "Voltar para Termos de Eventos",
      lastUpdated: "Última atualização",
      serviceAgreement: "ACORDO DE SERVIÇOS",
      content: `
      <div class="space-y-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold mb-6 text-primary">ACORDO DE SERVIÇOS</h1>
          <p class="text-lg text-gray-600">Corporate Games Bucharest 2025</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <p class="text-sm leading-relaxed">
            Este acordo estabelece os Termos e Condições aplicáveis aos serviços prestados pela{" "}
            <strong>SPORT AWARD S.R.L.</strong>, sociedade registada no Registo Comercial da Roménia sob o n.º{" "}
            <strong>J40/6618/2011</strong>, CUI <strong>RO28562386</strong>, com conta IBAN{" "}
            <strong>RO30BRDE445SV59711784450</strong> aberta no BRD – Sucursal Dacia, com sede social em
            Bucareste, Str. Nerva Traian n.º 27-33, sc. B, et. 1, sector 3, legalmente representada pelo Sr.{" "}
            <strong>Radu Rădulescu</strong>, na qualidade de administrador.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            1. Definições e Objeto dos Serviços
          </h2>
          <div class="space-y-4 ml-4">
            <p><strong>1.1 Eventos Desportivos:</strong> Participação do Beneficiário em competições desportivas organizadas pela Sport Award S.R.L., incluindo mas não limitado a futebol, basquetebol, voleibol, ténis, natação, atletismo e outras modalidades aprovadas.</p>
            
            <p><strong>1.2 Atividades Complementares:</strong> Participação em atividades não desportivas conexas aos Corporate Games, incluindo cerimónias oficiais, eventos de networking empresarial, workshops de team building e atividades culturais.</p>
            
            <p><strong>1.3 Plataformas Digitais:</strong> Acesso aos serviços através dos websites corporate-games.com, corporate-games.ro e outras plataformas digitais autorizadas pelos organizadores.</p>
            
            <p><strong>1.4 Aplicação Móvel:</strong> Utilização da aplicação móvel Corporate Games desenvolvida pela MeshMe Ltd, incluindo funcionalidades de registo, comunicação, consulta de resultados, networking e gestão de participação.</p>

            <p><strong>1.5 Tratamento de Dados:</strong> Recolha, processamento e armazenamento de dados pessoais pela Sport Award S.R.L. em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e legislação romena aplicável.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            2. Registo e Elegibilidade dos Participantes
          </h2>
          <div class="space-y-4 ml-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-3 text-blue-800">2.1 Critérios de Elegibilidade:</h3>
              <ul class="list-disc ml-6 space-y-2 text-blue-700">
                <li>Idade mínima de 18 anos (salvo categorias especiais devidamente identificadas)</li>
                <li>Vínculo laboral ou associação com empresa/organização participante registada</li>
                <li>Condições físicas adequadas para a prática desportiva</li>
                <li>Aceitação integral dos presentes Termos e Condições</li>
                <li>Apresentação de documentação válida de identificação</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 class="font-semibold mb-3">2.2 Dados Obrigatórios para Registo:</h3>
              <ul class="list-disc ml-6 space-y-1">
                <li>Nome completo conforme documento de identificação</li>
                <li>Género e data de nascimento</li>
                <li>Endereço de e-mail válido e único</li>
                <li>Número de telefone para contacto direto</li>
                <li>Nome completo da empresa/organização representada</li>
                <li>Função/cargo na empresa</li>
                <li>Informações médicas relevantes (alergias, medicação, limitações)</li>
                <li>Contacto de emergência (nome, relação, telefone)</li>
                <li>Modalidades desportivas de interesse</li>
              </ul>
            </div>

            <p><strong>2.3 Verificação de Dados:</strong> A Sport Award S.R.L. reserva-se o direito de verificar a veracidade das informações fornecidas e solicitar documentação adicional quando necessário.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            3. Declarações e Responsabilidades dos Participantes
          </h2>
          <div class="space-y-4 ml-4">
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 class="font-semibold mb-3 text-red-700">3.1 Isenção de Responsabilidade:</h3>
              <p class="mb-3">Ao inscrever-se, o Participante aceita integralmente os Termos e Condições dos Corporate Games e Corporate Cup e isenta expressamente de responsabilidade:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li>A Sport Award S.R.L. e seus representantes</li>
                <li>Organizadores, parceiros e patrocinadores</li>
                <li>Fornecedores de serviços e voluntários</li>
                <li>Proprietários e gestores de instalações desportivas</li>
              </ul>
              <p class="mt-3">Por qualquer prejuízo, lesão, doença, acidente ou dano material resultante da participação nos eventos.</p>
            </div>

            <p><strong>3.2 Assunção de Riscos:</strong> O Participante reconhece que a prática desportiva envolve riscos inerentes e participa voluntariamente assumindo total responsabilidade pelos mesmos.</p>

            <p><strong>3.3 Seguro Obrigatório:</strong> É da exclusiva responsabilidade do Participante possuir seguro de acidentes pessoais e de responsabilidade civil adequado. A organização não fornece qualquer cobertura de seguro.</p>

            <p><strong>3.4 Assistência Médica:</strong> O Participante consente expressamente em receber tratamento médico de emergência quando necessário, assumindo todos os custos associados.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            4. Tratamento de Dados Pessoais e Privacidade
          </h2>
          <div class="space-y-4 ml-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-3 text-green-800">4.1 Base Legal e Finalidades:</h3>
              <p class="mb-3">O tratamento de dados pessoais é realizado com base no consentimento do titular e nas seguintes finalidades:</p>
              <ul class="list-disc ml-6 space-y-1 text-green-700">
                <li>Organização e gestão dos eventos desportivos</li>
                <li>Comunicação sobre eventos atuais e futuros</li>
                <li>Segurança e controlo de acesso às instalações</li>
                <li>Elaboração de estatísticas e relatórios</li>
                <li>Marketing direto (mediante consentimento específico)</li>
                <li>Cumprimento de obrigações legais</li>
              </ul>
            </div>

            <p><strong>4.2 Direitos do Titular dos Dados:</strong> Nos termos do RGPD, o Participante tem direito a:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Acesso aos seus dados pessoais</li>
              <li>Retificação de dados incorretos ou incompletos</li>
              <li>Apagamento dos dados ("direito ao esquecimento")</li>
              <li>Limitação do tratamento</li>
              <li>Portabilidade dos dados</li>
              <li>Oposição ao tratamento</li>
              <li>Retirada do consentimento a qualquer momento</li>
            </ul>

            <p><strong>4.3 Exercício de Direitos:</strong> Para exercer qualquer direito, contacte: <strong>alina@corporate-games.ro</strong> ou <strong>dataprotection@corporate-games.ro</strong></p>

            <p><strong>4.4 Conservação de Dados:</strong> Os dados serão conservados pelo período necessário às finalidades para as quais foram recolhidos, respeitando os prazos legais aplicáveis.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            5. Utilização de Imagem e Direitos de Personalidade
          </h2>
          <div class="space-y-4 ml-4">
            <p><strong>5.1 Consentimento para Captação de Imagem:</strong> O Participante autoriza expressamente a captação, registo e utilização da sua imagem, voz e performance durante os eventos para:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Transmissões televisivas e streaming online</li>
              <li>Materiais promocionais e publicitários</li>
              <li>Redes sociais e websites oficiais</li>
              <li>Documentação fotográfica e videográfica</li>
              <li>Relatórios e publicações sobre o evento</li>
              <li>Arquivo histórico dos Corporate Games</li>
            </ul>

            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-sm"><strong>Direito de Oposição:</strong> O Participante pode opor-se à utilização da sua imagem comunicando por escrito para <strong>alina@corporate-games.ro</strong> até 10 dias antes do evento. Esta oposição pode limitar a participação em certas atividades.</p>
            </div>

            <p><strong>5.2 Direitos de Autor:</strong> A participação não confere ao Participante qualquer direito sobre os materiais audiovisuais produzidos.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            6. Regras de Participação e Conduta
          </h2>
          <div class="space-y-4 ml-4">
            <p><strong>6.1 Código de Conduta Desportiva:</strong> Todos os participantes devem:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Demonstrar espírito desportivo e fair play</li>
              <li>Respeitar adversários, árbitros e organizadores</li>
              <li>Cumprir rigorosamente as regras de cada modalidade</li>
              <li>Abster-se de linguagem ofensiva ou comportamento antideportivo</li>
              <li>Não consumir álcool ou substâncias proibidas durante as competições</li>
              <li>Usar equipamento adequado e aprovado</li>
              <li>Respeitar as instalações e equipamentos</li>
            </ul>

            <p><strong>6.2 Penalizações:</strong> O incumprimento das regras pode resultar em:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Advertência verbal ou escrita</li>
              <li>Suspensão temporária da participação</li>
              <li>Desqualificação da modalidade ou evento</li>
              <li>Exclusão definitiva dos Corporate Games</li>
            </ul>

            <p><strong>6.3 Controlo Anti-Doping:</strong> A organização reserva-se o direito de realizar controlos anti-doping aleatórios conforme regulamentação internacional.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            7. Aspectos Logísticos e Operacionais
          </h2>
          <div class="space-y-4 ml-4">
            <p><strong>7.1 Alterações de Programa:</strong> A organização reserva-se o direito de alterar:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Datas, horários e locais dos eventos</li>
              <li>Modalidades desportivas oferecidas</li>
              <li>Regulamentos específicos das competições</li>
              <li>Serviços complementares</li>
            </ul>

            <p><strong>7.2 Cancelamentos:</strong> Em caso de cancelamento por motivos de força maior (condições meteorológicas, emergências de saúde pública, etc.), não são devidos reembolsos de taxas pagas.</p>

            <p><strong>7.3 Responsabilidade por Bens Pessoais:</strong> A organização não se responsabiliza por:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Perda, roubo ou dano de bens pessoais</li>
              <li>Veículos estacionados nas proximidades</li>
              <li>Objetos deixados nas instalações</li>
            </ul>

            <p><strong>7.4 Idioma Oficial:</strong> O inglês é o idioma oficial dos eventos. Traduções são fornecidas quando possível mas não garantidas.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            8. Propriedade Intelectual e Direitos de Autor
          </h2>
          <div class="space-y-4 ml-4">
            <p><strong>8.1 Direitos Reservados:</strong> Todos os elementos de propriedade intelectual relacionados com os Corporate Games são propriedade da Sport Award S.R.L. ou dos seus licenciadores, incluindo:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Logótipos, marcas e símbolos</li>
              <li>Design gráfico e identidade visual</li>
              <li>Conteúdo dos websites e aplicações</li>
              <li>Materiais promocionais e educativos</li>
              <li>Software e tecnologias utilizadas</li>
            </ul>

            <p><strong>8.2 Uso Não Autorizado:</strong> É expressamente proibido reproduzir, distribuir, modificar ou usar comercialmente qualquer material protegido sem autorização prévia por escrito.</p>

            <p><strong>8.3 Licenças de Terceiros:</strong> Alguns elementos podem estar sujeitos a licenças de terceiros, cujos termos devem ser respeitados.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            9. Disposições Legais e Finais
          </h2>
          <div class="space-y-4 ml-4">
            <p><strong>9.1 Lei Aplicável:</strong> Este acordo é regido pela legislação romena, em particular:</p>
            <ul class="list-disc ml-6 space-y-1 mb-4">
              <li>Código Civil romeno</li>
              <li>Lei do Desporto (Lei n.º 69/2000)</li>
              <li>Regulamento Geral sobre Proteção de Dados (RGPD)</li>
              <li>Legislação sobre proteção do consumidor</li>
            </ul>

            <p><strong>9.2 Jurisdição:</strong> Para resolução de litígios, são competentes os tribunais de Bucareste, Roménia.</p>

            <p><strong>9.3 Alterações:</strong> A Sport Award S.R.L. pode alterar estes termos mediante notificação com 30 dias de antecedência.</p>

            <p><strong>9.4 Nulidade Parcial:</strong> A invalidade de qualquer cláusula não afeta a validade das restantes disposições.</p>

            <p><strong>9.5 Acordo Integral:</strong> Este documento constitui o acordo completo entre as partes, substituindo qualquer acordo anterior.</p>
          </div>
        </div>

        <div class="mt-8 p-6 bg-gray-100 rounded-lg">
          <h3 class="font-bold mb-4 text-center">Contactos Oficiais</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Informações Gerais:</h4>
              <p><strong>E-mail:</strong> alina@corporate-games.ro</p>
              <p><strong>Telefone:</strong> +40 21 XXX XXXX</p>
              <p><strong>Website:</strong> corporate-games.ro</p>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Proteção de Dados:</h4>
              <p><strong>E-mail:</strong> dataprotection@corporate-games.ro</p>
              <p><strong>Autoridade de Controlo:</strong> ANSPDCP</p>
              <p><strong>Website:</strong> dataprotection.ro</p>
            </div>
          </div>
          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              <strong>Endereço:</strong> Str. Nerva Traian nr. 27-33, sc. B, et. 1, sector 3, Bucareste, Roménia
            </p>
          </div>
        </div>
      </div>
    `,
    },
    en: {
      title: "Corporate Games Bucharest 2025",
      description: "Service Agreement for Corporate Games Bucharest 2025",
      backToDocuments: "Back to Event Terms",
      lastUpdated: "Last updated",
      serviceAgreement: "SERVICE AGREEMENT",
      content: `
      <div class="space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-6 text-primary">SERVICE AGREEMENT</h1>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <p class="text-sm leading-relaxed">
            This agreement establishes the Terms and Conditions applicable to services provided by{" "}
            <strong>SPORT AWARD S.R.L.</strong>, company registered with the Trade Registry under no.{" "}
            <strong>J40/6618/2011</strong>, CUI <strong>RO28562386</strong>, having IBAN account{" "}
            <strong>RO30BRDE445SV59711784450</strong> opened at BRD – Dacia Branch, with headquarters in Bucharest,
            Str. Nerva Traian no. 27-33, sc. B, et. 1, sector 3, legally represented by Mr.{" "}
            <strong>Radu Rădulescu</strong>, as administrator.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            1. Service Object
          </h2>
          <div class="space-y-3 ml-4">
            <p>
              <strong>1.1.</strong> Beneficiary's participation in sports events organized by Sport Award S.R.L.,
              according to this agreement.
            </p>
            <p>
              <strong>1.2.</strong> Participation in non-sports activities, related or independent of sports
              activities.
            </p>
            <p>
              <strong>1.3.</strong> Accessing services through corporate-games.com, corporate-games.ro websites or
              other third-party platforms.
            </p>
            <p>
              <strong>1.4.</strong> Using the Corporate Games mobile application (developed by MeshMe Ltd),
              including collection and processing of personal data by Sport Award S.R.L., in accordance with data
              protection legislation.
            </p>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            2. Participant Declarations
          </h2>
          <div class="space-y-4 ml-4">
            <div>
              <p class="mb-2">
                <strong>2.1.</strong> By registering, the Participant fully accepts the Corporate Games and Corporate Cup Terms and Conditions and exempts the organizers, partners, and affiliates from liability for any damage resulting from participation.
              </p>
            </div>
            <div>
              <p class="mb-3">
                <strong>2.2.</strong> The Participant grants the organizers the right to:
              </p>
              <ul class="list-disc ml-6 space-y-1 mb-4">
                <li>use their data for promotional purposes;</li>
                <li>process information regarding registration and performances;</li>
                <li>use this data to promote current and future events.</li>
              </ul>
              <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <p class="font-semibold mb-2 text-blue-800">Mandatory data:</p>
                <ul class="list-disc ml-6 space-y-1 text-blue-700">
                  <li>Full name, gender, date of birth</li>
                  <li>Valid email and phone number</li>
                  <li>Company/organization name</li>
                </ul>
              </div>
              <p class="text-sm bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                Data processing will be carried out in accordance with GDPR and relevant legislation. The Participant may withdraw their consent at any time by email to: <strong>alina@corporate-games.ro</strong>. The privacy policy is available at{" "}
                <Link href="/documentos/politica-privacidade?lang=en" class="text-primary underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div>
              <p class="font-semibold mb-3 text-red-700">2.3. Health and liability:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li>The Participant accepts emergency medical treatments;</li>
                <li>Participation is at their own risk;</li>
                <li>Sport Award S.R.L. is not liable for injuries, illnesses, or accidents;</li>
                <li>
                  The Participant is responsible for their own insurance and for damages resulting from the use of equipment or facilities.
                </li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-3">2.4. Modifications:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li>Locations and schedule may be modified;</li>
                <li>In case of cancellation for reasons not attributable to the organizer, no refunds are granted.</li>
              </ul>
            </div>
            <p>
              <strong>2.5.</strong> Organizers reserve the right to modify participation conditions or refuse entries at their discretion.
            </p>
            <div>
              <p class="font-semibold mb-2">2.6. Use of images:</p>
              <p class="ml-4 bg-green-50 p-3 rounded">
                Participation implies acceptance that the Participant's image may be used in promotional materials. Refusal must be communicated in writing, in advance, to <strong>alina@corporate-games.ro</strong>.
              </p>
            </div>
            <div>
              <p class="font-semibold mb-2">2.7.</p> Organizers are not responsible for:
              <ul class="list-disc ml-6 space-y-1 mt-2">
                <li>lost correspondence;</li>
                <li>lost, stolen, or damaged goods;</li>
                <li>accidents caused by ground conditions.</li>
              </ul>
            </div>
            <p>
              <strong>2.8.</strong> The official language of the events is <strong>English</strong>.
            </p>
            <div>
              <p class="font-semibold mb-2">2.9. Eligibility and conduct:</p>
              <p class="ml-4">
                Participants must be at least <strong>18 years old</strong> (with specified exceptions). Sporting and safe conduct is required. Organizers may exclude any person for inappropriate behavior.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            3. Intellectual Property
          </h2>
          <p class="ml-4">
            All intellectual property elements (logos, design, content, application) belong to their legal owners. Participation or access to services does not confer any rights thereto.
          </p>
        </div>
        <div class="mt-8 p-4 bg-gray-100 rounded-lg">
          <p class="text-sm text-gray-600 text-center">
            For questions or clarifications, contact: <strong>alina@corporate-games.ro</strong>
          </p>
        </div>
      </div>
      `,
    },
    es: {
      title: "Corporate Games Bucharest 2025",
      description: "Acuerdo de Servicios para Corporate Games Bucharest 2025 (Traducción ES)",
      backToDocuments: "Volver a Términos de Eventos",
      lastUpdated: "Última actualización",
      serviceAgreement: "ACUERDO DE SERVICIOS",
      content: `
      <div class="space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-6 text-primary">ACUERDO DE SERVICIOS</h1>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <p class="text-sm leading-relaxed">
            Este acuerdo establece los Términos y Condiciones aplicables a los servicios prestados por{" "}
            <strong>SPORT AWARD S.R.L.</strong>, sociedad registrada en el Registro Mercantil bajo el no.{" "}
            <strong>J40/6618/2011</strong>, CUI <strong>RO28562386</strong>, con cuenta IBAN{" "}
            <strong>RO30BRDE445SV59711784450</strong> abierta en BRD – Sucursal Dacia, con sede social en Bucarest,
            Str. Nerva Traian no. 27-33, sc. B, et. 1, sector 3, representada legalmente por el Sr.{" "}
            <strong>Radu Rădulescu</strong>, como administrador. (Traducción ES)
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            1. Objeto de los servicios
          </h2>
          <div class="space-y-3 ml-4">
            <p>
              <strong>1.1.</strong> Participación del Beneficiario en eventos deportivos organizados por Sport Award
              S.R.L., según este acuerdo.
            </p>
            <p>
              <strong>1.2.</strong> Participación en actividades no deportivas, relacionadas o independientes de
              actividades deportivas.
            </p>
            <p>
              <strong>1.3.</strong> Acceso a servicios a través de los sitios web corporate-games.com,
              corporate-games.ro u otras plataformas de terceros.
            </p>
            <p>
              <strong>1.4.</strong> Uso de la aplicación móvil Corporate Games (desarrollada por MeshMe Ltd),
              incluyendo recolección y procesamiento de datos personales por Sport Award S.R.L., de acuerdo con la
              legislación de protección de datos.
            </p>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            2. Declaraciones de los participantes (Traducción ES)
          </h2>
          <div class="space-y-4 ml-4">
            <div>
              <p class="mb-2">
                <strong>2.1.</strong> Al inscribirse, el Participante acepta íntegramente los Términos y Condiciones de Corporate Games y Corporate Cup y exime de responsabilidad a los organizadores, socios y afiliados por cualquier daño resultante de la participación.
              </p>
            </div>
            <div>
              <p class="mb-3">
                <strong>2.2.</strong> El Participante otorga a los organizadores el derecho de:
              </p>
              <ul class="list-disc ml-6 space-y-1 mb-4">
                <li>utilizar sus datos con fines promocionales;</li>
                <li>procesar la información relativa a la inscripción y los resultados;</li>
                <li>utilizar estos datos para promocionar eventos actuales y futuros.</li>
              </ul>
              <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <p class="font-semibold mb-2 text-blue-800">Datos obligatorios:</p>
                <ul class="list-disc ml-6 space-y-1 text-blue-700">
                  <li>Nombre completo, género, fecha de nacimiento</li>
                  <li>Correo electrónico válido y número de teléfono</li>
                  <li>Nombre de la empresa/organización</li>
                </ul>
              </div>
              <p class="text-sm bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                El tratamiento de los datos se realizará de conformidad con el RGPD y la legislación pertinente. El Participante podrá retirar su consentimiento en cualquier momento mediante correo electrónico a: <strong>alina@corporate-games.ro</strong>. La política de privacidad está disponible en{" "}
                <Link href="/documentos/politica-privacidade?lang=es" class="text-primary underline">
                  Política de Privacidad
                </Link>
                .
              </p>
            </div>
            <div>
              <p class="font-semibold mb-3 text-red-700">2.3. Salud y responsabilidad:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li>El Participante acepta los tratamientos médicos de urgencia;</li>
                <li>La participación es bajo su propio riesgo;</li>
                <li>Sport Award S.R.L. no se responsabiliza por lesiones, enfermedades o accidentes;</li>
                <li>
                  El Participante es responsable de su propio seguro y de los daños resultantes del uso del equipo o las instalaciones.
                </li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-3">2.4. Modificaciones:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li>Las ubicaciones y el programa pueden ser modificados;</li>
                <li>En caso de cancelación por motivos no imputables al organizador, no se concederán reembolsos.</li>
              </ul>
            </div>
            <p>
              <strong>2.5.</strong> Los organizadores se reservan el derecho de modificar las condiciones de participación o de rechazar inscripciones a su discreción.
            </p>
            <div>
              <p class="font-semibold mb-2">2.6. Uso de imágenes:</p>
              <p class="ml-4 bg-green-50 p-3 rounded">
                La participación implica la aceptación de que la imagen del Participante pueda ser utilizada en materiales promocionales. La negativa debe comunicarse por escrito, con antelación, a <strong>alina@corporate-games.ro</strong>.
              </p>
            </div>
            <div>
              <p class="font-semibold mb-2">2.7.</p> Los organizadores no se responsabilizan por:
              <ul class="list-disc ml-6 space-y-1 mt-2">
                <li>correspondencia perdida;</li>
                <li>bienes perdidos, robados o dañados;</li>
                <li>accidentes causados por las condiciones del terreno.</li>
              </ul>
            </div>
            <p>
              <strong>2.8.</strong> El idioma oficial de los eventos es el <strong>inglés</strong>.
            </p>
            <div>
              <p class="font-semibold mb-2">2.9. Elegibilidad y conducta:</p>
              <p class="ml-4">
                Los participantes deben tener al menos <strong>18 años</strong> (con las excepciones especificadas). Se exige una conducta deportiva y segura. Los organizadores pueden excluir a cualquier persona por comportamiento inadecuado.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            3. Propiedad intelectual (Traducción ES)
          </h2>
          <p class="ml-4">
            Todos los elementos de propiedad intelectual (logotipos, diseño, contenido, aplicación) pertenecen a sus legítimos propietarios. La participación o el acceso a los servicios no confiere ningún derecho sobre estos.
          </p>
        </div>
        <div class="mt-8 p-4 bg-gray-100 rounded-lg">
          <p class="text-sm text-gray-600 text-center">
            Para preguntas o aclaraciones, contacte con: <strong>alina@corporate-games.ro</strong>
          </p>
        </div>
      </div>
      `,
    },
    ro: {
      title: "Corporate Games Bucharest 2025",
      description: "Acord de Servicii pentru Corporate Games Bucharest 2025",
      backToDocuments: "Înapoi la Termenii Evenimentelor",
      lastUpdated: "Ultima actualizare",
      serviceAgreement: "ACORD DE SERVICII",
      content: `
      <div class="space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-6 text-primary">ACORD DE SERVICII</h1>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg">
          <p class="text-sm leading-relaxed">
            Prezentul acord stabilește Termenii și Condițiile aplicabile serviciilor prestate de{" "}
            <strong>SPORT AWARD S.R.L.</strong>, societate înregistrată la Registrul Comerțului sub nr.{" "}
            <strong>J40/6618/2011</strong>, CUI <strong>RO28562386</strong>, având contul IBAN{" "}
            <strong>RO30BRDE445SV59711784450</strong> deschis la BRD – Sucursala Dacia, cu sediul social în
            București, Str. Nerva Traian nr. 27-33, sc. B, et. 1, sector 3, reprezentată legal de dl.{" "}
            <strong>Radu Rădulescu</strong>, în calitate de administrator.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            1. Obiectul serviciilor
          </h2>
          <div class="space-y-3 ml-4">
            <p>
              <strong>1.1.</strong> Participarea Beneficiarului la evenimente sportive organizate de Sport Award
              S.R.L., conform prezentului acord.
            </p>
            <p>
              <strong>1.2.</strong> Participarea la activități non-sportive, conexe sau independente de activități
              sportive.
            </p>
            <p>
              <strong>1.3.</strong> Accesarea serviciilor prin site-urile corporate-games.com, corporate-games.ro
              sau alte platforme terțe.
            </p>
            <p>
              <strong>1.4.</strong> Utilizarea aplicației mobile Corporate Games (dezvoltată de MeshMe Ltd),
              inclusiv colectarea și prelucrarea datelor personale de către Sport Award S.R.L., în conformitate cu
              legislația privind protecția datelor.
            </p>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            2. Declarații ale participanților
          </h2>
          <div class="space-y-4 ml-4">
            <div>
              <p class="mb-2">
                <strong>2.1.</strong> Prin înscriere, Participantul acceptă integral Termenii și Condițiile
                Corporate Games și Corporate Cup și exonerează de răspundere organizatorii, partenerii și afiliații,
                pentru orice prejudiciu rezultat din participare.
              </p>
            </div>
            <div>
              <p class="mb-3">
                <strong>2.2.</strong> Participantul acordă organizatorilor dreptul de a:
              </p>
              <ul class="list-disc ml-6 space-y-1 mb-4">
                <li>utiliza datele sale în scop promoțional;</li>
                <li>prelucra informațiile privind înscrierea și performanțele;</li>
                <li>utiliza aceste date pentru promovarea evenimentelor actuale e viitoare.</li>
              </ul>
              <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <p class="font-semibold mb-2 text-blue-800">Date obligatorii:</p>
                <ul class="list-disc ml-6 space-y-1 text-blue-700">
                  <li>Nume complet, gen, data nașterii</li>
                  <li>E-mail valid și număr de telefon</li>
                  <li>Numele companiei/organizației</li>
                </ul>
              </div>
              <p class="text-sm bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                Prelucrarea datelor se va realiza conform GDPR și legislației relevante. Participantul își poate
                retrage consimțământul oricând, prin e-mail la: <strong>alina@corporate-games.ro</strong>. Politica
                de confidențialitate este disponibilă la{" "}
                <Link href="/documentos/politica-privacidade?lang=ro" class="text-primary underline">
                  Politica de Confidențialitate
                </Link>
                .
              </p>
            </div>
            <div>
              <p class="font-semibold mb-3 text-red-700">2.3. Sănătate și răspundere:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li>Participantul acceptă tratamentele medicale de urgență;</li>
                <li>Participarea se face pe propria răspundere;</li>
                <li>Sport Award S.R.L. nu răspunde pentru vătămări, îmbolnăviri sau accidente;</li>
                <li>
                  Participantul este responsabil pentru asigurarea proprie și daunele rezultate din folosirea
                  echipamentului sau facilităților.
                </li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-3">2.4. Modificări:</p>
              <ul class="list-disc ml-6 space-y-1">
                <li>Locațiile și programul pot fi modificate;</li>
                <li>În caz de anulare din motive neimputabile organizatorului, nu se acordă rambursări.</li>
              </ul>
            </div>
            <p>
              <strong>2.5.</strong> Organizatorii își rezervă dreptul de a modifica condițiile de participare sau de
              a refuza înscrieri, la propria discreție.
            </p>
            <div>
              <p class="font-semibold mb-2">2.6. Utilizarea imaginilor:</p>
              <p class="ml-4 bg-green-50 p-3 rounded">
                Participarea implică acceptul ca imaginea Participantului să fie folosită în materiale promoționale.
                Refuzul trebuie comunicat în scris, în prealabil, la <strong>alina@corporate-games.ro</strong>.
              </p>
            </div>
            <div>
              <p class="font-semibold mb-2">2.7.</p> Organizatorii nu răspund pentru:
              <ul class="list-disc ml-6 space-y-1 mt-2">
                <li>corespondență pierdută;</li>
                <li>bunuri pierdute, furate sau deteriorate;</li>
                <li>accidente cauzate de condițiile terenului.</li>
              </ul>
            </div>
            <p>
              <strong>2.8.</strong> Limba oficială a evenimentelor este <strong>engleza</strong>.
            </p>
            <div>
              <p class="font-semibold mb-2">2.9. Eligibilitate și conduită:</p>
              <p class="ml-4">
                Participanții trebuie să aibă cel puțin <strong>18 ani</strong> (cu excepțiile precizate). Se impune
                o conduită sportivă și sigură. Organizatorii pot exclude orice persoană pentru comportament
                inadecvat.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-primary border-b-2 border-primary/20 pb-2">
            3. Proprietate intelectuală
          </h2>
          <p class="ml-4">
            Toate elementele de proprietate intelectuală (logo-uri, design, conținut, aplicație) aparțin
            deținătorilor lor legali. Participarea sau accesarea serviciilor nu conferă niciun drept asupra
            acestora.
          </p>
        </div>
        <div class="mt-8 p-4 bg-gray-100 rounded-lg">
          <p class="text-sm text-gray-600 text-center">
            Pentru întrebări sau clarificări, contactați: <strong>alina@corporate-games.ro</strong>
          </p>
        </div>
      </div>
      `,
    },
  }

  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", language)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [language, searchParams, router, pathname])

  return (
    <div className="bg-white relative overflow-hidden">
      <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-20 overflow-hidden">
          <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <Link
              href={`/documentos/termos-eventos?lang=${language}`}
              className="flex items-center text-gray-600 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.backToDocuments}
            </Link>
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
              availableLanguages={["pt-BR", "en", "es", "ro"]}
            />
          </div>
          <div className="text-center">
            <div className="inline-block bg-primary px-6 py-3 mb-4 skew-x-[-5deg] transform">
              <h1 className="text-4xl font-bold text-white skew-x-[5deg] transform">{t.title}</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.description}</p>
            <div className="mt-6 text-sm text-gray-500">
              {t.lastUpdated}: {new Date().toLocaleDateString(language.split("-")[0])}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: t.content || "" }}></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default CorporateGamesBucharest2025Page
