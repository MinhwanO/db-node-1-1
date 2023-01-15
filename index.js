const express = require('express')
const app = express()
const { Post } = require('./post')
const cors = require('cors')

require('dotenv').config()

const port = process.env.PORT
const server = app.listen(port, () => {
    console.log(`${port} running`)
});

const MONGOURL = "mongodb+srv://minhwan:12345@cluster0.nrsed4p.mongodb.net/?retryWrites=true&w=majority"//process.env.MONGODB_URL

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const mongoose = require('mongoose')

mongoose.connect(MONGOURL)
    .then(() => console.log('MongoDB Connected...'))
    .catch(() => console.log(err))


app.get('/', (req, res) => res.send('안녕하세요'))

app.post('/api/users/post', (req, res) => {
    const posting = new Post(req.body)

    posting.save((err, postInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({success : true})
    })
})

app.get('/api/users/hh', (req, res) => {
    Post.find((err, data) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json(data)
    })
})
