import React from 'react';
import './App.css';
import { TwitchVideo } from './features/twitch-video/twitchVideo';
import { TwitchChat } from 'react-twitch-embed';
import { TopBar } from './features/topBar/topBar';
import { VotePanelContainer } from './features/robotComponents/votePanel/votePanelContainer';
import { store } from './app/store';
import { updateUser } from './features/websocket/websocket';
import { siteUrl } from './globalVars';
import CheckersGameBoard from './features/games/checkers/Checkers';





function App() {
  // fetch('https://'+siteUrl+'/session/', {
  //       credentials: 'include'
  //   })
  // .then(response => response.json())
  // .then((jsonData) => {
  //   // jsonData is parsed json object received from url
  //   console.log("logged in?: " + jsonData.loggedIn)
  //   console.log("User Name : " + jsonData.userName)
  //   console.log("ran fetch from app.tsx");
  //   store.dispatch(updateUser(jsonData))
  // })
  // .catch((error) => {
  //   // handle your errors here
  //   console.error(error)
  // })
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <TopBar/>
        <TwitchVideo />
        <div className="chat">
        <TwitchChat className="chat-embed-boder" channel="playwithrobots" theme="dark"/>
        <CheckersGameBoard></CheckersGameBoard>
        </div>
        
        </div>
        
      </header>
    </div>
  );
}

export default App;
