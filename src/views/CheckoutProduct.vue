<template>
     <v-container fluid>
      <v-layout column align-center>
        <v-card flat color="transparent" tile text-xs-center>
          <v-card-title >
          <span class="text-xs-center title">Checkout Product </span>
          </v-card-title>
          </v-card>
       
      </v-layout>
      <v-layout row mt-2> 
        <v-flex xs12 text-xs-center>
          <v-card tile pa-2> 
            <div class="pa-2 text-xs-left mx-2">
                <v-icon ml-2>list</v-icon>
              <span class="title">Product List</span>
              
            </div>            
          </v-card>
        </v-flex>
      </v-layout>
       <v-layout row mt-2> 
        <v-flex xs12 text-xs-left>
          <v-card tile pa-2 v-for="(item, key) in cartItems" :key="key"> 
            
            <div class="pa-2">
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card color="light-blue lighten-1" tile>
                        <span>{{item.category}}</span>
                    </v-card>
                    </v-flex>
                </v-layout>
            </div>
                
            <div v-for="(product, i) in item.items" :key="i" class="ml-2 mr-2">
               <checkout-prod :product="product"></checkout-prod>
            </div>
          </v-card>
          

        </v-flex>
       
      </v-layout>
      <v-layout row wrap class="text-xs-center">
           <v-flex xs12>
            <v-card>
                <v-btn color="success" @click="pay">Pay ({{totalPrice}} Baht)</v-btn>
            </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import cartService from '@/api/cartService'
import CheckoutItem from '@/components/CheckoutProduct/CheckoutProductItem'
import { mapGetters } from 'vuex'


// TODO : change to use store instead

export default {
    components: {
        'checkout-prod' : CheckoutItem
    },
    data: () => ({
    }),
    created() {
         this.getAllCart();

    },
    computed: {
        ...mapGetters({
            cartItems: 'cartStore/cartItems',
            totalPrice:'cartStore/totalPrice',
            }),
    
    },
    methods: {
        pay() {
            this.$store.dispatch('cartStore/requestCheckoutCart')
            this.$router.push('/')


        },
        getAllCart()
        {
            this.$store.dispatch('cartStore/requestCartItems')
        }

    }
}
</script>
