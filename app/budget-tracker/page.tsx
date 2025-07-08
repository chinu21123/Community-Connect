"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

const translations = {
  en: {
    title: "💰 Budget Tracker",
    backToHome: "← Back to Home",
    budgetOverview: "Budget Overview",
    expenseTracking: "Expense Tracking",
    alerts: "Budget Alerts",
    reports: "Financial Reports",
    totalBudget: "Total Budget",
    totalSpent: "Total Spent",
    remaining: "Remaining",
    budgetUtilization: "Budget Utilization",
    addExpense: "Add Expense",
    category: "Category",
    amount: "Amount",
    description: "Description",
    date: "Date",
    submit: "Submit",
    recentExpenses: "Recent Expenses",
    budgetAlert: "Budget Alert",
    warningThreshold: "Warning: 80% budget utilized",
    criticalThreshold: "Critical: 95% budget utilized",
    // Categories
    infrastructure: "Infrastructure",
    education: "Education",
    health: "Health",
    welfare: "Welfare Schemes",
    administration: "Administration",
  },
  hi: {
    title: "💰 बजट ट्रैकर",
    backToHome: "← वापस होम पेज पर",
    budgetOverview: "बजट अवलोकन",
    expenseTracking: "व्यय ट्रैकिंग",
    alerts: "बजट अलर्ट",
    reports: "वित्तीय रिपोर्ट",
    totalBudget: "कुल बजट",
    totalSpent: "कुल खर्च",
    remaining: "शेष",
    budgetUtilization: "बजट उपयोग",
    addExpense: "व्यय जोड़ें",
    category: "श्रेणी",
    amount: "राशि",
    description: "विवरण",
    date: "तारीख",
    submit: "जमा करें",
    recentExpenses: "हाल के व्यय",
    budgetAlert: "बजट अलर्ट",
    warningThreshold: "चेतावनी: 80% बजट का उपयोग",
    criticalThreshold: "गंभीर: 95% बजट का उपयोग",
    // Categories
    infrastructure: "बुनियादी ढांचा",
    education: "शिक्षा",
    health: "स्वास्थ्य",
    welfare: "कल्याण योजनाएं",
    administration: "प्रशासन",
  },
}

const budgetData = [
  {
    category: "infrastructure",
    allocated: 2500000,
    spent: 1875000,
    percentage: 75,
    color: "bg-blue-500",
    projects: ["Road Construction", "Water Supply", "Street Lights"],
  },
  {
    category: "education",
    allocated: 1200000,
    spent: 1080000,
    percentage: 90,
    color: "bg-green-500",
    projects: ["School Renovation", "Library Setup", "Computer Lab"],
  },
  {
    category: "health",
    allocated: 1000000,
    spent: 450000,
    percentage: 45,
    color: "bg-red-500",
    projects: ["Health Center Upgrade", "Medical Equipment", "Ambulance"],
  },
  {
    category: "welfare",
    allocated: 800000,
    spent: 720000,
    percentage: 90,
    color: "bg-yellow-500",
    projects: ["Pension Scheme", "Food Distribution", "Skill Training"],
  },
  {
    category: "administration",
    allocated: 500000,
    spent: 475000,
    percentage: 95,
    color: "bg-purple-500",
    projects: ["Office Expenses", "Staff Salaries", "Equipment"],
  },
]

const recentExpenses = [
  {
    id: 1,
    category: "infrastructure",
    amount: 150000,
    description: "Road construction materials",
    descriptionHi: "सड़क निर्माण सामग्री",
    date: "2025-01-15",
    approvedBy: "Sarpanch",
  },
  {
    id: 2,
    category: "education",
    amount: 75000,
    description: "School furniture purchase",
    descriptionHi: "स्कूल फर्नीचर खरीद",
    date: "2025-01-12",
    approvedBy: "Education Committee",
  },
  {
    id: 3,
    category: "health",
    amount: 25000,
    description: "Medical supplies",
    descriptionHi: "चिकित्सा आपूर्ति",
    date: "2025-01-10",
    approvedBy: "Health Officer",
  },
]

