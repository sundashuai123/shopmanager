import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Users from '@/components/users.vue'
import Rights from '@/components/rights.vue'
import Roles from '@/components/roles.vue'
import Goodslist from '@/components/goodslist.vue'
import Goodsadd from '@/components/goodsadd.vue'
import Cateparams from '@/components/cateparams.vue'
import Goodscate from '@/components/goodscate.vue'
import Order from '@/components/order.vue'




import {
  Message
} from 'element-ui';

Vue.use(Router)

const router = new Router({
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
      },
      {
        name: 'goods',
        path: '/goods',
        component: Goodslist
      },
      {
        name: 'goodsadd',
        path: '/goodsadd',
        component: Goodsadd
      },
      {
        name: 'orders',
        path: '/orders',
        component: Order
      },
      {
        name: 'params',
        path: '/params',
        component: Cateparams
      },
      {
        name: 'categories',
        path: '/categories',
        component: Goodscate
      },
      {
        name: 'roles',
        path: '/roles',
        component: Roles
      }
    ]
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next();
  } else {
    const token = localStorage.getItem("token");
    if (!token) {
      Message.warning("请先登录!");
      router.push({
        name: 'login'
      })
      return;
    }
    next();
  }
})
export default router;
