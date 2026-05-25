import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, CreditCard, Mail, Bell, FileText, BarChart3, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={22} /> },
    { name: "Users", path: "/users", icon: <Users size={22} /> },
    { name: "Payments", path: "/payments", icon: <CreditCard size={22} /> },
    { name: "Newsletters", path: "/newsletters", icon: <Mail size={22} /> },

    { name: "Premium", path: "/premium-content", icon: <FileText size={22} /> },
    { name: "Reports", path: "/reports", icon: <BarChart3 size={22} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={22} /> },
  ];

  return (
    <div className="w-[280px] min-h-screen bg-[#000080] dark:bg-slate-950 text-indigo-50 p-6 flex flex-col transition-colors duration-300">
      <div className="mb-10 px-2">
        <h1 className="text-3xl font-extrabold tracking-tighter text-white">Admin<span className="text-[#FF9933]">Panel</span></h1>
      </div>
      <ul className="space-y-3 flex-grow">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name}>
              <Link to={item.path} className={`flex items-center gap-4 px-5 py-3.5 rounded-xl text-lg font-medium transition-all duration-300 ${isActive ? "bg-[#FF9933] text-white shadow-lg" : "text-indigo-200 hover:bg-blue-800/50 hover:text-white"}`}>
                {item.icon} {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto  pt-6 ml-10 mr-4">
        <Link to="/" className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-lg font-medium text-indigo-300 hover:text-red-400 group">
          <LogOut size={22} className="text-red-400 group-hover:text-red-500" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;