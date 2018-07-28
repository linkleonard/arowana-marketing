<template>
<section>
  <h2>Events</h2>
  <div>
    <section class="practice">
      <h3>Practice</h3>
      <p>We have practice sessions on Tuesday, Saturday and Sunday.</p>
      <p class="footnote">Practices may be cancelled depending on inclement weather.</p>
    </section>
    <section class="race">
      <h3>Upcoming Races</h3>
      <h4>Baltimore</h4>
      <p>June 23, 2018</p>
      <h4>Montreal</h4>
      <p>July 7, 2018</p>
      <h4>New York</h4>
      <p>August 11, 2018</p>
      <h4>Hartford</h4>
      <p>August 18, 2018</p>
    </section>
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
div {
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
}

section section {
    flex-basis: 100%;
}

p {
    padding: 20px 40px;
}

.practice {
    background: center / cover url("../assets/practice.jpg");
}

.race {
    background: center / cover url("../assets/race.jpg");
}

h3 {
    margin: 20px 0 90px 0;
}

h4 {
    color: #cfcfcf;
    margin: 10px;
}

.race p {
    padding: 0;
    margin-top: 0;
}

.race p:last-child {
    margin-bottom: 50px;
}
</style>
