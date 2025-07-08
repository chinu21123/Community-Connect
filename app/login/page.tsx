"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Phone, Lock, ArrowLeft, UserCheck, Sparkles, Shield, Users, Heart, Star, Zap } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const translations = {
  en: {
    title: "Welcome Back to Gaon Saathi",
    subtitle: "Your Digital Village Gateway Awaits",
    tagline: "Connecting Hearts, Empowering Villages",
    contact: "Phone Number",
    password: "Password",
    login: "Sign In to Your Village",
    register: "Join Our Community",
    forgotPassword: "Forgot Password?",
    noAccount: "New to Gaon Saathi?",
    contactPlaceholder: "Enter your phone number",
    passwordPlaceholder: "Enter your password",
    backToHome: "Back to Home",
    loginSuccess: "Welcome back! Redirecting to your dashboard...",
    loginError: "Invalid credentials. Please try again.",
    fillFields: "Please fill in all fields",
    invalidPhone: "Please enter a valid 10-digit phone number",
    trustedBy: "Trusted by 10,000+ villagers",
    secureLogin: "Secure & Protected",
    communityDriven: "Community Driven",
    alwaysSupported: "24/7 Support",
  },
  hi: {
    title: "गांव साथी में वापस स्वागत है",
    subtitle: "आपका डिजिटल गांव द्वार आपका इंतजार कर रहा है",
    tagline: "दिलों को जोड़ना, गांवों को सशक्त बनाना",
    contact: "फोन नंबर",
    password: "पासवर्ड",
    login: "अपने गांव में साइन इन करें",
    register: "हमारे समुदाय में शामिल हों",
    forgotPassword: "पासवर्ड भूल गए?",
    noAccount: "गांव साथी में नए हैं?",
    contactPlaceholder: "अपना फोन नंबर दर्ज करें",
    passwordPlaceholder: "अपना पासवर्ड दर्ज करें",
    backToHome: "होम पर वापस",
    loginSuccess: "वापस स्वागत है! आपके डैशबोर्ड पर रीडायरेक्ट हो रहा है...",
    loginError: "गलत क्रेडेंशियल। कृपया पुनः प्रयास करें।",
    fillFields: "कृपया सभी फ़ील्ड भरें",
    invalidPhone: "कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करें",
    trustedBy: "10,000+ ग्रामीणों द्वारा भरोसेमंद",
    secureLogin: "सुरक्षित और संरक्षित",
    communityDriven: "समुदाय संचालित",
    alwaysSupported: "24/7 सहायता",
  },
  mr: {
    title: "गांव साथी में वापस पधारो",
    subtitle: "आपका डिजिटल गांव द्वार आपका इंतजार कर रहा है",
    tagline: "दिलों को जोड़ना, गांवों को मजबूत बनाना",
    contact: "फोन नंबर",
    password: "पासवर्ड",
    login: "आपके गांव में साइन इन करो",
    register: "हमारे समुदाय में शामिल हो",
    forgotPassword: "पासवर्ड भूल गया?",
    noAccount: "गांव साथी में नए हो?",
    contactPlaceholder: "आपका फोन नंबर दर्ज करो",
    passwordPlaceholder: "आपका पासवर्ड दर्ज करो",
    backToHome: "होम पर वापस",
    loginSuccess: "वापस स्वागत है! आपके डैशबोर्ड पर जा रहे हैं...",
    loginError: "गलत जानकारी। फिर से कोशिश करो।",
    fillFields: "कृपया सभी फ़ील्ड भरो",
    invalidPhone: "कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करो",
    trustedBy: "10,000+ ग्रामीणों का भरोसा",
    secureLogin: "सुरक्षित और संरक्षित",
    communityDriven: "समुदाय संचालित",
    alwaysSupported: "24/7 सहायता",
  },
}

const FloatingIcon = ({ icon: Icon, className, delay = 0 }: { icon: any; className: string; delay?: number }) => (
  <div
    className={`absolute ${className} animate-bounce`}
    style={{ animationDelay: `${delay}s`, animationDuration: "3s" }}
  >
    <Icon className="w-6 h-6 text-green-400 opacity-60" />
  </div>
)

