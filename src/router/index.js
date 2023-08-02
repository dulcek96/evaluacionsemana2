import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
  path: '/',
  redirect: '/registro',
},
  {
    path: '/contenido',
    component: () => import('../views/ContenidoView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/RegistroView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

