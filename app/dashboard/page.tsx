import { getCurrentUser, logoutUser } from "../../lib/auth-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { redirect } from "next/navigation"
import Homepage from "../../homepage"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const getRoleDisplay = (role: string) => {
    const roles = {
      student: "📚 छात्र / Student",
      farmer: "🌾 किसान / Farmer",
      panchayat: "🏛️ पंचायत / Panchayat",
      general: "👥 सामान्य ग्रामीण / General Villager",
    }
    return roles[role as keyof typeof roles] || role
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">🌿 Gaon Saathi Dashboard</h1>
          <form action={logoutUser}>
            <Button
              type="submit"
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
            >
              Logout / लॉगआउट
            </Button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Welcome / स्वागत</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-green-600">Name / नाम:</p>
                <p className="text-lg font-semibold text-green-800">{user.fullName}</p>
              </div>

              <div>
                <p className="text-sm text-green-600">Contact / संपर्क:</p>
                <p className="text-lg font-semibold text-green-800">{user.contact}</p>
              </div>

              <div>
                <p className="text-sm text-green-600">Role / भूमिका:</p>
                <p className="text-lg font-semibold text-green-800">{getRoleDisplay(user.role)}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Quick Actions / त्वरित कार्य</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">🌾 View Services / सेवाएं देखें</Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">📱 Contact Support / सहायता संपर्क</Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">📊 View Profile / प्रोफ़ाइल देखें</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-green-600">🌾 गांव की डिजिटल क्रांति में आपका स्वागत है!</p>
          <p className="text-green-600">Welcome to the digital revolution in villages!</p>
        </div>

        <Homepage />
      </div>
    </div>
  )
}
