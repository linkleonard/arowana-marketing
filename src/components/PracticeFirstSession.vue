<template>
<section :id="id">
  <h2>Your First Practice</h2>
  <div>
    <p>
      Please show up 15 minutes before practice starts.
      Lin will provide a short introduction to the sport, where the stroke, basic form and terminology will be introduced.
      You will also get a chance to familiarize yourself the stroke while on the docks, before we launch.
    </p>
    <p>
      Make sure to bring plenty of water, and wear comfortable
      athletic clothing. We also recommend bringing sunglasses, a hat,
      and water shoes.  You may want to also bring a change of
      clothes, as you will most likely get wet.
    </p>
    <p>
      You don't need to bring your own paddle and PFD, although
      you are welcome to. This will be provided at the docks.
    </p>
    <p>If you have any additional questions, please check out our <router-link to="/faqs">FAQs page</router-link>.</p>
  </div>
</section>
</template>

<script>
export default {
  name: "PracticeFirstSession",
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  background: $darken-background-layer,
    center / cover url("../assets/practice.jpg");
  text-shadow: $darken-text-shadow;
  padding: 40px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

p {
  @extend %image-section-text;

  padding: 20px;
  margin: 0;

}
</style>
