<template>
  <section>
    <a :href="externalLink" target="_blank">
      <div id="container">
        <div id="image-container">
          <img :src="imageSource" alt="">
        </div>
        <div id="text-container">
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  props: {
    imageSource: String,
    title: String,
    content: String,
    externalLink: String,
    contentPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #FCF3EB;
  position: relative;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    /* Remove underline */
  }

  #container {
    display: grid;
    grid-template-rows: 1fr 4fr;
    gap: 10px;
    height: auto;
    width: 90%;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    #image-container {
      order: 2;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        flex: 1;
        height: auto;
        width: 150px;
      }
    }

    #text-container {
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      h1 {
        color: #140A01;
        font-size: 30px;
      }

      p {
        color: #140A01;
        font-size: 20px;
      }
    }
  }
}

// Media queries
// Mobile devices
@media (max-width: 767px) {}

// Tablets
@media (max-width: 1023px) {
  section {
    flex-direction: column;

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
@media (min-width: 1024px) and (max-width: 1365px) {}

// Large laptops and desktops
@media (min-width: 1366px) {}

// TV, Extra-large screens
@media (min-width: 1920px) {
  section {
    #container {
      max-width: 1440px;
    }
  }
}
</style>
