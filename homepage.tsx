"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

const translations = {
  en: {
    welcome: "Welcome",
    villageName: "Village Utrana",
    subtitle: "Digital Revolution in Rural Governance",
    description:
      "Empowering our community through technology, transparency, and efficient governance. Join us in building a digitally connected village.",
    ourServices: "Our Services",
    servicesSubtitle: "Comprehensive digital solutions for village administration and community engagement",
    stats: {
      population: "Population",
      households: "Households",
      projects: "Active Projects",
      satisfaction: "Satisfaction Rate",
    },
    about: {
      title: "About Utrana",
      description:
        "Located in Tehsil Keshavray Patan, District Bundi, Rajasthan, Village Utrana is pioneering digital governance in rural India. Our commitment to transparency, efficiency, and community engagement drives us forward.",
      features: [
        "Digital-first governance approach",
        "Transparent decision making",
        "Community-driven development",
        "Sustainable rural practices",
      ],
    },
    contact: {
      title: "Contact Information",
      address: "Village Utrana, Tehsil Keshavray Patan, District Bundi, Rajasthan",
      phone: "Phone: +91 7568459199",
      email: "Email: admin.utrana@rajasthan.gov.in",
      office: "Panchayat Office Hours: 9:00 AM - 5:00 PM",
    },
    services: [
      {
        title: "Submit Complaint",
        description: "Report issues and track resolution status in real-time",
        icon: "📝",
        href: "/complaint",
        color: "bg-red-500",
      },
      {
        title: "Student Resources",
        description: "Educational materials, scholarships, and academic support",
        icon: "🎓",
        href: "/student-resources",
        color: "bg-blue-500",
      },
      {
        title: "Suggest Ideas",
        description: "Share your innovative ideas for village development",
        icon: "💡",
        href: "/suggest-idea",
        color: "bg-yellow-500",
      },
      {
        title: "Help Center",
        description: "Get assistance and find answers to common questions",
        icon: "❓",
        href: "/help",
        color: "bg-purple-500",
      },
      {
        title: "Village Voices",
        description: "Latest news, announcements, and community updates",
        icon: "📢",
        href: "/village-voices",
        color: "bg-green-500",
      },
      {
        title: "Panchayat Dashboard",
        description: "Meetings, projects, budget tracking, and governance data",
        icon: "📊",
        href: "/panchayat-dashboard",
        color: "bg-indigo-500",
      },
      {
        title: "Weather & Agriculture",
        description: "Real-time weather updates and farming guidance",
        icon: "🌾",
        href: "/weather",
        color: "bg-orange-500",
      },
      {
        title: "Village Feedback",
        description: "Share your feedback and photos to help improve our village",
        icon: "💬",
        href: "/feedback",
        color: "bg-pink-500",
      },
      {
        title: "Government Services",
        description: "Apply for schemes, track applications, and access certificates",
        icon: "🏛️",
        href: "/government-services",
        color: "bg-teal-500",
      },
    ],
  },
  hi: {
    welcome: "स्वागत है",
    villageName: "गांव उतराना में",
    subtitle: "ग्रामीण शासन में डिजिटल क्रांति",
    description:
      "तकनीक, पारदर्शिता और कुशल शासन के माध्यम से हमारे समुदाय को सशक्त बनाना। डिजिटल रूप से जुड़े गांव के निर्माण में हमारे साथ जुड़ें।",
    ourServices: "हमारी सेवाएं",
    servicesSubtitle: "गांव प्रशासन और सामुदायिक सहभागिता के लिए व्यापक डिजिटल समाधान",
    stats: {
      population: "जनसंख्या",
      households: "परिवार",
      projects: "सक्रिय परियोजनाएं",
      satisfaction: "संतुष्टि दर",
    },
    about: {
      title: "उतराना के बारे में",
      description:
        "तहसील केशवराय पाटन, जिला बून्दी, राजस्थान में स्थित, गांव उतराना भारत के ग्रामीण क्षेत्रों में डिजिटल शासन का अग्रणी है। पारदर्शिता, दक्षता और सामुदायिक सहभागिता के प्रति हमारी प्रतिबद्धता हमें आगे बढ़ाती है।",
      features: ["डिजिटल-प्रथम शासन दृष्टिकोण", "पारदर्शी निर्णय लेना", "समुदाय-संचालित विकास", "टिकाऊ ग्रामीण प्रथाएं"],
    },
    contact: {
      title: "संपर्क जानकारी",
      address: "गांव उतराना, तहसील केशवराय पाटन, जिला बून्दी, राजस्थान",
      phone: "फोन: +91 7568459199",
      email: "ईमेल: admin.utrana@rajasthan.gov.in",
      office: "पंचायत कार्यालय समय: सुबह 9:00 - शाम 5:00",
    },
    services: [
      {
        title: "शिकायत दर्ज करें",
        description: "समस्याओं की रिपोर्ट करें और वास्तविक समय में समाधान की स्थिति ट्रैक करें",
        icon: "📝",
        href: "/complaint",
        color: "bg-red-500",
      },
      {
        title: "छात्र संसाधन",
        description: "शैक्षिक सामग्री, छात्रवृत्ति और शैक्षणिक सहायता",
        icon: "🎓",
        href: "/student-resources",
        color: "bg-blue-500",
      },
      {
        title: "विचार सुझाएं",
        description: "गांव के विकास के लिए अपने नवाचार विचार साझा करें",
        icon: "💡",
        href: "/suggest-idea",
        color: "bg-yellow-500",
      },
      {
        title: "सहायता केंद्र",
        description: "सहायता प्राप्त करें और सामान्य प्रश्नों के उत्तर खोजें",
        icon: "❓",
        href: "/help",
        color: "bg-purple-500",
      },
      {
        title: "गांव की आवाज",
        description: "नवीनतम समाचार, घोषणाएं और सामुदायिक अपडेट",
        icon: "📢",
        href: "/village-voices",
        color: "bg-green-500",
      },
      {
        title: "पंचायत डैशबोर्ड",
        description: "बैठकें, परियोजनाएं, बजट ट्रैकिंग और शासन डेटा",
        icon: "📊",
        href: "/panchayat-dashboard",
        color: "bg-indigo-500",
      },
      {
        title: "मौसम और कृषि",
        description: "वास्तविक समय मौसम अपडेट और खेती मार्गदर्शन",
        icon: "🌾",
        href: "/weather",
        color: "bg-orange-500",
      },
      {
        title: "गांव फीडबैक",
        description: "अपना फीडबैक और तस्वीरें साझा करें ताकि हमारे गांव को बेहतर बनाया जा सके",
        icon: "💬",
        href: "/feedback",
        color: "bg-pink-500",
      },
      {
        title: "सरकारी सेवाएं",
        description: "योजनाओं के लिए आवेदन करें, आवेदन ट्रैक करें और प्रमाणपत्र प्राप्त करें",
        icon: "🏛️",
        href: "/government-services",
        color: "bg-teal-500",
      },
    ],
  },
  mar: {
    welcome: "पधारो म्हारे",
    villageName: "गांव उतराना में",
    subtitle: "गांव री शासन में डिजिटल क्रांति",
    description:
      "तकनीक, पारदर्शिता अर कुशल शासन रे माध्यम सूं म्हारे समुदाय नै सशक्त बणावणो। डिजिटल रूप सूं जुड़े गांव रे निर्माण में म्हारे साथ जुड़ो।",
    ourServices: "म्हारी सेवाएं",
    servicesSubtitle: "गांव प्रशासन अर सामुदायिक सहभागिता खातर व्यापक डिजिटल समाधान",
    stats: {
      population: "जनसंख्या",
      households: "परिवार",
      projects: "सक्रिय परियोजनाएं",
      satisfaction: "संतुष्टि दर",
    },
    about: {
      title: "उतराना रे बारे में",
      description:
        "तहसील केशवराय पाटन, जिला बून्दी, राजस्थान में स्थित, गांव उतराना भारत रे ग्रामीण क्षेत्रां में डिजिटल शासन रो अग्रणी है। पारदर्शिता, दक्षता अर सामुदायिक सहभागिता रे प्रति म्हारी प्रतिबद्धता म्हानै आगे बढ़ावै है।",
      features: ["डिजिटल-प्रथम शासन दृष्टिकोण", "पारदर्शी निर्णय लेणो", "समुदाय-संचालित विकास", "टिकाऊ ग्रामीण प्रथाएं"],
    },
    contact: {
      title: "संपर्क री जानकारी",
      address: "गांव उतराना, तहसील केशवराय पाटन, जिला बून्दी, राजस्थान",
      phone: "फोन: +91 7568459199",
      email: "ईमेल: admin.utrana@rajasthan.gov.in",
      office: "पंचायत कार्यालय समय: सुबह 9:00 - शाम 5:00",
    },
    services: [
      {
        title: "शिकायत दर्ज करो",
        description: "समस्याओं री रिपोर्ट करो अर वास्तविक समय में समाधान री स्थिति ट्रैक करो",
        icon: "📝",
        href: "/complaint",
        color: "bg-red-500",
      },
      {
        title: "छात्र संसाधन",
        description: "शैक्षिक सामग्री, छात्रवृत्ति अर शैक्षणिक सहायता",
        icon: "🎓",
        href: "/student-resources",
        color: "bg-blue-500",
      },
      {
        title: "विचार सुझाओ",
        description: "गांव रे विकास खातर आपणे नवाचार विचार साझा करो",
        icon: "💡",
        href: "/suggest-idea",
        color: "bg-yellow-500",
      },
      {
        title: "सहायता केंद्र",
        description: "सहायता प्राप्त करो अर सामान्य प्रश्नां रे उत्तर खोजो",
        icon: "❓",
        href: "/help",
        color: "bg-purple-500",
      },
      {
        title: "गांव री आवाज़",
        description: "नवीनतम समाचार, घोषणाएं अर सामुदायिक अपडेट",
        icon: "📢",
        href: "/village-voices",
        color: "bg-green-500",
      },
      {
        title: "पंचायत डैशबोर्ड",
        description: "बैठकां, परियोजनाएं, बजट ट्रैकिंग अर शासन डेटा",
        icon: "📊",
        href: "/panchayat-dashboard",
        color: "bg-indigo-500",
      },
      {
        title: "मौसम अर कृषि",
        description: "वास्तविक समय मौसम अपडेट अर खेती मार्गदर्शन",
        icon: "🌾",
        href: "/weather",
        color: "bg-orange-500",
      },
      {
        title: "गांव फीडबैक",
        description: "आपणो फीडबैक अर तस्वीरां साझा करो ताकि म्हारे गांव नै बेहतर बणाया जा सके",
        icon: "💬",
        href: "/feedback",
        color: "bg-pink-500",
      },
      {
        title: "सरकारी सेवाएं",
        description: "योजनाओं खातर आवेदन करो, आवेदन ट्रैक करो अर प्रमाणपत्र प्राप्त करो",
        icon: "🏛️",
        href: "/government-services",
        color: "bg-teal-500",
      },
    ],
  },
}

