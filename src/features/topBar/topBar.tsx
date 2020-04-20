import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './topBar.module.css';
import { selectUser, updateUser} from '../websocket/websocket';
import { store } from '../../app/store';

export function TopBar() {
    function onClick(){
        window.location.href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=mb8hd3bpd9kuybk2gpvlcz6jw4ebyn&redirect_uri=https%3A%2F%2Fmanage.mclarkdev.com%2Fpwr%2Fauth/&scope=user_read";
        console.log("login button pressed");
    }
   
    const user = useSelector(selectUser);

    fetch('https://pwr.mclarkdev.com/session/')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData.loggedIn)
    store.dispatch(updateUser(jsonData.loggedIn))
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })




    return (

        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <span>Play with robots!</span>
            </div>

            <div className={styles.statusContainer}>
                <span>Robot status: </span> <span>Offline</span>
            </div>

            <div className={styles.statsContainer}>
    <span>Logged in: {user.loggedIn.toString()}</span>
            </div>

            <div className={styles.loginContainer}>
                <button className={styles.loginBtn} type="button" onClick={onClick}>Login to Twitch</button>
            </div>

        </div>


    );
}
