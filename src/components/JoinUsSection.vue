<template>
<section :id="id">
  <h2>Join Us</h2>
  <div>
    <p>Like water sports?</p>
    <p>Want to be part of a team of like-minded people?</p>
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
    top / cover
      url("../assets/background/2018-ny-postseason.jpg");
}

h3, p {
  text-shadow: $darken-text-shadow;
}
</style>
