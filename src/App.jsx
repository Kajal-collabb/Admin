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
import Profile from "./admin/pages/Profile";
function Layout({ children }) {
  return (
    // Add 'dark:bg-slate-950' here. 
    // This makes the entire page background dark when mode is active.
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* Make this wrapper grow to fill the screen */}
        <main className="flex-1 p-6 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
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
<Route
          path="/Profile"
          element={
            <Layout>
              <Profile />
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