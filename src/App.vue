<template>
<div id="app">
  <TopNavbar :routes="routes" />
  <section
    v-for="route in routes"
    :key="route.href"
    :is="route.component"
    :id="route.href"
  />
</div>
</template>

<script>
import TopNavbar from './components/TopNavbar.vue'
import IntroSection from './components/IntroSection.vue'
import JoinUsSection from './components/JoinUsSection.vue'
import AboutSection from './components/AboutSection.vue'
import Gallery from './components/Gallery.vue'
import PracticeScheduleSection from './components/PracticeScheduleSection.vue'
import EventScheduleSection from './components/EventScheduleSection.vue'

export default {
  name: 'app',
  components: {
    TopNavbar,
  },
  data() {
    return {
      routes: [
        {
          "href": "section-who-we-are",
          "label": "Who We Are",
          "component": IntroSection,
        },
        {
          "href": "section-practice",
          "label": "Practice",
          "component": PracticeScheduleSection,
        },
        {
          "href": "section-races",
          "label": "Races",
          "component": EventScheduleSection,
        },
        {
          "href": "section-about",
          "label": "About Us",
          "component": AboutSection,
        },
        {
          "href": "section-gallery",
          "label": "Gallery",
          "component": Gallery,
        },

        {
          "href": "section-join",
          "label": "Join Us",
          "component": JoinUsSection,
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
