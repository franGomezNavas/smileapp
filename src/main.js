import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'
import Home from './components/Home'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import Register from './components/Register'
import Novio from './components/Novio'
import Album from './components/Album'
import Invitado from './components/Invitado'
import Upfile from './components/Upfile'
import VueLightbox from 'vue-lightbox'
import {auth} from './firebase'
import {notif} from './firebase'

const routes = [
  { path: '/', name:"principal", component: Home },
  { path: '/login', name:"login", component: Login },
  { path: '/register', name:"register", component: Register },
  { path: '/novio', name:"novio", component: Novio },
  { path: '/album', name:"album", component: Album },
  { path: '/invitado', name:"invitado", component: Invitado },
  { path: '/upfile', name:"upfile", component: Upfile },
  { path: '/reset-password', name:"reset-password", component: ResetPassword }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

router.beforeEach((to,from,next) => {
  let currentUser = auth.currentUser;
  let isLogin = to.matched.some( record => record.name === "login");
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("login");
  }else if(currentUser && isLogin){
    next("admin");
  }else{
    next();
  }
})

Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.component("Lightbox",VueLightbox)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
