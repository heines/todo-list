import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import ReplaceText from '@/components/ReplaceText'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/replace',
      name: 'ReplaceText',
      component: ReplaceText
    },
  ]
})
