import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Download, FileText, CreditCard, Shield, MessageSquare } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    title: "Government Services Portal",
    subtitle: "Access all government schemes, track applications, and manage documents",
    welcome: "Welcome",
    guest: "Guest",
    tabs: {
      schemes: "Government Schemes",
      tracking: "Application Tracking",
      documents: "Documents & Certificates",
      payments: "Digital Payments",
      verification: "Document Verification",
      grievance: "Grievance Portal",
    },
    schemes: {
      title: "Available Government Schemes",
      subtitle: "Apply for various government schemes and benefits",
      pmKisan: {
        name: "PM-KISAN Samman Nidhi",
        description: "Direct income support to farmers",
        amount: "₹6,000 per year",
        eligibility: "Small & marginal farmers",
        documents: "Aadhaar, Bank Account, Land Records",
        deadline: "Open throughout the year",
        status: "Active",
      },
      pmAwas: {
        name: "Pradhan Mantri Awas Yojana",
        description: "Housing scheme for rural areas",
        amount: "Up to ₹2.5 lakh subsidy",
        eligibility: "BPL families without pucca house",
        documents: "Income Certificate, Aadhaar, Bank Account",
        deadline: "31st March 2025",
        status: "Active",
      },
      ayushman: {
        name: "Ayushman Bharat",
        description: "Health insurance coverage",
        amount: "₹5 lakh per family per year",
        eligibility: "As per SECC-2011 database",
        documents: "Aadhaar, Ration Card",
        deadline: "Ongoing",
        status: "Active",
      },
      mgnrega: {
        name: "MGNREGA",
        description: "Guaranteed employment scheme",
        amount: "₹220 per day (Rajasthan)",
        eligibility: "Adult members of rural households",
        documents: "Job Card, Aadhaar, Bank Account",
        deadline: "Ongoing",
        status: "Active",
      },
    },
    tracking: {
      title: "Track Your Applications",
      subtitle: "Monitor the status of your government scheme applications",
      searchPlaceholder: "Enter Application ID or Aadhaar Number",
      applications: [
        {
          id: "PM-KIS-2025-001234",
          scheme: "PM-KISAN Samman Nidhi",
          status: "Approved",
          progress: 100,
          appliedDate: "15 Jan 2025",
          lastUpdate: "25 Jan 2025",
          nextAction: "Amount credited to account",
          installment: "1st Installment: ₹2,000",
        },
        {
          id: "PM-AWS-2025-005678",
          scheme: "PM Awas Yojana",
          status: "Under Review",
          progress: 60,
          appliedDate: "10 Feb 2025",
          lastUpdate: "20 Feb 2025",
          nextAction: "Site verification pending",
          installment: "Pending approval",
        },
        {
          id: "AYU-BHT-2025-009876",
          scheme: "Ayushman Bharat",
          status: "Active",
          progress: 100,
          appliedDate: "05 Jan 2025",
          lastUpdate: "12 Jan 2025",
          nextAction: "Card ready for download",
          installment: "Coverage: ₹5,00,000",
        },
      ],
    },
    documents: {
      title: "Apply for Documents & Certificates",
      subtitle: "Get official documents and certificates online",
      services: [
        {
          name: "Birth Certificate",
          fee: "₹50",
          time: "7 days",
          description: "Official birth certificate from registrar",
        },
        {
          name: "Income Certificate",
          fee: "₹30",
          time: "10 days",
          description: "Income certificate for various purposes",
        },
        {
          name: "Caste Certificate",
          fee: "₹40",
          time: "15 days",
          description: "Caste certificate for reservations",
        },
        {
          name: "Domicile Certificate",
          fee: "₹25",
          time: "5 days",
          description: "Proof of residence certificate",
        },
      ],
    },
    payments: {
      title: "Digital Payments",
      subtitle: "Pay for government services online",
      recentPayments: [
        {
          id: "PAY-2025-001",
          service: "Birth Certificate",
          amount: "₹50",
          date: "15 Mar 2025",
          status: "Success",
          receipt: "RCP-001234",
        },
        {
          id: "PAY-2025-002",
          service: "Income Certificate",
          amount: "₹30",
          date: "10 Mar 2025",
          status: "Success",
          receipt: "RCP-001235",
        },
      ],
    },
    verification: {
      title: "Document Verification",
      subtitle: "Verify the authenticity of government documents",
      verifyPlaceholder: "Enter document number or QR code",
    },
    grievance: {
      title: "Grievance Portal",
      subtitle: "Register complaints and track their resolution",
      registerComplaint: "Register New Complaint",
      trackComplaint: "Track Existing Complaint",
      recentGrievances: [
        {
          id: "GRV-2025-001",
          subject: "Delay in PM-KISAN payment",
          status: "Under Investigation",
          date: "20 Mar 2025",
          department: "Agriculture Department",
        },
        {
          id: "GRV-2025-002",
          subject: "Ration card not received",
          status: "Resolved",
          date: "15 Mar 2025",
          department: "Food & Civil Supplies",
        },
      ],
    },
    common: {
      apply: "Apply Now",
      track: "Track Status",
      download: "Download",
      verify: "Verify",
      viewDetails: "View Details",
      status: "Status",
      amount: "Amount",
      eligibility: "Eligibility",
      documents: "Required Documents",
      deadline: "Deadline",
      active: "Active",
      approved: "Approved",
      underReview: "Under Review",
      pending: "Pending",
      success: "Success",
      failed: "Failed",
    },
  },
  hi: {
    title: "सरकारी सेवा पोर्टल",
    subtitle: "सभी सरकारी योजनाओं तक पहुंच, आवेदन ट्रैक करें और दस्तावेज़ प्रबंधित करें",
    welcome: "स्वागत",
    guest: "अतिथि",
    tabs: {
      schemes: "सरकारी योजनाएं",
      tracking: "आवेदन ट्रैकिंग",
      documents: "दस्तावेज़ और प्रमाणपत्र",
      payments: "डिजिटल भुगतान",
      verification: "दस्तावेज़ सत्यापन",
      grievance: "शिकायत पोर्टल",
    },
    schemes: {
      title: "उपलब्ध सरकारी योजनाएं",
      subtitle: "विभिन्न सरकारी योजनाओं और लाभों के लिए आवेदन करें",
      pmKisan: {
        name: "पीएम-किसान सम्मान निधि",
        description: "किसानों को प्रत्यक्ष आय सहायता",
        amount: "₹6,000 प्रति वर्ष",
        eligibility: "छोटे और सीमांत किसान",
        documents: "आधार, बैंक खाता, भूमि रिकॉर्ड",
        deadline: "पूरे साल खुला",
        status: "सक्रिय",
      },
      pmAwas: {
        name: "प्रधानमंत्री आवास योजना",
        description: "ग्रामीण क्षेत्रों के लिए आवास योजना",
        amount: "₹2.5 लाख तक सब्सिडी",
        eligibility: "बिना पक्के मकान वाले बीपीएल परिवार",
        documents: "आय प्रमाणपत्र, आधार, बैंक खाता",
        deadline: "31 मार्च 2025",
        status: "सक्रिय",
      },
      ayushman: {
        name: "आयुष्मान भारत",
        description: "स्वास्थ्य बीमा कवरेज",
        amount: "₹5 लाख प्रति परिवार प्रति वर्ष",
        eligibility: "SECC-2011 डेटाबेस के अनुसार",
        documents: "आधार, राशन कार्ड",
        deadline: "चालू",
        status: "सक्रिय",
      },
      mgnrega: {
        name: "मनरेगा",
        description: "गारंटीशुदा रोजगार योजना",
        amount: "₹220 प्रति दिन (राजस्थान)",
        eligibility: "ग्रामीण परिवारों के वयस्क सदस्य",
        documents: "जॉब कार्ड, आधार, बैंक खाता",
        deadline: "चालू",
        status: "सक्रिय",
      },
    },
    tracking: {
      title: "अपने आवेदन ट्रैक करें",
      subtitle: "अपनी सरकारी योजना आवेदनों की स्थिति की निगरानी करें",
      searchPlaceholder: "आवेदन आईडी या आधार नंबर दर्ज करें",
      applications: [
        {
          id: "PM-KIS-2025-001234",
          scheme: "पीएम-किसान सम्मान निधि",
          status: "स्वीकृत",
          progress: 100,
          appliedDate: "15 जनवरी 2025",
          lastUpdate: "25 जनवरी 2025",
          nextAction: "राशि खाते में जमा",
          installment: "पहली किस्त: ₹2,000",
        },
        {
          id: "PM-AWS-2025-005678",
          scheme: "पीएम आवास योजना",
          status: "समीक्षाधीन",
          progress: 60,
          appliedDate: "10 फरवरी 2025",
          lastUpdate: "20 फरवरी 2025",
          nextAction: "साइट सत्यापन लंबित",
          installment: "अनुमोदन लंबित",
        },
        {
          id: "AYU-BHT-2025-009876",
          scheme: "आयुष्मान भारत",
          status: "सक्रिय",
          progress: 100,
          appliedDate: "05 जनवरी 2025",
          lastUpdate: "12 जनवरी 2025",
          nextAction: "कार्ड डाउनलोड के लिए तैयार",
          installment: "कवरेज: ₹5,00,000",
        },
      ],
    },
    documents: {
      title: "दस्तावेज़ और प्रमाणपत्र के लिए आवेदन करें",
      subtitle: "ऑनलाइन आधिकारिक दस्तावेज़ और प्रमाणपत्र प्राप्त करें",
      services: [
        {
          name: "जन्म प्रमाणपत्र",
          fee: "₹50",
          time: "7 दिन",
          description: "रजिस्ट्रार से आधिकारिक जन्म प्रमाणपत्र",
        },
        {
          name: "आय प्रमाणपत्र",
          fee: "₹30",
          time: "10 दिन",
          description: "विभिन्न उद्देश्यों के लिए आय प्रमाणपत्र",
        },
        {
          name: "जाति प्रमाणपत्र",
          fee: "₹40",
          time: "15 दिन",
          description: "आरक्षण के लिए जाति प्रमाणपत्र",
        },
        {
          name: "निवास प्रमाणपत्र",
          fee: "₹25",
          time: "5 दिन",
          description: "निवास प्रमाण प्रमाणपत्र",
        },
      ],
    },
    payments: {
      title: "डिजिटल भुगतान",
      subtitle: "सरकारी सेवाओं के लिए ऑनलाइन भुगतान करें",
      recentPayments: [
        {
          id: "PAY-2025-001",
          service: "जन्म प्रमाणपत्र",
          amount: "₹50",
          date: "15 मार्च 2025",
          status: "सफल",
          receipt: "RCP-001234",
        },
        {
          id: "PAY-2025-002",
          service: "आय प्रमाणपत्र",
          amount: "₹30",
          date: "10 मार्च 2025",
          status: "सफल",
          receipt: "RCP-001235",
        },
      ],
    },
    verification: {
      title: "दस्तावेज़ सत्यापन",
      subtitle: "सरकारी दस्तावेजों की प्रामाणिकता सत्यापित करें",
      verifyPlaceholder: "दस्तावेज़ नंबर या QR कोड दर्ज करें",
    },
    grievance: {
      title: "शिकायत पोर्टल",
      subtitle: "शिकायतें दर्ज करें और उनके समाधान को ट्रैक करें",
      registerComplaint: "नई शिकायत दर्ज करें",
      trackComplaint: "मौजूदा शिकायत ट्रैक करें",
      recentGrievances: [
        {
          id: "GRV-2025-001",
          subject: "पीएम-किसान भुगतान में देरी",
          status: "जांच के तहत",
          date: "20 मार्च 2025",
          department: "कृषि विभाग",
        },
        {
          id: "GRV-2025-002",
          subject: "राशन कार्ड नहीं मिला",
          status: "हल हो गया",
          date: "15 मार्च 2025",
          department: "खाद्य और नागरिक आपूर्ति",
        },
      ],
    },
    common: {
      apply: "अभी आवेदन करें",
      track: "स्थिति ट्रैक करें",
      download: "डाउनलोड करें",
      verify: "सत्यापित करें",
      viewDetails: "विवरण देखें",
      status: "स्थिति",
      amount: "राशि",
      eligibility: "पात्रता",
      documents: "आवश्यक दस्तावेज़",
      deadline: "अंतिम तिथि",
      active: "सक्रिय",
      approved: "स्वीकृत",
      underReview: "समीक्षाधीन",
      pending: "लंबित",
      success: "सफल",
      failed: "असफल",
    },
  },
}

