import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Passageiro-dados',
    name: 'Passageiro-dados',
    component: () => import(/* webpackChunkName: "Passageiro-dados" */ '../views/PassengerData.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
