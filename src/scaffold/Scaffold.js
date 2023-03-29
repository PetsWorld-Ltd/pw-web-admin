import React from 'react'
//import {AppContent, AppSidebar, AppFooter, AppHeader} from '../components/index'
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import AppSidebar from "../components/AppSidebar";
import AppFooter from "../components/AppFooter";
import '../scss/style.scss'

const Scaffold = () => {
    return (
        <div className="scaffold">
            <AppSidebar/>
            <div className="main-content-container">
                <AppHeader/>
                    <AppContent/>


                    <AppFooter/>
                
            </div>
        </div>
    )
}

export default Scaffold
