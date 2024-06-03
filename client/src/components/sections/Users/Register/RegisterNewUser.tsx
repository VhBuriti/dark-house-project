import { useState } from "react"

export default function RegisterNewUser() {
    const [ username, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPass, setConfirmPass ] = useState('')

    function createNewUser(){
        if(password === confirmPass) {
            console.log('they match')
        }
    }

    return(
        <div>
            <span>Username:</span>
            <input type="text" onChange={(e) => setUserName(e.target.value)}/>

            <span>Password:</span>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>

            <span>Confirm Password:</span>
            <input type="text" onChange={(e) => setConfirmPass(e.target.value)}/>

            <button onClick={() => createNewUser()}>Create new Account!</button>
        </div>
    )
}