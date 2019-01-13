<template>
<section :id="id">
  <h2>Practice</h2>
  <div>
    <p>Practice sessions are available 3 times a week.</p>
    <p>
      We do not have any fitness requirements. If you are interested,
      please join us for a session to see if dragon boat is the right
      sport for you!
    </p>
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
  padding-top: 50px;
  background: $darken-background-layer,
    center / cover
      url("../assets/background/2018-ny-practice-sunset.jpg");
}

p {
  @extend %image-section-text;
}
</style>
