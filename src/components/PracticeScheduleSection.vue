<template>
<section :id="id">
  <h2>Practice</h2>
  <div>
    <p>We have practice sessions on Tuesday, Saturday and Sunday.</p>
    <p class="footnote">Practices may be cancelled depending on inclement weather.</p>
  </div>
</section>
</template>

<script>
export default {
  name: 'PracticeScheduleSection',
  props: ["id"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

p {
    padding: 20px 40px;
}

div {
    background: $darken-background-layer, center / cover url("../assets/practice.jpg");
    border: 1px solid transparent;
    text-shadow: $darken-text-shadow;
}

h3 {
    margin: 20px 0 90px 0;
}

h4 {
    color: #cfcfcf;
    margin: 10px;
}

p {
    padding: 20px;
}

p:first-child {
    margin-top: 60px;
}

p:last-child {
    margin-bottom: 20px;
}
</style>
