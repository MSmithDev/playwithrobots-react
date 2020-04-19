import React from 'react';
import styles from './topBar.module.css';

export function TopBar() {
    function onClick(){
        window.location.href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=mb8hd3bpd9kuybk2gpvlcz6jw4ebyn&redirect_uri=https%3A%2F%2Fmanage.mclarkdev.com%2Fpwr%2Fauth/&scope=user_read";
        
    }
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
                <button className={styles.loginBtn} type="button" onClick={onClick}>Login to Twitch</button>
            </div>

        </div>


    );
}
