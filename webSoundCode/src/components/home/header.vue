<template>
  <!--头部容器-->
  <div class="nav-wrapper">
    <!--用户-->
    <div class="nav" :class="{shadow:shadowActive}">
      <div class="user-wrapper" @click="isLogin">
        <div class="user-icon">
          <icon name="user"></icon>
        </div>
      </div>

      <ul class="head-nav">
        <li v-for="(i,k) in navList">
          <router-link :to="'/home/'+i.type" :class="{itemActive: onItem == k}" @click.native="changeItem(k)">{{i.name}}</router-link >
        </li>
      </ul>
      <!--更多-->
      <div class="more">
        <div class="more-icon" @click="changeNavList()">
          <icon name="ellipsis-h"></icon>
        </div>
      </div>

    </div>
    <more-list v-show="navListActive" :message="childCart" ></more-list>

  </div>
</template>

<script>
  //import moreList from './moreList'
  import { mapGetters, mapActions } from 'vuex'
  import axios from 'axios'
    export default {
      name: "vhead",
      data() {
        return {
          shadowActive:true,
          onItem: '0',
          navList: [],
          childCart:[]
        }
      },
      computed: {
        ...mapGetters([
          'navListActive'
        ])
      },
      components : {
        'moreList': () => import('./moreList')

      },
      methods: {
        ...mapActions([
          'changeNavList',
          'isLogin',
          'setCart'
        ]),
        changeItem(k) {
          this.onItem=k
        },
        async cartlist() {
          await this.$http.get('/cart?querystring=select')
            .then((response)=>{
              //console.log(response)
              this.childCart = response
              for(let i=0;i<response.length;i++){
                 if(response[i]._id<3){
                   this.navList.push(response[i])
                 }
              }
              //this.setCart(response.data)
            })
            .catch((err)=>{
              console.log(err)
            })
        }
      },
      created() {
        this.cartlist()
      },
      beforeMount(){
      }
    }
</script>

<style scoped>
.nav-wrapper{
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  z-index: 30;
  background: #fff;
}
.nav{
  display: flex;
  justify-content:space-between;
}
.shadow{
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
  -moz-box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
  box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
}
.nav .user-wrapper{
  line-height: 54px;
}
.user-icon{
  width: 44px;
  text-align: center;
  position: relative;
}
.user-icon:after{
  position: absolute;
  right: 0;
  top:16px;
  content: '';
  width: 1px;
  height: 16px;
  background: #e9e9e9;
}
.nav .more{
  line-height: 54px;
}
.more-icon{
  width: 44px;
  text-align: center;
}

.nav .head-nav{
  line-height: 54px;
}

.nav-wrapper ul{
  display: flex;
  margin: 0;
  padding: 0;
}

.head-nav li{
  list-style: none;
  padding: 0 15px;
  font-size: 14px;
  font-weight: bold;
}
.head-nav li a{
  text-decoration: none;
  color: #3e3e3e;
}
.head-nav li a.itemActive{
  -webkit-transition: all .2s;
  transition: all .2s;
  color: #fc9153;
}
</style>
