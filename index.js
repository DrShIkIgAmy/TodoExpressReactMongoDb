const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todo_routes')

const PORT = 3000
const IpAddr = "127.0.0.1"

const Server = express()

// Server.use(session({secret: 'Shiki',saveUninitialized:true}))
Server.use(express.urlencoded({ extended: true }))

Server.use(todoRoutes)

Server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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


