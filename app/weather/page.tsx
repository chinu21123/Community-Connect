"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const translations = {
  en: {
    title: "🌤️ Weather & Agriculture",
    backToHome: "← Back to Home",
    currentWeather: "Current Weather",
    forecast: "7-Day Forecast",
    cropAdvisory: "Crop Advisory",
    marketPrices: "Market Prices",
    temperature: "Temperature",
    humidity: "Humidity",
    rainfall: "Rainfall",
    windSpeed: "Wind Speed",
    uvIndex: "UV Index",
    advisory: "Advisory",
    price: "Price",
    change: "Change",
    lastUpdated: "Last Updated",
    // Weather conditions
    sunny: "Sunny",
    cloudy: "Cloudy",
    rainy: "Rainy",
    stormy: "Stormy",
    // Crop advisories
    irrigation: "Irrigation",
    fertilizer: "Fertilizer",
    pestControl: "Pest Control",
    harvesting: "Harvesting",
  },
  hi: {
    title: "🌤️ मौसम और कृषि",
    backToHome: "← वापस होम पेज पर",
    currentWeather: "वर्तमान मौसम",
    forecast: "7-दिन का पूर्वानुमान",
    cropAdvisory: "फसल सलाह",
    marketPrices: "बाजार भाव",
    temperature: "तापमान",
    humidity: "आर्द्रता",
    rainfall: "वर्षा",
    windSpeed: "हवा की गति",
    uvIndex: "यूवी इंडेक्स",
    advisory: "सलाह",
    price: "भाव",
    change: "बदलाव",
    lastUpdated: "अंतिम अपडेट",
    // Weather conditions
    sunny: "धूप",
    cloudy: "बादल",
    rainy: "बारिश",
    stormy: "तूफान",
    // Crop advisories
    irrigation: "सिंचाई",
    fertilizer: "उर्वरक",
    pestControl: "कीट नियंत्रण",
    harvesting: "कटाई",
  },
}

const currentWeather = {
  temperature: 28,
  condition: "sunny",
  humidity: 65,
  rainfall: 0,
  windSpeed: 12,
  uvIndex: 7,
  location: "Bundi, Rajasthan",
  locationHi: "बून्दी, राजस्थान",
}

const forecast = [
  { day: "Today", dayHi: "आज", temp: 28, condition: "sunny", rain: 0 },
  { day: "Tomorrow", dayHi: "कल", temp: 30, condition: "cloudy", rain: 10 },
  { day: "Wed", dayHi: "बुध", temp: 26, condition: "rainy", rain: 80 },
  { day: "Thu", dayHi: "गुरु", temp: 24, condition: "rainy", rain: 60 },
  { day: "Fri", dayHi: "शुक्र", temp: 27, condition: "cloudy", rain: 20 },
  { day: "Sat", dayHi: "शनि", temp: 29, condition: "sunny", rain: 0 },
  { day: "Sun", dayHi: "रवि", temp: 31, condition: "sunny", rain: 0 },
]

const cropAdvisories = [
  {
    crop: "Wheat",
    cropHi: "गेहूं",
    stage: "Flowering",
    stageHi: "फूल आना",
    advisory: "Apply light irrigation. Monitor for aphids.",
    advisoryHi: "हल्की सिंचाई करें। माहू के लिए निगरानी करें।",
    priority: "high",
  },
  {
    crop: "Mustard",
    cropHi: "सरसों",
    stage: "Pod Formation",
    stageHi: "फली बनना",
    advisory: "Reduce irrigation frequency. Apply potash fertilizer.",
    advisoryHi: "सिंचाई की आवृत्ति कम करें। पोटाश उर्वरक डालें।",
    priority: "medium",
  },
  {
    crop: "Barley",
    cropHi: "जौ",
    stage: "Grain Filling",
    stageHi: "दाना भरना",
    advisory: "Maintain soil moisture. Prepare for harvesting.",
    advisoryHi: "मिट्टी की नमी बनाए रखें। कटाई की तैयारी करें।",
    priority: "low",
  },
]

const marketPrices = [
  { crop: "Wheat", cropHi: "गेहूं", price: "₹2,150", change: "+2.5%", trend: "up" },
  { crop: "Mustard", cropHi: "सरसों", price: "₹5,200", change: "-1.2%", trend: "down" },
  { crop: "Barley", cropHi: "जौ", price: "₹1,800", change: "+0.8%", trend: "up" },
  { crop: "Gram", cropHi: "चना", price: "₹4,800", change: "+3.1%", trend: "up" },
]

