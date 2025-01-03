export function Header() {
    return (
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              BudgetBuddie
            </h1>
          </div>
          <div className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </header>
    );
  }