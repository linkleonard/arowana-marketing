<template>
<section :id="id">
  <p>Interested in paddling?</p>

  <p>
    Whether you're a seasoned athlete, or new to team sports, you are
    welcome to join us at practice to see if dragon boat is for you.
  </p>

  <a :href="formLink">Sign up</a>
</section>
</template>

<script>
import { formLink } from '../constants.js';

export default {
  name: 'PracticeIntro',
  props: ["id"],
  data() {
    return {
      formLink,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

section {
    background: $darken-background-layer, center / cover url("../assets/practice.jpg");
    text-shadow: $darken-text-shadow;
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
}

p {
    padding: 20px 40px;
    color: $image-text-color;
    max-width: 400px;
}

h3 {
    margin: 30px 0 10px 0;

    font-size: $font-size-large;
    color: $image-header-color;
}

a {
    @extend %main-button;
}

</style>
