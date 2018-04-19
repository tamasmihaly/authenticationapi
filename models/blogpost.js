const mongoose = require('mongoose');

const blogpostSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    blogpost: {
        title: String,
        content: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blogpost', blogpostSchema)