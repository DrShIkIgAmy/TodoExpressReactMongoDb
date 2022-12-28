const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todo_routes')
const TodoRepos = require('./db_connection');


const PORT = 8000
const IpAddr = "127.0.0.1"

const Server = express()

Server.use(express.urlencoded({ extended: true }))

Server.use(todoRoutes)

async function start() {
  try {
    TodoRepos.then( (connection)=>{
      console.log("DB connected");
    });
    Server.listen(PORT, IpAddr, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()


