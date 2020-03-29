import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/app/inbox',
        name: 'Inbox',
        component: () => import('../views/home/Inbox.vue')
      },
      {
        path: '/app/alerts',
        name: 'Alerts',
        component: () => import('../views/home/Alerts.vue')
      },
      {
        path: '/app/statistics',
        name: 'Statistics',
        component: () => import('../views/home/StatisticsDetails.vue')
      }
      ,
      {
        path: '/app/manage-stocks',
        name: 'ManageStocks',
        component: () => import('../views/home/ManageStocks.vue')
      },
      {
        path: '/app/manage-sales',
        name: 'ManageSales',
        component: () => import('../views/home/ManageSales.vue')
      },
      {
        path: '/app/manage-taxes',
        name: 'ManageTaxes',
        component: () => import('../views/home/ManageTaxes.vue')
      },
      {
        path: '/app/manage-products',
        name: 'ManageProducts',
        component: () => import('../views/home/ManageProducts.vue')
      }
      ,
      {
        path: '/app/inventory',
        name: 'InventorySettings',
        component: () => import('../views/home/InventorySettings.vue')
      }
    ]
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
