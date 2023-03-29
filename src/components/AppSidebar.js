import React from 'react'
import '../scss/style.scss'

const AppSidebar = () => {
    return (
        <div className="app-side-menu">
            <div id="logo">
                <a href="/">
                    <h2>Pets World</h2>
                </a>
            </div>
            <ul>
                <a href="/users">Users</a>
                <a href="/news">News</a>
            </ul>
        </div>

    )
}

export default React.memo(AppSidebar)