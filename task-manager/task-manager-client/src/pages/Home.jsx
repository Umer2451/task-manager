import { useSelector } from "react-redux"

function Home(){
    let token = useSelector((state) => state.app.token);
    return <h1> Hello {token} </h1>
}
export default Home;