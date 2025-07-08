"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Phone, ArrowLeft, KeyRound, CheckCircle } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    title: "Reset Your Password",
    subtitle: "Enter your phone number to receive reset instructions",
    contact: "Phone Number",
    sendOtp: "Send OTP",
    backToLogin: "Back to Login",
    contactPlaceholder: "Enter your registered phone number",
    otpSent: "OTP sent successfully! Check your SMS.",
    invalidPhone: "Please enter a valid 10-digit phone number",
    phoneNotFound: "Phone number not found in our records",
  },
  hi: {
    title: "अपना पासवर्ड रीसेट करें",
    subtitle: "रीसेट निर्देश प्राप्त करने के लिए अपना फोन नंबर दर्ज करें",
    contact: "फोन नंबर",
    sendOtp: "OTP भेजें",
    backToLogin: "लॉगिन पर वापस",
    contactPlaceholder: "अपना पंजीकृत फोन नंबर दर्ज करें",
    otpSent: "OTP सफलतापूर्वक भेजा गया! अपना SMS चेक करें।",
    invalidPhone: "कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करें",
    phoneNotFound: "फोन नंबर हमारे रिकॉर्ड में नहीं मिला",
  },
  mr: {
    title: "आपका पासवर्ड रीसेट करो",
    subtitle: "रीसेट की जानकारी पाने के लिए आपका फोन नंबर दर्ज करो",
    contact: "फोन नंबर",
    sendOtp: "OTP भेजो",
    backToLogin: "लॉगिन पर वापस",
    contactPlaceholder: "आपका पंजीकृत फोन नंबर दर्ज करो",
    otpSent: "OTP सफलतापूर्वक भेजा गया! आपका SMS चेक करो।",
    invalidPhone: "कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करो",
    phoneNotFound: "फोन नंबर हमारे रिकॉर्ड में नहीं मिला",
  },
}

export default function ForgotPasswordPage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mr">("en")
  const [contact, setContact] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!/^\d{10}$/.test(contact)) {
      setError(t.invalidPhone)
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
    } catch (error) {
      setError(t.phoneNotFound)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Language Toggle */}
          <div className="flex justify-center space-x-2">
            {(["en", "hi", "mr"] as const).map((lang) => (
              <Button
                key={lang}
                variant={language === lang ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage(lang)}
                className={
                  language === lang
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "border-green-300 text-green-700 hover:bg-green-50"
                }
              >
                {lang === "en" ? "English" : lang === "hi" ? "हिंदी" : "मारवाड़ी"}
              </Button>
            ))}
          </div>

          {/* Back to Login Button */}
          <div className="flex justify-start">
            <Link href="/login">
              <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.backToLogin}
              </Button>
            </Link>
          </div>

          {/* Forgot Password Card */}
          <Card className="border-green-200 shadow-2xl backdrop-blur-sm bg-white/90">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <KeyRound className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-green-800">{t.title}</CardTitle>
              <CardDescription className="text-green-600">{t.subtitle}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Success Message */}
              {success && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700">{t.otpSent}</AlertDescription>
                </Alert>
              )}

              {/* Error Message */}
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              {!success && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Phone Number Field */}
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-green-700 font-medium">
                      {t.contact}
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                      <Input
                        id="contact"
                        type="tel"
                        placeholder={t.contactPlaceholder}
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value)
                          setError("")
                        }}
                        className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-400"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  {/* Send OTP Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-2.5"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      t.sendOtp
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
