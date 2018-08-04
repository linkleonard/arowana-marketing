<template>
<section :id="id">
  <PracticeIntro />
  <PracticeSchedule />
  <PracticeFirstSession />
</section>
</template>

<script>
import PracticeIntro from "../components/PracticeIntro.vue";
import PracticeSchedule from "../components/PracticeSchedule.vue";
import PracticeFirstSession from "../components/PracticeFirstSession.vue";

export default {
  name: "PracticeScheduleSection",
  components: {
    PracticeIntro,
    PracticeSchedule,
    PracticeFirstSession
  },
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
