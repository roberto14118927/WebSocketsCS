class Sockets {

    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', client => {

            console.log(`Cliente conectado: ${client.id}`);

            client.on('vrf-call', (data) => {
                this.io.emit('vrf-send-output', { status: true });
            });

            client.on('client-response-call', (data) => {
                console.log(data);

                this.io.emit('client-send-response', data);
                this.io.emit('vrf-send-output', { status: false });
            });
            // vrf-send-output

        });
    }

}

module.exports = Sockets;