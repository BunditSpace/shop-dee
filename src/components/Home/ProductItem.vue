<template>
    <div>      
        <v-card color="cyan lighten-5" class="black--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="product.pic ? product.pic: 'https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png'"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title>
                    <div >
                      <div class="headline">{{product.name}}</div>
                      <div>{{product.category}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <span>Total {{totalPrice}} Baht</span>
                <v-spacer></v-spacer>
                <span>We have {{amount}} pieces</span>
                <v-btn icon :disabled="isMinimum" @click="decreaseAmount">
                    <v-icon>remove</v-icon>
                </v-btn>
                <span>{{selectAmount}}</span>
                <v-btn icon :disabled="isMaximum" @click="increaseAmount">
                    <v-icon>add</v-icon>
                </v-btn>
                <v-btn  color="blue darken-4" sm dark @click="addToCart">Add To Cart</v-btn>
              </v-card-actions>
            </v-card>
    </div>
</template>

<script>


export default {
    props: ['product'],
    data: () => ({
      selectAmount:0
    }),
    methods: {
      addToCart() {
        // TODO : Push product to cart.
        //let cartItem = Object.assign({}, this.product)
        // Update product amount
        //this.updateProductAmount(cartItem.name, this.selectAmount, 'DECREASE')
        if(this.selectAmount > 0) {
          let product = {name: this.product.name, amount: this.selectAmount, type: 'DECREASE', category: this.product.category, pic: this.product.pic, price: this.product.price}
          this.$store.dispatch('productStore/updateProductAmount', product)
          this.$store.dispatch('cartStore/requestCartItems')
          this.selectAmount = 0
        }else
          alert("Please select amount more than 0")
      
      },
      increaseAmount() {
        this.selectAmount++
      },
      decreaseAmount() {
        this.selectAmount--
      }
    },
    computed: {
      amount(){
        return this.product.amount
      },
      isMaximum() {
        return this.selectAmount >= this.product.amount || this.product.amount == 0
      },
      isMinimum() {
        return this.selectAmount < 1 || this.product.amount == 0
      },
      totalPrice() {
        return this.selectAmount * this.product.price
      }
    }
}
</script>
