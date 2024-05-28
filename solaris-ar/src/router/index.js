import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import MainView from '../views/MainView.vue'
import MapConsoleView from '../views/MapConsoleView.vue'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/main',
    name: 'Main',
    component: MainView
  },
  {
    path: '/mapconsole',
    name: 'MapConsole',
    component: MapConsoleView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
