<template>
  <div class="more-list">
    <div class="list-container">
      <div v-for="(i,k) in mList">
        {{i.text}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "more-list",
      data(){
          return {
            mList: [
              {
                id:0,
                img: 'xxx',
                text: '推荐有奖'
              },
              {
                id:1,
                img: 'xxx',
                text: '兑换码'
              },
              {
                id:2,
                img: 'xxx',
                text: '司机招募'
              }
            ]
          }
      },
    }
</script>

<style scoped>
.more-list{
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
}
  .list-container{
    width: 100%;
    display: flex;
    justify-content:space-around;
  }
.list-container div{
  width: 30%;
}
</style>
