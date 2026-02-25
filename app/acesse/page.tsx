import type { Metadata } from "next"
import AcesseForm from "@/components/acesse/acesse-form"

export const metadata: Metadata = {
  title: "MeshMe | Leve para sua empresa",
  description:
    "Preencha o formulario e descubra como a MeshMe pode transformar o bem-estar corporativo da sua empresa com competicoes que engajam.",
  openGraph: {
    title: "MeshMe | Leve para sua empresa",
    description:
      "Preencha o formulario e descubra como a MeshMe pode transformar o bem-estar corporativo da sua empresa com competicoes que engajam.",
    type: "website",
  },
}

export default function AcessePage() {
  return <AcesseForm />
}
