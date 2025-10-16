"use client"

import DocumentTemplate from "@/components/document-template"
import { Calendar } from "lucide-react"

export default function EcommerceCupTermsPage() {
  const translations = {
    "pt-BR": {
      title: "Termos e Condições - Copa E-commerce",
      description: "Termos específicos para participação na Copa E-commerce da Liga da Firma",
      backToDocuments: "Voltar para Documentos",
      content: "O conteúdo dos Termos e Condições da Copa E-commerce será inserido aqui.",
      lastUpdated: "Última atualização",
    },
    en: {
      title: "Terms and Conditions - E-commerce Cup",
      description: "Specific terms for participation in the E-commerce Cup of Liga da Firma",
      backToDocuments: "Back to Documents",
      content: "The content of the E-commerce Cup Terms and Conditions will be inserted here.",
      lastUpdated: "Last updated",
    },
    es: {
      title: "Términos y Condiciones - Copa E-commerce",
      description: "Términos específicos para la participación en la Copa E-commerce de Liga da Firma",
      backToDocuments: "Volver a Documentos",
      content: "El contenido de los Términos y Condiciones de la Copa E-commerce se insertará aquí.",
      lastUpdated: "Última actualización",
    },
    ro: {
      title: "Termeni și Condiții - Cupa E-commerce",
      description: "Termeni specifici pentru participarea la Cupa E-commerce a Liga da Firma",
      backToDocuments: "Înapoi la Documente",
      content: "Conținutul Termenilor și Condițiilor Cupei E-commerce va fi inserat aici.",
      lastUpdated: "Ultima actualizare",
    },
  }

  return <DocumentTemplate translations={translations} icon={<Calendar className="h-6 w-6 text-secondary" />} />
}