export default function GovernmentServicesPage() {
  const language = "hi" // Default to Hindi
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-blue-100 text-lg mb-4">{t.subtitle}</p>
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2">
              <span className="text-sm">
                {t.welcome}, {t.guest}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="schemes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
            <TabsTrigger value="schemes" className="text-xs">
              📋 {t.tabs.schemes.split(" ")[0]}
            </TabsTrigger>
            <TabsTrigger value="tracking" className="text-xs">
              📊 {t.tabs.tracking.split(" ")[0]}
            </TabsTrigger>
            <TabsTrigger value="documents" className="text-xs">
              📄 {t.tabs.documents.split(" ")[0]}
            </TabsTrigger>
            <TabsTrigger value="payments" className="text-xs">
              💳 {t.tabs.payments.split(" ")[0]}
            </TabsTrigger>
            <TabsTrigger value="verification" className="text-xs">
              🔍 {t.tabs.verification.split(" ")[0]}
            </TabsTrigger>
            <TabsTrigger value="grievance" className="text-xs">
              📢 {t.tabs.grievance.split(" ")[0]}
            </TabsTrigger>
          </TabsList>

          {/* Government Schemes Tab */}
          <TabsContent value="schemes">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.schemes.title}</h2>
                <p className="text-gray-600">{t.schemes.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(t.schemes)
                  .filter(([key]) => !["title", "subtitle"].includes(key))
                  .map(([key, scheme]) => (
                    <Card key={key} className="shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl text-blue-800">{scheme.name}</CardTitle>
                          <Badge className="bg-green-100 text-green-800">{scheme.status}</Badge>
                        </div>
                        <p className="text-gray-600">{scheme.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">{t.common.amount}</p>
                            <p className="text-lg font-semibold text-green-600">{scheme.amount}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">{t.common.deadline}</p>
                            <p className="text-sm text-gray-800">{scheme.deadline}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm font-medium text-gray-500">{t.common.eligibility}</p>
                            <p className="text-sm text-gray-800">{scheme.eligibility}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm font-medium text-gray-500">{t.common.documents}</p>
                            <p className="text-sm text-gray-800">{scheme.documents}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <FileText className="w-4 h-4 mr-2" />
                            {t.common.apply}
                          </Button>
                          <Button variant="outline">{t.common.viewDetails}</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Application Tracking Tab */}
          <TabsContent value="tracking">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.tracking.title}</h2>
                <p className="text-gray-600">{t.tracking.subtitle}</p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder={t.tracking.searchPlaceholder}
                      className="pl-10 border-blue-300 focus:border-blue-500"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {t.tracking.applications.map((app, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg text-blue-800">{app.scheme}</CardTitle>
                          <p className="text-sm text-gray-500">ID: {app.id}</p>
                        </div>
                        <Badge
                          className={
                            app.status === "स्वीकृत"
                              ? "bg-green-100 text-green-800"
                              : app.status === "समीक्षाधीन"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }
                        >
                          {app.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>प्रगति</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-500">आवेदन तिथि</p>
                          <p>{app.appliedDate}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-500">अंतिम अपडेट</p>
                          <p>{app.lastUpdate}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="font-medium text-gray-500">अगली कार्रवाई</p>
                          <p>{app.nextAction}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="font-medium text-gray-500">विवरण</p>
                          <p className="text-green-600 font-medium">{app.installment}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {t.common.viewDetails}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.documents.title}</h2>
                <p className="text-gray-600">{t.documents.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.documents.services.map((service, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-800">{service.name}</CardTitle>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium text-gray-500">शुल्क</p>
                          <p className="text-green-600 font-semibold">{service.fee}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-500">समय</p>
                          <p>{service.time}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <FileText className="w-4 h-4 mr-2" />
                        {t.common.apply}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.payments.title}</h2>
                <p className="text-gray-600">{t.payments.subtitle}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">हाल के भुगतान</h3>
                {t.payments.recentPayments.map((payment, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{payment.service}</p>
                            <p className="text-sm text-gray-500">ID: {payment.id}</p>
                            <p className="text-sm text-gray-500">{payment.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-green-600">{payment.amount}</p>
                          <Badge className="bg-green-100 text-green-800">{payment.status}</Badge>
                          <p className="text-xs text-gray-500 mt-1">रसीद: {payment.receipt}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          रसीद डाउनलोड करें
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Verification Tab */}
          <TabsContent value="verification">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.verification.title}</h2>
                <p className="text-gray-600">{t.verification.subtitle}</p>
              </div>

              <Card className="shadow-lg max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">दस्तावेज़ सत्यापन</h3>
                  </div>
                  <div className="space-y-4">
                    <Input placeholder={t.verification.verifyPlaceholder} className="text-center" />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Shield className="w-4 h-4 mr-2" />
                      {t.common.verify}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Grievance Tab */}
          <TabsContent value="grievance">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.grievance.title}</h2>
                <p className="text-gray-600">{t.grievance.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.grievance.registerComplaint}</h3>
                    <Button className="bg-red-600 hover:bg-red-700">नई शिकायत दर्ज करें</Button>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.grievance.trackComplaint}</h3>
                    <Button variant="outline">शिकायत ट्रैक करें</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">हाल की शिकायतें</h3>
                {t.grievance.recentGrievances.map((grievance, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800">{grievance.subject}</p>
                          <p className="text-sm text-gray-500">ID: {grievance.id}</p>
                          <p className="text-sm text-gray-500">{grievance.department}</p>
                          <p className="text-sm text-gray-500">{grievance.date}</p>
                        </div>
                        <Badge
                          className={
                            grievance.status === "हल हो गया"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {grievance.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Back to Home Link */}
      <div className="text-center py-8">
        <Link href="/">
          <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent">
            ← होम पेज पर वापस जाएं
          </Button>
        </Link>
      </div>
    </div>
  )
}
