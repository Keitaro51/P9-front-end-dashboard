import { USER_TEST_ID as id, URL_GETUSER, DATA_SRC } from '../config'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mock/data' 

import { get } from '../helper/fetchWrapper'

/**
 * get user main data from api or mock data
 *
 * @return  {(object)}  mock or API data
 */
const getUser = () => {
    if(DATA_SRC === 'API'){
        return get(`${URL_GETUSER}/${id}`)
    }
    return findById(USER_MAIN_DATA,'id')
}

/**
 * get user activity data from api or mock data
 *
 * @return  {object}  mock or API data
 */
const getActivity = () => {
    if(DATA_SRC === 'API'){
        return get(`${URL_GETUSER}/${id}/activity`)
    }
    return findById(USER_ACTIVITY,'userId')
}

/**
 * get user average sessions data from api or mock data
 *
 * @return  {object}  mock or API data
 */
const getAverageSession = () => {
    if(DATA_SRC === 'API'){
        return get(`${URL_GETUSER}/${id}/average-sessions`)
    }
    return findById(USER_AVERAGE_SESSIONS,'userId')
}

/**
 * get user performance data from api or mock data
 *
 * @return  {object}  mock or API data
 */
const getPerformance = () => {
    if(DATA_SRC === 'API'){      
        return get(`${URL_GETUSER}/${id}/performance`) 
    }
    return findById(USER_PERFORMANCE,'userId')
}

/**
 * find mock data by user id
 *
 * @param   {Array.<Object>}  source  [mock data source ]
 * @param   {string}  key     [key value for user id]
 * @example
 * findById(USER_PERFORMANCE,'userId')
 * @return  {object}          mock data for single user
 */
const findById = (source, key) => {
    return source.find((data) => data[key] === id)
}

export {
    getUser,
    getActivity,
    getAverageSession,
    getPerformance,
}