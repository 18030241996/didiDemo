<template>
    <p class="call-btn" :class="{addColor: offCall}" @click="callTaxi">call</p>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import { Toast } from 'mint-ui'
    export default {
      name: "call-btn",
      data(){
        return{

        }
      },
      computed:{
        offCall: function(){
          return this.from !='from'&& this.to!='to'
        },
        ...mapState([
          'from',
          'to',
          'isLogin'
        ])
      },
      methods:{
        callTaxi(){
          //console.log(this.offCall)
          if(this.offCall){
            if(this.isLogin){
              Toast('正在呼叫')
            }else {
              Toast('未登录')
              this.callLogin()
            }
          }else {
            Toast('请选择起点或终点')
          }
        },
        ...mapActions([
          'callLogin'
        ]),
      }
    }
</script>

<style scoped>
  .call-btn{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-radius:4px;
    background-color: #DDDDDD;
    color: white;
    font-size: 22px;
    padding: 6px 0;
    text-align: center;
  }
  .addColor{
    background-color: #4A4C5B;
  }
</style>
