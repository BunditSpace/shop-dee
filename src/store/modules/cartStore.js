
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
    },
    totalPrice() {
        let sum = 0
        for (let i = 0; i < state.cartItems.length; i++) {
            const item = state.cartItems[i];
            for (let j = 0; j < item.items.length; j++) {
                const prod = item.items[j]; 
                sum += prod.price * prod.amount
            }
            
        }
        return sum
    }
}

const actions = {
    async requestCartItems({state, commit}) {
        let items = await cartService.getAll()
        commit(type.requestCartItems, items)
    },

    async requestRemoveItem({state, commit, dispatch}, item) {
        
        await cartService.removeItemCart(item)

        await productService.updateProductAmount(item.name, item.amount, 'INCREASE')

        let items = await cartService.getAll()
        commit(type.requestCartItems, items)
    },

    async requestCheckoutCart({state, commit}) {

        // TODO : Remove item in cart
      //  await state.cartItems.forEach(cart => {
       //     cart.items.forEach(item =>
        //        {
          //       cartService.removeItemCart(item)
         //       })
               //cartService.checkOutItems(cart)
      //  });
      await cartService.checkOutItems()
        // Update state
       // commit(type.requestCartItems, [])
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