<template>
<div>
  <TopNavbar :routes="routes" />
  <router-view></router-view>
  <SiteFooter />
</div>
</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "app",
  components: {
    TopNavbar,
    SiteFooter
  },
  data() {
    return {
      routes: [
        {
          href: "section-who-we-are",
          label: "Who We Are"
        },
        {
          href: "section-practice",
          label: "Practice"
        },
        {
          href: "section-races",
          label: "Races"
        },
        {
          href: "section-about",
          label: "About Us"
        },
        {
          href: "section-join",
          label: "Join Us"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
body {
  background: $page-background;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h2 {
  color: $section-header-color;
  font-size: $font-size-larger;
}

h3 {
  margin: 10px;
  color: $subsection-header-color;
  font-size: $font-size-large;
}

p {
  color: $text-color;
  font-size: $font-size-normal;
  font-weight: 600;
}

a {
  color: $link-color;
}
</style>
