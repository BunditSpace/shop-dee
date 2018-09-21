<template>
     <v-toolbar
      app
      clipped-left
      color="cyan lighten-1"
    >
      <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
      <v-toolbar-title>Shop Dee</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge color="red" overlap right>
        <span slot="badge">3</span>
        <v-btn icon large color="gray">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </v-badge>
      
    </v-toolbar>
</template>
<script>
export default {
    props:['isDrawer'],
    computed: {
        drawer() {
            return this.isDrawer
        }
    },
    methods: {
      toggle() {
        this.$emit('onToggle')
      }
    }
}
</script>

