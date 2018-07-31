<template>
<section>
  <h2>Gallery</h2>
  <div class="container">
    <img :src="images[selectedImage]" />
  </div>
  <div class="controls">
    <button @click="previousImage">Previous</button>
    <button>Pause</button>
    <button @click="nextImage">Next</button>
  </div>
</section>
</template>

<script>
import race from "../assets/race.jpg";
import people from "../assets/whoweare.jpg";

const Gallery = {
  name: 'Gallery',
  data() {
    return {
      selectedImage: 0,
      images: [race, people],
    };
  },
  methods: {
    nextImage() {
      this.changeSelectedIndex(1);
    },
    previousImage() {
      this.changeSelectedIndex(-1);
    },
    changeSelectedIndex(index) {
      this.selectedImage = (this.selectedImage + index + this.images.length) % this.images.length
    }
  },
  mounted() {
    const updateImageAndSetTimer = () => {
      this.changeSelectedIndex(1);
      this.timer = setTimeout(updateImageAndSetTimer, 3000);
    }
    updateImageAndSetTimer();
  },
  beforeDestroy() {
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
    }
  },
};

export default Gallery;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    margin-bottom: 50px;
}

.container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 60vh;
    overflow: hidden;
}

.controls {

}

img {
    flex: 1 1 auto;
}
</style>
