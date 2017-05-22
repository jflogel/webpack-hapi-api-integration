'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8081
});

server.route({
    method: 'GET',
    path:'/api/hello',
    handler: function (request, reply) {

        return reply('hello from my hapi server');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});