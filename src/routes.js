import React from 'react'

const Users = React.lazy(() => import('./views/Users'))
const Dashboard = React.lazy(() => import('./views/Dashboard'))


const routes = [
    {path: '/', exact: true, name: 'Home', element: Dashboard},
    {path: '/users', name: 'Users', element: Users},
    {path: '/news', name: 'News', element: Users}
]

export default routes
