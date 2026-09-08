import {useState} from 'react'

export const Login = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [message, setmessage] = useState("")

    const handleLogin = () => {
        setisLoggedIn(!isLoggedIn);
    }

    const handleMessage = (e) => {
        setmessage(e.target.value);
    }

    return <>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        <div>
            <input type="text" placeholder="Enter Something here" value={message} onChange={handleMessage}/>
        </div>
        <h3>{message}</h3>
    </>
}