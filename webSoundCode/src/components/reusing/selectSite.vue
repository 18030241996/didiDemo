<template>
  <div class="taxi-content">
    <loading></loading>
    <div class="location">
      <div class="location-from" @click="tomap('from')">
        <p>{{from}}</p>
      </div>
      <div class="location-to" @click="tomap('to')">
        <p>{{to}}</p>
      </div>
    </div>

    <div class="depart">
      <icon name="clock-o"></icon>
      <span>现在出发</span>
    </div>
    <div v-show="from!='from'&&to!='to'" style="color: #3e3e3e">
      <div style="padding: 8px 0;text-align: center;">计价器计价</div>
      <div style="margin: 12px 0;text-align: center;">
        约<span style="font-size: 24px;font-weight: bold">{{parseInt(Math.random() * 50)}}</span>元
      </div>
    </div>
    <loading v-show="from=='from' && to=='to'"></loading>
  </div>

</template>

<script>
  import loading from '../loading'
  import {mapState} from 'vuex'
    export default {
      name: "select-site",
      data () {
        return {
        }
      },
      computed:{
        ...mapState([
          'from',
          'to'
        ])
      },
      components:{
        loading
      },
      methods:{
        tomap(site){
          this.$router.push({name: 'selectpage', params:{ site: site }})
        }
      }
    }
</script>

<style scoped>
.taxi-content{
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  color: #999;
  background-color: #fff;
}
.location{
  border: 1px solid rgba(0,0,0,.1);
  border-right: 0;
  border-left: 0;
}
.location>div{
  height: 50px;
  line-height: 50px;
  padding: 0 15px 0 40px;
  position: relative;
}

.location p{
  margin: 0;
  padding: 0;
  text-align: left;
}
.location-from:before{
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  top: 44%;
  left: 17px;
  background-color: #3cbca3;
  border-radius: 50%;
}
.location-to:before{
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  top: 44%;
  left: 17px;
  background-color: #fc9153;
  border-radius: 50%;
}

.location-from p{
  margin: 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
}

  .depart{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #666;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
.depart .fa-icon{
  vertical-align: middle;
}
  .depart span{
    vertical-align: middle;
  }
</style>
