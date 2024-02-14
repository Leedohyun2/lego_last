import Vue from 'vue'
import VueRouter from 'vue-router'
import lego_main from '../components/lego_main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:  lego_main
  },
  {
    path: '/lego_shop_main',
    name: 'lego_shop_main',
    component: () => import('../components/lego_shop_main.vue')
  },
  {
    path: '/shop1',
    name: 'shop1',
    component: () => import('../components/lego_shop_comp/shop_1.vue')
  },
  {
    path: '/shop1_modal',
    name: 'shop1_modal',
    component: () => import('../components/lego_shop_comp/shop_1_modal.vue')
  },
  {
    path: '/shop5',
    name: 'shop5',
    component: () => import('../components/lego_shop_comp/shop_5.vue')
  },
  {
    path: '/shop_1_explanation',
    name: 'shop_1_explanation',
    component: () => import('../components/lego_shop_comp/shop_1_explanation.vue')
  },
  {
    path: '/shopping_basket',
    name: 'shopping_basket',
    component: () => import('../components/lego_shop_comp/shopping_basket.vue')
  },
  {
    path: '/login_main',
    name: 'login_main',
    component: () => import('../components/login_main.vue')
  },
  {
    path: '/lego_brand_main',
    name: 'lego_brand_main',
    component: () => import('../components/lego_brand_comp/lego_brand_main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
