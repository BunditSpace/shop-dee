<template>
  <v-container fluid>
      <v-layout column align-center>
        <v-card flat color="transparent" tile text-xs-center>
          <v-card-title >
          <span class="text-xs-center title">Welcome to Shop Dee</span>
          </v-card-title>
          </v-card>
       
      </v-layout>
      <v-layout row mt-2> 
        <v-flex xs12 text-xs-center>
          <v-card tile pa-2> 
            <div class="pa-2 text-xs-left mx-2">
              <span class="title">Super Flash Sale</span>
              <v-icon ml-2>query_builder</v-icon>
            </div>            
          </v-card>
        </v-flex>
      </v-layout>
       <v-layout row mt-2> 
        <v-flex xs12 text-xs-center>
          <v-card tile pa-2 v-for="(item, key) in products" :key="key"> 
            <product-item :product="item"></product-item>
          </v-card>
          

        </v-flex>
      </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script>
import { mapState } from 'vuex'
import ProductItem from '@/components/Home/ProductItem'
import productService from '@/api/productService'

export default {
  components: {
    'product-item': ProductItem
  },
  data: () => ({
  }),
  mounted() {
    this.$store.dispatch('productStore/requestProductItems')
  },
  computed: {
    ...mapState('productStore', {
        products: state => state.products
    })
  },
  methods: {
  }
}
</script>