export default function BudgetTrackerPage() {
  const [language, setLanguage] = useState<"en" | "hi">("hi")
  const [newExpense, setNewExpense] = useState({
    category: "",
    amount: "",
    description: "",
    date: "",
  })
  const t = translations[language]

  const totalBudget = budgetData.reduce((sum, item) => sum + item.allocated, 0)
  const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0)
  const totalRemaining = totalBudget - totalSpent
  const overallUtilization = Math.round((totalSpent / totalBudget) * 100)

  const getCategoryName = (category: string) => {
    return t[category as keyof typeof t] || category
  }

  const getCategoryColor = (category: string) => {
    const item = budgetData.find((b) => b.category === category)
    return item?.color || "bg-gray-500"
  }

  const getAlertLevel = (percentage: number) => {
    if (percentage >= 95) return "critical"
    if (percentage >= 80) return "warning"
    return "normal"
  }

  const getAlertColor = (level: string) => {
    const colors = {
      critical: "border-red-500 bg-red-50 text-red-800",
      warning: "border-yellow-500 bg-yellow-50 text-yellow-800",
      normal: "border-green-500 bg-green-50 text-green-800",
    }
    return colors[level as keyof typeof colors] || colors.normal
  }

  const handleExpenseSubmit = () => {
    // Here you would typically send the data to your backend
    alert(language === "hi" ? "व्यय सफलतापूर्वक जोड़ा गया!" : "Expense added successfully!")
    setNewExpense({ category: "", amount: "", description: "", date: "" })
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`
    return `₹${amount}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-emerald-300 rounded-full opacity-25 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto p-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-emerald-600 hover:text-emerald-800 font-medium text-lg">
            {t.backToHome}
          </Link>
          <div className="bg-white rounded-full p-1 shadow-md border border-emerald-200">
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "hi" ? "bg-emerald-600 text-white shadow-sm" : "text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              हिंदी
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
                language === "en" ? "bg-emerald-600 text-white shadow-sm" : "text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              English
            </Button>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">{t.title}</h1>
          <p className="text-emerald-600 text-lg">
            {language === "hi" ? "पारदर्शी वित्तीय प्रबंधन" : "Transparent Financial Management"}
          </p>
        </div>

        {/* Budget Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-2xl font-bold text-blue-800">{formatCurrency(totalBudget)}</div>
              <div className="text-blue-600">{t.totalBudget}</div>
            </CardContent>
          </Card>
          <Card className="border-red-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💸</div>
              <div className="text-2xl font-bold text-red-800">{formatCurrency(totalSpent)}</div>
              <div className="text-red-600">{t.totalSpent}</div>
            </CardContent>
          </Card>
          <Card className="border-green-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💵</div>
              <div className="text-2xl font-bold text-green-800">{formatCurrency(totalRemaining)}</div>
              <div className="text-green-600">{t.remaining}</div>
            </CardContent>
          </Card>
          <Card className="border-purple-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl font-bold text-purple-800">{overallUtilization}%</div>
              <div className="text-purple-600">{t.budgetUtilization}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">{t.budgetOverview}</TabsTrigger>
            <TabsTrigger value="expenses">{t.expenseTracking}</TabsTrigger>
            <TabsTrigger value="alerts">{t.alerts}</TabsTrigger>
            <TabsTrigger value="reports">{t.reports}</TabsTrigger>
          </TabsList>

          {/* Budget Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {budgetData.map((budget) => (
                <Card key={budget.category} className="border-emerald-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-emerald-800 flex items-center justify-between">
                      <span>{getCategoryName(budget.category)}</span>
                      <Badge className={getAlertColor(getAlertLevel(budget.percentage))}>{budget.percentage}%</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-emerald-600">Allocated:</span>
                        <span className="font-medium text-emerald-800">{formatCurrency(budget.allocated)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-emerald-600">Spent:</span>
                        <span className="font-medium text-emerald-800">{formatCurrency(budget.spent)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-emerald-600">Remaining:</span>
                        <span className="font-medium text-emerald-800">
                          {formatCurrency(budget.allocated - budget.spent)}
                        </span>
                      </div>
                    </div>
                    <Progress value={budget.percentage} className="h-3" />
                    <div>
                      <p className="text-sm text-emerald-600 mb-2">Active Projects:</p>
                      <div className="flex flex-wrap gap-1">
                        {budget.projects.map((project, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Expense Tracking Tab */}
          <TabsContent value="expenses">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add Expense Form */}
              <Card className="border-cyan-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-cyan-800">{t.addExpense}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-cyan-700">{t.category}</label>
                    <select
                      value={newExpense.category}
                      onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                      className="w-full p-3 border border-cyan-300 rounded-md focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="">Select category</option>
                      {budgetData.map((budget) => (
                        <option key={budget.category} value={budget.category}>
                          {getCategoryName(budget.category)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-cyan-700">{t.amount}</label>
                    <Input
                      type="number"
                      value={newExpense.amount}
                      onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                      placeholder="Enter amount"
                      className="border-cyan-300 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-cyan-700">{t.description}</label>
                    <Input
                      value={newExpense.description}
                      onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                      placeholder="Enter description"
                      className="border-cyan-300 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-cyan-700">{t.date}</label>
                    <Input
                      type="date"
                      value={newExpense.date}
                      onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                      className="border-cyan-300 focus:border-cyan-500"
                    />
                  </div>
                  <Button
                    onClick={handleExpenseSubmit}
                    disabled={!newExpense.category || !newExpense.amount || !newExpense.description}
                    className="w-full bg-cyan-600 hover:bg-cyan-700"
                  >
                    {t.submit}
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Expenses */}
              <Card className="border-teal-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-teal-800">{t.recentExpenses}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentExpenses.map((expense) => (
                      <div key={expense.id} className="border-l-4 border-teal-300 pl-4 py-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-teal-800">
                              {language === "hi" ? expense.descriptionHi : expense.description}
                            </h4>
                            <p className="text-sm text-teal-600">
                              {getCategoryName(expense.category)} • {expense.date}
                            </p>
                            <p className="text-xs text-teal-500">Approved by: {expense.approvedBy}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-teal-800">{formatCurrency(expense.amount)}</p>
                            <Badge className={getCategoryColor(expense.category) + " text-white text-xs"}>
                              {getCategoryName(expense.category)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Budget Alerts Tab */}
          <TabsContent value="alerts">
            <div className="space-y-6">
              {budgetData
                .filter((budget) => budget.percentage >= 80)
                .map((budget) => (
                  <Alert key={budget.category} className={getAlertColor(getAlertLevel(budget.percentage))}>
                    <AlertDescription>
                      <div className="flex justify-between items-center">
                        <div>
                          <strong>{getCategoryName(budget.category)}</strong>
                          <p className="text-sm">
                            {budget.percentage >= 95 ? t.criticalThreshold : t.warningThreshold}
                          </p>
                          <p className="text-sm">
                            Spent: {formatCurrency(budget.spent)} of {formatCurrency(budget.allocated)}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{budget.percentage}%</div>
                          <div className="text-sm">Utilized</div>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                ))}
            </div>
          </TabsContent>

          {/* Financial Reports Tab */}
          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-indigo-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-indigo-800">Monthly Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-indigo-600">Total Allocated:</span>
                      <span className="font-bold text-indigo-800">{formatCurrency(totalBudget)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-600">Total Spent:</span>
                      <span className="font-bold text-indigo-800">{formatCurrency(totalSpent)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-600">Utilization Rate:</span>
                      <span className="font-bold text-indigo-800">{overallUtilization}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-600">Remaining Budget:</span>
                      <span className="font-bold text-indigo-800">{formatCurrency(totalRemaining)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-pink-800">Category Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {budgetData.map((budget) => (
                      <div key={budget.category} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded ${budget.color}`}></div>
                          <span className="text-pink-700">{getCategoryName(budget.category)}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-pink-800">{formatCurrency(budget.spent)}</p>
                          <p className="text-sm text-pink-600">{budget.percentage}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
