<template>
    <div class="home-page">
      <v-header></v-header>
      <side-bar v-show="usersidebar"></side-bar>
      <v-mask v-show="showMask"></v-mask>
      <router-view></router-view>
    </div>
</template>

<script>
  import vHeader from './header'
  import vMask from '../mask/mask'
  import sideBar from '../sideBar/sideBar'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "home",
    computed: {
      ...mapState([
        'showMask',
        'usersidebar'
      ])
    },
    components: {
      vHeader,
      vMask,
      sideBar
    },
    methods: {
      ...mapActions([
        'getCart'
      ])
    },
    created() {
    }
  }
</script>

<style scoped>
.home-page{
}
</style>
