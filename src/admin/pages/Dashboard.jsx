import React from "react";
import {
  Users,
  IndianRupee,
  Bell,
  UserCheck,
  AlertCircle,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const stats = [
  {
    title: "Total Teachers",
    value: "12,540",
    icon: Users,
    color: "bg-blue-100",
  },
  {
    title: "Active Users",
    value: "10,210",
    icon: UserCheck,
    color: "bg-green-100",
  },
  {
    title: "Pending Payments",
    value: "1,240",
    icon: AlertCircle,
    color: "bg-yellow-100",
  },
  {
    title: "Total Revenue",
    value: "₹24.5L",
    icon: IndianRupee,
    color: "bg-purple-100",
  },
];

const monthlyData = [
  { month: "Jan", payments: 4000 },
  { month: "Feb", payments: 3000 },
  { month: "Mar", payments: 5000 },
  { month: "Apr", payments: 4500 },
  { month: "May", payments: 6000 },
  { month: "Jun", payments: 7000 },
];

const pieData = [
  { name: "Paid", value: 75 },
  { name: "Pending", value: 20 },
  { name: "Failed", value: 5 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const activities = [
  {
    user: "Ramesh Kumar",
    action: "Completed Payment",
    time: "2 mins ago",
  },
  {
    user: "Sita Devi",
    action: "Uploaded Documents",
    time: "10 mins ago",
  },
  {
    user: "Admin",
    action: "Posted New Notice",
    time: "1 hour ago",
  },
];

const notices = [
  "Teacher Transfer Notice 2026",
  "Salary Increment Circular",
  "Updated Pension Rules",
  "District Meeting Schedule",
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold text-black">
            Government Teachers Dashboard
          </h2>

          <p className="text-gray-500 mt-1">
            Welcome back, Administrator
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white p-3 rounded-xl shadow-sm">
            <Bell />
          </button>

          <div className="bg-white px-5 py-3 rounded-xl shadow-sm font-medium">
            Admin User
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h3 className="text-4xl font-bold mt-3">
                {item.value}
              </h3>
            </div>

            <div className={`${item.color} p-5 rounded-2xl`}>
              <item.icon size={30} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        
        {/* Monthly Payments */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 xl:col-span-2">
          <h3 className="text-2xl font-semibold mb-6">
            Monthly Payments
          </h3>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="payments"
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
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >
                {pieData.map((entry, index) => (
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

      {/* Activities & Notices */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Activities */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h3 className="text-2xl font-semibold mb-6">
            Recent Activities
          </h3>

          <div className="space-y-5">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between border-b pb-4"
              >
                <div>
                  <h4 className="font-semibold text-lg">
                    {activity.user}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {activity.action}
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notices */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h3 className="text-2xl font-semibold mb-6">
            Latest Notices
          </h3>

          <div className="space-y-4">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition"
              >
                <p className="font-medium text-lg">
                  {notice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Growth */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">
        <h3 className="text-2xl font-semibold mb-6">
          User Growth
        </h3>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="payments"
              stroke="#16a34a"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}