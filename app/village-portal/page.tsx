"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const translations = {
  en: {
    title: "🌐 Village Portal",
    backToHome: "← Back to Home",
    businessDirectory: "Business Directory",
    jobPortal: "Job Portal",
    eventCalendar: "Event Calendar",
    newsUpdates: "News & Updates",
    emergencyServices: "Emergency Services",
    onlineServices: "Online Services",
    villageMap: "Village Map",
    contactDirectory: "Contact Directory",
    // Business Directory
    localBusinesses: "Local Businesses",
    shopOwners: "Shop Owners",
    serviceProviders: "Service Providers",
    viewContact: "View Contact",
    openNow: "Open Now",
    closed: "Closed",
    // Job Portal
    availableJobs: "Available Jobs",
    skillTraining: "Skill Training",
    postJob: "Post Job",
    applyNow: "Apply Now",
    experience: "Experience",
    salary: "Salary",
    // Events
    upcomingEvents: "Upcoming Events",
    registerEvent: "Register for Event",
    eventDetails: "Event Details",
    // Emergency
    police: "Police",
    hospital: "Hospital",
    fireService: "Fire Service",
    ambulance: "Ambulance",
    call: "Call",
  },
  hi: {
    title: "🌐 गांव पोर्टल",
    backToHome: "← वापस होम पेज पर",
    businessDirectory: "व्यापार निर्देशिका",
    jobPortal: "नौकरी पोर्टल",
    eventCalendar: "कार्यक्रम कैलेंडर",
    newsUpdates: "समाचार और अपडेट",
    emergencyServices: "आपातकालीन सेवाएं",
    onlineServices: "ऑनलाइन सेवाएं",
    villageMap: "गांव का नक्शा",
    contactDirectory: "संपर्क निर्देशिका",
    // Business Directory
    localBusinesses: "स्थानीय व्यापार",
    shopOwners: "दुकान मालिक",
    serviceProviders: "सेवा प्रदाता",
    viewContact: "संपर्क देखें",
    openNow: "अभी खुला",
    closed: "बंद",
    // Job Portal
    availableJobs: "उपलब्ध नौकरियां",
    skillTraining: "कौशल प्रशिक्षण",
    postJob: "नौकरी पोस्ट करें",
    applyNow: "अभी आवेदन करें",
    experience: "अनुभव",
    salary: "वेतन",
    // Events
    upcomingEvents: "आगामी कार्यक्रम",
    registerEvent: "कार्यक्रम के लिए पंजीकरण",
    eventDetails: "कार्यक्रम विवरण",
    // Emergency
    police: "पुलिस",
    hospital: "अस्पताल",
    fireService: "अग्निशमन सेवा",
    ambulance: "एम्बुलेंस",
    call: "कॉल करें",
  },
}

const businessData = [
  {
    id: 1,
    name: "Sharma General Store",
    nameHi: "शर्मा जनरल स्टोर",
    category: "Grocery",
    categoryHi: "किराना",
    owner: "Ramesh Sharma",
    ownerHi: "रमेश शर्मा",
    phone: "+91 9876543210",
    address: "Main Market, Utrana",
    addressHi: "मुख्य बाजार, उतराना",
    timing: "6:00 AM - 10:00 PM",
    status: "open",
  },
  {
    id: 2,
    name: "Patel Medical Store",
    nameHi: "पटेल मेडिकल स्टोर",
    category: "Pharmacy",
    categoryHi: "दवाखाना",
    owner: "Dr. Suresh Patel",
    ownerHi: "डॉ. सुरेश पटेल",
    phone: "+91 9876543211",
    address: "Near Health Center",
    addressHi: "स्वास्थ्य केंद्र के पास",
    timing: "8:00 AM - 9:00 PM",
    status: "open",
  },
  {
    id: 3,
    name: "Kumar Electronics",
    nameHi: "कुमार इलेक्ट्रॉनिक्स",
    category: "Electronics",
    categoryHi: "इलेक्ट्रॉनिक्स",
    owner: "Vijay Kumar",
    ownerHi: "विजय कुमार",
    phone: "+91 9876543212",
    address: "Bus Stand Road",
    addressHi: "बस स्टैंड रोड",
    timing: "9:00 AM - 8:00 PM",
    status: "closed",
  },
]

