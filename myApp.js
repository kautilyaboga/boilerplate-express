require('dotenv').config();

let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'

console.log("Hello World")

app.use(`/public`, express.static(`${__dirname}/public`))

app.use(function (req,res,next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.get("/",function (req,res) {
    // res.send("Hello Express")
    res.sendFile(absolutePath)
})

app.get("/json",function (req,res) {

    const upperCaseorNot = process.env.MESSAGE_STYLE === "uppercase";
    // console.log(upperCaseorNot)
    // console.log(upperCaseorNot? "HELLO JSON" : "Hello json")

    res.json({
        "message" : upperCaseorNot? "HELLO JSON" : "Hello json",
    })
})





































 module.exports = app;
