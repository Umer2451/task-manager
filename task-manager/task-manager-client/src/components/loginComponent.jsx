import styles from "../styles/login.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../features/appSlice";
import { useNavigate } from "react-router-dom";
function LoginComponent(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function loginApp() {
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
      dispatch(setToken(data.token));
      navigate("/taskpage")
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }

  return (
    <div className={styles.loginContainer}>
      <label>Username:</label>
      <input
        placeholder="Enter Username"
        onChange={handleUserNameChange}
        value={userName}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={handlePasswordChange}
        value={password}
      />
      <button onClick={loginApp}>Login</button>
      <label>
        New to the app? <span style={{ color: "red" }}>Sign Up</span>
      </label>
    </div>
  );
}

export default LoginComponent;
