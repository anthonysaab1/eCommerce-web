<template>
  <div id="Product-section">
    <RouterLink :to="{ name: 'home' }"> <h3>Home</h3></RouterLink>
    /
    <h3>Products</h3>
  </div>
  <div class="productPage">
    <div>
      <filterProduct
        @onProduct-category="categoryValue"
        @onProduct-color="productColor"
        @onCompanySelected="productCompany"
        @onProductFreeShipping="productFreeShipping"
        @onRangeOfPrice="productRangePrice"
        @clearAllValues="onClearAllValues"
        @search-value="onSearch"
      />
    </div>

    <div>
      <div class="headerOfGrids">
        <span class="length">{{ lengthOflist }}</span>
        <sortingCategory @sortSelected="sortByValue" @listSelected="sortList"></sortingCategory>
      </div>
      <div id="products-card">
        <product
          v-if="sortListValue == 'grid'"
          v-for="product in ListofProduct"
          :key="product.id"
          :product="product"
          id="template"
        />
        <product-card-list
          v-else
          v-for="product in ListofProduct"
          :key="product.id"
          :product="product"
          class="cardList"
        ></product-card-list>
      </div>
      <div class="showCardList"></div>
    </div>
  </div>
</template>
<script setup>
import product from '@/components/ProductCardGrid.vue'
import filterProduct from '@/components/FilterProduct.vue'
import { usefilter } from '@/composables/useFIlterCategory'
import sortingCategory from '@/components/sortingCategory.vue'
import ProductCardList from '@/components/ProductCardList.vue'
import { ref, watchEffect } from 'vue'

const {
  productRef,
  newListOfProduct,
  SortOfList,
  search,
  // productList,
  productSorting,
  clearAllValuesSelected,
  filterAll
} = usefilter()
const ListofProduct = ref([])
const lengthOflist = ref([])
const sortListValue = ref('grid')

watchEffect(() => {
  ListofProduct.value = newListOfProduct.value
  lengthOflist.value = newListOfProduct.value.length
})
function categoryValue(value) {
  productRef.value.category = value
  productSorting()
  filterAll()
}

function productColor(colorSelect) {
  productRef.value.color = colorSelect
  productSorting()
  filterAll()
}
function productCompany(companySelected) {
  productRef.value.company = companySelected
  productSorting()
  filterAll()
}
function productFreeShipping(checked) {
  productRef.value.shipping = checked
  productSorting()
  filterAll()
}
function productRangePrice(range) {
  productRef.value.rangeOfPrice = range
  productSorting()
  filterAll()
}
function onClearAllValues() {
  clearAllValuesSelected()
  filterAll()
}
function onSearch(searchValue) {
  search.value = searchValue
}
function sortByValue(category) {
  SortOfList.value = category
  productSorting()
  console.log(category)
}

function sortList(value) {
  sortListValue.value = value
  console.log(sortListValue.value)
}
</script>
<style scoped>
#Product-section {
  height: 20vh;
  background-color: #eaded7;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #453227;
  font-size: 2rem;
}
#template {
  display: flex;
  flex-direction: column;
}
#products-card {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-left: 200px;
}
.productPage {
  display: flex;
  flex-direction: row;
}
.headerOfGrids {
  padding-left: 100px;
}
.showCardList {
  display: flex;
  padding-left: 100px;
  flex-direction: column;
  gap: 50px;
}
</style>
