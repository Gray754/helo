import axios from 'axios'

const initialState = {
    user:{}
}

const USER = 'USER'
const LOGOUT = 'LOGOUT'

export const getUser=()=>{
    return{
        type: USER,
        payload: axios.get('/api/user')
    }
}

export const logout=()=>{
    return{
        type: LOGOUT,
        payload: axios.get('/api/logout')
    }
}


export default function reducer(state=initialState, action){
    switch(action.type){
        case `${USER}_FULFILLED`:
        return{
            ...state,
            user: action.payload.data
        }
        case `${LOGOUT}_FULFILLED`:
        return{
            ...state,
            user: action.payload.data,
            login: true
        }
        default:
        return state;
    }
}