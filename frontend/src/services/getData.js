import { URL_GETUSER, DATA_SRC } from '../config'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/data' 

import MainData from '../models/MainData'

import axios from 'axios'

const getUser = (id) => {
    if(DATA_SRC === 'API'){
        return axios.get(`${URL_GETUSER}/${id}`).then((res)=> res.data.data).catch(error => console.log(error))
    }
    return console.log(USER_MAIN_DATA)
}

const getActivity = (id) => {
    if(DATA_SRC === 'API'){
        return axios.get(`${URL_GETUSER}/${id}/activity`).then((res)=> res.data.data).catch(error => console.log(error))
    }
    return console.log(USER_ACTIVITY)
}

const getAverageSession = (id) => {
    if(DATA_SRC === 'API'){
        return axios.get(`${URL_GETUSER}/${id}/average-sessions`).then((res)=> res.data).catch(error => console.log(error))
    }
    return console.log(USER_AVERAGE_SESSIONS)
}

const getPerformance = (id) => {
    if(DATA_SRC === 'API'){      
        return axios.get(`${URL_GETUSER}/${id}/performance`).then((res)=> res.data.data).catch(error => console.log(error))
    }
    return console.log(USER_PERFORMANCE)
}

export {
    getUser,
    getActivity,
    getAverageSession,
    getPerformance,
}