import React from 'react';
import styles from './voteButton.module.css';

interface Props {
    name: string;
    value: string;
  };
export function VoteButton({name, value}: Props) {
    

    return (
        <div>
        
    <button className={styles.btn} type="button">{name}</button>

        </div>

    );
}