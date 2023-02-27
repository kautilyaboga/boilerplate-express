let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'

console.log("Hello World")

app.use(`${__dirname}/public`, express.static(`${__dirname}/public`))

app.get("/",function (req,res) {
    // res.send("Hello Express")
    res.sendFile(absolutePath)
})





































 module.exports = app;
