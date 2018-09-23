

import cartService from '@/api/cartService'

const type = {
    requestCartItems: 'CART_REQUEST_CARTITEMS'
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