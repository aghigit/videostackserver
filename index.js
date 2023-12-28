// import json server library
const jsonServer = require('json-server')

const cors= require('cors')
// create server
const videoServer= jsonServer.create()

// create a router to connect the json file
const router= jsonServer.router('data.json')

// create middleware(json to js)
const middleware=jsonServer.defaults()

//  connect with client
videoServer.use(cors())

videoServer.use(middleware)

// telling server to use router
videoServer.use(router)

// for running the server
const PORT=4000
videoServer.listen(PORT, ()=>{
    console.log(`video server started at..... ${PORT}`)
})
