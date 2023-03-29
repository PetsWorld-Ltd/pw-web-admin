import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const Login = () => {

    const dispatch = useDispatch()
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        if (username == 'admin' && password == 'admin') {
            dispatch({type: 'set', authData : {
                accessToken : "accessToken",
                refreshToken: "refreshToken"
            }})
        } else {
            alert("Неверно")
        }
    }


    return (
        <div style={{height: "100%", display: "flex"}}>
            <form style={{margin: "auto"}} onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}


export default Login
