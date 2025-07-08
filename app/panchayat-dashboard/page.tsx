"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const translations = {
  en: {
    title: "📊 Panchayat Dashboard",
    backToHome: "← Back to Home",
    nextMeeting: "📅 Next Panchayat Meeting",
    currentProjects: "🚧 Current Projects",
    budgetOverview: "💰 Budget Overview",
    recentDecisions: "📋 Recent Decisions",
    meetingDetails: "Meeting Details",
    agenda: "Agenda",
    venue: "Venue",
    time: "Time",
    attendees: "Expected Attendees",
    projectStatus: "Project Status",
    completion: "Completion",
    budget: "Budget",
    timeline: "Timeline",
    contractor: "Contractor",
    viewDetails: "View Details",
    joinMeeting: "Join Meeting",
    // Projects
    roadConstruction: "Village Road Construction",
    waterSupply: "Water Supply Enhancement",
    schoolBuilding: "School Building Renovation",
    healthCenter: "Primary Health Center Upgrade",
    // Budget categories
    infrastructure: "Infrastructure",
    education: "Education",
    health: "Health",
    welfare: "Welfare Schemes",
  },
  hi: {
    title: "📊 पंचायत डैशबोर्ड",
    backToHome: "← वापस होम पेज पर",
    nextMeeting: "📅 अगली पंचायत बैठक",
    currentProjects: "🚧 चालू परियोजनाएं",
    budgetOverview: "💰 बजट अवलोकन",
    recentDecisions: "📋 हाल के निर्णय",
    meetingDetails: "बैठक विवरण",
    agenda: "कार्यसूची",
    venue: "स्थान",
    time: "समय",
    attendees: "अपेक्षित उपस्थित",
    projectStatus: "परियोजना स्थिति",
    completion: "पूर्णता",
    budget: "बजट",
    timeline: "समयसीमा",
    contractor: "ठेकेदार",
    viewDetails: "विवरण देखें",
    joinMeeting: "बैठक में शामिल हों",
    // Projects
    roadConstruction: "गांव सड़क निर्माण",
    waterSupply: "जल आपूर्ति सुधार",
    schoolBuilding: "स्कूल भवन नवीनीकरण",
    healthCenter: "प्राथमिक स्वास्थ्य केंद्र उन्नयन",
    // Budget categories
    infrastructure: "बुनियादी ढांचा",
    education: "शिक्षा",
    health: "स्वास्थ्य",
    welfare: "कल्याण योजनाएं",
  },
}

const nextMeeting = {
  date: "January 18, 2025",
  dateHi: "18 जनवरी, 2025",
  time: "10:00 AM",
  venue: "Panchayat Bhawan, Utrana",
  venueHi: "पंचायत भवन, उतराना",
  agenda: [
    "Review of ongoing development projects",
    "Discussion on water supply issues",
    "Approval of new road construction proposal",
    "Budget allocation for health center upgrade",
  ],
  agendaHi: [
    "चालू विकास परियोजनाओं की समीक्षा",
    "जल आपूर्ति मुद्दों पर चर्चा",
    "नई सड़क निर्माण प्रस्ताव की मंजूरी",
    "स्वास्थ्य केंद्र उन्नयन के लिए बजट आवंटन",
  ],
  expectedAttendees: 15,
}

