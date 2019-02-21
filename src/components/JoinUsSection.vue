<template>
<section :id="id">
  <h2>Join Us</h2>
  <div class="main">
    <p>Want to find out if dragonboat paddling is right for you?</p>
    <p>Do you like water sports and want to join an ambitious team?</p>

    <div class="links">
      <a :href="formLink">Contact Us</a>
      <router-link to="/practice">Learn More About Practice</router-link>
    </div>
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
  margin: 5px;
  @extend %main-button;
}

div.main {
  padding: 20vh 10vw 5vh 10vw;
  background: $darken-background-layer,
    center / cover
      url("../assets/background/2018-ny-postseason.jpg");
}

div.links {
  margin: 5vh 5vw
}

h3, p {
  text-shadow: $darken-text-shadow;
}
</style>
