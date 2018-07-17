// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'mint-ui/lib/style.css'
import VueAMap from 'vue-amap'
import http from './http'

Vue.prototype.$http = http

Vue.use(VueAMap)
Vue.use(MintUI)
Vue.component('icon', Icon)
Vue.config.productionTip = false

VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: '5106a477e53fa634e7a54d309bb7eaab',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

