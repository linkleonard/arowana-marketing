<template>
<section>
  <h2>Events</h2>
  <div>
    <div class="practice">
      <h3>Practice</h3>
      <p>We have practice sessions on Tuesday, Saturday and Sunday.</p>
      <p class="footnote">Practices may be cancelled depending on inclement weather.</p>
    </div>
    <div class="race">
      <h3>Upcoming Races</h3>
      <h4>Baltimore</h4>
      <p>June 23, 2018</p>
      <h4>Montreal</h4>
      <p>July 7, 2018</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
    name: 'ScheduleSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div > div {
    padding: 20px;
}
div.practice {
    background: center / cover url("../assets/practice.jpg");
}

div.race {
    background: center / cover url("../assets/race.jpg");
}

h3 {
    margin: 20px 0 40px 0;
}
</style>
