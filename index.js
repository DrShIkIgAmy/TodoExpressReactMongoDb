const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todo_routes')

const PORT = 3000
const IpAddr = "127.0.0.1"

const Server = express()

// Server.use(session({secret: 'Shiki',saveUninitialized:true}))
Server.use(express.urlencoded({ extended: true }))

Server.use(todoRoutes)

async function start() {
  try {
    // mongoose.connect("mongodb://localhost/todos_db",{ useNewUrlParser: true }, function (err) {
      mongoose.connect("mongodb+srv://shiki:nintendo@cluster0.fmuan.mongodb.net/todoDB", function (err) {
        if (err) throw err; console.log('Successfully connected'); });
    // await mongoose.connect('', {
    //     useNewUrlParser: true,
    //     useFindAndModify: false
    //   })
    Server.listen(PORT, IpAddr, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()


