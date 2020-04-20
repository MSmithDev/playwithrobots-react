import React from 'react';
import styles from './twitchVideo.module.css';
import { TwitchEmbed, TwitchPlayer } from "react-twitch-embed"
import { VerticalReadout } from '../robotComponents/VerticalReadout/VerticalReadout';
import { useDispatch } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';


export function TwitchVideo() {
   
  const dispatch = useDispatch();
  dispatch(connect('wss://manage.mclarkdev.com/pwr/game/'));
      
  return (
    <div className={styles.container}>


<div className={styles.streamContainer}>
      <TwitchPlayer
        channel="monstercat" 
        muted="false"
        width="100%"
        height="100%" 
        />   
    </div>


<div className={styles.readoutContainer}>


<VerticalReadout/>


</div>

    </div>
   
  );
}
