<template>
<section>
  <img :src="logo" />
  <h1>Arowana <small>Dragon Boat Team</small></h1>
  <button @click="toggleNavigation">
    <font-awesome-icon icon="bars"></font-awesome-icon>
  </button>
  <nav :class="navigationVisible ? 'visible' : ''">
    <router-link to="/">Home</router-link>
    <router-link to="/practice">Practice</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <a :href="formLink">Join Us</a>
  </nav>
</section>
</template>

<script>
import logo from '../assets/logo.jpg';

export default {
  name: 'TopNavbar',
  data() {
    return {
      navigationVisible: false,
      logo,
      formLink: "https://goo.gl/forms/1WwvwHku8iz9rh3m1",
    };
  },
  methods: {
    toggleNavigation() {
      this.navigationVisible = !this.navigationVisible;
    },
  },
  props: ["routes"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
    background: $header-background;
    display: flex;
    flex-flow: row wrap;
    padding: 10px 20px;
    align-items: center;
}

h1 {
    flex: 1 1 auto;
    color: #dc671e;
    margin: 10px;
    text-align: left;
    font-size: $font-size-large;
}

small {
    display: flex;
    font-size: $font-size-normal;
}

nav {
    flex: 0 0 0;
    display: none;
    align-items: center;
    flex-flow: row wrap;

    @media screen and (max-width: 767px) {
        &.visible {
            display: flex;
            flex-basis: 100%;
            justify-content: center;
        }
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-basis: auto;
        justify-content: flex-end;
    }
}


button {
    flex: 0 0 auto;
    color: white;
    border: 1px solid white;
    background: transparent;
    border-radius: 4px;
    padding: 10px 15px;

    @media screen and (min-width: 768px) {
        display: none;
        flex-basis: 0;
    }
}

a {
    margin: 10px;
    color: white;
}

img {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
}

</style>
