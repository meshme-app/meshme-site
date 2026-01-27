export const metadata = {
  title: "Política de Privacidade - MeshMe",
  robots: {
    index: false,
    follow: false
  }
}
"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyNoticePage() {
  const searchParams = useSearchParams()
  const [language, setLanguage] = useState(searchParams.get("lang") || "pt-BR")

  const router = useRouter()
  const pathname = usePathname()

  // Traduções para os diferentes idiomas
  const translations = {
    "pt-BR": {
      title: "Aviso de Privacidade",
      description: "Informações sobre como coletamos e utilizamos seus dados pessoais",
      backToDocuments: "Voltar para Documentos",
      lastUpdated: "Última atualização",
      content: `
      <h2 class="text-2xl font-bold mb-4">AVISO DE PRIVACIDADE EXTERNO</h2>

      <h3 class="text-xl font-bold mt-6 mb-3">INTRODUÇÃO</h3>
      <p class="mb-4">A MeshMe conduz todo o processamento de dados pessoais de acordo com os regulamentos de proteção de dados aplicáveis, incluindo a Lei Geral de Proteção de Dados do Brasil (Lei nº 13.709/2018 – LGPD), o Regulamento Geral de Proteção de Dados da União Europeia (Regulamento UE 2016/679 – GDPR), o Regulamento Geral de Proteção de Dados do Reino Unido (UK GDPR) e a Lei Federal Mexicana de Proteção de Dados Pessoais Mantidos por Particulares (Ley Federal de Protección de Datos Personales en Posesión de los Particulares – LFPDPPP).</p>
      
      <p class="mb-4">A MeshMe garante o processamento legal, justo e transparente de dados pessoais e adota medidas técnicas e organizacionais apropriadas para cada jurisdição para garantir a segurança, integridade e confidencialidade dos dados processados. Fornecemos informações claras aos titulares dos dados e garantimos o exercício de seus direitos sob as leis aplicáveis a cada país em que operamos.</p>
      
      <p class="mb-4">Sob o GDPR e o UK GDPR, processamos dados com base em fundamentos legais como consentimento, interesse legítimo e necessidade contratual, enquanto salvaguardamos os direitos fundamentais dos indivíduos. Os titulares dos dados têm acesso ao conjunto completo de direitos estabelecidos nos Artigos 12 a 22 do GDPR, incluindo o direito de acesso, retificação, exclusão, restrição, portabilidade e objeção.</p>
      
      <p class="mb-4">Sob a LFPDPPP no México, a MeshMe garante o cumprimento dos princípios de legalidade, consentimento, informação, finalidade, lealdade, proporcionalidade e responsabilidade. Os usuários têm garantido o acesso aos seus direitos ARCO (Acesso, Retificação, Cancelamento e Oposição), e a MeshMe aplica os padrões de segurança e responsabilidade exigidos por lei.</p>
      
      <p class="mb-4">Sua privacidade é importante para nós. Este Aviso de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você visita nosso site ou usa nossos serviços.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">INFORMAÇÕES QUE COLETAMOS</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">Informações que Você nos Fornece</h4>
      <p class="mb-4">Coletamos as informações que você nos fornece diretamente, como:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Nome</li>
        <li>Endereço de e-mail</li>
        <li>Número de telefone</li>
        <li>CPF e RG (documentos de identificação brasileiros)</li>
        <li>Estado civil</li>
        <li>Idade</li>
        <li>Nome da empresa onde você trabalha</li>
        <li>Informações de pagamento</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">INFORMAÇÕES QUE COLETAMOS AUTOMATICAMENTE</h4>
      <p class="mb-4">Quando você visita nosso site, podemos coletar automaticamente certas informações, incluindo:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Atividades favoritas</li>
        <li>Data e hora de interesse para participação</li>
        <li>Nível de habilidade</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">COMO USAMOS SUAS INFORMAÇÕES</h3>
      <p class="mb-4">Usamos as informações que coletamos para vários propósitos, incluindo:</p>
      <p class="mb-4">Registro no aplicativo, equipes, empresas, desafios e torneios, Processamento de transações como assinaturas do MeshMe Club e aluguel de quadras, Personalização da sua experiência</p>

      <h3 class="text-xl font-bold mt-6 mb-3">COMPARTILHAMENTO DE INFORMAÇÕES</h3>
      <p class="mb-4">Podemos compartilhar suas informações com terceiros nas seguintes circunstâncias:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Com provedores de serviços que apoiam a operação de nosso negócio</li>
        <li>Quando exigido por lei ou para proteger nossos direitos</li>
        <li>Com seu consentimento</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">SEGURANÇA DA INFORMAÇÃO</h3>
      <p class="mb-4">Empregamos várias medidas de segurança para proteger suas informações pessoais contra acesso, uso ou divulgação não autorizados. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">SEUS DIREITOS E ESCOLHAS</h3>
      <p class="mb-4">Você tem certos direitos em relação às suas informações pessoais, incluindo:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>O direito de acessar suas informações</li>
        <li>O direito de corrigir informações imprecisas</li>
        <li>O direito de solicitar a exclusão de suas informações</li>
      </ul>
      <p class="mb-4">Para exercer esses direitos, entre em contato conosco usando as informações fornecidas abaixo.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">ALTERAÇÕES NESTE AVISO</h3>
      <p class="mb-4">Podemos atualizar este Aviso de Privacidade de tempos em tempos. Quaisquer alterações serão publicadas nesta página com a data de revisão atualizada.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">CONTATO</h3>
      <p class="mb-4">Se você tiver alguma dúvida sobre este Aviso de Privacidade, entre em contato conosco em:</p>
      <p class="mb-4">Email: dpo@meshme.com.br</p>

      <h3 class="text-xl font-bold mt-6 mb-3">DATA DE VIGÊNCIA</h3>
      <p class="mb-4">Este Aviso de Privacidade está em vigor a partir de 28 de janeiro de 2025.</p>
    `,
    },
    en: {
      title: "Privacy Notice",
      description: "Information about how we collect and use your personal data",
      backToDocuments: "Back to Documents",
      lastUpdated: "Last updated",
      content: `
      <h2 class="text-2xl font-bold mb-4">EXTERNAL PRIVACY NOTICE</h2>

      <h3 class="text-xl font-bold mt-6 mb-3">INTRODUCTION</h3>
      <p class="mb-4">MeshMe conducts all personal data processing in accordance with applicable data protection regulations, including the Brazilian General Data Protection Law (Law No. 13.709/2018 – LGPD), the General Data Protection Regulation of the European Union (Regulation EU 2016/679 – GDPR), the UK General Data Protection Regulation (UK GDPR), and the Mexican Federal Law on Protection of Personal Data Held by Private Parties (Ley Federal de Protección de Datos Personales en Posesión de los Particulares – LFPDPPP).</p>
      
      <p class="mb-4">MeshMe ensures the lawful, fair, and transparent processing of personal data, and adopts technical and organizational measures appropriate to each jurisdiction to guarantee the security, integrity, and confidentiality of the data processed. We provide clear information to data subjects and guarantee the exercise of their rights under the laws applicable to each country in which we operate.</p>
      
      <p class="mb-4">Under the GDPR and the UK GDPR, we process data based on lawful grounds such as consent, legitimate interest, and contractual necessity, while safeguarding the fundamental rights of individuals. Data subjects have access to the full set of rights set forth in Articles 12 through 22 of the GDPR, including the right of access, rectification, erasure, restriction, portability, and objection.</p>
      
      <p class="mb-4">Under the LFPDPPP in Mexico, MeshMe guarantees compliance with the principles of legality, consent, information, purpose, loyalty, proportionality, and responsibility. Users are ensured access to their ARCO rights (Access, Rectification, Cancellation, and Opposition), and MeshMe applies the security and accountability standards required by law.</p>
      
      <p class="mb-4">Your privacy is important to us. This Privacy Notice explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">INFORMATION WE COLLECT</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">Information You Provide to Us</h4>
      <p class="mb-4">We collect the information that you provide to us directly, such as:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>CPF and RG (Brazilian identification documents)</li>
        <li>Marital status</li>
        <li>Age</li>
        <li>Name of the company where you work</li>
        <li>Payment information</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">INFORMATION WE COLLECT AUTOMATICALLY</h4>
      <p class="mb-4">When you visit our website, we may automatically collect certain information, including:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Favorite activities</li>
        <li>Date and time of interest for participation</li>
        <li>Skill level</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">HOW WE USE YOUR INFORMATION</h3>
      <p class="mb-4">We use the information we collect for various purposes, including:</p>
      <p class="mb-4">Registration on the app, teams, companies, challenges, and tournaments, Processing transactions such as MeshMe Club subscriptions and court rentals, Personalizing your experience</p>

      <h3 class="text-xl font-bold mt-6 mb-3">INFORMATION SHARING</h3>
      <p class="mb-4">We may share your information with third parties under the following circumstances:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>With service providers who support the operation of our business</li>
        <li>When required by law or to protect our rights</li>
        <li>With your consent</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">INFORMATION SECURITY</h3>
      <p class="mb-4">We employ various security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">YOUR RIGHTS AND CHOICES</h3>
      <p class="mb-4">You have certain rights regarding your personal information, including:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>The right to access your information</li>
        <li>The right to correct inaccurate information</li>
        <li>The right to request the deletion of your information</li>
      </ul>
      <p class="mb-4">To exercise these rights, please contact us using the information provided below.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">CHANGES TO THIS NOTICE</h3>
      <p class="mb-4">We may update this Privacy Notice from time to time. Any changes will be posted on this page with the updated revision date.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">CONTACT</h3>
      <p class="mb-4">If you have any questions about this Privacy Notice, please contact us at:</p>
      <p class="mb-4">Email: dpo@meshme.com.br</p>

      <h3 class="text-xl font-bold mt-6 mb-3">EFFECTIVE DATE</h3>
      <p class="mb-4">This Privacy Notice is effective as of January 28, 2025.</p>
    `,
    },
    es: {
      title: "Aviso de Privacidad",
      description: "Información sobre cómo recopilamos y utilizamos sus datos personales",
      backToDocuments: "Volver a Documentos",
      lastUpdated: "Última actualización",
      content: `
      <h2 class="text-2xl font-bold mb-4">AVISO DE PRIVACIDAD EXTERNO</h2>

      <h3 class="text-xl font-bold mt-6 mb-3">INTRODUCCIÓN</h3>
      <p class="mb-4">MeshMe realiza todo el procesamiento de datos personales de acuerdo con las regulaciones de protección de datos aplicables, incluida la Ley General de Protección de Datos de Brasil (Ley N° 13.709/2018 – LGPD), el Reglamento General de Protección de Datos de la Unión Europea (Reglamento UE 2016/679 – GDPR), el Reglamento General de Protección de Datos del Reino Unido (UK GDPR) y la Ley Federal Mexicana de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
      
      <p class="mb-4">MeshMe garantiza el procesamiento legal, justo y transparente de los datos personales, y adopta medidas técnicas y organizativas adecuadas para cada jurisdicción para garantizar la seguridad, integridad y confidencialidad de los datos procesados. Proporcionamos información clara a los titulares de los datos y garantizamos el ejercicio de sus derechos según las leyes aplicables a cada país en el que operamos.</p>
      
      <p class="mb-4">Bajo el GDPR y el UK GDPR, procesamos datos basados en fundamentos legales como el consentimiento, el interés legítimo y la necesidad contractual, mientras salvaguardamos los derechos fundamentales de las personas. Los titulares de los datos tienen acceso al conjunto completo de derechos establecidos en los Artículos 12 a 22 del GDPR, incluido el derecho de acceso, rectificación, eliminación, restricción, portabilidad y objeción.</p>
      
      <p class="mb-4">Bajo la LFPDPPP en México, MeshMe garantiza el cumplimiento de los principios de legalidad, consentimiento, información, finalidad, lealtad, proporcionalidad y responsabilidad. A los usuarios se les asegura el acceso a sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), y MeshMe aplica los estándares de seguridad y responsabilidad requeridos por la ley.</p>
      
      <p class="mb-4">Su privacidad es importante para nosotros. Este Aviso de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información personal cuando visita nuestro sitio web o utiliza nuestros servicios.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">INFORMACIÓN QUE RECOPILAMOS</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">Información que Usted nos Proporciona</h4>
      <p class="mb-4">Recopilamos la información que usted nos proporciona directamente, como:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Nombre</li>
        <li>Dirección de correo electrónico</li>
        <li>Número de teléfono</li>
        <li>CPF y RG (documentos de identificación brasileños)</li>
        <li>Estado civil</li>
        <li>Edad</li>
        <li>Nombre de la empresa donde trabaja</li>
        <li>Información de pago</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">INFORMACIÓN QUE RECOPILAMOS AUTOMÁTICAMENTE</h4>
      <p class="mb-4">Cuando visita nuestro sitio web, podemos recopilar automáticamente cierta información, incluyendo:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Actividades favoritas</li>
        <li>Fecha y hora de interés para la participación</li>
        <li>Nivel de habilidad</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">CÓMO USAMOS SU INFORMACIÓN</h3>
      <p class="mb-4">Usamos la información que recopilamos para varios propósitos, incluyendo:</p>
      <p class="mb-4">Registro en la aplicación, equipos, empresas, desafíos y torneos, Procesamiento de transacciones como suscripciones al MeshMe Club y alquiler de canchas, Personalización de su experiencia</p>

      <h3 class="text-xl font-bold mt-6 mb-3">COMPARTIR INFORMACIÓN</h3>
      <p class="mb-4">Podemos compartir su información con terceros en las siguientes circunstancias:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Con proveedores de servicios que apoyan la operación de nuestro negocio</li>
        <li>Cuando lo exija la ley o para proteger nuestros derechos</li>
        <li>Con su consentimiento</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">SEGURIDAD DE LA INFORMACIÓN</h3>
      <p class="mb-4">Empleamos varias medidas de seguridad para proteger su información personal contra acceso, uso o divulgación no autorizados. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">SUS DERECHOS Y OPCIONES</h3>
      <p class="mb-4">Usted tiene ciertos derechos con respecto a su información personal, incluyendo:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>El derecho a acceder a su información</li>
        <li>El derecho a corregir información inexacta</li>
        <li>El derecho a solicitar la eliminación de su información</li>
      </ul>
      <p class="mb-4">Para ejercer estos derechos, contáctenos utilizando la información proporcionada a continuación.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">CAMBIOS A ESTE AVISO</h3>
      <p class="mb-4">Podemos actualizar este Aviso de Privacidad de vez en cuando. Cualquier cambio se publicará en esta página con la fecha de revisión actualizada.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">CONTACTO</h3>
      <p class="mb-4">Si tiene alguna pregunta sobre este Aviso de Privacidad, contáctenos en:</p>
      <p class="mb-4">Correo electrónico: dpo@meshme.com.br</p>

      <h3 class="text-xl font-bold mt-6 mb-3">FECHA DE VIGENCIA</h3>
      <p class="mb-4">Este Aviso de Privacidad está vigente a partir del 28 de enero de 2025.</p>
    `,
    },
    ro: {
      title: "Notificare de Confidențialitate",
      description: "Informații despre cum colectăm și utilizăm datele dvs. personale",
      backToDocuments: "Înapoi la Documente",
      lastUpdated: "Ultima actualizare",
      content: `
      <h2 class="text-2xl font-bold mb-4">NOTIFICARE DE CONFIDENȚIALITATE EXTERNĂ</h2>

      <h3 class="text-xl font-bold mt-6 mb-3">INTRODUCERE</h3>
      <p class="mb-4">MeshMe efectuează toate procesările de date personale în conformitate cu reglementările aplicabile privind protecția datelor, inclusiv Legea Generală de Protecție a Datelor din Brazilia (Legea nr. 13.709/2018 – LGPD), Regulamentul General privind Protecția Datelor din Uniunea Europeană (Regulamentul UE 2016/679 – GDPR), Regulamentul General privind Protecția Datelor din Regatul Unit (UK GDPR) și Legea Federală Mexicană privind Protecția Datelor Personale deținute de Părți Private (Ley Federal de Protección de Datos Personales en Posesión de los Particulares – LFPDPPP).</p>
      
      <p class="mb-4">MeshMe asigură procesarea legală, corectă și transparentă a datelor personale și adoptă măsuri tehnice și organizaționale adecvate pentru fiecare jurisdicție pentru a garanta securitatea, integritatea și confidențialitatea datelor procesate. Oferim informații clare persoanelor vizate și garantăm exercitarea drepturilor lor în conformitate cu legile aplicabile în fiecare țară în care operăm.</p>
      
      <p class="mb-4">În conformitate cu GDPR și UK GDPR, procesăm datele pe baza unor temeiuri legale precum consimțământul, interesul legitim și necesitatea contractuală, protejând în același timp drepturile fundamentale ale persoanelor. Persoanele vizate au acces la setul complet de drepturi prevăzute în articolele 12-22 din GDPR, inclusiv dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție.</p>
      
      <p class="mb-4">În conformitate cu LFPDPPP din Mexic, MeshMe garantează respectarea principiilor de legalitate, consimțământ, informare, scop, loialitate, proporționalitate și responsabilitate. Utilizatorilor li se asigură accesul la drepturile lor ARCO (Acces, Rectificare, Anulare și Opoziție), iar MeshMe aplică standardele de securitate și responsabilitate cerute de lege.</p>
      
      <p class="mb-4">Confidențialitatea dvs. este importantă pentru noi. Această Notificare de Confidențialitate explică modul în care colectăm, utilizăm, divulgăm și protejăm informațiile dvs. personale atunci când vizitați site-ul nostru web sau utilizați serviciile noastre.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">INFORMAȚIILE PE CARE LE COLECTĂM</h3>
      <h4 class="text-lg font-semibold mt-4 mb-2">Informații pe care ni le furnizați</h4>
      <p class="mb-4">Colectăm informațiile pe care ni le furnizați direct, cum ar fi:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Nume</li>
        <li>Adresă de email</li>
        <li>Număr de telefon</li>
        <li>CPF și RG (documente de identificare braziliene)</li>
        <li>Stare civilă</li>
        <li>Vârstă</li>
        <li>Numele companiei unde lucrați</li>
        <li>Informații de plată</li>
      </ul>

      <h4 class="text-lg font-semibold mt-4 mb-2">INFORMAȚII PE CARE LE COLECTĂM AUTOMAT</h4>
      <p class="mb-4">Când vizitați site-ul nostru web, este posibil să colectăm automat anumite informații, inclusiv:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Activități preferate</li>
        <li>Data și ora de interes pentru participare</li>
        <li>Nivel de abilitate</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">CUM UTILIZĂM INFORMAȚIILE DUMNEAVOASTRĂ</h3>
      <p class="mb-4">Utilizăm informațiile pe care le colectăm în diverse scopuri, inclusiv:</p>
      <p class="mb-4">Înregistrarea în aplicație, echipe, companii, provocări și turnee, Procesarea tranzacțiilor precum abonamentele MeshMe Club și închirierea terenurilor, Personalizarea experienței dvs.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">PARTAJAREA INFORMAȚIILOR</h3>
      <p class="mb-4">Este posibil să partajăm informațiile dvs. cu terțe părți în următoarele circumstanțe:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Cu furnizorii de servicii care sprijină operațiunile afacerii noastre</li>
        <li>Când este cerut de lege sau pentru a ne proteja drepturile</li>
        <li>Cu consimțământul dvs.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">SECURITATEA INFORMAȚIILOR</h3>
      <p class="mb-4">Folosim diverse măsuri de securitate pentru a vă proteja informațiile personale împotriva accesului, utilizării sau divulgării neautorizate. Cu toate acestea, nicio metodă de transmitere prin Internet sau metodă de stocare electronică nu este 100% sigură.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">DREPTURILE ȘI OPȚIUNILE DUMNEAVOASTRĂ</h3>
      <p class="mb-4">Aveți anumite drepturi cu privire la informațiile dvs. personale, inclusiv:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Dreptul de a accesa informațiile dvs.</li>
        <li>Dreptul de a corecta informațiile inexacte</li>
        <li>Dreptul de a solicita ștergerea informațiilor dvs.</li>
      </ul>
      <p class="mb-4">Pentru a exercita aceste drepturi, vă rugăm să ne contactați folosind informațiile furnizate mai jos.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">MODIFICĂRI ALE ACESTEI NOTIFICĂRI</h3>
      <p class="mb-4">Este posibil să actualizăm această Notificare de Confidențialitate din când în când. Orice modificări vor fi postate pe această pagină cu data de revizuire actualizată.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">CONTACT</h3>
      <p class="mb-4">Dacă aveți întrebări despre această Notificare de Confidențialitate, vă rugăm să ne contactați la:</p>
      <p class="mb-4">Email: dpo@meshme.com.br</p>

      <h3 class="text-xl font-bold mt-6 mb-3">DATA INTRĂRII ÎN VIGOARE</h3>
      <p class="mb-4">Această Notificare de Confidențialitate este în vigoare începând cu 28 ianuarie 2025.</p>
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
