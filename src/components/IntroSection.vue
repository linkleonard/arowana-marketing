<template>
<section>
  <h2>Who we are</h2>
  <p>We are a group of friendly folks from different walks of life, with the goal of having fun together.</p>
</section>
</template>

<script>
export default {
    name: 'IntroSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    margin: 20px;
}

p {
    background: center / cover url("../assets/whoweare.jpg");
    padding: 150px 20px 50px 20px;
    align-items: center;

    font-weight: 600;
    color: white;
}

</style>
