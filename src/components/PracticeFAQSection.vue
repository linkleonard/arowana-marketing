<template>
<section :id="id">
  <div class="container intro">
    <p>Interested in paddling?</p>

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
      Make sure to bring plenty of water, and wear comfortable
      athletic clothing. We also recommend bringing sunglasses, a hat,
      and water shoes.  You may want to also bring a change of
      clothes, as you will most likely get wet.
    </p>
    <p>
      You don't need to bring your own paddle and PFD, although
      you are welcome to. This will be provided at the docks.
    </p>
  </div>
  <h2>FAQs</h2>
  <div class="container faqs">
    <ul>
      <li>
        <h3>How fit do I have to be?</h3>
        <p>
          Dragon boat is very accessible; we welcome people from all
          athletic backgrounds. Our team members are from various
          walks of life, with varying body builds. That said, the
          better shape you are in, the easier it will be to pick up.
        </p>

        <h3>Do I need my own gear?</h3>
        <p>
          Paddles and PFDs will be provided at practice, and at all of
          the race sites. You are welcome to bring your own though!
          Do note that dragon boat paddles are not the same as
          kayaking or canoe paddles.
        </p>

        <h3>What's practice like?</h3>
        <p>
          It depends on what part of the season it is. Generally, we
          have two kinds of practice sessions, depending on what part
          of the season and who shows up.
        </p>
        <p>
          The sessions will start with a short pep-talk explaining
          what the focus of the session will be. The warm-up will
          typically be a 10-15 minute piece of non-stop paddling at a
          moderate pace, followed up with the main drills of the day.
        </p>
        <h4>Technical Sessions</h4>
        <p>
          Technical sessions typically include drills designed to
          correct form and technique. There may be some endurance
          pieces added as well.
        </p>
        <h4>Race Preparation Sessions</h4>
        <p>
          Race prep sessions are held usually on Saturdays, with as
          much of the race crew for the upcoming races. These sessions
          focus on speed and endurance, depending on the experience of
          the paddlers available. Emphasis is placed on team cohesion,
          where we get used to paddling together as a crew and learn
          how to work with our teammates. These are the most intense
          of the sessions.
        </p>
      </li>
      <li>
        <h3>How safe is the boat? What happens if the boat flips?</h3>
        <p>
          Our boat has never capsized in the 14 years our crew has
          been around, so you're in good hands. You are required to
          wear a PFD, so even the event that it happens, you will be
          safe.
        </p>
      </li>
    </ul>
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
    text-shadow: $darken-text-shadow;
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
}

p {
    padding: 20px 40px;
    color: $image-text-color;
    max-width: 400px;
}

.faqs {
    background: transparent;

    p {
        margin: 0;
        padding: 10px;
    }
}

h3 {
    margin: 30px 0 10px 0;

    font-size: $font-size-large;
    color: $image-header-color;
}

h4 {
    margin: 20px 0 10px 0;

    font-size: $font-size-normal;
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
