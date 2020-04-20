import React from 'react';
import styles from './votePanelContainer.module.css';
import { VoteButton } from './voteButton';


export function VotePanelContainer() {
    

    return (
        <div className={styles.container}>
        
            <VoteButton name="Move A" value="A"/>
            <VoteButton name="Move B" value="B"/>
            <VoteButton name="Move C" value="C"/>
            <VoteButton name="Move D" value="D"/>

        </div>

    );
}