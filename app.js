const express = require("express")
const app = express()
const index = require("./routes/index.js")
const PORT = 8080
//config
app.set("view engine","ejs")

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(index)
app.use(express.static("public"))
app.listen(PORT,(err) => {
    if(err){
        console.log(err)
    }
    else{
         console.log(`Server running on port ${PORT}`)
    }
})
