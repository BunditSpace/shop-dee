import Vue from 'vue'
import Vuex from 'vuex'

import cartStore from '@/store/modules/cartStore'
import productStore from '@/store/modules/productStore'
import productCategoryStore from '@/store/modules/productCategoryStore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    cartStore,
    productStore,
    productCategoryStore
  }
})
