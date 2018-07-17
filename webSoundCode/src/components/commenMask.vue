<template>
    <div class="mask"></div>
</template>

<script>
    export default {
        name: "commen-mask"
    }
</script>

<style scoped>
.mask{
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  background-color: rgba(37, 38, 45, .4);
  transition:all .2s;
}
</style>
