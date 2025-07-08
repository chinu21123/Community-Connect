"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const translations = {
  en: {
    title: "💡 Suggest an Idea",
    backToHome: "← Back to Home",
    motivationalQuote:
      '"Every great idea starts with a single thought. Your village\'s future begins with your suggestion today."',
    quoteAuthor: "- Gaon Saathi Team",
    submitIdea: "Submit Your Idea",
    yourName: "Your Name",
    namePlaceholder: "Enter your full name",
    ideaTitle: "Idea Title",
    titlePlaceholder: "Brief title for your idea",
    ideaDescription: "Idea Description",
    descriptionPlaceholder: "Describe your idea in detail...",
    category: "Category",
    selectCategory: "Select category",
    infrastructure: "🏗️ Infrastructure",
    education: "🎓 Education",
    health: "🏥 Health",
    agriculture: "🌾 Agriculture",
    technology: "💻 Technology",
    environment: "🌱 Environment",
    submitButton: "Submit Idea",
    recentIdeas: "Recent Ideas from Villagers",
    submittedBy: "Submitted by",
    daysAgo: "days ago",
    thankYou: "✅ Thank you! Your idea has been submitted successfully.",
  },
  hi: {
    title: "💡 सुझाव दें",
    backToHome: "← वापस होम पेज पर",
    motivationalQuote: '"हर महान विचार एक सोच से शुरू होता है। आपके गांव का भविष्य आज आपके सुझाव से शुरू होता है।"',
    quoteAuthor: "- गांव साथी टीम",
    submitIdea: "अपना सुझाव दें",
    yourName: "आपका नाम",
    namePlaceholder: "अपना पूरा नाम लिखें",
    ideaTitle: "सुझाव का शीर्षक",
    titlePlaceholder: "अपने सुझाव का संक्षिप्त शीर्षक",
    ideaDescription: "सुझाव का विवरण",
    descriptionPlaceholder: "अपने सुझाव का विस्तृत विवरण लिखें...",
    category: "श्रेणी",
    selectCategory: "श्रेणी चुनें",
    infrastructure: "🏗️ बुनियादी ढांचा",
    education: "🎓 शिक्षा",
    health: "🏥 स्वास्थ्य",
    agriculture: "🌾 कृषि",
    technology: "💻 तकनीक",
    environment: "🌱 पर्यावरण",
    submitButton: "सुझाव जमा करें",
    recentIdeas: "ग्रामीणों के हाल के सुझाव",
    submittedBy: "द्वारा प्रस्तुत",
    daysAgo: "दिन पहले",
    thankYou: "✅ धन्यवाद! आपका सुझाव सफलतापूर्वक जमा कर दिया गया है।",
  },
}

const sampleIdeas = [
  {
    id: 1,
    titleEn: "Solar Street Lights Installation",
    titleHi: "सोलर स्ट्रीट लाइट्स की स्थापना",
    authorEn: "Ramesh Kumar",
    authorHi: "रमेश कुमार",
    category: "infrastructure",
    daysAgo: 2,
    descriptionEn:
      "Install solar-powered street lights on main village roads for better safety and visibility at night.",
    descriptionHi: "रात में बेहतर सुरक्षा और दृश्यता के लिए मुख्य गांव की सड़कों पर सोलर स्ट्रीट लाइट्स लगाना।",
  },
  {
    id: 2,
    titleEn: "Mobile Health Clinic",
    titleHi: "मोबाइल स्वास्थ्य क्लिनिक",
    authorEn: "Dr. Priya Sharma",
    authorHi: "डॉ. प्रिया शर्मा",
    category: "health",
    daysAgo: 5,
    descriptionEn: "Weekly mobile health clinic to provide basic medical services to remote areas of the village.",
    descriptionHi: "गांव के दूरदराज के इलाकों में बुनियादी चिकित्सा सेवाएं प्रदान करने के लिए साप्ताहिक मोबाइल स्वास्थ्य क्लिनिक।",
  },
  {
    id: 3,
    titleEn: "Digital Literacy Center",
    titleHi: "डिजिटल साक्षरता केंद्र",
    authorEn: "Anjali Patel",
    authorHi: "अंजलि पटेल",
    category: "education",
    daysAgo: 7,
    descriptionEn: "Establish a center to teach basic computer skills and digital literacy to villagers of all ages.",
    descriptionHi: "सभी उम्र के ग्रामीणों को बुनियादी कंप्यूटर कौशल और डिजिटल साक्षरता सिखाने के लिए एक केंद्र स्थापित करना।",
  },
  {
    id: 4,
    titleEn: "Organic Farming Training",
    titleHi: "जैविक खेती प्रशिक्षण",
    authorEn: "Suresh Singh",
    authorHi: "सुरेश सिंह",
    category: "agriculture",
    daysAgo: 10,
    descriptionEn: "Organize training sessions for farmers on organic farming techniques and sustainable agriculture.",
    descriptionHi: "किसानों के लिए जैविक खेती तकनीकों और टिकाऊ कृषि पर प्रशिक्षण सत्र आयोजित करना।",
  },
]

