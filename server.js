if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express() // app é recurso do express

app.get('/', (req,res)=>{
    res.end("Servidor ativo")
})

app.listen(process.env.PORT, console.log("servidor iniciado"))