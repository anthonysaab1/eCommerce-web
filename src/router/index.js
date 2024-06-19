import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EveryProduct from '@/components/EveryProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',

      component: () => import('@/views/ProductsToBuy.vue')
    },
    {
      path: '/product',
      name: 'every-product',
      component: EveryProduct
    },
    {
      path: '/cart',
      name: 'cart',

      component: () => import('@/views/cartShopping.vue')
    }
  ]
})

export default router
