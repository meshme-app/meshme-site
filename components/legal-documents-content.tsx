"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Shield, Calendar, DatabaseZap, Info } from "lucide-react" // Adicionado Info
import LanguageSelector from "@/components/language-selector"
import DocumentCard from "./document-card" // Importando DocumentCard

// Definindo os tipos para as traduções
type Translations = {
  [key: string]: {
    pageTitle: string // Renomeado de title para pageTitle para evitar conflito
    pageDescription: string // Renomeado de description para pageDescription
    privacyNoticeTitle: string
    privacyNoticeDesc: string
    dataProcessingConsentTitle: string
    dataProcessingConsentDesc: string
    privacyPolicyTitle: string
    privacyPolicyDesc: string
    storagePolicyTitle: string
    storagePolicyDesc: string
    eventTermsTitle: string
    eventTermsDesc: string
    viewDocument: string
    lastUpdated: string // Adicionado
    allDocuments: string
    securityPrivacy: string
    termsConditions: string
    consents: string
  }
}

const translationsData: Translations = {
  "pt-BR": {
    pageTitle: "Documentos Legais",
    pageDescription: "Acesse todos os documentos legais da Liga da Firma e do aplicativo MeshMe.",
    lastUpdated: "Última atualização",
    privacyNoticeTitle: "Aviso de Privacidade",
    privacyNoticeDesc: "Informações sobre como coletamos e utilizamos seus dados pessoais.",
    dataProcessingConsentTitle: "Consentimento para Processamento de Dados",
    dataProcessingConsentDesc: "Documento para autorização do processamento de seus dados pessoais.",
    privacyPolicyTitle: "Política de Privacidade",
    privacyPolicyDesc: "Nossa política completa sobre privacidade e proteção de dados.",
    storagePolicyTitle: "Política de Armazenamento e Descarte",
    storagePolicyDesc: "Como armazenamos e quando descartamos seus dados.",
    eventTermsTitle: "Termos e Condições dos Eventos",
    eventTermsDesc: "Termos específicos para participação nos eventos da Liga da Firma.",
    viewDocument: "Ver documento",
    allDocuments: "Todos",
    securityPrivacy: "Segurança e Privacidade",
    termsConditions: "Termos e Condições",
    consents: "Consentimentos",
  },
  en: {
    pageTitle: "Legal Documents",
    pageDescription: "Access all legal documents for Liga da Firma and MeshMe app.",
    lastUpdated: "Last updated",
    privacyNoticeTitle: "Privacy Notice",
    privacyNoticeDesc: "Information about how we collect and use your personal data.",
    dataProcessingConsentTitle: "Data Processing Consent",
    dataProcessingConsentDesc: "Document for authorizing the processing of your personal data.",
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicyDesc: "Our complete policy on privacy and data protection.",
    storagePolicyTitle: "Storage and Disposal Policy",
    storagePolicyDesc: "How we store and when we dispose of your data.",
    eventTermsTitle: "Event Terms and Conditions",
    eventTermsDesc: "Specific terms for participation in Liga da Firma events.",
    viewDocument: "View document",
    allDocuments: "All",
    securityPrivacy: "Security & Privacy",
    termsConditions: "Terms & Conditions",
    consents: "Consents",
  },
  es: {
    pageTitle: "Documentos Legales",
    pageDescription: "Acceda a todos los documentos legales de Liga da Firma y la aplicación MeshMe.",
    lastUpdated: "Última actualización",
    privacyNoticeTitle: "Aviso de Privacidad",
    privacyNoticeDesc: "Información sobre cómo recopilamos y utilizamos sus datos personales.",
    dataProcessingConsentTitle: "Consentimiento para Procesamiento de Datos",
    dataProcessingConsentDesc: "Documento para autorizar el procesamiento de sus datos personales.",
    privacyPolicyTitle: "Política de Privacidad",
    privacyPolicyDesc: "Nuestra política completa sobre privacidad y protección de datos.",
    storagePolicyTitle: "Política de Almacenamiento y Eliminación",
    storagePolicyDesc: "Cómo almacenamos y cuándo eliminamos sus datos.",
    eventTermsTitle: "Términos y Condiciones de los Eventos",
    eventTermsDesc: "Términos específicos para la participación en los eventos de Liga da Firma.",
    viewDocument: "Ver documento",
    allDocuments: "Todos",
    securityPrivacy: "Seguridad y Privacidad",
    termsConditions: "Términos y Condiciones",
    consents: "Consentimientos",
  },
  ro: {
    pageTitle: "Documente Legale",
    pageDescription: "Accesați toate documentele legale pentru Liga da Firma și aplicația MeshMe.",
    lastUpdated: "Ultima actualizare",
    privacyNoticeTitle: "Notificare de Confidențialitate",
    privacyNoticeDesc: "Informații despre cum colectăm și utilizăm datele dvs. personale.",
    dataProcessingConsentTitle: "Consimțământ pentru Procesarea Datelor",
    dataProcessingConsentDesc: "Document pentru autorizarea procesării datelor dvs. personale.",
    privacyPolicyTitle: "Politica de Confidențialitate",
    privacyPolicyDesc: "Politica noastră completă privind confidențialitatea și protecția datelor.",
    storagePolicyTitle: "Politica de Stocare și Eliminare",
    storagePolicyDesc: "Cum stocăm și când eliminăm datele dvs.",
    eventTermsTitle: "Termeni și Condiții pentru Evenimente",
    eventTermsDesc: "Termeni specifici pentru participarea la evenimentele Liga da Firma.",
    viewDocument: "Vezi documentul",
    allDocuments: "Toate",
    securityPrivacy: "Securitate și Confidențialitate",
    termsConditions: "Termeni și Condiții",
    consents: "Consimțăminte",
  },
}

