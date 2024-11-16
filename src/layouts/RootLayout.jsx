import { Outlet, Link, useLocation } from "react-router-dom";

function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-[#A393EB] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left side navigation */}
            <div className="flex space-x-4 items-center">
              <Link
                to="/dashboard"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/dashboard'
                    ? 'bg-white text-[#A393EB]'
                    : 'text-white hover:bg-[#8A7CD4]'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/chat"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/chat'
                    ? 'bg-white text-[#A393EB]'
                    : 'text-white hover:bg-[#8A7CD4]'
                }`}
              >
                Chat
              </Link>
            </div>

            {/* Center logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-2"
              >
                <div className="bg-[#FFD580] rounded-full p-2">
                  <svg 
                    className="w-6 h-6 text-[#A393EB]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">TAFEA</span>
              </Link>
            </div>

            {/* Right side navigation */}
            <div className="flex space-x-4 items-center">
              <Link
                to="/profile"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/profile'
                    ? 'bg-white text-[#A393EB]'
                    : 'text-white hover:bg-[#8A7CD4]'
                }`}
              >
                Profile
              </Link>
              <Link
                to="/login"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/login'
                    ? 'bg-white text-[#A393EB]'
                    : 'text-white hover:bg-[#8A7CD4]'
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-full bg-white text-[#A393EB] hover:bg-gray-100 text-sm font-medium transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 flex">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
