<template>
<section :id="id">
  <h2>Upcoming Races</h2>
  <div class="container">
    <div v-for="race in races" :key="race.city" class="race">
      <h3>{{ race.city }}</h3>
      <p>{{ race.date }}</p>
      <img :src="race.image" />
    </div>
  </div>
</section>
</template>

<script>
import hartford from "../assets/cities/hartford.jpg";
import baltimore from "../assets/cities/baltimore.jpg";
import montreal from "../assets/cities/montreal.jpg";
import newyork from "../assets/cities/newyork.jpg";

export default {
  name: "EventScheduleSection",
  props: ["id"],
  data() {
    return {
      races: [
        {
          city: "Baltimore",
          date: "June 23, 2018",
          image: baltimore
        },
        {
          city: "Montreal",
          date: "July 7, 2018",
          image: montreal
        },
        {
          city: "New York",
          date: "August 11, 2018",
          image: newyork
        },
        {
          city: "Hartford",
          date: "August 18, 2018",
          image: hartford
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  padding: 1px 0;
  background: $section-background;
}

.race {
  position: relative;
  margin: 20px 0;
  padding: 50px;
  text-shadow: $darken-text-shadow;
  z-index: 0;

  &::after {
    @extend %maximize;
    position: absolute;
    z-index: -1;

    content: " ";
    background: $darken-background-more;
  }
}

h3 {
  color: $image-header-color;
  margin: 5px;
}

p {
  padding: 0;
  margin-top: 0;
}

img {
  @extend %maximize;

  position: absolute;
  z-index: -2;

  object-fit: cover;
}
</style>
