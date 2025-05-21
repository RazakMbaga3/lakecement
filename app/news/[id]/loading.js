export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 animate-pulse">
      <div className="h-12 bg-gray-200 rounded w-3/4 mb-8"></div>
      <div className="flex gap-4 mb-8">
        <div className="h-6 bg-gray-200 rounded w-24"></div>
        <div className="h-6 bg-gray-200 rounded w-24"></div>
      </div>
      <div className="h-[400px] bg-gray-200 rounded-lg mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}
