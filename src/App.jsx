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

    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100">

        <Navbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>

  )
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route path="/" element={<Login />} />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Users */}

        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />

  <Route
          path="/newsletters"
          element={
            <Layout>
              <Newsletters />
            </Layout>
          }
        />
  <Route
          path="/notifications"
          element={
            <Layout>
              <Notifications />
            </Layout>
          }
        />

          <Route
          path="/premium-content"
          element={
            <Layout>
              <PremiumContent />
            </Layout>
          }
        />

        {/* Payments */}

        <Route
          path="/payments"
          element={
            <Layout>
              <Payments />
            </Layout>
          }
        />

        {/* Reports */}

        <Route
          path="/reports"
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />

        {/* Settings */}

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App