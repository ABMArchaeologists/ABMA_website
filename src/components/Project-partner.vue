<template>
  <div class="grid-container-partner">
    <div id="logo-partner">
      <img :src="imageSource" alt="">
    </div>
    <div id="name-partner">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.grid-container-partner {
  display: flex;
  padding: 5px;
  align-items: center;
}

img {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

h2 {
  font-size: clamp(0.8rem, 0.8rem + 1vw, 1.5rem);
}
</style>
