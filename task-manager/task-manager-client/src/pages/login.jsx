import styles from "../styles/login.module.css"
import LoginComponent from "../components/loginComponent";
import { useState } from "react";
import useAPI from "../hooks/fetchHook";
import { useSelector } from "react-redux";
function Login(){
    let token = useSelector((state) => state.app);
    const { data, error } = useAPI('http://localhost:8000/api/data', token);
    return(
        <div> 
            <div className= {styles.loginDiv}>
            <LoginComponent/>
            </div>
        </div>
    )
}
export default Login;