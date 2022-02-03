import { URL_GETUSER } from '../config'
import axios from 'axios'
//TODO async utile?
const getUser = async (id) => {
    return axios.get(`${URL_GETUSER}/${id}`).then((res)=> res.data).catch(error => console.log(error))
}

const getActivity = async (id) => {
    return axios.get(`${URL_GETUSER}/${id}/activity`).then((res)=> res.data).catch(error => console.log(error))
}

const getAverageSession = async (id) => {
    return axios.get(`${URL_GETUSER}/${id}/average-sessions`).then((res)=> res.data).catch(error => console.log(error))
}

const getPerformance = async (id) => {
    return axios.get(`${URL_GETUSER}/${id}/performance`).then((res)=> res.data).catch(error => console.log(error))
}

export {
    getUser,
    getActivity,
    getAverageSession,
    getPerformance,
}