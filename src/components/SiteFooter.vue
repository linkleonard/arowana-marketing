<template>
<footer>
  <div class="social">
    <p>Find us on social media!</p>
    <a v-for="link in links" :key="link.site" :href="link.uri">
      <font-awesome-icon
        :icon="link.icon"
        :title="`${link.site} ${link.label}`">
      </font-awesome-icon>
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
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px;
}

a {
  color: $link-color;
  text-decoration: none;
}

.social a {
  margin: 10px;
  font-size: 30px;
}

p {
  flex: 1 0 100%;
  margin-bottom: 0;
}

span {
  margin-left: 5px;
  text-decoration: underline;
}

.copyright {
  color: $text-color;
  margin: 20px 0 20px 0;
  font-size: $font-size-small;
}
</style>
