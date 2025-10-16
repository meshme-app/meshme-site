"use client"

import DocumentTemplate from "@/components/document-template"
import { Calendar } from "lucide-react"

export default function InterConsultoriasTermsPage() {
  const translations = {
    "pt-BR": {
      title: "Termos e Condições - InterConsultorias",
      description: "Termos específicos para participação no evento InterConsultorias da Liga da Firma",
      backToDocuments: "Voltar para Documentos",
      content: "O conteúdo dos Termos e Condições do InterConsultorias será inserido aqui.",
      lastUpdated: "Última atualização",
    },
    en: {
      title: "Terms and Conditions - InterConsultorias",
      description: "Specific terms for participation in the InterConsultorias event of Liga da Firma",
      backToDocuments: "Back to Documents",
      content: "The content of the InterConsultorias Terms and Conditions will be inserted here.",
      lastUpdated: "Last updated",
    },
    es: {
      title: "Términos y Condiciones - InterConsultorias",
      description: "Términos específicos para la participación en el evento InterConsultorias de Liga da Firma",
      backToDocuments: "Volver a Documentos",
      content: "El contenido de los Términos y Condiciones de InterConsultorias se insertará aquí.",
      lastUpdated: "Última actualización",
    },
    ro: {
      title: "Termeni și Condiții - InterConsultorias",
      description: "Termeni specifici pentru participarea la evenimentul InterConsultorias al Liga da Firma",
      backToDocuments: "Înapoi la Documente",
      content: "Conținutul Termenilor și Condițiilor InterConsultorias va fi inserat aici.",
      lastUpdated: "Ultima actualizare",
    },
  }

  return <DocumentTemplate translations={translations} icon={<Calendar className="h-6 w-6 text-primary" />} />
}
