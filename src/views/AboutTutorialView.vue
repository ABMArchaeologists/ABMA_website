<template>
    <div id="title-section">
      <div id="course-text">
        <h1>{{ $t("about-tutorial.title") }}</h1>
        <p>{{ $t("about-tutorial.description") }}</p>
        <button @click="openTutorial">{{$t("about-tutorial.button.tutorial")}}</button>
        <button @click="downloadTutorial">{{$t("about-tutorial.button.download_tutorial")}}</button>
        <br>
        <button><router-link class="link" :to="{ name: 'howtoguide' }">{{
          $t("about-tutorial.button.overview") }}</router-link></button>
        <button @click="openFeedbackPage">{{$t("about-tutorial.button.feedback")}}</button>

      </div>
    </div>

    <div id="video-section">
      <div class="spacer layer5"></div>
      <div v-if="showDiv" class="course-options">
        <section class="video-container">
            <div class="video">
              <div style="position:relative;padding-bottom:62.171052631579%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_kudb57z6&config[provider]={"widgetId":"0_lw8kp9d4"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="Introduction to Agent-Based Modelling for Archaeologists" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
                <h1>{{ $t("about-tutorial.video.title") }}</h1>
                <p>{{ $t("about-tutorial.video.paragraph") }}</p>
            </div>
        </section>
    </div>
    <div ref="presentation" class="spacer layer4"></div>
    </div>

  </template>

  <script>

  export default {
    data () {
      return {
        showDiv: true,
      }
    },
    mounted () {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },
    beforeUnmount () {
      window.removeEventListener('resize', this.handleResize)
    },
    components: {
    },
    methods: {
      openTutorial () {
        // let route = this.$router.resolve({ path: "/tutorial" });
        // window.open(route.href);
        const relativePath = './ABMA_tutorials/Learn ABM.html';
        const url = process.env.BASE_URL + relativePath;
        window.open(url, '_blank');
      },
      downloadTutorial () {
        // let route = this.$router.resolve({ path: "/tutorial" });
        // window.open(route.href);
        const websiteUrl = 'https://zenodo.org/doi/10.5281/zenodo.10931586';
        window.open(websiteUrl, '_blank');
      },
      openFeedbackPage () {
        // let route = this.$router.resolve({ path: "/tutorial" });
        // window.open(route.href);
        const websiteURL = 'https://github.com/ABMArchaeologists/ABMA_website/issues';
        window.open(websiteURL, '_blank');
      },
      scrollToSection (refName) {
        const sectionRef = this.$refs[refName]

        if (sectionRef) {
          sectionRef.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
          })
        }
      },
      handleResize () {
        this.windowWidth = window.innerWidth
        this.showDiv = this.windowWidth >= 768
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  #title-section {
    background-color: #FCF3EB;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #course-text {
      text-align: center;
      color: #B85800;
      width: 60%;
      max-width: 1440px;
      margin-top: 5rem;
      margin-bottom: 3rem;

      h1 {
        color: #596818;
      }

      p {
        color: #140A01;
      }

      .link {
          padding-top: auto;
          text-decoration: none;
          color: inherit;
        }

      button {
        background: transparent;
        color: #140A01;
        border: 2px solid #140A01;
        width: 40%;
        border-radius: 5px;
        margin-top: 16px;
        margin-right: 10px;
        margin-left: 10px;
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        font-size: 20px;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
        }
      }
    }
  }

  #video-section {
    background-color: #B85800;

    .course-options {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    #course-gridContainer {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 60px;
      max-width: 1440px;
      margin: 20px auto;

      .lesson-field {
        cursor: pointer;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        height: auto;
        display: inline-block;
        // background-color: #fff;
        transition: transform 0.3s ease-in-out;

        img {
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 8px;
        }

        h3 {
          margin: 10px 0;
          color: #596818;
        }

        &:hover {
        transform: scale(1.05);
      }
      }
    }
  }
  }

  .video-container {
    width:80%;
    display: flex;
    justify-content: center;
    align-items: center;


    .video {
        //   grid-column: span 3;
        width:90%;
        padding-right: 50px;
    }

    .text {
        width:40%;
        //   grid-column: span 2;

      h1,
      p {
        color: #FCF3EB;
      }
    }

}

  .explanations {
    background-color: #FCF3EB;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;

    .explanations-container {
      width: 90%;
      max-width: 1440px;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .topics {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 8px;

        h2 {
          padding-left: 5rem;
          padding-top: 2rem;
        }

        .presentation,
        .worksheet,
        .teacher-guide {
          display: flex;
          flex-direction: column;
          // background-color: #fff;
          // padding: 20px;
          transition: transform 0.3s ease-in-out;
        }
      }
    }
  }

  .layer1 {
    aspect-ratio: 900/20;
    background-image: url('../assets/transitions/wave-haikei-DFC19B-D9AA61.svg');
  }

  .layer2 {
    aspect-ratio: 900/20;
    background-image: url('../assets/transitions/wave-haikei-D9AA61-B85800.svg');
  }

  .layer3 {
    aspect-ratio: 900/20;
    background-image: url('../assets/transitions/wave-haikei-B85800-BA4219.svg');
  }

  .layer4 {
    aspect-ratio: 900/20;
    background-image: url('../assets/transitions/wave-haikei-FCF3EB-white-fff-whiter.svg');
  }

  .layer5 {
    aspect-ratio: 900/20;
    background-image: url('../assets/transitions/wave-haikei-FCF3EB-Transparent.svg');
  }

  .layer6 {
    aspect-ratio: 900/20;
    background-image: url('../assets/transitions/wave-haikei-Transparent-FCF3EB.svg');
  }

  // Media queries
  // Mobile devices
  @media (max-width: 480px) {
    #title-section {

    #course-text {
      width: 90%;
    }
  }
    #course-container {

      #course-gridContainer {
        grid-template-columns: 1fr;

        #course-text {
          button {
            background: transparent;
            color: #B85800;
            border: 2px solid #B85800;
            border-radius: 5px;
            margin-top: 16px;
            padding: 5px;
            font-size: 20px;
          }
        }
      }
    }
    .explanations {

    .explanations-container {

      .topics {

        h2 {
          font-size: clamp(1rem, 1rem + 2vw, 2rem);
          text-align: center;
          padding-left: 0;
          padding-top: 2rem;
        }
      }
    }
  }
  }

  // Tablets, iPads
  @media (max-width: 786px) {}

  // Small laptops
  @media (max-width: 1024px) {}

  // Desktops, large screens
  @media (max-width: 1200px) {}

  // TV, Extra large screens
  @media (min-width: 1201px) {}
  </style>
