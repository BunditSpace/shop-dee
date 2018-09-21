<template>
  <v-app>
    <app-menu :is-drawer="drawer"></app-menu>
    <!-- <v-toolbar
      app
      clipped-left
      color="cyan lighten-1"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Shop Dee</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu bottom left offset-y>
          <v-btn icon slot="activator">
            <v-badge overlap small color="red">
              <span slot="badge" small>3</span>
                <v-icon dark>shopping_cart</v-icon>
            </v-badge>
          </v-btn>
          <cart></cart>
        </v-menu>
      
    </v-toolbar> -->
    <top-bar v-on:onToggle="toggleBar" :is-drawer="drawer"></top-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; Shop Dee</span>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu'
import Cart from '@/components/Cart'
import ToptBar from '@/components/TopBar'

export default {
  name: 'App',
  components: {'app-menu' : Menu, 'cart': Cart, 'top-bar' : ToptBar},
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    toggleBar() {

      this.drawer = !this.drawer
      console.log(this.drawer)
    }
  }
}
</script>
