"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyNoticePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState<"pt" | "en" | "es">("pt")

  useEffect(() => {
    const langParam = searchParams.get("lang") as "pt" | "en" | "es"
    if (langParam && ["pt", "en", "es"].includes(langParam)) {
      setLanguage(langParam)
    }
  }, [searchParams])

  const handleLanguageChange = (newLanguage: "pt" | "en" | "es") => {
    setLanguage(newLanguage)
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", newLanguage)
    router.push(`${pathname}?${params.toString()}`)
  }

  const content = {
    pt: {
      title: "Aviso de Privacidade",
      lastUpdated: "Última atualização: 27 de janeiro de 2025",
      backButton: "Voltar",
      sections: [
        {
          title: "1. Introdução",
          content:
            "Este Aviso de Privacidade descreve como a MeshMe ('nós', 'nosso' ou 'nos') coleta, usa, compartilha e protege suas informações pessoais quando você usa nossos serviços.",
        },
        {
          title: "2. Informações que Coletamos",
          content:
            "Coletamos informações que você nos fornece diretamente, como nome, e-mail, foto de perfil e dados de participação em eventos esportivos corporativos. Também coletamos automaticamente informações sobre seu dispositivo e uso do aplicativo.",
        },
        {
          title: "3. Como Usamos Suas Informações",
          content:
            "Usamos suas informações para fornecer e melhorar nossos serviços, personalizar sua experiência, comunicar-nos com você sobre eventos e atualizações, e cumprir obrigações legais.",
        },
        {
          title: "4. Compartilhamento de Informações",
          content:
            "Podemos compartilhar suas informações com: sua empresa (quando você participa de eventos corporativos), organizadores de eventos, prestadores de serviços terceirizados, e autoridades legais quando exigido por lei.",
        },
        {
          title: "5. Seus Direitos",
          content:
            "Você tem o direito de acessar, corrigir, excluir ou limitar o uso de suas informações pessoais. Você também pode se opor ao processamento de suas informações ou solicitar a portabilidade dos dados.",
        },
        {
          title: "6. Segurança",
          content:
            "Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.",
        },
        {
          title: "7. Contato",
          content:
            "Se você tiver dúvidas sobre este Aviso de Privacidade, entre em contato conosco em: contato@meshme.com.br",
        },
      ],
    },
    en: {
      title: "Privacy Notice",
      lastUpdated: "Last updated: January 27, 2025",
      backButton: "Back",
      sections: [
        {
          title: "1. Introduction",
          content:
            "This Privacy Notice describes how MeshMe ('we', 'our' or 'us') collects, uses, shares and protects your personal information when you use our services.",
        },
        {
          title: "2. Information We Collect",
          content:
            "We collect information you provide directly to us, such as name, email, profile photo, and data about participation in corporate sports events. We also automatically collect information about your device and app usage.",
        },
        {
          title: "3. How We Use Your Information",
          content:
            "We use your information to provide and improve our services, personalize your experience, communicate with you about events and updates, and comply with legal obligations.",
        },
        {
          title: "4. Information Sharing",
          content:
            "We may share your information with: your company (when you participate in corporate events), event organizers, third-party service providers, and legal authorities when required by law.",
        },
        {
          title: "5. Your Rights",
          content:
            "You have the right to access, correct, delete or limit the use of your personal information. You can also object to the processing of your information or request data portability.",
        },
        {
          title: "6. Security",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure or destruction.",
        },
        {
          title: "7. Contact",
          content: "If you have questions about this Privacy Notice, please contact us at: contato@meshme.com.br",
        },
      ],
    },
    es: {
      title: "Aviso de Privacidad",
      lastUpdated: "Última actualización: 27 de enero de 2025",
      backButton: "Volver",
      sections: [
        {
          title: "1. Introducción",
          content:
            "Este Aviso de Privacidad describe cómo MeshMe ('nosotros', 'nuestro' o 'nos') recopila, usa, comparte y protege su información personal cuando utiliza nuestros servicios.",
        },
        {
          title: "2. Información que Recopilamos",
          content:
            "Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico, foto de perfil y datos de participación en eventos deportivos corporativos. También recopilamos automáticamente información sobre su dispositivo y uso de la aplicación.",
        },
        {
          title: "3. Cómo Usamos Su Información",
          content:
            "Usamos su información para proporcionar y mejorar nuestros servicios, personalizar su experiencia, comunicarnos con usted sobre eventos y actualizaciones, y cumplir con obligaciones legales.",
        },
        {
          title: "4. Compartir Información",
          content:
            "Podemos compartir su información con: su empresa (cuando participa en eventos corporativos), organizadores de eventos, proveedores de servicios terceros y autoridades legales cuando lo exija la ley.",
        },
        {
          title: "5. Sus Derechos",
          content:
            "Tiene derecho a acceder, corregir, eliminar o limitar el uso de su información personal. También puede oponerse al procesamiento de su información o solicitar la portabilidad de datos.",
        },
        {
          title: "6. Seguridad",
          content:
            "Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.",
        },
        {
          title: "7. Contacto",
          content: "Si tiene preguntas sobre este Aviso de Privacidad, contáctenos en: contato@meshme.com.br",
        },
      ],
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          className="mb-6 text-[#FF6B2C] hover:text-[#FF6B2C]/80 hover:bg-[#FF6B2C]/10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {currentContent.backButton}
        </Button>

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{currentContent.title}</h1>
            <p className="text-sm text-gray-600">{currentContent.lastUpdated}</p>
          </div>
          <LanguageSelector language={language} onLanguageChange={handleLanguageChange} />
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
