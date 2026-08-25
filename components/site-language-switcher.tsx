"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Globe, Check, ChevronDown } from "lucide-react"
import { useLanguage, type SiteLanguage } from "@/components/language-provider"
import { languageMeta } from "@/lib/site-translations"

const languages: SiteLanguage[] = ["pt", "en", "es"]

export default function SiteLanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [coords, setCoords] = useState({ top: 0, right: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const current = languageMeta[language]

  useLayoutEffect(() => {
    if (!open) return

    function updatePosition() {
      const rect = buttonRef.current?.getBoundingClientRect()
      if (!rect) return
      setCoords({ top: rect.bottom + 8, right: window.innerWidth - rect.right })
    }

    updatePosition()

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      if (buttonRef.current?.contains(target) || panelRef.current?.contains(target)) return
      setOpen(false)
    }

    function handleScroll() {
      setOpen(false)
    }

    window.addEventListener("resize", updatePosition)
    window.addEventListener("scroll", handleScroll, true)
    document.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener("resize", updatePosition)
      window.removeEventListener("scroll", handleScroll, true)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [open])

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 items-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
      >
        <Globe className="h-4 w-4" />
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
      </button>

      {open &&
        createPortal(
          <div
            ref={panelRef}
            style={{ position: "fixed", top: coords.top, right: coords.right }}
            className="z-50 w-44 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
          >
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLanguage(code)
                  setOpen(false)
                }}
                className="flex w-full items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <span className="flex items-center gap-2">
                  <span>{languageMeta[code].flag}</span>
                  <span>{languageMeta[code].label}</span>
                </span>
                {language === code && <Check className="h-4 w-4" />}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  )
}
