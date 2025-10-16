import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="bg-white relative overflow-hidden">
      <section className="py-16 bg-gradient-to-br from-blue-500/10 via-white to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-blue-500 px-6 py-3 mb-4 skew-x-[-5deg] transform">
              <div className="h-8 bg-white/20 rounded animate-pulse skew-x-[5deg] transform w-64"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mx-auto w-48 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse mx-auto w-32"></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3 mt-8"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
