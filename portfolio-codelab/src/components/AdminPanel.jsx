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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/login`, loginData);
      if (res.data.success) setIsLoggedIn(true);
    } catch {
      alert("Login Failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete project?")) return;
    await axios.delete(`${backendUrl}/api/delete-project/${id}`);
    fetchProjects();
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...projectData,
      images: projectData.images.split(','),
      features: projectData.features.split(',')
    };

    try {
      if (isEditing) {
        await axios.put(`${backendUrl}/api/update-project/${editId}`, finalData);
        alert("Updated!");
      } else {
        await axios.post(`${backendUrl}/api/add-project`, finalData);
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

  // LOGIN UI
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <form onSubmit={handleLogin} className="p-8 rounded-2xl bg-white/5 border border-[var(--color-accent)] w-full max-w-sm">
          <h2 className="text-[var(--color-text)] text-2xl mb-6 font-bold">Admin Login</h2>

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

          <button className="w-full bg-[var(--color-accent)] py-3 rounded-xl text-black font-bold">
            Login
          </button>
        </form>
      </div>
    );
  }

  // DASHBOARD UI
  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-[var(--color-text)]">
            Admin Dashboard
          </h2>

          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-5 py-2 border border-red-500 text-red-500 rounded-xl"
          >
            Logout
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">

            <h3 className="text-[var(--color-text)] font-bold text-lg">
              {isEditing ? "Edit Project" : "Add Project"}
            </h3>

            <input placeholder="Title" value={projectData.title}
              onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
              className="input" />

            <input placeholder="Category" value={projectData.category}
              onChange={(e) => setProjectData({ ...projectData, category: e.target.value })}
              className="input" />

            <input placeholder="Tech" value={projectData.tech}
              onChange={(e) => setProjectData({ ...projectData, tech: e.target.value })}
              className="input" />

            <input placeholder="Images (comma)" value={projectData.images}
              onChange={(e) => setProjectData({ ...projectData, images: e.target.value })}
              className="input" />

            <input placeholder="Live Link" value={projectData.live}
              onChange={(e) => setProjectData({ ...projectData, live: e.target.value })}
              className="input" />

            <input placeholder="GitHub" value={projectData.github}
              onChange={(e) => setProjectData({ ...projectData, github: e.target.value })}
              className="input" />

            <textarea placeholder="Problem"
              value={projectData.problem}
              onChange={(e) => setProjectData({ ...projectData, problem: e.target.value })}
              className="input" />

            <input placeholder="Features (comma)"
              value={projectData.features}
              onChange={(e) => setProjectData({ ...projectData, features: e.target.value })}
              className="input" />

            <button className="w-full bg-[var(--color-accent)] py-3 rounded-xl text-black font-bold">
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