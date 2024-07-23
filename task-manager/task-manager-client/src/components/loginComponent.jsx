import styles from "../styles/login.module.css"
function LoginComponent(){
    return(
        <div className={styles.loginContainer}>
            <label>Username:</label>
            <input placeholder="Enter Username"></input>
            <label>Password:</label>
            <input placeholder="Enter Password"></input>
            <button>Login</button>
        </div>
    )
}
export default LoginComponent;