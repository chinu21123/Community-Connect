"use client"

import Link from "next/link"

interface FooterProps {
  language: "en" | "hi" | "raj" | "mar"
}

const translations = {
  en: {
    title: "Gaon Saathi",
    subtitle: "Digital Village Platform",
    description: "Empowering rural communities through technology and transparent governance.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact Information",
    developer: "Platform Developer",
    address: "Village Utrana, Tehsil Keshavray Patan, District Bundi, Rajasthan",
    phone: "+91 8091778384",
    email: "chelsea.sharma2311@gmail.com",
    developerName: "Chelsea Sharma",
    copyright: "© 2025 Gaon Saathi. All rights reserved.",
    poweredBy: "Powered by Digital India Initiative",
    developedBy: "Developed with ❤️ by Chelsea Sharma",
    links: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      help: "Help Center",
      complaints: "Submit Complaint",
      studentResources: "Student Resources",
      panchayatDashboard: "Panchayat Dashboard",
      villageVoices: "Village Voices",
      governmentServices: "Government Services",
      gallery: "Photo Gallery",
      jobs: "Job Portal",
      weather: "Weather Updates",
      feedback: "Visitor Feedback",
    },
  },
  hi: {
    title: "गांव साथी",
    subtitle: "डिजिटल गांव प्लेटफॉर्म",
    description: "तकनीक और पारदर्शी शासन के माध्यम से ग्रामीण समुदायों को सशक्त बनाना।",
    quickLinks: "त्वरित लिंक",
    services: "सेवाएं",
    contact: "संपर्क जानकारी",
    developer: "प्लेटफॉर्म डेवलपर",
    address: "गांव उतराना, तहसील केशवराय पाटन, जिला बून्दी, राजस्थान",
    phone: "+91 8091778384",
    email: "chelsea.sharma2311@gmail.com",
    developerName: "चेल्सी शर्मा",
    copyright: "© 2025 गांव साथी। सभी अधिकार सुरक्षित।",
    poweredBy: "डिजिटल इंडिया पहल द्वारा संचालित",
    developedBy: "चेल्सी शर्मा द्वारा ❤️ के साथ विकसित",
    links: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      contact: "संपर्क",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
      help: "सहायता केंद्र",
      complaints: "शिकायत दर्ज करें",
      studentResources: "छात्र संसाधन",
      panchayatDashboard: "पंचायत डैशबोर्ड",
      villageVoices: "गांव की आवाज़",
      governmentServices: "सरकारी सेवाएं",
      gallery: "फोटो गैलरी",
      jobs: "नौकरी पोर्टल",
      weather: "मौसम अपडेट",
      feedback: "आगंतुक फीडबैक",
    },
  },
  raj: {
    title: "गांव साथी",
    subtitle: "डिजिटल गांव प्लेटफॉर्म",
    description: "तकनीक अर पारदर्शी शासन रे माध्यम सूं ग्रामीण समुदायां नै सशक्त बणावणो।",
    quickLinks: "त्वरित लिंक",
    services: "सेवाएं",
    contact: "संपर्क री जानकारी",
    developer: "प्लेटफॉर्म डेवलपर",
    address: "गांव उतराना, तहसील केशवराय पाटन, जिला बून्दी, राजस्थान",
    phone: "+91 8091778384",
    email: "chelsea.sharma2311@gmail.com",
    developerName: "चेल्सी शर्मा",
    copyright: "© 2025 गांव साथी। सगळा अधिकार सुरक्षित।",
    poweredBy: "डिजिटल इंडिया पहल रे माध्यम सूं संचालित",
    developedBy: "चेल्सी शर्मा रे माध्यम सूं ❤️ रे साथ विकसित",
    links: {
      home: "होम",
      about: "म्हारे बारे में",
      services: "सेवाएं",
      contact: "संपर्क",
      privacy: "गोपनीयता नीति",
      terms: "सेवा री शर्तां",
      help: "सहायता केंद्र",
      complaints: "शिकायत दर्ज करो",
      studentResources: "छात्र संसाधन",
      panchayatDashboard: "पंचायत डैशबोर्ड",
      villageVoices: "गांव री आवाज़",
      governmentServices: "सरकारी सेवाएं",
      gallery: "फोटो गैलरी",
      jobs: "नौकरी पोर्टल",
      weather: "मौसम अपडेट",
      feedback: "आगंतुक फीडबैक",
    },
  },
  mar: {
    title: "गांव साथी",
    subtitle: "डिजिटल गांव प्लेटफॉर्म",
    description: "तकनीक अर पारदर्शी शासन रे माध्यम सूं ग्रामीण समुदायां नै सशक्त बणावणो।",
    quickLinks: "त्वरित लिंक",
    services: "सेवाएं",
    contact: "संपर्क री जानकारी",
    developer: "प्लेटफॉर्म डेवलपर",
    address: "गांव उतराना, तहसील केशवराय पाटन, जिला बून्दी, राजस्थान",
    phone: "+91 8091778384",
    email: "chelsea.sharma2311@gmail.com",
    developerName: "चेल्सी शर्मा",
    copyright: "© 2025 गांव साथी। सगळा अधिकार सुरक्षित।",
    poweredBy: "डिजिटल इंडिया पहल रे माध्यम सूं संचालित",
    developedBy: "चेल्सी शर्मा रे माध्यम सूं ❤️ रे साथ विकसित",
    links: {
      home: "होम",
      about: "म्हारे बारे में",
      services: "सेवाएं",
      contact: "संपर्क",
      privacy: "गोपनीयता नीति",
      terms: "सेवा री शर्तां",
      help: "सहायता केंद्र",
      complaints: "शिकायत दर्ज करो",
      studentResources: "छात्र संसाधन",
      panchayatDashboard: "पंचायत डैशबोर्ड",
      villageVoices: "गांव री आवाज़",
      governmentServices: "सरकारी सेवाएं",
      gallery: "फोटो गैलरी",
      jobs: "नौकरी पोर्टल",
      weather: "मौसम अपडेट",
      feedback: "आगंतुक फीडबैक",
    },
  },
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🌿</div>
              <div>
                <h3 className="text-xl font-bold text-green-400">{t.title}</h3>
                <p className="text-sm text-slate-300">{t.subtitle}</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{t.description}</p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📱</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🌐</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📧</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">{t.quickLinks}</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                {t.links.home}
              </Link>
              <Link href="/gallery" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                {t.links.gallery}
              </Link>
              <Link href="/jobs" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                {t.links.jobs}
              </Link>
              <Link href="/weather" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                {t.links.weather}
              </Link>
              <Link href="/help" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                {t.links.help}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">{t.services}</h4>
            <div className="space-y-2">
              <Link href="/complaint" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                {t.links.complaints}
              </Link>
              <Link
                href="/student-resources"
                className="block text-slate-300 hover:text-green-400 transition-colors text-sm"
              >
                {t.links.studentResources}
              </Link>
              <Link
                href="/panchayat-dashboard"
                className="block text-slate-300 hover:text-green-400 transition-colors text-sm"
              >
                {t.links.panchayatDashboard}
              </Link>
              <Link
                href="/village-voices"
                className="block text-slate-300 hover:text-green-400 transition-colors text-sm"
              >
                {t.links.villageVoices}
              </Link>
              <Link
                href="/government-services"
                className="block text-slate-300 hover:text-green-400 transition-colors text-sm"
              >
                {t.links.governmentServices}
              </Link>
              <Link href="/feedback" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                {t.links.feedback}
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="text-green-400 mt-1">📍</div>
                <p className="text-slate-300 text-sm">{t.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-400">📞</div>
                <p className="text-slate-300 text-sm">{t.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-400">📧</div>
                <p className="text-slate-300 text-sm">{t.email}</p>
              </div>
            </div>

            {/* Developer Information */}
            <div className="mt-6 pt-4 border-t border-slate-700">
              <h5 className="text-md font-semibold text-blue-400 mb-2">{t.developer}</h5>
              <div className="flex items-center space-x-3">
                <div className="text-blue-400">👩‍💻</div>
                <p className="text-slate-300 text-sm font-medium">{t.developerName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">{t.copyright}</p>
              <p className="text-slate-500 text-xs mt-1">{t.poweredBy}</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">{t.developedBy}</p>
              <div className="flex items-center justify-center md:justify-end space-x-2 mt-2">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🚀</span>
                </div>
                <span className="text-slate-500 text-xs">Digital India Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
