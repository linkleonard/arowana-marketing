<template>
<div id="app">
  <TopNavbar />
  <ScheduleSection />
  <AboutSection />
  <JoinUsSection />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopNavbar from './components/TopNavbar.vue'
import JoinUsSection from './components/JoinUsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ScheduleSection from './components/ScheduleSection.vue'

export default {
  name: 'app',
  components: {
      HelloWorld,
      TopNavbar,
      JoinUsSection,
      AboutSection,
      ScheduleSection,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
