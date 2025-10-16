"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function StoragePolicyPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState("pt-BR")

  useEffect(() => {
    if (searchParams) {
      const lang = searchParams.get("lang") || "pt-BR"
      setLanguage(lang)
    }
  }, [searchParams])

  const translations = {
    "pt-BR": {
      title: "Política de Armazenamento e Descarte de Documentos",
      description: "Como armazenamos e quando descartamos seus dados",
      backToDocuments: "Voltar para Documentos",
      lastUpdated: "Última atualização",
    },
    en: {
      title: "Document Storage and Disposal Policy",
      description: "How we store and when we dispose of your data",
      backToDocuments: "Back to Documents",
      lastUpdated: "Last updated",
    },
    es: {
      title: "Política de Almacenamiento y Eliminación de Documentos",
      description: "Cómo almacenamos y cuándo eliminamos sus datos",
      backToDocuments: "Volver a Documentos",
      lastUpdated: "Última actualización",
    },
    ro: {
      title: "Politica de Stocare și Eliminare a Documentelor",
      description: "Cum stocăm și când eliminăm datele dvs.",
      backToDocuments: "Înapoi la Documente",
      lastUpdated: "Ultima actualizare",
    },
  }

  // Safe access to translations with fallback
  const t = translations[language as keyof typeof translations] || translations["pt-BR"]

  // Update URL when language changes
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
              {t?.backToDocuments || "Voltar para Documentos"}
            </Link>
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
          </div>
          <div className="text-center">
            <div className="inline-block bg-primary px-6 py-3 mb-4 skew-x-[-5deg] transform">
              <h1 className="text-4xl font-bold text-white skew-x-[5deg] transform">
                {t?.title || "Política de Armazenamento e Descarte de Documentos"}
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t?.description || "Como armazenamos e quando descartamos seus dados"}
            </p>
            <div className="mt-6 text-sm text-gray-500">
              {t?.lastUpdated || "Última atualização"}: {new Date().toLocaleDateString(language)}
            </div>
          </div>
        </div>
      </section>

      {/* Document Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4">POLÍTICA DE ARMAZENAMENTO E DESCARTE DE DOCUMENTOS</h1>
                </div>

                <div className="space-y-4">
                  <p>
                    A MeshMe declara que todas as regras contidas nesta política estão em conformidade com as leis de
                    proteção de dados aplicáveis, incluindo a Lei Geral de Proteção de Dados Brasileira (Lei nº
                    13.709/2018 – LGPD), o Regulamento Geral de Proteção de Dados da União Europeia (Regulamento UE
                    2016/679 – GDPR), o Regulamento Geral de Proteção de Dados do Reino Unido (UK GDPR), e a Lei Federal
                    Mexicana de Proteção de Dados Pessoais em Posse de Particulares (Ley Federal de Protección de Datos
                    Personales en Posesión de los Particulares – LFPDPPP).
                  </p>

                  <p>
                    A empresa garante que documentos físicos e digitais, incluindo aqueles que contêm dados pessoais,
                    sejam manuseados, armazenados e descartados de acordo com os padrões legais e técnicos estabelecidos
                    pelas autoridades competentes em cada jurisdição. A MeshMe adota medidas de segurança,
                    confidencialidade, limitação de finalidade e retenção de acordo com o nível de classificação de cada
                    documento e tipo de informação, seja interna ou confidencial.
                  </p>

                  <p>
                    Em linha com o GDPR e UK GDPR, o armazenamento e descarte de documentos aderem aos princípios de
                    integridade, confidencialidade, responsabilidade e minimização de dados, garantindo que o acesso
                    seja limitado ao pessoal autorizado e que o descarte de dados seja seguro e irreversível. A MeshMe
                    também respeita os direitos dos titulares de dados sob os Artigos 12 a 22 do GDPR e disposições
                    relacionadas do Reino Unido.
                  </p>

                  <p>
                    Da mesma forma, a MeshMe cumpre com a LFPDPPP, garantindo que quaisquer documentos contendo dados
                    pessoais sejam retidos por não mais tempo que o necessário, sejam adequadamente protegidos contra
                    acesso não autorizado, e sejam seguramente deletados ou destruídos uma vez que o propósito legal ou
                    operacional seja cumprido. Os direitos ARCO são garantidos e aplicados durante todo o ciclo de vida
                    dos dados.
                  </p>

                  <h2 className="text-xl font-semibold mt-6 mb-3">1. FINALIDADE</h2>
                  <p>
                    Esta política tem como objetivo estabelecer as regras para o armazenamento e descarte de documentos
                    físicos de propriedade ou sob responsabilidade da MESHME BR - CORPORATE ENTERTAINMENT LTDA (MESHME).
                  </p>

                  <h2 className="text-xl font-semibold mt-6 mb-3">2. APLICAÇÃO</h2>
                  <p>
                    Esta política é um documento interno com valor legal e aplicabilidade imediata e uniforme a todos os
                    funcionários da MeshMe.
                  </p>

                  <h2 className="text-xl font-semibold mt-6 mb-3">3. DEFINIÇÕES</h2>
                  <div className="space-y-2">
                    <p>
                      <strong>Classificação da Informação:</strong> A atribuição de um nível de confidencialidade pelo
                      Gestor da Informação, usando rótulos que determinam os controles necessários para preservar a
                      informação.
                    </p>
                    <p>
                      <strong>Funcionário:</strong> Qualquer indivíduo diretamente engajado com a empresa, incluindo
                      funcionários, estagiários e aprendizes.
                    </p>
                    <p>
                      <strong>Criptografia:</strong> Um mecanismo de segurança projetado para proteger informações,
                      permitindo apenas que o destinatário pretendido a leia.
                    </p>
                    <p>
                      <strong>DPO/Encarregado de Proteção de Dados:</strong> O indivíduo responsável pela comunicação
                      entre o Controlador, Titulares de Dados e a Autoridade Nacional de Proteção de Dados.
                    </p>
                    <p>
                      <strong>Empresa:</strong> MESHME BR - CORPORATE ENTERTAINMENT LTDA, localizada na Rua Doutor
                      Renato Paes de Barros 618 Conj 1, Itaim Bibi, São Paulo - SP - 04530-000 com CNPJ/ME nº
                      47.222.696/0001-64.
                    </p>
                    <p>
                      <strong>Recursos de TIC:</strong> Ferramentas físicas e lógicas usadas para criar, armazenar,
                      manusear, transportar, compartilhar e descartar informações.
                    </p>
                    <p>
                      <strong>Sanitização:</strong> O processo de tornar dados irrecuperáveis através de técnicas de
                      limpeza, purga ou destruição.
                    </p>
                    <p>
                      <strong>Segurança da Informação:</strong> A preservação da confidencialidade, integridade,
                      disponibilidade, legalidade e autenticidade da informação.
                    </p>
                    <p>
                      <strong>Terceiro:</strong> Qualquer indivíduo ou entidade com relacionamento profissional indireto
                      com a empresa.
                    </p>
                  </div>

                  <h2 className="text-xl font-semibold mt-6 mb-3">4. ARMAZENAMENTO DE INFORMAÇÕES FÍSICAS</h2>
                  <p>
                    O armazenamento de informações em formatos físicos deve atender aos seguintes requisitos mínimos
                    quando a informação é classificada como CONFIDENCIAL ou INTERNA:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>CONFIDENCIAL:</strong> Deve ser armazenada em local com acesso físico controlado restrito
                      apenas a funcionários autorizados (ex: gavetas ou armários com fechaduras).
                    </p>
                    <p>
                      <strong>INTERNA:</strong> Deve ser armazenada dentro das instalações da empresa, em áreas não
                      acessíveis a terceiros não autorizados.
                    </p>
                  </div>

                  <h2 className="text-xl font-semibold mt-6 mb-3">5. ARMAZENAMENTO DE INFORMAÇÕES DIGITAIS</h2>
                  <p>
                    O armazenamento de informações em formatos digitais deve atender aos seguintes requisitos mínimos:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>CONFIDENCIAL:</strong> Deve ser armazenada em servidores da empresa em local previamente
                      designado pelo DPO, com controles de acesso e, quando necessário, criptografia compatível com o
                      Advanced Encryption Standard (AES).
                    </p>
                    <p>
                      <strong>INTERNA:</strong> Deve ser armazenada em servidores da empresa.
                    </p>
                  </div>

                  <h2 className="text-xl font-semibold mt-6 mb-3">6. ARMAZENAMENTO EM DISPOSITIVOS REMOVÍVEIS</h2>
                  <p>
                    O armazenamento de informações em dispositivos removíveis deve atender aos seguintes requisitos:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>CONFIDENCIAL:</strong> Armazenamento em dispositivos removíveis é permitido apenas com
                      autorização prévia do DPO e deve ser criptografado usando padrões de segurança compatíveis com
                      AES.
                    </p>
                    <p>
                      <strong>INTERNA:</strong> Dispositivos devem ser armazenados dentro das instalações da empresa.
                    </p>
                  </div>

                  <h2 className="text-xl font-semibold mt-6 mb-3">7. DESCARTE DE INFORMAÇÕES</h2>
                  <p>O descarte de informações deve atender aos seguintes requisitos:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Período de retenção legal, quando aplicável</li>
                    <li>Prazo de expiração estabelecido pelo DPO</li>
                    <li>O DPO deve ser consultado antes do descarte</li>
                  </ul>

                  <p>
                    O descarte de dispositivos de armazenamento físico deve ser feito usando um triturador. Os dados
                    devem ser sanitizados para garantir irreversibilidade.
                  </p>

                  <p>O descarte de informações físicas deve atender aos seguintes requisitos mínimos:</p>
                  <div className="space-y-2">
                    <p>
                      <strong>CONFIDENCIAL:</strong> Deve ser triturada dentro da área do custodiante da informação.
                    </p>
                    <p>
                      <strong>INTERNA:</strong> Deve ser triturada dentro das instalações da empresa.
                    </p>
                  </div>

                  <h2 className="text-xl font-semibold mt-6 mb-3">8. DISPOSIÇÕES FINAIS</h2>
                  <p>
                    Este documento deve ser lido e interpretado sob a lei brasileira e em conjunto com as políticas e
                    procedimentos estabelecidos pela empresa.
                  </p>
                  <p>
                    Quaisquer dúvidas sobre esta política devem ser direcionadas para:{" "}
                    <a href="mailto:dpo@meshme.com.br" className="text-blue-600 hover:underline">
                      dpo@meshme.com.br
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
