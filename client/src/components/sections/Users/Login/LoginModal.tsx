import { useState } from "react"

export default function LoginModal() {

    const [ username, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    function loginUser(){

    }
    return(
        <div>
            <span>Username:</span>
            <input type="text" onChange={(e) => setUserName(e.target.value)}/>

            <span>Password:</span>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => loginUser()}>Login!</button>
        </div>
    )
}