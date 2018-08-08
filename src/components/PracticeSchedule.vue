<template>
<section :id="id">
  <h2>Practice Schedule</h2>
  <div class="container">
    <div class="session" v-for="session in sessions" :key="session.day">
      <h3>{{ session.day }}</h3>
      <ul>
        <li v-for="slot in session.slots" :key="slot">{{ slot }}</li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
import { formLink } from "../constants.js";

export default {
  name: "PracticeScheduleSection",
  props: ["id"],
  data() {
    return {
      formLink,
      sessions: [
        {
          day: "Saturday",
          slots: ["09:00 AM - 10:30 AM", "10:30 AM - 12:00 PM"]
        },
        {
          day: "Sunday",
          slots: ["09:00 AM - 10:30 AM"]
        },
        {
          day: "Tuesday",
          slots: ["06:00 PM - 7:30 PM"]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div.container {
  background: $darken-background-layer,
    center / cover url("../assets/practice.jpg");
  text-shadow: $darken-text-shadow;
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

p {
  @extend %image-section-text;
}

h3 {
  margin: 30px 0 10px 0;

  font-size: $font-size-large;
  color: $image-header-color;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 0 30px 0;
}

li {
  display: flex;
  flex-flow: column;
  align-items: center;
  color: $image-text-color;
  font-size: $font-size-normal;
  font-weight: 600;
}

a {
  @extend %main-button;
}
</style>
