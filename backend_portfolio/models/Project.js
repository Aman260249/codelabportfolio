const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },

    category: { 
        type: String, 
        required: true 
    }, // WEB, UI/UX, etc.

    tech: { 
        type: String, 
        required: true 
    },

    images: { 
        type: [String], 
        default: [] 
    },

    live: { 
        type: String, 
        default: "" 
    },

    github: { 
        type: String, 
        default: "" 
    },

    // 🔥 NEW FIELDS (IMPORTANT)
    problem: {
        type: String,
        default: ""
    },

    features: {
        type: [String],
        default: []
    },

    createdAt: { 
        type: Date, 
        default: Date.now 
    }

});

module.exports = mongoose.model('Project', ProjectSchema);