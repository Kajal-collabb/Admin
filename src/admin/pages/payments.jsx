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
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Bell,
  RefreshCcw,
  Filter,
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
  { title: "Total Revenue", value: "₹24.5L", icon: IndianRupee, color: "bg-green-100", textColor: "text-green-600" },
  { title: "Successful Payments", value: "10,240", icon: CheckCircle, color: "bg-blue-100", textColor: "text-blue-600" },
  { title: "Pending Payments", value: "1,240", icon: Clock, color: "bg-yellow-100", textColor: "text-yellow-600" },
  { title: "Failed Transactions", value: "142", icon: XCircle, color: "bg-red-100", textColor: "text-red-600" },
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
  { paymentId: "PAY1001", teacher: "Ramesh Kumar", amount: "₹2,500", type: "Salary", district: "Hyderabad", date: "12 Jun 2024", status: "Success" },
  { paymentId: "PAY1002", teacher: "Sita Devi", amount: "₹3,200", type: "Pension", district: "Warangal", date: "10 Jun 2024", status: "Pending" },
  { paymentId: "PAY1003", teacher: "Anil Sharma", amount: "₹1,800", type: "Membership", district: "Karimnagar", date: "08 Jun 2024", status: "Failed" },
];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [exportOpen, setExportOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [refreshOpen, setRefreshOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState([]);
  const totalPages = 3;

  const addNotification = (type, message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);
    setTimeout(() => setNotifications((prev) => prev.filter((item) => item.id !== id)), 3000);
  };

  const filteredPayments = paymentsData.filter((p) => p.teacher.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      Payments Page
    </div>
  );
}