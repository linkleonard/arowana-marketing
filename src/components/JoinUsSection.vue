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
<style scoped>
h2 {
    margin-bottom: 50px;
}

a {
    display: inline-block;
    text-decoration: none;
    border: 1px solid #75482a;
    background: #75482a;
    color: white;
    border-radius: 10px;
    padding: 10px 30px;
    margin: 30px 50px;
}
</style>
