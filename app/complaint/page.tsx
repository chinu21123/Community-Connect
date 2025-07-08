"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const translations = {
  en: {
    title: "📋 Submit Your Complaint",
    backToHome: "← Back to Home",
    voiceComplaint: "🎤 Voice Complaint",
    writtenComplaint: "✍️ Written Complaint",
    recordButton: "Record",
    stopButton: "Stop Recording",
    reRecord: "🔁 Re-record",
    submit: "✅ Submit",
    thankYou: "✅ Your complaint has been registered successfully",
    recording: "Recording...",
    playback: "Play Recording",
    instructions: "Press the microphone button and speak your complaint clearly",
    timer: "Recording Time:",
    noAudio: "Audio recording not supported in your browser",
    // Written complaint fields
    complaintType: "Complaint Type",
    selectType: "Select complaint type",
    waterIssue: "💧 Water Supply Issue",
    roadIssue: "🛣️ Road Problem",
    electricityIssue: "⚡ Electricity Problem",
    sanitationIssue: "🚽 Sanitation Issue",
    healthIssue: "🏥 Health Services",
    educationIssue: "🎓 Education Related",
    otherIssue: "📝 Other",
    yourName: "Your Name",
    namePlaceholder: "Enter your full name",
    phoneNumber: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    complaintTitle: "Complaint Title",
    titlePlaceholder: "Brief title of your complaint",
    complaintDetails: "Complaint Details",
    detailsPlaceholder: "Describe your complaint in detail...",
    location: "Location",
    locationPlaceholder: "Specific location of the problem",
    submitWritten: "Submit Written Complaint",
  },
  hi: {
    title: "📋 अपनी शिकायत दर्ज करें",
    backToHome: "← वापस होम पेज पर",
    voiceComplaint: "🎤 आवाज़ से शिकायत",
    writtenComplaint: "✍️ लिखित शिकायत",
    recordButton: "रिकॉर्ड करें",
    stopButton: "रिकॉर्डिंग बंद करें",
    reRecord: "🔁 फिर से रिकॉर्ड करें",
    submit: "✅ सबमिट करें",
    thankYou: "✅ आपकी शिकायत सफलतापूर्वक दर्ज कर ली गई है",
    recording: "रिकॉर्ड हो रहा है...",
    playback: "रिकॉर्डिंग सुनें",
    instructions: "माइक्रोफोन बटन दबाएं और अपनी शिकायत स्पष्ट रूप से बोलें",
    timer: "रिकॉर्डिंग समय:",
    noAudio: "आपके ब्राउज़र में ऑडियो रिकॉर्डिंग समर्थित नहीं है",
    // Written complaint fields
    complaintType: "शिकायत का प्रकार",
    selectType: "शिकायत का प्रकार चुनें",
    waterIssue: "💧 पानी की समस्या",
    roadIssue: "🛣️ सड़क की समस्या",
    electricityIssue: "⚡ बिजली की समस्या",
    sanitationIssue: "🚽 स्वच्छता की समस्या",
    healthIssue: "🏥 स्वास्थ्य सेवाएं",
    educationIssue: "🎓 शिक्षा संबंधी",
    otherIssue: "📝 अन्य",
    yourName: "आपका नाम",
    namePlaceholder: "अपना पूरा नाम लिखें",
    phoneNumber: "फोन नंबर",
    phonePlaceholder: "अपना फोन नंबर लिखें",
    complaintTitle: "शिकायत का शीर्षक",
    titlePlaceholder: "अपनी शिकायत का संक्षिप्त शीर्षक",
    complaintDetails: "शिकायत का विवरण",
    detailsPlaceholder: "अपनी शिकायत का विस्तृत विवरण लिखें...",
    location: "स्थान",
    locationPlaceholder: "समस्या का विशिष्ट स्थान",
    submitWritten: "लिखित शिकायत जमा करें",
  },
}

