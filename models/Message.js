const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    choice: String,
    message: String
});

module.exports = mongoose.model('Message', messageSchema);