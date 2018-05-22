<template>
<div id="app">
  <TopNavbar />
  <IntroSection />
  <ScheduleSection />
  <AboutSection />
  <JoinUsSection />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopNavbar from './components/TopNavbar.vue'
import IntroSection from './components/IntroSection.vue'
import JoinUsSection from './components/JoinUsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ScheduleSection from './components/ScheduleSection.vue'

export default {
    name: 'app',
    components: {
        IntroSection,
        HelloWorld,
        TopNavbar,
        JoinUsSection,
        AboutSection,
        ScheduleSection,
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

</style>
