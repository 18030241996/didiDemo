import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home'
const user = () => import('../components/user/user')

import taxi from '../components/taxi/taxi'

const replace = () => import('../components/replace/replace')

const fastride = () => import('../components/fastride/fastride')

const selectPage = () => import('../components/selectPage/selectPage')

const journey = () => import('../components/journey/journey')

const wallet = () => import('../components/wallet/wallet')

const service = () => import('../components/service/service')

const setting = () => import('../components/setting/setting')

const userdetail = () => import('../components/user/detail')


Vue.use(Router)


export default new Router({
  routes:[
    {
      path: '/home/taxi',
      name: 'home',
      component: home,
      alias:'/',
      children: [
        {
          path: '/home/taxi',
          name: 'taxi',
          component: taxi
        },
        {
          path: 'home/replace',
          name: 'repalce',
          component: replace
        },
        {
          path: 'home/fastride',
          name: 'fastride',
          component: fastride
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      children: [
        {
          path: '/user/journey',
          name: 'user-journey',
          component: journey,
        },
        {
          path: '/user/wallet',
          name: 'user-wallet',
          component: wallet,
        },
        {
          path: '/user/service',
          name: 'user-service',
          component: service,
        },
        {
          path: '/user/setting',
          name: 'user-setting',
          component: setting,
        },
        {
          path: '/user/detail',
          name: 'user-detail',
          component: userdetail,
        }
      ]
    },
    {
      path: '/selectpage/:site',
      name: 'selectpage',
      component: selectPage,
      props: true
    }
  ]

})
