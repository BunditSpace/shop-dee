<template>
    <div>
         <v-data-table
                    :headers="headers"
                    :items="products"
                    hide-actions
                    class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                    <td class="text-xs-left" >{{ props.index + 1 }}</td>
                            <td class="text-xs-left">{{ props.item.category }}</td>
                            <td class="text-xs-left">{{ props.item.name }}</td>
                            <td class="text-xs-left">{{ props.item.price }}</td>
                            <td class="text-xs-left">{{ props.item.amount }}</td>
                            <td class="justify-center layout px-0 xs2">                               
                                <v-icon
                                    small
                                    @click="deleteItem(props.index)"
                                >
                                    delete
                                </v-icon>
                            </td>
                </template>
                    
        </v-data-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['headers'],
    data: () => ({

    }),
    methods: {
        deleteItem(index) {
            if(confirm("Are you sure you want to delete this product ?"))
                this.$store.dispatch("productStore/deleteProductItems", index);
        }
    },
    computed: {
        ...mapState('productStore', {
            products: state => state.products
        })
    }
}
</script>
