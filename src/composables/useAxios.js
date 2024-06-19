import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.course-api.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  get(url) {
    return apiClient.get(url)
  }
}
