<template>
<section :id="id">
  <h2>Who We Are</h2>
  <p>We are a group of friendly folks from different walks of life, with the goal of having fun together.</p>
</section>
</template>

<script>
export default {
  name: "IntroSection",
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h2 {
  margin: 20px;
}

p {
  @extend %image-section-text;

  background: $darken-background-layer,
    center / cover url("../assets/whoweare.jpg");
  padding-top: 150px;
  padding-bottom: 50px;
}
</style>
