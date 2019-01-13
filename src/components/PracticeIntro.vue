<template>
<section :id="id">
  <p>Interested in paddling?</p>

  <p>
    Whether you're a seasoned athlete, or new to team sports, you are
    welcome to join us at practice to see if dragon boat is for you.
  </p>

  <a :href="formLink">Sign up for practice</a>
</section>
</template>

<script>
import { formLink } from "../constants.js";

export default {
  name: "PracticeIntro",
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
section {
  background: $darken-background-layer,
    center / cover url("../assets/background/2016-ny-race-group.jpg");
  text-shadow: $darken-text-shadow;
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

p {
  @extend %image-section-text;
}

a {
  @extend %main-button;
}
</style>
