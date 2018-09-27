import productService from '@/api/productService'
import productCategoryService from '@/api/productCategoryService'

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