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
    blogposts: {
        title: String,
        content: String
    }
})

module.exports = mongoose.model('Blogpost', blogpostSchema)