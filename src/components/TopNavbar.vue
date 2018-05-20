<template>
<section>
  <img :src="logo" />
    <h1>Arowana Dragon Boat Team</h1>
    <nav>
      <a href="#">About Us</a>
      <a href="#">Join Us</a>
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
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    background: rgba(0, 0, 0, 1);
    display: flex;
    padding: 10px 20px;
    align-items: center;
}

h1 {
    color: #dc671e;
    margin: 10px;
}

nav {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
