<template>
    <div class="taxi">
      <select-site></select-site>
      <call-btn></call-btn>
    </div>
</template>

<script>
  import selectSite from '../reusing/selectSite'
  import callBtn from '../reusing/callBtn'
  export default {
    name: "taxi",
    components:{
      selectSite,
      callBtn
    }
  }
</script>

<style scoped>
.taxi{
  position: absolute;
  top: 60px;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
</style>
