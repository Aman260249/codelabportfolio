const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true } // Real project mein hum ise 'bcrypt' se hash karte hain
});

module.exports = mongoose.model('Admin', AdminSchema);