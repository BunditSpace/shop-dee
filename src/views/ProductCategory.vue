<template>
  <v-container fluid>
      <v-layout column align-center>
        <v-card flat color="transparent" tile text-xs-center>
          <v-card-title >
          <span class="text-xs-center title">Manage Category</span>
          </v-card-title>
          </v-card>
       
      </v-layout>
      <v-layout row mt-2> 
        <v-flex xs12 text-xs-center>
          <v-card tile pa-2> 
            <div class="pa-2 text-xs-left mx-2">
              <v-layout row wrap>
                  <v-flex xs10>
                      <v-text-field
                          name="name"
                          label="label"
                          id="id"
                          v-model="category.name"
                          :rules="[v => !!v || 'Item is required']" required                        
                      ></v-text-field>
                      <span class="text-red" v-if="!isValid">Category already exist.</span>
                  </v-flex>
                  <v-flex xs2>
                       <v-btn color="success" class="sm" @click="addCategory" :disabled="!category.name">Add Product</v-btn>
                  </v-flex>
              </v-layout>              
            </div>         
            <div>               
                <category-list :headers="headers"></category-list>
            </div>   
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

import ProductCategoryList from '@/components/ProductCategory/ProductCategoryList'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    'category-list' : ProductCategoryList
  },
  data: () => ({
    category: {name:null},
    headers: [
        {
            text: 'Number',
            align: 'left',
            sortable: false,
            width: "10%"
        },
        {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: "name",
            width: "80%"
        },
         {
            text: 'Action',
            align: 'center',
            sortable: false,
            width: "10%"
        }
    ]
  }),
  created() {
      this.$store.dispatch('productCategoryStore/requestCategories')
  },
  methods: {
      addCategory() {
        console.log(this.category)
        this.$store.dispatch('productCategoryStore/addCategory', this.category)
        this.category = {name: null}
      },
  },
  computed:{
    ...mapState('productCategoryStore',{
      categories : state => state.categories,
      isValid : state => state.isAddSuccess
    })
  }
}
</script>
