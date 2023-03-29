import React, {Suspense} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import '../scss/style.scss'


// routes config
import routes from '../routes'

const AppContent = () => {
    return (
        <div className="app-content">
                <Suspense>
                    <Routes>
                        {routes.map((route, idx) => {
                            return (
                                route.element && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        element={<route.element/>}
                                    />
                                )
                            )
                        })}
                        <Route path="/" element={<Navigate to="/" replace/>}/>
                    </Routes>
                </Suspense>
        </div>
    )
}

export default React.memo(AppContent)
