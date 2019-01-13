<template>
<section :id="id">
  <h2>Who We Are</h2>
  <div>
    <p>
      Hard Work
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
    center / cover url("../assets/background/2018-ny-postseason.jpg");
  padding-top: 150px;
  padding-bottom: 50px;
}

p {
  @extend %image-section-text;
}
</style>
