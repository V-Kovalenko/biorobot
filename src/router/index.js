import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomePage, name: 'HomePage'}
  ]
})

export default router