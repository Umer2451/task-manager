import styles from "../styles/login.module.css";
import React, { useState } from "react";
import useAPI from "../hooks/fetchHook";
function LoginComponent(props){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")
    function SetmyUserName(event){
        let value = event.target.value;
        setUserName(value)
    }
    function SetUserPassword(event){
        let value = event.target.value;
        setPassword(value)
    }
    function loginApp(){
        fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userName: userName,
              password: password
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Token received:', data.token);
            localStorage.setItem('token', data.token); // Save the token for future requests
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    }
    return(
        <div className={styles.loginContainer}>
            <label>Username:</label>
            <input placeholder="Enter Username" onChange={SetmyUserName} value={userName}></input>
            <label>Password:</label>
            <input placeholder="Enter Password" onChange={SetUserPassword} value={password}></input>
            <button onClick={loginApp}>Login</button>
            <label> New to the app? <span style={{ color: "red"}}>Sign Up</span></label>
        </div>
    )
}
export default LoginComponent;