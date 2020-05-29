// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import { dirname } from 'path';
import customers from './components/customers'
import about from './components/about'
import add from './components/add'
import customerdetail from "./components/customerdetail"
import edit from './components/edit'
import sensordata from './components/sensordata'
import covid from './components/covid'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: "magenta",
  failedColor: 'red',
  height: '20px'
})

Vue.use(VueResouce)
Vue.use(VueRouter)

const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:'/', name:'home',component:covid},
    {path:'/about',name:"about",component:about},
    {path:'/add',name:"add",component:add},
    {path:'/customer/:id',component:customerdetail,props:true},
    {path:'/edit/:id',component:edit,props:true},
    {path:'/sensordata',name:"sensordata",component:sensordata},
    {path:'/covid',name:"covid",component:covid},
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
new Vue({
  router,
  template: `
  <div id= 'app'>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Global Covid Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item"><router-link to="/covid"> <i class="fa fa-home fa-2x" aria-hidden="true"></i> Home</router-link></li><br>
    <li nav-item><router-link to="/about"><i class="fa fa-address-book fa-2x" aria-hidden="true"></i>  About</router-link></li>
     
    </ul>
  </div>
</nav>
<router-view></router-view>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
</div>
<br>
  `
}).$mount('#app')
