<template>
  <RouterLink :to="{ name: 'every-product' }">
    <div class="container">
      <img
        :src="product.image"
        :alt="product.name"
        id="pictures"
        @click="dataBinding(product.id)"
      />
      <div class="middle">
        <div class="text">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="search">
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
      </div>
      <div class="product-Desc">
        <span>{{ product.name }}</span> <span class="price">{{ product.price / 100 }}$</span>
      </div>
    </div>
  </RouterLink>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  product: {
    type: Object,
    required: true
  }
})
function dataBinding(id) {
  console.log(id)
}
</script>

<style scoped>
#pictures {
  width: 300px;
  height: 175px;
}
#Product-section {
  width: 100%;
  height: 20vh;
  background-color: #eaded7;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #453227;
}
.product-Desc {
  display: flex;
  justify-content: space-between;
}
#pictures:hover {
  transition: 0.5s ease;
  opacity: 0.6;

  cursor: pointer;
}

.middle {
  /*transition: 0.5s ease;*/
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.search {
  width: 50px;
}
.price {
  color: #ab7a5f;
}
</style>
