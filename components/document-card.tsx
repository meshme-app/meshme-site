import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface DocumentCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color?: "primary" | "secondary"
}

export default function DocumentCard({ title, description, icon, href, color = "primary" }: DocumentCardProps) {
  const bgColor = color === "primary" ? "bg-primary/10" : "bg-secondary/10"
  const textColor = color === "primary" ? "text-primary" : "text-secondary"
  const hoverBgColor = color === "primary" ? "hover:bg-primary/10" : "hover:bg-secondary/10"

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
          <div className={textColor}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="ghost" className={`${textColor} ${hoverBgColor} p-0 flex items-center`} asChild>
          <Link href={href}>
            Ver documento
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
