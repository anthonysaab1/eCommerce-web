<template>
  <div id="emptyCart">
    <h2 class="title">Your cart is empty</h2>
    <router-link :to="{ name: 'products' }"> <button>Fill IT</button></router-link>
  </div>
</template>
<script setup></script>
<style scoped>
.title {
  font-size: 2.5rem;
  font-weight: bold;
}
#emptyCart {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
