"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const translations = {
  en: {
    title: "📸 Project Gallery",
    backToHome: "← Back to Home",
    beforeAfter: "Before & After",
    progressPhotos: "Progress Photos",
    completedProjects: "Completed Projects",
    viewFullSize: "View Full Size",
    uploadPhoto: "Upload Photo",
    reportProgress: "Report Progress",
    projectDetails: "Project Details",
    startDate: "Start Date",
    expectedCompletion: "Expected Completion",
    contractor: "Contractor",
    budget: "Budget",
    status: "Status",
  },
  hi: {
    title: "📸 परियोजना गैलरी",
    backToHome: "← वापस होम पेज पर",
    beforeAfter: "पहले और बाद",
    progressPhotos: "प्रगति फोटो",
    completedProjects: "पूर्ण परियोजनाएं",
    viewFullSize: "पूर्ण आकार देखें",
    uploadPhoto: "फोटो अपलोड करें",
    reportProgress: "प्रगति रिपोर्ट करें",
    projectDetails: "परियोजना विवरण",
    startDate: "शुरुआत की तारीख",
    expectedCompletion: "अपेक्षित पूर्णता",
    contractor: "ठेकेदार",
    budget: "बजट",
    status: "स्थिति",
  },
}

const projectGallery = [
  {
    id: 1,
    nameEn: "Village Road Construction",
    nameHi: "गांव सड़क निर्माण",
    completion: 75,
    budget: "₹12,00,000",
    startDate: "Oct 2024",
    expectedCompletion: "Mar 2025",
    contractor: "Rajasthan Construction Ltd.",
    status: "On Track",
    statusHi: "समय पर",
    photos: [
      {
        id: 1,
        type: "before",
        url: "/placeholder.svg?height=300&width=400",
        caption: "Road condition before construction",
        captionHi: "निर्माण से पहले सड़क की स्थिति",
        date: "Oct 2024",
      },
      {
        id: 2,
        type: "progress",
        url: "/placeholder.svg?height=300&width=400",
        caption: "Foundation work in progress",
        captionHi: "नींव का काम प्रगति में",
        date: "Dec 2024",
      },
      {
        id: 3,
        type: "progress",
        url: "/placeholder.svg?height=300&width=400",
        caption: "Concrete laying phase",
        captionHi: "कंक्रीट बिछाने का चरण",
        date: "Jan 2025",
      },
    ],
  },
  {
    id: 2,
    nameEn: "Water Supply Enhancement",
    nameHi: "जल आपूर्ति सुधार",
    completion: 45,
    budget: "₹8,50,000",
    startDate: "Nov 2024",
    expectedCompletion: "Apr 2025",
    contractor: "Jal Shakti Contractors",
    status: "In Progress",
    statusHi: "प्रगति में",
    photos: [
      {
        id: 1,
        type: "before",
        url: "/placeholder.svg?height=300&width=400",
        caption: "Old water supply system",
        captionHi: "पुराना जल आपूर्ति सिस्टम",
        date: "Nov 2024",
      },
      {
        id: 2,
        type: "progress",
        url: "/placeholder.svg?height=300&width=400",
        caption: "Pipeline installation",
        captionHi: "पाइपलाइन स्थापना",
        date: "Dec 2024",
      },
    ],
  },
  {
    id: 3,
    nameEn: "School Building Renovation",
    nameHi: "स्कूल भवन नवीनीकरण",
    completion: 100,
    budget: "₹6,00,000",
    startDate: "Aug 2024",
    expectedCompletion: "Feb 2025",
    contractor: "Education Infrastructure Pvt. Ltd.",
    status: "Completed",
    statusHi: "पूर्ण",
    photos: [
      {
        id: 1,
        type: "before",
        url: "/placeholder.svg?height=300&width=400",
        caption: "Old school building",
        captionHi: "पुराना स्कूल भवन",
        date: "Aug 2024",
      },
      {
        id: 2,
        type: "after",
        url: "/placeholder.svg?height=300&width=400",
        caption: "Renovated school building",
        captionHi: "नवीनीकृत स्कूल भवन",
        date: "Feb 2025",
      },
    ],
  },
]

