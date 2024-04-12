import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes = [
  // {
  //   path: '/',
  //   redirect: '/tabs/tab1'
  // },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      // {
      //   path: '',
      //   redirect: '/tabs/tab1'
      // },
      {
        path: 'tab1',
        name: 'Tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        name: 'Tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        name: 'Tab3',
        component: () => import('@/views/Tab3Page.vue')
      }, 
      {
        path: 'tab4',
        name: 'Tab4',
        component: () => import('@/views/Tab4Page.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Auth/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/Auth/Register.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
