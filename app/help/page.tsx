"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const translations = {
  en: {
    title: "❓ Help Corner",
    backToHome: "← Back to Home",
    panchayatInfo: "🏛️ Panchayat Information",
    contactDetails: "📞 Contact Details",
    officeHours: "🕒 Office Hours",
    services: "🛠️ Services Provided",
    emergencyContacts: "🚨 Emergency Contacts",
    // Panchayat details
    sarpanch: "Sarpanch",
    upSarpanch: "Up-Sarpanch",
    secretary: "Panchayat Secretary",
    ward: "Ward",
    population: "Population",
    area: "Area",
    // Services
    birthCertificate: "Birth Certificate",
    deathCertificate: "Death Certificate",
    incomeCertificate: "Income Certificate",
    casteCertificate: "Caste Certificate",
    residenceCertificate: "Residence Certificate",
    rationCard: "Ration Card",
    // Contact info
    phone: "Phone",
    email: "Email",
    address: "Address",
    timings: "Timings",
    // Emergency
    police: "Police",
    hospital: "Hospital",
    fireService: "Fire Service",
    ambulance: "Ambulance",
  },
  hi: {
    title: "❓ सहायता केंद्र",
    backToHome: "← वापस होम पेज पर",
    panchayatInfo: "🏛️ पंचायत की जानकारी",
    contactDetails: "📞 संपर्क विवरण",
    officeHours: "🕒 कार्यालय समय",
    services: "🛠️ प्रदान की जाने वाली सेवाएं",
    emergencyContacts: "🚨 आपातकालीन संपर्क",
    // Panchayat details
    sarpanch: "सरपंच",
    upSarpanch: "उप-सरपंच",
    secretary: "पंचायत सचिव",
    ward: "वार्ड",
    population: "जनसंख्या",
    area: "क्षेत्रफल",
    // Services
    birthCertificate: "जन्म प्रमाण पत्र",
    deathCertificate: "मृत्यु प्रमाण पत्र",
    incomeCertificate: "आय प्रमाण पत्र",
    casteCertificate: "जाति प्रमाण पत्र",
    residenceCertificate: "निवास प्रमाण पत्र",
    rationCard: "राशन कार्ड",
    // Contact info
    phone: "फोन",
    email: "ईमेल",
    address: "पता",
    timings: "समय",
    // Emergency
    police: "पुलिस",
    hospital: "अस्पताल",
    fireService: "अग्निशमन सेवा",
    ambulance: "एम्बुलेंस",
  },
}

const panchayatData = {
  name: "Gram Panchayat Utrana",
  nameHi: "ग्राम पंचायत उतराना",
  sarpanch: {
    name: "Smt. Badri Bai Gurjar",
    nameHi: "श्रीमती बद्री बाई गुर्जर",
    phone: "+91 7568459199",
    email: "sarpanch.utrana@rajasthan.gov.in",
    residence: "Village Chamavali, Tehsil Indragarh, District Bundi (Raj.)",
    residenceHi: "ग्राम - चमावली, तह. इन्द्रगढ़, जिला बून्दी (राज.)",
  },
  upSarpanch: {
    name: "Information Not Available",
    nameHi: "जानकारी उपलब्ध नहीं",
    phone: "Contact Sarpanch for details",
    email: "Contact through main office",
  },
  secretary: {
    name: "Badri Bai (Administrator)",
    nameHi: "बद्री बाई (प्रशासक)",
    phone: "+91 7568459199",
    email: "admin.utrana@rajasthan.gov.in",
  },
  address: "Gurjar Basti, Utrana, Panchayat Samiti Keshavray Patan, District Bundi, Rajasthan",
  addressHi: "गुर्जर बस्ती, उतराना, पंचायत समिति केशवराय पाटन, जिला बून्दी, राजस्थान",
  district: "Bundi",
  districtHi: "बून्दी",
  block: "Keshavray Patan",
  blockHi: "केशवराय पाटन",
  state: "Rajasthan",
  stateHi: "राजस्थान",
  population: "Information to be updated",
  area: "Information to be updated",
  wards: "Information to be updated",
}

const services = [
  { id: "birth", nameEn: "Birth Certificate", nameHi: "जन्म प्रमाण पत्र", fee: "₹50", time: "7 days" },
  { id: "death", nameEn: "Death Certificate", nameHi: "मृत्यु प्रमाण पत्र", fee: "₹50", time: "7 days" },
  { id: "income", nameEn: "Income Certificate", nameHi: "आय प्रमाण पत्र", fee: "₹100", time: "15 days" },
  { id: "caste", nameEn: "Caste Certificate", nameHi: "जाति प्रमाण पत्र", fee: "₹100", time: "15 days" },
  { id: "residence", nameEn: "Residence Certificate", nameHi: "निवास प्रमाण पत्र", fee: "₹75", time: "10 days" },
  { id: "ration", nameEn: "Ration Card", nameHi: "राशन कार्ड", fee: "Free", time: "30 days" },
]

