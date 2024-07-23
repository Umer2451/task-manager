import styles from "../styles/login.module.css"
import LoginComponent from "../components/loginComponent";
import { useState } from "react";
function Login(){
    return(
        <div> 
            <div className= {styles.loginDiv}>
            <LoginComponent/>
            </div>
        </div>
    )
}
export default Login;