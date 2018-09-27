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
              <v-layout row wrap>
                  <v-flex xs2>
                      <v-select
                          :items="categories"
                          v-model="product.category"
                          label="Category"
                          item-text="name"
                          item-value="name"
                         :rules="[v => !!v || 'Item is required']" required
                      >
                      </v-select>
                  </v-flex>
                  <v-flex xs4>
                      <v-text-field
                          name="name"
                          label="Product Name"
                          id="name"
                          v-model="product.name"
                          :rules="[v => !!v || 'Item is required']" required
                      ></v-text-field>
                     <span v-if="!isValid">Product already exist</span>
                  </v-flex>
                   <v-flex xs2>
                      <v-text-field
                          name="pic"
                          label="Picture"
                          id="pic"
                          v-model="product.pic"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs1>
                      <v-text-field
                          name="amount"
                          label="Amount"
                          id="amount"
                          v-model="product.amount"
                          type="number"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs1>
                      <v-text-field
                          name="price"
                          label="Price"
                          id="price"
                          type="number"
                          v-model="product.price"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                       <v-btn color="success" class="sm" @click="addProduct" :disabled="!product.name">Add Product</v-btn>
                  </v-flex>
              </v-layout>              
            </div>         
            <div>
                <product-list :headers="headers" :products="products" @delete-product="deleteProduct"></product-list>
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
import ProductList from "@/components/Product/ProductList";
import productService from "@/api/productService";
import productCategoryService from "@/api/productCategoryService";
import { mapGetters } from "vuex";

export default {
  components: {
    "product-list": ProductList
  },
  data: () => ({
    product: { name: null, category: null, amount: 0, price: 0 },
    isValid: true,
    categories: [],
    headers: [
      {
        text: "Number",
        align: "left",
        sortable: false,
        width: "5%"
      },
      {
        text: "Category",
        align: "left",
        sortable: false,
        value: "category",
        width: "25%"
      },
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name",
        width: "25%"
      },
      {
        text: "Price",
        align: "left",
        sortable: false,
        value: "price",
        width: "15%"
      },
      {
        text: "Amount",
        align: "left",
        sortable: false,
        value: "amount",
        width: "15%"
      },
      {
        text: "Action",
        align: "center",
        sortable: false,
        width: "15%"
      }
    ]
  }),
  created() {
    productCategoryService.getAll().then(response => {
      this.categories = response;
    });

    this.$store.dispatch("productStore/requestProductItems");
  },
  methods: {
    addProduct() {
      this.$store.dispatch("productStore/addProductItems", this.product);
    },

    deleteProduct(index) {
      this.$store.dispatch("productStore/deleteProductItems", index);
    }
  },
  computed: {
    ...mapGetters({
      products: "productStore/products"
    })
  }
};
</script>
