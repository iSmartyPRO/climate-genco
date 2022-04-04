const express = require("express")
const mongoose = require('mongoose')
const config = require("./config")

const app = express()
const co2Routes = require("./routes/co2")

// Подключение к БД
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Mongo DB Connected'))
.catch(err => console.log(err))


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use("/api", co2Routes)

module.exports = app