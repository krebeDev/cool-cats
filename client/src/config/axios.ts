import axios from 'axios'
import { BASE_API_URL } from '../constants'

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
})

axiosInstance.defaults.headers.common['accept'] = 'application/json'
axiosInstance.defaults.headers.common['content-type'] = 'application/json'

export default axiosInstance
