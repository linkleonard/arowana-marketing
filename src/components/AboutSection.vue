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
  padding: 240px 40px 60px 40px;
  background: $darken-background-layer,
    top / cover
      url("https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21761727_10209559180960412_4046836709571286068_n.jpg?_nc_cat=0&oh=4c04362424115025e56813ba20e9ac76&oe=5B905D10");
  text-shadow: $darken-text-shadow;
}

h2 {
  background: $section-header-background;
}
</style>
