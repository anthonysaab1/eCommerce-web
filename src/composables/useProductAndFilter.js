import { ref } from 'vue'
import useAxios from './useAxios'
export function useFetchForEveryProduct() {
  const ListOfEveryProducts = ref(null)
  useAxios
    .get('react-store-single-product?id=recoW8ecgjtKx2Sj2')
    .then((response) => {
      ListOfEveryProducts.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  return { ListOfEveryProducts }
}