const currentProjects = [
  {
    id: 1,
    nameEn: "Village Road Construction",
    nameHi: "गांव सड़क निर्माण",
    completion: 75,
    budget: "₹12,00,000",
    spent: "₹9,00,000",
    timeline: "March 2025",
    timelineHi: "मार्च 2025",
    contractor: "Rajasthan Construction Ltd.",
    contractorHi: "राजस्थान कंस्ट्रक्शन लिमिटेड",
    status: "On Track",
    statusHi: "समय पर",
    description: "Construction of 2.5 km concrete road connecting village to main highway",
    descriptionHi: "गांव को मुख्य राजमार्ग से जोड़ने वाली 2.5 किमी कंक्रीट सड़क का निर्माण",
  },
  {
    id: 2,
    nameEn: "Water Supply Enhancement",
    nameHi: "जल आपूर्ति सुधार",
    completion: 45,
    budget: "₹8,50,000",
    spent: "₹3,82,500",
    timeline: "April 2025",
    timelineHi: "अप्रैल 2025",
    contractor: "Jal Shakti Contractors",
    contractorHi: "जल शक्ति कॉन्ट्रैक्टर्स",
    status: "In Progress",
    statusHi: "प्रगति में",
    description: "Installation of new water pumps and pipeline network",
    descriptionHi: "नए जल पंप और पाइपलाइन नेटवर्क की स्थापना",
  },
  {
    id: 3,
    nameEn: "School Building Renovation",
    nameHi: "स्कूल भवन नवीनीकरण",
    completion: 90,
    budget: "₹6,00,000",
    spent: "₹5,40,000",
    timeline: "February 2025",
    timelineHi: "फरवरी 2025",
    contractor: "Education Infrastructure Pvt. Ltd.",
    contractorHi: "एजुकेशन इंफ्रास्ट्रक्चर प्राइवेट लिमिटेड",
    status: "Near Completion",
    statusHi: "पूर्णता के निकट",
    description: "Complete renovation of primary school building with new classrooms",
    descriptionHi: "नई कक्षाओं के साथ प्राथमिक विद्यालय भवन का पूर्ण नवीनीकरण",
  },
  {
    id: 4,
    nameEn: "Primary Health Center Upgrade",
    nameHi: "प्राथमिक स्वास्थ्य केंद्र उन्नयन",
    completion: 25,
    budget: "₹15,00,000",
    spent: "₹3,75,000",
    timeline: "June 2025",
    timelineHi: "जून 2025",
    contractor: "Health Infrastructure Solutions",
    contractorHi: "हेल्थ इंफ्रास्ट्रक्चर सॉल्यूशन्स",
    status: "Started",
    statusHi: "शुरू",
    description: "Modernization of health center with new equipment and facilities",
    descriptionHi: "नए उपकरण और सुविधाओं के साथ स्वास्थ्य केंद्र का आधुनिकीकरण",
  },
]

const budgetData = [
  { category: "infrastructure", amount: 2500000, percentage: 45, color: "bg-blue-500" },
  { category: "education", amount: 1200000, percentage: 22, color: "bg-green-500" },
  { category: "health", amount: 1000000, percentage: 18, color: "bg-red-500" },
  { category: "welfare", amount: 800000, percentage: 15, color: "bg-yellow-500" },
]

const recentDecisions = [
  {
    id: 1,
    titleEn: "Approval for New Hand Pump Installation",
    titleHi: "नए हैंड पंप स्थापना की मंजूरी",
    date: "January 10, 2025",
    dateHi: "10 जनवरी, 2025",
    status: "Approved",
    statusHi: "मंजूर",
  },
  {
    id: 2,
    titleEn: "Budget Allocation for Street Light Repair",
    titleHi: "स्ट्रीट लाइट मरम्मत के लिए बजट आवंटन",
    date: "January 8, 2025",
    dateHi: "8 जनवरी, 2025",
    status: "Approved",
    statusHi: "मंजूर",
  },
  {
    id: 3,
    titleEn: "Proposal for Community Hall Construction",
    titleHi: "सामुदायिक हॉल निर्माण का प्रस्ताव",
    date: "January 5, 2025",
    dateHi: "5 जनवरी, 2025",
    status: "Under Review",
    statusHi: "समीक्षाधीन",
  },
]

