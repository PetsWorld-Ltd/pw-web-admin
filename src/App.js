import React, {Component, Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './scss/style.scss'
import Scaffold from "./scaffold/Scaffold";
import Login from "./pages/Login";
import {useSelector} from "react-redux";

const App = () => {
    const authData = useSelector(x => x.authData);
    if (authData == null) {
        return (
            <Login />
        )
    }
    return (
        <BrowserRouter>
            <Scaffold/>
        </BrowserRouter>
    )
}
//class App extends Component {
//
//    render() {
//
//        return (
//            <BrowserRouter>
//                <Scaffold/>
//            </BrowserRouter>
//        )
//    }
//}

export default App

//
//<!--          <Route exact path="/login" name="Login Page" element={<Login />} />-->
//<!--          <Route exact path="/register" name="Register Page" element={<Register />} />-->
//<!--          <Route exact path="/404" name="Page 404" element={<Page404 />} />-->
//<!--          <Route exact path="/500" name="Page 500" element={<Page500 />} />-->