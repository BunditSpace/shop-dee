

import cartService from '@/api/cartService'
import productService from '@/api/productService'

const type = {
    requestCartItems: 'CART_REQUEST_CARTITEMS',
    requestRemoveItem: 'CART_REQUEST_REMOVE_ITEM',
    requestCheckoutCart: 'CART_REQUEST_CHECKOUT_CART'
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
    },

    async requestCheckoutCart({state, commit}) {
        console.log('Paid')
        // TODO : Remove item in cart
        state.cartItems.forEach(item => {
            // await productService.deleteProduct(item)
            cartService.removeItemCart(item)
        });
        // Update state
        commit(type.requestCartItems, [])
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