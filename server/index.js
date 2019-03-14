require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const session =  require('express-session')
const {getPosts, getSinglePost} = require('./controller')
const {login, register, userSession, logout} = require('./auth')

const app=express()
app.use(json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cooke:{
        maxAge: 1000 * 60 * 60
    }
}))

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
    console.log('Database Connected')
})

//User Auth Endpoints
app.get('/api/user', userSession)
app.post('/api/login', login)
app.post('/api/register', register)
app.get('/api/logout', logout)

//User Posts
app.get('/api/posts/:user_id', getPosts)
app.get('/api/post/:post_id', getSinglePost)

const port = process.env.SERVER_PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})