"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const searchParams = useSearchParams()
  const [language, setLanguage] = useState(searchParams.get("lang") || "pt-BR")
  const router = useRouter()
  const pathname = usePathname()

  // Traduções para os diferentes idiomas
  const translations = {
    "pt-BR": {
      title: "Política de Privacidade",
      description: "Nossa política completa sobre privacidade e proteção de dados",
      backToDocuments: "Voltar para Documentos",
      lastUpdated: "Última atualização",
      content: `
      <h2 class="text-2xl font-bold mb-4">POLÍTICA DE PRIVACIDADE – MESHME</h2>

      <p class="mb-4">A MeshMe valoriza sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações ao usar nosso aplicativo ("Serviços"), e delineia seus direitos em relação aos seus dados pessoais e como você pode exercê-los.</p>

      <p class="mb-4">A MeshMe conduz suas atividades de processamento de dados pessoais em estrita conformidade com os regulamentos de proteção de dados aplicáveis, incluindo a Lei Geral de Proteção de Dados do Brasil (Lei nº 13.709/2018 – LGPD), o Regulamento Geral de Proteção de Dados da União Europeia (Regulamento UE 2016/679 – GDPR), o Regulamento Geral de Proteção de Dados do Reino Unido (UK GDPR) e a Lei Federal de Proteção de Dados Pessoais em Posse de Particulares do México (Ley Federal de Protección de Datos Personales en Posesión de los Particulares – LFPDPPP).</p>

      <p class="mb-4">De acordo com o GDPR e UK GDPR, a MeshMe garante que os dados pessoais sejam processados de forma legal, justa e transparente; coletados para fins específicos, explícitos e legítimos; limitados ao que é necessário; precisos e mantidos atualizados; armazenados apenas pelo tempo necessário; e protegidos através de medidas técnicas e organizacionais apropriadas. A MeshMe observa os direitos dos titulares dos dados sob os Artigos 12 a 22 do GDPR e disposições equivalentes sob o UK GDPR, incluindo os direitos de acesso, retificação, exclusão, restrição, portabilidade, objeção e retirada de consentimento.</p>

      <p class="mb-4">De acordo com as disposições da LFPDPPP mexicana, a MeshMe garante que o processamento de dados seja baseado nos princípios de legalidade, consentimento, informação, qualidade, finalidade, lealdade, proporcionalidade e responsabilidade. A MeshMe garante o exercício dos direitos ARCO (acesso, retificação, cancelamento e oposição), e cumpre com os deveres legais de informar os titulares dos dados sobre os propósitos do processamento, garantir salvaguardas de segurança e notificar violações de dados à autoridade competente quando necessário.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">1. Informações que Coletamos</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">1.1 Informações Fornecidas por Você:</h4>
      <p class="mb-4">Podemos coletar os seguintes dados pessoais que você fornece voluntariamente: nome, número de identificação nacional (ex.: RG, CPF), endereço, e-mail, estado civil, idade, número de telefone, atividades preferidas, nível de habilidade e datas e horários de interesse para sessões de prática.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Como Usamos Suas Informações</h3>
      <p class="mb-4">As informações fornecidas são usadas para os seguintes propósitos:</p>
      <p class="mb-4">Registro no aplicativo para identificação do usuário; entrada de dados pessoais e preferências para otimizar a experiência do usuário e matchmaking; criação, edição ou participação em equipes para encorajar competição e conexão entre usuários com interesses comuns; criação, edição ou participação em perfil da empresa para facilitar um ambiente privado para funcionários da mesma empresa se conectarem através de interesses compartilhados; criação, edição ou participação em torneios e desafios para estimular engajamento; assinatura do clube MeshMe para benefícios aprimorados do aplicativo; aluguel de quadras para auxiliar usuários na identificação de instalações disponíveis; criação, edição ou exclusão de perfis de organizadores para delimitar acesso por representantes regionais de Jogos Corporativos; melhoria do gerenciamento e comunicação com clientes; otimização da prospecção de clientes; cumprimento de obrigações financeiras e legais.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Compartilhamento de Informações</h3>
      <p class="mb-4">A MeshMe atualmente compartilha dados pessoais com as seguintes entidades:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Corporate Games Worldwide Limited</li>
        <li>RETIZE SPORTS MEDIA NETWORK LTDA</li>
      </ul>
      <p class="mb-4">Seus dados também podem ser compartilhados com autoridades públicas competentes quando exigido por lei ou ordem judicial, de acordo com o Artigo 7, incisos II e VI da LGPD, Artigo 6(1)(c) do GDPR e UK GDPR, e Artigos 37 e 38 da LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Retenção de Dados</h3>
      <p class="mb-4">Suas informações pessoais serão retidas pela MeshMe apenas pelo período necessário para cumprir os propósitos descritos no item 2. Uma vez que o propósito seja cumprido, seja por solicitação do usuário ou por decisão própria da MeshMe, os dados serão excluídos, a menos que a retenção seja necessária para cumprir obrigações legais, conforme previsto no Artigo 7, incisos II e VI da LGPD, Artigo 17 do GDPR e UK GDPR, e Artigo 11 da LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Segurança de Dados</h3>
      <p class="mb-4">Implementamos medidas técnicas e administrativas apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Embora nos esforcemos para garantir o mais alto nível de segurança, nenhum sistema pode ser garantido como completamente seguro.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Direitos dos Titulares dos Dados</h3>
      <p class="mb-4">De acordo com o Artigo 18 da LGPD, Artigos 12 a 22 do GDPR e UK GDPR, e Artigos 22 a 29 da LFPDPPP, os titulares dos dados têm direito aos seguintes direitos, que podem ser exercidos mediante solicitação:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.1 Confirmação de Processamento e Acesso aos Dados:</h4>
      <p class="mb-4">Você pode solicitar confirmação se processamos seus dados pessoais e acesso a tais dados em formato claro e completo, incluindo sua origem, critérios de processamento e propósitos.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.2 Correção de Dados Incompletos, Imprecisos ou Desatualizados:</h4>
      <p class="mb-4">Você pode solicitar a correção de qualquer informação pessoal incorreta ou desatualizada.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.3 Anonimização, Bloqueio ou Exclusão de Dados:</h4>
      <p class="mb-4">Você pode solicitar anonimização, bloqueio ou exclusão de dados que sejam desnecessários, excessivos ou processados em não conformidade com a legislação aplicável.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.4 Portabilidade de Dados:</h4>
      <p class="mb-4">Você pode solicitar a transferência de seus dados pessoais para outro provedor de serviços, desde que não infrinja segredos comerciais ou industriais.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.5 Exclusão de Dados Processados com Base no Consentimento:</h4>
      <p class="mb-4">Você pode solicitar a exclusão de dados processados sob seu consentimento, a menos que sua retenção seja necessária para cumprir obrigações legais ou regulamentares.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.6 Informações sobre Compartilhamento de Dados:</h4>
      <p class="mb-4">Você tem o direito de ser informado sobre as entidades públicas ou privadas com as quais seus dados foram compartilhados.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.7 Retirada de Consentimento:</h4>
      <p class="mb-4">Você pode retirar seu consentimento a qualquer momento, o que terá efeito apenas para processamento futuro.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.8 Objeção ao Processamento:</h4>
      <p class="mb-4">Você pode objetar ao processamento se não for conduzido de acordo com as leis de proteção de dados aplicáveis.</p>

      <p class="mb-4">Para exercer seus direitos, entre em contato conosco em dpo@meshme.com, especificando sua solicitação. Responderemos dentro dos prazos legais aplicáveis sob cada jurisdição, incluindo 15 dias sob a LGPD, 30 dias sob o GDPR e UK GDPR, e 20 dias úteis sob a LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Processamento de Dados de Crianças e Adolescentes</h3>
      <p class="mb-4">A MeshMe adota salvaguardas específicas para proteger os dados pessoais de crianças e adolescentes em conformidade com a LGPD, GDPR, UK GDPR e LFPDPPP. Todas as atividades de processamento são específicas para o propósito e proporcionais ao contexto e nunca devem ser discriminatórias ou inadequadas. Quando necessário, obtemos consentimento verificável de um pai ou responsável legal antes de processar os dados de menores.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. Transferências Internacionais de Dados</h3>
      <p class="mb-4">Para permitir a operação eficaz e segura de seus serviços, a MeshMe pode armazenar ou processar dados em servidores localizados fora do Brasil. Consequentemente, alguns de seus dados pessoais podem ser transferidos internacionalmente. Tais transferências são conduzidas em total conformidade com a Lei Geral de Proteção de Dados do Brasil (LGPD – Lei nº 13.709/2018), Resolução ANPD nº 19/2024, o GDPR, o UK GDPR e a LFPDPPP.</p>

      <p class="mb-4">De acordo com a Resolução ANPD nº 19/2024, Artigo 44 do GDPR e Artigos 36 e 37 da LFPDPPP, garantimos que as transferências internacionais de dados ocorram apenas onde o país destinatário estrangeiro forneça um nível adequado de proteção, ou através de mecanismos legais como Cláusulas Contratuais Padrão, Cláusulas Contratuais Específicas ou certificações reconhecidas.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Alterações nesta Política de Privacidade</h3>
      <p class="mb-4">Esta Política de Privacidade pode ser atualizada periodicamente. Mudanças materiais serão comunicadas via aplicativo ou por outros meios, conforme apropriado.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. Encarregado de Proteção de Dados (DPO)</h3>
      <p class="mb-4">A MeshMe nomeou um Encarregado de Proteção de Dados para supervisionar a conformidade com esta Política de Privacidade e servir como ponto de contato para quaisquer perguntas ou solicitações relacionadas à privacidade e proteção de dados.</p>
      <p class="mb-4">Contato do DPO: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Contato</h3>
      <p class="mb-4">Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco em: dpo@meshme.com</p>
    `,
    },
    en: {
      title: "Privacy Policy",
      description: "Our complete policy on privacy and data protection",
      backToDocuments: "Back to Documents",
      lastUpdated: "Last updated",
      content: `
      <h2 class="text-2xl font-bold mb-4">PRIVACY POLICY – MESHME</h2>

      <p class="mb-4">MeshMe values your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, share, and safeguard your information when using our application ("Services"), and outlines your rights regarding your personal data and how you may exercise them.</p>

      <p class="mb-4">MeshMe conducts its personal data processing activities in strict compliance with the applicable data protection regulations, including the Brazilian General Data Protection Law (Law No. 13.709/2018 – LGPD), the General Data Protection Regulation of the European Union (Regulation EU 2016/679 – GDPR), the UK General Data Protection Regulation (UK GDPR), and the Federal Law on Protection of Personal Data Held by Private Parties of Mexico (Ley Federal de Protección de Datos Personales en Posesión de los Particulares – LFPDPPP).</p>

      <p class="mb-4">In accordance with the GDPR and UK GDPR, MeshMe ensures that personal data is processed lawfully, fairly and in a transparent manner; collected for specified, explicit and legitimate purposes; limited to what is necessary; accurate and kept up to date; stored only as long as necessary; and protected through appropriate technical and organizational measures. MeshMe observes the rights of data subjects under Articles 12 to 22 of the GDPR and equivalent provisions under the UK GDPR, including the rights of access, rectification, erasure, restriction, portability, objection, and withdrawal of consent.</p>

      <p class="mb-4">Pursuant to the provisions of the Mexican LFPDPPP, MeshMe ensures that data processing is based on the principles of legality, consent, information, quality, purpose, loyalty, proportionality, and accountability. MeshMe guarantees the exercise of ARCO rights (access, rectification, cancellation and opposition), and complies with the legal duties to inform data subjects of the purposes of processing, ensure security safeguards, and notify data breaches to the competent authority when required.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">1. Information We Collect</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">1.1 Information Provided by You:</h4>
      <p class="mb-4">We may collect the following personal data that you provide voluntarily: name, national identification number (e.g., RG, CPF), address, email, marital status, age, telephone number, preferred activities, skill level, and dates and times of interest for practice sessions.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. How We Use Your Information</h3>
      <p class="mb-4">The information provided is used for the following purposes:</p>
      <p class="mb-4">Registration within the app for user identification; entry of personal data and preferences to optimize user experience and matchmaking; creation, editing or participation in teams to encourage competition and connection among users with common interests; creation, editing or participation in a company profile to facilitate a private environment for employees of the same company to connect through shared interests; creation, editing or participation in tournaments and challenges to stimulate engagement; subscription to the MeshMe club for enhanced app benefits; rental of courts to assist users in identifying available facilities; creation, editing or deletion of organizer profiles to delimit access by regional representatives of Corporate Games; improvement of customer management and communication; optimization of client prospecting; fulfillment of financial and legal obligations.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Sharing of Information</h3>
      <p class="mb-4">MeshMe currently shares personal data with the following entities:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Corporate Games Worldwide Limited</li>
        <li>RETIZE SPORTS MEDIA NETWORK LTDA</li>
      </ul>
      <p class="mb-4">Your data may also be shared with competent public authorities when required by law or court order, in accordance with Article 7, items II and VI of the LGPD, Article 6(1)(c) of the GDPR and UK GDPR, and Articles 37 and 38 of the LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Data Retention</h3>
      <p class="mb-4">Your personal information will be retained by MeshMe only for the period necessary to fulfill the purposes described in item 2. Once the purpose is fulfilled, whether by user request or by MeshMe's own decision, the data will be deleted unless retention is required to comply with legal obligations, as provided under Article 7, items II and VI of the LGPD, Article 17 of the GDPR and UK GDPR, and Article 11 of the LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Data Security</h3>
      <p class="mb-4">We implement appropriate technical and administrative measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Although we strive to ensure the highest level of security, no system can be guaranteed to be completely secure.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Data Subject Rights</h3>
      <p class="mb-4">In accordance with Article 18 of the LGPD, Articles 12 to 22 of the GDPR and UK GDPR, and Articles 22 to 29 of the LFPDPPP, data subjects are entitled to the following rights, which may be exercised upon request:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.1 Confirmation of Processing and Access to Data:</h4>
      <p class="mb-4">You may request confirmation of whether we process your personal data and access to such data in a clear and complete format, including its origin, processing criteria and purposes.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.2 Correction of Incomplete, Inaccurate or Outdated Data:</h4>
      <p class="mb-4">You may request the correction of any incorrect or outdated personal information.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.3 Anonymization, Blocking or Deletion of Data:</h4>
      <p class="mb-4">You may request anonymization, blocking or deletion of data that is unnecessary, excessive or processed in noncompliance with applicable legislation.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.4 Data Portability:</h4>
      <p class="mb-4">You may request the transfer of your personal data to another service provider, provided it does not infringe trade or industrial secrets.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.5 Deletion of Data Processed on the Basis of Consent:</h4>
      <p class="mb-4">You may request deletion of data processed under your consent, unless its retention is necessary to fulfill legal or regulatory obligations.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.6 Information Regarding Data Sharing:</h4>
      <p class="mb-4">You have the right to be informed about the public or private entities with which your data has been shared.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.7 Withdrawal of Consent:</h4>
      <p class="mb-4">You may withdraw your consent at any time, which will take effect only for future processing.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.8 Objection to Processing:</h4>
      <p class="mb-4">You may object to processing if it is not conducted in accordance with the applicable data protection laws.</p>

      <p class="mb-4">To exercise your rights, please contact us at dpo@meshme.com, specifying your request. We will respond within the legal deadlines applicable under each jurisdiction, including 15 days under the LGPD, 30 days under the GDPR and UK GDPR, and 20 business days under the LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Processing of Children's and Adolescents' Data</h3>
      <p class="mb-4">MeshMe adopts specific safeguards to protect the personal data of children and adolescents in compliance with the LGPD, GDPR, UK GDPR and LFPDPPP. All processing activities are purpose-specific and proportionate to the context and shall never be discriminatory or inappropriate. Where necessary, we obtain verifiable consent from a parent or legal guardian before processing the data of minors.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. International Data Transfers</h3>
      <p class="mb-4">To enable the effective and secure operation of its services, MeshMe may store or process data on servers located outside Brazil. Accordingly, some of your personal data may be transferred internationally. Such transfers are conducted in full compliance with the Brazilian General Data Protection Law (LGPD – Law No. 13.709/2018), ANPD Resolution No. 19/2024, the GDPR, the UK GDPR and the LFPDPPP.</p>

      <p class="mb-4">Pursuant to ANPD Resolution No. 19/2024, Article 44 of the GDPR, and Articles 36 and 37 of the LFPDPPP, we ensure that international data transfers occur only where the foreign recipient country provides an adequate level of protection, or through legal mechanisms such as Standard Contractual Clauses, Specific Contractual Clauses or recognized certifications.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Amendments to this Privacy Policy</h3>
      <p class="mb-4">This Privacy Policy may be updated periodically. Material changes will be communicated via the application or by other means, as appropriate.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. Data Protection Officer (DPO)</h3>
      <p class="mb-4">MeshMe has appointed a Data Protection Officer to oversee compliance with this Privacy Policy and serve as a point of contact for any questions or requests related to privacy and data protection.</p>
      <p class="mb-4">DPO Contact: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Contact</h3>
      <p class="mb-4">If you have any questions or concerns regarding this Privacy Policy, please contact us at: dpo@meshme.com</p>
    `,
    },
    es: {
      title: "Política de Privacidad",
      description: "Nuestra política completa sobre privacidad y protección de datos",
      backToDocuments: "Volver a Documentos",
      lastUpdated: "Última actualización",
      content: `
      <h2 class="text-2xl font-bold mb-4">POLÍTICA DE PRIVACIDAD – MESHME</h2>

      <p class="mb-4">MeshMe valora su privacidad y está comprometida a proteger sus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información al usar nuestra aplicación ("Servicios"), y describe sus derechos con respecto a sus datos personales y cómo puede ejercerlos.</p>

      <p class="mb-4">MeshMe conduce sus actividades de procesamiento de datos personales en estricto cumplimiento con las regulaciones de protección de datos aplicables, incluida la Ley General de Protección de Datos de Brasil (Ley No. 13.709/2018 – LGPD), el Reglamento General de Protección de Datos de la Unión Europea (Reglamento UE 2016/679 – GDPR), el Reglamento General de Protección de Datos del Reino Unido (UK GDPR) y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares de México (LFPDPPP).</p>

      <p class="mb-4">De acuerdo con el GDPR y UK GDPR, MeshMe garantiza que los datos personales se procesen de manera legal, justa y transparente; se recopilen para fines específicos, explícitos y legítimos; se limiten a lo necesario; sean precisos y se mantengan actualizados; se almacenen solo el tiempo necesario; y se protejan a través de medidas técnicas y organizativas apropiadas. MeshMe observa los derechos de los sujetos de datos bajo los Artículos 12 a 22 del GDPR y disposiciones equivalentes bajo el UK GDPR, incluidos los derechos de acceso, rectificación, eliminación, restricción, portabilidad, objeción y retirada de consentimiento.</p>

      <p class="mb-4">De acuerdo con las disposiciones de la LFPDPPP mexicana, MeshMe garantiza que el procesamiento de datos se base en los principios de legalidad, consentimiento, información, calidad, propósito, lealtad, proporcionalidad y responsabilidad. MeshMe garantiza el ejercicio de los derechos ARCO (acceso, rectificación, cancelación y oposición), y cumple con los deberes legales de informar a los sujetos de datos sobre los propósitos del procesamiento, garantizar salvaguardas de seguridad y notificar violaciones de datos a la autoridad competente cuando sea requerido.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">1. Información que Recopilamos</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">1.1 Información Proporcionada por Usted:</h4>
      <p class="mb-4">Podemos recopilar los siguientes datos personales que usted proporciona voluntariamente: nombre, número de identificación nacional (ej.: RG, CPF), dirección, correo electrónico, estado civil, edad, número de teléfono, actividades preferidas, nivel de habilidad y fechas y horarios de interés para sesiones de práctica.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Cómo Usamos Su Información</h3>
      <p class="mb-4">La información proporcionada se usa para los siguientes propósitos:</p>
      <p class="mb-4">Registro en la aplicación para identificación del usuario; entrada de datos personales y preferencias para optimizar la experiencia del usuario y emparejamiento; creación, edición o participación en equipos para fomentar la competencia y conexión entre usuarios con intereses comunes; creación, edición o participación en perfil de empresa para facilitar un ambiente privado para empleados de la misma empresa para conectarse a través de intereses compartidos; creación, edición o participación en torneos y desafíos para estimular el compromiso; suscripción al club MeshMe para beneficios mejorados de la aplicación; alquiler de canchas para ayudar a los usuarios a identificar instalaciones disponibles; creación, edición o eliminación de perfiles de organizadores para delimitar el acceso por representantes regionales de Juegos Corporativos; mejora de la gestión y comunicación con clientes; optimización de la prospección de clientes; cumplimiento de obligaciones financieras y legales.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Compartir Información</h3>
      <p class="mb-4">MeshMe actualmente comparte datos personales con las siguientes entidades:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Corporate Games Worldwide Limited</li>
        <li>RETIZE SPORTS MEDIA NETWORK LTDA</li>
      </ul>
      <p class="mb-4">Sus datos también pueden ser compartidos con autoridades públicas competentes cuando sea requerido por ley u orden judicial, de acuerdo con el Artículo 7, incisos II y VI de la LGPD, Artículo 6(1)(c) del GDPR y UK GDPR, y Artículos 37 y 38 de la LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Retención de Datos</h3>
      <p class="mb-4">Su información personal será retenida por MeshMe solo por el período necesario para cumplir los propósitos descritos en el ítem 2. Una vez que se cumpla el propósito, ya sea por solicitud del usuario o por decisión propia de MeshMe, los datos serán eliminados a menos que la retención sea requerida para cumplir obligaciones legales, como se establece en el Artículo 7, incisos II y VI de la LGPD, Artículo 17 del GDPR y UK GDPR, y Artículo 11 de la LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Seguridad de Datos</h3>
      <p class="mb-4">Implementamos medidas técnicas y administrativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Aunque nos esforzamos por garantizar el más alto nivel de seguridad, ningún sistema puede garantizarse como completamente seguro.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Derechos de los Sujetos de Datos</h3>
      <p class="mb-4">De acuerdo con el Artículo 18 de la LGPD, Artículos 12 a 22 del GDPR y UK GDPR, y Artículos 22 a 29 de la LFPDPPP, los sujetos de datos tienen derecho a los siguientes derechos, que pueden ejercerse mediante solicitud:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.1 Confirmación de Procesamiento y Acceso a Datos:</h4>
      <p class="mb-4">Puede solicitar confirmación de si procesamos sus datos personales y acceso a dichos datos en un formato claro y completo, incluyendo su origen, criterios de procesamiento y propósitos.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.2 Corrección de Datos Incompletos, Inexactos o Desactualizados:</h4>
      <p class="mb-4">Puede solicitar la corrección de cualquier información personal incorrecta o desactualizada.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.3 Anonimización, Bloqueo o Eliminación de Datos:</h4>
      <p class="mb-4">Puede solicitar anonimización, bloqueo o eliminación de datos que sean innecesarios, excesivos o procesados en incumplimiento con la legislación aplicable.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.4 Portabilidad de Datos:</h4>
      <p class="mb-4">Puede solicitar la transferencia de sus datos personales a otro proveedor de servicios, siempre que no infrinja secretos comerciales o industriales.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.5 Eliminación de Datos Procesados en Base al Consentimiento:</h4>
      <p class="mb-4">Puede solicitar la eliminación de datos procesados bajo su consentimiento, a menos que su retención sea necesaria para cumplir obligaciones legales o regulatorias.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.6 Información sobre Compartir Datos:</h4>
      <p class="mb-4">Tiene derecho a ser informado sobre las entidades públicas o privadas con las que sus datos han sido compartidos.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.7 Retirada de Consentimiento:</h4>
      <p class="mb-4">Puede retirar su consentimiento en cualquier momento, lo que tendrá efecto solo para procesamiento futuro.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.8 Objeción al Procesamiento:</h4>
      <p class="mb-4">Puede objetar al procesamiento si no se conduce de acuerdo con las leyes de protección de datos aplicables.</p>

      <p class="mb-4">Para ejercer sus derechos, contáctenos en dpo@meshme.com, especificando su solicitud. Responderemos dentro de los plazos legales aplicables bajo cada jurisdicción, incluyendo 15 días bajo la LGPD, 30 días bajo el GDPR y UK GDPR, y 20 días hábiles bajo la LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Procesamiento de Datos de Niños y Adolescentes</h3>
      <p class="mb-4">MeshMe adopta salvaguardas específicas para proteger los datos personales de niños y adolescentes en cumplimiento con la LGPD, GDPR, UK GDPR y LFPDPPP. Todas las actividades de procesamiento son específicas para el propósito y proporcionales al contexto y nunca deben ser discriminatorias o inapropiadas. Cuando sea necesario, obtenemos consentimiento verificable de un padre o tutor legal antes de procesar los datos de menores.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. Transferencias Internacionales de Datos</h3>
      <p class="mb-4">Para permitir la operación efectiva y segura de sus servicios, MeshMe puede almacenar o procesar datos en servidores ubicados fuera de Brasil. En consecuencia, algunos de sus datos personales pueden ser transferidos internacionalmente. Tales transferencias se realizan en total cumplimiento con la Ley General de Protección de Datos de Brasil (LGPD – Ley No. 13.709/2018), Resolución ANPD No. 19/2024, el GDPR, el UK GDPR y la LFPDPPP.</p>

      <p class="mb-4">De acuerdo con la Resolución ANPD No. 19/2024, Artículo 44 del GDPR y Artículos 36 y 37 de la LFPDPPP, garantizamos que las transferencias internacionales de datos ocurran solo donde el país destinatario extranjero proporcione un nivel adecuado de protección, o a través de mecanismos legales como Cláusulas Contractuales Estándar, Cláusulas Contractuales Específicas o certificaciones reconocidas.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Enmiendas a esta Política de Privacidad</h3>
      <p class="mb-4">Esta Política de Privacidad puede ser actualizada periódicamente. Los cambios materiales serán comunicados a través de la aplicación o por otros medios, según sea apropiado.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. Oficial de Protección de Datos (DPO)</h3>
      <p class="mb-4">MeshMe ha designado un Oficial de Protección de Datos para supervisar el cumplimiento de esta Política de Privacidad y servir como punto de contacto para cualquier pregunta o solicitud relacionada con privacidad y protección de datos.</p>
      <p class="mb-4">Contacto del DPO: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Contacto</h3>
      <p class="mb-4">Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, contáctenos en: dpo@meshme.com</p>
    `,
    },
    ro: {
      title: "Politica de Confidențialitate",
      description: "Politica noastră completă privind confidențialitatea și protecția datelor",
      backToDocuments: "Înapoi la Documente",
      lastUpdated: "Ultima actualizare",
      content: `
      <h2 class="text-2xl font-bold mb-4">POLITICA DE CONFIDENȚIALITATE – MESHME</h2>

      <p class="mb-4">MeshMe valorează confidențialitatea dvs. și este angajată să vă protejeze datele personale. Această Politică de Confidențialitate descrie modul în care colectăm, utilizăm, partajăm și protejăm informațiile dvs. atunci când utilizați aplicația noastră ("Servicii"), și prezintă drepturile dvs. cu privire la datele personale și modul în care le puteți exercita.</p>

      <p class="mb-4">MeshMe își desfășoară activitățile de procesare a datelor personale în strictă conformitate cu reglementările aplicabile privind protecția datelor, inclusiv Legea Generală de Protecție a Datelor din Brazilia (Legea nr. 13.709/2018 – LGPD), Regulamentul General privind Protecția Datelor din Uniunea Europeană (Regulamentul UE 2016/679 – GDPR), Regulamentul General privind Protecția Datelor din Regatul Unit (UK GDPR) și Legea Federală privind Protecția Datelor Personale deținute de Părți Private din Mexic (Ley Federal de Protección de Datos Personales en Posesión de los Particulares – LFPDPPP).</p>

      <p class="mb-4">În conformitate cu GDPR și UK GDPR, MeshMe asigură că datele personale sunt procesate în mod legal, corect și transparent; colectate pentru scopuri specifice, explicite și legitime; limitate la ceea ce este necesar; precise și menținute actualizate; stocate doar atât timp cât este necesar; și protejate prin măsuri tehnice și organizaționale adecvate. MeshMe respectă drepturile persoanelor vizate conform articolelor 12-22 din GDPR și dispozițiilor echivalente din UK GDPR, inclusiv drepturile de acces, rectificare, ștergere, restricționare, portabilitate, opoziție și retragerea consimțământului.</p>

      <p class="mb-4">În conformitate cu dispozițiile LFPDPPP mexicane, MeshMe asigură că procesarea datelor se bazează pe principiile de legalitate, consimțământ, informare, calitate, scop, loialitate, proporționalitate și responsabilitate. MeshMe garantează exercitarea drepturilor ARCO (acces, rectificare, anulare și opoziție) și respectă obligațiile legale de a informa persoanele vizate despre scopurile procesării, de a asigura măsuri de securitate și de a notifica încălcările de date autorității competente când este necesar.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">1. Informațiile pe care le Colectăm</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">1.1 Informații Furnizate de Dvs.:</h4>
      <p class="mb-4">Putem colecta următoarele date personale pe care le furnizați voluntar: nume, numărul de identificare națională (de ex., RG, CPF), adresă, email, starea civilă, vârsta, numărul de telefon, activitățile preferate, nivelul de abilitate și datele și orele de interes pentru sesiunile de practică.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Cum Utilizăm Informațiile Dvs.</h3>
      <p class="mb-4">Informațiile furnizate sunt utilizate în următoarele scopuri:</p>
      <p class="mb-4">Înregistrarea în aplicație pentru identificarea utilizatorului; introducerea datelor personale și preferințelor pentru optimizarea experienței utilizatorului și potrivirea; crearea, editarea sau participarea în echipe pentru a încuraja competiția și conexiunea între utilizatorii cu interese comune; crearea, editarea sau participarea într-un profil de companie pentru a facilita un mediu privat pentru angajații aceleiași companii să se conecteze prin interese comune; crearea, editarea sau participarea în turnee și provocări pentru a stimula angajamentul; abonarea la clubul MeshMe pentru beneficii îmbunătățite ale aplicației; închirierea terenurilor pentru a ajuta utilizatorii să identifice facilitățile disponibile; crearea, editarea sau ștergerea profilurilor de organizatori pentru a delimita accesul reprezentanților regionali ai Jocurilor Corporative; îmbunătățirea managementului și comunicării cu clienții; optimizarea prospectării clienților; îndeplinirea obligațiilor financiare și legale.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Partajarea Informațiilor</h3>
      <p class="mb-4">MeshMe partajează în prezent datele personale cu următoarele entități:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Corporate Games Worldwide Limited</li>
        <li>RETIZE SPORTS MEDIA NETWORK LTDA</li>
      </ul>
      <p class="mb-4">Datele dvs. pot fi, de asemenea, partajate cu autoritățile publice competente când este cerut de lege sau prin ordin judecătoresc, în conformitate cu articolul 7, punctele II și VI din LGPD, articolul 6(1)(c) din GDPR și UK GDPR și articolele 37 și 38 din LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Reținerea Datelor</h3>
      <p class="mb-4">Informațiile dvs. personale vor fi reținute de MeshMe doar pentru perioada necesară pentru îndeplinirea scopurilor descrise în punctul 2. Odată ce scopul este îndeplinit, fie la cererea utilizatorului, fie prin decizia proprie a MeshMe, datele vor fi șterse, cu excepția cazului în care reținerea este necesară pentru respectarea obligațiilor legale, conform prevederilor articolului 7, punctele II și VI din LGPD, articolul 17 din GDPR și UK GDPR și articolul 11 din LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Securitatea Datelor</h3>
      <p class="mb-4">Implementăm măsuri tehnice și administrative adecvate pentru a vă proteja datele personale împotriva accesului neautorizat, alterării, divulgării sau distrugerii. Deși ne străduim să asigurăm cel mai înalt nivel de securitate, niciun sistem nu poate fi garantat ca fiind complet sigur.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Drepturile Persoanelor Vizate</h3>
      <p class="mb-4">În conformitate cu articolul 18 din LGPD, articolele 12-22 din GDPR și UK GDPR și articolele 22-29 din LFPDPPP, persoanele vizate au dreptul la următoarele drepturi, care pot fi exercitate la cerere:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.1 Confirmarea Procesării și Accesul la Date:</h4>
      <p class="mb-4">Puteți solicita confirmarea dacă procesăm datele dvs. personale și accesul la astfel de date într-un format clar și complet, inclusiv originea, criteriile de procesare și scopurile acestora.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.2 Corectarea Datelor Incomplete, Inexacte sau Învechite:</h4>
      <p class="mb-4">Puteți solicita corectarea oricăror informații personale incorecte sau învechite.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.3 Anonimizarea, Blocarea sau Ștergerea Datelor:</h4>
      <p class="mb-4">Puteți solicita anonimizarea, blocarea sau ștergerea datelor care sunt inutile, excesive sau procesate în neconformitate cu legislația aplicabilă.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.4 Portabilitatea Datelor:</h4>
      <p class="mb-4">Puteți solicita transferul datelor dvs. personale către un alt furnizor de servicii, cu condiția să nu încalce secretele comerciale sau industriale.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.5 Ștergerea Datelor Procesate pe Baza Consimțământului:</h4>
      <p class="mb-4">Puteți solicita ștergerea datelor procesate sub consimțământul dvs., cu excepția cazului în care reținerea acestora este necesară pentru îndeplinirea obligațiilor legale sau de reglementare.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.6 Informații privind Partajarea Datelor:</h4>
      <p class="mb-4">Aveți dreptul să fiți informat despre entitățile publice sau private cu care datele dvs. au fost partajate.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.7 Retragerea Consimțământului:</h4>
      <p class="mb-4">Puteți retrage consimțământul în orice moment, ceea ce va avea efect doar pentru procesarea viitoare.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">6.8 Opoziția la Procesare:</h4>
      <p class="mb-4">Puteți obiecta la procesare dacă nu este efectuată în conformitate cu legile aplicabile privind protecția datelor.</p>

      <p class="mb-4">Pentru a vă exercita drepturile, vă rugăm să ne contactați la dpo@meshme.com, specificând cererea dvs. Vom răspunde în termenele legale aplicabile în fiecare jurisdicție, inclusiv 15 zile sub LGPD, 30 de zile sub GDPR și UK GDPR și 20 de zile lucrătoare sub LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Procesarea Datelor Copiilor și Adolescenților</h3>
      <p class="mb-4">MeshMe adoptă măsuri de protecție specifice pentru a proteja datele personale ale copiilor și adolescenților în conformitate cu LGPD, GDPR, UK GDPR și LFPDPPP. Toate activitățile de procesare sunt specifice scopului și proporționale cu contextul și nu trebuie să fie niciodată discriminatorii sau inadecvate. Când este necesar, obținem consimțământul verificabil de la un părinte sau tutore legal înainte de a procesa datele minorilor.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. Transferuri Internaționale de Date</h3>
      <p class="mb-4">Pentru a permite operarea eficientă și sigură a serviciilor sale, MeshMe poate stoca sau procesa date pe servere situate în afara Braziliei. În consecință, unele dintre datele dvs. personale pot fi transferate internațional. Astfel de transferuri sunt efectuate în deplină conformitate cu Legea Generală de Protecție a Datelor din Brazilia (LGPD – Legea nr. 13.709/2018), Rezoluția ANPD nr. 19/2024, GDPR, UK GDPR și LFPDPPP.</p>

      <p class="mb-4">În conformitate cu Rezoluția ANPD nr. 19/2024, articolul 44 din GDPR și articolele 36 și 37 din LFPDPPP, ne asigurăm că transferurile internaționale de date au loc doar acolo unde țara destinatară străină oferă un nivel adecvat de protecție, sau prin mecanisme legale precum Clauzele Contractuale Standard, Clauzele Contractuale Specifice sau certificările recunoscute.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Modificări ale acestei Politici de Confidențialitate</h3>
      <p class="mb-4">Această Politică de Confidențialitate poate fi actualizată periodic. Modificările materiale vor fi comunicate prin aplicație sau prin alte mijloace, după caz.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. Responsabilul cu Protecția Datelor (DPO)</h3>
      <p class="mb-4">MeshMe a numit un Responsabil cu Protecția Datelor pentru a supraveghea conformitatea cu această Politică de Confidențialitate și pentru a servi ca punct de contact pentru orice întrebări sau cereri legate de confidențialitate și protecția datelor.</p>
      <p class="mb-4">Contact DPO: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Contact</h3>
      <p class="mb-4">Dacă aveți întrebări sau preocupări cu privire la această Politică de Confidențialitate, vă rugăm să ne contactați la: dpo@meshme.com</p>
    `,
    },
  }

  const t = translations[language as keyof typeof translations]

  // Atualiza a URL quando o idioma muda
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", language)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [language, searchParams, router, pathname])

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[180px] h-[180px] opacity-20 overflow-hidden">
          <div className="w-full h-full animate-rotate-slow">
            <img src="/sun-orange.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <Link
              href={`/termos-e-condicoes?lang=${language}`}
              className="flex items-center text-gray-600 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.backToDocuments}
            </Link>
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
          <div className="text-center">
            <div className="inline-block bg-primary px-6 py-3 mb-4 skew-x-[-5deg] transform">
              <h1 className="text-4xl font-bold text-white skew-x-[5deg] transform">{t.title}</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.description}</p>
            <div className="mt-6 text-sm text-gray-500">
              {t.lastUpdated}: {new Date().toLocaleDateString(language)}
            </div>
          </div>
        </div>
      </section>

      {/* Document Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: t.content }}></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
