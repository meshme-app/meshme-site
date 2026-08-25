"use client"

import { Activity, Users, MapPin, Building2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { homeFeatures } from "@/lib/site-translations"

const featureMeta = [
  {
    icon: Activity,
    number: "01",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    image: "/challenge-feed-mockup.png",
    integrations: ["Apple Health", "Google Fit", "Strava"],
  },
  {
    icon: Users,
    number: "02",
    color: "bg-[#99F700]",
    iconColor: "text-black",
    image: "/challenge-mockup.png",
  },
  {
    icon: MapPin,
    number: "03",
    color: "bg-[#FF7816]",
    iconColor: "text-white",
    image: "/running-club-photo.png",
  },
  {
    icon: Building2,
    number: "04",
    color: "bg-[#99F700]",
    iconColor: "text-black",
    image: "/club-mockup.png",
  },
]

export default function ParaPessoasFeatures() {
  const { language } = useLanguage()
  const t = homeFeatures[language]
  const features = featureMeta.map((meta, i) => ({ ...meta, ...t.items[i] }))

  return (
    <section id="funcionalidades" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FF7816] font-semibold text-lg">{t.badge}</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            {t.titleStart}
            <span className="text-[#FF7816]"> {t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className={`space-y-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center shadow-md`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <span className="text-4xl font-bold text-gray-200">{feature.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                {feature.integrations && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-sm text-gray-500 font-medium">{t.integrationsLabel}</span>
                    {feature.integrations.map((integration, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                )}
                {index === 3 && (
                  <p className="text-sm text-gray-500 italic border-l-4 border-[#99F700] pl-4">{t.tip}</p>
                )}
              </div>

              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative flex justify-center items-center h-80 md:h-96 lg:h-[420px]">
                  {index === 0 || index === 1 || index === 3 ? (
                    /* iPhone Frame for features 1, 2, and 4 */
                    <div className="relative h-full flex items-center">
                      {/* iPhone Frame */}
                      <div className="relative w-[180px] md:w-[200px] lg:w-[210px]">
                        {/* Phone body */}
                        <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                          {/* Dynamic Island */}
                          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
                          {/* Screen */}
                          <div className="relative bg-white rounded-[1.5rem] overflow-hidden h-[320px] md:h-[360px] lg:h-[380px]">
                            <img
                              src={
                                index === 0 
                                  ? "/desafio-premiacao-screen.png" 
                                  : index === 1 
                                    ? "/desafio-sem-meta-screen.png"
                                    : "/desafios-finalizados-screen.png"
                              }
                              alt={feature.title}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                        {/* Side button */}
                        <div className="absolute right-[-2px] top-20 w-0.5 h-8 bg-gray-800 rounded-l-sm" />
                        {/* Volume buttons */}
                        <div className="absolute left-[-2px] top-16 w-0.5 h-5 bg-gray-800 rounded-r-sm" />
                        <div className="absolute left-[-2px] top-24 w-0.5 h-8 bg-gray-800 rounded-r-sm" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-auto h-80 md:h-96 lg:h-[420px] object-contain rounded-xl shadow-lg"
                    />
                  )}
                  {/* Decorative gradient */}
                  <div
                    className={`absolute -z-10 inset-0 ${feature.color} opacity-10 rounded-xl blur-2xl transform scale-105`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
