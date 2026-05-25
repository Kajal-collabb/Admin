import React from "react";
import {
  Users,
  IndianRupee,
  UserCheck,
  AlertCircle,
  TrendingUp,
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
  LineChart,
  Line,
} from "recharts";

const stats = [
  { title: "Total Teachers", value: "12,540", icon: Users, bg: "bg-indigo-50", iconColor: "text-indigo-600" },
  { title: "Active Users", value: "10,210", icon: UserCheck, bg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { title: "Pending Payments", value: "1,240", icon: AlertCircle, bg: "bg-amber-50", iconColor: "text-amber-600" },
  { title: "Total Revenue", value: "₹24.5L", icon: IndianRupee, bg: "bg-violet-50", iconColor: "text-violet-600" },
];

const monthlyData = [
  { month: "Jan", payments: 4000 },
  { month: "Feb", payments: 3000 },
  { month: "Mar", payments: 5000 },
  { month: "Apr", payments: 4500 },
  { month: "May", payments: 6000 },
  { month: "Jun", payments: 7000 },
];

const paymentStatus = [
  { name: "Paid", value: 75 },
  { name: "Pending", value: 20 },
  { name: "Failed", value: 5 },
];

const COLORS = ["#4f46e5", "#10b981", "#f59e0b"];

const activities = [
  { user: "Ramesh Kumar", action: "Completed salary payment", time: "2 mins ago" },
  { user: "Sita Devi", action: "Uploaded teacher documents", time: "10 mins ago" },
  { user: "Admin", action: "Posted new notice", time: "1 hour ago" },
  { user: "Vikram Singh", action: "New teacher registration", time: "2 hours ago" },
];

const notices = [
  "Teacher Transfer Notice 2026",
  "Salary Increment Circular",
  "Updated Pension Rules",
  "District Meeting Schedule",
];

const teachers = [
  { name: "Vikram Singh", email: "vikram@gmail.com", date: "12 Jun 2024" },
  { name: "Anita Sharma", email: "anita@gmail.com", date: "11 Jun 2024" },
  { name: "Deepak Verma", email: "deepak@gmail.com", date: "10 Jun 2024" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Government Teachers Dashboard</h1>
        <p className="text-slate-500 mt-2 font-medium">Welcome back, Administrator 👋</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 font-semibold text-sm">{item.title}</p>
                <h2 className="text-3xl font-bold mt-2 text-slate-900">{item.value}</h2>
                <div className="flex items-center gap-1 mt-3 text-emerald-600 text-xs font-bold">
                  <TrendingUp size={14} />
                  <span>8.5% growth</span>
                </div>
              </div>
              <div className={`${item.bg} p-4 rounded-2xl`}>
                <item.icon size={24} className={item.iconColor} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 xl:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">Monthly Payments</h2>
            <button className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200">This Year</button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip cursor={{fill: '#f1f5f9'}} />
              <Bar dataKey="payments" fill="#4f46e5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={paymentStatus} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={5} cornerRadius={10}>
                {paymentStatus.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {activities.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                {idx === 0 ? "Recent Activities" : idx === 1 ? "Latest Notices" : "Recent Teachers"}
              </h2>
              <button className="text-indigo-600 font-semibold text-sm">View All</button>
            </div>
            
            <div className="space-y-4">
              {idx === 0 && activities.map((act, i) => (
                <div key={i} className="flex justify-between border-b border-slate-50 pb-3 last:border-0">
                  <div><h4 className="font-semibold text-slate-900">{act.user}</h4><p className="text-slate-500 text-xs">{act.action}</p></div>
                  <span className="text-xs text-slate-400">{act.time}</span>
                </div>
              ))}
              {idx === 1 && notices.map((n, i) => (
                <div key={i} className="p-4 rounded-2xl bg-indigo-50 text-indigo-900 text-sm font-medium">{n}</div>
              ))}
              {idx === 2 && teachers.map((t, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-slate-50 pb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">{t.name.charAt(0)}</div>
                  <div><h4 className="font-semibold text-slate-900">{t.name}</h4><p className="text-xs text-slate-500">{t.email}</p></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}