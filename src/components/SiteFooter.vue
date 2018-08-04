<template>
<footer>
  <div class="social">
    <a v-for="link in links" :key="link.site" :href="link.uri">
      <font-awesome-icon :icon="link.icon"></font-awesome-icon>
      <span>{{ link.label }}</span>
    </a>
  </div>
  <div class="copyright">
    Home crafted by
    <a href="https://github.com/linkleonard">
       <font-awesome-icon :icon="['fab', 'github-alt']"></font-awesome-icon>
       <span>@linkleonard</span>
    </a>
  </div>
</footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      links: [
        {
          site: "Facebook",
          icon: ["fab", "facebook-square"],
          label: "@ArowanaDB",
          uri: "https://www.facebook.com/ArowanaDB/"
        },
        {
          site: "Instagram",
          icon: ["fab", "instagram"],
          label: "@arowanadb",
          uri: "https://www.instagram.com/arowanadb/"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  background: $footer-background;
  padding: 1px;
}

.social {
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 20px;
}

a {
  color: white;
  text-decoration: none;
}

.social a {
  margin: 10px;
}

span {
  margin-left: 5px;
  text-decoration: underline;
}

.copyright {
  color: white;
  margin: 30px 0 40px 0;
}
</style>
