import { useState } from "react";

const Reports = () => {
  // State for tabs to switch between different official reports
  const [activeTab, setActiveTab] = useState("memberships");

  return (
    <div className="bg-white shadow-sm border border-gray-300 border-t-4 border-t-blue-900 min-h-screen">
      
      {/* Official Header Area */}
      <div className="p-6 border-b border-gray-300 bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 tracking-tight uppercase">Management Information System (MIS) Reports</h2>
          <p className="text-gray-600 mt-1 text-sm font-semibold">Directorate of Government Teachers Association</p>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-sm font-bold text-gray-700">Financial Year: 2024-2025</p>
          <p className="text-xs text-gray-500">Last Synced: Today, 10:45 AM</p>
        </div>
      </div>

      {/* Action Bar & Filters */}
      <div className="p-6 border-b border-gray-300 bg-white">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Select District</label>
            <select className="w-full border border-gray-400 p-2 text-sm bg-gray-50 focus:ring-1 focus:ring-blue-900 outline-none">
              <option>All Districts</option>
              <option>Hyderabad</option>
              <option>Warangal</option>
              <option>Karimnagar</option>
              <option>Nizamabad</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Report Category</label>
            <select className="w-full border border-gray-400 p-2 text-sm bg-gray-50 focus:ring-1 focus:ring-blue-900 outline-none">
              <option>Premium Memberships</option>
              <option>Pending Approvals</option>
              <option>Revenue Collection</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Date Range</label>
            <input type="date" className="w-full border border-gray-400 p-2 text-sm bg-gray-50 focus:ring-1 focus:ring-blue-900 outline-none" />
          </div>
          <div>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 text-sm font-bold shadow-sm transition-colors border border-blue-950">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Master Summary Dashboard */}
      <div className="p-6 bg-gray-100 border-b border-gray-300">
        <h3 className="text-md font-bold text-gray-800 mb-4 border-l-4 border-blue-900 pl-2">State-wide Abstract (FY 24-25)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-300 p-4 shadow-sm border-t-2 border-t-blue-500">
            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">Total Registrations</h4>
            <p className="text-2xl font-black text-gray-900">45,210</p>
          </div>
          <div className="bg-white border border-gray-300 p-4 shadow-sm border-t-2 border-t-green-600">
            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">Sanctioned Premium</h4>
            <p className="text-2xl font-black text-green-700">12,845</p>
          </div>
          <div className="bg-white border border-gray-300 p-4 shadow-sm border-t-2 border-t-orange-500">
            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">Pending Verification</h4>
            <p className="text-2xl font-black text-orange-600">842</p>
          </div>
          <div className="bg-white border border-gray-300 p-4 shadow-sm border-t-2 border-t-purple-600">
            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">Total Remittance (INR)</h4>
            <p className="text-2xl font-black text-purple-700">₹ 1,28,45,000</p>
          </div>
        </div>
      </div>

      {/* Official Data Table Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-md font-bold text-gray-800 border-l-4 border-blue-900 pl-2">Detailed Beneficiary Record</h3>
          
          {/* Export Tools */}
          <div className="flex gap-2 text-sm">
            <button className="flex items-center gap-1 border border-gray-400 bg-gray-50 px-3 py-1 hover:bg-gray-200 font-semibold text-red-700">
              PDF
            </button>
            <button className="flex items-center gap-1 border border-gray-400 bg-gray-50 px-3 py-1 hover:bg-gray-200 font-semibold text-green-700">
              Excel
            </button>
            <button className="flex items-center gap-1 border border-gray-400 bg-gray-50 px-3 py-1 hover:bg-gray-200 font-semibold text-blue-700">
              Print
            </button>
          </div>
        </div>

        <div className="overflow-x-auto border border-gray-400 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-blue-900 text-white text-xs uppercase tracking-wider">
                <th className="p-3 border border-gray-400 font-semibold text-center">S.No</th>
                <th className="p-3 border border-gray-400 font-semibold">Application Ref ID</th>
                <th className="p-3 border border-gray-400 font-semibold">Employee Details</th>
                <th className="p-3 border border-gray-400 font-semibold">District / Mandal</th>
                <th className="p-3 border border-gray-400 font-semibold">Challan / Payment Ref</th>
                <th className="p-3 border border-gray-400 font-semibold text-center">Status</th>
                <th className="p-3 border border-gray-400 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {/* Row 1 */}
              <tr className="hover:bg-yellow-50 transition-colors">
                <td className="p-3 border border-gray-300 text-center font-medium">1</td>
                <td className="p-3 border border-gray-300 font-mono text-blue-800 font-bold">TS-GTA-24-8839</td>
                <td className="p-3 border border-gray-300">
                  <div className="font-bold">M. Srinivas Rao</div>
                  <div className="text-xs text-gray-500">Emp ID: 1048829 • SGT</div>
                </td>
                <td className="p-3 border border-gray-300">
                  <div>Hyderabad</div>
                  <div className="text-xs text-gray-500">Khairatabad Zone</div>
                </td>
                <td className="p-3 border border-gray-300 font-mono text-xs">CHLN-899210-SBI<br/><span className="text-green-600 font-bold">Success</span></td>
                <td className="p-3 border border-gray-300 text-center">
                  <span className="bg-green-100 text-green-800 border border-green-300 px-2 py-1 text-xs font-bold">SANCTIONED</span>
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  <button className="text-blue-700 hover:underline text-xs font-bold">View</button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-yellow-50 transition-colors bg-gray-50">
                <td className="p-3 border border-gray-300 text-center font-medium">2</td>
                <td className="p-3 border border-gray-300 font-mono text-blue-800 font-bold">TS-GTA-24-8840</td>
                <td className="p-3 border border-gray-300">
                  <div className="font-bold">K. Lakshmi Devi</div>
                  <div className="text-xs text-gray-500">Emp ID: 1059932 • School Asst.</div>
                </td>
                <td className="p-3 border border-gray-300">
                  <div>Warangal</div>
                  <div className="text-xs text-gray-500">Hanamkonda</div>
                </td>
                <td className="p-3 border border-gray-300 font-mono text-xs">CHLN-899215-UBI<br/><span className="text-orange-500 font-bold">Pending Clearance</span></td>
                <td className="p-3 border border-gray-300 text-center">
                  <span className="bg-orange-100 text-orange-800 border border-orange-300 px-2 py-1 text-xs font-bold">UNDER REVIEW</span>
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  <button className="text-blue-700 hover:underline text-xs font-bold">Verify</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination - Standard Govt Style */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <div>
            Showing <strong>1</strong> to <strong>10</strong> of <strong>12,845</strong> entries
          </div>
          <div className="flex gap-1 mt-2 md:mt-0">
            <button className="border border-gray-400 px-3 py-1 bg-gray-100 text-gray-400 cursor-not-allowed">Previous</button>
            <button className="border border-blue-900 px-3 py-1 bg-blue-900 text-white font-bold">1</button>
            <button className="border border-gray-400 px-3 py-1 bg-white hover:bg-gray-100">2</button>
            <button className="border border-gray-400 px-3 py-1 bg-white hover:bg-gray-100">3</button>
            <span className="px-2 py-1">...</span>
            <button className="border border-gray-400 px-3 py-1 bg-white hover:bg-gray-100">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reports;