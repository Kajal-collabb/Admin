import React, { useState } from "react";

import {
  IndianRupee,
  Search,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const paymentStats = [
  {
    title: "Total Revenue",
    value: "₹24.5L",
    icon: IndianRupee,
    color: "bg-green-100",
  },
  {
    title: "Successful Payments",
    value: "10,240",
    icon: CheckCircle,
    color: "bg-blue-100",
  },
  {
    title: "Pending Payments",
    value: "1,240",
    icon: Clock,
    color: "bg-yellow-100",
  },
  {
    title: "Failed Transactions",
    value: "142",
    icon: XCircle,
    color: "bg-red-100",
  },
];

const monthlyRevenue = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 7000 },
];

const paymentStatus = [
  { name: "Success", value: 75 },
  { name: "Pending", value: 20 },
  { name: "Failed", value: 5 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const paymentsData = [
  {
    paymentId: "PAY1001",
    teacher: "Ramesh Kumar",
    teacherId: "TCH1001",
    amount: "₹2,500",
    type: "Salary",
    district: "Hyderabad",
    date: "12 Jun 2024",
    transaction: "TXN876543",
    status: "Success",
  },
  {
    paymentId: "PAY1002",
    teacher: "Sita Devi",
    teacherId: "TCH1002",
    amount: "₹3,200",
    type: "Pension",
    district: "Warangal",
    date: "10 Jun 2024",
    transaction: "TXN654321",
    status: "Pending",
  },
  {
    paymentId: "PAY1003",
    teacher: "Anil Sharma",
    teacherId: "TCH1003",
    amount: "₹1,800",
    type: "Membership",
    district: "Karimnagar",
    date: "08 Jun 2024",
    transaction: "TXN123456",
    status: "Failed",
  },
];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");

  const filteredPayments = paymentsData.filter((payment) =>
    payment.teacher.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-8">
        
        <div>
          <h1 className="text-4xl font-bold">
            Payments Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage teacher payments and financial records
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          
          <button className="bg-white px-5 py-3 rounded-xl shadow-sm border flex items-center gap-2">
            <Download size={18} />
            Export Report
          </button>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow-sm flex items-center gap-2 hover:bg-blue-700">
            <FileText size={18} />
            Generate Invoice
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        
        {paymentStats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border"
          >
            <div className="flex justify-between items-center">
              
              <div>
                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold mt-3">
                  {item.value}
                </h2>
              </div>

              <div className={`${item.color} p-4 rounded-2xl`}>
                <item.icon size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 xl:col-span-2">
          
          <h3 className="text-2xl font-semibold mb-6">
            Monthly Revenue
          </h3>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={monthlyRevenue}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="revenue"
                fill="#2563eb"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Status */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          
          <h3 className="text-2xl font-semibold mb-6">
            Payment Status
          </h3>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              
              <Pie
                data={paymentStatus}
                dataKey="value"
                outerRadius={110}
                label
              >
                {paymentStatus.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border p-5 mb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          
          {/* Search */}
          <div className="relative xl:col-span-2">
            
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by teacher name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* District */}
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Districts</option>
            <option>Hyderabad</option>
            <option>Warangal</option>
            <option>Karimnagar</option>
          </select>

          {/* Status */}
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Success</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>

          {/* Type */}
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Payment Types</option>
            <option>Salary</option>
            <option>Pension</option>
            <option>Membership</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        
        <div className="overflow-x-auto">
          
          <table className="w-full">
            
            <thead className="bg-gray-50">
              <tr className="text-left">
                
                <th className="p-5">Payment ID</th>
                <th className="p-5">Teacher</th>
                <th className="p-5">Teacher ID</th>
                <th className="p-5">Amount</th>
                <th className="p-5">Payment Type</th>
                <th className="p-5">District</th>
                <th className="p-5">Date</th>
                <th className="p-5">Transaction ID</th>
                <th className="p-5">Status</th>
                <th className="p-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.map((payment, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  
                  <td className="p-5 font-medium">
                    {payment.paymentId}
                  </td>

                  <td className="p-5 font-medium">
                    {payment.teacher}
                  </td>

                  <td className="p-5">
                    {payment.teacherId}
                  </td>

                  <td className="p-5 font-semibold">
                    {payment.amount}
                  </td>

                  <td className="p-5">
                    {payment.type}
                  </td>

                  <td className="p-5">
                    {payment.district}
                  </td>

                  <td className="p-5">
                    {payment.date}
                  </td>

                  <td className="p-5">
                    {payment.transaction}
                  </td>

                  <td className="p-5">
                    
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium
                      ${
                        payment.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : payment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td className="p-5">
                    
                    <div className="flex items-center justify-center gap-3">
                      
                      <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
                        <CheckCircle size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                        <XCircle size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        
        <p className="text-gray-500">
          Showing 1 to 3 payments
        </p>

        <div className="flex gap-2">
          
          <button className="px-4 py-2 bg-white border rounded-lg">
            Previous
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            1
          </button>

          <button className="px-4 py-2 bg-white border rounded-lg">
            2
          </button>

          <button className="px-4 py-2 bg-white border rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}