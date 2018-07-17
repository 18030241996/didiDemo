<template>
  <div>
    <div class="close" @click="changeMask(false)">
      <span></span>
    </div>
    <p class="p-title">登录</p>
    <div class="phone-input">
      <input type="text" placeholder="输入手机号" maxlength="11"  v-model="phoneText">
      <span></span>
    </div>
    <div class="next" :class="{pass:isPass}" @click="pasetPhone">
      下一步
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import { Toast } from 'mint-ui'
    export default {
      name: "check-telephone",
      data() {
        return {
          phoneText: '',
          isPass:false
        }
      },
      watch:{
        'phoneText':function () {
          this.testinput()
        }
      },
      methods:{
        ...mapMutations([
          'setPhone',
          'changeMask'
        ]),
        pasetPhone() {
          if(this.isPass) this.setPhone(this.phoneText)
          else{
            let instance = Toast('手机号码合适不正确')
            setTimeout(() => {
              instance.close()
            }, 1500)
          }
        },
        testinput () {
            this.phoneText=this.phoneText.replace(/[^\d]/g,'')
            let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if(this.phoneText.length==11){
              let testres = myreg.test(this.phoneText)
              if(testres){
                this.isPass=true
              }
            }else {
              this.isPass=false
            }
          }
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
.p-title{
  color: #666;
  font-size: 16px;
  text-align: center;
}
.phone-input{
  text-align: center;
}
.phone-input span{
  display: inline-block;
  border-top: 1px solid rgba(0, 0, 0, .2);
  width: 200px;
  margin: 15px 0;
}
.phone-input input{
    width: 200px;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    border: transparent;
    outline: none;
    color: rgba(0, 0, 0, .6);
}
  .next{
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    background: #E7E7E7;
    color: #fff;
    text-align: center;
  }
  .pass{
    background: #4A4C5B;
  }
</style>
