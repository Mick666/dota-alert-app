import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const randomNumber = () => Math.floor(Math.random() * 21)

class App extends Component {
  state = {
    clock: "Waiting for a game"
  };

  constructor() {
    super()
    this.runes = new Audio("/havemoney.mp3")
    this.sound = [new Audio("/helpornot.mp3"), 
    new Audio("/biteass.mp3"), 
    new Audio("/biteass-2.mp3"), 
    new Audio("/shutnoise.mp3"), 
    new Audio("/suicide.mp3"), 
    new Audio("/letsgoalready.mp3"),
    new Audio("/blackjack.mp3"), 
    new Audio("/5dollars.mp3"),
    new Audio("/baby.mp3"),
    new Audio("/drugs.mp3"),
    new Audio("/grease.mp3"),
    new Audio("/hell.mp3"),
    new Audio("/idea.mp3"),
    new Audio("/peasants.mp3"),
    new Audio("/runagain.mp3"),
    new Audio("/shutup.mp3"), 
    new Audio("/skintube.mp3"),
    new Audio("/slow.mp3"),
    new Audio("/stupid.mp3"),
    new Audio("/suck.mp3"),
    new Audio("/violence.mp3")]
    this.played = false;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.loadData(), 1000)
  }

  loadData() {
    this.callBackendAPI()
    .then(res => {
      if (res.express[2] === "Waiting for a game") {
        this.setState({clock: "Waiting for a game"})
        return;
      }
      this.setState({ clock: `${res.express[0].toString().padStart(2, "0")}:${res.express[1].toString().padStart(2, "0")}` })
      if ((res.express[0]+1) % 5 === 0 && (res.express[1] === 44 || res.express[1] === 43 || res.express[1] === 45) && !this.played) {
        this.runes.play();
        this.played = true;
      } else if ((res.express[1] === 44 || res.express[1] === 43 || res.express[1] === 45) && !this.played) {
        const randomNum = randomNumber();
        console.log(randomNum)
        this.sound[randomNum].play();
        this.played = true;
      } else if (res.express[1] === 0 || res.express[1] === 1 || res.express[1] === 2) {
        this.played = false;
      }
    })
    .catch(err => console.log(err));
  }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await axios.get('http://localhost:5000/express_backend');
    const body = response.data;

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <p id="ceiling">This is invisible text to keep the image from moving down</p>
        <div className = "clock">
          <h1>Dota 2 Camp Stacking and Bounty Rune reminder</h1>
          <p className="App-intro">{this.state.clock}</p>
        </div>
      </div>

    );
  }
} 

export default App;

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const randomNumber = () => Math.floor(Math.random() * 21)

// const App = () => {
//   const [clock, setClock] = useState('Waiting for a game') 
//   const [dotaData, setDota] = useState({})

//   const sound = [new Audio("/helpornot.mp3"), 
//       new Audio("/biteass.mp3"), 
//       new Audio("/biteass-2.mp3"), 
//       new Audio("/shutnoise.mp3"), 
//       new Audio("/suicide.mp3"), 
//       new Audio("/letsgoalready.mp3"),
//       new Audio("/blackjack.mp3"), 
//       new Audio("/5dollars.mp3"),
//       new Audio("/baby.mp3"),
//       new Audio("/drugs.mp3"),
//       new Audio("/grease.mp3"),
//       new Audio("/hell.mp3"),
//       new Audio("/idea.mp3"),
//       new Audio("/peasants.mp3"),
//       new Audio("/runagain.mp3"),
//       new Audio("/shutup.mp3"), 
//       new Audio("/skintube.mp3"),
//       new Audio("/slow.mp3"),
//       new Audio("/stupid.mp3"),
//       new Audio("/suck.mp3"),
//       new Audio("/violence.mp3")]

//   useEffect(() => {
//     console.log('effect')
//     axios
//       .get('http://localhost:5000/express_backend')
//       .then(response => {
//         setDota(response.data)
//       })
//   }, [])

//   //   componentDidMount() {
// //     this.intervalId = setInterval(() => this.loadData(), 1000)
// //   }

// //   loadData() {
// //     this.callBackendAPI()
// //     .then(res => {
// //       if (res.express[2] === "Waiting for a game") {
// //         this.setState({clock: "Waiting for a game"})
// //         return;
// //       }
// //       this.setState({ clock: `${res.express[0].toString().padStart(2, "0")}:${res.express[1].toString().padStart(2, "0")}` })
// //       if ((res.express[0]+1) % 5 === 0 && (res.express[1] === 44 || res.express[1] === 43 || res.express[1] === 45) && !this.played) {
// //         this.runes.play();
// //         this.played = true;
// //       } else if ((res.express[1] === 44 || res.express[1] === 43 || res.express[1] === 45) && !this.played) {
// //         const randomNum = randomNumber();
// //         console.log(randomNum)
// //         this.sound[randomNum].play();
// //         this.played = true;
// //       } else if (res.express[1] === 0 || res.express[1] === 1 || res.express[1] === 2) {
// //         this.played = false;
// //       }
// //     })
// //     .catch(err => console.log(err));
// //   }

// //     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
// //   callBackendAPI = async () => {
// //     const response = await axios.get('/express_backend');
// //     const body = response.data;

// //     if (response.status !== 200) {
// //       throw Error(body.message) 
// //     }
// //     return body;
// //   };

//   return  (
//     <div className="App">
//       <p id="ceiling">This is invisible text to keep the image from moving down</p>
//       <div className = "clock">
//         <h1>Dota 2 Camp Stacking and Bounty Rune reminder</h1>
//         <p className="App-intro">{this.state.clock}</p>
//       </div>
//     </div>

//   )
// }

// export default App 