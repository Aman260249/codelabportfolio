const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Message = require('../models/Message');
const Admin = require('../models/Admin');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ======================
// 🔐 REGISTER (SECURE)
// ======================
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const exist = await Admin.findOne({ username });
    if (exist) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      username,
      password: hashedPassword
    });

    await admin.save();

    res.json({ success: true, message: "Admin created" });

  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


// ======================
// 🔐 LOGIN (JWT)
// ======================
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ======================
// 🔐 AUTH MIDDLEWARE
// ======================
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};


// ======================
// 📦 PROJECT ROUTES (PROTECTED)
// ======================
router.post('/add-project', auth, async (req, res) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

router.delete('/delete-project/:id', auth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ message: "Delete error" });
  }
});

router.put('/update-project/:id', auth, async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true });
  } catch {
    res.status(500).json({ message: "Update error" });
  }
});

// ======================
// 📩 CONTACT
// ======================
router.post('/contact', async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();
    res.json({ success: true });
  } catch {
    res.status(400).json({ success: false });
  }
});

module.exports = router;