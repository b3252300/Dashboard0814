import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import createRouteGuard from "./guard";

import HomeView from '../views/HomeView.vue'
// import MainHome from '../views/MainHome.vue'
import LoginView from '../views/LoginView.vue'
import SelectWardView from '../views/SelectWardView.vue'

import BedStatusView from '../views/BedStatusView.vue'
import CareTeamView from '../views/CareTeamView.vue'
import ProcedureView from '../views/ProcedureView.vue'
import AlertView from '../views/AlertView.vue'
import Catheter from '../views/CatheterView.vue'
import CriticalView from '../views/CriticalView.vue'
import CallView from '../views/CallView.vue'
import DirectoryView from '../views/DirectoryView.vue'
import MealOrderView from '../views/MealOrderView.vue'
import BadgeView from '../views/BadgeView.vue'
import BloodView from '@/views/BloodView.vue'
import Error from '@/views/ErrorView.vue'
import RWD from '../layout/RWD.vue';
import LoginLayout from '../layout/LoginLayout.vue';
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'layout',
      component: RWD,
      redirect: '/home',
      children: [
        {
          path: '/:pathMatch(.*)',
          redirect: '/404',
          meta: {
            title: '404',
            hidden: true,
            requireAuth: false
          }
        },
        {
          path: '/404',
          name: 'Error404',
          component: Error,
          meta: {
            // hidden: true,
            title: '404'
          }
        },
        {
          path: '/home',
          name: 'home',
          component: HomeView,
          meta: { requireAuth: true },
        },
        {
          path: '/bedStatus',
          name: 'bedstatus',
          component: BedStatusView,
          meta: { requireAuth: true },
        },
        {
          path: '/careteam',
          name: 'careteam',
          component: CareTeamView,
          meta: { requireAuth: true },
        },
        {
          path: '/procedure',
          name: 'Procedure',
          component: ProcedureView,
          meta: { requireAuth: true },
        },
        {
          path: '/alert',
          name: 'Alert',
          component: AlertView,
          meta: { requireAuth: true },
        },
        {
          path: '/catheter',
          name: 'Catheter',
          component: Catheter,
          meta: { requireAuth: true },
        },
        {
          path: '/blood',
          name: 'Blood',
          component: BloodView,
          meta: { requireAuth: true },
        },
        {
          path: '/critical',
          name: 'Critical',
          component: CriticalView,
          meta: { requireAuth: true },
        },
        {
          path: '/call',
          name: 'OnCall',
          component: CallView,
          meta: { requireAuth: true },
        },
        {
          path: '/directory',
          name: 'Directory',
          component: DirectoryView,
          meta: { requireAuth: true },
        },
        {
          path: '/mealOrder',
          name: 'MealOrder',
          component: MealOrderView,
          meta: { requireAuth: true },
        },
        {
          path: '/badge',
          name: 'Badge',
          component: BadgeView,
          meta: { requireAuth: true },
        },
      ]
    },
    {
      path: '/loginLayout',
      name: 'LoginLayout',
      component: LoginLayout,
      redirect: '/login',
      meta: { requireAuth: false },
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView,
          meta: { requireAuth: false },
        },
        {
          path: '/selectWardView',
          name: 'selectWard',
          component: SelectWardView,
          meta: { requireAuth: true },
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashboardView,
          meta: { requireAuth: false },
        }
      ]
    },

  ]
})

createRouteGuard(router);

export default router
