import productService from '@/api/productService'
import productCategoryService from '@/api/productCategoryService'
import cartService from '@/api/cartService';

const type = {
    requestProductItems: 'PRODUCT_REQUEST_PRODUCT'
}

const state = {
    products:[]
}

const getters = {
    products(state) {
        return state.products
    }
}

const actions = {
    async requestProductItems({state, commit}) {
        let items = await productService.getAll()
        commit(type.requestProductItems, items)
    },
    async addProductItems({state, commit}, product) {
        await productService.addProduct(product)
    },
    async deleteProductItems({state, commit}, index) {
        await productService.deleteProduct(index)
    },
    async updateProductAmount({  }, product) {
        await Promise.all([productService.updateProductAmount(product.name, product.amount, product.type), cartService.addCart(product)])
    } 
}

const mutations = {
    [type.requestProductItems](state, items) {
        state.products = items
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}