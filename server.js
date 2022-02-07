const express = require('express')
const path = require('path')
const req = require('express/lib/request')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.listen(5000, () => {
    console.log(`le serveur est lancé sur le port: ${PORT}`)
})