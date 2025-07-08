"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Eye,
  EyeOff,
  Phone,
  Lock,
  ArrowLeft,
  UserPlus,
  Mail,
  User,
  MapPin,
  Briefcase,
  Sparkles,
  Shield,
  Users,
  Heart,
  Star,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const translations = {
  en: {
    title: "Join Gaon Saathi Community",
    subtitle: "Create your account to access village digital services",
    fullName: "Full Name",
    email: "Email Address",
    contact: "Phone Number",
    village: "Village/Area",
    role: "Your Role",
    password: "Password",
    confirmPassword: "Confirm Password",
    register: "Create Account",
    login: "Sign In",
    alreadyAccount: "Already have an account?",
    fullNamePlaceholder: "Enter your full name",
    emailPlaceholder: "Enter your email address",
    contactPlaceholder: "Enter your phone number",
    villagePlaceholder: "Enter your village or area",
    passwordPlaceholder: "Create a password",
    confirmPasswordPlaceholder: "Confirm your password",
    backToLogin: "Back to Login",
    registerSuccess: "Account created successfully! Redirecting...",
    registerError: "Registration failed. Please try again.",
    fillFields: "Please fill in all required fields",
    invalidPhone: "Please enter a valid 10-digit phone number",
    invalidEmail: "Please enter a valid email address",
    passwordMismatch: "Passwords do not match",
    weakPassword: "Password must be at least 8 characters long",
    acceptTerms: "I accept the Terms and Conditions",
    mustAcceptTerms: "You must accept the terms and conditions",
    roles: {
      student: "Student",
      farmer: "Farmer",
      panchayat: "Panchayat Member",
      general: "General Villager",
    },
    secureRegistration: "Secure Registration",
    joinCommunity: "Join 10,000+ villagers",
    dataProtected: "Your data is protected",
  },
  hi: {
    title: "गांव साथी समुदाय में शामिल हों",
    subtitle: "ग्रामीण डिजिटल सेवाओं तक पहुंचने के लिए अपना खाता बनाएं",
    fullName: "पूरा नाम",
    email: "ईमेल पता",
    contact: "फोन नंबर",
    village: "गांव/क्षेत्र",
    role: "आपकी भूमिका",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    register: "खाता बनाएं",
    login: "साइन इन करें",
    alreadyAccount: "पहले से खाता है?",
    fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
    emailPlaceholder: "अपना ईमेल पता दर्ज करें",
    contactPlaceholder: "अपना फोन नंबर दर्ज करें",
    villagePlaceholder: "अपना गांव या क्षेत्र दर्ज करें",
    passwordPlaceholder: "एक पासवर्ड बनाएं",
    confirmPasswordPlaceholder: "अपने पासवर्ड की पुष्टि करें",
    backToLogin: "लॉगिन पर वापस",
    registerSuccess: "खाता सफलतापूर्वक बनाया गया! रीडायरेक्ट हो रहा है...",
    registerError: "पंजीकरण असफल। कृपया पुनः प्रयास करें।",
    fillFields: "कृपया सभी आवश्यक फ़ील्ड भरें",
    invalidPhone: "कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करें",
    invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
    passwordMismatch: "पासवर्ड मेल नहीं खाते",
    weakPassword: "पासवर्ड कम से कम 8 अक्षर का होना चाहिए",
    acceptTerms: "मैं नियम और शर्तों को स्वीकार करता हूं",
    mustAcceptTerms: "आपको नियम और शर्तों को स्वीकार करना होगा",
    roles: {
      student: "छात्र",
      farmer: "किसान",
      panchayat: "पंचायत सदस्य",
      general: "सामान्य ग्रामीण",
    },
    secureRegistration: "सुरक्षित पंजीकरण",
    joinCommunity: "10,000+ ग्रामीणों में शामिल हों",
    dataProtected: "आपका डेटा सुरक्षित है",
  },
  mr: {
    title: "गांव साथी समुदाय में शामिल होवो",
    subtitle: "ग्रामीण डिजिटल सेवाओं तक पहुंचने खातर अपणो खाता बणाओ",
    fullName: "पूरो नाम",
    email: "ईमेल पतो",
    contact: "फोन नंबर",
    village: "गांव/क्षेत्र",
    role: "आपकी भूमिका",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड री पुष्टि करो",
    register: "खाता बणाओ",
    login: "साइन इन करो",
    alreadyAccount: "पहले सूं खाता है?",
    fullNamePlaceholder: "अपणो पूरो नाम दर्ज करो",
    emailPlaceholder: "अपणो ईमेल पतो दर्ज करो",
    contactPlaceholder: "अपणो फोन नंबर दर्ज करो",
    villagePlaceholder: "अपणो गांव या क्षेत्र दर्ज करो",
    passwordPlaceholder: "एक पासवर्ड बणाओ",
    confirmPasswordPlaceholder: "अपणे पासवर्ड री पुष्टि करो",
    backToLogin: "लॉगिन पर वापस",
    registerSuccess: "खाता सफलतापूर्वक बण गयो! रीडायरेक्ट हो रहो है...",
    registerError: "पंजीकरण असफल। कृपया फिर सूं कोशिश करो।",
    fillFields: "कृपया सभी आवश्यक फ़ील्ड भरो",
    invalidPhone: "कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करो",
    invalidEmail: "कृपया एक वैध ईमेल पतो दर्ज करो",
    passwordMismatch: "पासवर्ड मेल नहीं खाते",
    weakPassword: "पासवर्ड कम सूं कम 8 अक्षर रो होणो चाहिए",
    acceptTerms: "मैं नियम अर शर्तां नै स्वीकार करूं हूं",
    mustAcceptTerms: "आपनै नियम अर शर्तां नै स्वीकार करणो होगो",
    roles: {
      student: "छात्र",
      farmer: "किसान",
      panchayat: "पंचायत सदस्य",
      general: "सामान्य ग्रामीण",
    },
    secureRegistration: "सुरक्षित पंजीकरण",
    joinCommunity: "10,000+ ग्रामीणों में शामिल होवो",
    dataProtected: "आपको डेटा सुरक्षित है",
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

export default function RegisterPage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mr">("hi")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    village: "",
    role: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })
  const [errors, setErrors] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const t = translations[language]

  const validateForm = () => {
    const newErrors: string[] = []

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.village ||
      !formData.role ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      newErrors.push(t.fillFields)
    }

    if (formData.contact && !/^\d{10}$/.test(formData.contact)) {
      newErrors.push(t.invalidPhone)
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push(t.invalidEmail)
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.push(t.weakPassword)
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.push(t.passwordMismatch)
    }

    if (!formData.acceptTerms) {
      newErrors.push(t.mustAcceptTerms)
    }

    setErrors(newErrors)
    return newErrors.length === 0
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) return

  setIsLoading(true)
  setErrors([])

  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (response.ok) {
      setSuccess(true)
      setTimeout(() => {
        router.push("/home")
      }, 2000)
    } else {
      setErrors([result?.message || t.registerError])
    }
  } catch (error) {
    setErrors([t.registerError])
  } finally {
    setIsLoading(false)
  }
}


  const handleInputChange = (field: string, value: string | boolean) => {
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

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg space-y-6">
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

          {/* Back to Login Button */}
          <div className="flex justify-start">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-green-700 hover:text-green-800 hover:bg-green-100 transform hover:scale-105 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.backToLogin}
              </Button>
            </Link>
          </div>

          {/* Enhanced Registration Card */}
          <Card className="border-green-200 shadow-2xl backdrop-blur-sm bg-white/95 transform hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <UserPlus className="w-10 h-10 text-white" />
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
              </div>

              {/* Trust Indicators */}
              <div className="flex justify-center space-x-4 pt-2">
                <div className="flex items-center space-x-1 text-xs text-green-600">
                  <Shield className="w-3 h-3" />
                  <span>{t.secureRegistration}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-green-600">
                  <Users className="w-3 h-3" />
                  <span>{t.joinCommunity}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Success Message */}
              {success && (
                <Alert className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 animate-pulse">
                  <UserPlus className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700 font-medium">{t.registerSuccess}</AlertDescription>
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

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-green-700 font-semibold flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{t.fullName}</span>
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-3 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder={t.fullNamePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-400 focus:ring-2 transition-all duration-200 hover:border-green-300"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-700 font-semibold flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{t.email}</span>
                  </Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-400 focus:ring-2 transition-all duration-200 hover:border-green-300"
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
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
                  </div>
                </div>

                {/* Village Field */}
                <div className="space-y-2">
                  <Label htmlFor="village" className="text-green-700 font-semibold flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{t.village}</span>
                  </Label>
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors" />
                    <Input
                      id="village"
                      type="text"
                      placeholder={t.villagePlaceholder}
                      value={formData.village}
                      onChange={(e) => handleInputChange("village", e.target.value)}
                      className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-400 focus:ring-2 transition-all duration-200 hover:border-green-300"
                    />
                  </div>
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-green-700 font-semibold flex items-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{t.role}</span>
                  </Label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">{t.roles.student}</SelectItem>
                      <SelectItem value="farmer">{t.roles.farmer}</SelectItem>
                      <SelectItem value="panchayat">{t.roles.panchayat}</SelectItem>
                      <SelectItem value="general">{t.roles.general}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Password Field */}
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
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-green-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-green-500" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-green-700 font-semibold flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>{t.confirmPassword}</span>
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-green-500 group-focus-within:text-green-600 transition-colors" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder={t.confirmPasswordPlaceholder}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pl-10 pr-10 border-green-200 focus:border-green-400 focus:ring-green-400 focus:ring-2 transition-all duration-200 hover:border-green-300"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-green-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-green-500" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                    className="border-green-300 data-[state=checked]:bg-green-600"
                  />
                  <Label htmlFor="terms" className="text-sm text-green-700">
                    {t.acceptTerms}
                  </Label>
                </div>

                {/* Enhanced Register Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200 relative overflow-hidden"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <UserPlus className="w-5 h-5" />
                      <span>{t.register}</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Enhanced Login Link */}
              <div className="text-center pt-4 border-t border-green-100">
                <p className="text-sm text-green-600 mb-2">{t.alreadyAccount}</p>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 transform hover:scale-105 transition-all duration-200 bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t.login}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection Notice */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-center text-sm text-green-700">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <p className="font-semibold">{t.dataProtected}</p>
                </div>
                <p className="text-xs opacity-80">
                  Your personal information is encrypted and securely stored in compliance with data protection
                  regulations.
                </p>
              </div>
            </CardContent>
          </Card>
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