const statsData = [
  { label: "population", value: "2,847", icon: "👥" },
  { label: "households", value: "542", icon: "🏠" },
  { label: "projects", value: "12", icon: "🚧" },
  { label: "satisfaction", value: "94%", icon: "😊" },
]

export default function Homepage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mar">("hi")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-200 rounded-full opacity-15 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-200 rounded-full opacity-25 animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="text-6xl mr-4">🙏</div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-2">{t.welcome}</h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-emerald-700">{t.villageName}</h2>
                </div>
              </div>
              <p className="text-xl text-green-600 font-medium mb-4">{t.subtitle}</p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.description}</p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {statsData.map((stat, index) => (
                <Card
                  key={index}
                  className="border-green-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-green-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-green-600 font-medium">
                      {t.stats[stat.label as keyof typeof t.stats]}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t.ourServices}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-800 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{t.about.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t.about.description}</p>
              <div className="space-y-4">
                {t.about.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Village Utrana"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">2025</div>
                <div className="text-sm text-slate-600">Digital Village</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t.contact.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-semibold text-slate-800 mb-2">Address</h3>
                <p className="text-slate-600 text-sm">{t.contact.address}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-semibold text-slate-800 mb-2">Phone</h3>
                <p className="text-slate-600 text-sm">{t.contact.phone}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600 text-sm">{t.contact.email}</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🕒</div>
                <h3 className="font-semibold text-slate-800 mb-2">Office Hours</h3>
                <p className="text-slate-600 text-sm">{t.contact.office}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
