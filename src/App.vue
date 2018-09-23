<template>
  <v-app>
    <app-menu :is-drawer="drawer"></app-menu>
    <top-bar v-on:onToggle="toggleBar" :is-drawer="drawer" :cart-items="cartItems" :remove-cart-item="removeCartItem"></top-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; Shop Dee</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

import Menu from '@/components/Menu'
import ToptBar from '@/components/TopBar'

import cartService from '@/api/cartService'

export default {
  name: 'App',
  components: {'app-menu' : Menu, 'top-bar' : ToptBar},
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      ...mapState('cartStore', {
        //loading : state => state.cartStore.isLoading,
      })
      // cartItems: []
    }
  },
  methods: {
    toggleBar() {

      this.drawer = !this.drawer
      console.log(this.drawer)
    },

    ...mapActions('cartStore',{
      removeCartItem :'requestRemoveItem'
    })
  
  },
  created() {
    this.$store.dispatch('cartStore/requestCartItems')
  },
  computed: {
    ...mapGetters('cartStore',{
      cartItems : 'cartItems'
    })
  }
}
</script>
