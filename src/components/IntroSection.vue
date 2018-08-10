<template>
<section :id="id">
  <h2>Who We Are</h2>
  <div>
    <p>
      We are a group of friendly folks from different walks of life,
      with the goal of having fun together.
    </p>
  </div>
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

div {
  background: $darken-background-layer,
    center / cover url("../assets/whoweare.jpg");
  padding-top: 150px;
  padding-bottom: 50px;
}

p {
  @extend %image-section-text;
}
</style>
