<template>
<section>
  <h2>Who we are</h2>
  <p>We are a group of friendly folks from different walks of life, with the goal of having fun together.</p>
</section>
</template>

<script>
import logo from '../assets/logo.jpg';

export default {
    name: 'IntroSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    background: center / cover url("../assets/whoweare.jpg");
    padding: 10px 20px;
    align-items: center;
}

h2 {
    margin: 0 0 120px 0;
}

</style>
