const path = require('path');
const express = require('express');
const cors = require('cors');

const app =express()
app.use(cors())
app.use(express.static(path.join(__dirname,'client')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'client/index.html'))
})


app.listen(8000,()=>{
    console.log("Connected to port 8000")
})