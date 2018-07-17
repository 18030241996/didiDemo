<template>
    <router-view></router-view>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import 'assets/css/animate.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    -webkit-tap-highlight-color: transparent;
    height: 100%;
  }
  body,html{
    margin: 0;
    height: 100%;
    width: 100%;
  }
  ul,ol {
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  .amap-sug-result{
    /*z-index: 10002;*/
    margin-top: 15px;
  }
  .amap-sug-result .auto-item{
    padding: 5px 7px;
  }
</style>
