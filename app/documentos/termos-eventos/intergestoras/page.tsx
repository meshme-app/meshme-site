"use client"

import DocumentTemplate from "@/components/document-template"
import { Calendar } from "lucide-react"

export default function InterGestorasTermsPage() {
  const translations = {
    "pt-BR": {
      title: "Termos e Condições - InterGestoras",
      description: "Termos específicos para participação no evento InterGestoras da Liga da Firma",
      backToDocuments: "Voltar para Documentos",
      content: "O conteúdo dos Termos e Condições do InterGestoras será inserido aqui.",
      lastUpdated: "Última atualização",
    },
    en: {
      title: "Terms and Conditions - InterGestoras",
      description: "Specific terms for participation in the InterGestoras event of Liga da Firma",
      backToDocuments: "Back to Documents",
      content: "The content of the InterGestoras Terms and Conditions will be inserted here.",
      lastUpdated: "Last updated",
    },
    es: {
      title: "Términos y Condiciones - InterGestoras",
      description: "Términos específicos para la participación en el evento InterGestoras de Liga da Firma",
      backToDocuments: "Volver a Documentos",
      content: "El contenido de los Términos y Condiciones de InterGestoras se insertará aquí.",
      lastUpdated: "Última actualización",
    },
    ro: {
      title: "Termeni și Condiții - InterGestoras",
      description: "Termeni specifici pentru participarea la evenimentul InterGestoras al Liga da Firma",
      backToDocuments: "Înapoi la Documente",
      content: "Conținutul Termenilor și Condițiilor InterGestoras va fi inserat aici.",
      lastUpdated: "Ultima actualizare",
    },
  }

  return <DocumentTemplate translations={translations} icon={<Calendar className="h-6 w-6 text-primary" />} />
}
