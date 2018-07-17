//import mutations from './mutations'
import axios from 'axios'
export default {
  changeNavList (context) {
    context.commit('changeNav')
  },
  isLogin(context){
    if(context.state.isLogin){
      context.commit('changeUserBar')
    }
    else {
      context.commit('changeMask',true)
    }
  },
  callLogin(context){
      context.commit('changeMask',true)
  },
  // async getCart (context) {
  //   await axios.get('http://192.168.0.101:3000/cart?querystring=select')
  //     .then((response)=>{
  //       console.log(response.data)
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     })
  // },
  setCart ({commit},cart){
    commit('setCartList',cart)
  }
}
