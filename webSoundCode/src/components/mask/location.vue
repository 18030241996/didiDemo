<template>
  <div>
    <p>
      <icon name="exclamation-circle" scale=2></icon>
    </p>
    <p class="tip-text">未获取到定位权限，请到设置中开启</p>
    <div class="btn-container">
      <span>输入上车点</span>
      <span @click="changeMask(false)">我知道了</span>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  import {mapMutations} from 'vuex'
    export default {
      name: "location",
      components: {
        Icon
      },
      methods:{
        ...mapMutations([
          'changeMask'
        ])
      }
    }
</script>

<style scoped>
.tip-text{
  color: #666;
}
  .btn-container{
    border-top: 1px solid #e9e9e9;
    display: flex;
  }
.btn-container span{
  color: #666;
  display: inline-block;
  padding: 17px 10px;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
  width: 50%;
}
.btn-container span:first-child{
  border-right: 1px solid #e9e9e9;
}
</style>
