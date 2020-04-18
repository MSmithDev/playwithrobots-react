import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { TwitchVideo } from './features/twitch-video/twitchVideo';
import { TwitchChat } from 'react-twitch-embed';
import { TopBar } from './features/topBar/topBar';
import { connect } from '@giantmachines/redux-websocket';
import { useDispatch } from 'react-redux';




function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <TopBar/>
        <TwitchVideo />
        <TwitchChat className="chat-embed-boder" channel="monstercat" theme="dark"/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
