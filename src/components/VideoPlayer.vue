<template>
  <div>
    <video controls :poster="thumbnailSource">
      <source :src="videoSource" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    videoSource: String,
    thumbnailSource: String
  }
}
</script>

<style lang="scss" scoped>
video {
  width: 100%;
  aspect-ratio: 1050/592;
  border-radius: 1%;
}
</style>
