<template>
<section :id="id">
  <h2>FAQs</h2>
  <ul>
    <li>
      <h3>How fit do I have to be?</h3>
      <p>
        Dragon boat is very accessible; we welcome people from all
        athletic backgrounds. Our team members are from various
        walks of life, with varying body builds. That said, the
        better shape you are in, the easier it will be to pick up.
      </p>
    </li>
    <li>
      <h3>Do I need my own gear?</h3>
      <p>
        Paddles and PFDs will be provided at practice, and at all of
        the race sites. You are welcome to bring your own though!
        Do note that dragon boat paddles are not the same as
        kayaking or canoe paddles.
      </p>
    </li>
    <li>
      <h3>How safe is the boat? What happens if the boat flips?</h3>
      <p>
        Our boat has never capsized in the 14 years our crew has been
        around, so you're in good hands. You are required to wear a
        PFD, so even the event that it happens, you will be safe.
      </p>
      <p>
        In case of choppy water conditions, pay close attention to the
        steerer's instructions to help stabilize the boat.
      </p>
    </li>
  </ul>
  <p>Have more questions? <a :href="formLink">Please contact us</a>.</p>
</section>
</template>

<script>
import { formLink } from "../constants.js";

export default {
  name: "PracticeFAQs",
  props: ["id"],
  data() {
    return {
      formLink
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

p {
  padding: 20px 40px;
  color: $image-text-color;
  margin: 0;
  padding: 10px;
  max-width: 400px;
}

h2 {
  background: $section-header-background;
  margin: 0;
  padding: 20px;
}

h3 {
  margin: 10px;

  font-size: $font-size-large;
  color: $image-header-color;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  flex-flow: column;
  align-items: center;
  color: $image-text-color;
  font-size: $font-size-normal;
  font-weight: 600;

  padding: 20px;
  margin: 5px 0;

  background: $list-alternating-background-odd;

  &:nth-child(2n) {
    background: $list-alternating-background-even;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

section {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  background: $section-background;

  > p {
    margin: auto;
  }
}
</style>
