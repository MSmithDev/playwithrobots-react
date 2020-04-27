import React from 'react';
import styles from './votePanelContainer.module.css';
import { VoteButton } from './voteButton';


export function VotePanelContainer() {
    

    return (
        <div className={styles.container}>
        
            <VoteButton name="Move A" value="400|0|0|0|0|180|0"/>
            <VoteButton name="Move B" value="400|0|100|0|0|180|0"/>
            <VoteButton name="Move C" value="400|100|100|0|0|180|0"/>
            <VoteButton name="Move D" value="400|50|50|-100|0|180|0"/>

        </div>

    );
}