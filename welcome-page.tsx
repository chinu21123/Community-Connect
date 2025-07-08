"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import LoginForm from "./login-form"
import RegisterForm from "./register-form"

const translations = {
  en: {
    welcome: "Welcome to",
    appName: "Gaon Saathi",
    subtitle: "Digital Revolution in Rural Governance",
    description:
      "Empowering communities through technology, transparency, and efficient governance. Join us in building a digitally connected village.",
    login: "Login",
    register: "Register",
    newUser: "New User?",
    existingUser: "Already have an account?",
    clickToRegister: "Click here to register",
    clickToLogin: "Click here to login",
    features: [
      "🏛️ Digital Governance",
      "📱 Mobile-First Design",
      "🌐 Multi-Language Support",
      "🔒 Secure & Private",
      "📊 Real-time Updates",
      "🤝 Community Driven",
    ],
  },
  hi: {
    welcome: "स्वागत है",
    appName: "गांव साथी में",
    subtitle: "ग्रामीण शासन में डिजिटल क्रांति",
    description:
      "तकनीक, पारदर्शिता और कुशल शासन के माध्यम से समुदायों को सशक्त बनाना। डिजिटल रूप से जुड़े गांव के निर्माण में हमारे साथ जुड़ें।",
    login: "लॉगिन",
    register: "पंजीकरण",
    newUser: "नए उपयोगकर्ता?",
    existingUser: "पहले से खाता है?",
    clickToRegister: "पंजीकरण के लिए यहाँ क्लिक करें",
    clickToLogin: "लॉगिन के लिए यहाँ क्लिक करें",
    features: [
      "🏛️ डिजिटल शासन",
      "📱 मोबाइल-फर्स्ट डिज़ाइन",
      "🌐 बहु-भाषा समर्थन",
      "🔒 सुरक्षित और निजी",
      "📊 रियल-टाइम अपडेट",
      "🤝 समुदाय संचालित",
    ],
  },
  mar: {
    welcome: "पधारो म्हारे",
    appName: "गांव साथी में",
    subtitle: "गांव री शासन में डिजिटल क्रांति",
    description:
      "तकनीक, पारदर्शिता अर कुशल शासन रे माध्यम सूं समुदायां नै सशक्त बणावणो। डिजिटल रूप सूं जुड़े गांव रे निर्माण में म्हारे साथ जुड़ो।",
    login: "लॉगिन",
    register: "रजिस्टर",
    newUser: "नवो उपयोगकर्ता?",
    existingUser: "पैले सूं खातो है?",
    clickToRegister: "रजिस्टर करण खातर यहाँ क्लिक करो",
    clickToLogin: "लॉगिन करण खातर यहाँ क्लिक करो",
    features: [
      "🏛️ डिजिटल शासन",
      "📱 मोबाइल-फर्स्ट डिज़ाइन",
      "🌐 बहु-भाषा समर्थन",
      "🔒 सुरक्षित अर निजी",
      "📊 रियल-टाइम अपडेट",
      "🤝 समुदाय संचालित",
    ],
  },
}

const languageNames = {
  en: "English",
  hi: "हिंदी",
  mar: "मारवाड़ी",
}

export default function WelcomePage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mar">("hi")
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(true)
  const t = translations[language]

  if (showLogin && !showRegister) {
    return <LoginForm onBack={() => setShowLogin(false)} />
  }

  if (showRegister) {
    return (
      <RegisterForm
        onSuccess={() => {
          setShowRegister(false)
          setShowLogin(true)
        }}
        onBack={() => setShowRegister(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-200 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-200 rounded-full opacity-25 animate-bounce"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce opacity-30">🏛️</div>
        <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse opacity-40">📱</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl animate-bounce opacity-20">🌿</div>
        <div className="absolute bottom-1/3 right-1/5 text-3xl animate-pulse opacity-35">🤝</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Language Selector */}
        <div className="flex justify-end mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-green-200">
            <div className="text-sm text-slate-600 mb-2 text-center font-medium">Language</div>
            <div className="flex space-x-1">
              {Object.entries(languageNames).map(([code, name]) => (
                <Button
                  key={code}
                  variant={language === code ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage(code as "en" | "hi" | "mar")}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                    language === code ? "bg-green-600 text-white shadow-sm" : "text-slate-600 hover:bg-green-50"
                  }`}
                >
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Welcome Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="text-6xl mr-4">🙏</div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-2">{t.welcome}</h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-emerald-700">{t.appName}</h2>
                </div>
              </div>
              <p className="text-xl text-green-600 font-medium mb-4">{t.subtitle}</p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{t.description}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-green-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-sm font-medium text-slate-700">{feature}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Auth Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md border-green-200 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">🌿</div>
                <CardTitle className="text-2xl font-bold text-green-800">{t.appName}</CardTitle>
                <p className="text-slate-600">{t.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Register Button */}
                <Button
                  onClick={() => setShowRegister(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  🚀 {t.register}
                </Button>

                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-2">{t.existingUser}</div>
                  <Button
                    variant="outline"
                    onClick={() => setShowLogin(true)}
                    className="w-full border-green-300 text-green-700 hover:bg-green-50 py-4 rounded-xl font-medium"
                  >
                    {t.clickToLogin}
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2.8K+</div>
                    <div className="text-xs text-slate-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-xs text-slate-500">Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-slate-500">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
