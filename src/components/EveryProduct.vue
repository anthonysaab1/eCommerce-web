<template>
  <RouterLink :to="{ name: 'products' }"><button>Back To Products</button></RouterLink>
  {{ product.name }}
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useFetchForEveryProduct } from '@/composables/useProductAndFilter'
const product = ref('')
onMounted(() => {
  const { ListOfEveryProducts } = useFetchForEveryProduct()
  ListOfEveryProducts.value = product.value
  console.log(product.value)
})
</script>

<style scoped></style>
