function Dashboard() {
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Total Users</h2>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Active Sessions</h2>
            <p className="text-3xl font-bold text-green-600">56</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Messages Today</h2>
            <p className="text-3xl font-bold text-purple-600">892</p>
          </div>
        </div>
  
        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-gray-600">New user registered</p>
                <p className="text-sm text-gray-500">2 minutes ago</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-gray-600">Chat session started</p>
                <p className="text-sm text-gray-500">15 minutes ago</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-gray-600">Profile updated</p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  
  