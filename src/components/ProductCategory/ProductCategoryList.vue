<template>
    <div>
         <v-data-table
                    :headers="headers"
                    :items="categories"
                    hide-actions
                    class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                    <td class="text-xs-left" >{{ props.index + 1 }}</td>
                            <td class="text-xs-left">{{ props.item.name }}</td>
                            <td class="justify-center layout px-0 xs2">                               
                                <v-icon
                                    small
                                    @click="deleteItem(props.item)"
                                >
                                    delete
                                </v-icon>
                            </td>
                </template>
                    
        </v-data-table>
    </div>
</template>

<script>
export default {
    props: ['headers', 'categories'],
    data: () => ({

    }),
    methods: {
        deleteItem(item) {
            this.$emit('on-delete', item)            
        }
    }
}
</script>
