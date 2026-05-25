import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Payments from "./admin/pages/payments";
import Reports from "./admin/pages/reports";
import Settings from "./admin/pages/settings";
import Newsletters from "./admin/pages/newsletters";
import Notifications from "./admin/pages/notifications";
import PremiumContent from "./admin/pages/premium-content";
import Navbar from "./admin/components/navbar";
import Sidebar from "./admin/components/sidebar";

function Layout({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-[#f8f9fa] overflow-x-hidden">
      {/* Sidebar Left Side Fixed */}
      <Sidebar />

      {/* Right Side Frame */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Common Navbar / Main Header */}
        <Navbar />

        {/* Dynamic Page Content Wrapper */}
        <div className="p-6 md:p-8 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/users" element={<Layout><Users /></Layout>} />
        <Route path="/newsletters" element={<Layout><Newsletters /></Layout>} />
        <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
        <Route path="/premium-content" element={<Layout><PremiumContent /></Layout>} />
        <Route path="/payments" element={<Layout><Payments /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;