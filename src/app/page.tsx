export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Welcome to your new Next.js application! This is a simple Hello World page built with modern web technologies.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              Powered by Next.js 15 + Tailwind CSS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast</h3>
              <p className="text-gray-600 text-sm">
                Built with Next.js for optimal performance and user experience.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern</h3>
              <p className="text-gray-600 text-sm">
                Uses the latest React 19 features and App Router architecture.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsive</h3>
              <p className="text-gray-600 text-sm">
                Tailwind CSS ensures perfect display across all device sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}