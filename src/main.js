import Vue from 'vue'
import VueRouter from 'vue-router'
import { apolloProvider } from './configuration/apollo'
import VueApollo from 'vue-apollo'

Vue.use(VueRouter)
Vue.use(VueApollo)

Vue.config.productionTip = false

import App from './App.vue'
import Apollo from './components/Apollo.vue'

export const routes = [
  { path: '/', name: 'home', component: App, titulo: 'Home', menu: true },
  { path: '/apollo', name: 'apollo', component: Apollo, titulo: 'Apollo', menu: true },
  { path: '*', name: 'home', component: App, titulo: 'Home' },
]

const router = new VueRouter({
  routes
})

new Vue({
	el: '#app',
  router,
  apolloProvider,
  components: { App },
}).$mount('#app')
