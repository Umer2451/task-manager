const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    taskName: {
        required: true,
        type: String
    },
    taskDescription: {
        required: false,
        type: String
    },
    taskStatus: {
        required: false,
        type: String
    },
    email : {
        required : true,
        type: String
    },
    userName: {
        required : true,
        type : String
    }
})

module.exports = mongoose.model('Data', dataSchema)