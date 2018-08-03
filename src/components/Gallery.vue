<template>
<section :id="id">
  <h2>Gallery</h2>
  <div class="container" @mouseover="disableImageRotation" @mouseout="enableImageRotation">
    <div class="carousel">
      <img :src="images[selectedImage]" />
    </div>
    <div class="controls">
      <button @click="previousImage">&lt;</button>
      <button @click="nextImage">&gt;</button>
    </div>
  </div>
</section>
</template>

<script>
import hartford from "../assets/gallery-hartford-2017.jpg";
import montreal from "../assets/gallery-montreal-2017-train.jpg";
import jefferson from "../assets/gallery-port-jefferson-2017.jpg";
import restaurant from "../assets/gallery-boston-restaurant-2017.jpg";

const Gallery = {
  name: 'Gallery',
  props: ["id"],
  data() {
    return {
      selectedImage: 0,
      images: [hartford, montreal, jefferson, restaurant],
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
    },
    enableImageRotation() {
      this.startTimer();
    },
    disableImageRotation() {
      this.cleanupTimer();
    },
    startTimer() {
      this.timer = setTimeout(this.updateImageAndSetTimer, 3000);
    },
    cleanupTimer() {
      if (this.timer !== undefined) {
        clearTimeout(this.timer);
      }
    },
    updateImageAndSetTimer() {
      this.cleanupTimer();
      this.changeSelectedIndex(1);
      this.startTimer();
    }
  },
  mounted() {
    this.updateImageAndSetTimer();
  },
  beforeDestroy() {
    this.cleanupTimer();
  },
};

export default Gallery;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #101010;
}

img {
    flex: 1 1 auto;
    object-position: center;
    object-fit: contain;
    height: 100%;
    width: 100%;
}

.container {
    position: relative;
    display: flex;
    overflow: hidden;
    height: 60vh;
    width: 100%;
}

.controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}

.controls :first-child {
    border-right-width: 1px;
    border-radius: 20px 0 0 20px;
}

.controls :last-child {
    border-left-width: 1px;
    border-radius: 0 20px 20px 0;
}

button {
    border: 2px solid white;
    font-size: $font-size-large;
    font-weight: 600;
    color: white;
    background: $button-background-transparent;
    padding: 10px 20px;
    transition: background 100ms ease-in-out;
}

button:hover {
    background: $button-background-transparent-hover;
}

button:focus {
    outline: none;
}
</style>
