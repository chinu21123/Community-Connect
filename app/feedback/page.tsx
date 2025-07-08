"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const translations = {
  en: {
    title: "💬 Village Feedback",
    backToHome: "← Back to Home",
    submitFeedback: "Submit Feedback",
    viewFeedback: "View Community Feedback",
    uploadPhotos: "Upload Photos",
    yourName: "Your Name",
    yourEmail: "Your Email (Optional)",
    feedbackType: "Feedback Type",
    feedbackMessage: "Your Feedback",
    submitButton: "Submit Feedback",
    photoUpload: "Upload Photos",
    selectFiles: "Select Photos",
    recentFeedback: "Recent Feedback",
    allFeedback: "All Feedback",
    photos: "Photos",
    anonymous: "Anonymous",
    feedbackTypes: {
      suggestion: "Suggestion",
      complaint: "Complaint",
      appreciation: "Appreciation",
      infrastructure: "Infrastructure",
      services: "Services",
      other: "Other",
    },
  },
  hi: {
    title: "💬 गांव फीडबैक",
    backToHome: "← वापस होम पेज पर",
    submitFeedback: "फीडबैक दें",
    viewFeedback: "सामुदायिक फीडबैक देखें",
    uploadPhotos: "तस्वीरें अपलोड करें",
    yourName: "आपका नाम",
    yourEmail: "आपका ईमेल (वैकल्पिक)",
    feedbackType: "फीडबैक का प्रकार",
    feedbackMessage: "आपका फीडबैक",
    submitButton: "फीडबैक जमा करें",
    photoUpload: "तस्वीरें अपलोड करें",
    selectFiles: "तस्वीरें चुनें",
    recentFeedback: "हाल का फीडबैक",
    allFeedback: "सभी फीडबैक",
    photos: "तस्वीरें",
    anonymous: "गुमनाम",
    feedbackTypes: {
      suggestion: "सुझाव",
      complaint: "शिकायत",
      appreciation: "प्रशंसा",
      infrastructure: "बुनियादी ढांचा",
      services: "सेवाएं",
      other: "अन्य",
    },
  },
  mar: {
    title: "💬 गांव फीडबैक",
    backToHome: "← वापस होम पेज पर",
    submitFeedback: "फीडबैक दो",
    viewFeedback: "सामुदायिक फीडबैक देखो",
    uploadPhotos: "तस्वीरां अपलोड करो",
    yourName: "आपणो नाम",
    yourEmail: "आपणो ईमेल (वैकल्पिक)",
    feedbackType: "फीडबैक रो प्रकार",
    feedbackMessage: "आपणो फीडबैक",
    submitButton: "फीडबैक जमा करो",
    photoUpload: "तस्वीरां अपलोड करो",
    selectFiles: "तस्वीरां चुणो",
    recentFeedback: "हाल रो फीडबैक",
    allFeedback: "सगळो फीडबैक",
    photos: "तस्वीरां",
    anonymous: "गुमनाम",
    feedbackTypes: {
      suggestion: "सुझाव",
      complaint: "शिकायत",
      appreciation: "प्रशंसा",
      infrastructure: "बुनियादी ढांचो",
      services: "सेवाएं",
      other: "अन्य",
    },
  },
}

const sampleFeedback = [
  {
    id: 1,
    name: "राम शर्मा",
    type: "suggestion",
    message: "गांव में और स्ट्रीट लाइट लगाई जानी चाहिए। रात में चलना मुश्किल होता है।",
    date: "2024-12-20",
    photos: ["/placeholder.svg?height=200&width=300"],
    likes: 15,
  },
  {
    id: 2,
    name: "सुनीता देवी",
    type: "appreciation",
    message: "नई सड़क बहुत अच्छी बनी है। धन्यवाद पंचायत जी।",
    date: "2024-12-19",
    photos: [],
    likes: 23,
  },
  {
    id: 3,
    name: "Anonymous",
    type: "complaint",
    message: "पानी की समस्या बहुत है। कई दिनों से पानी नहीं आ रहा।",
    date: "2024-12-18",
    photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
    likes: 8,
  },
]

export default function FeedbackPage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mar">("hi")
  const [activeTab, setActiveTab] = useState("submit")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "suggestion",
    message: "",
    photos: [] as File[],
  })
  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("फीडबैक सफलतापूर्वक जमा किया गया!")
    setFormData({ name: "", email: "", type: "suggestion", message: "", photos: [] })
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, photos: Array.from(e.target.files) })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-rose-200 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-200 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/dashboard" className="text-slate-600 hover:text-slate-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-slate-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              English
            </Button>
            <Button
              variant={language === "mar" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("mar")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "mar" ? "bg-purple-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              मारवाड़ी
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{t.title}</h1>
          <p className="text-slate-600 text-lg">
            {language === "hi"
              ? "आपके विचार और सुझाव हमारे गांव को बेहतर बनाने में मदद करते हैं"
              : language === "mar"
                ? "आपणे विचार अर सुझाव म्हारे गांव नै बेहतर बणावण में मदद करै है"
                : "Your thoughts and suggestions help us improve our village"}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="submit">📝 {t.submitFeedback}</TabsTrigger>
            <TabsTrigger value="view">👀 {t.viewFeedback}</TabsTrigger>
            <TabsTrigger value="photos">📸 {t.photos}</TabsTrigger>
          </TabsList>

          {/* Submit Feedback Tab */}
          <TabsContent value="submit">
            <Card className="max-w-2xl mx-auto border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">📝 {t.submitFeedback}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.yourName}</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="आपका नाम"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.yourEmail}</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.feedbackType}</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {Object.entries(t.feedbackTypes).map(([key, value]) => (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.feedbackMessage}</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="अपना फीडबैक यहाँ लिखें..."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.photoUpload}</label>
                    <Input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                    {formData.photos.length > 0 && (
                      <p className="text-sm text-slate-600 mt-2">{formData.photos.length} फोटो चुनी गई</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                    🚀 {t.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* View Feedback Tab */}
          <TabsContent value="view">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">{t.recentFeedback}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleFeedback.map((feedback) => (
                  <Card key={feedback.id} className="border-purple-200 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-purple-800">{feedback.name}</h3>
                          <p className="text-sm text-slate-500">{feedback.date}</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">
                          {t.feedbackTypes[feedback.type as keyof typeof t.feedbackTypes]}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-4">{feedback.message}</p>
                      {feedback.photos.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {feedback.photos.map((photo, index) => (
                            <img
                              key={index}
                              src={photo || "/placeholder.svg"}
                              alt="Feedback photo"
                              className="w-full h-20 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">❤️ {feedback.likes} likes</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-300 text-purple-700 bg-transparent"
                        >
                          👍 Like
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">📸 Community Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="border-purple-200 shadow-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=Photo${i}`}
                      alt={`Community photo ${i}`}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <p className="text-sm text-slate-600">Uploaded by: Community Member</p>
                      <p className="text-xs text-slate-500">2024-12-{20 - i}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
