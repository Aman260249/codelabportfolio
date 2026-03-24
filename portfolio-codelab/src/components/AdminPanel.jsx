import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const [projectData, setProjectData] = useState({
    title: '',
    category: '',
    tech: '',
    images: '',
    live: '',
    github: '',
    problem: '',
    features: ''
  });

  const backendUrl = "https://codelabportfolio.onrender.com";

  // 🔥 AUTO LOGIN
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/projects`);
      setProjects(res.data || []);
    } catch {
      setProjects([]);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchProjects();
  }, [isLoggedIn]);

  // 🔐 LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backendUrl}/api/login`, loginData);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  // 🔐 DELETE (TOKEN)
  const handleDelete = async (id) => {
    if (!window.confirm("Delete project?")) return;

    await axios.delete(`${backendUrl}/api/delete-project/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });

    fetchProjects();
  };

  // EDIT
  const handleEdit = (p) => {
    setIsEditing(true);
    setEditId(p._id);

    setProjectData({
      title: p.title,
      category: p.category,
      tech: p.tech,
      images: p.images.join(','),
      live: p.live,
      github: p.github,
      problem: p.problem || '',
      features: p.features?.join(',') || ''
    });
  };

  // 🔐 ADD / UPDATE (TOKEN)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...projectData,
      images: projectData.images.split(','),
      features: projectData.features.split(',')
    };

    try {
      if (isEditing) {
        await axios.put(`${backendUrl}/api/update-project/${editId}`, finalData, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        alert("Updated!");
      } else {
        await axios.post(`${backendUrl}/api/add-project`, finalData, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });
        alert("Added!");
      }

      setIsEditing(false);
      setEditId(null);

      setProjectData({
        title: '',
        category: '',
        tech: '',
        images: '',
        live: '',
        github: '',
        problem: '',
        features: ''
      });

      fetchProjects();

    } catch {
      alert("Error!");
    }
  };

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  // LOGIN UI
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <form onSubmit={handleLogin} className="p-8 rounded-2xl bg-white/5 border border-[var(--color-accent)] w-full max-w-sm">

          <h2 className="text-[var(--color-text)] text-2xl mb-6 font-bold text-center">
            Admin Login
          </h2>

          <input
            placeholder="Username"
            className="w-full p-3 mb-4 bg-transparent border border-white/10 rounded-xl text-[var(--color-text)]"
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-transparent border border-white/10 rounded-xl text-[var(--color-text)]"
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />

          {/* 🔥 BUTTON FIX */}
          <button
            className="
              w-full py-3 rounded-xl font-bold text-black
              bg-[var(--color-accent)]
              transition-all duration-300
              hover:scale-105
              active:scale-95
              hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]
            "
          >
            Login
          </button>

        </form>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-[var(--color-text)]">
            Admin Dashboard
          </h2>

          <button
            onClick={handleLogout}
            className="px-5 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">

            <h3 className="text-[var(--color-text)] font-bold text-lg">
              {isEditing ? "Edit Project" : "Add Project"}
            </h3>

            {["title","category","tech","images","live","github","problem","features"].map((field) => (
              <input
                key={field}
                placeholder={field}
                value={projectData[field]}
                onChange={(e) => setProjectData({ ...projectData, [field]: e.target.value })}
                className="w-full p-3 bg-transparent border border-white/10 rounded-xl text-[var(--color-text)]"
              />
            ))}

            <button className="w-full bg-[var(--color-accent)] py-3 rounded-xl text-black font-bold hover:scale-105 transition">
              {isEditing ? "Update" : "Add"}
            </button>

          </form>

          {/* LIST */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3 max-h-[500px] overflow-y-auto">

            {projects.map((p) => (
              <div key={p._id} className="flex justify-between items-center p-3 bg-black/30 rounded-xl">

                <span className="text-[var(--color-text)] text-sm">{p.title}</span>

                <div className="flex gap-2">
                  <button onClick={() => handleEdit(p)} className="text-[var(--color-accent)] text-xs">Edit</button>
                  <button onClick={() => handleDelete(p._id)} className="text-red-500 text-xs">Delete</button>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminPanel;