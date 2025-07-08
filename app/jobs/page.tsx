"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, Search, MapPin, Calendar, Users, Clock, ExternalLink } from "lucide-react"

const translations = {
  en: {
    title: "Job Portal",
    subtitle: "Latest job opportunities in Rajasthan",
    searchPlaceholder: "Search jobs...",
    filterByCategory: "Filter by Category",
    allCategories: "All Categories",
    government: "Government",
    private: "Private",
    ngo: "NGO/Social",
    agriculture: "Agriculture",
    education: "Education",
    healthcare: "Healthcare",
    technology: "Technology",
    backToHome: "Back to Home",
    location: "Location",
    posted: "Posted",
    deadline: "Deadline",
    positions: "Positions",
    applyNow: "Apply Now",
    viewDetails: "View Details",
    noJobsFound: "No jobs found matching your criteria",
    jobsFound: "jobs found",
  },
  hi: {
    title: "नौकरी पोर्टल",
    subtitle: "राजस्थान में नवीनतम नौकरी के अवसर",
    searchPlaceholder: "नौकरी खोजें...",
    filterByCategory: "श्रेणी के अनुसार फ़िल्टर करें",
    allCategories: "सभी श्रेणियां",
    government: "सरकारी",
    private: "निजी",
    ngo: "एनजीओ/सामाजिक",
    agriculture: "कृषि",
    education: "शिक्षा",
    healthcare: "स्वास्थ्य सेवा",
    technology: "तकनीक",
    backToHome: "होम पर वापस",
    location: "स्थान",
    posted: "पोस्ट किया गया",
    deadline: "अंतिम तिथि",
    positions: "पद",
    applyNow: "अभी आवेदन करें",
    viewDetails: "विवरण देखें",
    noJobsFound: "आपके मानदंडों से मेल खाने वाली कोई नौकरी नहीं मिली",
    jobsFound: "नौकरियां मिलीं",
  },
  mar: {
    title: "नौकरी पोर्टल",
    subtitle: "राजस्थान में नवीनतम नौकरी रा अवसर",
    searchPlaceholder: "नौकरी खोजो...",
    filterByCategory: "श्रेणी रे अनुसार फ़िल्टर करो",
    allCategories: "सगळी श्रेणियां",
    government: "सरकारी",
    private: "निजी",
    ngo: "एनजीओ/सामाजिक",
    agriculture: "कृषि",
    education: "शिक्षा",
    healthcare: "स्वास्थ्य सेवा",
    technology: "तकनीक",
    backToHome: "होम पर वापस",
    location: "स्थान",
    posted: "पोस्ट करियो",
    deadline: "अंतिम तिथि",
    positions: "पद",
    applyNow: "अभी आवेदन करो",
    viewDetails: "विवरण देखो",
    noJobsFound: "म्हारे मानदंडां सूं मेल खाने वाली कोई नौकरी कोनी मिली",
    jobsFound: "नौकरियां मिलीं",
  },
}

const jobsData = {
  en: [
    {
      id: 1,
      title: "Village Development Officer",
      company: "Rajasthan Panchayati Raj Department",
      category: "government",
      location: "Bundi, Rajasthan",
      salary: "₹25,000 - ₹35,000",
      type: "Full-time",
      posted: "2 days ago",
      deadline: "15 Jan 2025",
      positions: 5,
      description: "Responsible for implementing rural development schemes and coordinating with village panchayats.",
      requirements: ["Graduate degree", "Knowledge of local language", "Computer literacy"],
      urgent: true,
    },
    {
      id: 2,
      title: "Primary School Teacher",
      company: "Rajasthan Education Department",
      category: "education",
      location: "Lakheri, Rajasthan",
      salary: "₹20,000 - ₹30,000",
      type: "Full-time",
      posted: "1 week ago",
      deadline: "20 Jan 2025",
      positions: 3,
      description: "Teaching primary school students in government schools with focus on digital education.",
      requirements: ["B.Ed degree", "Teaching experience preferred", "Hindi/English proficiency"],
      urgent: false,
    },
    {
      id: 3,
      title: "Agricultural Extension Officer",
      company: "Department of Agriculture, Rajasthan",
      category: "agriculture",
      location: "Indragarh, Rajasthan",
      salary: "₹22,000 - ₹32,000",
      type: "Full-time",
      posted: "3 days ago",
      deadline: "25 Jan 2025",
      positions: 2,
      description: "Provide technical support to farmers and promote modern farming techniques.",
      requirements: ["Agriculture degree", "Field experience", "Two-wheeler license"],
      urgent: true,
    },
    {
      id: 4,
      title: "Community Health Worker",
      company: "National Health Mission, Rajasthan",
      category: "healthcare",
      location: "Bundi District",
      salary: "₹18,000 - ₹25,000",
      type: "Full-time",
      posted: "5 days ago",
      deadline: "30 Jan 2025",
      positions: 8,
      description: "Provide basic healthcare services and health education in rural communities.",
      requirements: ["12th pass", "Health worker training", "Local area knowledge"],
      urgent: false,
    },
    {
      id: 5,
      title: "Digital Literacy Trainer",
      company: "Adani Foundation",
      category: "ngo",
      location: "Lakheri, Rajasthan",
      salary: "₹15,000 - ₹22,000",
      type: "Contract",
      posted: "1 day ago",
      deadline: "10 Jan 2025",
      positions: 4,
      description: "Train rural communities in basic computer skills and digital services.",
      requirements: ["Computer knowledge", "Training experience", "Communication skills"],
      urgent: true,
    },
    {
      id: 6,
      title: "Data Entry Operator",
      company: "Rajasthan IT Department",
      category: "technology",
      location: "Bundi, Rajasthan",
      salary: "₹12,000 - ₹18,000",
      type: "Part-time",
      posted: "4 days ago",
      deadline: "18 Jan 2025",
      positions: 6,
      description: "Enter and maintain government records and databases.",
      requirements: ["Computer proficiency", "Typing speed 30 WPM", "Attention to detail"],
      urgent: false,
    },
  ],
  hi: [
    {
      id: 1,
      title: "ग्राम विकास अधिकारी",
      company: "राजस्थान पंचायती राज विभाग",
      category: "government",
      location: "बूंदी, राजस्थान",
      salary: "₹25,000 - ₹35,000",
      type: "पूर्णकालिक",
      posted: "2 दिन पहले",
      deadline: "15 जनवरी 2025",
      positions: 5,
      description: "ग्रामीण विकास योजनाओं को लागू करने और ग्राम पंचायतों के साथ समन्वय की जिम्मेदारी।",
      requirements: ["स्नातक डिग्री", "स्थानीय भाषा का ज्ञान", "कंप्यूटर साक्षरता"],
      urgent: true,
    },
    {
      id: 2,
      title: "प्राथमिक विद्यालय शिक्षक",
      company: "राजस्थान शिक्षा विभाग",
      category: "education",
      location: "लाखेरी, राजस्थान",
      salary: "₹20,000 - ₹30,000",
      type: "पूर्णकालिक",
      posted: "1 सप्ताह पहले",
      deadline: "20 जनवरी 2025",
      positions: 3,
      description: "डिजिटल शिक्षा पर ध्यान देने के साथ सरकारी स्कूलों में प्राथमिक छात्रों को पढ़ाना।",
      requirements: ["बी.एड डिग्री", "शिक्षण अनुभव वरीयता", "हिंदी/अंग्रेजी प्रवाहता"],
      urgent: false,
    },
    {
      id: 3,
      title: "कृषि विस्तार अधिकारी",
      company: "कृषि विभाग, राजस्थान",
      category: "agriculture",
      location: "इंद्रगढ़, राजस्थान",
      salary: "₹22,000 - ₹32,000",
      type: "पूर्णकालिक",
      posted: "3 दिन पहले",
      deadline: "25 जनवरी 2025",
      positions: 2,
      description: "किसानों को तकनीकी सहायता प्रदान करना और आधुनिक कृषि तकनीकों को बढ़ावा देना।",
      requirements: ["कृषि डिग्री", "क्षेत्रीय अनुभव", "दोपहिया लाइसेंस"],
      urgent: true,
    },
    {
      id: 4,
      title: "सामुदायिक स्वास्थ्य कार्यकर्ता",
      company: "राष्ट्रीय स्वास्थ्य मिशन, राजस्थान",
      category: "healthcare",
      location: "बूंदी जिला",
      salary: "₹18,000 - ₹25,000",
      type: "पूर्णकालिक",
      posted: "5 दिन पहले",
      deadline: "30 जनवरी 2025",
      positions: 8,
      description: "ग्रामीण समुदायों में बुनियादी स्वास्थ्य सेवाएं और स्वास्थ्य शिक्षा प्रदान करना।",
      requirements: ["12वीं पास", "स्वास्थ्य कार्यकर्ता प्रशिक्षण", "स्थानीय क्षेत्र का ज्ञान"],
      urgent: false,
    },
    {
      id: 5,
      title: "डिजिटल साक्षरता प्रशिक्षक",
      company: "अदानी फाउंडेशन",
      category: "ngo",
      location: "लाखेरी, राजस्थान",
      salary: "₹15,000 - ₹22,000",
      type: "अनुबंध",
      posted: "1 दिन पहले",
      deadline: "10 जनवरी 2025",
      positions: 4,
      description: "ग्रामीण समुदायों को बुनियादी कंप्यूटर कौशल और डिजिटल सेवाओं में प्रशिक्षण देना।",
      requirements: ["कंप्यूटर ज्ञान", "प्रशिक्षण अनुभव", "संचार कौशल"],
      urgent: true,
    },
    {
      id: 6,
      title: "डेटा एंट्री ऑपरेटर",
      company: "राजस्थान आईटी विभाग",
      category: "technology",
      location: "बूंदी, राजस्थान",
      salary: "₹12,000 - ₹18,000",
      type: "अंशकालिक",
      posted: "4 दिन पहले",
      deadline: "18 जनवरी 2025",
      positions: 6,
      description: "सरकारी रिकॉर्ड और डेटाबेस दर्ज करना और बनाए रखना।",
      requirements: ["कंप्यूटर प्रवाहता", "टाइपिंग गति 30 WPM", "विस्तार पर ध्यान"],
      urgent: false,
    },
  ],
  mar: [
    {
      id: 1,
      title: "ग्राम विकास अधिकारी",
      company: "राजस्थान पंचायती राज विभाग",
      category: "government",
      location: "बूंदी, राजस्थान",
      salary: "₹25,000 - ₹35,000",
      type: "पूर्णकालिक",
      posted: "2 दिन पैली",
      deadline: "15 जनवरी 2025",
      positions: 5,
      description: "ग्रामीण विकास योजनाओं नै लागू करणो अर ग्राम पंचायतां रे साथ समन्वय री जिम्मेदारी।",
      requirements: ["स्नातक डिग्री", "स्थानीय भाषा रो ज्ञान", "कंप्यूटर साक्षरता"],
      urgent: true,
    },
    {
      id: 2,
      title: "प्राथमिक विद्यालय शिक्षक",
      company: "राजस्थान शिक्षा विभाग",
      category: "education",
      location: "लाखेरी, राजस्थान",
      salary: "₹20,000 - ₹30,000",
      type: "पूर्णकालिक",
      posted: "1 हफ्तो पैली",
      deadline: "20 जनवरी 2025",
      positions: 3,
      description: "डिजिटल शिक्षा पर ध्यान देण रे साथ सरकारी स्कूलां में प्राथमिक छात्रां नै पढ़ावणो।",
      requirements: ["बी.एड डिग्री", "शिक्षण अनुभव वरीयता", "हिंदी/अंग्रेजी प्रवाहता"],
      urgent: false,
    },
    {
      id: 3,
      title: "कृषि विस्तार अधिकारी",
      company: "कृषि विभाग, राजस्थान",
      category: "agriculture",
      location: "इंद्रगढ़, राजस्थान",
      salary: "₹22,000 - ₹32,000",
      type: "पूर्णकालिक",
      posted: "3 दिन पैली",
      deadline: "25 जनवरी 2025",
      positions: 2,
      description: "किसानां नै तकनीकी सहायता प्रदान करणो अर आधुनिक कृषि तकनीकां नै बढ़ावा देणो।",
      requirements: ["कृषि डिग्री", "क्षेत्रीय अनुभव", "दोपहिया लाइसेंस"],
      urgent: true,
    },
    {
      id: 4,
      title: "सामुदायिक स्वास्थ्य कार्यकर्ता",
      company: "राष्ट्रीय स्वास्थ्य मिशन, राजस्थान",
      category: "healthcare",
      location: "बूंदी जिला",
      salary: "₹18,000 - ₹25,000",
      type: "पूर्णकालिक",
      posted: "5 दिन पैली",
      deadline: "30 जनवरी 2025",
      positions: 8,
      description: "ग्रामीण समुदायां में बुनियादी स्वास्थ्य सेवाएं अर स्वास्थ्य शिक्षा प्रदान करणो।",
      requirements: ["12वीं पास", "स्वास्थ्य कार्यकर्ता प्रशिक्षण", "स्थानीय क्षेत्र रो ज्ञान"],
      urgent: false,
    },
    {
      id: 5,
      title: "डिजिटल साक्षरता प्रशिक्षक",
      company: "अदानी फाउंडेशन",
      category: "ngo",
      location: "लाखेरी, राजस्थान",
      salary: "₹15,000 - ₹22,000",
      type: "अनुबंध",
      posted: "1 दिन पैली",
      deadline: "10 जनवरी 2025",
      positions: 4,
      description: "ग्रामीण समुदायां नै बुनियादी कंप्यूटर कौशल अर डिजिटल सेवाओं में प्रशिक्षण देणो।",
      requirements: ["कंप्यूटर ज्ञान", "प्रशिक्षण अनुभव", "संचार कौशल"],
      urgent: true,
    },
    {
      id: 6,
      title: "डेटा एंट्री ऑपरेटर",
      company: "राजस्थान आईटी विभाग",
      category: "technology",
      location: "बूंदी, राजस्थान",
      salary: "₹12,000 - ₹18,000",
      type: "अंशकालिक",
      posted: "4 दिन पैली",
      deadline: "18 जनवरी 2025",
      positions: 6,
      description: "सरकारी रिकॉर्ड अर डेटाबेस दर्ज करणो अर बणाए राखणो।",
      requirements: ["कंप्यूटर प्रवाहता", "टाइपिंग गति 30 WPM", "विस्तार पर ध्यान"],
      urgent: false,
    },
  ],
}

