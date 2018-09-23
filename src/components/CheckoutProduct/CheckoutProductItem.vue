<template>
    <div>
        <v-card color="cyan lighten-5" class="black--text pa-2">
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
                            <div>Price per each {{product.price}}</div>
                            <div>Amount {{product.amount}}</div>
                            </div>
                        </v-card-title>
                        </v-flex>
                    </v-layout>
                     <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        
                        <v-spacer></v-spacer>
                        <span>Total {{product.price * product.amount}} Baht</span>
                        
                    </v-card-actions>
                </v-card>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

