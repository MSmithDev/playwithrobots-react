import React from 'react';
import styles from './votePanelContainer.module.css';
import { VoteButton } from './voteButton';


export function VotePanelContainer() {
    

    return (
        <div className={styles.container}>
        
            <VoteButton name="Move A" value="0"/>
            <VoteButton name="Move B" value="0"/>
            <VoteButton name="Move C" value="0"/>
            <VoteButton name="Move D" value="0"/>

        </div>

    );
}