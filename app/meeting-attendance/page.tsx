"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const translations = {
  en: {
    title: "📋 Meeting Attendance",
    backToHome: "← Back to Home",
    upcomingMeetings: "Upcoming Meetings",
    pastMeetings: "Past Meetings",
    attendanceRecord: "Attendance Record",
    markAttendance: "Mark Attendance",
    meetingDetails: "Meeting Details",
    agenda: "Agenda",
    attendees: "Attendees",
    present: "Present",
    absent: "Absent",
    totalMembers: "Total Members",
    attendanceRate: "Attendance Rate",
    date: "Date",
    time: "Time",
    venue: "Venue",
    status: "Status",
    searchMembers: "Search members...",
    saveAttendance: "Save Attendance",
    viewDetails: "View Details",
  },
  hi: {
    title: "📋 बैठक उपस्थिति",
    backToHome: "← वापस होम पेज पर",
    upcomingMeetings: "आगामी बैठकें",
    pastMeetings: "पिछली बैठकें",
    attendanceRecord: "उपस्थिति रिकॉर्ड",
    markAttendance: "उपस्थिति दर्ज करें",
    meetingDetails: "बैठक विवरण",
    agenda: "कार्यसूची",
    attendees: "उपस्थित सदस्य",
    present: "उपस्थित",
    absent: "अनुपस्थित",
    totalMembers: "कुल सदस्य",
    attendanceRate: "उपस्थिति दर",
    date: "तारीख",
    time: "समय",
    venue: "स्थान",
    status: "स्थिति",
    searchMembers: "सदस्यों को खोजें...",
    saveAttendance: "उपस्थिति सहेजें",
    viewDetails: "विवरण देखें",
  },
}

const meetings = [
  {
    id: 1,
    date: "2025-01-18",
    dateHi: "18 जनवरी, 2025",
    time: "10:00 AM",
    venue: "Panchayat Bhawan",
    venueHi: "पंचायत भवन",
    status: "upcoming",
    agenda: [
      "Review of development projects",
      "Water supply discussion",
      "Road construction approval",
      "Budget allocation",
    ],
    agendaHi: ["विकास परियोजनाओं की समीक्षा", "जल आपूर्ति चर्चा", "सड़क निर्माण अनुमोदन", "बजट आवंटन"],
  },
  {
    id: 2,
    date: "2025-01-05",
    dateHi: "5 जनवरी, 2025",
    time: "10:00 AM",
    venue: "Panchayat Bhawan",
    venueHi: "पंचायत भवन",
    status: "completed",
    attendanceRate: 87,
    totalPresent: 13,
    totalMembers: 15,
  },
  {
    id: 3,
    date: "2024-12-20",
    dateHi: "20 दिसंबर, 2024",
    time: "10:00 AM",
    venue: "Panchayat Bhawan",
    venueHi: "पंचायत भवन",
    status: "completed",
    attendanceRate: 93,
    totalPresent: 14,
    totalMembers: 15,
  },
]

const members = [
  {
    id: 1,
    name: "Smt. Badri Bai Gurjar",
    nameHi: "श्रीमती बद्री बाई गुर्जर",
    role: "Sarpanch",
    roleHi: "सरपंच",
    phone: "+91 7568459199",
    attendance: true,
  },
  {
    id: 2,
    name: "Shri Ram Singh",
    nameHi: "श्री राम सिंह",
    role: "Ward Member",
    roleHi: "वार्ड सदस्य",
    phone: "+91 9876543210",
    attendance: true,
  },
  {
    id: 3,
    name: "Smt. Geeta Devi",
    nameHi: "श्रीमती गीता देवी",
    role: "Ward Member",
    roleHi: "वार्ड सदस्य",
    phone: "+91 9876543211",
    attendance: false,
  },
  {
    id: 4,
    name: "Shri Mohan Lal",
    nameHi: "श्री मोहन लाल",
    role: "Ward Member",
    roleHi: "वार्ड सदस्य",
    phone: "+91 9876543212",
    attendance: true,
  },
  {
    id: 5,
    name: "Smt. Kamla Devi",
    nameHi: "श्रीमती कमला देवी",
    role: "Ward Member",
    roleHi: "वार्ड सदस्य",
    phone: "+91 9876543213",
    attendance: true,
  },
]

