"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Grid,
  List,
  ZoomIn,
  Share2,
  Download,
  Heart,
  Eye,
  Calendar,
  MapPin,
  User,
  Upload,
  SortAsc,
  SortDesc,
  Star,
  Play,
  Pause,
} from "lucide-react"

const translations = {
  en: {
    title: "📸 Village Gallery",
    backToHome: "← Back to Home",
    searchPlaceholder: "Search photos...",
    uploadPhoto: "Upload Photo",
    recentUploads: "Recent Uploads",
    allCategories: "All Categories",
    viewPhoto: "View Photo",
    likes: "Likes",
    views: "Views",
    uploadedBy: "Uploaded by",
    uploadedOn: "Uploaded on",
    location: "Location",
    sortBy: "Sort by",
    sortDate: "Date",
    sortLikes: "Likes",
    sortViews: "Views",
    gridView: "Grid View",
    listView: "List View",
    slideshow: "Slideshow",
    filterBy: "Filter by",
    noPhotos: "No photos found",
    tryDifferent: "Try changing your search or filter",
    categories: {
      development: "Development Projects",
      education: "Education & Students",
      visitors: "Visitors & Guests",
      festivals: "Festivals & Events",
      agriculture: "Agriculture & Farming",
      achievements: "Achievements & Awards",
      healthcare: "Healthcare Services",
      environment: "Environment & Conservation",
      community: "Community Activities",
    },
  },
  hi: {
    title: "📸 गांव गैलरी",
    backToHome: "← वापस होम पेज पर",
    searchPlaceholder: "फोटो खोजें...",
    uploadPhoto: "फोटो अपलोड करें",
    recentUploads: "हाल की अपलोड",
    allCategories: "सभी श्रेणियां",
    viewPhoto: "फोटो देखें",
    likes: "लाइक",
    views: "व्यू",
    uploadedBy: "अपलोड किया गया",
    uploadedOn: "अपलोड तिथि",
    location: "स्थान",
    sortBy: "क्रमबद्ध करें",
    sortDate: "तिथि",
    sortLikes: "लाइक",
    sortViews: "व्यू",
    gridView: "ग्रिड व्यू",
    listView: "लिस्ट व्यू",
    slideshow: "स्लाइडशो",
    filterBy: "फिल्टर करें",
    noPhotos: "कोई फोटो नहीं मिली",
    tryDifferent: "अपनी खोज या फिल्टर बदलने का प्रयास करें",
    categories: {
      development: "विकास परियोजनाएं",
      education: "शिक्षा और छात्र",
      visitors: "आगंतुक और मेहमान",
      festivals: "त्योहार और कार्यक्रम",
      agriculture: "कृषि और खेती",
      achievements: "उपलब्धियां और पुरस्कार",
      healthcare: "स्वास्थ्य सेवाएं",
      environment: "पर्यावरण और संरक्षण",
      community: "सामुदायिक गतिविधियां",
    },
  },
  mar: {
    title: "📸 गांव गैलरी",
    backToHome: "← वापस होम पेज पर",
    searchPlaceholder: "फोटो खोजो...",
    uploadPhoto: "फोटो अपलोड करो",
    recentUploads: "हाल री अपलोड",
    allCategories: "सगळी श्रेणियां",
    viewPhoto: "फोटो देखो",
    likes: "लाइक",
    views: "व्यू",
    uploadedBy: "अपलोड करियो",
    uploadedOn: "अपलोड तिथि",
    location: "स्थान",
    sortBy: "क्रमबद्ध करो",
    sortDate: "तिथि",
    sortLikes: "लाइक",
    sortViews: "व्यू",
    gridView: "ग्रिड व्यू",
    listView: "लिस्ट व्यू",
    slideshow: "स्लाइडशो",
    filterBy: "फिल्टर करो",
    noPhotos: "कोई फोटो कोनी मिली",
    tryDifferent: "अपणी खोज या फिल्टर बदलण रो प्रयास करो",
    categories: {
      development: "विकास परियोजना",
      education: "शिक्षा अर छात्र",
      visitors: "आगंतुक अर मेहमान",
      festivals: "त्योहार अर कार्यक्रम",
      agriculture: "कृषि अर खेती",
      achievements: "उपलब्धियां अर पुरस्कार",
      healthcare: "स्वास्थ्य सेवाएं",
      environment: "पर्यावरण अर संरक्षण",
      community: "सामुदायिक गतिविधियां",
    },
  },
}

