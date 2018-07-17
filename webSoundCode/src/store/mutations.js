export default {

  changeNav(state){
    state.navListActive = !state.navListActive
    //console.log(state.navListActive)
  },
  setPhone(state,phone){
    state.userPhone=phone
    console.log(state.userPhone)
  },
  changeMask(state,isshow){
    state.showMask=isshow,
    state.userPhone=''
  },
  changeLogin(state){
    state.isLogin=!state.isLogin
    console.log(state.isLogin)
  },
  changeUserBar(state){
    state.usersidebar=true
  },
  close_usersidebar(state){
    state.usersidebar=!state.usersidebar
    console.log(state.usersidebar)
  },
  close_userbar(state){
    state.usersidebar=false
  },
  selectCity(state, city) {
    state.positionCity = city
    state.isShowList = false
    //console.log(state.positionCity)
  },
  ShowList(state){
    state.isShowList = !state.isShowList
    //console.log(state.isShowList)
  },
  hiddenList(state){
    state.isShowList = false
    //console.log(state.isShowList)
  },
  setFrom(state, from){
    state.from = from
  },
  setTo(state, to){
    state.to = to
  },
  setSearchConten(state, conten){
    state.searchConten = conten
    //console.log(state.searchConten)
  },
  setCartList(state, conten){
    state.cartList = conten
    //console.log(state.cartList)
  }
}