export default function MeetingAttendancePage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const [searchTerm, setSearchTerm] = useState("")
  const [memberAttendance, setMemberAttendance] = useState(
    members.reduce((acc, member) => ({ ...acc, [member.id]: member.attendance }), {} as Record<number, boolean>),
  )
  const t = translations[language]

  const filteredMembers = members.filter((member) =>
    (language === "hi" ? member.nameHi : member.name).toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleAttendance = (memberId: number) => {
    setMemberAttendance((prev) => ({
      ...prev,
      [memberId]: !prev[memberId],
    }))
  }

  const presentCount = Object.values(memberAttendance).filter(Boolean).length
  const attendancePercentage = Math.round((presentCount / members.length) * 100)

  const upcomingMeetings = meetings.filter((m) => m.status === "upcoming")
  const pastMeetings = meetings.filter((m) => m.status === "completed")

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-teal-300 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-teal-600 hover:text-teal-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-teal-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-teal-600 text-white shadow-sm" : "text-teal-600 hover:bg-teal-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-teal-600 text-white shadow-sm" : "text-teal-600 hover:bg-teal-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">{t.title}</h1>
          <p className="text-teal-600 text-lg">
            {language === "hi" ? "डिजिटल उपस्थिति प्रबंधन" : "Digital Attendance Management"}
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">{t.upcomingMeetings}</TabsTrigger>
            <TabsTrigger value="past">{t.pastMeetings}</TabsTrigger>
            <TabsTrigger value="attendance">{t.markAttendance}</TabsTrigger>
          </TabsList>

          {/* Upcoming Meetings Tab */}
          <TabsContent value="upcoming">
            <div className="space-y-6">
              {upcomingMeetings.map((meeting) => (
                <Card key={meeting.id} className="border-blue-200 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-blue-800 text-xl">
                          {language === "hi" ? meeting.dateHi : meeting.date}
                        </CardTitle>
                        <p className="text-blue-600">
                          {meeting.time} • {language === "hi" ? meeting.venueHi : meeting.venue}
                        </p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">{t.status}: Upcoming</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-blue-800 mb-2">{t.agenda}:</h4>
                      <ul className="space-y-1">
                        {(language === "hi" ? meeting.agendaHi : meeting.agenda).map((item, index) => (
                          <li key={index} className="text-blue-700 text-sm flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">{t.viewDetails}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Meetings Tab */}
          <TabsContent value="past">
            <div className="space-y-6">
              {pastMeetings.map((meeting) => (
                <Card key={meeting.id} className="border-green-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-green-800">
                          {language === "hi" ? meeting.dateHi : meeting.date}
                        </h3>
                        <p className="text-green-600">
                          {meeting.time} • {language === "hi" ? meeting.venueHi : meeting.venue}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-800">{meeting.attendanceRate}%</div>
                        <div className="text-sm text-green-600">{t.attendanceRate}</div>
                        <div className="text-sm text-green-600">
                          {meeting.totalPresent}/{meeting.totalMembers} {t.present}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mark Attendance Tab */}
          <TabsContent value="attendance">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Attendance Summary */}
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800">{t.attendanceRecord}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-800">{attendancePercentage}%</div>
                      <div className="text-purple-600">{t.attendanceRate}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-800">{presentCount}</div>
                        <div className="text-green-600 text-sm">{t.present}</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-red-800">{members.length - presentCount}</div>
                        <div className="text-red-600 text-sm">{t.absent}</div>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => alert("Attendance saved!")}
                    >
                      {t.saveAttendance}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Member List */}
              <div className="lg:col-span-2">
                <Card className="border-teal-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-teal-800">{t.attendees}</CardTitle>
                    <Input
                      placeholder={t.searchMembers}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-teal-300"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredMembers.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center justify-between p-4 border border-teal-200 rounded-lg hover:bg-teal-50 transition-all"
                        >
                          <div className="flex items-center space-x-4">
                            <Checkbox
                              checked={memberAttendance[member.id]}
                              onCheckedChange={() => toggleAttendance(member.id)}
                              className="border-teal-400"
                            />
                            <div>
                              <h4 className="font-medium text-teal-800">
                                {language === "hi" ? member.nameHi : member.name}
                              </h4>
                              <p className="text-sm text-teal-600">
                                {language === "hi" ? member.roleHi : member.role} • {member.phone}
                              </p>
                            </div>
                          </div>
                          <Badge
                            className={
                              memberAttendance[member.id] ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }
                          >
                            {memberAttendance[member.id] ? t.present : t.absent}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
