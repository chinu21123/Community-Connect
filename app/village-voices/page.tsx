"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const translations = {
  en: {
    title: "🎧 Village Voices",
    backToHome: "← Back to Home",
    localNews: "📰 Local News",
    announcements: "📢 Announcements",
    govUpdates: "🏛️ Government Updates",
    playNews: "▶️ Play",
    pauseNews: "⏸️ Pause",
    duration: "Duration",
    published: "Published",
    category: "Category",
    readMore: "Read More",
    listenNow: "Listen Now",
    // Categories
    agriculture: "Agriculture",
    education: "Education",
    health: "Health",
    infrastructure: "Infrastructure",
    weather: "Weather",
    schemes: "Government Schemes",
  },
  hi: {
    title: "🎧 गांव की आवाज़",
    backToHome: "← वापस होम पेज पर",
    localNews: "📰 स्थानीय समाचार",
    announcements: "📢 घोषणाएं",
    govUpdates: "🏛️ सरकारी अपडेट",
    playNews: "▶️ चलाएं",
    pauseNews: "⏸️ रोकें",
    duration: "अवधि",
    published: "प्रकाशित",
    category: "श्रेणी",
    readMore: "और पढ़ें",
    listenNow: "अभी सुनें",
    // Categories
    agriculture: "कृषि",
    education: "शिक्षा",
    health: "स्वास्थ्य",
    infrastructure: "बुनियादी ढांचा",
    weather: "मौसम",
    schemes: "सरकारी योजनाएं",
  },
}

const localNews = [
  {
    id: 1,
    titleEn: "Rajasthan Government Announces New Water Conservation Project",
    titleHi: "राजस्थान सरकार ने नई जल संरक्षण परियोजना की घोषणा की",
    contentEn:
      "The Rajasthan government has announced a ₹500 crore water conservation project to benefit rural areas. The project will focus on rainwater harvesting and groundwater recharge in Bundi district.",
    contentHi:
      "राजस्थान सरकार ने ग्रामीण क्षेत्रों के लाभ के लिए ₹500 करोड़ की जल संरक्षण परियोजना की घोषणा की है। यह परियोजना बून्दी जिले में वर्षा जल संचयन और भूजल पुनर्भरण पर केंद्रित होगी।",
    category: "infrastructure",
    publishedDays: 2,
    duration: "3:45",
    audioUrl: "/audio/water-project.mp3",
  },
  {
    id: 2,
    titleEn: "Kisan Credit Card Scheme Extended in Bundi District",
    titleHi: "बून्दी जिले में किसान क्रेडिट कार्ड योजना का विस्तार",
    contentEn:
      "The Kisan Credit Card scheme has been extended to cover more farmers in Bundi district. Over 5,000 new farmers will benefit from this initiative with easier access to agricultural loans.",
    contentHi:
      "बून्दी जिले में अधिक किसानों को कवर करने के लिए किसान क्रेडिट कार्ड योजना का विस्तार किया गया है। इस पहल से 5,000 से अधिक नए किसानों को कृषि ऋण तक आसान पहुंच के साथ लाभ होगा।",
    category: "agriculture",
    publishedDays: 5,
    duration: "2:30",
    audioUrl: "/audio/kisan-credit.mp3",
  },
  {
    id: 3,
    titleEn: "Digital Health Cards Launched for Rural Areas",
    titleHi: "ग्रामीण क्षेत्रों के लिए डिजिटल स्वास्थ्य कार्ड लॉन्च",
    contentEn:
      "Digital health cards have been launched for residents of rural Rajasthan. These cards will provide easy access to medical records and government health schemes.",
    contentHi:
      "ग्रामीण राजस्थान के निवासियों के लिए डिजिटल स्वास्थ्य कार्ड लॉन्च किए गए हैं। ये कार्ड चिकित्सा रिकॉर्ड और सरकारी स्वास्थ्य योजनाओं तक आसान पहुंच प्रदान करेंगे।",
    category: "health",
    publishedDays: 7,
    duration: "4:15",
    audioUrl: "/audio/health-cards.mp3",
  },
]

const announcements = [
  {
    id: 1,
    titleEn: "Village Cleanliness Drive - January 15th",
    titleHi: "गांव स्वच्छता अभियान - 15 जनवरी",
    contentEn:
      "All villagers are requested to participate in the cleanliness drive on January 15th at 8:00 AM. Meeting point: Village Chaupal.",
    contentHi: "सभी ग्रामीणों से अनुरोध है कि वे 15 जनवरी को सुबह 8:00 बजे स्वच्छता अभियान में भाग लें। मिलने का स्थान: गांव चौपाल।",
    category: "infrastructure",
    publishedDays: 1,
    duration: "1:45",
    audioUrl: "/audio/cleanliness-drive.mp3",
  },
  {
    id: 2,
    titleEn: "Free Health Checkup Camp - January 20th",
    titleHi: "निःशुल्क स्वास्थ्य जांच शिविर - 20 जनवरी",
    contentEn:
      "A free health checkup camp will be organized on January 20th from 10:00 AM to 4:00 PM at the Primary Health Center.",
    contentHi:
      "20 जनवरी को सुबह 10:00 बजे से शाम 4:00 बजे तक प्राथमिक स्वास्थ्य केंद्र में निःशुल्क स्वास्थ्य जांच शिविर का आयोजन किया जाएगा।",
    category: "health",
    publishedDays: 3,
    duration: "2:15",
    audioUrl: "/audio/health-camp.mp3",
  },
]

