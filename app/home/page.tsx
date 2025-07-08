"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  FileText,
  GraduationCap,
  Lightbulb,
  Volume2,
  BarChart3,
  HelpCircle,
  Users,
  Cloud,
  Camera,
  Briefcase,
  Star,
  TrendingUp,
  Award,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ZoomIn,
  Share2,
  Download,
  MapPin,
  Calendar,
  Phone,
  Mail,
  User,
  LogOut,
} from "lucide-react"

const translations = {
  en: {
    title: "Gaon Saathi",
    subtitle: "Your Digital Village Companion",
    tagline: "Empowering Rural Communities Through Technology",
    welcome: "🏠 Welcome to your village's digital assistance center",
    communityService: "In service of the community",
    joinCommunity: "🤝 Join the Community",
    joinDescription: "Contribute to your village's digital development",
    communityStats: "🙏 Community Statistics",
    communityGallery: "📸 Community Gallery",
    galleryDescription: "Real stories from our villages in Bundi & Lakheri, Rajasthan",
    viewAllPhotos: "View All Photos",
    rajasthanGovt: "🏛️ Rajasthan Government Initiative",
    rajasthanDesc: "Empowering rural Rajasthan through digital innovation and inclusive governance",
    achievements: "Our Achievements",
    ownerInfo: "Platform Owner",
    playSlideshow: "Play Slideshow",
    pauseSlideshow: "Pause Slideshow",
    zoomImage: "Zoom Image",
    shareImage: "Share Image",
    downloadImage: "Download Image",
    logout: "Logout",
    services: [
      {
        title: "File Complaint",
        description: "Register your problem or complaint",
        icon: FileText,
        link: "/complaint",
        bgColor: "bg-pink-100",
        textColor: "text-pink-800",
      },
      {
        title: "Student Resources",
        description: "Educational materials and scholarship information",
        icon: GraduationCap,
        link: "/student-resources",
        bgColor: "bg-blue-100",
        textColor: "text-blue-800",
      },
      {
        title: "Give Suggestions",
        description: "Share your ideas for village development",
        icon: Lightbulb,
        link: "/suggest-idea",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
      },
      {
        title: "Village Voice",
        description: "Local news and announcements",
        icon: Volume2,
        link: "/village-voices",
        bgColor: "bg-purple-100",
        textColor: "text-purple-800",
      },
      {
        title: "Panchayat Dashboard",
        description: "Government schemes and work information",
        icon: BarChart3,
        link: "/panchayat-dashboard",
        bgColor: "bg-green-100",
        textColor: "text-green-800",
      },
      {
        title: "Help Center",
        description: "Get help using the platform",
        icon: HelpCircle,
        link: "/help",
        bgColor: "bg-orange-100",
        textColor: "text-orange-800",
      },
      {
        title: "Farmer Weather",
        description: "Real-time weather updates for farming",
        icon: Cloud,
        link: "/weather",
        bgColor: "bg-sky-100",
        textColor: "text-sky-800",
      },
      {
        title: "Visitor Feedback",
        description: "Share feedback with photos and suggestions",
        icon: Camera,
        link: "/feedback",
        bgColor: "bg-rose-100",
        textColor: "text-rose-800",
      },
      {
        title: "Job Portal",
        description: "Latest job postings and hiring opportunities",
        icon: Briefcase,
        link: "/jobs",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-800",
      },
    ],
    stats: [
      { number: "150+", label: "Registered Users", bgColor: "bg-green-200", textColor: "text-green-800" },
      { number: "45", label: "Resolved Complaints", bgColor: "bg-blue-200", textColor: "text-blue-800" },
      { number: "28", label: "New Suggestions", bgColor: "bg-yellow-200", textColor: "text-yellow-800" },
      { number: "12", label: "Active Projects", bgColor: "bg-purple-200", textColor: "text-purple-800" },
    ],
    rajasthanFeatures: [
      { icon: "🏰", title: "Heritage & Culture", desc: "Preserving Rajasthan's rich cultural heritage" },
      { icon: "🌾", title: "Agricultural Focus", desc: "Supporting farmers with modern technology" },
      { icon: "💧", title: "Water Conservation", desc: "Innovative water management solutions" },
      { icon: "🎓", title: "Education First", desc: "Quality education for all rural children" },
    ],
    galleryImages: [
      {
        src: "/images/community/community-1.jpg",
        alt: "Community engagement with children in Bundi",
        caption: "Digital literacy program with village children",
        location: "Bundi, Rajasthan",
        date: "2024-12-15",
      },
      {
        src: "/images/community/community-2.jpg",
        alt: "Digital education at home",
        caption: "Home-based digital learning initiatives",
        location: "Lakheri, Rajasthan",
        date: "2024-12-10",
      },
      {
        src: "/images/community/community-3.jpg",
        alt: "Agricultural activities",
        caption: "Supporting local farmers and livestock",
        location: "Bundi, Rajasthan",
        date: "2024-12-08",
      },
      {
        src: "/images/community/community-10.jpg",
        alt: "Women empowerment in rural communities",
        caption: "Community women's group meeting in Bundi",
        location: "Bundi, Rajasthan",
        date: "2025-01-07",
      },
      {
        src: "/images/community/community-11.jpg",
        alt: "Healthcare services in rural areas",
        caption: "Mobile health checkup services for elderly",
        location: "Lakheri, Rajasthan",
        date: "2024-12-20",
      },
      {
        src: "/images/community/community-12.jpg",
        alt: "Environmental conservation efforts",
        caption: "Tree plantation and environmental awareness",
        location: "Bundi, Rajasthan",
        date: "2024-12-22",
      },
      {
        src: "/images/community/community-4.jpg",
        alt: "Water treatment facility",
        caption: "Clean water infrastructure development",
        location: "Lakheri, Rajasthan",
        date: "2024-12-05",
      },
      {
        src: "/images/community/community-5.jpg",
        alt: "Community health center",
        caption: "Healthcare services in rural areas",
        location: "Lakheri, Rajasthan",
        date: "2024-12-18",
      },
      {
        src: "/images/community/community-13.jpg",
        alt: "Livestock management and farming",
        caption: "Supporting farmers with cattle care in Bundi",
        location: "Bundi, Rajasthan",
        date: "2025-01-07",
      },
    ],
  },
  hi: {
    title: "गांव साथी",
    subtitle: "आपका डिजिटल गांव साथी",
    tagline: "तकनीक के माध्यम से ग्रामीण समुदायों को सशक्त बनाना",
    welcome: "🏠 आपके गांव के डिजिटल सहायता केंद्र में स्वागत है",
    communityService: "समुदाय की सेवा में",
    joinCommunity: "🤝 समुदाय में शामिल हों",
    joinDescription: "अपने गांव के डिजिटल विकास में योगदान दें",
    communityStats: "🙏 समुदाय के आंकड़े",
    communityGallery: "📸 समुदायिक गैलरी",
    galleryDescription: "बूंदी और लाखेरी, राजस्थान के हमारे गांवों की वास्तविक कहानियां",
    viewAllPhotos: "सभी तस्वीरें देखें",
    rajasthanGovt: "🏛️ राजस्थान सरकार की पहल",
    rajasthanDesc: "डिजिटल नवाचार और समावेशी शासन के माध्यम से ग्रामीण राजस्थान को सशक्त बनाना",
    achievements: "हमारी उपलब्धियां",
    ownerInfo: "प्लेटफॉर्म स्वामी",
    playSlideshow: "स्लाइडशो चलाएं",
    pauseSlideshow: "स्लाइडशो रोकें",
    zoomImage: "तस्वीर बड़ी करें",
    shareImage: "तस्वीर साझा करें",
    downloadImage: "तस्वीर डाउनलोड करें",
    logout: "लॉगआउट",
    services: [
      {
        title: "शिकायत दर्ज करें",
        description: "अपनी समस्या या शिकायत दर्ज करें",
        icon: FileText,
        link: "/complaint",
        bgColor: "bg-pink-100",
        textColor: "text-pink-800",
      },
      {
        title: "छात्र संसाधन",
        description: "शिक्षा सामग्री और छात्रवृत्ति जानकारी",
        icon: GraduationCap,
        link: "/student-resources",
        bgColor: "bg-blue-100",
        textColor: "text-blue-800",
      },
      {
        title: "सुझाव दें",
        description: "गांव के विकास के लिए अपने विचार साझा करें",
        icon: Lightbulb,
        link: "/suggest-idea",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
      },
      {
        title: "गांव की आवाज़",
        description: "स्थानीय समाचार और घोषणाएं सुनें",
        icon: Volume2,
        link: "/village-voices",
        bgColor: "bg-purple-100",
        textColor: "text-purple-800",
      },
      {
        title: "पंचायत डैशबोर्ड",
        description: "सरकारी योजनाओं और कार्यों की जानकारी",
        icon: BarChart3,
        link: "/panchayat-dashboard",
        bgColor: "bg-green-100",
        textColor: "text-green-800",
      },
      {
        title: "सहायता केंद्र",
        description: "प्लेटफॉर्म का उपयोग करने में सहायता",
        icon: HelpCircle,
        link: "/help",
        bgColor: "bg-orange-100",
        textColor: "text-orange-800",
      },
      {
        title: "किसान मौसम",
        description: "खेती के लिए वास्तविक समय मौसम अपडेट",
        icon: Cloud,
        link: "/weather",
        bgColor: "bg-sky-100",
        textColor: "text-sky-800",
      },
      {
        title: "आगंतुक फीडबैक",
        description: "तस्वीरों और सुझावों के साथ फीडबैक साझा करें",
        icon: Camera,
        link: "/feedback",
        bgColor: "bg-rose-100",
        textColor: "text-rose-800",
      },
      {
        title: "नौकरी पोर्टल",
        description: "नवीनतम नौकरी पोस्टिंग और भर्ती के अवसर",
        icon: Briefcase,
        link: "/jobs",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-800",
      },
    ],
    stats: [
      { number: "150+", label: "पंजीकृत उपयोगकर्ता", bgColor: "bg-green-200", textColor: "text-green-800" },
      { number: "45", label: "हल की गई शिकायतें", bgColor: "bg-blue-200", textColor: "text-blue-800" },
      { number: "28", label: "नए सुझाव", bgColor: "bg-yellow-200", textColor: "text-yellow-800" },
      { number: "12", label: "सक्रिय परियोजनाएं", bgColor: "bg-purple-200", textColor: "text-purple-800" },
    ],
    rajasthanFeatures: [
      { icon: "🏰", title: "विरासत और संस्कृति", desc: "राजस्थान की समृद्ध सांस्कृतिक विरासत का संरक्षण" },
      { icon: "🌾", title: "कृषि फोकस", desc: "आधुनिक तकनीक के साथ किसानों का समर्थन" },
      { icon: "💧", title: "जल संरक्षण", desc: "नवाचार जल प्रबंधन समाधान" },
      { icon: "🎓", title: "शिक्षा प्राथमिकता", desc: "सभी ग्रामीण बच्चों के लिए गुणवत्तापूर्ण शिक्षा" },
    ],
    galleryImages: [
      {
        src: "/images/community/community-1.jpg",
        alt: "बूंदी में बच्चों के साथ सामुदायिक जुड़ाव",
        caption: "गांव के बच्चों के साथ डिजिटल साक्षरता कार्यक्रम",
        location: "बूंदी, राजस्थान",
        date: "2024-12-15",
      },
      {
        src: "/images/community/community-2.jpg",
        alt: "घर पर डिजिटल शिक्षा",
        caption: "घर आधारित डिजिटल शिक्षा पहल",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-10",
      },
      {
        src: "/images/community/community-3.jpg",
        alt: "कृषि गतिविधियां",
        caption: "स्थानीय किसानों और पशुधन का समर्थन",
        location: "बूंदी, राजस्थान",
        date: "2024-12-08",
      },
      {
        src: "/images/community/community-10.jpg",
        alt: "ग्रामीण समुदायों में महिला सशक्तिकरण",
        caption: "बूंदी में सामुदायिक महिला समूह की बैठक",
        location: "बूंदी, राजस्थान",
        date: "2025-01-07",
      },
      {
        src: "/images/community/community-11.jpg",
        alt: "ग्रामीण क्षेत्रों में स्वास्थ्य सेवाएं",
        caption: "बुजुर्गों के लिए मोबाइल स्वास्थ्य जांच सेवाएं",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-20",
      },
      {
        src: "/images/community/community-12.jpg",
        alt: "पर्यावरण संरक्षण प्रयास",
        caption: "वृक्षारोपण और पर्यावरण जागरूकता",
        location: "बूंदी, राजस्थान",
        date: "2024-12-22",
      },
      {
        src: "/images/community/community-4.jpg",
        alt: "जल उपचार सुविधा",
        caption: "स्वच्छ जल अवसंरचना विकास",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-05",
      },
      {
        src: "/images/community/community-5.jpg",
        alt: "सामुदायिक स्वास्थ्य केंद्र",
        caption: "ग्रामीण क्षेत्रों में स्वास्थ्य सेवाएं",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-18",
      },
      {
        src: "/images/community/community-13.jpg",
        alt: "पशुधन प्रबंधन और खेती",
        caption: "बूंदी में पशु देखभाल के साथ किसानों का समर्थन",
        location: "बूंदी, राजस्थान",
        date: "2025-01-07",
      },
    ],
  },
  mr: {
    title: "गांव साथी",
    subtitle: "म्हारो डिजिटल गांव साथी",
    tagline: "तकनीक रे माध्यम सूं ग्रामीण समुदायां नै सशक्त बणावणो",
    welcome: "🏠 म्हारे गांव के डिजिटल सहायता केंद्र में पधारो",
    communityService: "समुदाय री सेवा में",
    joinCommunity: "🤝 समुदाय में शामिल होवो",
    joinDescription: "अपणे गांव के डिजिटल विकास में योगदान दो",
    communityStats: "🙏 समुदाय रा आंकड़ा",
    communityGallery: "📸 समुदायिक गैलरी",
    galleryDescription: "बूंदी अर लाखेरी, राजस्थान रे म्हारे गांवां री वास्तविक कहानियां",
    viewAllPhotos: "सगळी तस्वीरां देखो",
    rajasthanGovt: "🏛️ राजस्थान सरकार री पहल",
    rajasthanDesc: "डिजिटल नवाचार अर समावेशी शासन रे माध्यम सूं ग्रामीण राजस्थान नै सशक्त बणावणो",
    achievements: "म्हारी उपलब्धियां",
    ownerInfo: "प्लेटफॉर्म स्वामी",
    playSlideshow: "स्लाइडशो चलावो",
    pauseSlideshow: "स्लाइडशो रोको",
    zoomImage: "तस्वीर बड़ी करो",
    shareImage: "तस्वीर साझा करो",
    downloadImage: "तस्वीर डाउनलोड करो",
    logout: "लॉगआउट",
    services: [
      {
        title: "शिकायत दर्ज करो",
        description: "अपणी समस्या या शिकायत दर्ज करो",
        icon: FileText,
        link: "/complaint",
        bgColor: "bg-pink-100",
        textColor: "text-pink-800",
      },
      {
        title: "छात्र संसाधन",
        description: "शिक्षा सामग्री अर छात्रवृत्ति री जानकारी",
        icon: GraduationCap,
        link: "/student-resources",
        bgColor: "bg-blue-100",
        textColor: "text-blue-800",
      },
      {
        title: "सुझाव दो",
        description: "गांव रे विकास खातर अपणे विचार साझा करो",
        icon: Lightbulb,
        link: "/suggest-idea",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
      },
      {
        title: "गांव री आवाज़",
        description: "स्थानीय समाचार अर घोषणा सुणो",
        icon: Volume2,
        link: "/village-voices",
        bgColor: "bg-purple-100",
        textColor: "text-purple-800",
      },
      {
        title: "पंचायत डैशबोर्ड",
        description: "सरकारी योजना अर काम री जानकारी",
        icon: BarChart3,
        link: "/panchayat-dashboard",
        bgColor: "bg-green-100",
        textColor: "text-green-800",
      },
      {
        title: "सहायता केंद्र",
        description: "प्लेटफॉर्म रो उपयोग करण में सहायता",
        icon: HelpCircle,
        link: "/help",
        bgColor: "bg-orange-100",
        textColor: "text-orange-800",
      },
      {
        title: "किसान मौसम",
        description: "खेती खातर वास्तविक समय मौसम अपडेट",
        icon: Cloud,
        link: "/weather",
        bgColor: "bg-sky-100",
        textColor: "text-sky-800",
      },
      {
        title: "आगंतुक फीडबैक",
        description: "तस्वीरां अर सुझावां रे साथ फीडबैक साझा करो",
        icon: Camera,
        link: "/feedback",
        bgColor: "bg-rose-100",
        textColor: "text-rose-800",
      },
      {
        title: "नौकरी पोर्टल",
        description: "नवीनतम नौकरी पोस्टिंग अर भर्ती रा अवसर",
        icon: Briefcase,
        link: "/jobs",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-800",
      },
    ],
    stats: [
      { number: "150+", label: "पंजीकृत उपयोगकर्ता", bgColor: "bg-green-200", textColor: "text-green-800" },
      { number: "45", label: "हल होई शिकायतां", bgColor: "bg-blue-200", textColor: "text-blue-800" },
      { number: "28", label: "नवा सुझाव", bgColor: "bg-yellow-200", textColor: "text-yellow-800" },
      { number: "12", label: "सक्रिय परियोजना", bgColor: "bg-purple-200", textColor: "text-purple-800" },
    ],
    rajasthanFeatures: [
      { icon: "🏰", title: "विरासत अर संस्कृति", desc: "राजस्थान री समृद्ध सांस्कृतिक विरासत रो संरक्षण" },
      { icon: "🌾", title: "कृषि फोकस", desc: "आधुनिक तकनीक रे साथ किसानां रो समर्थन" },
      { icon: "💧", title: "जल संरक्षण", desc: "नवाचार जल प्रबंधन समाधान" },
      { icon: "🎓", title: "शिक्षा प्राथमिकता", desc: "सगळे ग्रामीण बच्चां खातर गुणवत्तापूर्ण शिक्षा" },
    ],
    galleryImages: [
      {
        src: "/images/community/community-1.jpg",
        alt: "बूंदी में बच्चां रे साथ सामुदायिक जुड़ाव",
        caption: "गांव रे बच्चां रे साथ डिजिटल साक्षरता कार्यक्रम",
        location: "बूंदी, राजस्थान",
        date: "2024-12-15",
      },
      {
        src: "/images/community/community-2.jpg",
        alt: "घर पर डिजिटल शिक्षा",
        caption: "घर आधारित डिजिटल शिक्षा पहल",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-10",
      },
      {
        src: "/images/community/community-3.jpg",
        alt: "कृषि गतिविधियां",
        caption: "स्थानीय किसानां अर पशुधन रो समर्थन",
        location: "बूंदी, राजस्थान",
        date: "2024-12-08",
      },
      {
        src: "/images/community/community-10.jpg",
        alt: "ग्रामीण समुदायां में महिला सशक्तिकरण",
        caption: "बूंदी में सामुदायिक महिला समूह री बैठक",
        location: "बूंदी, राजस्थान",
        date: "2025-01-07",
      },
      {
        src: "/images/community/community-11.jpg",
        alt: "ग्रामीण क्षेत्रां में स्वास्थ्य सेवाएं",
        caption: "बुजुर्गां खातर मोबाइल स्वास्थ्य जांच सेवाएं",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-20",
      },
      {
        src: "/images/community/community-12.jpg",
        alt: "पर्यावरण संरक्षण प्रयास",
        caption: "वृक्षारोपण अर पर्यावरण जागरूकता",
        location: "बूंदी, राजस्थान",
        date: "2024-12-22",
      },
      {
        src: "/images/community/community-4.jpg",
        alt: "जल उपचार सुविधा",
        caption: "स्वच्छ जल अवसंरचना विकास",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-05",
      },
      {
        src: "/images/community/community-5.jpg",
        alt: "सामुदायिक स्वास्थ्य केंद्र",
        caption: "ग्रामीण क्षेत्रां में स्वास्थ्य सेवाएं",
        location: "लाखेरी, राजस्थान",
        date: "2024-12-18",
      },
      {
        src: "/images/community/community-13.jpg",
        alt: "पशुधन प्रबंधन अर खेती",
        caption: "बूंदी में पशु देखभाल रे साथ किसानां रो समर्थन",
        location: "बूंदी, राजस्थान",
        date: "2025-01-07",
      },
    ],
  },
}

