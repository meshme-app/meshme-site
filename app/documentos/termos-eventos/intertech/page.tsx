"use client"

import DocumentTemplate from "@/components/document-template"
import { Calendar } from "lucide-react"

export default function InterTechTermsPage() {
  const translations = {
    "pt-BR": {
      title: "Termos e Condições - InterTech",
      description: "Termos específicos para participação no evento InterTech da Liga da Firma",
      backToDocuments: "Voltar para Documentos",
      content: "O conteúdo dos Termos e Condições do InterTech será inserido aqui.",
      lastUpdated: "Última atualização",
    },
    en: {
      title: "Terms and Conditions - InterTech",
      description: "Specific terms for participation in the InterTech event of Liga da Firma",
      backToDocuments: "Back to Documents",
      content: "The content of the InterTech Terms and Conditions will be inserted here.",
      lastUpdated: "Last updated",
    },
    es: {
      title: "Términos y Condiciones - InterTech",
      description: "Términos específicos para la participación en el evento InterTech de Liga da Firma",
      backToDocuments: "Volver a Documentos",
      content: "El contenido de los Términos y Condiciones de InterTech se insertará aquí.",
      lastUpdated: "Última actualización",
    },
    ro: {
      title: "Termeni și Condiții - InterTech",
      description: "Termeni specifici pentru participarea la evenimentul InterTech al Liga da Firma",
      backToDocuments: "Înapoi la Documente",
      content: "Conținutul Termenilor și Condițiilor InterTech va fi inserat aici.",
      lastUpdated: "Ultima actualizare",
    },
  }

  return <DocumentTemplate translations={translations} icon={<Calendar className="h-6 w-6 text-secondary" />} />
}
