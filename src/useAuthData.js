import {useState} from 'react';

export default function useAuthData() {
    const getAuthData = () => {
        const authDataString = localStorage.getItem('auth-data');
        return JSON.parse(authDataString)
    };

    const [authData, setAuthData] = useState(getAuthData());

    const saveAuthData = authData => {
        if (authData == null) {
            localStorage.clear()
        } else {
            localStorage.setItem('auth-data', JSON.stringify(authData));
        }

        setAuthData(authData);
    };

    return {
        setAuthData: saveAuthData,
        authData
    }
}