<template>
<section :id="id">
  <h2>Our Story</h2>
  <div>
    <p>
      Founded on the concrete streets of NYC,
      our team continues to expand out of friendship,
      collaboration, and hard work.
    </p>
    <p>Our goal is to help each other grow, both as paddlers and as people.</p>
  </div>
</section>
</template>

<script>
export default {
  name: "About",
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  padding-top: 240px;
  padding-bottom: 120px;

  background: $darken-background-layer,
    center 65% / cover
      url("../assets/background/2018-mercer-racesite.jpg");
}

p {
  @extend %image-section-text;
}
h2 {
  background: $section-header-background;
}
</style>
