"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

type Language = "pt-BR" | "en" | "es" | "ro"

export default function DataConsentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [currentLanguage, setCurrentLanguage] = useState<Language>((searchParams.get("lang") as Language) || "pt-BR")

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", currentLanguage)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [currentLanguage, searchParams, router, pathname])

  const translations = {
    "pt-BR": {
      title: "Consentimento para Processamento de Dados",
      description: "Documento para autorização do processamento de seus dados pessoais",
      backToDocuments: "Voltar para Documentos",
      lastUpdated: "Última atualização: 2 de janeiro de 2025",
    },
    en: {
      title: "Data Processing Consent",
      description: "Document for authorizing the processing of your personal data",
      backToDocuments: "Back to Documents",
      lastUpdated: "Last updated: January 2, 2025",
    },
    es: {
      title: "Consentimiento para Procesamiento de Datos",
      description: "Documento para autorizar el procesamiento de sus datos personales",
      backToDocuments: "Volver a Documentos",
      lastUpdated: "Última actualización: 2 de enero de 2025",
    },
    ro: {
      title: "Consimțământ pentru Procesarea Datelor",
      description: "Document pentru autorizarea procesării datelor dvs. personale",
      backToDocuments: "Înapoi la Documente",
      lastUpdated: "Ultima actualizare: 2 ianuarie 2025",
    },
  }

  const t = translations[currentLanguage]

  const getContent = (language: Language) => {
    switch (language) {
      case "pt-BR":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">FORMULÁRIO DE CONSENTIMENTO PARA PROCESSAMENTO DE DADOS</h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">INFORMAÇÕES GERAIS</h2>
              <p>
                A MeshMe afirma seu compromisso com a privacidade e proteção de dados pessoais, conduzindo todas as
                atividades de processamento de dados em conformidade com as leis de proteção de dados aplicáveis.
              </p>
              <p>
                Este Formulário de Consentimento é regido pelas disposições da Lei Geral de Proteção de Dados Brasileira
                (Lei nº 13.709/2018 – LGPD), o Regulamento Geral de Proteção de Dados da União Europeia (Regulamento UE
                2016/679 – GDPR), o Regulamento Geral de Proteção de Dados do Reino Unido (UK GDPR), e a Lei Federal
                Mexicana de Proteção de Dados Pessoais em Posse de Particulares (Ley Federal de Protección de Datos
                Personales en Posesión de los Particulares – LFPDPPP). A MeshMe garante o processamento lícito, justo e
                transparente de dados pessoais de acordo com os princípios, direitos e obrigações estabelecidos por cada
                um desses marcos legais.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. INTRODUÇÃO</h2>
              <p>
                Este documento tem como objetivo registrar a manifestação livre, informada e inequívoca pela qual o
                Titular dos Dados (prestador de serviços, cliente ou pessoa jurídica) consente com o tratamento de seus
                dados pessoais para finalidades específicas, em conformidade com a Lei nº 13.709 – Lei Geral de Proteção
                de Dados (LGPD).
              </p>
              <p>
                Ao aceitar este formulário de consentimento, o Titular dos Dados concorda e autoriza a MeshMe, com sede
                na Rua Dr. Renato Paes de Barros, 618, conjunto 1, Itaim Bibi, São Paulo, CEP 04530-000, doravante
                denominada Controladora, a tomar decisões relacionadas ao tratamento de seus dados pessoais necessários
                para a prestação dos serviços oferecidos.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">2. DADOS PESSOAIS</h2>
              <p>
                A MeshMe está autorizada a processar os seguintes dados pessoais para fins de relacionamento comercial:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Finalidade</th>
                      <th className="border border-gray-300 p-2 text-left">Processamento</th>
                      <th className="border border-gray-300 p-2 text-left">Dados Coletados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Registro no aplicativo</td>
                      <td className="border border-gray-300 p-2">Acesso, Coleta, Armazenamento, Compartilhamento</td>
                      <td className="border border-gray-300 p-2">Email pessoal, senha, número de telefone</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">
                        Onboarding – Inserir informações pessoais e preferências
                      </td>
                      <td className="border border-gray-300 p-2">Acesso, Coleta, Armazenamento, Compartilhamento</td>
                      <td className="border border-gray-300 p-2">Nome</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Criar, editar ou participar de equipes</td>
                      <td className="border border-gray-300 p-2">Acesso, Coleta, Armazenamento, Compartilhamento</td>
                      <td className="border border-gray-300 p-2">Nome da equipe</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Criar, editar ou participar de empresas</td>
                      <td className="border border-gray-300 p-2">Acesso, Coleta, Armazenamento, Compartilhamento</td>
                      <td className="border border-gray-300 p-2">Email corporativo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Gestão de CRM</td>
                      <td className="border border-gray-300 p-2">Acesso, Coleta, Armazenamento, Compartilhamento</td>
                      <td className="border border-gray-300 p-2">
                        Nome, RG, CPF, endereço, email, estado civil, idade, telefone
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">3. FIM DO PROCESSAMENTO DE DADOS</h2>
              <p>
                A Controladora poderá reter e processar os dados pessoais do Titular dos Dados pelo período necessário
                para alcançar as finalidades descritas neste documento. Dados pessoais anonimizados, que não podem ser
                associados a um indivíduo, podem ser retidos por período indefinido.
              </p>
              <p>
                O Titular dos Dados pode exercer seus direitos, gratuitamente, a qualquer momento, entrando em contato
                através do email dpo@meshme.com.br.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">4. DIREITOS DO TITULAR DOS DADOS</h2>
              <p>
                O Titular dos Dados tem o direito de obter da Controladora, a qualquer momento e mediante solicitação,
                informações sobre os dados processados, incluindo:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Confirmação da existência de tratamento</li>
                <li>Acesso aos dados</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</li>
                <li>Eliminação de dados pessoais tratados com consentimento do titular</li>
                <li>Informação sobre entidades públicas e privadas com as quais a Controladora compartilhou dados</li>
                <li>Informação sobre a possibilidade de não fornecer consentimento</li>
                <li>Revogação do consentimento</li>
              </ol>
            </div>
          </div>
        )

      case "en":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">DATA PROCESSING CONSENT FORM</h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">GENERAL INFORMATION</h2>
              <p>
                MeshMe affirms its commitment to privacy and personal data protection, conducting all data processing
                activities in compliance with applicable data protection laws.
              </p>
              <p>
                This Consent Form is governed by the provisions of the Brazilian General Data Protection Law (Law No.
                13.709/2018 – LGPD), the General Data Protection Regulation of the European Union (Regulation EU
                2016/679 – GDPR), the UK General Data Protection Regulation (UK GDPR), and the Federal Law on Protection
                of Personal Data Held by Private Parties of Mexico (Ley Federal de Protección de Datos Personales en
                Posesión de los Particulares – LFPDPPP). MeshMe ensures the lawful, fair, and transparent processing of
                personal data in accordance with the principles, rights, and obligations established by each of these
                legal frameworks.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. INTRODUCTION</h2>
              <p>
                This document aims to register the free, informed, and unequivocal expression by which the Data Subject
                (service provider, client, or legal entity) consents to the processing of their personal data for
                specific purposes, in compliance with Law No. 13.709 – General Data Protection Law (LGPD).
              </p>
              <p>
                By accepting this consent form, the Data Subject agrees and authorizes MeshMe, headquartered at Rua Dr.
                Renato Paes de Barros, 618, suite 1, Itaim Bibi, São Paulo, ZIP Code 04530-000, hereinafter referred to
                as the Controller, to make decisions related to the processing of their personal data necessary for the
                provision of offered services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">2. PERSONAL DATA</h2>
              <p>MeshMe is authorized to process the following personal data for commercial relationship purposes:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Purpose</th>
                      <th className="border border-gray-300 p-2 text-left">Processing</th>
                      <th className="border border-gray-300 p-2 text-left">Collected Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">App registration</td>
                      <td className="border border-gray-300 p-2">Access, Collection, Storage, Sharing</td>
                      <td className="border border-gray-300 p-2">Personal email, password, phone number</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">
                        Onboarding – Enter personal information and preferences
                      </td>
                      <td className="border border-gray-300 p-2">Access, Collection, Storage, Sharing</td>
                      <td className="border border-gray-300 p-2">Name</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Create, edit or join teams</td>
                      <td className="border border-gray-300 p-2">Access, Collection, Storage, Sharing</td>
                      <td className="border border-gray-300 p-2">Team name</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Create, edit or join companies</td>
                      <td className="border border-gray-300 p-2">Access, Collection, Storage, Sharing</td>
                      <td className="border border-gray-300 p-2">Corporate email</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">CRM management</td>
                      <td className="border border-gray-300 p-2">Access, Collection, Storage, Sharing</td>
                      <td className="border border-gray-300 p-2">
                        Name, ID number, CPF, address, email, marital status, age, phone
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">3. END OF DATA PROCESSING</h2>
              <p>
                The Controller may retain and process the Data Subject's personal data for the duration necessary to
                achieve the purposes outlined in this document. Anonymized personal data, which cannot be associated
                with an individual, may be retained for an indefinite period.
              </p>
              <p>
                The Data Subject may exercise their rights, free of charge, at any time, by contacting
                dpo@meshme.com.br.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">4. DATA SUBJECT'S RIGHTS</h2>
              <p>
                The Data Subject has the right to obtain from the Controller, at any time and upon request, information
                regarding the data processed, including:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Confirmation of the existence of processing</li>
                <li>Access to the data</li>
                <li>Correction of incomplete, inaccurate or outdated data</li>
                <li>Anonymization, blocking or deletion of unnecessary or excessive data</li>
                <li>Deletion of personal data processed with the Data Subject's consent</li>
                <li>Information about public and private entities with which the Controller has shared data</li>
                <li>Information on the possibility of withholding consent</li>
                <li>Revocation of consent</li>
              </ol>
            </div>
          </div>
        )

      case "es":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">FORMULARIO DE CONSENTIMIENTO PARA PROCESAMIENTO DE DATOS</h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">INFORMACIÓN GENERAL</h2>
              <p>
                MeshMe afirma su compromiso con la privacidad y protección de datos personales, realizando todas las
                actividades de procesamiento de datos en cumplimiento con las leyes de protección de datos aplicables.
              </p>
              <p>
                Este Formulario de Consentimiento se rige por las disposiciones de la Ley General de Protección de Datos
                de Brasil (Ley No. 13.709/2018 – LGPD), el Reglamento General de Protección de Datos de la Unión Europea
                (Reglamento UE 2016/679 – GDPR), el Reglamento General de Protección de Datos del Reino Unido (UK GDPR),
                y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares de México (LFPDPPP).
                MeshMe garantiza el procesamiento lícito, justo y transparente de datos personales de acuerdo con los
                principios, derechos y obligaciones establecidos por cada uno de estos marcos legales.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. INTRODUCCIÓN</h2>
              <p>
                Este documento tiene como objetivo registrar la manifestación libre, informada e inequívoca por la cual
                el Titular de los Datos (proveedor de servicios, cliente o persona jurídica) consiente el tratamiento de
                sus datos personales para fines específicos, en cumplimiento con la Ley No. 13.709 – Ley General de
                Protección de Datos (LGPD).
              </p>
              <p>
                Al aceptar este formulario de consentimiento, el Titular de los Datos acepta y autoriza a MeshMe, con
                sede en Rua Dr. Renato Paes de Barros, 618, conjunto 1, Itaim Bibi, São Paulo, Código Postal 04530-000,
                en adelante denominada la Controladora, a tomar decisiones relacionadas con el tratamiento de sus datos
                personales necesarios para la prestación de los servicios ofrecidos.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">2. DATOS PERSONALES</h2>
              <p>MeshMe está autorizada a procesar los siguientes datos personales para fines de relación comercial:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Propósito</th>
                      <th className="border border-gray-300 p-2 text-left">Procesamiento</th>
                      <th className="border border-gray-300 p-2 text-left">Datos Recopilados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Registro en la aplicación</td>
                      <td className="border border-gray-300 p-2">Acceso, Recopilación, Almacenamiento, Compartir</td>
                      <td className="border border-gray-300 p-2">Email personal, contraseña, número de teléfono</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">
                        Incorporación – Ingresar información personal y preferencias
                      </td>
                      <td className="border border-gray-300 p-2">Acceso, Recopilación, Almacenamiento, Compartir</td>
                      <td className="border border-gray-300 p-2">Nombre</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Crear, editar o unirse a equipos</td>
                      <td className="border border-gray-300 p-2">Acceso, Recopilación, Almacenamiento, Compartir</td>
                      <td className="border border-gray-300 p-2">Nombre del equipo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Crear, editar o unirse a empresas</td>
                      <td className="border border-gray-300 p-2">Acceso, Recopilación, Almacenamiento, Compartir</td>
                      <td className="border border-gray-300 p-2">Email corporativo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Gestión de CRM</td>
                      <td className="border border-gray-300 p-2">Acceso, Recopilación, Almacenamiento, Compartir</td>
                      <td className="border border-gray-300 p-2">
                        Nombre, número de ID, CPF, dirección, email, estado civil, edad, teléfono
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">3. FIN DEL PROCESAMIENTO DE DATOS</h2>
              <p>
                La Controladora puede retener y procesar los datos personales del Titular de los Datos durante el tiempo
                necesario para lograr los propósitos descritos en este documento. Los datos personales anonimizados, que
                no pueden asociarse con un individuo, pueden retenerse por un período indefinido.
              </p>
              <p>
                El Titular de los Datos puede ejercer sus derechos, sin costo alguno, en cualquier momento, contactando
                a dpo@meshme.com.br.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">4. DERECHOS DEL TITULAR DE LOS DATOS</h2>
              <p>
                El Titular de los Datos tiene derecho a obtener de la Controladora, en cualquier momento y previa
                solicitud, información sobre los datos procesados, incluyendo:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Confirmación de la existencia del tratamiento</li>
                <li>Acceso a los datos</li>
                <li>Corrección de datos incompletos, inexactos o desactualizados</li>
                <li>Anonimización, bloqueo o eliminación de datos innecesarios o excesivos</li>
                <li>Eliminación de datos personales tratados con consentimiento del titular</li>
                <li>Información sobre entidades públicas y privadas con las que la Controladora ha compartido datos</li>
                <li>Información sobre la posibilidad de no otorgar consentimiento</li>
                <li>Revocación del consentimiento</li>
              </ol>
            </div>
          </div>
        )

      case "ro":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">FORMULAR DE CONSIMȚĂMÂNT PENTRU PROCESAREA DATELOR</h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">INFORMAȚII GENERALE</h2>
              <p>
                MeshMe își afirmă angajamentul față de confidențialitate și protecția datelor personale, desfășurând
                toate activitățile de procesare a datelor în conformitate cu legile aplicabile de protecție a datelor.
              </p>
              <p>
                Acest Formular de Consimțământ este guvernat de prevederile Legii Generale de Protecție a Datelor din
                Brazilia (Legea nr. 13.709/2018 – LGPD), Regulamentul General privind Protecția Datelor al Uniunii
                Europene (Regulamentul UE 2016/679 – GDPR), Regulamentul General privind Protecția Datelor din Regatul
                Unit (UK GDPR), și Legea Federală Mexicană privind Protecția Datelor Personale Deținute de Părți Private
                (LFPDPPP). MeshMe asigură procesarea legală, corectă și transparentă a datelor personale în conformitate
                cu principiile, drepturile și obligațiile stabilite de fiecare dintre aceste cadre legale.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. INTRODUCERE</h2>
              <p>
                Acest document are ca scop înregistrarea manifestării libere, informate și neechivocă prin care
                Subiectul Datelor (furnizor de servicii, client sau persoană juridică) consimte la procesarea datelor
                sale personale pentru scopuri specifice, în conformitate cu Legea nr. 13.709 – Legea Generală de
                Protecție a Datelor (LGPD).
              </p>
              <p>
                Prin acceptarea acestui formular de consimțământ, Subiectul Datelor este de acord și autorizează MeshMe,
                cu sediul în Rua Dr. Renato Paes de Barros, 618, suita 1, Itaim Bibi, São Paulo, Cod Poștal 04530-000,
                denumită în continuare Operatorul, să ia decizii legate de procesarea datelor sale personale necesare
                pentru furnizarea serviciilor oferite.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">2. DATE PERSONALE</h2>
              <p>MeshMe este autorizată să proceseze următoarele date personale în scopuri de relație comercială:</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Scop</th>
                      <th className="border border-gray-300 p-2 text-left">Procesare</th>
                      <th className="border border-gray-300 p-2 text-left">Date Colectate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Înregistrarea în aplicație</td>
                      <td className="border border-gray-300 p-2">Acces, Colectare, Stocare, Partajare</td>
                      <td className="border border-gray-300 p-2">Email personal, parolă, număr de telefon</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">
                        Integrare – Introducerea informațiilor personale și preferințelor
                      </td>
                      <td className="border border-gray-300 p-2">Acces, Colectare, Stocare, Partajare</td>
                      <td className="border border-gray-300 p-2">Nume</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Crearea, editarea sau alăturarea la echipe</td>
                      <td className="border border-gray-300 p-2">Acces, Colectare, Stocare, Partajare</td>
                      <td className="border border-gray-300 p-2">Numele echipei</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Crearea, editarea sau alăturarea la companii</td>
                      <td className="border border-gray-300 p-2">Acces, Colectare, Stocare, Partajare</td>
                      <td className="border border-gray-300 p-2">Email corporativ</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Gestionarea CRM</td>
                      <td className="border border-gray-300 p-2">Acces, Colectare, Stocare, Partajare</td>
                      <td className="border border-gray-300 p-2">
                        Nume, număr ID, CPF, adresă, email, stare civilă, vârstă, telefon
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">3. SFÂRȘITUL PROCESĂRII DATELOR</h2>
              <p>
                Operatorul poate reține și procesa datele personale ale Subiectului Datelor pentru durata necesară
                pentru atingerea scopurilor descrise în acest document. Datele personale anonimizate, care nu pot fi
                asociate cu un individ, pot fi reținute pentru o perioadă nedefinită.
              </p>
              <p>
                Subiectul Datelor poate să-și exercite drepturile, gratuit, în orice moment, contactând
                dpo@meshme.com.br.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">4. DREPTURILE SUBIECTULUI DATELOR</h2>
              <p>
                Subiectul Datelor are dreptul să obțină de la Operator, în orice moment și la cerere, informații privind
                datele procesate, incluzând:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Confirmarea existenței procesării</li>
                <li>Accesul la date</li>
                <li>Corectarea datelor incomplete, inexacte sau învechite</li>
                <li>Anonimizarea, blocarea sau ștergerea datelor inutile sau excesive</li>
                <li>Ștergerea datelor personale procesate cu consimțământul titularului</li>
                <li>Informații despre entitățile publice și private cu care Operatorul a partajat datele</li>
                <li>Informații despre posibilitatea de a nu acorda consimțământul</li>
                <li>Revocarea consimțământului</li>
              </ol>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link href={`/termos-e-condicoes?lang=${currentLanguage}`}>
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backToDocuments}
            </Button>
          </Link>
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={(lang) => setCurrentLanguage(lang as Language)}
            availableLanguages={["pt-BR", "en", "es", "ro"]}
          />
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-secondary mr-3" />
              <CardTitle className="text-3xl">{t.title}</CardTitle>
            </div>
            <p className="text-muted-foreground">{t.description}</p>
          </CardHeader>

          <CardContent className="prose max-w-none">
            {getContent(currentLanguage)}
            <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-muted-foreground">{t.lastUpdated}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
