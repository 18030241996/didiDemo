<template>
  <div class="user-page">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "user"
    }
</script>

<style scoped>
  .user-page{
    height: 100%;
    background-color: #F3F4F5;
    box-sizing: border-box;
  }
</style>
