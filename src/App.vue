<template>
<div>
  <TopNavbar :routes="routes" />
  <router-view></router-view>
  <SiteFooter />
</div>
</template>

<script>
import TopNavbar from './components/TopNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'app',
  components: {
    TopNavbar,
    SiteFooter,
  },
  data() {
    return {
      routes: [
        {
          "href": "section-who-we-are",
          "label": "Who We Are",
        },
        {
          "href": "section-practice",
          "label": "Practice",
        },
        {
          "href": "section-races",
          "label": "Races",
        },
        {
          "href": "section-about",
          "label": "About Us",
        },
        {
          "href": "section-join",
          "label": "Join Us",
        },
      ],
    };
  },
}
</script>

<style>

body {
    background: #202020;
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

h2 {
    color: #ffb07c;
}

h3 {
    color: #FF9652;
}

p {
    color: white;
    font-weight: 600;
}

</style>
