import React from 'react';
import styles from './voteButton.module.css';
import { store } from '../../../app/store';
import { send } from '@giantmachines/redux-websocket';

interface Props {
    name: string;
    value: string;
  };
export function VoteButton({name, value}: Props) {

    function onClick(value: String){
        
        store.dispatch(send(value));
    }
    

    return (
        <div>
        
    <button className={styles.btn} type="button" onClick={() => onClick(value)}>{name}</button>

        </div>

    );
}