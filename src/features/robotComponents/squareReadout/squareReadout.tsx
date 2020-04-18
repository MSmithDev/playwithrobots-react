import React from 'react';
import styles from './squareReadout.module.css';

interface Props {
    axis: string;
    value: string;
  };

export function SquareReadout({axis, value}: Props) {
    

    return (
        <div className={styles.container}>
        
            <div className={styles.title}>
                {axis}
            </div>
            {value}


        </div>

    );
}