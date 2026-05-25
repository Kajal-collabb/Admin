const Settings = () => {
  return (
    <div className="bg-white p-8 shadow-sm border border-gray-300 border-t-4 border-t-blue-900 max-w-4xl">
      
      {/* Official Header */}
      <div className="border-b-2 border-gray-300 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-900 tracking-tight">System Administration Settings</h2>
        <p className="text-gray-600 mt-1 text-sm font-medium">Authorized Personnel Only</p>
      </div>
      
      <div className="space-y-8">
        {/* Profile Settings Form */}
        <div className="border border-gray-300 bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-5">Administrator Profile</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name (As per Records)</label>
              <input 
                type="text" 
                className="w-full border border-gray-400 p-2 focus:ring-2 focus:ring-blue-900 outline-none" 
                defaultValue="Chief Administrator" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Official Designation</label>
              <input 
                type="text" 
                className="w-full border border-gray-400 p-2 bg-gray-200 text-gray-600 cursor-not-allowed" 
                defaultValue="System Admin Level 1" 
                disabled 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-1">Registered Email Address</label>
              <input 
                type="email" 
                className="w-full border border-gray-400 p-2 focus:ring-2 focus:ring-blue-900 outline-none" 
                defaultValue="admin@gov-teachers.in" 
              />
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 text-sm font-semibold shadow-sm transition-colors">
              Update Records
            </button>
          </div>
        </div>

        {/* Portal Configuration */}
        <div className="border border-gray-300 bg-gray-50 p-6">
          <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-3 mb-5">Portal Configuration</h3>
          
          <div className="space-y-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-blue-900 border-gray-400 rounded-none cursor-pointer" 
              />
              <span className="text-gray-800 font-medium">Enable Maintenance Mode (Restricts public access)</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-blue-900 border-gray-400 rounded-none cursor-pointer" 
                defaultChecked 
              />
              <span className="text-gray-800 font-medium">Send automatic email notifications on GO (Government Order) uploads</span>
            </label>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-300">
             <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 text-sm font-semibold shadow-sm transition-colors">
              Save Preferences
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Settings;