<template>
  <v-layout row style="min-width: 500px;">
    <v-flex xs12>
      <v-card>
        <v-toolbar  dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Shopping Cart</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="success" :disabled="cartItems.length === 0" @click="checkout">Check out</v-btn>
        </v-toolbar>
        <v-list two-line>
          <template >
            <div v-for="(item, index) in cartItems" :key="index">
            <v-list-tile v-for="(product, i) in item.items" :key="i" avatar ripple>
              <v-list-tile-avatar>
                  <img :src="product.pic">
                </v-list-tile-avatar>
              <v-list-tile-content >
                <v-list-tile-title>{{ item.category }}</v-list-tile-title>
                
                <v-list-tile-sub-title class="text--primary">{{ product.name }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Amount :{{product.amount}} Price : {{product.price}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>action</v-list-tile-action-text>
                <v-icon color="grey lighten-1" @click="removeCartItem(product)">cancel</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < cartItems.length" :key="`divider-${index}`"></v-divider>
            </div>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    cartItems: {
      type: Array
    },
    checkoutCart:{
      type: Function
    },
    removeCartItem: {
      type:Function
    }
  },
  data: () => ({
    
  }),
  methods: {
    checkout() {
      this.$router.push('checkout')
    }
  },
  name: "cart"
};
</script>
