import type { Metadata } from "next"
import HealthyHourClientPage from "./HealthyHourClientPage"

export const metadata: Metadata = {
  title: "Healthy Hour - MeshMe",
  description: "O encontro quinzenal da MeshMe para unir esporte, música e networking no coração de São Paulo.",
}

export default function HealthyHourPage() {
  return <HealthyHourClientPage />
}
