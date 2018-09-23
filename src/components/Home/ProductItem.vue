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
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                
                <v-spacer></v-spacer>
                <span>We have {{product.amount}} pieces</span>
                <v-btn icon>
                    <v-icon>remove</v-icon>
                </v-btn>
                <span>{{product.amount}}</span>
                <v-btn icon>
                    <v-icon>add</v-icon>
                </v-btn>
                <v-btn  color="blue darken-4" sm dark @click="">Add To Cart</v-btn>
              </v-card-actions>
            </v-card>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {

    }
}
</script>
