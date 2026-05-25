const Dashboard = () => {
  return (
    // We add the theme-aware background, text color, and border
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 transition-colors duration-300">
      
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <p className="text-slate-600 dark:text-slate-400">
        Welcome to your admin dashboard. This content is now fully responsive to dark mode.
      </p>

    </div>
  );
};

export default Dashboard;