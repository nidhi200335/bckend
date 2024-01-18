//require('dotenv').config();

const express = require('express')
const app = express()
const port = 4000
  employee= {  
      "name":       "sonoo",   
      "salary":      56000,   
      "married":    true  
  }  

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
res.send("login")
})
app.get('/employee',(req,res)=>{
  res.json(employee)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})