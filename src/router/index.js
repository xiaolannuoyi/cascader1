import Vue from 'vue'
import Router from 'vue-router'
import home from '@/activity/home'
import hello from '@/activity/hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/hello',
      component: hello
    }
  ]
})
