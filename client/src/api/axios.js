import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-admin-14045.herokuapp.com'
})

export default instance