const jobData = [
  {
    id: 1,
    title: "Computer Operator",
    titleHi: "कंप्यूटर ऑपरेटर",
    company: "Panchayat Office",
    companyHi: "पंचायत कार्यालय",
    location: "Utrana",
    locationHi: "उतराना",
    salary: "₹15,000 - ₹20,000",
    experience: "1-2 years",
    experienceHi: "1-2 साल",
    type: "Full Time",
    typeHi: "पूर्णकालिक",
    posted: "2 days ago",
    postedHi: "2 दिन पहले",
  },
  {
    id: 2,
    title: "Agriculture Assistant",
    titleHi: "कृषि सहायक",
    company: "Agriculture Department",
    companyHi: "कृषि विभाग",
    location: "Bundi District",
    locationHi: "बून्दी जिला",
    salary: "₹18,000 - ₹25,000",
    experience: "0-1 years",
    experienceHi: "0-1 साल",
    type: "Government",
    typeHi: "सरकारी",
    posted: "5 days ago",
    postedHi: "5 दिन पहले",
  },
  {
    id: 3,
    title: "Mobile Repair Technician",
    titleHi: "मोबाइल रिपेयर तकनीशियन",
    company: "Tech Solutions",
    companyHi: "टेक सॉल्यूशन्स",
    location: "Utrana",
    locationHi: "उतराना",
    salary: "₹12,000 - ₹18,000",
    experience: "6 months",
    experienceHi: "6 महीने",
    type: "Part Time",
    typeHi: "अंशकालिक",
    posted: "1 week ago",
    postedHi: "1 सप्ताह पहले",
  },
]

const eventData = [
  {
    id: 1,
    title: "Health Checkup Camp",
    titleHi: "स्वास्थ्य जांच शिविर",
    date: "2025-01-25",
    time: "9:00 AM - 4:00 PM",
    venue: "Primary Health Center",
    venueHi: "प्राथमिक स्वास्थ्य केंद्र",
    description: "Free health checkup for all villagers",
    descriptionHi: "सभी ग्रामीणों के लिए निःशुल्क स्वास्थ्य जांच",
    organizer: "Health Department",
    organizerHi: "स्वास्थ्य विभाग",
  },
  {
    id: 2,
    title: "Skill Development Workshop",
    titleHi: "कौशल विकास कार्यशाला",
    date: "2025-02-01",
    time: "10:00 AM - 5:00 PM",
    venue: "Community Hall",
    venueHi: "सामुदायिक हॉल",
    description: "Computer and digital literacy training",
    descriptionHi: "कंप्यूटर और डिजिटल साक्षरता प्रशिक्षण",
    organizer: "Education Committee",
    organizerHi: "शिक्षा समिति",
  },
  {
    id: 3,
    title: "Farmers' Meeting",
    titleHi: "किसान सभा",
    date: "2025-02-05",
    time: "6:00 PM - 8:00 PM",
    venue: "Village Chaupal",
    venueHi: "गांव चौपाल",
    description: "Discussion on new agricultural schemes",
    descriptionHi: "नई कृषि योजनाओं पर चर्चा",
    organizer: "Farmers Association",
    organizerHi: "किसान संघ",
  },
]

const emergencyContacts = [
  { service: "Police", serviceHi: "पुलिस", number: "100", local: "+91 9876543220", icon: "🚔" },
  { service: "Hospital", serviceHi: "अस्पताल", number: "108", local: "+91 9876543221", icon: "🏥" },
  { service: "Fire Service", serviceHi: "अग्निशमन सेवा", number: "101", local: "+91 9876543222", icon: "🚒" },
  { service: "Ambulance", serviceHi: "एम्बुलेंस", number: "108", local: "+91 9876543223", icon: "🚑" },
]

