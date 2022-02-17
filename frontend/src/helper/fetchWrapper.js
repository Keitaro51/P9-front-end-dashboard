import axios from 'axios'

/**
 * fetch api for get endpoints
 *
 * @param   {string}  url  api route full url
 *
 * @return  {promise}       return fulfilled promise or loged error
 */
const get = (url) => {
    return axios.get(url)
        .then(handleResponse)
        .catch(error => console.log(error))
}

/**
 * fetched full data
 *
 * @param   {object}  response  fulfilled promise data
 *
 * @return  {object}            return ready to use data
 */
const handleResponse = (response) => {
    return response.data.data
}

export { get }