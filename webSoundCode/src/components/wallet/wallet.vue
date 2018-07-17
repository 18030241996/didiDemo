<template>
    <div class="wellet">
      <p>
        <icon class="to-1" name="chevron-left" @click.native ="routerBack">
        </icon>
          我的钱包
      </p>
      <div class="structure addBottom">
          <span class="icon-box">
            <icon name="credit-card-alt"></icon>
          </span>

        <span class="way">支付方式</span>
        <span class="off-pay">
            立即开通
            <icon name="angle-right"></icon>
          </span>
      </div>
      <div class="addBottom">
        <div class="structure addBorder">
          <span class="icon-box">
            <icon name="cc-visa"></icon>
          </span>
          <span class="way">余额</span>
          <span class="off-pay">
            0.00元
            <icon name="angle-right"></icon>
          </span>
        </div>
        <div class="structure addBorder">
          <span class="icon-box">
            <icon name="wheelchair-alt"></icon>
          </span>
          <span class="way">优惠券</span>
          <span class="off-pay">
            2张
            <icon name="angle-right"></icon>
          </span>
        </div>
        <div class="structure addBorder">
          <span class="icon-box">
            <icon name="cc-visa"></icon>
          </span>
          <span class="way">余额</span>
          <span class="off-pay">
            0.00元
            <icon name="angle-right"></icon>
          </span>
        </div>
        <div class="structure addBorder">
          <span class="icon-box">
            <icon name="wheelchair-alt"></icon>
          </span>
          <span class="way">优惠券</span>
          <span class="off-pay">
            2张
            <icon name="angle-right"></icon>
          </span>
        </div>
      </div>

      <div class="structure addBorder">
          <span class="icon-box">
            <icon name="cc-visa"></icon>
          </span>
        <span class="way">保险</span>
        <span class="off-pay">
            ddddd
            <icon name="angle-right"></icon>
          </span>
      </div>
      <div class="structure addBorder">
          <span class="icon-box">
            <icon name="wheelchair-alt"></icon>
          </span>
        <span class="way">发票与报销</span>
        <span class="off-pay">
            <icon name="angle-right"></icon>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "wallet",
      methods:{
        routerBack() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

.wellet>p{
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
.addBottom{
  border-bottom: 6px solid #F3F4F5;
}
.addBorder{
  border-bottom: 1px solid rgba(0,0,0,.1);
}
  .structure{
    display: flex;
    background-color: white;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    font-size: 14px;
  }
.icon-box{
  margin-right: 10px;
}
.icon-box .fa-icon {
  vertical-align: middle;
}
  .way{
    flex-grow:1;
    text-align: left;
  }
.off-pay .fa-icon{
  vertical-align: middle;
  margin-left: 8px;
}
</style>
