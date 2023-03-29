import {createStore} from 'redux'

const initialState = {
    authData: JSON.parse(localStorage.getItem('auth-data'))
}

const changeState = (state = initialState, {type, ...rest}) => {
    switch (type) {
        case 'set':
            if (rest.authData == null) {
                localStorage.clear()
            } else {
                localStorage.setItem('auth-data', JSON.stringify(rest))
            }
            return {...state, ...rest}
        default:
            return state
    }
}

const store = createStore(changeState)
export default store