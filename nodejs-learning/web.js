const http = require('http')
const server = http.createServer()
// 监听 request 事件
server.on('request', (req, res)=>{
  // response 给一个字符串
  res.end('hello http')
})
// 启动服务器
server.listen(3000, ()=>{
  console.log('3000开始监听')
})