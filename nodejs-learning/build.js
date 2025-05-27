const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
  if(err) return console.log(err)
  const htmlStr = data.toString().replace(/[\r\n]/g, '')
  fs.readFile(path.join(__dirname, 'public', 'index.js'), (err, data)=>{
    if(err) return console.log(err)
    let jsStr = data.toString().replace(/\r\n/g, '').replace(/console.log\('.+?'\)/g, '')
    jsStr = `<script>${jsStr}</script>`
    fs.writeFile(path.join(__dirname, 'dist', 'index.html'), htmlStr + jsStr, err=>{
      if(err) return console.log(err)
    })
  })
})