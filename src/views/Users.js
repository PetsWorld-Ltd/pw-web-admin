import React from 'react'


const Users = () => {

    let users = [
        {
            "id": 1,
            "name": "User 1"
        },
        {
            "id": 2,
            "name": "User 2"
        },
        {
            "id": 2,
            "name": "User 2"
        },
        {
            "id": 2,
            "name": "User 2"
        },
        {
            "id": 2,
            "name": "User 2"
        },
        {
            "id": 2,
            "name": "User 2"
        },
    ]
    const listUsers = users.map((user) =>
        <li><h1>{user.name}</h1></li>
    );
    return (
        <div>
            <h3>Users</h3>
            <ul>{listUsers}</ul>
        </div>
    )
}

export default Users