export default function WeatherPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const [currentTime, setCurrentTime] = useState(new Date())
  const t = translations[language]

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const getWeatherIcon = (condition: string) => {
    const icons = {
      sunny: "☀️",
      cloudy: "☁️",
      rainy: "🌧️",
      stormy: "⛈️",
    }
    return icons[condition as keyof typeof icons] || "🌤️"
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "bg-red-100 text-red-800 border-red-200",
      medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      low: "bg-green-100 text-green-800 border-green-200",
    }
    return colors[priority as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-sky-300 rounded-full opacity-25 animate-bounce"></div>
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
            {language === "hi" ? currentWeather.locationHi : currentWeather.location}
          </p>
          <p className="text-blue-500 text-sm">
            {t.lastUpdated}: {currentTime.toLocaleTimeString(language === "hi" ? "hi-IN" : "en-IN")}
          </p>
        </div>

        <Tabs defaultValue="weather" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="weather">{t.currentWeather}</TabsTrigger>
            <TabsTrigger value="forecast">{t.forecast}</TabsTrigger>
            <TabsTrigger value="crops">{t.cropAdvisory}</TabsTrigger>
            <TabsTrigger value="prices">{t.marketPrices}</TabsTrigger>
          </TabsList>

          {/* Current Weather Tab */}
          <TabsContent value="weather">
            <Card className="border-blue-200 shadow-lg bg-gradient-to-r from-blue-50 to-sky-50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{getWeatherIcon(currentWeather.condition)}</div>
                  <div className="text-6xl font-bold text-blue-800 mb-2">{currentWeather.temperature}°C</div>
                  <div className="text-xl text-blue-600 capitalize">
                    {t[currentWeather.condition as keyof typeof t] || currentWeather.condition}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">💧</div>
                    <div className="text-sm text-blue-600">{t.humidity}</div>
                    <div className="text-xl font-bold text-blue-800">{currentWeather.humidity}%</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">🌧️</div>
                    <div className="text-sm text-blue-600">{t.rainfall}</div>
                    <div className="text-xl font-bold text-blue-800">{currentWeather.rainfall}mm</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">💨</div>
                    <div className="text-sm text-blue-600">{t.windSpeed}</div>
                    <div className="text-xl font-bold text-blue-800">{currentWeather.windSpeed} km/h</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">☀️</div>
                    <div className="text-sm text-blue-600">{t.uvIndex}</div>
                    <div className="text-xl font-bold text-blue-800">{currentWeather.uvIndex}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 7-Day Forecast Tab */}
          <TabsContent value="forecast">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {forecast.map((day, index) => (
                <Card key={index} className="border-sky-200 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm font-medium text-sky-700 mb-2">
                      {language === "hi" ? day.dayHi : day.day}
                    </div>
                    <div className="text-4xl mb-2">{getWeatherIcon(day.condition)}</div>
                    <div className="text-xl font-bold text-sky-800 mb-1">{day.temp}°C</div>
                    <div className="text-xs text-sky-600">🌧️ {day.rain}%</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Crop Advisory Tab */}
          <TabsContent value="crops">
            <div className="space-y-6">
              {cropAdvisories.map((crop, index) => (
                <Card key={index} className={`border-2 shadow-lg ${getPriorityColor(crop.priority)}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">🌾 {language === "hi" ? crop.cropHi : crop.crop}</CardTitle>
                        <p className="text-sm opacity-80">{language === "hi" ? crop.stageHi : crop.stage}</p>
                      </div>
                      <Badge className={getPriorityColor(crop.priority)}>
                        {crop.priority === "high" ? "🔴" : crop.priority === "medium" ? "🟡" : "🟢"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{language === "hi" ? crop.advisoryHi : crop.advisory}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Market Prices Tab */}
          <TabsContent value="prices">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketPrices.map((item, index) => (
                <Card key={index} className="border-green-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">
                          {language === "hi" ? item.cropHi : item.crop}
                        </h3>
                        <p className="text-2xl font-bold text-green-700">{item.price}</p>
                        <p className="text-sm text-green-600">per quintal</p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-lg font-medium ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}
                        >
                          {item.trend === "up" ? "📈" : "📉"} {item.change}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
