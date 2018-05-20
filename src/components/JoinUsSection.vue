<template>
<section>
  <h2>Join Us</h2>
  <p>Marketing text 1</p>
  <p>Marketing text 2</p>
  <a href="#">Sign up</a>

  <form>
    <label for="name">Name</label>
    <input name="name" type="text" />

    <label for="email">E-mail</label>
    <input name="email" type="email" />

    <label for="phone">Phone Number</label>
    <input name="phone" type="text" />

    <button type="submit">Sign Up</button>
  </form>
</section>
</template>

<script>
export default {
    name: 'JoinUsSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {

}
</style>
