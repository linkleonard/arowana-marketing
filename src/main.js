import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LandingPage from './LandingPage.vue';
import PracticePage from './PracticePage.vue';
import Gallery from './components/Gallery.vue';


library.add(faBars, faFacebookSquare, faInstagram, faGithubAlt);

Vue.use(VueRouter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: App,
    children: [
      {
        path: '',
        component: LandingPage,
      },
      {
        path: '/practice',
        component: PracticePage,
      },
      {
        path: '/gallery',
        component: Gallery,
      },
    ]
  },
];


const router = new VueRouter({
  routes,
})

new Vue({
  router,
}).$mount('#app');
