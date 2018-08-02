<template>
<section>
  <img :src="logo" />
  <h1>Arowana <small>Dragon Boat Team</small></h1>
  <nav>
    <a v-for="route in routes" :key="route.href" :href="'#' + route.href">
      {{ route.label }}
    </a>
  </nav>
</section>
</template>

<script>
import logo from '../assets/logo.jpg';

export default {
  name: 'TopNavbar',
  data() {
    return {
      logo,
    };
  },
  props: ["routes"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    background: rgba(0, 0, 0, 1);
    display: flex;
    flex-flow: row wrap;
    padding: 10px 20px;
    align-items: center;
}

h1 {
    flex: 0 0 auto;
    color: #dc671e;
    margin: 10px;
    text-align: left;
}

small {
    display: block;
}

nav {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
}

@media screen and (min-width: 768px) {
    nav {
        justify-content: flex-end;
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
