const Message = require('../models/Message');

const initSocket = (server) => {
    const { Server } = require('socket.io');
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('User connected:', socket.id);

        socket.on('joinRoom', (room) => {
            socket.join(room);
            console.log(`User ${socket.id} joined room ${room}`);
        });

        socket.on('sendMessage', async ({ senderId, content, chatRoom }) => {
            const msg = await Message.create({ sender: senderId, content, chatRoom });
            io.to(chatRoom).emit('receiveMessage', msg);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
};

module.exports = initSocket;
