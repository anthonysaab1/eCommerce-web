import { onMounted, ref } from 'vue'
import axios from 'axios'
let data = ref(null)
const everyProduct = ref(null)
onMounted(() => {
  const apiClient = axios.create({
    baseURL: 'https://www.course-api.com/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  apiClient
    .get('react-store-products')
    .then((response) => {
      data.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  apiClient
    .get('react-store-single-product?id=recoW8ecgjtKx2Sj2')
    .then((response) => {
      everyProduct.value = response.data
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})
