<template>
<section :id="id">
  <h2>Upcoming Races</h2>
  <div class="container">
    <div v-for="race in races" :key="race.city" class="race">
      <h3>{{ race.city }}</h3>
      <p>{{ race.date }}</p>
      <img :src="race.image" :style="`object-position: ${race.objectPosition}`"/>
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
          date: "June 22, 2019",
          image: baltimore,
          objectPosition: 'center',
        },
        {
          city: "Montreal",
          date: "July 6, 2019",
          image: montreal,
          objectPosition: 'center',
        },
        {
          city: "New York",
          date: "August 3, 2019",
          image: newyork,
          objectPosition: '50% 25%',
        },
        {
          city: "Hartford",
          date: "August 17, 2019",
          image: hartford,
          objectPosition: '50% 25%',
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
  margin: 5px 0;
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
