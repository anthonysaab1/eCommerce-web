<template>
  <div class="all-page">
    <input type="text" placeholder="Search" v-model="searchBar" @input="searchValue" />
    <div class="category">
      <h5>category</h5>
      <button class="categoryBtn" @click="updatefilter('')">All</button>
      <button class="categoryBtn" @click="updatefilter('office')">Office</button>
      <button class="categoryBtn" @click="updatefilter('living room')">Living Room</button>
      <button class="categoryBtn" @click="updatefilter('kitchen')">Kitchen</button>
      <button class="categoryBtn" @click="updatefilter('bedroom')">Bed Room</button>
      <button class="categoryBtn" @click="updatefilter('dining')">Dining</button>
      <button class="categoryBtn" @click="updatefilter('kids')">Kids</button>
    </div>
    <div>
      <h5>company</h5>
      <select name="company" class="company" v-model="selectedCompany" @change="onOptionChange">
        <option value="" selected>All</option>
        <option value="marcos">marcos</option>
        <option value="liddy">lidyy</option>
        <option value="ikea">ikea</option>
        <option value="caressa">caressa</option>
      </select>
    </div>
    <div class="color">
      <h5>colors</h5>
      <button @click="updateColor('')">all</button>
      <button @click="updateColor('#ff0000')">red</button>
      <button @click="updateColor('#00ff00')">green</button>
      <button @click="updateColor('#0000ff')">blue</button>
      <button @click="updateColor('#000')">black</button>
      <button @click="updateColor('#ffb900')">yellow</button>
    </div>
    <div>
      <h5>Price</h5>
      <input
        type="range"
        name="price"
        min="0"
        max="309999"
        v-model="rangeOfPrice"
        @change="onChangeValue"
      />
    </div>
    {{ rangeOfPrice / 100 }}$
    <div>
      <label for="freeShiping"> Free Shipping </label>
      <input type="checkbox" id="freeShiping" v-model="isChecked" @input="onCheckboxChange" />
    </div>
    <div>
      <button @click="clearValues()">Clear Filters</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits([
  'onProduct-category',
  'onProduct-color',
  'onCompanySelected',
  'onProductFreeShipping',
  'onRangeOfPrice',
  'clearAllValues',
  'search-value'
])
const searchBar = ref(null)
const selectedCompany = ref('')
const isChecked = ref('')
const rangeOfPrice = ref(309999)
function updatefilter(value) {
  emit('onProduct-category', value)
}
function updateColor(color) {
  emit('onProduct-color', color)
}

function onOptionChange() {
  emit('onCompanySelected', selectedCompany.value)
}
function onCheckboxChange() {
  emit('onProductFreeShipping', isChecked.value)
}
function onChangeValue() {
  emit('onRangeOfPrice', rangeOfPrice.value)
}
function clearValues() {
  if (isChecked.value) {
    isChecked.value = false
  }
  if (selectedCompany.value) {
    selectedCompany.value = 'all'
  }

  if (rangeOfPrice.value) {
    rangeOfPrice.value = '309999'
  }
  emit('clearAllValues')
}
function searchValue() {
  emit('search-value', searchBar.value)
}
</script>
<style scoped>
.category {
  display: flex;
  flex-direction: column;
  width: 100px;
}
.categoryBtn {
  border: none;
  color: #617d98;
  align-self: start;
  cursor: pointer;
  margin-top: 10px;
  background-color: transparent;
}
.all-page {
  margin-left: 70px;
  width: 200px;
}
</style>
