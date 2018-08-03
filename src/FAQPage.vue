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
</section>
</template>

<script>
export default {
  name: 'PracticeFAQs',
  props: ["id"],
}
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

h3 {
    margin: 10px;

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

    margin: 20px;
}

</style>
