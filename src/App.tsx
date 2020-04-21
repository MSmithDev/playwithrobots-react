import React from 'react';
import './App.css';
import { TwitchVideo } from './features/twitch-video/twitchVideo';
import { TwitchChat } from 'react-twitch-embed';
import { TopBar } from './features/topBar/topBar';
import { VotePanelContainer } from './features/robotComponents/votePanel/votePanelContainer';
import { store } from './app/store';
import { updateUser } from './features/websocket/websocket';
import { siteUrl } from './globalVars';




function App() {
  fetch(siteUrl+'/session/', {
        credentials: 'include'
    })
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log("logged in?: " + jsonData.loggedIn)
    console.log("ran fetch from app.tsx");
    store.dispatch(updateUser(jsonData.loggedIn))
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <TopBar/>
        <TwitchVideo />
        <div className="chat">
        <TwitchChat className="chat-embed-boder" channel="monstercat" theme="dark"/>
        <VotePanelContainer/>
        </div>
        
        </div>
        
      </header>
    </div>
  );
}

export default App;
