<template>
    <div class="userdetail">
      <p>
        <span class="to-1">
          <icon name="chevron-left" @click.native ="routerBack"></icon>
        </span>
        <span class="writeDetail">编辑资料</span>
      </p>
      <div class="user-pic">
        <img :src="userimg" alt="头像">
        <p class="user-name">用户名</p>
        <p class="work">行业 - 公司 - 职业</p>
        <p class="bardian">个性签名</p>
      </div>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    export default {
      name: "detail",
      data() {
        return {
          userimg: require('../../assets/user.jpeg')
        }
      },
      components:{
        Icon
      },
      methods:{
        routerBack() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

.userdetail>p{
  margin: 0;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.to-1{
  margin-left: 15px;
}
.writeDetail{
  margin-right: 10px;
  color: rgba(0,0,0,.6);
  font-size: 14px;
  flex: 1;
  text-align: center;
}
.user-pic{
  margin: 15px 0;
  text-align: center;
}
.user-pic img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.user-pic .user-name{
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: rgba(0,0,0,.6);
}
.work,.bardian{
  margin: 10px;
  font-size: 12px;
  color: rgba(0,0,0,.5);
}
</style>
