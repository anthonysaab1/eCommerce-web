import { ref, inject, computed } from 'vue'

export function usefilter() {
  const ListOfProducts = inject('ListOfProducts')
  const newListOfProduct = ref([])
  const search = ref('')
  const SortOfList = ref('')
  const productRef = ref({
    category: '',
    company: '',
    color: '',
    shipping: true,
    rangeOfPrice: 309999
  })

  newListOfProduct.value = ListOfProducts.value
  function sortLowest() {
    if (SortOfList.value == '') {
      newListOfProduct.value.sort((a, b) => a.price - b.price)

      return
    }
    return
  }

  const productList = ref('')
  productList.value = computed(() => {
    return ListOfProducts.value.filter((item) => item.name.toLowerCase().includes(search.value))
  })
  function userPriceSelect() {
    newListOfProduct.value = ListOfProducts.value
    newListOfProduct.value = newListOfProduct.value.filter(
      (product) => product.price <= productRef.value.rangeOfPrice
    )
  }
  function productCompanySelected() {
    if (productRef.value.company != '') {
      newListOfProduct.value = newListOfProduct.value.filter(
        (product) => product.company == productRef.value.company
      )
    }
  }
  function categorySelect() {
    if (productRef.value.category != '') {
      newListOfProduct.value = newListOfProduct.value.filter(
        (product) => product.category == productRef.value.category
      )
    }
  }
  function productColorSelected() {
    if (productRef.value.color != '') {
      newListOfProduct.value = newListOfProduct.value.filter((product) =>
        product.colors.includes(productRef.value.color)
      )
    }
  }
  function isFreeShipping() {
    if (!productRef.value.shipping) {
      newListOfProduct.value = newListOfProduct.value.filter((product) => product.shipping)
    }
  }
  function filterAll() {
    userPriceSelect()
    productCompanySelected()
    categorySelect()
    productColorSelected()
    isFreeShipping()
  }
  function clearAllValuesSelected() {
    productRef.value.color = ''
    productRef.value.company = ''
    productRef.value.category = ''
    productRef.value.shipping = true
    productRef.value.rangeOfPrice = 309999
  }

  function sortHighest() {
    if (SortOfList.value == 'highestPrice') {
      newListOfProduct.value.sort((a, b) => b.price - a.price)
      return
    }
    return
  }
  function sortingAtoZ() {
    if (SortOfList.value === 'fromAtoZ') {
      newListOfProduct.value.sort((a, b) => a.name.localeCompare(b.name))
      return
    }
    return
  }
  function sortingZtoA() {
    if (SortOfList.value === 'fromZtoA') {
      newListOfProduct.value.sort((a, b) => b.name.localeCompare(a.name))
      return
    }
    return
  }
  function productSorting() {
    console.log(SortOfList.value)
    sortHighest()
    sortingAtoZ()
    sortingZtoA()
    sortLowest()
  }

  return {
    productRef,
    newListOfProduct,
    search,
    productList,
    sortLowest,
    productSorting,
    SortOfList,
    filterAll,
    clearAllValuesSelected
  }
}
//
