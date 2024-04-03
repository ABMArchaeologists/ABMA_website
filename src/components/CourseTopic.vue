<template>
  <div
    :class="[sectionClass, { 'content-order-normal': contentOrder, 'content-order-reverse': !contentOrder }, { 'rounded-bottom': roundedBottom }, { 'rounded-top': roundedTop }]"
    class="block">
    <div class="text">
      <h3>{{ $t(headingText) }}</h3>
      <p>{{ $t(paragraphText) }}</p>
    </div>

    <img v-if="isImage" :src="imageSource" alt="">
  </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue'

export default {
  data() {
    return {
    }
  },
  props: {
    headingText: String,
    paragraphText: String,
    imageSource: String,
    sectionClass: String,
    isImage: Boolean,
    contentOrder: Boolean,
    roundedBottom: Boolean,
    roundedTop: Boolean
  },
  components: {
    VideoPlayer
  }
}
</script>

<style scoped>
.block {
  display: flex;
  /* gap: 2rem; */
  background-color: #fff;
  padding: 3rem;
  transition: transform 0.3s ease-in-out;
}

.text {
  flex: 1;
  background-color: rgba(252, 243, 235, 0.5);
  /* background-color: #FCF3EB; */
  padding: 2rem;
}

.content-order-normal {
  .text {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  img,
  .videoPlayer {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
}

.content-order-reverse {
  flex-direction: row-reverse;

  .text {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  img,
  .videoPlayer {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
}

.rounded-bottom {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.rounded-top {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.description {
  background-color: #DFC19B;
}

.illustrations,
.exercises,
.presentation-instructions {
  background-color: #D9AA61;
}

.animations,
.classroom-exercise,
.possible-answers {
  background-color: #B85800;
}

.video {
  background-color: #BA4219;
}

img,
.videoPlayer {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
}

@media (max-width: 786px) {
  .block {
    padding: 1rem;
    flex-direction: column;

    .text {
      border-bottom-right-radius: 0px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0px;
      border-top-left-radius: 10px;
    }

    img,
    .videoPlayer {
      border-bottom-right-radius: 10px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 0px;
      max-width: fit-content;
    }

  }
}
</style>
