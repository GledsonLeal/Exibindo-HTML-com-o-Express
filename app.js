const express = require ("express")
const app = express()
const port = 8081

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/html/index.html")
})


app.listen(port, function(){
    console.log("servidor rodando na porta 8081")
})