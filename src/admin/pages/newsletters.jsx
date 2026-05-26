import React, { useState, useMemo } from 'react';
import { 
  Plus, Search, BookOpen, Crown, Download, Users, Grid, List,
  Edit2, Trash2, Eye, Mail, Pin, FileText, UploadCloud, X, BarChart2, Calendar, Tag
} from 'lucide-react';

export default function Newsletters() {
  // View Toggle State (grid or table)
  const [viewMode, setViewMode] = useState('grid');
  
  // Modals & Selection States
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // File Upload Handlers State
  const [uploadedPdf, setUploadedPdf] = useState(null);
  const [uploadedThumbnail, setUploadedThumbnail] = useState(null);

  // Categories List
  const categories = [
    "Government Orders", "Teacher Updates", "Exam Notifications", 
    "Education Policies", "Training Materials"
  ];

  // System Stats
  const stats = [
    { id: 1, title: 'Total Newsletters', value: '184', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 2, title: 'Premium Newsletters', value: '65', icon: Crown, color: 'text-amber-500', bg: 'bg-amber-50' },
    { id: 3, title: 'Downloads', value: '24,890', icon: Download, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 4, title: 'Email Subscribers', value: '5,120', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  // Rich Dummy Data Base
  const [newsletters, setNewsletters] = useState([
    {
      id: 1,
      title: "New Education Policy Guidelines & Structural Changes 2026",
      description: "Comprehensive breakdown of the newly introduced evaluation metrics, teacher accountability frameworks, and regional language integration rules across state government schools.",
      category: "Education Policies",
      uploadDate: "2026-05-20",
      accessType: "Premium",
      downloads: 1240,
      status: "Published",
      isPinned: true,
      tags: ["NEP 2026", "Policy", "Guidelines"],
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "High School Annual Exam Schedule & Center Rules",
      description: "Official timeline and checklist for high school final examinations. Includes updated invigilator codes of conduct and student identity validation protocols.",
      category: "Exam Notifications",
      uploadDate: "2026-05-18",
      accessType: "Free",
      downloads: 3150,
      status: "Published",
      isPinned: false,
      tags: ["Exams", "Schedule", "HighSchool"],
      thumbnail: "https://images.unsplash.com/photo-1588681664899-f142ff22516d?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "GO Ms No. 42: Special Allowances & PRC Report",
      description: "The official Gazette notification detailing the revised pay scales, medical allowance modifications, and rural posting incentives for primary and secondary teachers.",
      category: "Government Orders",
      uploadDate: "2026-05-15",
      accessType: "Premium",
      downloads: 4890,
      status: "Published",
      isPinned: true,
      tags: ["GO", "PRC", "Allowances"],
      thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Primary Mathematics Training Manual & Workshop Data",
      description: "Resource book containing activity sheets, visual math tools layouts, and lesson structures designed for the upcoming State Teacher Training workshop.",
      category: "Training Materials",
      uploadDate: "2026-05-10",
      accessType: "Free",
      downloads: 920,
      status: "Published",
      isPinned: false,
      tags: ["Training", "Maths", "Primary"],
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Mid-Day Meal Scheme Distribution Updates",
      description: "New directives issued regarding nutrition check registries, strict grain quality auditing, and decentralized vendor payments starting next academic term.",
      category: "Teacher Updates",
      uploadDate: "2026-05-02",
      accessType: "Free",
      downloads: 1650,
      status: "Published",
      isPinned: false,
      tags: ["MidDayMeal", "Updates", "Welfare"],
      thumbnail: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=80"
    }
  ]);

  const analyticsDownloads = [
    { title: "Primary Teacher Training Manual", count: "1,840 downloads", conversion: "+12% Subs" },
    { title: "GO Ms No. 42 Special Allowances", count: "1,520 downloads", conversion: "+8% Subs" },
    { title: "Annual Academic Calendar", count: "980 downloads", conversion: "+5% Subs" }
  ];

  // Handle Dynamic Filtering & Searching
  const filteredNewsletters = useMemo(() => {
    return newsletters.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [newsletters, activeCategory, searchQuery]);

  // File Upload Input Logics
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    if (type === 'pdf') {
      setUploadedPdf({ name: file.name, size: (file.size / (1024 * 1024)).toFixed(2) + ' MB' });
    } else {
      setUploadedThumbnail({ name: file.name });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-12">
      
      {/* HEADER SECTION */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 px-4 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#4c35de]">Teacher Newsletters & Circulars</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage, upload, and distribute newsletters to educators.</p>
        </div>
        
        <button 
          onClick={() => setIsUploadOpen(true)}
          className="bg-[#4c35de] hover:bg-[#3a25b8] text-white px-5 py-2.5 rounded-xl font-medium shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all duration-200"
        >
          <Plus className="w-5 h-5" />
          Upload Newsletter
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-6 space-y-8">
        
        {/* STATISTICS CARDS SECTION */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="bg-white p-4 lg:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm font-medium text-gray-400 block">{stat.title}</p>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mt-0.5">{stat.value}</h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* FILTERS, SEARCH & VIEW MODE SWITCHER */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative w-full lg:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, keywords, tags..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4c35de] text-sm"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
              <button 
                onClick={() => setActiveCategory('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${activeCategory === 'All' ? 'bg-[#4c35de] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                All Topics
              </button>
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-[#4c35de] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Layout Toggle Buttons */}
            <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50 shrink-0">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-[#4c35de] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-all ${viewMode === 'table' ? 'bg-white text-[#4c35de] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          
          {/* DYNAMIC CONTENT CONTAINER */}
          <div className="xl:col-span-2">
            
            {filteredNewsletters.length === 0 ? (
              <div className="bg-white border rounded-2xl p-12 text-center text-gray-400">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="font-medium">No newsletters matching your selection.</p>
              </div>
            ) : viewMode === 'grid' ? (
              
              /* 📰 NEWSCUTTING STYLED GRID VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredNewsletters.map((nl) => (
                  <div 
                    key={nl.id} 
                    onClick={() => { setSelectedNewsletter(nl); setIsPreviewOpen(true); }}
                    className="bg-white border-2 border-zinc-200 hover:border-zinc-400 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                    style={{ backgroundImage: 'linear-gradient(rgba(250,249,246,0.2) 95%, rgba(0,0,0,0.05) 100%)' }}
                  >
                    {nl.isPinned && (
                      <div className="absolute top-0 right-0 bg-[#4c35de] text-white p-1.5 rounded-bl-lg shadow-sm">
                        <Pin className="w-3.5 h-3.5 fill-white" />
                      </div>
                    )}

                    <div className="space-y-3">
                      {/* Category and premium indicator */}
                      <div className="flex justify-between items-center text-[11px] font-bold tracking-wide uppercase text-gray-400">
                        <span>{nl.category}</span>
                        {nl.accessType === 'Premium' && (
                          <span className="flex items-center gap-0.5 text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                            <Crown className="w-3 h-3 fill-amber-500" /> Premium
                          </span>
                        )}
                      </div>

                      {/* Title with News Paper Vintage Typography feel */}
                      <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug tracking-tight group-hover:text-[#4c35de] transition-colors line-clamp-2 pt-1 border-t-2 border-zinc-900">
                        {nl.title}
                      </h3>

                      {/* Image Stream styled like a news press block */}
                      <div className="w-full h-36 bg-gray-100 rounded overflow-hidden border border-zinc-300 relative">
                        <img 
                          src={nl.thumbnail} 
                          alt="" 
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-20 group-hover:opacity-0 transition-opacity"></div>
                      </div>

                      {/* Short clipping Description */}
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-sans">
                        {nl.description}
                      </p>
                    </div>

                    {/* Bottom Metadata row */}
                    <div className="mt-4 pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {nl.uploadDate}
                      </span>
                      <span className="bg-zinc-100 text-zinc-700 font-bold px-2 py-0.5 rounded">
                        📥 {nl.downloads.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              
              /* 📋 COMPREHENSIVE TABLE VIEW */
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg">Active Publications Table</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <th className="p-4 pl-6">Cover / Title</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Upload Date</th>
                        <th className="p-4">Access</th>
                        <th className="p-4">Downloads</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-center pr-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {filteredNewsletters.map((nl) => (
                        <tr key={nl.id} className="hover:bg-gray-50/70 transition-colors">
                          <td className="p-4 pl-6 flex items-center gap-3 max-w-xs">
                            <img src={nl.thumbnail} alt="" className="w-10 h-14 object-cover rounded shadow-sm border border-gray-200 shrink-0" />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-gray-900 line-clamp-1">{nl.title}</span>
                                {nl.isPinned && <Pin className="w-3.5 h-3.5 text-[#4c35de] fill-[#4c35de] shrink-0" />}
                              </div>
                              <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{nl.description}</p>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">{nl.category}</span>
                          </td>
                          <td className="p-4 text-gray-500 whitespace-nowrap">{nl.uploadDate}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1 text-xs font-semibold ${nl.accessType === 'Premium' ? 'text-amber-600' : 'text-emerald-600'}`}>
                              {nl.accessType === 'Premium' && <Crown className="w-3 h-3 fill-amber-500" />}
                              {nl.accessType}
                            </span>
                          </td>
                          <td className="p-4 font-medium text-gray-700">{nl.downloads.toLocaleString()}</td>
                          <td className="p-4">
                            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium border border-emerald-200">{nl.status}</span>
                          </td>
                          <td className="p-4 pr-6">
                            <div className="flex items-center justify-center gap-1">
                              <button onClick={() => { setSelectedNewsletter(nl); setIsPreviewOpen(true); }} className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-800 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                              <button className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-blue-600 rounded-lg transition-colors"><Mail className="w-4 h-4" /></button>
                              <button className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-amber-600 rounded-lg transition-colors"><Edit2 className="w-4 h-4" /></button>
                              <button className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-rose-600 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR BLOCK: DISTRIBUTION CONTROL PANEL & GRAPH ANALYTICS */}
          <div className="space-y-6">
            
            {/* Newsletter Distribution Configuration */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-50 pb-3">
                <Mail className="w-5 h-5 text-[#4c35de]" />
                <h3 className="font-bold text-gray-900">Newsletter Distribution</h3>
              </div>
              <p className="text-xs text-gray-500">Quick dispatch updates or target communication modes.</p>
              
              <div className="space-y-2">
                <button className="w-full bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 p-3 rounded-xl text-left text-xs font-semibold text-gray-700 flex items-center justify-between group transition-all">
                  <span>📧 Send email broadcast to all users</span>
                  <span className="text-gray-400 group-hover:text-[#4c35de]">&rarr;</span>
                </button>
                <button className="w-full bg-gray-50 hover:bg-amber-50 border border-gray-100 hover:border-amber-200 p-3 rounded-xl text-left text-xs font-semibold text-gray-700 flex items-center justify-between group transition-all">
                  <span className="flex items-center gap-1">👑 Dispatch to Premium Users Only</span>
                  <span className="text-gray-400 group-hover:text-amber-600">&rarr;</span>
                </button>
                <button className="w-full bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 p-3 rounded-xl text-left text-xs font-semibold text-gray-700 flex items-center justify-between group transition-all">
                  <span>⏱️ Access Scheduled Emails Queue</span>
                  <span className="text-gray-400 group-hover:text-blue-600">&rarr;</span>
                </button>
                <button className="w-full bg-gray-50 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 p-3 rounded-xl text-left text-xs font-semibold text-gray-700 flex items-center justify-between group transition-all">
                  <span>🔔 Trigger Push Notifications alert</span>
                  <span className="text-gray-400 group-hover:text-purple-600">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Download Analytics Widget */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-50 pb-3">
                <BarChart2 className="w-5 h-5 text-[#4c35de]" />
                <h3 className="font-bold text-gray-900">Download Analytics</h3>
              </div>

              {/* Graphic Mock */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 h-28 flex items-end gap-2 justify-between border border-indigo-100/50">
                <div className="w-full bg-indigo-200 h-[30%] rounded-sm" title="Jan"></div>
                <div className="w-full bg-indigo-300 h-[55%] rounded-sm" title="Feb"></div>
                <div className="w-full bg-[#4c35de] h-[85%] rounded-sm" title="Mar"></div>
                <div className="w-full bg-indigo-400 h-[45%] rounded-sm" title="Apr"></div>
                <div className="w-full bg-indigo-300 h-[70%] rounded-sm" title="May"></div>
                <div className="w-full bg-[#3a25b8] h-[95%] rounded-sm" title="June"></div>
              </div>
              
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Most Downloaded PDFs</h4>
                {analyticsDownloads.map((item, index) => (
                  <div key={index} className="flex justify-between items-start text-xs border-b border-gray-50 pb-2 last:border-none last:pb-0">
                    <div>
                      <p className="font-semibold text-gray-800 line-clamp-1">{item.title}</p>
                      <span className="text-gray-400 text-[11px]">{item.count}</span>
                    </div>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] shrink-0">{item.conversion}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ➕ DYNAMIC UPLOAD FORM MODAL */}
      {isUploadOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto flex flex-col">
            
            <div className="p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h2 className="text-lg font-bold text-gray-900">Upload New Newsletter</h2>
              <button onClick={() => setIsUploadOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>

            <form className="p-6 space-y-4 flex-1" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Newsletter Title *</label>
                <input type="text" placeholder="e.g., Monthly Primary Education Update" className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#4c35de]" required />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Short Description *</label>
                <textarea rows="2" placeholder="Provide a brief snapshot of content..." className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#4c35de]" required></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Category *</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#4c35de] bg-white">
                    {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Publish Date</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#4c35de]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <span className="text-sm font-semibold text-gray-700 flex items-center">Access Setting</span>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-xs font-medium text-gray-500">Free</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4c35de]"></div>
                  </label>
                  <span className="text-xs font-medium text-amber-600 flex items-center gap-0.5"><Crown className="w-3 h-3 fill-amber-500" /> Premium</span>
                </div>
              </div>

              {/* Functional Interactive Upload Slots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="border-2 border-dashed border-gray-200 hover:border-[#4c35de] rounded-xl p-4 text-center cursor-pointer transition-colors bg-gray-50/50 block">
                  <input type="file" accept=".pdf" className="hidden" onChange={(e) => handleFileChange(e, 'pdf')} />
                  <UploadCloud className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                  <span className="block text-xs font-bold text-gray-700">
                    {uploadedPdf ? "✓ PDF Loaded" : "Upload PDF Booklet"}
                  </span>
                  <span className="text-[10px] text-gray-400 block mt-0.5 truncate max-w-full">
                    {uploadedPdf ? `${uploadedPdf.name} (${uploadedPdf.size})` : "Max size 25MB"}
                  </span>
                </label>

                <label className="border-2 border-dashed border-gray-200 hover:border-[#4c35de] rounded-xl p-4 text-center cursor-pointer transition-colors bg-gray-50/50 block">
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'img')} />
                  <UploadCloud className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                  <span className="block text-xs font-bold text-gray-700">
                    {uploadedThumbnail ? "✓ Image Loaded" : "Thumbnail Cover"}
                  </span>
                  <span className="text-[10px] text-gray-400 block mt-0.5 truncate max-w-full">
                    {uploadedThumbnail ? uploadedThumbnail.name : "PNG or JPG target"}
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Tags (Comma Separated)</label>
                <input type="text" placeholder="e.g., circular, primary, rules" className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#4c35de]" />
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-2">
                <button type="button" onClick={() => setIsUploadOpen(false)} className="px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-100 rounded-xl transition-colors">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#4c35de] hover:bg-[#3a25b8] text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-100 transition-colors">Publish Document</button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* 📄 DETAILED NEWS-CUTTING PREVIEW MODAL */}
      {isPreviewOpen && selectedNewsletter && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#4c35de]" />
                <span className="text-xs font-bold uppercase text-gray-400 tracking-wide">{selectedNewsletter.category}</span>
              </div>
              <button onClick={() => { setIsPreviewOpen(false); setSelectedNewsletter(null); }} className="p-1 hover:bg-gray-200 rounded-lg text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            
            {/* Main Content Details Wrapper */}
            <div className="p-6 overflow-y-auto space-y-6 bg-amber-50/20">
              
              {/* Retro Press Header Layout */}
              <div className="text-center space-y-2 border-b-4 border-double border-zinc-800 pb-4">
                <h2 className="font-serif font-black text-2xl sm:text-3xl text-gray-900 leading-tight tracking-tight">
                  {selectedNewsletter.title}
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Date: {selectedNewsletter.uploadDate}</span>
                  <span>•</span>
                  <span>Access: <strong className={selectedNewsletter.accessType === 'Premium' ? 'text-amber-600' : 'text-emerald-600'}>{selectedNewsletter.accessType}</strong></span>
                  <span>•</span>
                  <span>Downloads: <strong>{selectedNewsletter.downloads}</strong></span>
                </div>
              </div>

              {/* Editorial Content Layout */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                <div className="md:col-span-2 border border-zinc-300 p-1 bg-white shadow-sm rounded">
                  <img src={selectedNewsletter.thumbnail} alt="" className="w-full h-auto object-cover rounded" />
                </div>
                <div className="md:col-span-3 space-y-4">
                  <h4 className="font-serif font-bold text-gray-800 text-base border-b border-zinc-200 pb-1">CIRCULAR ABSTRACT</h4>
                  <p className="text-sm text-gray-700 font-sans leading-relaxed text-justify first-letter:text-3xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-1">
                    {selectedNewsletter.description}
                  </p>
                  <p className="text-xs text-gray-500 leading-normal bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                    * This is an official digital asset deployment. Verified administrators can trigger immediate notification streams or dispatch direct email templates targeting respective parameters.
                  </p>
                </div>
              </div>

              {/* Attached Tags Blocks */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <Tag className="w-3.5 h-3.5 text-gray-400 mr-1" />
                {selectedNewsletter.tags?.map((tag, i) => (
                  <span key={i} className="bg-zinc-100 border border-zinc-200 text-zinc-600 text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end items-center gap-3">
              <button 
                onClick={() => { setIsPreviewOpen(false); setSelectedNewsletter(null); }}
                className="px-4 py-2 border border-gray-200 hover:bg-gray-100 text-gray-600 rounded-xl text-xs font-semibold transition-colors"
              >
                Close Preview
              </button>
              <button className="bg-[#4c35de] hover:bg-[#3a25b8] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-100 transition-colors">
                <Download className="w-4 h-4" /> Download Booklet PDF
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}