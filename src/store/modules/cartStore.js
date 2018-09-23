

import cartService from '@/api/cartService'
import productService from '@/api/productService'

const type = {
    requestCartItems: 'CART_REQUEST_CARTITEMS',
    requestRemoveItem: 'CART_REQUEST_REMOVE_ITEM'
}

const state = {
    cartItems: [
        
    ]
}

const getters = {
    cartItems(state, getters) {
        //console.log(state.cartItems)
        return state.cartItems
    }
}

const actions = {
    async requestCartItems({state, commit}) {
        let items = await cartService.getAll()
        console.log(items)
        commit(type.requestCartItems, items)
    },

    async requestRemoveItem({state, commit, dispatch}, item) {
        
        await cartService.removeItemCart(item)

        await productService.updateProductAmount(item.name, item.amount, 'INCREASE')

        let items = await cartService.getAll()
        commit(type.requestCartItems, items)
    }
}

const mutations = {
    [type.requestCartItems](state, items) {
        state.cartItems = items
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}