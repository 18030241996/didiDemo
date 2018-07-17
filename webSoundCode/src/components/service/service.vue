<template>
  <div class="service">
    <p>
      <icon class="to-1" name="chevron-left" @click.native ="routerBack">
      </icon>
      服务
    </p>
  </div>
</template>

<script>
    export default {
      name: "service",
      methods:{
        routerBack() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .service>p{
    margin: 0;
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-bottom: 6px solid #F3F4F5;
    text-align: center;
  }
  .to-1{
    float: left;
    padding-top: 18px;
    padding-left: 10px;
  }
</style>
