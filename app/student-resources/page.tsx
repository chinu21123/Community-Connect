"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const translations = {
  en: {
    title: "🎓 Student Resources",
    backToHome: "← Back to Home",
    scholarships: "💰 Scholarships",
    onlineResources: "💻 Online Resources",
    govSchemes: "🏛️ Government Schemes",
    // Rajasthan specific content
    rajScholarships: "Rajasthan Scholarships",
    cmScholarship: "Chief Minister Higher Education Scholarship",
    scStScholarship: "SC/ST/OBC Scholarship",
    minorityScholarship: "Minority Scholarship",
    meritScholarship: "Merit-based Scholarship",
    girlsScholarship: "Girls Education Scholarship",
    // Online resources
    eLibrary: "📚 Rajasthan E-Library",
    onlineClasses: "🎥 Free Online Classes",
    examPrep: "📝 Competitive Exam Preparation",
    skillDevelopment: "🛠️ Skill Development Programs",
    // Government schemes
    digitalIndia: "Digital India Initiative",
    skillIndia: "Skill India Mission",
    startupIndia: "Startup India",
    pmKisan: "PM-KISAN Scheme",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    eligibility: "Eligibility",
    documents: "Required Documents",
    lastDate: "Last Date",
    amount: "Amount",
  },
  hi: {
    title: "🎓 छात्र संसाधन",
    backToHome: "← वापस होम पेज पर",
    scholarships: "💰 छात्रवृत्ति",
    onlineResources: "💻 ऑनलाइन संसाधन",
    govSchemes: "🏛️ सरकारी योजनाएं",
    // Rajasthan specific content
    rajScholarships: "राजस्थान छात्रवृत्ति",
    cmScholarship: "मुख्यमंत्री उच्च शिक्षा छात्रवृत्ति",
    scStScholarship: "SC/ST/OBC छात्रवृत्ति",
    minorityScholarship: "अल्पसंख्यक छात्रवृत्ति",
    meritScholarship: "मेधा आधारित छात्रवृत्ति",
    girlsScholarship: "बालिका शिक्षा छात्रवृत्ति",
    // Online resources
    eLibrary: "📚 राजस्थान ई-लाइब्रेरी",
    onlineClasses: "🎥 निःशुल्क ऑनलाइन कक्षाएं",
    examPrep: "📝 प्रतियोगी परीक्षा तैयारी",
    skillDevelopment: "🛠️ कौशल विकास कार्यक्रम",
    // Government schemes
    digitalIndia: "डिजिटल इंडिया पहल",
    skillIndia: "स्किल इंडिया मिशन",
    startupIndia: "स्टार्टअप इंडिया",
    pmKisan: "पीएम-किसान योजना",
    applyNow: "अभी आवेदन करें",
    learnMore: "और जानें",
    eligibility: "पात्रता",
    documents: "आवश्यक दस्तावेज",
    lastDate: "अंतिम तिथि",
    amount: "राशि",
  },
}

const scholarshipData = [
  {
    id: "cm-scholarship",
    titleEn: "Chief Minister Higher Education Scholarship",
    titleHi: "मुख्यमंत्री उच्च शिक्षा छात्रवृत्ति",
    amount: "₹5,000 - ₹10,000",
    eligibility: "12th pass with 60%+ marks",
    eligibilityHi: "12वीं पास 60%+ अंकों के साथ",
    lastDate: "31st March 2024",
    lastDateHi: "31 मार्च 2024",
    status: "active",
  },
  {
    id: "sc-st-scholarship",
    titleEn: "SC/ST/OBC Scholarship",
    titleHi: "SC/ST/OBC छात्रवृत्ति",
    amount: "₹3,000 - ₹8,000",
    eligibility: "Belongs to SC/ST/OBC category",
    eligibilityHi: "SC/ST/OBC श्रेणी से संबंधित",
    lastDate: "30th April 2024",
    lastDateHi: "30 अप्रैल 2024",
    status: "active",
  },
  {
    id: "girls-scholarship",
    titleEn: "Girls Education Scholarship",
    titleHi: "बालिका शिक्षा छात्रवृत्ति",
    amount: "₹2,000 - ₹6,000",
    eligibility: "Female students in higher education",
    eligibilityHi: "उच्च शिक्षा में महिला छात्राएं",
    lastDate: "15th May 2024",
    lastDateHi: "15 मई 2024",
    status: "active",
  },
]

