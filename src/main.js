import Vue from 'vue'
import App from './App.vue'
import Colored from './directives/colored'
import VueRouter from 'vue-router'
import router from './router'
import store from './store/index.js'
import VueResource from 'vue-resource'
// import axios from 'axios'
import ResultScreen from "./components/Project/ResultScreen"
import StartScreen from "./components/Project/StartScreen"
import Message from "./components/Project/Message"
import Question from "./components/Project/Question"
// import UserProfile from "./components/UserProfile"
import { BootstrapVue } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(VueRouter)

// Vue.use(axios)
// Vue.prototype.$http = axios;

Vue.use(VueResource)
// Vue.http.options.root = 'https://jsonplaceholder.typicode.com/'
// Vue.http.options.root = 'https://swapi.co/api/'
Vue.http.options.root = 'https://swapi.co/api/'



// Global components
Vue.component('ResultScreen', ResultScreen)
Vue.component('StartScreen', StartScreen)
Vue.component('Message', Message)
Vue.component('Question', Question)

// Directives
Vue.directive('colored', Colored)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')