const languageNames = {
  en: "English",
  hi: "हिंदी",
  mar: "मारवाड़ी",
}

export default function JobsPage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mar">("hi")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const t = translations[language]
  const jobs = jobsData[language]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "government":
        return "bg-blue-100 text-blue-800"
      case "private":
        return "bg-green-100 text-green-800"
      case "ngo":
        return "bg-purple-100 text-purple-800"
      case "agriculture":
        return "bg-yellow-100 text-yellow-800"
      case "education":
        return "bg-indigo-100 text-indigo-800"
      case "healthcare":
        return "bg-red-100 text-red-800"
      case "technology":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.backToHome}
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">{t.title}</h1>
                <p className="text-white/80">{t.subtitle}</p>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="flex bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
              {Object.entries(languageNames).map(([code, name]) => (
                <Button
                  key={code}
                  variant={language === code ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage(code as "en" | "hi" | "mar")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    language === code ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-green-300 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-green-300 focus:border-green-500">
                      <SelectValue placeholder={t.filterByCategory} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t.allCategories}</SelectItem>
                      <SelectItem value="government">{t.government}</SelectItem>
                      <SelectItem value="private">{t.private}</SelectItem>
                      <SelectItem value="ngo">{t.ngo}</SelectItem>
                      <SelectItem value="agriculture">{t.agriculture}</SelectItem>
                      <SelectItem value="education">{t.education}</SelectItem>
                      <SelectItem value="healthcare">{t.healthcare}</SelectItem>
                      <SelectItem value="technology">{t.technology}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                {filteredJobs.length} {t.jobsFound}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="bg-white/95 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getCategoryBadgeColor(job.category)}>
                          {t[job.category as keyof typeof t] as string}
                        </Badge>
                        {job.urgent && (
                          <Badge className="bg-red-500 text-white animate-pulse">
                            {language === "hi" ? "तत्काल" : language === "mar" ? "तत्काल" : "Urgent"}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-gray-900 mb-1">{job.title}</CardTitle>
                      <p className="text-gray-600 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{job.salary}</div>
                      <div className="text-sm text-gray-500">{job.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {job.positions} {t.positions}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {t.posted}: {job.posted}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {t.deadline}: {job.deadline}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {language === "hi" ? "आवश्यकताएं:" : language === "mar" ? "आवश्यकताएं:" : "Requirements:"}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.applyNow}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                    >
                      {t.viewDetails}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.noJobsFound}</h3>
              <p className="text-gray-600">
                {language === "hi"
                  ? "कृपया अपने खोज शब्दों या फ़िल्टर को बदलने का प्रयास करें।"
                  : language === "mar"
                    ? "कृपया अपणे खोज शब्दां या फ़िल्टर नै बदलण रो प्रयास करो।"
                    : "Please try changing your search terms or filters."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
