<template>
  <div>
    <div class="close" @click="changeMask(false)">
      <span></span>
    </div>
    <p class="title1">输入验证码</p>
    <p class="title2">将验证码发送至{{userPhone}}</p>
    <div>
      <div class="btn" @click="countDown" v-show="isEnd">
        重新发送
      </div>
      <div class="btn" v-show="!isEnd">
        {{times}}秒后重发
      </div>
    </div>
    <div class="user-phone">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <input type="text" maxlength="4" v-model="phoneTest">
    </div>
    <p class="title2 title3">输入验证码表示同意《法律声明及隐私政策》</p>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
    export default {
      name: "test-phone",
      data() {
        return{
          times:5,
          isEnd:false,
          phoneTest:''
        }
      },
      computed: {
        ...mapGetters([
          'userPhone'
        ])
      },
      methods:{
        ...mapMutations([
          'changeMask',
          'changeLogin'
        ]),
        countDown() {
          this.isEnd=false
          this.times=5
          let intval=setInterval(()=>{
            this.times--;
            if(this.times<1){
              clearInterval(intval)

              this.isEnd=true
            }
          },1000)
        }
      },
      watch:{
        phoneTest : function () {
          if(this.phoneTest.length==4){
            this.changeLogin()
            this.changeMask(false)
          }
        }
      },
      mounted:function (){
        this.countDown()
      }
    }
</script>

<style scoped>
  .close{
    padding: 8px 0;
    overflow: auto;
  }
  .close span{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUJDMDk1Q0ZEODc5MTFFNUFDRDE4N0I0NzBENTMwRkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUJDMDk1RDBEODc5MTFFNUFDRDE4N0I0NzBENTMwRkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRjEzRjc3QUQ4NzgxMUU1QUNEMTg3QjQ3MEQ1MzBGQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QkMwOTVDRUQ4NzkxMUU1QUNEMTg3QjQ3MEQ1MzBGQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvlDFyMAAAEESURBVHjapJXRCoIwFIbnMbrxQuhxggi6K0hC6DEV6sKu7KZn6BWqB0iv+wcThs15tnPgV3Du+3RzM6mq6qmU+iAF0qnAKsvy71pd1zlOFyQnHN7IDrkhmRKWgTfIFnlpwQl5IBupxIKvkTty1oIvcpBKHPAjhq8n0y6STMF1G1n3RUl88LEgRuKFuwQhkln4lIAjYcF9Ap+EDde1mJnDQdJYkpQL5whcEl2t2Vr6uc7E/NRTk6GWSMLpyBHYY96GrhMKhBfjicdCy2IFLnhv5mTPlVAgfKiOK6EIeJCEIuFsCQngwy/TKyEJnCMhKXxOogVXKdwjqew3EMEdEv3Aq58AAwDhrKbpP7oZmgAAAABJRU5ErkJggg==);
    background-size: 12px 12px;
    float: right;
    margin-right: 8px;
  }
  .title1{
    color: #666;
    font-size: 16px;
    text-align: center;
  }
  .title2{
    color: rgba(0, 0, 0, .4);
    text-align: center;
  }
  .title3{
    font-size: 10px;
  }
  .btn{
    box-sizing: border-box;
    width: 90px;
    height: 30px;
    margin: 20px auto;
    border: 1px solid #3e3e3e;
    border-radius: 4px;
    line-height: 30px;
    color: rgba(0,0,0,.6);
    text-align: center;
  }
  .user-phone{
    position: relative;
    text-align: center;
  }
  .user-phone span{
    display: inline-block;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin-right: 6px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }
  .user-phone input{
    position: absolute;
    left: 10px;
    top: 5px;
    border: none;
    width: 240px;
    height: 40px;
    letter-spacing: 50px;
    font-size: 20px;
    text-indent: 25px;
    background: transparent;
  }
</style>
