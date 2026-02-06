const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true }, // WEB, UI/UX, etc.
    tech: { type: String, required: true },
    images: [String], // Array of 1-10 images
    live: String,
    github: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);