const govUpdates = [
  {
    id: 1,
    titleEn: "PM-KISAN Scheme: Next Installment Release",
    titleHi: "पीएम-किसान योजना: अगली किस्त जारी",
    contentEn:
      "The next installment of PM-KISAN scheme (₹2,000) will be released on January 25th. Farmers can check their status online.",
    contentHi: "पीएम-किसान योजना की अगली किस्त (₹2,000) 25 जनवरी को जारी की जाएगी। किसान अपनी स्थिति ऑनलाइन चेक कर सकते हैं।",
    category: "schemes",
    publishedDays: 4,
    duration: "3:00",
    audioUrl: "/audio/pm-kisan.mp3",
  },
  {
    id: 2,
    titleEn: "Weather Alert: Light Rain Expected",
    titleHi: "मौसम चेतावनी: हल्की बारिश की संभावना",
    contentEn:
      "Light to moderate rainfall is expected in Bundi district over the next 3 days. Farmers are advised to take necessary precautions.",
    contentHi: "अगले 3 दिनों में बून्दी जिले में हल्की से मध्यम बारिश की संभावना है। किसानों को आवश्यक सावधानी बरतने की सलाह दी जाती है।",
    category: "weather",
    publishedDays: 1,
    duration: "1:30",
    audioUrl: "/audio/weather-alert.mp3",
  },
]

export default function VillageVoicesPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [currentTab, setCurrentTab] = useState("news")
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const t = translations[language]

  const playAudio = (id: number, audioUrl: string) => {
    if (currentlyPlaying === id) {
      // Pause current audio
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setCurrentlyPlaying(null)
    } else {
      // Play new audio
      if (audioRef.current) {
        audioRef.current.src = audioUrl
        audioRef.current.play()
      }
      setCurrentlyPlaying(id)
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      agriculture: "bg-green-100 text-green-800",
      health: "bg-red-100 text-red-800",
      infrastructure: "bg-blue-100 text-blue-800",
      education: "bg-purple-100 text-purple-800",
      weather: "bg-yellow-100 text-yellow-800",
      schemes: "bg-indigo-100 text-indigo-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getCategoryName = (category: string) => {
    const names = {
      agriculture: language === "hi" ? "कृषि" : "Agriculture",
      health: language === "hi" ? "स्वास्थ्य" : "Health",
      infrastructure: language === "hi" ? "बुनियादी ढांचा" : "Infrastructure",
      education: language === "hi" ? "शिक्षा" : "Education",
      weather: language === "hi" ? "मौसम" : "Weather",
      schemes: language === "hi" ? "सरकारी योजनाएं" : "Government Schemes",
    }
    return names[category as keyof typeof names] || category
  }

  const NewsCard = ({ item, type }: { item: any; type: string }) => (
    <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-purple-800 text-lg flex-1">
            {language === "hi" ? item.titleHi : item.titleEn}
          </CardTitle>
          <Badge className={getCategoryColor(item.category)}>{getCategoryName(item.category)}</Badge>
        </div>
        <div className="flex items-center space-x-4 text-sm text-purple-600">
          <span>🕒 {item.duration}</span>
          <span>
            📅 {item.publishedDays} {language === "hi" ? "दिन पहले" : "days ago"}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-purple-700">{language === "hi" ? item.contentHi : item.contentEn}</p>
        <div className="flex space-x-3">
          <Button
            onClick={() => playAudio(item.id, item.audioUrl)}
            className={`flex-1 ${
              currentlyPlaying === item.id ? "bg-red-600 hover:bg-red-700" : "bg-purple-600 hover:bg-purple-700"
            } text-white`}
          >
            {currentlyPlaying === item.id ? t.pauseNews : t.playNews}
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
          >
            {t.readMore}
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 relative overflow-hidden">
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
          <Link href="/" className="text-purple-600 hover:text-purple-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-purple-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-purple-600 text-white shadow-sm" : "text-purple-600 hover:bg-purple-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-purple-600 text-white shadow-sm" : "text-purple-600 hover:bg-purple-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">{t.title}</h1>
          <p className="text-purple-600 text-lg">
            {language === "hi" ? "आपके गांव की आवाज़, आपकी भाषा में" : "Your village's voice, in your language"}
          </p>
        </div>

        {/* Audio Player */}
        <audio ref={audioRef} onEnded={() => setCurrentlyPlaying(null)} className="hidden" />

        {/* Content Tabs */}
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="news" className="text-lg py-3">
              {t.localNews}
            </TabsTrigger>
            <TabsTrigger value="announcements" className="text-lg py-3">
              {t.announcements}
            </TabsTrigger>
            <TabsTrigger value="government" className="text-lg py-3">
              {t.govUpdates}
            </TabsTrigger>
          </TabsList>

          {/* Local News Tab */}
          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {localNews.map((item) => (
                <NewsCard key={item.id} item={item} type="news" />
              ))}
            </div>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {announcements.map((item) => (
                <NewsCard key={item.id} item={item} type="announcement" />
              ))}
            </div>
          </TabsContent>

          {/* Government Updates Tab */}
          <TabsContent value="government" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {govUpdates.map((item) => (
                <NewsCard key={item.id} item={item} type="government" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Live Updates Banner */}
        <Card className="border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 mt-8">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-green-800">
                {language === "hi" ? "🔴 लाइव अपडेट" : "🔴 Live Updates"}
              </h3>
            </div>
            <p className="text-green-700">
              {language === "hi"
                ? "नवीनतम समाचार और घोषणाओं के लिए नियमित रूप से जांचते रहें"
                : "Check regularly for latest news and announcements"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
