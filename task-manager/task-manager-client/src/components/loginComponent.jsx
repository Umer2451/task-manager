import styles from "../styles/login.module.css"
function LoginComponent(props){
    return(
        <div className={styles.loginContainer}>
            <label>Username:</label>
            <input placeholder="Enter Username"></input>
            <label>Password:</label>
            <input placeholder="Enter Password"></input>
            <button>Login</button>
            <label> New to the app? <span style={{ color: "red"}}>Sign Up</span></label>
        </div>
    )
}
export default LoginComponent;