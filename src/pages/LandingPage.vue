<template>
<div>
  <section
    v-for="route in routes"
    :key="route.href"
    :is="route.component"
    :id="route.href"
    />
</div>
</template>

<script>
import IntroSection from "../components/IntroSection.vue";
import JoinUsSection from "../components/JoinUsSection.vue";
import AboutSection from "../components/AboutSection.vue";
import EventScheduleSection from "../components/EventScheduleSection.vue";

export default {
  name: "app",
  data() {
    return {
      routes: [
        {
          href: "section-who-we-are",
          label: "Who We Are",
          component: IntroSection
        },
        {
          href: "section-about",
          label: "About Us",
          component: AboutSection
        },
        {
          href: "section-races",
          label: "Races",
          component: EventScheduleSection
        },
        {
          href: "section-join",
          label: "Join Us",
          component: JoinUsSection
        }
      ]
    };
  }
};
</script>

<style>
</style>
