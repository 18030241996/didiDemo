<template>
  <div class="journey">
    <p><icon class="to-1" name="chevron-left" @click.native ="routerBack"></icon>我的行程</p>
    <div class="finish-order">
      <p>已完成订单</p>
      <div class="order">
        <p>
          <span>快车</span>
          <span class="finish-status">已完成</span>
        </p>
        <ul class="order-detail">
          <li>
            <icon name="clock-o"></icon>
            <span>时间</span>
          </li>
          <li class="from">from</li>
          <li class="to">to</li>
        </ul>
      </div>
      <div class="order">
        <p>
          <span>快车</span>
          <span class="finish-status">已完成</span>
        </p>
        <ul class="order-detail">
          <li>
            <icon name="clock-o"></icon>
            <span>时间</span>
          </li>
          <li class="from">from</li>
          <li class="to">to</li>
        </ul>
      </div>
      <div class="order">
        <p>
          <span>快车</span>
          <span class="finish-status">已完成</span>
        </p>
        <ul class="order-detail">
          <li>
            <icon name="clock-o"></icon>
            <span>时间</span>
          </li>
          <li class="from">from</li>
          <li class="to">to</li>
        </ul>
      </div>
    </div>
    <div class="checkHistory">轻按查看历史订单</div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
    export default {
      name: "journey",
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
.journey>p{
  margin: 0;
  background-color: white;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  text-align: center;
}
.to-1{
  float: left;
  padding-top: 13px;
  padding-left: 10px;
}
.finish-order{
  width: 90%;
  margin: 0 auto;
}
.finish-order>p{

  font-size: 14px;
  margin: 6px 0;
  text-align: left;
  color: rgba(0,0,0,.5);
}
.finish-status{
  color: rgba(0,0,0,.5);
  margin-right: 10px;
}
.finish-order>.order{
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  padding: 8px 5px;
  border-bottom:5px solid #F3F4F5;
}
.order>p{
  margin: 0;
  display: flex;
  justify-content:space-between;
  padding-bottom: 8px;
}
.order-detail{
  text-align: left;

}
.order-detail>li{
  color: rgba(0,0,0,.6);
  font-size: 14px;
  height: 25px;
  line-height: 25px;
  position: relative;
}
.fa-icon{
 vertical-align: middle;
}
.from,.to{
  padding-left: 17px;
}
.from:before{
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  top: 41%;
  left: 4px;
  background-color: #3cbca3;
  border-radius: 50%;
}
.to:before{
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  top: 41%;
  left: 4px;
  background-color:  #fc9153;
  border-radius: 50%;
}
.checkHistory{
  margin-top: 15px;
  color: #7e7e7e;
  text-align: center;
}
</style>