const galleryData = {
  development: [
    {
      id: 1,
      title: "New Road Construction",
      titleHi: "नई सड़क निर्माण",
      titleMar: "नवी सड़क निर्माण",
      image: "/images/community/community-1.jpg",
      description: "Main village road construction in progress",
      descriptionHi: "मुख्य गांव सड़क निर्माण प्रगति में",
      descriptionMar: "मुख्य गांव सड़क निर्माण प्रगति में",
      likes: 45,
      views: 234,
      uploadedBy: "Panchayat Office",
      uploadedByHi: "पंचायत कार्यालय",
      uploadedByMar: "पंचायत कार्यालय",
      uploadedOn: "2024-12-15",
      location: "Bundi, Rajasthan",
      locationHi: "बूंदी, राजस्थान",
      locationMar: "बूंदी, राजस्थान",
      category: "development",
      featured: true,
    },
    {
      id: 2,
      title: "Water Tank Installation",
      titleHi: "पानी की टंकी स्थापना",
      titleMar: "पाणी री टंकी स्थापना",
      image: "/images/community/community-4.jpg",
      description: "New water storage tank for village supply",
      descriptionHi: "गांव की आपूर्ति के लिए नई पानी भंडारण टंकी",
      descriptionMar: "गांव री आपूर्ति खातर नवी पाणी भंडारण टंकी",
      likes: 67,
      views: 189,
      uploadedBy: "Water Committee",
      uploadedByHi: "जल समिति",
      uploadedByMar: "जल समिति",
      uploadedOn: "2024-12-10",
      location: "Lakheri, Rajasthan",
      locationHi: "लाखेरी, राजस्थान",
      locationMar: "लाखेरी, राजस्थान",
      category: "development",
      featured: false,
    },
    {
      id: 3,
      title: "Water Treatment Facility",
      titleHi: "जल उपचार सुविधा",
      titleMar: "जल उपचार सुविधा",
      image: "/images/community/community-6.jpg",
      description: "Modern water treatment facility with multiple pools",
      descriptionHi: "कई पूल के साथ आधुनिक जल उपचार सुविधा",
      descriptionMar: "कई पूल रे साथ आधुनिक जल उपचार सुविधा",
      likes: 89,
      views: 345,
      uploadedBy: "Development Committee",
      uploadedByHi: "विकास समिति",
      uploadedByMar: "विकास समिति",
      uploadedOn: "2024-12-08",
      location: "Lakheri, Rajasthan",
      locationHi: "लाखेरी, राजस्थान",
      locationMar: "लाखेरी, राजस्थान",
      category: "development",
      featured: true,
    },
  ],
  education: [
    {
      id: 4,
      title: "Digital Learning at Home",
      titleHi: "घर पर डिजिटल शिक्षा",
      titleMar: "घर पर डिजिटल शिक्षा",
      image: "/images/community/community-2.jpg",
      description: "Home-based digital education with laptop and child",
      descriptionHi: "लैपटॉप और बच्चे के साथ घर आधारित डिजिटल शिक्षा",
      descriptionMar: "लैपटॉप अर बच्चे रे साथ घर आधारित डिजिटल शिक्षा",
      likes: 156,
      views: 567,
      uploadedBy: "Education Department",
      uploadedByHi: "शिक्षा विभाग",
      uploadedByMar: "शिक्षा विभाग",
      uploadedOn: "2024-12-12",
      location: "Lakheri, Rajasthan",
      locationHi: "लाखेरी, राजस्थान",
      locationMar: "लाखेरी, राजस्थान",
      category: "education",
      featured: true,
    },
    {
      id: 5,
      title: "Primary School Building",
      titleHi: "प्राथमिक विद्यालय भवन",
      titleMar: "प्राथमिक विद्यालय भवन",
      image: "/images/community/community-9.jpg",
      description: "Colorful primary school building in Lakheri",
      descriptionHi: "लाखेरी में रंगबिरंगा प्राथमिक विद्यालय भवन",
      descriptionMar: "लाखेरी में रंगबिरंगो प्राथमिक विद्यालय भवन",
      likes: 78,
      views: 234,
      uploadedBy: "School Committee",
      uploadedByHi: "स्कूल समिति",
      uploadedByMar: "स्कूल समिति",
      uploadedOn: "2024-12-05",
      location: "Lakheri, Rajasthan",
      locationHi: "लाखेरी, राजस्थान",
      locationMar: "लाखेरी, राजस्थान",
      category: "education",
      featured: false,
    },
    {
      id: 6,
      title: "Skill Development Program",
      titleHi: "कौशल विकास कार्यक्रम",
      titleMar: "कौशल विकास कार्यक्रम",
      image: "/images/community/community-8.jpg",
      description: "Adani Foundation skill development training",
      descriptionHi: "अदानी फाउंडेशन कौशल विकास प्रशिक्षण",
      descriptionMar: "अदानी फाउंडेशन कौशल विकास प्रशिक्षण",
      likes: 92,
      views: 298,
      uploadedBy: "Adani Foundation",
      uploadedByHi: "अदानी फाउंडेशन",
      uploadedByMar: "अदानी फाउंडेशन",
      uploadedOn: "2024-11-28",
      location: "Bundi, Rajasthan",
      locationHi: "बूंदी, राजस्थान",
      locationMar: "बूंदी, राजस्थान",
      category: "education",
      featured: true,
    },
  ],
  healthcare: [
    {
      id: 7,
      title: "Community Health Center",
      titleHi: "सामुदायिक स्वास्थ्य केंद्र",
      titleMar: "सामुदायिक स्वास्थ्य केंद्र",
      image: "/images/community/community-5.jpg",
      description: "Primary health center building in Lakheri",
      descriptionHi: "लाखेरी में प्राथमिक स्वास्थ्य केंद्र भवन",
      descriptionMar: "लाखेरी में प्राथमिक स्वास्थ्य केंद्र भवन",
      likes: 234,
      views: 789,
      uploadedBy: "Health Department",
      uploadedByHi: "स्वास्थ्य विभाग",
      uploadedByMar: "स्वास्थ्य विभाग",
      uploadedOn: "2024-12-18",
      location: "Lakheri, Rajasthan",
      locationHi: "लाखेरी, राजस्थान",
      locationMar: "लाखेरी, राजस्थान",
      category: "healthcare",
      featured: true,
    },
    {
      id: 8,
      title: "Healthcare Workers",
      titleHi: "स्वास्थ्य कार्यकर्ता",
      titleMar: "स्वास्थ्य कार्यकर्ता",
      image: "/images/community/community-7.jpg",
      description: "Healthcare professionals in medical office",
      descriptionHi: "चिकित्सा कार्यालय में स्वास्थ्य पेशेवर",
      descriptionMar: "चिकित्सा कार्यालय में स्वास्थ्य पेशेवर",
      likes: 145,
      views: 456,
      uploadedBy: "Health Mission",
      uploadedByHi: "स्वास्थ्य मिशन",
      uploadedByMar: "स्वास्थ्य मिशन",
      uploadedOn: "2024-12-14",
      location: "Bundi, Rajasthan",
      locationHi: "बूंदी, राजस्थान",
      locationMar: "बूंदी, राजस्थान",
      category: "healthcare",
      featured: false,
    },
    {
      id: 9,
      title: "Mobile Health Checkup",
      titleHi: "मोबाइल स्वास्थ्य जांच",
      titleMar: "मोबाइल स्वास्थ्य जांच",
      image: "/images/community/community-11.jpg",
      description: "Healthcare worker checking blood pressure of elderly patient in Lakheri",
      descriptionHi: "लाखेरी में स्वास्थ्य कार्यकर्ता बुजुर्ग मरीज का रक्तचाप जांच रहा है",
      descriptionMar: "लाखेरी में स्वास्थ्य कार्यकर्ता बुजुर्ग मरीज रो रक्तचाप जांच रह्यो है",
      likes: 187,
      views: 678,
      uploadedBy: "Mobile Health Unit",
      uploadedByHi: "मोबाइल स्वास्थ्य इकाई",
      uploadedByMar: "मोबाइल स्वास्थ्य इकाई",
      uploadedOn: "2024-12-20",
      location: "Lakheri, Rajasthan",
      locationHi: "लाखेरी, राजस्थान",
      locationMar: "लाखेरी, राजस्थान",
      category: "healthcare",
      featured: true,
    },
  ],
  agriculture: [
    {
      id: 10,
      title: "Cattle Feeding",
      titleHi: "पशुओं को चारा",
      titleMar: "पशुआं नै चारो",
      image: "/images/community/community-3.jpg",
      description: "Woman feeding cattle with green fodder",
      descriptionHi: "महिला हरे चारे से पशुओं को खिला रही है",
      descriptionMar: "महिला हरे चारे सूं पशुआं नै खिला रही है",
      likes: 123,
      views: 445,
      uploadedBy: "Farmers Association",
      uploadedByHi: "किसान संघ",
      uploadedByMar: "किसान संघ",
      uploadedOn: "2024-04-15",
      location: "Bundi, Rajasthan",
      locationHi: "बूंदी, राजस्थान",
      locationMar: "बूंदी, राजस्थान",
      category: "agriculture",
      featured: false,
    },
    {
      id: 11,
      title: "Livestock Care in Bundi",
      titleHi: "बूंदी में पशुधन देखभाल",
      titleMar: "बूंदी में पशुधन देखभाल",
      image: "/images/community/community-13.jpg",
      description: "Supporting local farmers with livestock management and cattle feeding in Bundi",
      descriptionHi: "बूंदी में पशुधन प्रबंधन और पशु आहार के साथ स्थानीय किसानों का समर्थन",
      descriptionMar: "बूंदी में पशुधन प्रबंधन अर पशु आहार रे साथ स्थानीय किसानां रो समर्थन",
      likes: 89,
      views: 267,
      uploadedBy: "Agriculture Officer",
      uploadedByHi: "कृषि अधिकारी",
      uploadedByMar: "कृषि अधिकारी",
      uploadedOn: "2025-01-07",
      location: "Bundi, Rajasthan",
      locationHi: "बूंदी, राजस्थान",
      locationMar: "बूंदी, राजस्थान",
      category: "agriculture",
      featured: true,
    },
  ],
  community: [
    {
      id: 12,
      title: "Women's Group Meeting in Bundi",
      titleHi: "बूंदी में महिला समूह की बैठक",
      titleMar: "बूंदी में महिला समूह री बैठक",
      image: "/images/community/community-10.jpg",
      description: "Community women's group meeting and empowerment session in Bundi village",
      descriptionHi: "बूंदी गांव में सामुदायिक महिला समूह की बैठक और सशक्तिकरण सत्र",
      descriptionMar: "बूंदी गांव में सामुदायिक महिला समूह री बैठक अर सशक्तिकरण सत्र",
      likes: 456,
      views: 1567,
      uploadedBy: "Women's Committee",
      uploadedByHi: "महिला समिति",
      uploadedByMar: "महिला समिति",
      uploadedOn: "2025-01-07",
      location: "Bundi, Rajasthan",
      locationHi: "बूंदी, राजस्थान",
      locationMar: "बूंदी, राजस्थान",
      category: "community",
      featured: true,
    },
  ],
  environment: [
    {
      id: 13,
      title: "Tree Plantation Drive",
      titleHi: "वृक्षारोपण अभियान",
      titleMar: "वृक्षारोपण अभियान",
      image: "/images/community/community-12.jpg",
      description: "Environmental conservation through tree planting initiative",
      descriptionHi: "वृक्षारोपण पहल के माध्यम से पर्यावरण संरक्षण",
      descriptionMar: "वृक्षारोपण पहल रे माध्यम सूं पर्यावरण संरक्षण",
      likes: 234,
      views: 789,
      uploadedBy: "Environment Committee",
      uploadedByHi: "पर्यावरण समिति",
      uploadedByMar: "पर्यावरण समिति",
      uploadedOn: "2024-12-22",
      location: "Bundi, Rajasthan",
      locationHi: "बूंदी, राजस्थान",
      locationMar: "बूंदी, राजस्थान",
      category: "environment",
      featured: true,
    },
  ],
}

