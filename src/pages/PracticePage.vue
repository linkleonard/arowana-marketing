<template>
<section :id="id">
  <PracticeIntro />
  <PracticeSchedule />
  <PracticeFirstSession />
  <PracticeExpectations />
  <p>
    If you have any additional questions, please check out
    our <router-link to="/faqs">FAQs page</router-link>.
  </p>
</section>
</template>

<script>
import PracticeIntro from "../components/PracticeIntro.vue";
import PracticeSchedule from "../components/PracticeSchedule.vue";
import PracticeFirstSession from "../components/PracticeFirstSession.vue";
import PracticeExpectations from "../components/PracticeExpectations.vue";

export default {
  name: "PracticeScheduleSection",
  components: {
    PracticeIntro,
    PracticeSchedule,
    PracticeFirstSession,
    PracticeExpectations,
  },
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
