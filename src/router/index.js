import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductCategory from '@/views/ProductCategory'
import CheckoutProduct from '@/views/CheckoutProduct'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/productcategory',
      name: 'productcategory',
      component: ProductCategory
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutProduct
    }
  
  ]
})