const emergencyContacts = [
  { service: "Police", serviceHi: "पुलिस", number: "100", local: "+91 9876543220" },
  { service: "Hospital", serviceHi: "अस्पताल", number: "108", local: "+91 9876543221" },
  { service: "Fire Service", serviceHi: "अग्निशमन सेवा", number: "101", local: "+91 9876543222" },
  { service: "Ambulance", serviceHi: "एम्बुलेंस", number: "108", local: "+91 9876543223" },
]

export default function HelpPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 relative overflow-hidden">
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
          <h1 className="text-4xl font-bold text-orange-800 mb-4">{t.title}</h1>
          <p className="text-orange-600 text-lg">
            {language === "hi"
              ? "आपकी सभी सरकारी सेवाओं की जानकारी एक स्थान पर"
              : "All your government services information in one place"}
          </p>
        </div>

        {/* Panchayat Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">{t.panchayatInfo}</h2>

          {/* Basic Info */}
          <Card className="border-orange-200 shadow-lg mb-6">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
              <CardTitle className="text-orange-800 text-2xl text-center">
                {language === "hi" ? "ग्राम पंचायत उतराना" : "Gram Panchayat Utrana"}
                <div className="text-sm text-orange-600 mt-2">
                  {language === "hi" ? "जिला बून्दी, राजस्थान" : "District Bundi, Rajasthan"}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-800">{panchayatData.population}</div>
                  <div className="text-blue-600">{t.population}</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-800">{panchayatData.area}</div>
                  <div className="text-green-600">{t.area}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-800">{panchayatData.wards}</div>
                  <div className="text-purple-600">{t.ward}s</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Sarpanch */}
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-green-800 text-center">{t.sarpanch}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">👨‍💼</div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {language === "hi" ? panchayatData.sarpanch.nameHi : panchayatData.sarpanch.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span>{panchayatData.sarpanch.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📧</span>
                    <span className="text-xs">{panchayatData.sarpanch.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🏠</span>
                    <span className="text-xs text-center">
                      {language === "hi" ? panchayatData.sarpanch.residenceHi : panchayatData.sarpanch.residence}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Up-Sarpanch */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-blue-800 text-center">{t.upSarpanch}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">👩‍💼</div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {language === "hi" ? panchayatData.upSarpanch.nameHi : panchayatData.upSarpanch.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span>{panchayatData.upSarpanch.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📧</span>
                    <span className="text-xs">{panchayatData.upSarpanch.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secretary */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-purple-800 text-center">{t.secretary}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  {language === "hi" ? panchayatData.secretary.nameHi : panchayatData.secretary.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span>{panchayatData.secretary.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📧</span>
                    <span className="text-xs">{panchayatData.secretary.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Hours & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-yellow-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardTitle className="text-yellow-800">{t.officeHours}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🕘</span>
                  <div>
                    <p className="font-medium text-yellow-800">
                      {language === "hi" ? "सोमवार - शुक्रवार" : "Monday - Friday"}
                    </p>
                    <p className="text-yellow-600">10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-medium text-yellow-800">{language === "hi" ? "शनिवार" : "Saturday"}</p>
                    <p className="text-yellow-600">10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <p className="font-medium text-yellow-800">{language === "hi" ? "रविवार" : "Sunday"}</p>
                    <p className="text-yellow-600">{language === "hi" ? "बंद" : "Closed"}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
              <CardTitle className="text-red-800">{t.address}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="text-red-800 font-medium mb-2">
                    {language === "hi" ? panchayatData.addressHi : panchayatData.address}
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    {language === "hi" ? "मैप में देखें" : "View on Map"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Provided */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">{t.services}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                    {language === "hi" ? service.nameHi : service.nameEn}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-indigo-600">{language === "hi" ? "शुल्क:" : "Fee:"}</span>
                      <Badge className="bg-green-100 text-green-800">{service.fee}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-600">{language === "hi" ? "समय:" : "Time:"}</span>
                      <Badge className="bg-blue-100 text-blue-800">{service.time}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">{t.emergencyContacts}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="border-red-200 shadow-lg bg-gradient-to-br from-red-50 to-pink-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🚨</div>
                  <h3 className="text-lg font-semibold text-red-800 mb-3">
                    {language === "hi" ? contact.serviceHi : contact.service}
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-red-100 rounded-lg p-2">
                      <p className="text-red-800 font-bold text-xl">{contact.number}</p>
                      <p className="text-red-600 text-xs">{language === "hi" ? "राष्ट्रीय" : "National"}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-2">
                      <p className="text-red-700 font-medium">{contact.local}</p>
                      <p className="text-red-600 text-xs">{language === "hi" ? "स्थानीय" : "Local"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <Card className="border-orange-200 shadow-lg bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-orange-800 mb-4">
              {language === "hi" ? "और सहायता चाहिए?" : "Need More Help?"}
            </h3>
            <p className="text-orange-600 mb-6 text-lg">
              {language === "hi" ? "हमारी टीम आपकी सहायता के लिए हमेशा तैयार है" : "Our team is always ready to help you"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                {language === "hi" ? "📞 कॉल करें" : "📞 Call Us"}
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                {language === "hi" ? "💬 चैट करें" : "💬 Chat with Us"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
