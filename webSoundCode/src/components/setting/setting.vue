<template>
  <div class="setting-cont">
    <p>
      <icon class="to-1" name="chevron-left" @click.native ="routerBack">
      </icon>
      设置
    </p>
    <ul>
      <li v-for="(i,k) in settingList">
        <span>
          {{i.text}}
        </span>
        <icon name="angle-right"></icon>
      </li>
    </ul>
    <div class="exit" @click="loginOut">退出登录</div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import Icon from 'vue-awesome/components/Icon'
    export default {
      name: "setting",
      data(){
        return{
          settingList: [
            {
              id:0,
              linkTo: '/user/setting',
              text: '实名认证'
            },
            {
              id:1,
              linkTo: '/user/setting',
              text: '密码设置'
            },
            {
              id:2,
              linkTo: '/user/setting',
              text: '用户指南'
            },
            {
              id:3,
              linkTo: '/user/setting',
              text: '法律条款'
            }
          ]
        }
      },
      components:{
        Icon
      },
      methods:{
        ...mapMutations([
          'close_userbar',
          'changeLogin'
        ]),
        loginOut(){
          this.changeLogin()
          this.close_userbar()
          this.$router.go(-1)
        },
        routerBack() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
.setting-cont{
}
.setting-cont>p{
  margin: 0;
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-bottom: 6px solid #F3F4F5;
  text-align: center;
}
.to-1{
  float: left;
  padding-top: 18px;
  padding-left: 10px;
}
.setting-cont ul{
  margin-bottom: 20px;
}
.setting-cont li{
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  height: 50px;
  padding: 14px 0;
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
}
.setting-cont li span{
  text-align: left;
}
  .exit{
    background: white;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #e63f17;
    text-align: center;
  }
.setting-cont>ul .fa-icon{
    position: absolute;
    right: 10px;
    vertical-align: middle;
  }
</style>