const languageNames = {
  en: "English",
  hi: "हिंदी",
  mar: "मारवाड़ी",
}

export default function GalleryPage() {
  const [language, setLanguage] = useState<"en" | "hi" | "mar">("hi")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"date" | "likes" | "views">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [isSlideshow, setIsSlideshow] = useState(false)
  const [slideshowIndex, setSlideshowIndex] = useState(0)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const t = translations[language]

  // Get all photos from all categories
  const allPhotos = Object.values(galleryData).flat()

  // Filter and sort photos
  const filteredAndSortedPhotos = allPhotos
    .filter((photo) => {
      const matchesSearch =
        (language === "hi" ? photo.titleHi : language === "mar" ? photo.titleMar : photo.title)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (language === "hi" ? photo.descriptionHi : language === "mar" ? photo.descriptionMar : photo.description)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || photo.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case "date":
          comparison = new Date(a.uploadedOn).getTime() - new Date(b.uploadedOn).getTime()
          break
        case "likes":
          comparison = a.likes - b.likes
          break
        case "views":
          comparison = a.views - b.views
          break
      }
      return sortOrder === "asc" ? comparison : -comparison
    })

  // Slideshow functionality
  useEffect(() => {
    if (!isSlideshow || filteredAndSortedPhotos.length === 0) return

    const timer = setInterval(() => {
      setSlideshowIndex((prev) => (prev + 1) % filteredAndSortedPhotos.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isSlideshow, filteredAndSortedPhotos.length])

  const getPhotoTitle = (photo: any) => {
    return language === "hi" ? photo.titleHi : language === "mar" ? photo.titleMar : photo.title
  }

  const getPhotoDescription = (photo: any) => {
    return language === "hi" ? photo.descriptionHi : language === "mar" ? photo.descriptionMar : photo.description
  }

  const getUploadedBy = (photo: any) => {
    return language === "hi" ? photo.uploadedByHi : language === "mar" ? photo.uploadedByMar : photo.uploadedBy
  }

  const getLocation = (photo: any) => {
    return language === "hi" ? photo.locationHi : language === "mar" ? photo.locationMar : photo.location
  }

  const shareImage = async (photo: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: getPhotoTitle(photo),
          text: `${getPhotoDescription(photo)} - ${getLocation(photo)}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      navigator.clipboard.writeText(`${getPhotoTitle(photo)} - ${window.location.href}`)
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

  const toggleLike = (photoId: number) => {
    // In a real app, this would update the database
    console.log(`Toggled like for photo ${photoId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400">
      {/* Enhanced Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  {t.backToHome}
                </Button>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{t.title}</h1>
            </div>

            {/* Language Toggle */}
            <div className="flex bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/20">
              {Object.entries(languageNames).map(([code, name]) => (
                <Button
                  key={code}
                  variant={language === code ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage(code as "en" | "hi" | "mar")}
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
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Search and Controls */}
        <div className="mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Sort */}
                <Select value={sortBy} onValueChange={(value: "date" | "likes" | "views") => setSortBy(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.sortBy} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">{t.sortDate}</SelectItem>
                    <SelectItem value="likes">{t.sortLikes}</SelectItem>
                    <SelectItem value="views">{t.sortViews}</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode and Sort Order */}
                <div className="flex space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    title={t.gridView}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    title={t.listView}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  >
                    {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Upload and Slideshow */}
                <div className="flex space-x-2">
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex-1">
                    <Upload className="w-4 h-4 mr-2" />
                    {t.uploadPhoto}
                  </Button>
                  <Button
                    variant={isSlideshow ? "default" : "outline"}
                    size="icon"
                    onClick={() => setIsSlideshow(!isSlideshow)}
                    title={t.slideshow}
                  >
                    {isSlideshow ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-6">
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
                  <TabsTrigger value="all" className="text-xs">
                    {t.allCategories}
                  </TabsTrigger>
                  <TabsTrigger value="development" className="text-xs">
                    🏗️ {t.categories.development}
                  </TabsTrigger>
                  <TabsTrigger value="education" className="text-xs">
                    🎓 {t.categories.education}
                  </TabsTrigger>
                  <TabsTrigger value="healthcare" className="text-xs">
                    🏥 {t.categories.healthcare}
                  </TabsTrigger>
                  <TabsTrigger value="agriculture" className="text-xs">
                    🌾 {t.categories.agriculture}
                  </TabsTrigger>
                  <TabsTrigger value="community" className="text-xs">
                    👥 {t.categories.community}
                  </TabsTrigger>
                  <TabsTrigger value="environment" className="text-xs">
                    🌱 {t.categories.environment}
                  </TabsTrigger>
                  <TabsTrigger value="visitors" className="text-xs">
                    👥 {t.categories.visitors}
                  </TabsTrigger>
                  <TabsTrigger value="festivals" className="text-xs">
                    🎉 {t.categories.festivals}
                  </TabsTrigger>
                  <TabsTrigger value="achievements" className="text-xs">
                    🏆 {t.categories.achievements}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Slideshow Mode */}
        {isSlideshow && filteredAndSortedPhotos.length > 0 && (
          <div className="mb-8">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-0">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={filteredAndSortedPhotos[slideshowIndex]?.image || "/placeholder.svg"}
                    alt={getPhotoTitle(filteredAndSortedPhotos[slideshowIndex])}
                    fill
                    className="object-contain transition-all duration-1000"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{getPhotoTitle(filteredAndSortedPhotos[slideshowIndex])}</h3>
                    <p className="text-sm opacity-90">{getPhotoDescription(filteredAndSortedPhotos[slideshowIndex])}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {getLocation(filteredAndSortedPhotos[slideshowIndex])}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(filteredAndSortedPhotos[slideshowIndex]?.uploadedOn).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      {slideshowIndex + 1} / {filteredAndSortedPhotos.length}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Photo Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedPhotos.map((photo) => (
              <Card
                key={photo.id}
                className="bg-white/95 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 group transform hover:scale-105"
              >
                <CardContent className="p-0">
                  {/* Enhanced image container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src={photo.image || "/placeholder.svg"}
                      alt={getPhotoTitle(photo)}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      onClick={() => setZoomedImage(photo.image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Featured badge */}
                    {photo.featured && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-yellow-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-600 text-white">
                        {t.categories[photo.category as keyof typeof t.categories]}
                      </Badge>
                    </div>

                    {/* Action buttons */}
                    <div className="absolute bottom-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-white/90 hover:bg-white"
                        onClick={() => setZoomedImage(photo.image)}
                      >
                        <ZoomIn className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-white/90 hover:bg-white"
                        onClick={() => shareImage(photo)}
                      >
                        <Share2 className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-white/90 hover:bg-white"
                        onClick={() => downloadImage(photo.image, `gaon-saathi-${photo.id}.jpg`)}
                      >
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{getPhotoTitle(photo)}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{getPhotoDescription(photo)}</p>

                    {/* Location and date */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {getLocation(photo)}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(photo.uploadedOn).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <button
                        onClick={() => toggleLike(photo.id)}
                        className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                      >
                        <Heart className="w-3 h-3" />
                        <span>{photo.likes}</span>
                      </button>
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{photo.views}</span>
                      </span>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {t.uploadedBy}: {getUploadedBy(photo)}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => setSelectedPhoto(photo)}
                        >
                          {t.viewPhoto}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center justify-between">
                            {getPhotoTitle(photo)}
                            {photo.featured && (
                              <Badge className="bg-yellow-500 text-white">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </DialogTitle>
                        </DialogHeader>
                        {selectedPhoto && (
                          <div className="space-y-4">
                            {/* Full size image */}
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                              <Image
                                src={selectedPhoto.image || "/placeholder.svg"}
                                alt={getPhotoTitle(selectedPhoto)}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 80vw"
                              />
                            </div>
                            <div className="space-y-4">
                              <p className="text-gray-700">{getPhotoDescription(selectedPhoto)}</p>

                              {/* Enhanced metadata */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                  <MapPin className="w-4 h-4 text-gray-400" />
                                  <span>{getLocation(selectedPhoto)}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4 text-gray-400" />
                                  <span>{new Date(selectedPhoto.uploadedOn).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Heart className="w-4 h-4 text-gray-400" />
                                  <span>
                                    {selectedPhoto.likes} {t.likes}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Eye className="w-4 h-4 text-gray-400" />
                                  <span>
                                    {selectedPhoto.views} {t.views}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  <div className="flex items-center">
                                    <User className="w-4 h-4 mr-2" />
                                    {t.uploadedBy}: {getUploadedBy(selectedPhoto)}
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm" onClick={() => shareImage(selectedPhoto)}>
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      downloadImage(selectedPhoto.image, `gaon-saathi-${selectedPhoto.id}.jpg`)
                                    }
                                  >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredAndSortedPhotos.map((photo) => (
              <Card
                key={photo.id}
                className="bg-white/95 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    {/* Image */}
                    <div className="relative w-full md:w-48 aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
                      <Image
                        src={photo.image || "/placeholder.svg"}
                        alt={getPhotoTitle(photo)}
                        fill
                        className="object-contain cursor-pointer"
                        sizes="(max-width: 768px) 100vw, 200px"
                        onClick={() => setZoomedImage(photo.image)}
                      />
                      {photo.featured && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-yellow-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-gray-800">{getPhotoTitle(photo)}</h3>
                        <Badge className="bg-green-600 text-white">
                          {t.categories[photo.category as keyof typeof t.categories]}
                        </Badge>
                      </div>

                      <p className="text-gray-600">{getPhotoDescription(photo)}</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {getLocation(photo)}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(photo.uploadedOn).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-2" />
                          {photo.likes} {t.likes}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          {photo.views} {t.views}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {t.uploadedBy}: {getUploadedBy(photo)}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => setZoomedImage(photo.image)}>
                            <ZoomIn className="w-4 h-4 mr-2" />
                            {t.viewPhoto}
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => shareImage(photo)}>
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadImage(photo.image, `gaon-saathi-${photo.id}.jpg`)}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Photos Found */}
        {filteredAndSortedPhotos.length === 0 && (
          <div className="text-center py-12">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.noPhotos}</h3>
                <p className="text-gray-600">{t.tryDifferent}</p>
              </CardContent>
            </Card>
          </div>
        )}
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
