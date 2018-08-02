<template>
<section :id="id">
  <div class="container intro">
    <p>Have what it takes to paddle?</p>

    <p>
      Whether you're a seasoned athlete, or new to team sports, you are
      welcome to join us at practice to see if dragon boat is for you.
    </p>

    <a :href="formLink">Sign up</a>
  </div>
  <h2>Practice Schedule</h2>
  <div class="container">
    <div class="session" v-for="session in sessions" :key="session.day">
      <h3>{{ session.day }}</h3>
      <ul>
        <li v-for="slot in session.slots" :key="slot">{{ slot }}</li>
      </ul>
    </div>
  </div>
  <h2>Your First Practice</h2>
  <div class="container">
    <p>
      Please show up 15 minutes before practice starts.
      Lin will provide a short introduction to the sport, where the stroke, basic form and terminology will be introduced.
      You will also get a chance to familiarize yourself the stroke while on the docks, before we launch.
    </p>
    <p>
      Make sure to bring water, and wear comfortable athletic wear.
      We also recommended bringing sunglasses, a hat, and water shoes.
      You may want to also bring a change of clothes, as you will most likely get wet.
    </p>
    <p class="footnote">Practices may be cancelled depending on inclement weather.</p>
  </div>
</section>
</template>

<script>
import { formLink } from '../constants.js';

export default {
  name: 'PracticeScheduleSection',
  props: ["id"],
  data() {
    return {
      formLink,
      sessions: [
        {
          day: "Saturday",
          slots: [
            "09:00 AM - 10:30 AM",
            "10:30 AM - 12:00 PM",
          ],
        },
        {
          day: "Sunday",
          slots: [
            "09:00 AM - 10:30 AM",
          ],
        },
        {
          day: "Tuesday",
          slots: [
            "06:00 PM - 7:30 PM",
          ],
        },
      ]
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div.container {
    background: $darken-background-layer, center / cover url("../assets/practice.jpg");
    border: 1px solid transparent;
    text-shadow: $darken-text-shadow;
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
}

p {
    padding: 20px 40px;
    color: $image-text-color;
}

.intro p {
    max-width: 400px;
}

h3 {
    font-size: 22.5px;
    margin: 10px;
    color:  $image-header-color;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0 30px 0;
}

li {
    color: $image-text-color;
    font-size: 15x;
    font-weight: 600;
}

</style>
