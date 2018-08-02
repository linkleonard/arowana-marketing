<template>
<section>
  <h2>Upcoming Races</h2>
  <div>
    <h3>Baltimore</h3>
    <p>June 23, 2018</p>
    <h3>Montreal</h3>
    <p>July 7, 2018</p>
    <h3>New York</h3>
    <p>August 11, 2018</p>
    <h3>Hartford</h3>
    <p>August 18, 2018</p>
  </div>
</section>
</template>

<script>
export default {
    name: 'EventScheduleSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div {
    background: linear-gradient(to bottom, $darken-background, $darken-background), center / cover url("../assets/race.jpg");
    border: 1px solid transparent;
    padding: 50px;
    text-shadow: $dark-text-shadow 2px 2px 5px;
}

h3 {
    color: #cfcfcf;
    margin: 10px;
}

p {
    padding: 0;
    margin-top: 0;
}
</style>
