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

      <h4 class="text-lg font-semibold mt-4 mb-2">1.2 Dados de Saúde e Atividade Física:</h4>
      <p class="mb-4">Essas integrações podem incluir, mas não se limitam a, Strava, Google Health / Google Fit e Apple Health / HealthKit.</p>
      <p class="mb-4">Através das integrações mencionadas acima, a MeshMe pode processar as seguintes categorias de dados relacionados à atividade física:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Tipo de atividade física</li>
        <li>Duração das atividades</li>
        <li>Distância percorrida</li>
        <li>Contagem de passos</li>
        <li>Calorias ativas</li>
        <li>Frequência cardíaca, quando disponibilizada pela plataforma integrada</li>
        <li>Data e hora das atividades</li>
      </ul>
      <p class="mb-4">A MeshMe não coleta registros médicos, diagnósticos clínicos ou dados de saúde não relacionados à atividade física e engajamento em bem-estar.</p>
      <p class="mb-4">A MeshMe aplica o princípio da minimização de dados e processa apenas os dados estritamente necessários para cada funcionalidade, programa ou campanha específica, conforme explicitamente autorizado pelo usuário através de mecanismos de opt-in.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Como Usamos Suas Informações</h3>
      <p class="mb-4">As informações fornecidas são usadas para os seguintes propósitos:</p>
      <p class="mb-4">Registro no aplicativo para identificação do usuário; entrada de dados pessoais e preferências para otimizar a experiência do usuário e matchmaking; criação, edição ou participação em equipes para encorajar competição e conexão entre usuários com interesses comuns; criação, edição ou participação em perfil da empresa para facilitar um ambiente privado para funcionários da mesma empresa se conectarem através de interesses compartilhados; criação, edição ou participação em torneios e desafios para estimular engajamento; assinatura do clube MeshMe para benefícios aprimorados do aplicativo; aluguel de quadras para auxiliar usuários na identificação de instalações disponíveis; criação, edição ou exclusão de perfis de organizadores para delimitar acesso por representantes regionais de Jogos Corporativos; melhoria do gerenciamento e comunicação com clientes; otimização da prospecção de clientes; cumprimento de obrigações financeiras e legais.</p>
      <p class="mb-4">Os dados coletados através de integrações de saúde de terceiros são usados especificamente para:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Registrar atividades físicas dentro do aplicativo</li>
        <li>Calcular desafios, rankings, metas e métricas de engajamento</li>
        <li>Habilitar distribuição de recompensas e mecanismos de incentivo</li>
        <li>Melhorar a experiência do usuário e funcionalidade da plataforma</li>
      </ul>
      <p class="mb-4">Tais dados não são usados para fins publicitários nem para tomada de decisão automatizada que produza efeitos legais ou similarmente significativos.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Dados do Apple Health / HealthKit</h3>
      <p class="mb-4">Os dados obtidos através do Apple Health / HealthKit:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Não são usados para fins publicitários</li>
        <li>Não são vendidos a terceiros</li>
        <li>Não são compartilhados com terceiros, exceto quando estritamente necessário para fornecer funcionalidades explicitamente solicitadas pelo usuário</li>
        <li>A MeshMe não escreve ou modifica dados dentro do Apple Health</li>
      </ul>
      <p class="mb-4">A MeshMe usa dados do Apple Health exclusivamente para habilitar recursos relacionados ao rastreamento de atividade física, engajamento e desafios, conforme descrito nesta Política de Privacidade.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Base Legal para Processamento de Dados de Saúde</h3>
      <p class="mb-4">O processamento de dados pessoais classificados como sensíveis, incluindo dados de saúde e atividade física, é realizado com base no consentimento explícito do titular dos dados, conforme o Artigo 11, inciso I da Lei Geral de Proteção de Dados (LGPD), Artigo 9(2)(a) do GDPR e UK GDPR, e disposições aplicáveis da LFPDPPP.</p>
      <p class="mb-4">Quando dados de saúde e atividade física são compartilhados com empregadores ou patrocinadores, tal processamento é baseado no consentimento explícito, informado e granular do titular dos dados, obtido separadamente para cada programa ou campanha. O consentimento pode ser retirado a qualquer momento, sem afetar o processamento legal anterior.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Compartilhamento de Informações</h3>
      <p class="mb-4">A MeshMe atualmente compartilha dados pessoais com as seguintes entidades:</p>
      <p class="mb-4">Corporate Games Worldwide Limited</p>
      <p class="mb-4">Seus dados também podem ser compartilhados com autoridades públicas competentes quando exigido por lei ou ordem judicial, de acordo com o Artigo 7, incisos II e VI da LGPD, Artigo 6(1)(c) do GDPR e UK GDPR, e Artigos 37 e 38 da LFPDPPP.</p>
      <p class="mb-4">A MeshMe pode compartilhar dados pessoais, incluindo dados de saúde e atividade física, com empregadores e patrocinadores, estritamente sob as condições descritas abaixo e apenas mediante consentimento explícito do usuário.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">a) Compartilhamento com Empregadores</h4>
      <p class="mb-4">Quando o usuário participa de um programa, desafio ou iniciativa patrocinado pela empresa, e expressamente opta por participar, a MeshMe pode compartilhar dados individuais ou agregados de atividade física com o respectivo empregador exclusivamente para fins de engajamento, bem-estar e relacionados ao programa.</p>
      <p class="mb-4">Tal compartilhamento de dados:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Ocorre apenas após opt-in explícito do usuário</li>
        <li>É limitado ao escopo do programa ou campanha específica</li>
        <li>Não inclui registros médicos ou dados clínicos</li>
        <li>A MeshMe não determina ou controla como os empregadores podem usar internamente os dados após serem compartilhados legalmente, o que permanece de responsabilidade exclusiva do empregador sob as leis trabalhistas e de proteção de dados aplicáveis.</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">b) Compartilhamento com Patrocinadores e Parceiros</h4>
      <p class="mb-4">Ao participar de campanhas, promoções ou desafios patrocinados, os usuários podem escolher explicitamente optar por compartilhar dados específicos com patrocinadores ou parceiros envolvidos na campanha.</p>
      <p class="mb-4">Dependendo do contexto, a MeshMe atua como controladora ou processadora de dados. Em programas patrocinados por empresas, os empregadores atuam como controladores de dados independentes em relação ao uso de dados de funcionários após acesso legal. A MeshMe atua como plataforma de tecnologia e é responsável apenas pelas atividades de processamento descritas nesta Política de Privacidade.</p>
      <p class="mb-4">Em tais casos:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Apenas os dados necessários para os objetivos da campanha são compartilhados</li>
        <li>O escopo dos dados compartilhados é claramente divulgado no momento do consentimento</li>
        <li>Os patrocinadores recebem dados exclusivamente para execução da campanha, recompensas, benefícios ou medição de engajamento</li>
        <li>Os dados não são reutilizados pelos patrocinadores para fins não relacionados</li>
      </ul>
      <p class="mb-4">A MeshMe não vende dados pessoais e não autoriza uso comercial irrestrito de dados de usuários.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Retenção de Dados</h3>
      <p class="mb-4">Suas informações pessoais serão retidas pela MeshMe apenas pelo período necessário para cumprir os propósitos descritos no item 2. Uma vez que o propósito seja cumprido, seja por solicitação do usuário ou por decisão própria da MeshMe, os dados serão excluídos, a menos que a retenção seja necessária para cumprir obrigações legais, conforme previsto no Artigo 7, incisos II e VI da LGPD, Artigo 17 do GDPR e UK GDPR, e Artigo 11 da LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Segurança de Dados</h3>
      <p class="mb-4">Implementamos medidas técnicas e administrativas apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Embora nos esforcemos para garantir o mais alto nível de segurança, nenhum sistema pode ser garantido como completamente seguro.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. Direitos dos Titulares dos Dados</h3>
      <p class="mb-4">De acordo com o Artigo 18 da LGPD, Artigos 12 a 22 do GDPR e UK GDPR, e Artigos 22 a 29 da LFPDPPP, os titulares dos dados têm direito aos seguintes direitos, que podem ser exercidos mediante solicitação:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.1 Confirmação de Processamento e Acesso aos Dados:</h4>
      <p class="mb-4">Você pode solicitar confirmação se processamos seus dados pessoais e acesso a tais dados em formato claro e completo, incluindo sua origem, critérios de processamento e propósitos.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.2 Correção de Dados Incompletos, Imprecisos ou Desatualizados:</h4>
      <p class="mb-4">Você pode solicitar a correção de qualquer informação pessoal incorreta ou desatualizada.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.3 Anonimização, Bloqueio ou Exclusão de Dados:</h4>
      <p class="mb-4">Você pode solicitar anonimização, bloqueio ou exclusão de dados que sejam desnecessários, excessivos ou processados em não conformidade com a legislação aplicável.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.4 Portabilidade de Dados:</h4>
      <p class="mb-4">Você pode solicitar a transferência de seus dados pessoais para outro provedor de serviços, desde que não infrinja segredos comerciais ou industriais.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.5 Exclusão de Dados Processados com Base no Consentimento:</h4>
      <p class="mb-4">Você pode solicitar a exclusão de dados processados sob seu consentimento, a menos que sua retenção seja necessária para cumprir obrigações legais ou regulamentares.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.6 Informações sobre Compartilhamento de Dados:</h4>
      <p class="mb-4">Você tem o direito de ser informado sobre as entidades públicas ou privadas com as quais seus dados foram compartilhados.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.7 Retirada de Consentimento:</h4>
      <p class="mb-4">Você pode retirar seu consentimento a qualquer momento, o que terá efeito apenas para processamento futuro.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.8 Objeção ao Processamento:</h4>
      <p class="mb-4">Você pode objetar ao processamento se não for conduzido de acordo com as leis de proteção de dados aplicáveis.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.9 Revogar consentimento para integrações de saúde de terceiros a qualquer momento</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.10 Desconectar Strava, Google Health ou Apple Health diretamente através do aplicativo</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.11 Solicitar exclusão de dados importados de plataformas de terceiros</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.12 Visualizar, gerenciar e revogar consentimento concedido para compartilhamento de dados com empregadores ou patrocinadores a qualquer momento</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.13 Solicitar informações sobre o escopo específico, destinatários e duração de qualquer compartilhamento de dados autorizado através de campanhas opt-in</h4>

      <p class="mb-4">Para exercer seus direitos, entre em contato conosco em dpo@meshme.com, especificando sua solicitação. Responderemos dentro dos prazos legais aplicáveis sob cada jurisdição, incluindo 15 dias sob a LGPD, 30 dias sob o GDPR e UK GDPR, e 20 dias úteis sob a LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Processamento de Dados de Crianças e Adolescentes</h3>
      <p class="mb-4">A MeshMe adota salvaguardas específicas para proteger os dados pessoais de crianças e adolescentes em conformidade com a LGPD, GDPR, UK GDPR e LFPDPPP. Todas as atividades de processamento são específicas para o propósito e proporcionais ao contexto e nunca devem ser discriminatórias ou inadequadas. Quando necessário, obtemos consentimento verificável de um pai ou responsável legal antes de processar os dados de menores.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. Transferências Internacionais de Dados</h3>
      <p class="mb-4">Para permitir a operação eficaz e segura de seus serviços, a MeshMe pode armazenar ou processar dados em servidores localizados fora do Brasil. Consequentemente, alguns de seus dados pessoais podem ser transferidos internacionalmente. Tais transferências são conduzidas em total conformidade com a Lei Geral de Proteção de Dados do Brasil (LGPD – Lei nº 13.709/2018), Resolução ANPD nº 19/2024, o GDPR, o UK GDPR e a LFPDPPP.</p>
      <p class="mb-4">De acordo com a Resolução ANPD nº 19/2024, Artigo 44 do GDPR e Artigos 36 e 37 da LFPDPPP, garantimos que as transferências internacionais de dados ocorram apenas onde o país destinatário estrangeiro forneça um nível adequado de proteção, ou através de mecanismos legais como Cláusulas Contratuais Padrão, Cláusulas Contratuais Específicas ou certificações reconhecidas.</p>
      <p class="mb-4">Adotamos as seguintes salvaguardas:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Decisões de adequação pela autoridade relevante ao transferir dados para países considerados com proteção adequada;</li>
        <li>Execução de Cláusulas Contratuais Padrão aprovadas por autoridades competentes;</li>
        <li>Uso de mecanismos contratuais específicos e certificações reconhecidas quando necessário;</li>
        <li>Avaliações periódicas dos riscos associados a transferências internacionais;</li>
        <li>Implementação de medidas de segurança rigorosas para proteger seus dados pessoais e manter seus direitos como titular dos dados.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Alterações nesta Política de Privacidade</h3>
      <p class="mb-4">Esta Política de Privacidade pode ser atualizada periodicamente. Mudanças materiais serão comunicadas via aplicativo ou por outros meios, conforme apropriado.</p>
      <p class="mb-4">Mudanças materiais relacionadas ao processamento de dados de saúde ou dados pessoais sensíveis serão claramente comunicadas aos usuários antes de entrarem em vigor.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">12. Encarregado de Proteção de Dados (DPO)</h3>
      <p class="mb-4">A MeshMe nomeou um Encarregado de Proteção de Dados para supervisionar a conformidade com esta Política de Privacidade e servir como ponto de contato para quaisquer perguntas ou solicitações relacionadas à privacidade e proteção de dados.</p>
      <p class="mb-4">Contato do DPO: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">13. Contato</h3>
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

      <h4 class="text-lg font-semibold mt-4 mb-2">1.2 Health and Physical Activity Data:</h4>
      <p class="mb-4">These integrations may include, but are not limited to, Strava, Google Health / Google Fit and Apple Health / HealthKit.</p>
      <p class="mb-4">Through the integrations mentioned above, MeshMe may process the following categories of data related to physical activity:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Type of physical activity</li>
        <li>Duration of activities</li>
        <li>Distance covered</li>
        <li>Step count</li>
        <li>Active calories</li>
        <li>Heart rate, when made available by the integrated platform</li>
        <li>Date and time of activities</li>
      </ul>
      <p class="mb-4">MeshMe does not collect medical records, clinical diagnoses, or health data unrelated to physical activity and wellness engagement.</p>
      <p class="mb-4">MeshMe applies the principle of data minimization and processes only the data strictly necessary for each specific functionality, program or campaign, as explicitly authorized by the user through opt-in mechanisms.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. How We Use Your Information</h3>
      <p class="mb-4">The information provided is used for the following purposes:</p>
      <p class="mb-4">Registration within the app for user identification; entry of personal data and preferences to optimize user experience and matchmaking; creation, editing or participation in teams to encourage competition and connection among users with common interests; creation, editing or participation in a company profile to facilitate a private environment for employees of the same company to connect through shared interests; creation, editing or participation in tournaments and challenges to stimulate engagement; subscription to the MeshMe club for enhanced app benefits; rental of courts to assist users in identifying available facilities; creation, editing or deletion of organizer profiles to delimit access by regional representatives of Corporate Games; improvement of customer management and communication; optimization of client prospecting; fulfillment of financial and legal obligations.</p>
      <p class="mb-4">The data collected through third-party health integrations is used specifically to:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Register physical activities within the app</li>
        <li>Calculate challenges, rankings, goals and engagement metrics</li>
        <li>Enable reward distribution and incentive mechanisms</li>
        <li>Improve user experience and platform functionality</li>
      </ul>
      <p class="mb-4">Such data is not used for advertising purposes nor for automated decision-making that produces legal or similarly significant effects.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Apple Health / HealthKit Data</h3>
      <p class="mb-4">Data obtained through Apple Health / HealthKit:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Is not used for advertising purposes</li>
        <li>Is not sold to third parties</li>
        <li>Is not shared with third parties, except when strictly necessary to provide functionalities explicitly requested by the user</li>
        <li>MeshMe does not write or modify data within Apple Health</li>
      </ul>
      <p class="mb-4">MeshMe uses Apple Health data solely to enable features related to physical activity tracking, engagement and challenges, as described in this Privacy Policy.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Legal Basis for Processing Health Data</h3>
      <p class="mb-4">The processing of personal data classified as sensitive, including health and physical activity data, is carried out based on the explicit consent of the data subject, pursuant to Article 11, item I of the Brazilian General Data Protection Law (LGPD), Article 9(2)(a) of the GDPR and UK GDPR, and applicable provisions of the LFPDPPP.</p>
      <p class="mb-4">Where health and physical activity data is shared with employers or sponsors, such processing is based on the explicit, informed and granular consent of the data subject, obtained separately for each program or campaign. Consent may be withdrawn at any time, without affecting prior lawful processing.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Sharing of Information</h3>
      <p class="mb-4">MeshMe currently shares personal data with the following entities:</p>
      <p class="mb-4">Corporate Games Worldwide Limited</p>
      <p class="mb-4">Your data may also be shared with competent public authorities when required by law or court order, in accordance with Article 7, items II and VI of the LGPD, Article 6(1)(c) of the GDPR and UK GDPR, and Articles 37 and 38 of the LFPDPPP.</p>
      <p class="mb-4">MeshMe may share personal data, including health and physical activity data, with employers and sponsors, strictly under the conditions described below and only upon explicit user consent.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">a) Sharing with Employers</h4>
      <p class="mb-4">When the user participates in a company-sponsored program, challenge or initiative, and expressly opts in, MeshMe may share individual or aggregated physical activity data with the respective employer exclusively for engagement, wellness and program-related purposes.</p>
      <p class="mb-4">Such data sharing:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Occurs only after explicit opt-in by the user</li>
        <li>Is limited to the scope of the specific program or campaign</li>
        <li>Does not include medical records or clinical data</li>
        <li>MeshMe does not determine or control how employers may internally use the data after it is lawfully shared, which remains the sole responsibility of the employer under applicable labor and data protection laws.</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">b) Sharing with Sponsors and Partners</h4>
      <p class="mb-4">When participating in sponsored campaigns, promotions or challenges, users may choose to explicitly opt in to share specific data with sponsors or partners involved in the campaign.</p>
      <p class="mb-4">Depending on the context, MeshMe acts as a data controller or data processor. In company-sponsored programs, employers act as independent data controllers regarding the use of employee data after lawful access. MeshMe acts as a technology platform and is responsible only for the processing activities described in this Privacy Policy.</p>
      <p class="mb-4">In such cases:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Only the data necessary for the campaign objectives is shared</li>
        <li>The scope of shared data is clearly disclosed at the moment of consent</li>
        <li>Sponsors receive data solely for campaign execution, rewards, benefits or engagement measurement</li>
        <li>Data is not reused by sponsors for unrelated purposes</li>
      </ul>
      <p class="mb-4">MeshMe does not sell personal data and does not authorize unrestricted commercial use of user data.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Data Retention</h3>
      <p class="mb-4">Your personal information will be retained by MeshMe only for the period necessary to fulfill the purposes described in item 2. Once the purpose is fulfilled, whether by user request or by MeshMe's own decision, the data will be deleted unless retention is required to comply with legal obligations, as provided under Article 7, items II and VI of the LGPD, Article 17 of the GDPR and UK GDPR, and Article 11 of the LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Data Security</h3>
      <p class="mb-4">We implement appropriate technical and administrative measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Although we strive to ensure the highest level of security, no system can be guaranteed to be completely secure.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. Data Subject Rights</h3>
      <p class="mb-4">In accordance with Article 18 of the LGPD, Articles 12 to 22 of the GDPR and UK GDPR, and Articles 22 to 29 of the LFPDPPP, data subjects are entitled to the following rights, which may be exercised upon request:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.1 Confirmation of Processing and Access to Data:</h4>
      <p class="mb-4">You may request confirmation of whether we process your personal data and access to such data in a clear and complete format, including its origin, processing criteria and purposes.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.2 Correction of Incomplete, Inaccurate or Outdated Data:</h4>
      <p class="mb-4">You may request the correction of any incorrect or outdated personal information.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.3 Anonymization, Blocking or Deletion of Data:</h4>
      <p class="mb-4">You may request anonymization, blocking or deletion of data that is unnecessary, excessive or processed in noncompliance with applicable legislation.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.4 Data Portability:</h4>
      <p class="mb-4">You may request the transfer of your personal data to another service provider, provided it does not infringe trade or industrial secrets.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.5 Deletion of Data Processed on the Basis of Consent:</h4>
      <p class="mb-4">You may request deletion of data processed under your consent, unless its retention is necessary to fulfill legal or regulatory obligations.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.6 Information Regarding Data Sharing:</h4>
      <p class="mb-4">You have the right to be informed about the public or private entities with which your data has been shared.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.7 Withdrawal of Consent:</h4>
      <p class="mb-4">You may withdraw your consent at any time, which will take effect only for future processing.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.8 Objection to Processing:</h4>
      <p class="mb-4">You may object to processing if it is not conducted in accordance with the applicable data protection laws.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.9 Revoke consent for third-party health integrations at any time</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.10 Disconnect Strava, Google Health or Apple Health directly through the application</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.11 Request deletion of data imported from third-party platforms</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.12 View, manage and revoke consent granted for employer or sponsor data sharing at any time</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.13 Request information regarding the specific scope, recipients and duration of any data sharing authorized through opt-in campaigns</h4>

      <p class="mb-4">To exercise your rights, please contact us at dpo@meshme.com, specifying your request. We will respond within the legal deadlines applicable under each jurisdiction, including 15 days under the LGPD, 30 days under the GDPR and UK GDPR, and 20 business days under the LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Processing of Children's and Adolescents' Data</h3>
      <p class="mb-4">MeshMe adopts specific safeguards to protect the personal data of children and adolescents in compliance with the LGPD, GDPR, UK GDPR and LFPDPPP. All processing activities are purpose-specific and proportionate to the context and shall never be discriminatory or inappropriate. Where necessary, we obtain verifiable consent from a parent or legal guardian before processing the data of minors.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. International Data Transfers</h3>
      <p class="mb-4">To enable the effective and secure operation of its services, MeshMe may store or process data on servers located outside Brazil. Accordingly, some of your personal data may be transferred internationally. Such transfers are conducted in full compliance with the Brazilian General Data Protection Law (LGPD – Law No. 13.709/2018), ANPD Resolution No. 19/2024, the GDPR, the UK GDPR and the LFPDPPP.</p>
      <p class="mb-4">Pursuant to ANPD Resolution No. 19/2024, Article 44 of the GDPR, and Articles 36 and 37 of the LFPDPPP, we ensure that international data transfers occur only where the foreign recipient country provides an adequate level of protection, or through legal mechanisms such as Standard Contractual Clauses, Specific Contractual Clauses or recognized certifications.</p>
      <p class="mb-4">We have adopted the following safeguards:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Decisions of adequacy by the relevant authority when transferring data to countries deemed to provide adequate protection;</li>
        <li>Execution of Standard Contractual Clauses approved by competent authorities;</li>
        <li>Use of specific contractual mechanisms and recognized certifications where required;</li>
        <li>Periodic assessments of the risks associated with international transfers;</li>
        <li>Implementation of rigorous security measures to protect your personal data and uphold your rights as a data subject.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Amendments to this Privacy Policy</h3>
      <p class="mb-4">This Privacy Policy may be updated periodically. Material changes will be communicated via the application or by other means, as appropriate.</p>
      <p class="mb-4">Material changes related to the processing of health or sensitive personal data will be clearly communicated to users prior to taking effect.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">12. Data Protection Officer (DPO)</h3>
      <p class="mb-4">MeshMe has appointed a Data Protection Officer to oversee compliance with this Privacy Policy and serve as a point of contact for any questions or requests related to privacy and data protection.</p>
      <p class="mb-4">DPO Contact: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">13. Contact</h3>
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

      <h4 class="text-lg font-semibold mt-4 mb-2">1.2 Datos de Salud y Actividad Física:</h4>
      <p class="mb-4">Estas integraciones pueden incluir, pero no se limitan a, Strava, Google Health / Google Fit y Apple Health / HealthKit.</p>
      <p class="mb-4">A través de las integraciones mencionadas anteriormente, MeshMe puede procesar las siguientes categorías de datos relacionados con la actividad física:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Tipo de actividad física</li>
        <li>Duración de las actividades</li>
        <li>Distancia recorrida</li>
        <li>Conteo de pasos</li>
        <li>Calorías activas</li>
        <li>Frecuencia cardíaca, cuando esté disponible por la plataforma integrada</li>
        <li>Fecha y hora de las actividades</li>
      </ul>
      <p class="mb-4">MeshMe no recopila registros médicos, diagnósticos clínicos o datos de salud no relacionados con la actividad física y el compromiso con el bienestar.</p>
      <p class="mb-4">MeshMe aplica el principio de minimización de datos y procesa solo los datos estrictamente necesarios para cada funcionalidad, programa o campaña específica, según lo autorizado explícitamente por el usuario a través de mecanismos de opt-in.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Cómo Usamos Su Información</h3>
      <p class="mb-4">La información proporcionada se usa para los siguientes propósitos:</p>
      <p class="mb-4">Registro en la aplicación para identificación del usuario; entrada de datos personales y preferencias para optimizar la experiencia del usuario y emparejamiento; creación, edición o participación en equipos para fomentar la competencia y conexión entre usuarios con intereses comunes; creación, edición o participación en perfil de empresa para facilitar un ambiente privado para empleados de la misma empresa para conectarse a través de intereses compartidos; creación, edición o participación en torneos y desafíos para estimular el compromiso; suscripción al club MeshMe para beneficios mejorados de la aplicación; alquiler de canchas para ayudar a los usuarios a identificar instalaciones disponibles; creación, edición o eliminación de perfiles de organizadores para delimitar el acceso por representantes regionales de Juegos Corporativos; mejora de la gestión y comunicación con clientes; optimización de la prospección de clientes; cumplimiento de obligaciones financieras y legales.</p>
      <p class="mb-4">Los datos recopilados a través de integraciones de salud de terceros se utilizan específicamente para:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Registrar actividades físicas dentro de la aplicación</li>
        <li>Calcular desafíos, rankings, metas y métricas de compromiso</li>
        <li>Habilitar la distribución de recompensas y mecanismos de incentivo</li>
        <li>Mejorar la experiencia del usuario y la funcionalidad de la plataforma</li>
      </ul>
      <p class="mb-4">Dichos datos no se utilizan con fines publicitarios ni para la toma de decisiones automatizada que produzca efectos legales o similarmente significativos.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Datos de Apple Health / HealthKit</h3>
      <p class="mb-4">Los datos obtenidos a través de Apple Health / HealthKit:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>No se utilizan con fines publicitarios</li>
        <li>No se venden a terceros</li>
        <li>No se comparten con terceros, excepto cuando sea estrictamente necesario para proporcionar funcionalidades explícitamente solicitadas por el usuario</li>
        <li>MeshMe no escribe ni modifica datos dentro de Apple Health</li>
      </ul>
      <p class="mb-4">MeshMe utiliza los datos de Apple Health únicamente para habilitar funciones relacionadas con el seguimiento de actividad física, compromiso y desafíos, como se describe en esta Política de Privacidad.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Base Legal para el Procesamiento de Datos de Salud</h3>
      <p class="mb-4">El procesamiento de datos personales clasificados como sensibles, incluidos los datos de salud y actividad física, se realiza sobre la base del consentimiento explícito del titular de los datos, conforme al Artículo 11, inciso I de la Ley General de Protección de Datos (LGPD), Artículo 9(2)(a) del GDPR y UK GDPR, y disposiciones aplicables de la LFPDPPP.</p>
      <p class="mb-4">Cuando los datos de salud y actividad física se comparten con empleadores o patrocinadores, dicho procesamiento se basa en el consentimiento explícito, informado y granular del titular de los datos, obtenido por separado para cada programa o campaña. El consentimiento puede retirarse en cualquier momento, sin afectar el procesamiento legal anterior.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Compartir Información</h3>
      <p class="mb-4">MeshMe actualmente comparte datos personales con las siguientes entidades:</p>
      <p class="mb-4">Corporate Games Worldwide Limited</p>
      <p class="mb-4">Sus datos también pueden ser compartidos con autoridades públicas competentes cuando sea requerido por ley u orden judicial, de acuerdo con el Artículo 7, incisos II y VI de la LGPD, Artículo 6(1)(c) del GDPR y UK GDPR, y Artículos 37 y 38 de la LFPDPPP.</p>
      <p class="mb-4">MeshMe puede compartir datos personales, incluidos datos de salud y actividad física, con empleadores y patrocinadores, estrictamente bajo las condiciones descritas a continuación y solo con el consentimiento explícito del usuario.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">a) Compartir con Empleadores</h4>
      <p class="mb-4">Cuando el usuario participa en un programa, desafío o iniciativa patrocinado por la empresa, y expresamente opta por participar, MeshMe puede compartir datos de actividad física individuales o agregados con el empleador respectivo exclusivamente para fines de compromiso, bienestar y relacionados con el programa.</p>
      <p class="mb-4">Dicho intercambio de datos:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Ocurre solo después de un opt-in explícito por parte del usuario</li>
        <li>Se limita al alcance del programa o campaña específica</li>
        <li>No incluye registros médicos o datos clínicos</li>
        <li>MeshMe no determina ni controla cómo los empleadores pueden usar internamente los datos después de que se compartan legalmente, lo cual sigue siendo responsabilidad exclusiva del empleador bajo las leyes laborales y de protección de datos aplicables.</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">b) Compartir con Patrocinadores y Socios</h4>
      <p class="mb-4">Al participar en campañas, promociones o desafíos patrocinados, los usuarios pueden optar explícitamente por compartir datos específicos con patrocinadores o socios involucrados en la campaña.</p>
      <p class="mb-4">Dependiendo del contexto, MeshMe actúa como controlador o procesador de datos. En programas patrocinados por empresas, los empleadores actúan como controladores de datos independientes en relación con el uso de datos de empleados después del acceso legal. MeshMe actúa como plataforma tecnológica y es responsable solo de las actividades de procesamiento descritas en esta Política de Privacidad.</p>
      <p class="mb-4">En tales casos:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Solo se comparten los datos necesarios para los objetivos de la campaña</li>
        <li>El alcance de los datos compartidos se divulga claramente en el momento del consentimiento</li>
        <li>Los patrocinadores reciben datos únicamente para la ejecución de la campaña, recompensas, beneficios o medición del compromiso</li>
        <li>Los datos no son reutilizados por los patrocinadores para fines no relacionados</li>
      </ul>
      <p class="mb-4">MeshMe no vende datos personales y no autoriza el uso comercial irrestricto de los datos del usuario.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Retención de Datos</h3>
      <p class="mb-4">Su información personal será retenida por MeshMe solo por el período necesario para cumplir los propósitos descritos en el ítem 2. Una vez que se cumpla el propósito, ya sea por solicitud del usuario o por decisión propia de MeshMe, los datos serán eliminados a menos que la retención sea requerida para cumplir obligaciones legales, como se establece en el Artículo 7, incisos II y VI de la LGPD, Artículo 17 del GDPR y UK GDPR, y Artículo 11 de la LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Seguridad de Datos</h3>
      <p class="mb-4">Implementamos medidas técnicas y administrativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Aunque nos esforzamos por garantizar el más alto nivel de seguridad, ningún sistema puede garantizarse como completamente seguro.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. Derechos de los Sujetos de Datos</h3>
      <p class="mb-4">De acuerdo con el Artículo 18 de la LGPD, Artículos 12 a 22 del GDPR y UK GDPR, y Artículos 22 a 29 de la LFPDPPP, los sujetos de datos tienen derecho a los siguientes derechos, que pueden ejercerse mediante solicitud:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.1 Confirmación de Procesamiento y Acceso a Datos:</h4>
      <p class="mb-4">Puede solicitar confirmación de si procesamos sus datos personales y acceso a dichos datos en un formato claro y completo, incluyendo su origen, criterios de procesamiento y propósitos.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.2 Corrección de Datos Incompletos, Inexactos o Desactualizados:</h4>
      <p class="mb-4">Puede solicitar la corrección de cualquier información personal incorrecta o desactualizada.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.3 Anonimización, Bloqueo o Eliminación de Datos:</h4>
      <p class="mb-4">Puede solicitar anonimización, bloqueo o eliminación de datos que sean innecesarios, excesivos o procesados en incumplimiento con la legislación aplicable.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.4 Portabilidad de Datos:</h4>
      <p class="mb-4">Puede solicitar la transferencia de sus datos personales a otro proveedor de servicios, siempre que no infrinja secretos comerciales o industriales.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.5 Eliminación de Datos Procesados en Base al Consentimiento:</h4>
      <p class="mb-4">Puede solicitar la eliminación de datos procesados bajo su consentimiento, a menos que su retención sea necesaria para cumplir obligaciones legales o regulatorias.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.6 Información sobre Compartir Datos:</h4>
      <p class="mb-4">Tiene derecho a ser informado sobre las entidades públicas o privadas con las que sus datos han sido compartidos.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.7 Retirada de Consentimiento:</h4>
      <p class="mb-4">Puede retirar su consentimiento en cualquier momento, lo que tendrá efecto solo para procesamiento futuro.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.8 Objeción al Procesamiento:</h4>
      <p class="mb-4">Puede objetar al procesamiento si no se conduce de acuerdo con las leyes de protección de datos aplicables.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.9 Revocar consentimiento para integraciones de salud de terceros en cualquier momento</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.10 Desconectar Strava, Google Health o Apple Health directamente a través de la aplicación</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.11 Solicitar eliminación de datos importados de plataformas de terceros</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.12 Ver, gestionar y revocar consentimiento otorgado para compartir datos con empleadores o patrocinadores en cualquier momento</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.13 Solicitar información sobre el alcance específico, destinatarios y duración de cualquier intercambio de datos autorizado a través de campañas opt-in</h4>

      <p class="mb-4">Para ejercer sus derechos, contáctenos en dpo@meshme.com, especificando su solicitud. Responderemos dentro de los plazos legales aplicables bajo cada jurisdicción, incluyendo 15 días bajo la LGPD, 30 días bajo el GDPR y UK GDPR, y 20 días hábiles bajo la LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Procesamiento de Datos de Niños y Adolescentes</h3>
      <p class="mb-4">MeshMe adopta salvaguardas específicas para proteger los datos personales de niños y adolescentes en cumplimiento con la LGPD, GDPR, UK GDPR y LFPDPPP. Todas las actividades de procesamiento son específicas para el propósito y proporcionales al contexto y nunca deben ser discriminatorias o inapropiadas. Cuando sea necesario, obtenemos consentimiento verificable de un padre o tutor legal antes de procesar los datos de menores.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. Transferencias Internacionales de Datos</h3>
      <p class="mb-4">Para permitir la operación efectiva y segura de sus servicios, MeshMe puede almacenar o procesar datos en servidores ubicados fuera de Brasil. En consecuencia, algunos de sus datos personales pueden ser transferidos internacionalmente. Tales transferencias se realizan en total cumplimiento con la Ley General de Protección de Datos de Brasil (LGPD – Ley No. 13.709/2018), Resolución ANPD No. 19/2024, el GDPR, el UK GDPR y la LFPDPPP.</p>
      <p class="mb-4">De acuerdo con la Resolución ANPD No. 19/2024, Artículo 44 del GDPR y Artículos 36 y 37 de la LFPDPPP, garantizamos que las transferencias internacionales de datos ocurran solo donde el país destinatario extranjero proporcione un nivel adecuado de protección, o a través de mecanismos legales como Cláusulas Contractuales Estándar, Cláusulas Contractuales Específicas o certificaciones reconocidas.</p>
      <p class="mb-4">Hemos adoptado las siguientes salvaguardas:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Decisiones de adecuación por la autoridad relevante al transferir datos a países considerados con protección adecuada;</li>
        <li>Ejecución de Cláusulas Contractuales Estándar aprobadas por autoridades competentes;</li>
        <li>Uso de mecanismos contractuales específicos y certificaciones reconocidas cuando sea requerido;</li>
        <li>Evaluaciones periódicas de los riesgos asociados con las transferencias internacionales;</li>
        <li>Implementación de medidas de seguridad rigurosas para proteger sus datos personales y mantener sus derechos como sujeto de datos.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Enmiendas a esta Política de Privacidad</h3>
      <p class="mb-4">Esta Política de Privacidad puede ser actualizada periódicamente. Los cambios materiales serán comunicados a través de la aplicación o por otros medios, según sea apropiado.</p>
      <p class="mb-4">Los cambios materiales relacionados con el procesamiento de datos de salud o datos personales sensibles serán comunicados claramente a los usuarios antes de entrar en vigor.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">12. Oficial de Protección de Datos (DPO)</h3>
      <p class="mb-4">MeshMe ha designado un Oficial de Protección de Datos para supervisar el cumplimiento de esta Política de Privacidad y servir como punto de contacto para cualquier pregunta o solicitud relacionada con privacidad y protección de datos.</p>
      <p class="mb-4">Contacto del DPO: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">13. Contacto</h3>
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

      <h4 class="text-lg font-semibold mt-4 mb-2">1.2 Date de Sănătate și Activitate Fizică:</h4>
      <p class="mb-4">Aceste integrări pot include, dar nu se limitează la, Strava, Google Health / Google Fit și Apple Health / HealthKit.</p>
      <p class="mb-4">Prin integrările menționate mai sus, MeshMe poate procesa următoarele categorii de date legate de activitatea fizică:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Tipul de activitate fizică</li>
        <li>Durata activităților</li>
        <li>Distanța parcursă</li>
        <li>Numărul de pași</li>
        <li>Caloriile active</li>
        <li>Ritmul cardiac, când este disponibil de platforma integrată</li>
        <li>Data și ora activităților</li>
      </ul>
      <p class="mb-4">MeshMe nu colectează fișe medicale, diagnostice clinice sau date de sănătate care nu sunt legate de activitatea fizică și angajamentul față de bunăstare.</p>
      <p class="mb-4">MeshMe aplică principiul minimizării datelor și procesează doar datele strict necesare pentru fiecare funcționalitate, program sau campanie specifică, conform autorizării explicite a utilizatorului prin mecanisme de opt-in.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Cum Utilizăm Informațiile Dvs.</h3>
      <p class="mb-4">Informațiile furnizate sunt utilizate în următoarele scopuri:</p>
      <p class="mb-4">Înregistrarea în aplicație pentru identificarea utilizatorului; introducerea datelor personale și preferințelor pentru optimizarea experienței utilizatorului și potrivirea; crearea, editarea sau participarea în echipe pentru a încuraja competiția și conexiunea între utilizatorii cu interese comune; crearea, editarea sau participarea într-un profil de companie pentru a facilita un mediu privat pentru angajații aceleiași companii să se conecteze prin interese comune; crearea, editarea sau participarea în turnee și provocări pentru a stimula angajamentul; abonarea la clubul MeshMe pentru beneficii îmbunătățite ale aplicației; închirierea terenurilor pentru a ajuta utilizatorii să identifice facilitățile disponibile; crearea, editarea sau ștergerea profilurilor de organizatori pentru a delimita accesul reprezentanților regionali ai Jocurilor Corporative; îmbunătățirea managementului și comunicării cu clienții; optimizarea prospectării clienților; îndeplinirea obligațiilor financiare și legale.</p>
      <p class="mb-4">Datele colectate prin integrări de sănătate terțe sunt utilizate specific pentru:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Înregistrarea activităților fizice în aplicație</li>
        <li>Calcularea provocărilor, clasamentelor, obiectivelor și metricilor de angajament</li>
        <li>Activarea distribuției de recompense și mecanismelor de stimulare</li>
        <li>Îmbunătățirea experienței utilizatorului și funcționalității platformei</li>
      </ul>
      <p class="mb-4">Astfel de date nu sunt utilizate în scopuri publicitare și nici pentru luarea deciziilor automatizate care produc efecte legale sau similare semnificative.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Date Apple Health / HealthKit</h3>
      <p class="mb-4">Datele obținute prin Apple Health / HealthKit:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Nu sunt utilizate în scopuri publicitare</li>
        <li>Nu sunt vândute terților</li>
        <li>Nu sunt partajate cu terți, cu excepția cazului în care este strict necesar pentru a furniza funcționalități solicitate explicit de utilizator</li>
        <li>MeshMe nu scrie și nu modifică date în Apple Health</li>
      </ul>
      <p class="mb-4">MeshMe utilizează datele Apple Health exclusiv pentru a activa funcții legate de urmărirea activității fizice, angajament și provocări, așa cum este descris în această Politică de Confidențialitate.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">4. Baza Legală pentru Procesarea Datelor de Sănătate</h3>
      <p class="mb-4">Procesarea datelor personale clasificate ca sensibile, inclusiv datele de sănătate și activitate fizică, se realizează pe baza consimțământului explicit al persoanei vizate, conform Articolului 11, punctul I din Legea Generală de Protecție a Datelor (LGPD), Articolul 9(2)(a) din GDPR și UK GDPR, și dispozițiile aplicabile ale LFPDPPP.</p>
      <p class="mb-4">Când datele de sănătate și activitate fizică sunt partajate cu angajatorii sau sponsorii, o astfel de procesare se bazează pe consimțământul explicit, informat și granular al persoanei vizate, obținut separat pentru fiecare program sau campanie. Consimțământul poate fi retras în orice moment, fără a afecta procesarea legală anterioară.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5. Partajarea Informațiilor</h3>
      <p class="mb-4">MeshMe partajează în prezent datele personale cu următoarele entități:</p>
      <p class="mb-4">Corporate Games Worldwide Limited</p>
      <p class="mb-4">Datele dvs. pot fi, de asemenea, partajate cu autoritățile publice competente când este cerut de lege sau prin ordin judecătoresc, în conformitate cu articolul 7, punctele II și VI din LGPD, articolul 6(1)(c) din GDPR și UK GDPR și articolele 37 și 38 din LFPDPPP.</p>
      <p class="mb-4">MeshMe poate partaja date personale, inclusiv date de sănătate și activitate fizică, cu angajatorii și sponsorii, strict în condițiile descrise mai jos și numai cu consimțământul explicit al utilizatorului.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">a) Partajarea cu Angajatorii</h4>
      <p class="mb-4">Când utilizatorul participă la un program, provocare sau inițiativă sponsorizată de companie, și optează expres pentru participare, MeshMe poate partaja date de activitate fizică individuale sau agregate cu angajatorul respectiv exclusiv în scopuri de angajament, bunăstare și legate de program.</p>
      <p class="mb-4">O astfel de partajare a datelor:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Are loc doar după opt-in explicit din partea utilizatorului</li>
        <li>Este limitată la domeniul de aplicare al programului sau campaniei specifice</li>
        <li>Nu include fișe medicale sau date clinice</li>
        <li>MeshMe nu determină și nu controlează modul în care angajatorii pot utiliza intern datele după ce sunt partajate legal, ceea ce rămâne responsabilitatea exclusivă a angajatorului conform legislației muncii și protecției datelor aplicabile.</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">b) Partajarea cu Sponsorii și Partenerii</h4>
      <p class="mb-4">La participarea în campanii, promoții sau provocări sponsorizate, utilizatorii pot alege să opteze explicit pentru a partaja date specifice cu sponsorii sau partenerii implicați în campanie.</p>
      <p class="mb-4">În funcție de context, MeshMe acționează ca operator sau procesator de date. În programele sponsorizate de companii, angajatorii acționează ca operatori de date independenți în ceea ce privește utilizarea datelor angajaților după accesul legal. MeshMe acționează ca platformă tehnologică și este responsabilă doar pentru activitățile de procesare descrise în această Politică de Confidențialitate.</p>
      <p class="mb-4">În astfel de cazuri:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Sunt partajate doar datele necesare pentru obiectivele campaniei</li>
        <li>Domeniul de aplicare al datelor partajate este divulgat clar în momentul consimțământului</li>
        <li>Sponsorii primesc date exclusiv pentru execuția campaniei, recompense, beneficii sau măsurarea angajamentului</li>
        <li>Datele nu sunt reutilizate de sponsori pentru scopuri nerelaționate</li>
      </ul>
      <p class="mb-4">MeshMe nu vinde date personale și nu autorizează utilizarea comercială nerestricționată a datelor utilizatorilor.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">6. Reținerea Datelor</h3>
      <p class="mb-4">Informațiile dvs. personale vor fi reținute de MeshMe doar pentru perioada necesară pentru îndeplinirea scopurilor descrise în punctul 2. Odată ce scopul este îndeplinit, fie la cererea utilizatorului, fie prin decizia proprie a MeshMe, datele vor fi șterse, cu excepția cazului în care reținerea este necesară pentru respectarea obligațiilor legale, conform prevederilor articolului 7, punctele II și VI din LGPD, articolul 17 din GDPR și UK GDPR și articolul 11 din LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">7. Securitatea Datelor</h3>
      <p class="mb-4">Implementăm măsuri tehnice și administrative adecvate pentru a vă proteja datele personale împotriva accesului neautorizat, alterării, divulgării sau distrugerii. Deși ne străduim să asigurăm cel mai înalt nivel de securitate, niciun sistem nu poate fi garantat ca fiind complet sigur.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">8. Drepturile Persoanelor Vizate</h3>
      <p class="mb-4">În conformitate cu articolul 18 din LGPD, articolele 12-22 din GDPR și UK GDPR și articolele 22-29 din LFPDPPP, persoanele vizate au dreptul la următoarele drepturi, care pot fi exercitate la cerere:</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.1 Confirmarea Procesării și Accesul la Date:</h4>
      <p class="mb-4">Puteți solicita confirmarea dacă procesăm datele dvs. personale și accesul la astfel de date într-un format clar și complet, inclusiv originea, criteriile de procesare și scopurile acestora.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.2 Corectarea Datelor Incomplete, Inexacte sau Învechite:</h4>
      <p class="mb-4">Puteți solicita corectarea oricăror informații personale incorecte sau învechite.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.3 Anonimizarea, Blocarea sau Ștergerea Datelor:</h4>
      <p class="mb-4">Puteți solicita anonimizarea, blocarea sau ștergerea datelor care sunt inutile, excesive sau procesate în neconformitate cu legislația aplicabilă.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.4 Portabilitatea Datelor:</h4>
      <p class="mb-4">Puteți solicita transferul datelor dvs. personale către un alt furnizor de servicii, cu condiția să nu încalce secretele comerciale sau industriale.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.5 Ștergerea Datelor Procesate pe Baza Consimțământului:</h4>
      <p class="mb-4">Puteți solicita ștergerea datelor procesate sub consimțământul dvs., cu excepția cazului în care reținerea acestora este necesară pentru îndeplinirea obligațiilor legale sau de reglementare.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.6 Informații privind Partajarea Datelor:</h4>
      <p class="mb-4">Aveți dreptul să fiți informat despre entitățile publice sau private cu care datele dvs. au fost partajate.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.7 Retragerea Consimțământului:</h4>
      <p class="mb-4">Puteți retrage consimțământul în orice moment, ceea ce va avea efect doar pentru procesarea viitoare.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.8 Opoziția la Procesare:</h4>
      <p class="mb-4">Puteți obiecta la procesare dacă nu este efectuată în conformitate cu legile aplicabile privind protecția datelor.</p>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.9 Revocarea consimțământului pentru integrările de sănătate terțe în orice moment</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.10 Deconectarea Strava, Google Health sau Apple Health direct prin aplicație</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.11 Solicitarea ștergerii datelor importate din platforme terțe</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.12 Vizualizarea, gestionarea și revocarea consimțământului acordat pentru partajarea datelor cu angajatorii sau sponsorii în orice moment</h4>

      <h4 class="text-lg font-semibold mt-4 mb-2">8.13 Solicitarea informațiilor privind domeniul de aplicare specific, destinatarii și durata oricărei partajări de date autorizate prin campanii opt-in</h4>

      <p class="mb-4">Pentru a vă exercita drepturile, vă rugăm să ne contactați la dpo@meshme.com, specificând cererea dvs. Vom răspunde în termenele legale aplicabile în fiecare jurisdicție, inclusiv 15 zile sub LGPD, 30 de zile sub GDPR și UK GDPR și 20 de zile lucrătoare sub LFPDPPP.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">9. Procesarea Datelor Copiilor și Adolescenților</h3>
      <p class="mb-4">MeshMe adoptă măsuri de protecție specifice pentru a proteja datele personale ale copiilor și adolescenților în conformitate cu LGPD, GDPR, UK GDPR și LFPDPPP. Toate activitățile de procesare sunt specifice scopului și proporționale cu contextul și nu trebuie să fie niciodată discriminatorii sau inadecvate. Când este necesar, obținem consimțământul verificabil de la un părinte sau tutore legal înainte de a procesa datele minorilor.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">10. Transferuri Internaționale de Date</h3>
      <p class="mb-4">Pentru a permite operarea eficientă și sigură a serviciilor sale, MeshMe poate stoca sau procesa date pe servere situate în afara Braziliei. În consecință, unele dintre datele dvs. personale pot fi transferate internațional. Astfel de transferuri sunt efectuate în deplină conformitate cu Legea Generală de Protecție a Datelor din Brazilia (LGPD – Legea nr. 13.709/2018), Rezoluția ANPD nr. 19/2024, GDPR, UK GDPR și LFPDPPP.</p>
      <p class="mb-4">În conformitate cu Rezoluția ANPD nr. 19/2024, articolul 44 din GDPR și articolele 36 și 37 din LFPDPPP, ne asigurăm că transferurile internaționale de date au loc doar acolo unde țara destinatară străină oferă un nivel adecvat de protecție, sau prin mecanisme legale precum Clauzele Contractuale Standard, Clauzele Contractuale Specifice sau certificările recunoscute.</p>
      <p class="mb-4">Am adoptat următoarele măsuri de protecție:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Decizii de adecvare de către autoritatea relevantă la transferul datelor către țări considerate că oferă protecție adecvată;</li>
        <li>Executarea Clauzelor Contractuale Standard aprobate de autoritățile competente;</li>
        <li>Utilizarea mecanismelor contractuale specifice și certificărilor recunoscute când este necesar;</li>
        <li>Evaluări periodice ale riscurilor asociate transferurilor internaționale;</li>
        <li>Implementarea unor măsuri de securitate riguroase pentru a vă proteja datele personale și a vă menține drepturile ca persoană vizată.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">11. Modificări ale acestei Politici de Confidențialitate</h3>
      <p class="mb-4">Această Politică de Confidențialitate poate fi actualizată periodic. Modificările materiale vor fi comunicate prin aplicație sau prin alte mijloace, după caz.</p>
      <p class="mb-4">Modificările materiale legate de procesarea datelor de sănătate sau a datelor personale sensibile vor fi comunicate clar utilizatorilor înainte de a intra în vigoare.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">12. Responsabilul cu Protecția Datelor (DPO)</h3>
      <p class="mb-4">MeshMe a numit un Responsabil cu Protecția Datelor pentru a supraveghea conformitatea cu această Politică de Confidențialitate și pentru a servi ca punct de contact pentru orice întrebări sau cereri legate de confidențialitate și protecția datelor.</p>
      <p class="mb-4">Contact DPO: dpo@meshme.com</p>

      <h3 class="text-xl font-bold mt-6 mb-3">13. Contact</h3>
      <p class="mb-4">Dacă aveți întrebări sau preocupări cu privire la această Politică de Confidențialitate, vă rugăm să ne contactați la: dpo@meshme.com</p>
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
