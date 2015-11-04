var https = require("https"),
    fs = require("fs"),
    server = https.createServer(
        {
            key: fs.readFileSync('/path/to/certificate/private.key'),
            cert: fs.readFileSync('/path/to/certificate/ca.crt'),
            ca: fs.readFileSync('/path/to/certificate/ca.crt'),
            requestCert: true
        }),
    io = require("socket.io").listen(server);

server.listen(8181); // whichever port you want to use

// rest of the code
io.sockets.on('connection', function (socket) {
    // ...
});