export default function LoginPage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mr">("en")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    contact: "",
    password: "",
  })
  const [errors, setErrors] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const router = useRouter()

  const t = translations[language]

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const validateForm = () => {
    const newErrors: string[] = []

    if (!formData.contact || !formData.password) {
      newErrors.push(t.fillFields)
    }

    if (formData.contact && !/^\d{10}$/.test(formData.contact)) {
      newErrors.push(t.invalidPhone)
    }

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsLoading(true);
  setErrors([]);

  try {
    // Call your backend API route
    const res = await fetch("/app/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      setErrors([t.loginError]);
    }
  } catch (error) {
    setErrors([t.loginError]);
  } finally {
    setIsLoading(false);
  }
};


  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors.length > 0) {
      setErrors([])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-teal-200 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Floating Icons */}
        <FloatingIcon icon={Heart} className="top-20 left-20" delay={0} />
        <FloatingIcon icon={Star} className="top-32 right-32" delay={1} />
        <FloatingIcon icon={Sparkles} className="bottom-40 left-32" delay={2} />
        <FloatingIcon icon={Zap} className="bottom-20 right-20" delay={0.5} />
        <FloatingIcon icon={Users} className="top-1/2 left-10" delay={1.5} />
        <FloatingIcon icon={Shield} className="top-1/3 right-10" delay={2.5} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Enhanced Language Toggle */}
          <div className="flex justify-center space-x-2">
            {(["en", "hi", "mr"] as const).map((lang) => (
              <Button
                key={lang}
                variant={language === lang ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage(lang)}
                className={
                  language === lang
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
                    : "border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 transform hover:scale-105 transition-all duration-200"
                }
              >
                {lang === "en" ? "English" : lang === "hi" ? "हिंदी" : "मारवाड़ी"}
              </Button>
            ))}
          </div>

          {/* Time Display */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                {currentTime.toLocaleTimeString(language === "hi" ? "hi-IN" : language === "mr" ? "mr-IN" : "en-IN")}
              </span>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-start">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-green-700 hover:text-green-800 hover:bg-green-100 transform hover:scale-105 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.backToHome}
              </Button>
            </Link>
          </div>

          {/* Enhanced Login Card */}
          <Card className="border-green-200 shadow-2xl backdrop-blur-sm bg-white/95 transform hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <UserCheck className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-3 h-3 text-yellow-800" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  {t.title}
                </CardTitle>
                <CardDescription className="text-lg text-green-600 font-medium">{t.subtitle}</CardDescription>
                <p className="text-sm text-green-500 italic flex items-center justify-center space-x-1">
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>{t.tagline}</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex justify-center space-x-4 pt-2">
                <div className="flex items-center space-x-1 text-xs text-green-600">
                  <Shield className="w-3 h-3" />
                  <span>{t.secureLogin}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-green-600">
                  <Users className="w-3 h-3" />
                  <span>{t.trustedBy}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Success Message */}
              {success && (
                <Alert className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 animate-pulse">
                  <UserCheck className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700 font-medium">{t.loginSuccess}</AlertDescription>
                </Alert>
              )}

              {/* Error Messages */}
              {errors.length > 0 && (
                <Alert className="border-red-200 bg-gradient-to-r from-red-50 to-pink-50 animate-shake">
                  <AlertDescription className="text-red-700">
                    {errors.map((error, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        <span>{error}</span>
                      </div>
                    ))}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Enhanced Phone Number Field */}
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-green-700 font-semibold flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{t.contact}</span>
                  </Label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors" />
                    <Input
                      id="contact"
                      type="tel"
                      placeholder={t.contactPlaceholder}
                      value={formData.contact}
                      onChange={(e) => handleInputChange("contact", e.target.value)}
                      className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-400 focus:ring-2 transition-all duration-200 hover:border-green-300"
                      maxLength={10}
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Enhanced Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-green-700 font-semibold flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>{t.password}</span>
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={t.passwordPlaceholder}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 border-green-200 focus:border-green-400 focus:ring-green-400 focus:ring-2 transition-all duration-200 hover:border-green-300"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent group-focus-within:text-green-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-green-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-green-500" />
                      )}
                    </Button>
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                  >
                    {t.forgotPassword}
                  </Link>
                </div>

                {/* Enhanced Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200 relative overflow-hidden"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <UserCheck className="w-5 h-5" />
                      <span>{t.login}</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                </Button>
              </form>

              {/* Enhanced Register Link */}
              <div className="text-center pt-4 border-t border-green-100">
                <p className="text-sm text-green-600 mb-2">{t.noAccount}</p>
                <Link href="/register">
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 transform hover:scale-105 transition-all duration-200 bg-transparent"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    {t.register}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Demo Credentials */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-center text-sm text-green-700">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Shield className="w-4 h-4 text-green-600" />
                  <p className="font-semibold">Demo Credentials</p>
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div className="space-y-1 bg-white/60 rounded-lg p-3">
                  <p className="flex items-center justify-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span className="font-mono">8091778384</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <Lock className="w-3 h-3" />
                    <span className="font-mono">admin123</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center border border-green-100 hover:border-green-200 transition-colors">
              <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-xs text-green-700 font-medium">{t.communityDriven}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center border border-green-100 hover:border-green-200 transition-colors">
              <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-xs text-green-700 font-medium">{t.alwaysSupported}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}
