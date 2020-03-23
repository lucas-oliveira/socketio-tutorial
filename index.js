const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 5000

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
    // res.send('<h1>Sophie best girl</h1>')
})

io.on('connection', function(socket){
    io.emit('chat message','Um bruxo entrou no chat')
    socket.on('disconnect', function(){
        console.log('a user disconnected')
    })
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
    })
})

http.listen(port, function(){
    console.log('listening on port '+ port)
})