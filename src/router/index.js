import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Users from '@/components/users.vue'
import Rights from '@/components/rights.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/rights',
      name: 'rights',
      component: Rights
    }
    ]
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }]
})