export default function PanchayatDashboardPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const t = translations[language]

  const getStatusColor = (status: string) => {
    const colors = {
      "On Track": "bg-green-100 text-green-800",
      "In Progress": "bg-blue-100 text-blue-800",
      "Near Completion": "bg-purple-100 text-purple-800",
      Started: "bg-yellow-100 text-yellow-800",
      "समय पर": "bg-green-100 text-green-800",
      "प्रगति में": "bg-blue-100 text-blue-800",
      "पूर्णता के निकट": "bg-purple-100 text-purple-800",
      शुरू: "bg-yellow-100 text-yellow-800",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const PieChart = ({ data }: { data: typeof budgetData }) => (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {data.map((item, index) => {
          const startAngle = data.slice(0, index).reduce((sum, d) => sum + d.percentage * 3.6, 0)
          const endAngle = startAngle + item.percentage * 3.6
          const largeArcFlag = item.percentage > 50 ? 1 : 0

          const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
          const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
          const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
          const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

          return (
            <path
              key={index}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
              className={item.color}
              fill="currentColor"
            />
          )
        })}
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-300 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-green-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-green-600 text-white shadow-sm" : "text-green-600 hover:bg-green-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-green-600 text-white shadow-sm" : "text-green-600 hover:bg-green-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">{t.title}</h1>
          <p className="text-green-600 text-lg">
            {language === "hi" ? "ग्राम पंचायत उतराना - पारदर्शी शासन" : "Gram Panchayat Utrana - Transparent Governance"}
          </p>
        </div>

        {/* Next Meeting Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{t.nextMeeting}</h2>
          <Card className="border-blue-200 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-2xl text-center">
                {language === "hi" ? nextMeeting.dateHi : nextMeeting.date}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🕒</div>
                  <p className="font-medium text-blue-800">{t.time}</p>
                  <p className="text-blue-600">{nextMeeting.time}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="font-medium text-blue-800">{t.venue}</p>
                  <p className="text-blue-600">{language === "hi" ? nextMeeting.venueHi : nextMeeting.venue}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">👥</div>
                  <p className="font-medium text-blue-800">{t.attendees}</p>
                  <p className="text-blue-600">{nextMeeting.expectedAttendees}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">{t.agenda}:</h4>
                <ul className="space-y-2">
                  {(language === "hi" ? nextMeeting.agendaHi : nextMeeting.agenda).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-blue-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">{t.joinMeeting}</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Projects Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{t.currentProjects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project) => (
              <Card key={project.id} className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-green-800 text-lg flex-1">
                      {language === "hi" ? project.nameHi : project.nameEn}
                    </CardTitle>
                    <Badge className={getStatusColor(language === "hi" ? project.statusHi : project.status)}>
                      {language === "hi" ? project.statusHi : project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-700 text-sm">
                    {language === "hi" ? project.descriptionHi : project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-green-700">{t.completion}</span>
                        <span className="text-green-800 font-medium">{project.completion}%</span>
                      </div>
                      <Progress value={project.completion} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-green-600">{t.budget}:</p>
                        <p className="font-medium text-green-800">{project.budget}</p>
                        <p className="text-green-600">Spent: {project.spent}</p>
                      </div>
                      <div>
                        <p className="text-green-600">{t.timeline}:</p>
                        <p className="font-medium text-green-800">
                          {language === "hi" ? project.timelineHi : project.timeline}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-green-600 text-sm">{t.contractor}:</p>
                      <p className="font-medium text-green-800 text-sm">
                        {language === "hi" ? project.contractorHi : project.contractor}
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">{t.viewDetails}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Budget Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800 text-2xl text-center">{t.budgetOverview}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <PieChart data={budgetData} />
              <div className="mt-6 space-y-3">
                {budgetData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <span className="text-purple-700">{t[item.category as keyof typeof t] || item.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-purple-800">₹{(item.amount / 100000).toFixed(1)}L</p>
                      <p className="text-sm text-purple-600">{item.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-800 text-2xl text-center">{t.recentDecisions}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentDecisions.map((decision) => (
                  <div key={decision.id} className="border-l-4 border-orange-300 pl-4 py-2">
                    <h4 className="font-medium text-orange-800">
                      {language === "hi" ? decision.titleHi : decision.titleEn}
                    </h4>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm text-orange-600">{language === "hi" ? decision.dateHi : decision.date}</p>
                      <Badge
                        className={
                          decision.status === "Approved" || decision.statusHi === "मंजूर"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {language === "hi" ? decision.statusHi : decision.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <Card className="border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-800">4</div>
                <div className="text-green-600">{language === "hi" ? "सक्रिय परियोजनाएं" : "Active Projects"}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-800">₹41.5L</div>
                <div className="text-blue-600">{language === "hi" ? "कुल बजट" : "Total Budget"}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-800">59%</div>
                <div className="text-purple-600">{language === "hi" ? "औसत प्रगति" : "Average Progress"}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-800">3</div>
                <div className="text-orange-600">{language === "hi" ? "हाल के निर्णय" : "Recent Decisions"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
