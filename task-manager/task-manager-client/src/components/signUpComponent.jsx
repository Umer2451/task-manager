import styles from "../styles/login.module.css"
function SignUpComponent(props){
    return(
        <div className={styles.loginContainer}>
            <label>First Name:</label>
            <input placeholder="Enter First Name"></input>
            <label>Last Name:</label>
            <input placeholder="Enter Last Name"></input>
            <label>Email:</label>
            <input placeholder="Enter Email"></input>
            <label>Date of Birth:</label>
            <input placeholder="Enter Date of Birth"></input>
            <label>User Name:</label>
            <input placeholder="Enter User Name"></input>
            <button>Sign Up</button>
            <label> Old User? <span style={{ color: "red"}}>Login</span></label>
        </div>
    )
}
export default SignUpComponent;