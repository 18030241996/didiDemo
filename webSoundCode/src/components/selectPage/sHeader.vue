<template>
  <div class="head-container">
    <div class="map-header">
      <div class="city-wrapper">
        <div class="city-text" @click="ShowList">
          <span>
            {{positionCity}}
          </span>
          <span>
            <icon name="sort-desc"></icon>
          </span>
        </div>
        <!--<div class="city-input" v-show="!isChoosed">-->
          <!--<input type="text" placeholder="城市中文名或拼音">-->
        <!--</div>-->
      </div>
      <div class="address-wrapper">
        <custom-search></custom-search>
        <!--<input type="text" id="custom-componet-input"  placeholder="请输入地点">-->
      </div>
      <div class="cancel" @click="tohome">取消</div>
    </div>
  </div>

</template>

<script>
    import {createCustomComponent} from 'vue-amap'
    import {mapState, mapMutations} from 'vuex'
    import customSearch from '../customSearch'

    export default {
      name: "s-header",
      data(){
        return{
          selectMarker: null
        }
      },
      computed: {
        ...mapState([
          'positionCity'
        ])
      },
      components: {customSearch},
      methods:{
        ...mapMutations([
          'ShowList'
        ]),
        tohome() {
          this.$router.push({path: '/'})
        }

      }
    }
</script>

<style scoped>
  .head-container{
    position: fixed;
    z-index: 10001;
    width: 100%;
    background-color: white;
  }
.map-header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  box-shadow: 0 2px 3px rgba(0,0,0,.2);
}
  .city-wrapper{
    padding: 0 20px;
  }
  .cancel{
    padding: 0 20px;
    color: #9E9E9E;
  }
  .address-wrapper{
    flex: 1;
  }
/*.address-wrapper input{*/
  /*width: 100%;*/
  /*border: none;*/
  /*outline: none;*/
/*}*/

.city-text{
  padding-right: 15px;
}
.city-text:after{
  display: inline-block;
  content: '';
  width: 1px;
  height: 20px;
  background-color: rgba(0,0,0,.2);
  position: relative;
  top: 5px;
  left: 20px;
}
  .cancel:before{
    display: inline-block;
    content: '';
    width: 1px;
    height: 20px;
    background-color: rgba(0,0,0,.2);
    position: relative;
    top: 5px;
    right: 15px;
  }
.city-input:after{
  display: inline-block;
  content: '';
  width: 1px;
  height: 20px;
  background-color: rgba(0,0,0,.2);
  position: relative;
  top: 5px;
  left: 10px;
}
  .city-input input{
    width: 110px;
    border: none;
    outline: none;
  }
</style>
