<template>
  <div class="container">
    <div>
      <img
        :src="product.image"
        :alt="product.name"
        id="pictures"
        @click="dataBinding(product.id)"
      />
    </div>

    <div class="product-Desc">
      <h4 class="title">{{ product.name }}</h4>
      <span class="price">{{ product.price / 100 }}$</span>
      <span class="desc">{{ product.description }}</span>
      <RouterLink :to="{ name: 'every-product' }">
        <button class="detailsBtn" @click="dataBinding(product.id)">DETAILS</button></RouterLink
      >
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
#pictures {
  width: 300px;
  height: 200px;
  padding-right: 10px;
}
.product-Desc {
  display: flex;
  flex-direction: column;
}
.desc {
  max-width: 800px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #324d67;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
}
.price {
  color: #ab7a5f;
}
.detailsBtn {
  background-color: #ab7a5f;
  border: none;
  color: white;
  padding: 6px;
  border-radius: 4px;
}
</style>
