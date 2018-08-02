import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LandingPage from './LandingPage.vue';
import Gallery from './components/Gallery.vue';
import PracticeScheduleSection from './components/PracticeScheduleSection.vue'

library.add(faFacebookSquare, faInstagram, faGithubAlt);

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
        component: PracticeScheduleSection,
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
