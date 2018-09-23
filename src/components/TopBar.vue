<template>
     <v-toolbar
      app
      clipped-left
      color="cyan lighten-1"
    >
      <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
      <v-toolbar-title>Shop Dee</v-toolbar-title>
      <v-spacer></v-spacer>
  
      <v-menu bottom left offset-y>
          <v-btn icon slot="activator">
            <v-badge overlap small color="red">
              <span slot="badge" small>{{cartItems.length}}</span>
                <v-icon dark>shopping_cart</v-icon>
            </v-badge>
          </v-btn>
          <cart :cart-items="cartItems"></cart>
        </v-menu>
      
    </v-toolbar>
</template>
<script>
import Cart from '@/components/Cart'

export default {
    // props:['isDrawer'],
    components: {
      'cart' : Cart
    },
    props: {
      isDrawer : {
        type: Boolean,
        required: true
      },
      cartItems: {
        type: Array
      }
    },
    data: () => ({
      items: []
    }),
    computed: {
        drawer() {
            return this.isDrawer
        }
    },
    methods: {
      toggle() {
        this.$emit('onToggle')
      }
    }
}
</script>

