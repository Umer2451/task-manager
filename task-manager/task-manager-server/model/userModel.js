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
        required: false,
        type: String
    },
    dob : {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('userData', dataSchema)