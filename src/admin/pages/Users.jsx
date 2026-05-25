import React, { useState } from "react";
import {
  Users,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  UserX,
  Download,
} from "lucide-react";

const usersData = [
  {
    id: "TCH1001",
    name: "Ramesh Kumar",
    email: "ramesh@gmail.com",
    phone: "9876543210",
    district: "Hyderabad",
    school: "Govt High School",
    role: "Teacher",
    status: "Active",
    joining: "12 Jun 2024",
  },
  {
    id: "TCH1002",
    name: "Sita Devi",
    email: "sita@gmail.com",
    phone: "9123456780",
    district: "Warangal",
    school: "ZPHS School",
    role: "Head Master",
    status: "Pending",
    joining: "05 Jun 2024",
  },
  {
    id: "TCH1003",
    name: "Anil Sharma",
    email: "anil@gmail.com",
    phone: "9988776655",
    district: "Karimnagar",
    school: "Govt Primary School",
    role: "Teacher",
    status: "Suspended",
    joining: "01 Jun 2024",
  },
];

export default function UsersPage() {
  const [search, setSearch] = useState("");

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-8">
        
        <div>
          <h1 className="text-4xl font-bold">
            Users Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage teachers, officers and admin users
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="bg-white px-5 py-3 rounded-xl shadow-sm border flex items-center gap-2">
            <Download size={18} />
            Export
          </button>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow-sm flex items-center gap-2 hover:bg-blue-700">
            <Plus size={18} />
            Add User
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Total Users
              </p>

              <h2 className="text-4xl font-bold mt-3">
                12,540
              </h2>
            </div>

            <div className="bg-blue-100 p-4 rounded-2xl">
              <Users size={30} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Active Teachers
              </p>

              <h2 className="text-4xl font-bold mt-3 text-green-600">
                10,210
              </h2>
            </div>

            <div className="bg-green-100 p-4 rounded-2xl">
              <Users size={30} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Pending Users
              </p>

              <h2 className="text-4xl font-bold mt-3 text-yellow-500">
                1,240
              </h2>
            </div>

            <div className="bg-yellow-100 p-4 rounded-2xl">
              <Users size={30} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Suspended Users
              </p>

              <h2 className="text-4xl font-bold mt-3 text-red-500">
                142
              </h2>
            </div>

            <div className="bg-red-100 p-4 rounded-2xl">
              <UserX size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
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

          {/* Role */}
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Roles</option>
            <option>Teacher</option>
            <option>Head Master</option>
            <option>Officer</option>
          </select>

          {/* Status */}
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full">
            
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="p-5">Teacher ID</th>
                <th className="p-5">Name</th>
                <th className="p-5">Email</th>
                <th className="p-5">Phone</th>
                <th className="p-5">District</th>
                <th className="p-5">School</th>
                <th className="p-5">Role</th>
                <th className="p-5">Status</th>
                <th className="p-5">Joining Date</th>
                <th className="p-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-5 font-medium">
                    {user.id}
                  </td>

                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      
                      <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                        {user.name.charAt(0)}
                      </div>

                      <span className="font-medium">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="p-5 text-gray-600">
                    {user.email}
                  </td>

                  <td className="p-5">
                    {user.phone}
                  </td>

                  <td className="p-5">
                    {user.district}
                  </td>

                  <td className="p-5">
                    {user.school}
                  </td>

                  <td className="p-5">
                    {user.role}
                  </td>

                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium
                      ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : user.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="p-5">
                    {user.joining}
                  </td>

                  <td className="p-5">
                    <div className="flex items-center justify-center gap-3">
                      
                      <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
                        <Edit size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                        <Trash2 size={18} />
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
          Showing 1 to 3 users
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