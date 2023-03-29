import React from 'react'
import "../scss/style.scss"
import {useDispatch} from "react-redux";

const AppHeader = () => {

    const dispatch = useDispatch()
    const handleLogout = async e => {
        e.preventDefault();
        dispatch({type: 'set', authData : null})
    }
    return (
        <div className="app-header" style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <div>
                <p>HEADER</p>
            </div>
            <div>
                <button style={{
                    marginLeft: "16px"
                }} onClick={handleLogout}>Logout
                </button>
            </div>
        </div>
    )
}

export default AppHeader
