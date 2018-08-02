<template>
<section :id="id">
  <h2>Join Us</h2>
  <div>
    <p>Like water sports?</p>
    <p>Want to be part of a team of like-minded people?</p>
    <p>Join us at practice!</p>
    <a :href="formLink">Sign up</a>
  </div>
</section>
</template>

<script>
import { formLink } from '../constants.js';

export default {
  name: 'JoinUsSection',
  props: ["id"],
  data() {
    return {
      formLink,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
    @extend %main-button;
}

div {
    padding-top: 50px;
    background: $darken-background-layer, top / cover url("https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21761727_10209559180960412_4046836709571286068_n.jpg?_nc_cat=0&oh=4c04362424115025e56813ba20e9ac76&oe=5B905D10");
    text-shadow: $darken-text-shadow;
}
</style>
