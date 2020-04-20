import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TwitchVideo } from './features/twitch-video/twitchVideo';
import { TwitchChat } from 'react-twitch-embed';
import { TopBar } from './features/topBar/topBar';
import { connect } from '@giantmachines/redux-websocket';
import { useDispatch } from 'react-redux';
import { VotePanelContainer } from './features/robotComponents/votePanel/votePanelContainer';
import styles from './App.css';




function App() {
  
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
