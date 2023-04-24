import axios from 'axios'

const BASE_URI = 'https://api.thecatapi.com/v1'

const axiosInstance = axios.create({
  baseURL: BASE_URI,
})

axiosInstance.defaults.headers.common['accept'] = 'application/json'
axiosInstance.defaults.headers.common['content-type'] = 'application/json'

axiosInstance.defaults.headers.common[
  'Authorization'
] = `x-api-key ${process.env.CATS_API_KEY}`

export default axiosInstance
