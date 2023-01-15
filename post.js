const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: {
        type: String,
    },
    title: {
        type: String
    }
})

const Post = mongoose.model('post', postSchema)
module.exports = { Post }