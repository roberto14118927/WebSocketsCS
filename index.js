
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', client => {
    console.log('conectado:  ' + client.id)
    client.on('msj-input-server', (data) => {
        console.log(data);

        io.emit('msj-output-client', data);
    })

});

server.listen(3000, () => {
    console.log('Server run puerto 3000')
})