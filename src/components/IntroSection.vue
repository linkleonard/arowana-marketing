<template>
<section :id="id">
  <div>
  </div>
</section>
</template>

<script>
export default {
  name: "IntroSection",
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  background: $darken-background-layer,
    center / cover url("../assets/background/2017-boston-race.jpg");
  width: 100%;
  height: 80vh;
}

</style>
