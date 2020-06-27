var d2gsi = require('dota2-gsi');
var server = new d2gsi();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

var clients = [];

server.events.on('newclient', function(client) {
    console.log("New client connection, IP address: " + client.ip);
    if (client.auth && client.auth.token) {
        console.log("Auth token: " + client.auth.token);
    } else {
        console.log("No Auth token");
    }
    clients.push(client);
});

setInterval(function() {
    clients.forEach(function(client, index) {
        // console.log(client.gamestate.map.clock_time)
        // console.log(client.gamestate.map.game_time)
        var time = Number(client.gamestate.map.clock_time.toString());
        var seconds = time % 60
        var minutes = Math.floor(time / 60)
        console.log(`${minutes}:${seconds}`)
        
        // if (minutes+1 % 5 === 0) console.log("Run alert")
        // if (client.gamestate.hero && client.gamestate.hero.level) {
        //     console.log("Client " + index + " is level " + client.gamestate.hero.level);
        // }
    });
}, 1000); 


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