const onlineResources = [
  {
    id: "e-library",
    titleEn: "Rajasthan E-Library",
    titleHi: "राजस्थान ई-लाइब्रेरी",
    descriptionEn: "Access thousands of books and study materials online",
    descriptionHi: "हजारों पुस्तकें और अध्ययन सामग्री ऑनलाइन एक्सेस करें",
    link: "https://library.rajasthan.gov.in",
  },
  {
    id: "online-classes",
    titleEn: "Free Online Classes",
    titleHi: "निःशुल्क ऑनलाइन कक्षाएं",
    descriptionEn: "Live and recorded classes for various subjects",
    descriptionHi: "विभिन्न विषयों के लिए लाइव और रिकॉर्डेड कक्षाएं",
    link: "https://education.rajasthan.gov.in",
  },
  {
    id: "exam-prep",
    titleEn: "Competitive Exam Preparation",
    titleHi: "प्रतियोगी परीक्षा तैयारी",
    descriptionEn: "Preparation materials for RPSC, RAS, and other exams",
    descriptionHi: "RPSC, RAS और अन्य परीक्षाओं के लिए तैयारी सामग्री",
    link: "https://rpsc.rajasthan.gov.in",
  },
]

export default function StudentResourcesPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 relative overflow-hidden">
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
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-blue-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-blue-600 text-white shadow-sm" : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-blue-600 text-white shadow-sm" : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">{t.title}</h1>
          <p className="text-blue-600 text-lg">
            राजस्थान सरकार की शिक्षा योजनाएं • Rajasthan Government Education Schemes
          </p>
        </div>

        {/* Scholarships Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t.scholarships}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipData.map((scholarship) => (
              <Card
                key={scholarship.id}
                className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-blue-800 text-lg">
                    {language === "hi" ? scholarship.titleHi : scholarship.titleEn}
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-800 w-fit">{scholarship.amount}</Badge>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-blue-700">{t.eligibility}:</p>
                    <p className="text-blue-600">
                      {language === "hi" ? scholarship.eligibilityHi : scholarship.eligibility}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-700">{t.lastDate}:</p>
                    <p className="text-blue-600">{language === "hi" ? scholarship.lastDateHi : scholarship.lastDate}</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{t.applyNow}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Online Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t.onlineResources}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineResources.map((resource) => (
              <Card
                key={resource.id}
                className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="text-purple-800 text-lg">
                    {language === "hi" ? resource.titleHi : resource.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-purple-600">
                    {language === "hi" ? resource.descriptionHi : resource.descriptionEn}
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">{t.learnMore}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Government Schemes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t.govSchemes}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-green-800">{t.digitalIndia}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-green-600 mb-4">
                  {language === "hi"
                    ? "डिजिटल साक्षरता और तकनीकी कौशल विकास कार्यक्रम"
                    : "Digital literacy and technical skill development programs"}
                </p>
                <Button className="bg-green-600 hover:bg-green-700">{t.learnMore}</Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardTitle className="text-orange-800">{t.skillIndia}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-orange-600 mb-4">
                  {language === "hi"
                    ? "युवाओं के लिए कौशल प्रशिक्षण और रोजगार के अवसर"
                    : "Skill training and employment opportunities for youth"}
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700">{t.learnMore}</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <Card className="border-blue-200 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              {language === "hi" ? "सहायता के लिए संपर्क करें" : "Contact for Help"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-blue-700 font-medium">📞 Helpline:</p>
                <p className="text-blue-600">1800-180-6127</p>
              </div>
              <div>
                <p className="text-blue-700 font-medium">📧 Email:</p>
                <p className="text-blue-600">education@rajasthan.gov.in</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
