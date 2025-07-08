"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NavbarProps {
  language: "en" | "hi" | "mar"
  onLanguageChange: (language: "en" | "hi" | "mar") => void
}

const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    login: "Login",
    register: "Register",
    dashboard: "Dashboard",
  },
  hi: {
    home: "होम",
    services: "सेवाएं",
    about: "हमारे बारे में",
    contact: "संपर्क",
    login: "लॉगिन",
    register: "पंजीकरण",
    dashboard: "डैशबोर्ड",
  },
  mar: {
    home: "होम",
    services: "सेवाएं",
    about: "म्हारे बारे में",
    contact: "संपर्क",
    login: "लॉगिन",
    register: "रजिस्टर",
    dashboard: "डैशबोर्ड",
  },
}

const languageNames = {
  en: "English",
  hi: "हिंदी",
  mar: "मारवाड़ी",
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <nav className="bg-white shadow-lg border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">🌿</div>
            <span className="text-xl font-bold text-green-800">Gaon Saathi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-green-600 font-medium">
              {t.home}
            </Link>
            <Link href="#services" className="text-slate-700 hover:text-green-600 font-medium">
              {t.services}
            </Link>
            <Link href="#about" className="text-slate-700 hover:text-green-600 font-medium">
              {t.about}
            </Link>
            <Link href="#contact" className="text-slate-700 hover:text-green-600 font-medium">
              {t.contact}
            </Link>
          </div>

          {/* Language Toggle & Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="bg-slate-100 rounded-2xl p-2">
              <div className="text-xs text-slate-600 mb-1 text-center font-medium">Language</div>
              <div className="grid grid-cols-3 gap-1">
                {Object.entries(languageNames).map(([code, name]) => (
                  <Button
                    key={code}
                    variant={language === code ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onLanguageChange(code as "en" | "hi" | "mar")}
                    className={`rounded-xl px-2 py-1 text-xs font-medium transition-all ${
                      language === code ? "bg-green-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent">
                  {t.login}
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700 text-white">{t.register}</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-green-600 font-medium px-4 py-2">
                {t.home}
              </Link>
              <Link href="#services" className="text-slate-700 hover:text-green-600 font-medium px-4 py-2">
                {t.services}
              </Link>
              <Link href="#about" className="text-slate-700 hover:text-green-600 font-medium px-4 py-2">
                {t.about}
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-green-600 font-medium px-4 py-2">
                {t.contact}
              </Link>
              <div className="flex flex-col space-y-2 px-4">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    {t.login}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">{t.register}</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
