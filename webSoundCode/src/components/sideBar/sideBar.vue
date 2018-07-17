<template>
  <div>
    <transition enter-active-class="animated fadeInLeft"  leave-active-class="animated fadeOutRight">
        <div class="bar-container" v-show="usersidebar">
          <div class="head-portrait ">
            <img :src="userimg" alt="用户头像" @click="toUserDetail">
            <p>用户昵称</p>
          </div>
          <menu-list></menu-list>
          <more-list></more-list>
        </div>
    </transition>
    <commen-mask @click.native="close_usersidebar"></commen-mask>
  </div>


</template>

<script>
  import commenMask from '../commenMask'
  import menuList from './menuList'
  import moreList from './moreList'
  import {mapState, mapMutations} from 'vuex'

    export default {
      name: "side-bar",
      data() {
        return {
          userimg: require('../../assets/user.jpeg')
        }
      },
      computed: {
        ...mapState([
          'usersidebar'
        ])
      },
      components:{
        commenMask,
        menuList,
        moreList
      },
      methods:{
        ... mapMutations([
          'close_usersidebar'
        ]),
        toUserDetail () {
          this.$router.push({ path: '/user/detail' })
        }
      }
    }
</script>

<style scoped>
.bar-container{
  position: fixed;
  z-index: 777;
  top: 0;
  left: 0;
  height: 100%;
  width: 65%;
  background-color: #fff;
  box-shadow: 4px 0 18px 6px rgba(0, 0, 0, .12);
  animation-duration: .5s;
}
  .head-portrait{
    margin: 30px 0;
    text-align: center;
  }
.head-portrait img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
}
.head-portrait p{
  margin: 0;
  font-size: 14px;
  opacity: .6;
}
</style>
