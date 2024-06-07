// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeS.vue';
import Register from '../components/RegisterS.vue';
import Login from '../components/LoginS.vue';
import Calculator from '../components/CalculatorS.vue';
import Logout from '../components/LogoutS.vue';
import store from '../store';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/calculator', name: 'Calculator', component: Calculator, meta: { requiresAuth: true } },
  { path: '/logout', name: 'Logout', component: Logout }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.getters.isAuthenticated;

  if (requiresAuth && !isAuthenticated) {
    const notification = document.createElement('div');
    notification.textContent = 'Please log in first';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgb(0, 0, 0);
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 9999;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
      next('/login');
    }, 1000);
  } else {
    next();
  }
});


export default router;