export default function ProjectGalleryPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const [selectedProject, setSelectedProject] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const t = translations[language]

  const getStatusColor = (status: string) => {
    const colors = {
      "On Track": "bg-green-100 text-green-800",
      "In Progress": "bg-blue-100 text-blue-800",
      Completed: "bg-purple-100 text-purple-800",
      "समय पर": "bg-green-100 text-green-800",
      "प्रगति में": "bg-blue-100 text-blue-800",
      पूर्ण: "bg-purple-100 text-purple-800",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getPhotoTypeColor = (type: string) => {
    const colors = {
      before: "bg-red-100 text-red-800",
      progress: "bg-yellow-100 text-yellow-800",
      after: "bg-green-100 text-green-800",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getPhotoTypeLabel = (type: string) => {
    const labels = {
      before: language === "hi" ? "पहले" : "Before",
      progress: language === "hi" ? "प्रगति" : "Progress",
      after: language === "hi" ? "बाद" : "After",
    }
    return labels[type as keyof typeof labels] || type
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-300 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-indigo-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-indigo-600 text-white shadow-sm" : "text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">{t.title}</h1>
          <p className="text-indigo-600 text-lg">
            {language === "hi" ? "विकास की यात्रा को देखें" : "Witness the journey of development"}
          </p>
        </div>

        {/* Project Selection */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projectGallery.map((project, index) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? "border-indigo-500 shadow-lg scale-105"
                    : "border-indigo-200 hover:shadow-md"
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-indigo-800">
                      {language === "hi" ? project.nameHi : project.nameEn}
                    </CardTitle>
                    <Badge className={getStatusColor(language === "hi" ? project.statusHi : project.status)}>
                      {language === "hi" ? project.statusHi : project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-indigo-600">{t.budget}:</span>
                      <span className="font-medium text-indigo-800">{project.budget}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-indigo-600">Progress:</span>
                        <span className="font-medium text-indigo-800">{project.completion}%</span>
                      </div>
                      <Progress value={project.completion} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Info */}
          <Card className="border-indigo-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-indigo-800">{t.projectDetails}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-indigo-600">{t.startDate}:</p>
                <p className="font-medium text-indigo-800">{projectGallery[selectedProject].startDate}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">{t.expectedCompletion}:</p>
                <p className="font-medium text-indigo-800">{projectGallery[selectedProject].expectedCompletion}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">{t.contractor}:</p>
                <p className="font-medium text-indigo-800">{projectGallery[selectedProject].contractor}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">{t.budget}:</p>
                <p className="font-medium text-indigo-800">{projectGallery[selectedProject].budget}</p>
              </div>
              <div className="pt-4 space-y-2">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">{t.uploadPhoto}</Button>
                <Button variant="outline" className="w-full border-indigo-300 text-indigo-700 bg-transparent">
                  {t.reportProgress}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Photo Gallery */}
          <div className="lg:col-span-2">
            <Card className="border-indigo-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-indigo-800">
                  {language === "hi" ? projectGallery[selectedProject].nameHi : projectGallery[selectedProject].nameEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectGallery[selectedProject].photos.map((photo) => (
                    <div key={photo.id} className="space-y-3">
                      <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(photo.url)}>
                        <img
                          src={photo.url || "/placeholder.svg"}
                          alt={language === "hi" ? photo.captionHi : photo.caption}
                          className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                          <Button
                            variant="secondary"
                            className="opacity-0 group-hover:opacity-100 transition-all"
                            size="sm"
                          >
                            {t.viewFullSize}
                          </Button>
                        </div>
                        <Badge className={`absolute top-2 left-2 ${getPhotoTypeColor(photo.type)}`}>
                          {getPhotoTypeLabel(photo.type)}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-indigo-800">
                          {language === "hi" ? photo.captionHi : photo.caption}
                        </p>
                        <p className="text-xs text-indigo-600">{photo.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedPhoto || "/placeholder.svg"}
                alt="Full size view"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
