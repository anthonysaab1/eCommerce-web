<template>
  <div class="featurePage">
    <div class="title">Featured Products</div>

    <div class="featured-product">
      <ProductCardGrid
        v-for="product in NewListOfProduct"
        :key="product.id"
        :product="product"
        class="productTemp"
      />
    </div>
    <RouterLink :to="{ name: 'products' }">
      <button class="featuredBtn">ALL PRODUCTS</button>
    </RouterLink>
  </div>
</template>
<script setup>
import { inject, computed } from 'vue'
import ProductCardGrid from './ProductCardGrid.vue'
const ListOfProducts = inject('ListOfProducts')
const NewListOfProduct = computed(() => {
  if (ListOfProducts.value) {
    const filteredProducts = ListOfProducts.value.filter((product) => product.featured)

    return filteredProducts
  }
  return []
})
</script>
<style scoped>
.featurePage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.featured-product {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin: 60px;
}
.featuredBtn {
  padding: 0.75rem 1.5rem;
  border-radius: 7px;
  border: none;
  background-color: #ab7a5f;
  color: white;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  margin-bottom: 20px;
}
.productTemp:nth-of-type(n + 4) {
  display: none;
}
.title {
  margin-top: 30px;
  font-size: 2.5rem;
  font-weight: bold;
}
</style>
