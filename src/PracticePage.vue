<template>
<section :id="id">
  <PracticeIntro />
  <PracticeSchedule />
  <PracticeFirstSession />
  <PracticeFAQs />
</section>
</template>

<script>
import PracticeIntro from './components/PracticeIntro.vue';
import PracticeSchedule from './components/PracticeSchedule.vue';
import PracticeFirstSession from './components/PracticeFirstSession.vue';
import PracticeFAQs from './components/PracticeFAQs.vue';

export default {
  name: 'PracticeScheduleSection',
  components: {
    PracticeIntro,
    PracticeSchedule,
    PracticeFirstSession,
    PracticeFAQs,
  },
  props: ["id"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