interface DocumentItemConfig {
  id: string
  icon: React.ElementType
  titleKey: keyof Translations[string]
  descriptionKey: keyof Translations[string]
  href: string
  category: "security" | "terms" | "consents"
  color: "primary" | "secondary" | "orange" | "green" | "blue" // Adicionando mais cores se necessário
}

const documentList: DocumentItemConfig[] = [
  {
    id: "privacy-notice",
    icon: Info,
    titleKey: "privacyNoticeTitle",
    descriptionKey: "privacyNoticeDesc",
    href: "/documentos/aviso-privacidade",
    category: "security",
    color: "orange",
  },
  {
    id: "data-consent",
    icon: FileText, // Usando FileText como no screenshot
    titleKey: "dataProcessingConsentTitle",
    descriptionKey: "dataProcessingConsentDesc",
    href: "/documentos/consentimento-dados",
    category: "consents",
    color: "green",
  },
  {
    id: "privacy-policy",
    icon: Shield,
    titleKey: "privacyPolicyTitle",
    descriptionKey: "privacyPolicyDesc",
    href: "/documentos/politica-privacidade",
    category: "security",
    color: "orange",
  },
  {
    id: "storage-policy",
    icon: DatabaseZap, // Usando DatabaseZap como no screenshot (parece um ícone de DB)
    titleKey: "storagePolicyTitle",
    descriptionKey: "storagePolicyDesc",
    href: "/documentos/politica-armazenamento",
    category: "security",
    color: "green",
  },
  {
    id: "event-terms",
    icon: Calendar,
    titleKey: "eventTermsTitle",
    descriptionKey: "eventTermsDesc",
    href: "/documentos/termos-eventos", // Link para a página de listagem de termos de eventos
    category: "terms",
    color: "orange",
  },
]

interface LegalDocumentsContentProps {
  language: string
  onLanguageChange: (lang: string) => void
}

export default function LegalDocumentsContent({
  language: currentLanguage,
  onLanguageChange: setParentLanguage,
}: LegalDocumentsContentProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "all")

  const handleLanguageChange = (newLang: string) => {
    setParentLanguage(newLang) // Atualiza o estado no componente pai
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", newLang)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (activeTab === "all") {
      params.delete("tab")
    } else {
      params.set("tab", activeTab)
    }
    params.set("lang", currentLanguage)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [activeTab, currentLanguage, router, pathname, searchParams])

  const t = translationsData[currentLanguage as keyof typeof translationsData] || translationsData["pt-BR"]

  const filteredDocuments = documentList.filter((doc) => {
    if (activeTab === "all") return true
    return doc.category === activeTab
  })

  return (
    <div className="bg-white relative overflow-hidden">
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-sky-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{t.pageTitle}</h1>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{t.pageDescription}</p>
              <p className="text-xs text-gray-500 mt-2">
                {t.lastUpdated}: {new Date().toLocaleDateString(currentLanguage)}
              </p>
            </div>
            <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8 md:mb-12">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                {t.allDocuments}
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                {t.securityPrivacy}
              </TabsTrigger>
              <TabsTrigger
                value="terms"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                {t.termsConditions}
              </TabsTrigger>
              <TabsTrigger
                value="consents"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                {t.consents}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={t[doc.titleKey as keyof typeof t]}
                description={t[doc.descriptionKey as keyof typeof t]}
                icon={
                  <doc.icon
                    className={`h-6 w-6 ${doc.color === "orange" ? "text-orange-500" : doc.color === "green" ? "text-green-500" : "text-primary"}`}
                  />
                } // Ajuste de cores
                href={`${doc.href}?lang=${currentLanguage}`}
                color={doc.color}
                viewText={t.viewDocument}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
