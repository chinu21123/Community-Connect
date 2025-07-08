import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TestNavigation() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Navigation Test</h1>
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">Home Page</Button>
          </Link>
          <Link href="/complaint">
            <Button className="w-full">Voice Complaint System</Button>
          </Link>
          <Link href="/login">
            <Button className="w-full">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="w-full">Register</Button>
          </Link>
          <Link href="/dashboard">
            <Button className="w-full">Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