export default function ComplaintPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const [activeTab, setActiveTab] = useState("voice")

  // Voice complaint states
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecording, setHasRecording] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioSupported, setAudioSupported] = useState(true)

  // Written complaint states
  const [writtenForm, setWrittenForm] = useState({
    name: "",
    phone: "",
    complaintType: "",
    title: "",
    details: "",
    location: "",
  })

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const t = translations[language]

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setAudioSupported(false)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Voice complaint functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
        const url = URL.createObjectURL(audioBlob)
        setAudioUrl(url)
        setHasRecording(true)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } catch (error) {
      console.error("Error accessing microphone:", error)
      setAudioSupported(false)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }

  const playRecording = () => {
    if (audioUrl && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const reRecord = () => {
    setHasRecording(false)
    setAudioUrl(null)
    setRecordingTime(0)
    setIsPlaying(false)
  }

  const submitVoiceComplaint = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setHasRecording(false)
      setAudioUrl(null)
      setRecordingTime(0)
    }, 3000)
  }

  // Written complaint functions
  const handleInputChange = (field: string, value: string) => {
    setWrittenForm((prev) => ({ ...prev, [field]: value }))
  }

  const submitWrittenComplaint = () => {
    // Here you would send the written complaint to your backend
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setWrittenForm({
        name: "",
        phone: "",
        complaintType: "",
        title: "",
        details: "",
        location: "",
      })
    }, 3000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-300 to-cyan-400 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-300 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 via-transparent to-blue-500/20"></div>
      </div>

      <div className="max-w-4xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-white hover:text-green-100 font-medium text-lg drop-shadow-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white/30 backdrop-blur-sm rounded-full p-1 shadow-xl border border-white/50">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi"
                  ? "bg-white text-green-700 shadow-lg transform scale-105"
                  : "text-white hover:bg-white hover:bg-opacity-20"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en"
                  ? "bg-white text-green-700 shadow-lg transform scale-105"
                  : "text-white hover:bg-white hover:bg-opacity-20"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {isSubmitted ? (
          // Thank You Message
          <Card className="border-green-300 shadow-2xl bg-white/95 backdrop-blur-sm border-2 transform scale-105">
            <CardContent className="p-12 text-center">
              <div className="text-8xl mb-8 animate-bounce">✅</div>
              <h2 className="text-3xl font-bold text-green-800 mb-4 drop-shadow-sm">{t.thankYou}</h2>
              <div className="text-6xl mb-4">🙏</div>
            </CardContent>
          </Card>
        ) : (
          // Main Complaint Interface
          <Card className="border-green-300 shadow-2xl bg-white/95 backdrop-blur-sm border-2">
            <CardHeader className="text-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-t-lg">
              <CardTitle className="text-3xl md:text-4xl font-bold text-green-800 drop-shadow-sm mb-4">
                {t.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="voice" className="text-lg py-3">
                    {t.voiceComplaint}
                  </TabsTrigger>
                  <TabsTrigger value="written" className="text-lg py-3">
                    {t.writtenComplaint}
                  </TabsTrigger>
                </TabsList>

                {/* Voice Complaint Tab */}
                <TabsContent value="voice" className="space-y-8">
                  <div className="text-center">
                    <p className="text-green-700 text-lg font-medium mb-6">{t.instructions}</p>
                  </div>

                  {/* Recording Timer */}
                  {(isRecording || hasRecording) && (
                    <div className="text-center">
                      <div className="text-green-700 text-lg font-medium mb-2">{t.timer}</div>
                      <div className="text-4xl font-bold text-green-800 font-mono">{formatTime(recordingTime)}</div>
                    </div>
                  )}

                  {/* Waveform Animation */}
                  {isRecording && (
                    <div className="flex justify-center items-center space-x-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-red-500 rounded-full animate-pulse"
                          style={{
                            width: "8px",
                            height: `${20 + Math.random() * 40}px`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: "0.5s",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Main Microphone Button */}
                  <div className="text-center">
                    <Button
                      onClick={isRecording ? stopRecording : startRecording}
                      disabled={hasRecording && !isRecording}
                      className={`w-32 h-32 md:w-40 md:h-40 rounded-full text-6xl md:text-7xl font-bold shadow-2xl transform transition-all duration-300 ${
                        isRecording
                          ? "bg-red-500 hover:bg-red-600 animate-pulse scale-110"
                          : "bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-110"
                      } text-white`}
                    >
                      {isRecording ? "⏹️" : "🎤"}
                    </Button>

                    <div className="mt-4">
                      <p className="text-xl font-bold text-green-800">{isRecording ? t.stopButton : t.recordButton}</p>
                      {isRecording && <p className="text-red-600 font-medium animate-pulse">{t.recording}</p>}
                    </div>
                  </div>

                  {/* Playback Section */}
                  {hasRecording && audioUrl && (
                    <div className="text-center space-y-4">
                      <Button
                        onClick={playRecording}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-xl font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        {isPlaying ? "⏸️" : "▶️"} {t.playback}
                      </Button>
                      <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
                    </div>
                  )}

                  {/* Action Buttons */}
                  {hasRecording && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={reRecord}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-xl font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        {t.reRecord}
                      </Button>
                      <Button
                        onClick={submitVoiceComplaint}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        {t.submit}
                      </Button>
                    </div>
                  )}
                </TabsContent>

                {/* Written Complaint Tab */}
                <TabsContent value="written" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-green-700 font-medium text-base">
                        {t.yourName}
                      </Label>
                      <Input
                        id="name"
                        value={writtenForm.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t.namePlaceholder}
                        className="h-12 text-lg border-green-300 focus:border-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-green-700 font-medium text-base">
                        {t.phoneNumber}
                      </Label>
                      <Input
                        id="phone"
                        value={writtenForm.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder={t.phonePlaceholder}
                        className="h-12 text-lg border-green-300 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-green-700 font-medium text-base">
                      {t.complaintType}
                    </Label>
                    <Select
                      value={writtenForm.complaintType}
                      onValueChange={(value) => handleInputChange("complaintType", value)}
                    >
                      <SelectTrigger className="h-12 text-lg border-green-300 focus:border-green-500">
                        <SelectValue placeholder={t.selectType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water">{t.waterIssue}</SelectItem>
                        <SelectItem value="road">{t.roadIssue}</SelectItem>
                        <SelectItem value="electricity">{t.electricityIssue}</SelectItem>
                        <SelectItem value="sanitation">{t.sanitationIssue}</SelectItem>
                        <SelectItem value="health">{t.healthIssue}</SelectItem>
                        <SelectItem value="education">{t.educationIssue}</SelectItem>
                        <SelectItem value="other">{t.otherIssue}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-green-700 font-medium text-base">
                      {t.complaintTitle}
                    </Label>
                    <Input
                      id="title"
                      value={writtenForm.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder={t.titlePlaceholder}
                      className="h-12 text-lg border-green-300 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-green-700 font-medium text-base">
                      {t.location}
                    </Label>
                    <Input
                      id="location"
                      value={writtenForm.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder={t.locationPlaceholder}
                      className="h-12 text-lg border-green-300 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details" className="text-green-700 font-medium text-base">
                      {t.complaintDetails}
                    </Label>
                    <Textarea
                      id="details"
                      value={writtenForm.details}
                      onChange={(e) => handleInputChange("details", e.target.value)}
                      placeholder={t.detailsPlaceholder}
                      className="min-h-32 text-lg border-green-300 focus:border-green-500"
                      rows={6}
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      onClick={submitWrittenComplaint}
                      disabled={!writtenForm.name || !writtenForm.details || !writtenForm.complaintType}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl font-semibold rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                    >
                      {t.submitWritten}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
