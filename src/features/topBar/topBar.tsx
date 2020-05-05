import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./topBar.module.css";
import {
  selectUser,
  updateUser,
  selectRobotState,
} from "../websocket/websocket";
import { store } from "../../app/store";
import { siteUrl } from "../../globalVars";

export function TopBar() {
  // function onClick() {
  //   window.location.href =
  //     "https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=mb8hd3bpd9kuybk2gpvlcz6jw4ebyn&redirect_uri=https%3A%2F%2F"+siteUrl+"%2Fauth/&scope=user_read";
  //   console.log("login button pressed");
  // }

  const dispatch = useDispatch();

 function onClick() {
    window.location.href =
      "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=lrfy4ejn7v048z4btqgpfojw34k74w&redirect_uri=https%3A%2F%2Fdev.msmithdev.com/auth&scope=user_read";
    console.log("login button pressed");
  }

  function getCookie(cname:string) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  var token = getCookie('authToken');

  if (token !== '') {
    var protectedUrl = 'https://api.twitch.tv/helix/users';
        let response = fetch(protectedUrl, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
          .then(res => res.json())
          .then(res => {
            console.log(res.data[0]);
            var user = res.data[0];
            var act = {
              loggedIn: true,
              userName: user.display_name,
              profilePicture: user.profile_image_url
            }
            dispatch(updateUser(act));
          })
        }
      


  const user = useSelector(selectUser);
  const robot = useSelector(selectRobotState);

  
  
  

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <span>Play with robots!</span>
      </div>

      <div className={styles.statusContainer}>
        <span>Robot status: {robot.connected ? "Online" : "Offline"}</span>
      </div>

      <div className={styles.statsContainer}>
        <span>{token}</span>
      </div>

      <div className={styles.loginContainer}>
        <button className={user.loggedIn ? styles.loginBtnDis : styles.loginBtn} type="button" onClick={onClick} disabled={user.loggedIn}>
          {user.loggedIn ? "Hi, " + user.userName : "Login to Twitch"} {user.loggedIn ? <img src={user.profilePicture} className={styles.profilePic} /> : ""}
        </button>
      </div>
    </div>
  );
}
