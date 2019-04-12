<template>
<section>
  <img :src="logo" />
  <h1>Arowana <small>Dragon Boat Team</small></h1>
  <button @click="toggleNavigation">
    <font-awesome-icon icon="bars"></font-awesome-icon>
  </button>
  <nav
    :class="navigationVisible ? 'visible' : ''"
    >
    <router-link to="/">Home</router-link>
    <router-link to="/practice">Practice</router-link>
    <router-link to="/faqs">FAQs</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <a :href="formLink">Join Us</a>
  </nav>
</section>
</template>

<script>
import logo from "../assets/logo.png";

export default {
  name: "TopNavbar",
  data() {
    return {
      navigationVisible: false,
      logo,
      formLink: "https://goo.gl/forms/1WwvwHku8iz9rh3m1"
    };
  },
  methods: {
    toggleNavigation() {
      this.navigationVisible = !this.navigationVisible;
    }
  },
  props: ["routes"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  background: $header-background;
  display: flex;
  flex-flow: row wrap;
  padding: 10px 20px;
  align-items: center;
  position: relative;
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
  align-items: center;
  flex-flow: row wrap;
  position: sticky;
  top: 0;

  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    flex-basis: 100%;
    justify-content: center;

    background: $header-background;
    transition: transform 400ms ease-out, opacity 200ms ease-out;
    transform: translateY(100%) scaleY(0);
    transform-origin: top;
    opacity: 0;

    &.visible {
      display: flex;
      transform: translateY(100%) scaleY(1);
      opacity: 1;
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
  color: $text-color;
  border: 1px solid $nav-button-border;
  background: $nav-button-background;
  border-radius: 4px;
  padding: 10px 15px;

  @media screen and (min-width: 768px) {
    display: none;
    flex-basis: 0;
  }
}

a {
  margin: 10px;
  color: $link-color;
}

img {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
}
</style>
