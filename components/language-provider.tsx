"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type SiteLanguage = "pt" | "en" | "es"

const STORAGE_KEY = "meshme-language"

const LanguageContext = createContext<{
  language: SiteLanguage
  setLanguage: (lang: SiteLanguage) => void
}>({
  language: "pt",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>("pt")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "pt" || stored === "en" || stored === "es") {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: SiteLanguage) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
