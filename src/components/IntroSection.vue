<template>
<section :id="id">
  <h2>Who We Are</h2>
  <p>We are a group of friendly folks from different walks of life, with the goal of having fun together.</p>
</section>
</template>

<script>
export default {
  name: "IntroSection",
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  margin: 20px;
}

p {
  background: $darken-background-layer,
    center / cover url("../assets/whoweare.jpg");
  padding: 150px 20px 50px 20px;
  align-items: center;

  font-weight: 600;
  color: white;
  text-shadow: $darken-text-shadow;
}
</style>
