"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

type Language = "pt" | "en" | "es"

export default function PrivacyPolicyPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const langParam = searchParams.get("lang") as Language
    if (langParam && ["pt", "en", "es"].includes(langParam)) {
      setLanguage(langParam)
    }
  }, [searchParams])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", newLanguage)
    router.push(`${pathname}?${params.toString()}`)
  }

  const content = {
    pt: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: 27 de outubro de 2024",
      sections: [
        {
          title: "1. Introdução",
          content:
            'A MeshMe ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade dos usuários de nossa plataforma e aplicativos móveis (coletivamente, os "Serviços"). Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você usa nossos Serviços.',
        },
        {
          title: "2. Informações que Coletamos",
          content: "Coletamos vários tipos de informações em conexão com os Serviços que fornecemos, incluindo:",
          subsections: [
            {
              title: "2.1. Informações Fornecidas por Você",
              items: [
                "Informações de conta (nome, e-mail, senha)",
                "Informações de perfil (foto, localização, empresa)",
                "Informações de atividade esportiva (estatísticas, desempenho)",
                "Conteúdo gerado pelo usuário (posts, comentários, fotos)",
              ],
            },
            {
              title: "2.2. Informações Coletadas Automaticamente",
              items: [
                "Dados de uso dos Serviços",
                "Informações do dispositivo (tipo, sistema operacional)",
                "Dados de localização (quando permitido)",
                "Cookies e tecnologias similares",
              ],
            },
          ],
        },
        {
          title: "3. Como Usamos Suas Informações",
          content: "Usamos as informações coletadas para:",
          items: [
            "Fornecer e melhorar nossos Serviços",
            "Personalizar sua experiência",
            "Processar transações e enviar notificações",
            "Comunicar sobre atualizações e promoções",
            "Proteger contra fraude e abuso",
            "Cumprir obrigações legais",
          ],
        },
        {
          title: "4. Compartilhamento de Informações",
          content: "Podemos compartilhar suas informações com:",
          items: [
            "Outros usuários da plataforma (conforme suas configurações de privacidade)",
            "Provedores de serviços terceirizados",
            "Parceiros comerciais",
            "Autoridades legais (quando exigido por lei)",
          ],
        },
        {
          title: "5. Segurança dos Dados",
          content:
            "Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.",
        },
        {
          title: "6. Seus Direitos",
          content: "Você tem o direito de:",
          items: [
            "Acessar suas informações pessoais",
            "Corrigir dados imprecisos",
            "Solicitar a exclusão de seus dados",
            "Opor-se ao processamento de suas informações",
            "Solicitar a portabilidade de seus dados",
            "Retirar o consentimento a qualquer momento",
          ],
        },
        {
          title: "7. Retenção de Dados",
          content:
            "Retemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.",
        },
        {
          title: "8. Crianças",
          content:
            "Nossos Serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações pessoais de crianças. Se descobrirmos que coletamos informações de uma criança, tomaremos medidas para excluir essas informações.",
        },
        {
          title: "9. Alterações nesta Política",
          content:
            "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas publicando a nova Política em nosso site e/ou enviando um e-mail.",
        },
        {
          title: "10. Contato",
          content: "Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em:",
          items: ["E-mail: contato@meshme.com.br", "Endereço: Rua Surubim, 577, São Paulo - SP, 04571-050"],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: October 27, 2024",
      sections: [
        {
          title: "1. Introduction",
          content:
            'MeshMe ("we", "our" or "company") is committed to protecting the privacy of users of our platform and mobile applications (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose and protect your personal information when you use our Services.',
        },
        {
          title: "2. Information We Collect",
          content: "We collect various types of information in connection with the Services we provide, including:",
          subsections: [
            {
              title: "2.1. Information You Provide",
              items: [
                "Account information (name, email, password)",
                "Profile information (photo, location, company)",
                "Sports activity information (statistics, performance)",
                "User-generated content (posts, comments, photos)",
              ],
            },
            {
              title: "2.2. Automatically Collected Information",
              items: [
                "Service usage data",
                "Device information (type, operating system)",
                "Location data (when permitted)",
                "Cookies and similar technologies",
              ],
            },
          ],
        },
        {
          title: "3. How We Use Your Information",
          content: "We use the collected information to:",
          items: [
            "Provide and improve our Services",
            "Personalize your experience",
            "Process transactions and send notifications",
            "Communicate about updates and promotions",
            "Protect against fraud and abuse",
            "Comply with legal obligations",
          ],
        },
        {
          title: "4. Information Sharing",
          content: "We may share your information with:",
          items: [
            "Other platform users (according to your privacy settings)",
            "Third-party service providers",
            "Business partners",
            "Legal authorities (when required by law)",
          ],
        },
        {
          title: "5. Data Security",
          content:
            "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure or destruction.",
        },
        {
          title: "6. Your Rights",
          content: "You have the right to:",
          items: [
            "Access your personal information",
            "Correct inaccurate data",
            "Request deletion of your data",
            "Object to the processing of your information",
            "Request data portability",
            "Withdraw consent at any time",
          ],
        },
        {
          title: "7. Data Retention",
          content:
            "We retain your personal information for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law.",
        },
        {
          title: "8. Children",
          content:
            "Our Services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will take steps to delete such information.",
        },
        {
          title: "9. Changes to this Policy",
          content:
            "We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new Policy on our website and/or sending an email.",
        },
        {
          title: "10. Contact",
          content: "If you have questions about this Privacy Policy, please contact us at:",
          items: ["Email: contato@meshme.com.br", "Address: Rua Surubim, 577, São Paulo - SP, 04571-050"],
        },
      ],
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 27 de octubre de 2024",
      sections: [
        {
          title: "1. Introducción",
          content:
            'MeshMe ("nosotros", "nuestro" o "empresa") está comprometido a proteger la privacidad de los usuarios de nuestra plataforma y aplicaciones móviles (colectivamente, los "Servicios"). Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información personal cuando utiliza nuestros Servicios.',
        },
        {
          title: "2. Información que Recopilamos",
          content:
            "Recopilamos varios tipos de información en conexión con los Servicios que proporcionamos, incluyendo:",
          subsections: [
            {
              title: "2.1. Información Proporcionada por Usted",
              items: [
                "Información de cuenta (nombre, correo electrónico, contraseña)",
                "Información de perfil (foto, ubicación, empresa)",
                "Información de actividad deportiva (estadísticas, rendimiento)",
                "Contenido generado por el usuario (publicaciones, comentarios, fotos)",
              ],
            },
            {
              title: "2.2. Información Recopilada Automáticamente",
              items: [
                "Datos de uso de los Servicios",
                "Información del dispositivo (tipo, sistema operativo)",
                "Datos de ubicación (cuando se permita)",
                "Cookies y tecnologías similares",
              ],
            },
          ],
        },
        {
          title: "3. Cómo Usamos Su Información",
          content: "Usamos la información recopilada para:",
          items: [
            "Proporcionar y mejorar nuestros Servicios",
            "Personalizar su experiencia",
            "Procesar transacciones y enviar notificaciones",
            "Comunicar sobre actualizaciones y promociones",
            "Proteger contra fraude y abuso",
            "Cumplir con obligaciones legales",
          ],
        },
        {
          title: "4. Compartir Información",
          content: "Podemos compartir su información con:",
          items: [
            "Otros usuarios de la plataforma (según su configuración de privacidad)",
            "Proveedores de servicios de terceros",
            "Socios comerciales",
            "Autoridades legales (cuando lo exija la ley)",
          ],
        },
        {
          title: "5. Seguridad de los Datos",
          content:
            "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.",
        },
        {
          title: "6. Sus Derechos",
          content: "Usted tiene derecho a:",
          items: [
            "Acceder a su información personal",
            "Corregir datos inexactos",
            "Solicitar la eliminación de sus datos",
            "Oponerse al procesamiento de su información",
            "Solicitar la portabilidad de sus datos",
            "Retirar el consentimiento en cualquier momento",
          ],
        },
        {
          title: "7. Retención de Datos",
          content:
            "Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta Política, a menos que la ley exija o permita un período de retención más largo.",
        },
        {
          title: "8. Niños",
          content:
            "Nuestros Servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de niños. Si descubrimos que hemos recopilado información de un niño, tomaremos medidas para eliminar dicha información.",
        },
        {
          title: "9. Cambios en esta Política",
          content:
            "Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cualquier cambio significativo publicando la nueva Política en nuestro sitio web y/o enviando un correo electrónico.",
        },
        {
          title: "10. Contacto",
          content: "Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:",
          items: [
            "Correo electrónico: contato@meshme.com.br",
            "Dirección: Rua Surubim, 577, São Paulo - SP, 04571-050",
          ],
        },
      ],
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" className="mb-6 hover:bg-gray-100" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="flex justify-end mb-6">
          <LanguageSelector language={language} onLanguageChange={handleLanguageChange} />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h1>
            <p className="text-sm text-gray-500 mb-8">{currentContent.lastUpdated}</p>

            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-700 mb-3 leading-relaxed">{section.content}</p>

                  {section.items && (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections &&
                    section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="mt-4 ml-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{subsection.title}</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
