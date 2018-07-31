<template>
<div id="app">
  <TopNavbar />
  <Gallery />
  <IntroSection />
  <PracticeScheduleSection />
  <EventScheduleSection />
  <AboutSection />
  <JoinUsSection />
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
    IntroSection,
    TopNavbar,
    Gallery,
    JoinUsSection,
    AboutSection,
    PracticeScheduleSection,
    EventScheduleSection,
  }
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
