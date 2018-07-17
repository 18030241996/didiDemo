<template>
    <div class="mask-container">
      <commen-mask></commen-mask>
      <div class="confirm">
        <!--<location></location>-->
        <check-phone v-show="!userPhone"></check-phone>
        <test-phone v-if="userPhone"></test-phone>
      </div>
    </div>
</template>

<script>
  import location from './location'
  import checkPhone from './checkPhone'
  import testPhone from './testPhone'
  import commenMask from '../commenMask'
  import {mapState} from 'vuex'
    export default {
      name: "vmask",
      computed: {
        ...mapState([
          'userPhone'
        ])
      },
      components: {
        location,
        checkPhone,
        testPhone,
        commenMask
      }
    }
</script>

<style scoped>
.mask-container{

}
  .confirm{
    position: fixed;
    left: 50%;
    margin-left: -133px;
    z-index: 666;
    width: 267px;
    box-sizing: border-box;
    border-radius: 3px;
    background: #fff;
    font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
    font-size: 14px;
    -webkit-user-select: none;
    user-select: none;
    top: 240px;
  }
  .location-check{
  }
</style>
