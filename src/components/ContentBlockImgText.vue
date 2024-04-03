<template>
  <section>
    <div id="container">
      <div v-if="contentType === 'video'" id="video-container"
        :class="{ 'left': contentPosition === 'left', 'right': contentPosition === 'right' }">
        <VideoPlayer :videoSource="videoSource" />
      </div>
      <div v-else-if="contentType === 'image'" id="image-container"
        :class="{ 'left': contentPosition === 'left', 'right': contentPosition === 'right' }">
        <img :src="imageSource" alt="">
      </div>
      <div id="text-container">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue'

export default {
  components: {
    VideoPlayer
  },
  props: {
    contentType: {
      type: String,
      required: true
    },
    videoSource: String,
    imageSource: String,
    title: String,
    content: String,
    contentPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #B85800;
  position: relative;
  display: flex;
  justify-content: center;

  #container {
    // background-color: #FCF3EB;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    height: auto;
    width: 90%;
    padding-top: 10px;
    padding-bottom: 0px;

    .left {
      order: 0;
    }

    .right {
      order: 2;
    }

    #image-container {
      grid-column: span 2;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    #text-container {
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        color: #FCF3EB;
        font-size: 30px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }

      p {
        color: #FCF3EB;
        font-size: 20px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }
}

// Media queries

// Mobile devices
@media (max-width: 767px) {

}

// Tablets
@media (max-width: 1023px) {
  section {
    #container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      padding-top: 20px;
      padding-bottom: 0px;

      #text-container {
        h1 {
          color: #140A01;
          font-size: 30px;
        }

        p {
          color: #140A01;
          font-size: 15px;
        }
      }
    }
  }
}

// Small laptops
@media (min-width: 1024px) and (max-width: 1365px) {

}

// Large laptops and desktops
@media (min-width: 1366px) {

}

// TV, Extra-large screens
@media (min-width: 1920px) {
  section {
    #container {
      max-width: 1440px;
    }
  }
}
</style>
