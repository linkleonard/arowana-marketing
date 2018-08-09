<template>
<section :id="id">
  <h2>What's practice like?</h2>
  <div>
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
  </div>
  <h3>Technical Sessions</h3>
  <div>
    <p>
      Technical sessions typically include drills designed to correct
      form and technique. We'll break down the various components that
      make up the dragonboat stroke.
    </p>
    <p>
      After the technical work is done, there may be some endurance
      pieces added as well. We may do several 3 minute paddling
      pieces. The goal here is to reenforce the technical work that
      was just done.
    </p>
  </div>
  <h3>Race Preparation Sessions</h3>
  <div>
    <p>
      These are the most intense of the sessions. Race prep sessions
      are held usually on Saturdays, with as much of the race crew for
      the upcoming races. These sessions focus on speed and endurance,
      depending on the experience of the paddlers available. They may
      also involve race simulations of the events that we are
      participating in.
    </p>
    <p>
      Emphasis is placed on team cohesion, where we get used to
      paddling together as a crew. We learn how to read cues from
      nearby teammates, as well as identify any necessary seating,
      timing adjustments that need to be made.
    </p>
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
  padding: 0;
}

</style>
