var socket = io(':8181'); // port specified on server

socket.on('someEvent', function(data)
{
    console.log(data);

});