export default function VillagePortalPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const t = translations[language]

  const getStatusColor = (status: string) => {
    return status === "open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  const getJobTypeColor = (type: string) => {
    const colors = {
      "Full Time": "bg-blue-100 text-blue-800",
      "Part Time": "bg-yellow-100 text-yellow-800",
      Government: "bg-green-100 text-green-800",
      पूर्णकालिक: "bg-blue-100 text-blue-800",
      अंशकालिक: "bg-yellow-100 text-yellow-800",
      सरकारी: "bg-green-100 text-green-800",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-300 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-slate-600 hover:text-slate-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-slate-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-slate-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-slate-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{t.title}</h1>
          <p className="text-slate-600 text-lg">
            {language === "hi" ? "आपके गांव की संपूर्ण डिजिटल सेवाएं" : "Complete digital services for your village"}
          </p>
        </div>

        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="business" className="text-xs">
              🏪 {language === "hi" ? "व्यापार" : "Business"}
            </TabsTrigger>
            <TabsTrigger value="jobs" className="text-xs">
              💼 {language === "hi" ? "नौकरी" : "Jobs"}
            </TabsTrigger>
            <TabsTrigger value="events" className="text-xs">
              📅 {language === "hi" ? "कार्यक्रम" : "Events"}
            </TabsTrigger>
            <TabsTrigger value="emergency" className="text-xs">
              🚨 {language === "hi" ? "आपातकाल" : "Emergency"}
            </TabsTrigger>
            <TabsTrigger value="services" className="text-xs">
              🛠️ {language === "hi" ? "सेवाएं" : "Services"}
            </TabsTrigger>
            <TabsTrigger value="map" className="text-xs">
              🗺️ {language === "hi" ? "नक्शा" : "Map"}
            </TabsTrigger>
            <TabsTrigger value="news" className="text-xs">
              📰 {language === "hi" ? "समाचार" : "News"}
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-xs">
              📞 {language === "hi" ? "संपर्क" : "Contact"}
            </TabsTrigger>
          </TabsList>

          {/* Business Directory Tab */}
          <TabsContent value="business">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessData.map((business) => (
                <Card key={business.id} className="border-blue-200 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-blue-800 text-lg">
                          {language === "hi" ? business.nameHi : business.name}
                        </CardTitle>
                        <p className="text-blue-600">{language === "hi" ? business.categoryHi : business.category}</p>
                      </div>
                      <Badge className={getStatusColor(business.status)}>
                        {business.status === "open" ? t.openNow : t.closed}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-blue-600">Owner:</p>
                      <p className="font-medium text-blue-800">
                        {language === "hi" ? business.ownerHi : business.owner}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-600">Address:</p>
                      <p className="font-medium text-blue-800">
                        {language === "hi" ? business.addressHi : business.address}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-600">Timing:</p>
                      <p className="font-medium text-blue-800">{business.timing}</p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">📞 {t.viewContact}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Job Portal Tab */}
          <TabsContent value="jobs">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">{t.availableJobs}</h2>
                <Button className="bg-green-600 hover:bg-green-700">+ {t.postJob}</Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobData.map((job) => (
                  <Card key={job.id} className="border-green-200 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-green-800 text-lg">
                            {language === "hi" ? job.titleHi : job.title}
                          </CardTitle>
                          <p className="text-green-600">{language === "hi" ? job.companyHi : job.company}</p>
                        </div>
                        <Badge className={getJobTypeColor(language === "hi" ? job.typeHi : job.type)}>
                          {language === "hi" ? job.typeHi : job.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-green-600">{t.salary}:</p>
                          <p className="font-medium text-green-800">{job.salary}</p>
                        </div>
                        <div>
                          <p className="text-sm text-green-600">{t.experience}:</p>
                          <p className="font-medium text-green-800">
                            {language === "hi" ? job.experienceHi : job.experience}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-green-600">Location:</p>
                        <p className="font-medium text-green-800">
                          {language === "hi" ? job.locationHi : job.location}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-green-500">{language === "hi" ? job.postedHi : job.posted}</p>
                        <Button className="bg-green-600 hover:bg-green-700">{t.applyNow}</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">{t.upcomingEvents}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {eventData.map((event) => (
                  <Card key={event.id} className="border-purple-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-purple-800 text-lg">
                        {language === "hi" ? event.titleHi : event.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-purple-600">
                        <span>📅 {event.date}</span>
                        <span>🕒 {event.time}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm text-purple-600">Venue:</p>
                        <p className="font-medium text-purple-800">{language === "hi" ? event.venueHi : event.venue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-purple-600">Description:</p>
                        <p className="font-medium text-purple-800">
                          {language === "hi" ? event.descriptionHi : event.description}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-purple-600">Organizer:</p>
                        <p className="font-medium text-purple-800">
                          {language === "hi" ? event.organizerHi : event.organizer}
                        </p>
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">{t.registerEvent}</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Emergency Services Tab */}
          <TabsContent value="emergency">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border-red-200 shadow-lg bg-gradient-to-br from-red-50 to-pink-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{contact.icon}</div>
                    <h3 className="text-lg font-semibold text-red-800 mb-3">
                      {language === "hi" ? contact.serviceHi : contact.service}
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-red-100 rounded-lg p-3">
                        <p className="text-red-800 font-bold text-xl">{contact.number}</p>
                        <p className="text-red-600 text-xs">{language === "hi" ? "राष्ट्रीय" : "National"}</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-red-700 font-medium">{contact.local}</p>
                        <p className="text-red-600 text-xs">{language === "hi" ? "स्थानीय" : "Local"}</p>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700">📞 {t.call}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tabs can be added similarly */}
          <TabsContent value="services">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{t.onlineServices}</h2>
              <p className="text-slate-600">Online services section coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="map">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{t.villageMap}</h2>
              <p className="text-slate-600">Interactive village map coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="news">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{t.newsUpdates}</h2>
              <p className="text-slate-600">Latest news and updates coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{t.contactDirectory}</h2>
              <p className="text-slate-600">Complete contact directory coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
