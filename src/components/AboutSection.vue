<template>
<section :id="id">
  <h2>Our Story</h2>
  <div>
    <p>Aut id officia voluptas aut quod blanditiis cum. Voluptatum voluptas ipsa sapiente dolor possimus. Adipisci placeat hic ullam quam.</p>
    <p>Animi enim excepturi dolorem cupiditate. Veniam nesciunt voluptas provident. Et ad consequatur eius qui cum id id. Exercitationem et qui consequatur quia nulla enim aut.</p>
    <p>Our goal: to be the best in the world.</p>
  </div>
</section>
</template>

<script>
export default {
  name: "About",
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  padding-top: 240px;
  padding-bottom: 60px;

  background: $darken-background-layer,
    top / cover
      url("../assets/background/2018-mercer-racesite.jpg");
}

p {
  @extend %image-section-text;
}
h2 {
  background: $section-header-background;
}
</style>
