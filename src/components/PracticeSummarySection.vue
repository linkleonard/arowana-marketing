<template>
<section :id="id">
  <h2>Practice</h2>
  <div>
    <p>Practice sessions are available 3 times a week, pending weather conditions.</p>
    <p>We encourage people at all fitness levels to join us. If interested, you're welcome to join us for a session!</p>
    <router-link to="/practice">Learn More About Practice</router-link>
  </div>
</section>
</template>

<script>
import { formLink } from "../constants.js";

export default {
  name: "JoinUsSection",
  props: ["id"],
  data() {
    return {
      formLink
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  @extend %main-button;
}

div {
  padding: 20vh 0 10vh 0;
  background: $darken-background-layer,
    center / cover
      url("../assets/background/2018-ny-practice-sunset.jpg");
}

p {
  @extend %image-section-text;
}
</style>
