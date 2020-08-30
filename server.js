var d2gsi = require('dota2-gsi');
var server = new d2gsi();
const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
var seconds, minutes, game_state;

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

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
        if (client.gamestate.map && client.gamestate.map.clock_time) {
          var time = Number(client.gamestate.map.clock_time.toString());
          seconds = time % 60
          minutes = Math.floor(time / 60)
        }        
        if (client.gamestate.map && client.gamestate.map.game_state) {
            game_state = client.gamestate.map.game_state;
        }
        if (!client.gamestate.map) {
            game_state = "Waiting for a game"
        }
    });
}, 1000); 


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: [minutes, seconds, game_state] });
});
 
