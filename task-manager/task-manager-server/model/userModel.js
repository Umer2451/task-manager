const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    userName: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    firstName: {
        required: false,
        type: String
    },
    lastName: {
        required: false,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    dob : {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('userData', dataSchema)