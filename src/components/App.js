

import './../styles/App.css';
import React, {useState} from "react";


const Parent = ()=>{
    let [isLoggedIn, setisLoggedIn] = useState(false);

    function changeStatus(){
        setisLoggedIn(true);
    }

    return(
        <div>
            <h1>Parent Component</h1>
            {
                isLoggedIn?(<p>You are logged in!</p>):(<Child setStatus={changeStatus}></Child>)
            }
        </div>
    )
}
const Child = ({setStatus})=>{
    
    return(
        <form>
            <label>Username:</label>
            <input type="text" ></input>
            <br></br>
            <br></br>
            <label>Password:</label>
            <input type="password" ></input>
            <br></br>
            <br></br>
            <button onClick={()=>{setStatus()}}>Login</button>
        </form>
    )
}

const App = () => {
  return (
    <div>
        <Parent/>
    </div>
  )
}

export default App
