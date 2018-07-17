<template>
    <div class="map-content">
      <s-header></s-header>
      <div class="search-content" v-show="searchConten.length!=0">
        <p v-for="item in searchConten" @click="selectCity(item.name)">
          <span>{{item.name}}</span>
          <span>"{{item.district}}"</span>
        </p>
      </div>
      <s-list v-show="isShowList" @getCity="mySetCity"></s-list>
      <keep-alive>
        <a-map ref="child"></a-map>
      </keep-alive>
    </div>
</template>

<script>
  import sHeader from './sHeader'
  import sList from './sList'
  import aMap from '../amap'
  import {mapState ,mapMutations} from 'vuex'
    export default {
      name: "select-page",
      props:['site'],
      data(){
        return {
          city:'',
        }
      },
      computed:{
        ...mapState([
          'isShowList',
          'searchConten'
        ])
      },
      components:{
        sHeader,
        sList,
        aMap
      },
      methods:{
        ...mapMutations([
          'hiddenList',
          'setFrom',
          'setTo',
          'setSearchConten'
        ]),
        mySetCity (city) {
          //console.log(this.$refs.child.$refs)
          this.$refs.child._setCitys(city)
        },
        selectCity(cityName) {
          //console.log(this.$route.params.site)
          if(this.$route.params.site=='from'){
            this.setFrom(cityName)
          }else {
            this.setTo(cityName)
          }
          this.$router.push({path: '/'})
        },
      },
      beforeRouteLeave( to, from, next) {
        //console.log(this.site)
        this.setSearchConten('')
        this.hiddenList()
        next()
      }
    }
</script>

<style scoped>
.map-content{
  width: 100%;
  height: 100%;
}
.search-content{
  border-radius: 5px;
  position: absolute;
  top: 52px;
  width: 90%;
  left: 5%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: white;
  z-index: 999;
}
.search-content p{
  margin: 0;
  font-size: 14px;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.search-content span:nth-child(2n){
  padding-left: 15px;
}
</style>
