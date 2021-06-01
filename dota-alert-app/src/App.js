import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

const randomNumber = () => Math.floor(Math.random() * 21)

const App = () => {
  const [clock, setClock] = useState('Waiting for a game') 
  const [mute, setMute] = useState(false)
  const [volumeSetting, setVolume] = useState(5)

  const runes = new Audio("/havemoney.mp3")
  const sound = [new Audio("/helpornot.mp3"), 
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
  let played = false

  useEffect(() => {
    const interval = setInterval(() => loadData(volumeSetting, mute), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [volumeSetting])

  function handleChange(event) {
    setVolume(Number(event.target.value))
  }  

  const toggleChange = (event) => {
    setMute(event.target.checked)
  }

  function loadData(volumeSetting, mute) {
    callBackendAPI()
    .then(res => {
      if (res.express[2] === "Waiting for a game") {
        setClock("Waiting for a game")
        return;
      }
      setClock(`${res.express[0].toString().padStart(2, "0")}:${res.express[1].toString().padStart(2, "0")}`)
      const muteStatus = document.getElementById('mute-button').checked
      if (muteStatus) return
      else if ((res.express[0]+1) % 3 === 0 && (res.express[1] === 44 || res.express[1] === 43 || res.express[1] === 45) && !played) {
        runes.volume = volumeSetting / 100
        runes.play();
        played = true;
      } else if ((res.express[1] === 44 || res.express[1] === 43 || res.express[1] === 45) && !played) {
        let randomNum = randomNumber();
        sound[randomNum].volume = volumeSetting / 100
        sound[randomNum].play();
        played = true;
      } else if (res.express[1] === 0 || res.express[1] === 1 || res.express[1] === 2) {
        played = false;
      }
    })
    .catch(err => console.log(err));
  }

  async function callBackendAPI () {
    const response = await axios.get('/express_backend');
    const body = response.data;

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  return  (
    <div className="App">
      <p id="ceiling">This is invisible text to keep the image from moving down</p>
      <div className = "clock">
        <h1>Dota 2 Camp Stacking and Bounty Rune reminder</h1>
        <p className="App-intro">{clock}</p>
        <input type='number' value={volumeSetting} onChange={handleChange} />  
        <input type='checkbox' defaultChecked={mute} onChange={toggleChange} id="mute-button"/>
      </div>
    </div>

  )
}

export default App 