import type { Metadata } from "next"

// A home renderiza o mesmo conteudo de /para-pessoas em vez de redirecionar.
// O redirect fazia crawlers e previews de link (Google, WhatsApp, LinkedIn) lerem
// so a metadata do layout, sem nunca chegar na pagina de destino.
export { default } from "./para-pessoas/page"

const TITLE = "MeshMe | Esporte, comunidade e bem-estar corporativo"
const DESCRIPTION =
  "Sozinho, com colegas ou com a sua empresa. Registre suas atividades, crie desafios e participe de eventos reais. Prêmios e comunidade fazem parte da jornada."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.meshme.com.br",
    siteName: "MeshMe",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "MeshMe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
}
