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

// Chain Middleware to Create a Time Server
app.get(
    "/now",
     (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time,
      });
    }
  );

//   Get Route Parameter Input from the Client
  
app.get('/:word/echo',(req,res)=>{
    res.send({
        echo : req.params?.word
    })
})

const handler = (req,res)=>{
    console.log()
    const {first, last}=req.query;
    res.send({name : `${first} ${last}`})
}

app.route("/name").get(handler).post(handler);



// req.method
// req.path
// req.ip

// req.params
// req.query

// res.sendFile
// res.sendFile(absolutePath)
// res.send

// __dirname - relative path







 module.exports = app;
