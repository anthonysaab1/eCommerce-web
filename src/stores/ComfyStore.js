import { defineStore } from 'pinia'

export const storeList = defineStore('storeList', {
  state: () => ({
    shopingList: []
  }),
  actions: () => ({
    addItem(item, color, quantity, priceTotal) {
      this.shopingList.push({ item, color, quantity, priceTotal })
    },
    deleteItem(itemId) {
      this.shopingList = this.shopingList.filter((object) => {
        return object.id != itemId
      })
    }
  })
})