const languageNames = {
  en: "English",
  hi: "हिंदी",
  mr: "मारवाड़ी",
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mr">("hi")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSlideshow, setIsSlideshow] = useState(true)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const t = translations[language]

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  // Animate statistics on load
  useEffect(() => {
    const targets = [150, 45, 28, 12]
    const duration = 2000
    const steps = 50
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setAnimatedStats(targets.map((target) => Math.floor(target * easeOutQuart)))

      if (currentStep >= steps) {
        clearInterval(timer)
        setAnimatedStats(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  // Auto-advance gallery images with slideshow control
  useEffect(() => {
    if (!isSlideshow) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % t.galleryImages.length)
    }, 5000) // Increased to 5 seconds for better viewing

    return () => clearInterval(timer)
  }, [t.galleryImages.length, isSlideshow])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % t.galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + t.galleryImages.length) % t.galleryImages.length)
  }

  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow)
  }

  const shareImage = async (image: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.caption,
          text: `${image.caption} - ${image.location}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${image.caption} - ${window.location.href}`)
      alert(language === "hi" ? "लिंक कॉपी हो गया!" : "Link copied!")
    }
  }

  const downloadImage = (imageSrc: string, filename: string) => {
    const link = document.createElement("a")
    link.href = imageSrc
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-300/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-300/10 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 left-1/4 w-20 h-20 bg-orange-300/15 rounded-full animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        {/* Language Toggle and Logout */}
        <div className="absolute top-4 right-4 z-20 flex space-x-2">
          <div className="flex bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/20">
            {Object.entries(languageNames).map(([code, name]) => (
              <Button
                key={code}
                variant={language === code ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage(code as "en" | "hi" | "mr")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  language === code
                    ? "bg-green-600 text-white shadow-sm transform scale-105"
                    : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                }`}
              >
                {name}
              </Button>
            ))}
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
          >
            <LogOut className="w-4 h-4 mr-1" />
            {t.logout}
          </Button>
        </div>

        {/* Enhanced Title Section */}
        <div className="text-center pt-16 pb-8 px-4">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-5xl animate-bounce">🌿</div>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-5xl animate-bounce animation-delay-300">🏡</div>
          </div>
          <p className="text-white/95 text-xl md:text-2xl font-semibold mb-2">{t.subtitle}</p>
          <p className="text-white/80 text-lg italic">{t.tagline}</p>
          <div className="text-white/70 text-sm mt-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
            {currentTime.toLocaleString(language === "hi" ? "hi-IN" : "en-IN")}
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 space-y-8 relative z-10">
        {/* Welcome Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{t.welcome}</h2>
              <p className="text-gray-600 text-lg">{t.communityService}</p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Community Gallery Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                  <Camera className="w-6 h-6 mr-2 text-green-600" />
                  {t.communityGallery}
                </h3>
                <p className="text-gray-600">{t.galleryDescription}</p>
              </div>

              <div className="relative">
                {/* Enhanced image container with metadata */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                  <Image
                    src={t.galleryImages[currentImageIndex].src || "/placeholder.svg"}
                    alt={t.galleryImages[currentImageIndex].alt}
                    fill
                    className="object-contain transition-all duration-500 cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    priority
                    onClick={() => setZoomedImage(t.galleryImages[currentImageIndex].src)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Enhanced image metadata */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-semibold mb-2 drop-shadow-lg">
                      {t.galleryImages[currentImageIndex].caption}
                    </p>
                    <div className="flex items-center justify-between text-sm opacity-90 drop-shadow">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {t.galleryImages[currentImageIndex].location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(t.galleryImages[currentImageIndex].date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced control buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleSlideshow}
                      className="bg-white/90 hover:bg-white border-white/20 shadow-lg"
                      title={isSlideshow ? t.pauseSlideshow : t.playSlideshow}
                    >
                      {isSlideshow ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setZoomedImage(t.galleryImages[currentImageIndex].src)}
                      className="bg-white/90 hover:bg-white border-white/20 shadow-lg"
                      title={t.zoomImage}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => shareImage(t.galleryImages[currentImageIndex])}
                      className="bg-white/90 hover:bg-white border-white/20 shadow-lg"
                      title={t.shareImage}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        downloadImage(
                          t.galleryImages[currentImageIndex].src,
                          `gaon-saathi-${currentImageIndex + 1}.jpg`,
                        )
                      }
                      className="bg-white/90 hover:bg-white border-white/20 shadow-lg"
                      title={t.downloadImage}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Enhanced Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {t.galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-green-600 scale-125 shadow-lg"
                          : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center mt-6">
                <Link href="/gallery">
                  <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    <Camera className="w-4 h-4 mr-2" />
                    {t.viewAllPhotos}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Owner Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl">
            <CardContent className="p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <User className="w-6 h-6 mr-2" />
                {t.ownerInfo}
              </h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">CHELSEA SHARMA</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>chelsea.sharma2311@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 8091778384</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>
                      {language === "hi" ? "प्लेटफॉर्म डेवलपर" : language === "mr" ? "प्लेटफॉर्म डेवलपर" : "Platform Developer"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rajasthan Government Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 shadow-2xl">
            <CardContent className="p-8 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.rajasthanGovt}</h3>
              <p className="text-orange-100 text-lg mb-6">{t.rajasthanDesc}</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {t.rajasthanFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-orange-100">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              🚀 {language === "hi" ? "हमारी सेवाएं" : language === "mr" ? "म्हारी सेवाएं" : "Our Services"}
            </h2>
            <p className="text-white/80">
              {language === "hi"
                ? "आपके गांव के लिए डिजिटल समाधान"
                : language === "mr"
                  ? "म्हारे गांव खातर डिजिटल समाधान"
                  : "Digital solutions for your village"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((service, index) => (
              <Link key={index} href={service.link}>
                <Card
                  className={`${service.bgColor} border-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group transform hover:rotate-1`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center group-hover:bg-white/70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <service.icon className={`w-8 h-8 ${service.textColor}`} />
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold ${service.textColor} mb-2`}>{service.title}</h3>
                    <p className={`${service.textColor} opacity-80 text-sm`}>{service.description}</p>
                    {/* New badges for new services */}
                    {index >= 6 && (
                      <Badge className="mt-2 bg-red-500 text-white animate-pulse">
                        {language === "hi" ? "नया!" : language === "mr" ? "नवो!" : "New!"}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Community Stats */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                {t.communityStats}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {t.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`${stat.bgColor} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer transform hover:rotate-2 shadow-lg`}
                  >
                    <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>
                      {index < 2 ? `${animatedStats[index]}${index === 0 ? "+" : ""}` : animatedStats[index]}
                    </div>
                    <div className={`${stat.textColor} opacity-80 text-sm font-medium`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Achievements Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-2xl">
            <CardContent className="p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Award className="w-6 h-6 mr-2" />
                {t.achievements}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <Star className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm opacity-80">
                    {language === "hi" ? "रेटिंग" : language === "mr" ? "रेटिंग" : "Rating"}
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-red-300" />
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-80">
                    {language === "hi" ? "संतुष्टि" : language === "mr" ? "संतुष्टि" : "Satisfaction"}
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                  <div className="text-2xl font-bold">25</div>
                  <div className="text-sm opacity-80">
                    {language === "hi" ? "गांव" : language === "mr" ? "गांव" : "Villages"}
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-300" />
                  <div className="text-2xl font-bold">200%</div>
                  <div className="text-sm opacity-80">
                    {language === "hi" ? "वृद्धि" : language === "mr" ? "वृद्धि" : "Growth"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Join Community CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.joinCommunity}</h3>
              <p className="text-green-100 text-lg mb-6">{t.joinDescription}</p>
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                {t.joinCommunity}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Footer */}
        <div className="max-w-6xl mx-auto text-center text-white/80 pt-8">
          <p className="text-sm">
            {language === "hi"
              ? "© 2025 गांव साथी - राजस्थान सरकार की डिजिटल पहल"
              : language === "mr"
                ? "© 2025 गांव साथी - राजस्थान सरकार री डिजिटल पहल"
                : "© 2025 Gaon Saathi - A Digital Initiative by Government of Rajasthan"}
          </p>
          <p className="text-xs mt-2 opacity-60">
            {language === "hi"
              ? "सभी अधिकार सुरक्षित | राजस्थान के गांवों को डिजिटल रूप से सशक्त बनाना"
              : language === "mr"
                ? "सगळा अधिकार सुरक्षित | राजस्थान रे गांवां नै डिजिटल रूप सूं सशक्त बणावणो"
                : "All Rights Reserved | Digitally Empowering Villages of Rajasthan"}
          </p>
          <p className="text-xs mt-1 opacity-50">
            {language === "hi"
              ? "डेवलपर: चेल्सी शर्मा | संपर्क: chelsea.sharma2311@gmail.com"
              : language === "mr"
                ? "डेवलपर: चेल्सी शर्मा | संपर्क: chelsea.sharma2311@gmail.com"
                : "Developer: Chelsea Sharma | Contact: chelsea.sharma2311@gmail.com"}
          </p>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <Image
              src={zoomedImage || "/placeholder.svg"}
              alt="Zoomed image"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
