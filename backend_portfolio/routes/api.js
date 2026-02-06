const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Message = require('../models/Message');


// 1. PROJECT ADD KARNE KI API (POST)
router.post('/add-project', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 2. SAARE PROJECTS FETCH KARNE KI API (GET)
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. CONTACT FORM KA DATA SAVE KARNE KI API (POST)
router.post('/contact', async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
}); 



const Admin = require('../models/Admin');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username, password });
        if (admin) {
            res.status(200).json({ success: true, message: "Login Successful!" });
        } else {
            res.status(401).json({ success: false, message: "Invalid Credentials!" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 

// Project delete karne ka route
router.delete('/delete-project/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Project deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;