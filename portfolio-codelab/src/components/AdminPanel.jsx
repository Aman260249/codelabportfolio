import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [projectData, setProjectData] = useState({ 
    title: '', category: '', tech: '', images: '', live: '', github: '' 
  });

  // Direct Render URL to avoid 'undefined' issues on Vercel
  const backendUrl = "https://codelabportfolio.onrender.com";

  const boxBg = "linear-gradient(135deg, #202021 0%, #2C2833 50%, #201731 100%)";

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/projects`);
      // Safety: ensure projects is always an array
      setProjects(Array.isArray(res.data) ? res.data : []);
    } catch (err) { 
      console.error("Error fetching projects");
      setProjects([]); // Fallback to empty array
    }
  };

  useEffect(() => { if (isLoggedIn) fetchProjects(); }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${backendUrl}/api/login`, loginData);
        if(res.data.success) {
            setIsLoggedIn(true);
            console.log("Login Successful, Codelab!");
        }
    } catch (err) { 
        console.error("Login Error:", err);
        alert("Wrong ID/Password Codelab!"); 
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete kar dein?")) {
      try {
        await axios.delete(`${backendUrl}/api/delete-project/${id}`);
        alert("Deleted!");
        fetchProjects();
      } catch (err) { alert("Delete error!"); }
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      // images ko array mein convert karna padega
      const finalData = { ...projectData, images: projectData.images.split(',') };
      await axios.post(`${backendUrl}/api/add-project`, finalData);
      alert("Added!");
      setProjectData({ title: '', category: '', tech: '', images: '', live: '', github: '' });
      fetchProjects();
    } catch (err) { alert("Error adding project!"); }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-[#1A1A1A] p-10 rounded-3xl border border-[#8E7FFF] shadow-[0_0_20px_#8E7FFF30] w-full max-w-md">
          <h2 className="text-white text-3xl mb-8 font-black uppercase tracking-tighter italic">Admin Login</h2>
          <input type="text" placeholder="Username" className="w-full mb-4 p-4 rounded-xl bg-black text-white border border-white/10 outline-none focus:border-[#8E7FFF]" onChange={(e) => setLoginData({...loginData, username: e.target.value})} required />
          <input type="password" placeholder="Password" className="w-full mb-8 p-4 rounded-xl bg-black text-white border border-white/10 outline-none focus:border-[#8E7FFF]" onChange={(e) => setLoginData({...loginData, password: e.target.value})} required />
          <button className="w-full bg-[#8E7FFF] py-4 rounded-xl font-bold text-black uppercase tracking-widest hover:bg-white transition-all">Enter Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Codelab <span className="text-[#8E7FFF]">Studio</span></h2>
            <button onClick={() => setIsLoggedIn(false)} className="bg-red-500/10 text-red-500 border border-red-500/20 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all text-xs font-bold uppercase">Logout</button>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT: FORM (Takes 2 columns) */}
          <div style={{ background: boxBg, borderColor: '#8E7FFF30' }} className="lg:col-span-2 border rounded-[2rem] p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">New Project</h3>
            <form onSubmit={handleProjectSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Title" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#8E7FFF]" onChange={(e) => setProjectData({...projectData, title: e.target.value})} value={projectData.title} required />
                <input type="text" placeholder="Category" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#8E7FFF]" onChange={(e) => setProjectData({...projectData, category: e.target.value})} value={projectData.category} required />
              </div>
              <input type="text" placeholder="Tech Stack (React, Node...)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#8E7FFF]" onChange={(e) => setProjectData({...projectData, tech: e.target.value})} value={projectData.tech} required />
              <input type="text" placeholder="Image URL (Comma separated for multiple)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#8E7FFF]" onChange={(e) => setProjectData({...projectData, images: e.target.value})} value={projectData.images} required />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Live Link" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#8E7FFF]" onChange={(e) => setProjectData({...projectData, live: e.target.value})} value={projectData.live} />
                <input type="text" placeholder="GitHub" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#8E7FFF]" onChange={(e) => setProjectData({...projectData, github: e.target.value})} value={projectData.github} />
              </div>
              <button className="w-full bg-[#8E7FFF] py-4 rounded-xl font-bold text-black uppercase tracking-widest hover:shadow-[0_0_20px_#8E7FFF] transition-all mt-4">Add Project</button>
            </form>
          </div>

          {/* RIGHT: DELETE LIST (Takes 1 column) */}
          <div className="bg-[#1A1A1A] rounded-[2rem] p-8 border border-white/10 h-full max-h-[550px] flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Projects</h3>
            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
              {/* Added Safety Check here */}
              {Array.isArray(projects) && projects.length > 0 ? (
                projects.map((p) => (
                  <div key={p._id} className="flex justify-between items-center p-4 bg-black/40 rounded-xl border border-white/5 hover:border-[#8E7FFF50] transition-all group">
                    <span className="text-white/80 text-sm truncate mr-2">{p.title}</span>
                    <button onClick={() => handleDelete(p._id)} className="text-red-500 opacity-50 group-hover:opacity-100 transition-all text-[10px] font-bold uppercase">Delete</button>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-xs text-center mt-10 uppercase tracking-widest">No projects found</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPanel;