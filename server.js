const mongoose = require('mongoose');
const db = require('./config/database.js')


// csatlakozás a mongódbhez


mongoose.connect(db.uri, db.options, () => {
    console.log('mongoDB connected')
}, err => {
    console.log("mongoDB error: " + err)
})