export default function SuggestIdeaPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    category: "",
  })

  const t = translations[language]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", title: "", description: "", category: "" })
    }, 3000)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      infrastructure: "bg-blue-100 text-blue-800",
      education: "bg-green-100 text-green-800",
      health: "bg-red-100 text-red-800",
      agriculture: "bg-yellow-100 text-yellow-800",
      technology: "bg-purple-100 text-purple-800",
      environment: "bg-emerald-100 text-emerald-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getCategoryName = (category: string) => {
    const names = {
      infrastructure: language === "hi" ? "🏗️ बुनियादी ढांचा" : "🏗️ Infrastructure",
      education: language === "hi" ? "🎓 शिक्षा" : "🎓 Education",
      health: language === "hi" ? "🏥 स्वास्थ्य" : "🏥 Health",
      agriculture: language === "hi" ? "🌾 कृषि" : "🌾 Agriculture",
      technology: language === "hi" ? "💻 तकनीक" : "💻 Technology",
      environment: language === "hi" ? "🌱 पर्यावरण" : "🌱 Environment",
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-300 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-orange-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-orange-600 text-white shadow-sm" : "text-orange-600 hover:bg-orange-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-orange-600 text-white shadow-sm" : "text-orange-600 hover:bg-orange-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-6">{t.title}</h1>

          {/* Motivational Quote */}
          <Card className="border-yellow-200 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">💭</div>
              <blockquote className="text-xl md:text-2xl font-medium text-orange-800 italic mb-4">
                {t.motivationalQuote}
              </blockquote>
              <p className="text-orange-600 font-medium">{t.quoteAuthor}</p>
            </CardContent>
          </Card>
        </div>

        {isSubmitted ? (
          // Thank You Message
          <Card className="border-green-300 shadow-2xl bg-white/95 backdrop-blur-sm border-2 transform scale-105 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="text-8xl mb-8 animate-bounce">✅</div>
              <h2 className="text-3xl font-bold text-green-800 mb-4 drop-shadow-sm">{t.thankYou}</h2>
              <div className="text-6xl mb-4">🙏</div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Submit Idea Form */}
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardTitle className="text-orange-800 text-2xl">{t.submitIdea}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-orange-700 font-medium">
                    {t.yourName}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="border-orange-300 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-orange-700 font-medium">
                    {t.ideaTitle}
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder={t.titlePlaceholder}
                    className="border-orange-300 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-orange-700 font-medium">
                    {t.category}
                  </Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full p-3 border border-orange-300 rounded-md focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">{t.selectCategory}</option>
                    <option value="infrastructure">{t.infrastructure}</option>
                    <option value="education">{t.education}</option>
                    <option value="health">{t.health}</option>
                    <option value="agriculture">{t.agriculture}</option>
                    <option value="technology">{t.technology}</option>
                    <option value="environment">{t.environment}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-orange-700 font-medium">
                    {t.ideaDescription}
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder={t.descriptionPlaceholder}
                    className="min-h-32 border-orange-300 focus:border-orange-500"
                    rows={6}
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.title || !formData.description || !formData.category}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
                >
                  {t.submitButton}
                </Button>
              </CardContent>
            </Card>

            {/* Recent Ideas */}
            <div>
              <h2 className="text-2xl font-bold text-orange-800 mb-6">{t.recentIdeas}</h2>
              <div className="space-y-4">
                {sampleIdeas.map((idea) => (
                  <Card
                    key={idea.id}
                    className="border-orange-200 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-orange-800">
                          {language === "hi" ? idea.titleHi : idea.titleEn}
                        </h3>
                        <Badge className={getCategoryColor(idea.category)}>{getCategoryName(idea.category)}</Badge>
                      </div>
                      <p className="text-orange-600 mb-3 text-sm">
                        {language === "hi" ? idea.descriptionHi : idea.descriptionEn}
                      </p>
                      <div className="flex justify-between items-center text-sm text-orange-500">
                        <span>
                          {t.submittedBy}: {language === "hi" ? idea.authorHi : idea.authorEn}
                        </span>
                        <span>
                          {idea.daysAgo} {t.daysAgo}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
