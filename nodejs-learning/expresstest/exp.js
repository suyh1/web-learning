const express = require('express')
const server = express()

server.get('/', (req, res)=>{
  res.send('你好，欢迎使用express')
})

server.all('*', (req,res)=>{
  res.status(404)
  res.send('访问路径不存在')
})

server.listen(3000, ()=>{
  console.log('Web 启动！')
})