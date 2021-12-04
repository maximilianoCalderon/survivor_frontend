import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'
import ForgotPassword from '../views/ForgotPassword.vue';
import ChangePassword from '../views/ChangePassword.vue';
import Main from '../views/Main.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: EmailConfirmation
  },
  {
    path: '/password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/password/:username',
    name: 'ChangePassword',
    props: true,
    component: ChangePassword
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
