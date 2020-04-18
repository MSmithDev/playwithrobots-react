import React from 'react';
import styles from './topBar.module.css';

export function TopBar() {

    return (

        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <span>Play with robots!</span>
            </div>

            <div className={styles.statusContainer}>
                <span>Robot status: </span> <span>Offline</span>
            </div>

            <div className={styles.statsContainer}>
                <span>Users Connected: </span> <span>NaN</span>
            </div>

            <div className={styles.loginContainer}>
                <button className={styles.loginBtn} type="button">Login to Twitch</button>
            </div>

        </div>


    );
}
