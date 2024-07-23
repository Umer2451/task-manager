import styles from "../styles/login.module.css"
import LoginComponent from "../components/loginComponent";
import { useState } from "react";
import SignUpComponent from "../components/signupComponent";
function Login(){
    const [loginState, setLoginPageState] = useState(true);
    if(loginState === true){
        return(
            <div> 
                <div className= {styles.loginDiv}>
                <LoginComponent/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div> 
                <div className= {styles.loginDiv}>
                <SignUpComponent/>
                </div>
            </div>
        )
    }

}
export default Login;