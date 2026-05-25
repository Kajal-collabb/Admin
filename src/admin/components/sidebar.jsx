import { Link } from "react-router-dom";

const Sidebar = () => {

  return (

    <div className="w-[240px] min-h-screen bg-indigo-700 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        Admin
      </h1>

      <ul className="space-y-6 text-lg">

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/users">Users</Link>
        </li>

        <li>
          <Link to="/payments">Payments</Link>
        </li>

 <li>
          <Link to="/newsletters">Newsletters</Link>
        </li>
         <li>
          <Link to="/notifications">Notifications</Link>
        </li>
         <li>
          <Link to="/premium-content">Premium Content</Link>
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>

      </ul>

    </div>

  )
}

export default Sidebar