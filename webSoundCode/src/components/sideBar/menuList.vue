<template>
<div class="menu-cont">
  <div class="menu" v-for="(i,k) in menuList">
    <router-link :to="i.linkTo">
      <icon :name="i.img"></icon>
      <span>{{i.text}}</span>
    </router-link>
  </div>
</div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
    export default {
      name: "menu-list",
      data(){
        return {
          menuList: [
            {
              id:0,
              img: 'address-card',
              linkTo: '/user/journey',
              text: '行程'
            },
            {
              id:1,
              img: 'money',
              linkTo: '/user/wallet',
              text: '钱包'
            },
            {
              id:2,
              img: 'user-circle',
              linkTo: '/user/service',
              text: '客服'
            },
            {
              id:3,
              img: 'cog',
              linkTo: '/user/setting',
              text: '设置'
            }
          ]
        }
      },
      components:{
        Icon
      }
    }
</script>

<style scoped>
  .menu-cont{
    padding: 0 20px;
  }
  .menu{
    text-align: left;
    padding: 25px 10px;
  }
  .menu a{
    text-decoration: none;
    color: #3e3e3e;
  }
  .menu span{
    vertical-align: middle;
    padding: 0 20px;
  }
  .fa-icon{
    vertical-align: middle;
  }

</style>
