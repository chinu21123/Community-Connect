import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function JobsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400">
      {/* Header Skeleton */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-24 bg-white/20" />
              <div>
                <Skeleton className="h-8 w-32 bg-white/20 mb-2" />
                <Skeleton className="h-4 w-48 bg-white/20" />
              </div>
            </div>
            <Skeleton className="h-10 w-48 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Skeleton */}
        <div className="mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Skeleton className="flex-1 h-10" />
                <Skeleton className="md:w-64 h-10" />
              </div>
              <Skeleton className="mt-4 h-4 w-32" />
            </CardContent>
          </Card>
        </div>

        {/* Jobs Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                    <Skeleton className="h-6 w-48 mb-1" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-6 w-24 mb-1" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>

                <div className="mb-4">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-5/6" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Skeleton className="flex-1 h-10" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
