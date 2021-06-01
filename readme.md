This is a Node/React app that does this but is integrated with Dota to sync with the time in game. It uses Dota's Game State Integration to do this.

To install:

* Download the repo your Documents folder
* Open powershell, change directory to said folder then run the following commands:
* npm install
* npm i dota2-gsi

To run the app:

* Enter 'npm start' in that directory and open up http://localhost:5000/ in your web browser. 
* When a dota game is running, the clock will update with the game.
* A sound will play at ~X:45 seconds (give or take a second); unless its before a bounty will spawn then a different sound will play.

I couldn't be arsed running powershell every time, so I have a .bat file in my Documents folder with the following in it:

    cd dota-alert-app
    node server.js
    pause    

Running said .bat runs the app without any extra steps.

The sounds are all Futurama/Simpsons related FWIW. When Bender asks for money, it's bounty time. 

(I make no assurances this is an optimal web app, I threw this together 18 months ago in an hour or so. The code is definitely sub-par, but it works for what I need).