<template>
<section :id="id">
  <h2>Join Us</h2>
  <p>Like water sports?</p>
  <p>Want to be part of a team of like-minded people?</p>
  <p>Join us at practice!</p>
  <a :href="formLink">Sign up</a>
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
h2 {
    margin-bottom: 50px;
}

a {
    @extend %main-button;
}
</style>
