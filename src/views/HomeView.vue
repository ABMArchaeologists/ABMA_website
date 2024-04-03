<template>
  <!-- above the fold -->
  <header id="banner">
    <article id="banner-container">
      <div id="banner-container-text">
        <div>
          <h1>{{ $t("home.abf.title") }}</h1>
          <p v-html="$t('home.abf.paragraph')"></p>
          <button><router-link class="link" :to="{ name: 'about-tutorial' }">{{
            $t("home.abf.button") }}</router-link></button>
        </div>
      </div>
      <div id="banner-container-image">
        <div>
          <img src="@/assets/stippen-animatie-homepage.gif" alt="">
        </div>
      </div>
    </article>

  </header>
  <div class="spacer layer1" ref="contentBelowTheFold"></div>


  <!-- short explanation -->
  <div class="abm-explanation">
    <div class="abm-explanation-container-1">
      <section class="short-explanation">
        <h2>{{ $t("home.explanation.title") }}</h2>
        <p>{{ $t("home.explanation.paragraph") }}</p>
      </section>
      <section class="agent-and-model">
        <div class="paragraph-container">
          <section>
            <h3>{{ $t("home.explanation.sectionTitle1") }}</h3>
            <p>{{ $t("home.explanation.section1") }}</p>
          </section>
          <section>
            <h3>{{ $t("home.explanation.sectionTitle2") }}</h3>
            <p>{{ $t("home.explanation.section2") }}</p>
          </section>
        </div>
      </section>
    </div>
  </div>

  <div class="spacer layer2"></div>



  <!-- archeology section -->
  <div class="abm-in-argeology">
    <div class="abm-in-argeology-container">
      <section class="text">
        <h2>{{ $t("home.abmInArcheology.title") }}</h2>
        <p>{{ $t("home.abmInArcheology.description") }}</p>
      </section>

      <div class="examples">
        <h2 class="title">{{ $t("home.abmInArcheology.examples.title") }}</h2>
        <section class="hunter">
          <div>
            <h3>{{ $t("home.abmInArcheology.examples.hunter.title") }}</h3>
            <p>{{ $t("home.abmInArcheology.examples.hunter.description") }}</p>
            <button @click="openHunterExample">{{ $t("home.abmInArcheology.examples.hunter.button") }}</button>
          </div>
          <img src="../assets/Hunter.gif" alt="">
        </section>
        <section class="cart">
          <img src="../assets/cart.gif" alt="">
          <div>
            <h3>{{ $t("home.abmInArcheology.examples.cart.title") }}</h3>
            <p>{{ $t("home.abmInArcheology.examples.cart.description") }}</p>
            <button @click="openSettleExample">{{ $t("home.abmInArcheology.examples.cart.button") }}</button>
          </div>
        </section>
        <section class="trade">
          <div>
            <h3>{{ $t("home.abmInArcheology.examples.trade.title") }}</h3>
            <p>{{ $t("home.abmInArcheology.examples.trade.description") }}</p>
            <button @click="openTradeExample">{{ $t("home.abmInArcheology.examples.trade.button") }}</button>
          </div>
          <img src="../assets/trade.gif" alt="">
        </section>
      </div>
    </div>
  </div>

  <div class="spacer layer3"></div>


  <!-- learning section -->
  <div class="learn-abm">
    <div class="learn-abm-container">
      <section>
        <h2>{{ $t("home.learnAbm.title") }}</h2>
        <p>{{ $t("home.learnAbm.description") }}</p>
      </section>
      <div class="course-tutorial">
        <div class="tutorial-container">
          <img src="../assets/ABM-Tutorial.png" alt="">

          <div>
            <h3>{{ $t("home.learnAbm.courseTutorial.tutorial.title") }}</h3>
            <p>{{ $t("home.learnAbm.courseTutorial.tutorial.description") }}</p>
          </div>
          <button><router-link class="link" :to="{ name: 'about-tutorial' }">{{
            $t("home.learnAbm.courseTutorial.tutorial.button") }}</router-link></button>
      </div>
        <div class="course-container">
          <img src="../assets/spoc_thumbnail.png" alt="">

          <div>
            <h3>{{ $t("home.learnAbm.courseTutorial.courseSPOC.title") }}</h3>
            <p>{{ $t("home.learnAbm.courseTutorial.courseSPOC.description") }}</p>
          </div>
          <button><router-link class="link" :to="{ name: 'spoc-course' }">{{
            $t("home.learnAbm.courseTutorial.courseSPOC.button") }}</router-link></button>
      </div>
      </div>
      <div class="course-tutorial">
        <div class="materials-container">
          <img src="../assets/foto-werkbladen.jpg" alt="">
          <div>
            <h3>{{ $t("home.learnAbm.courseTutorial.lessonMaterial.title") }}</h3>
            <p>{{ $t("home.learnAbm.courseTutorial.lessonMaterial.description") }}</p>
          </div>
          <button><router-link class="link" :to="{ name: 'course' }">{{
            $t("home.learnAbm.courseTutorial.lessonMaterial.button") }}</router-link></button>
          </div>
        <div class="resources-container">
          <img src="../assets/resources_thumbnail.png" alt="">
          <div>
            <h3>{{ $t("home.learnAbm.courseTutorial.resources.title") }}</h3>
            <p>{{ $t("home.learnAbm.courseTutorial.resources.description") }}</p>
          </div>
          <button><router-link class="link" :to="{ name: 'resources' }">{{
            $t("home.learnAbm.courseTutorial.resources.button") }}</router-link></button>
          </div>
      </div>
    </div>
  </div>

  <div class="spacer layer4"></div>

  <div class="spacer layer3"></div>
</template>

<script>

export default {
  data () {
    return {
      savedScrollPosition: 0
    }
  },
  components: {
  },
  methods: {
    scrollToContent () {
      const belowTheFoldElement = this.$refs.contentBelowTheFold

      if (belowTheFoldElement) {
        belowTheFoldElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    },
    openHunterExample () {
        // let route = this.$router.resolve({ path: "/tutorial" });
        // window.open(route.href);
        const websiteURL = 'https://doi.org/10.1177/0894439313511943';
        window.open(websiteURL, '_blank');
    },
    openSettleExample () {
        // let route = this.$router.resolve({ path: "/tutorial" });
        // window.open(route.href);
        const websiteURL = 'http://dx.doi.org/10.5070/SD922003290';
        window.open(websiteURL, '_blank');
    },
    openTradeExample () {
        // let route = this.$router.resolve({ path: "/tutorial" });
        // window.open(route.href);
        const websiteURL = 'http://dx.doi.org/10.18564/jasss.2308';
        window.open(websiteURL, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
// Above the fold section
#banner {
  background-color: #FCF3EB;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  #banner-container {
    flex-grow: 2;
    width: 90%;
    max-width: 1440px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    color: #B85800;
    margin-top: 60px;

      button {
        cursor: pointer;
        background: transparent;
        border: 2px solid #140A01;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: clamp(0.8rem, 0.4rem + 1vw, 1.5rem);

        &:hover {
          color: #596818;
          border-color: #596818;
        }

        .link{
          text-decoration: none;
          color: inherit;
        }
      }

        h1 {
          color: #596818;
          margin-bottom: 0,5rem;
        }

        p {
          color: #140A01;
          margin-bottom: 1rem;
        }
      
    // }

    #banner-container-image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      img {
        object-fit: cover;
        height: auto;
        width: 100%;
      }
    }
  }
}

// ABM explanation
.abm-explanation {
  background-color: #B85800;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  padding-top: 3rem;
  color: #FCF3EB;

  .abm-explanation-container-1 {
    width: 90%;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .agent-and-model {
      .paragraph-container {
        display: flex;
        gap: 1rem;

        &>section {
          flex: 1;
        }
      }
    }
  }
}

// abm in the archeology
.abm-in-argeology {
  background-color: #FCF3EB;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  padding-top: 3rem;

  .abm-in-argeology-container {
    width: 90%;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .examples {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-top: 2rem;

      section {
        display: flex;
        // align-items: center;
        gap: 0,5rem;
        border-radius: 8px;

        div {
          padding: 20px;
        }

        img {
          width: 100%;
          max-width: 30rem;
          height: auto;
          object-fit: cover;
        }
      }

      button {
          cursor: pointer;
          background: transparent;
          border: 2px solid #140A01;
          border-radius: 5px;
          padding: 10px 20px;
          margin-top: 10px;
          font-size: clamp(0.8rem, 0.4rem + 1vw, 1.5rem);

          &:hover {
            color: #D9AA61;
            border-color: #D9AA61;
          }

          .link{
            text-decoration: none;
            color: inherit;
          }
        }

      .hunter {
        border: 8px solid #D9AA61;

        button {
          &:hover {
            color: #D9AA61;
            border-color: #D9AA61;
          }
        }
      }

      .cart {
        border: 8px solid #BA4219;

        button {
          &:hover {
            color: #BA4219;
            border-color: #BA4219;
          }
        }
      }

      .trade {
        border: 8px solid #596818;

        button {
          &:hover {
            color: #596818;
            border-color: #596818;
          }
        }
      }
    }

    h3 {
      padding-top: 8px;
      padding-bottom: 5px;
    }
  }
}

// learn abm
.learn-abm {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  padding-top: 3rem;

  .learn-abm-container {
    width: 90%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .course-tutorial {
      display: flex;
      height: min-content;
      gap: 1rem;

      .course-container,
      .materials-container,
      .resources-container,
      .tutorial-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: #B85800;
        color: #fff;
        align-self: stretch;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding-bottom: 0px;
        height: 38rem; /* Example height for the container */
        position: relative;
        align-items: center; /* Vertically center */

        img {
          width: 100%;
          height: 20rem;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        div {
          padding: 2rem;
          
        }
        .link {
          padding-top: auto;
          text-decoration: none;
          color: inherit;
        }

        button {
          margin-top: auto; /* Push content to the bottom */
          text-align: center; /* Center content horizontally */
          position: absolute; /* Position content */
          bottom: 0; /* Align content at the bottom */
          cursor: pointer;
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: clamp(0.8rem, 0.4rem + 1vw, 1.5rem);
          margin: 1rem;
          

          &:hover {
            color: #FCF3EB;
            border-color: #FCF3EB;
            transform: scale(1.05);
          }
        }
      }


    }
  }
}

// ABM programs
.abm-programs {
  background-color: #FCF3EB;
  // background-image: url(../assets/Papercut_achtergrond.png);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 7rem;

  .abm-programs-container {
    width: 90%;
    max-width: 1440px;

    section {
      padding-bottom: 20px;
    }
  }
}

// between banner and video
.layer1 {
  width: 100%;
  aspect-ratio: 900/150;
  background-image: url('../assets/transitions/stacked-waves-haikei-FCF3EB-white-B85800-orange.svg');
  margin-top: auto;
}

// between video and explanation
.layer2 {
  aspect-ratio: 900/20;
  background-image: url('../assets/transitions/wave-haikei-B85800-orange-FCF3EB-white.svg');
}

// between explanation and ABM in archeology
.layer3 {
  aspect-ratio: 900/20;
  background-image: url('../assets/transitions/wave-haikei-FCF3EB-white-fff-whiter.svg');
}

// between archeology and learning
.layer4 {
  aspect-ratio: 900/20;
  background-image: url('../assets/transitions/wave-haikei-fff-whiter-FCF3EB-white.svg');
}

.layer5 {
  aspect-ratio: 900/20;
  background-image: url('../assets/transitions/wave-haikei-Transparent-596818.svg');
}
// Media queries
// Mobile devices
@media (max-width: 480px) {}

// Tablets, iPads
@media (max-width: 786px) {
  #banner {
    height: auto;
    #banner-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 0px;

      #banner-container-text {
        order: 2;

        div {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
          gap: 10px;

          button {
            padding: 5px 10px;
          }

          h1 {
            margin-bottom: 0px;
          }

          p {
            margin-bottom: 0px;
          }
        }
      }
    }

    #banner-container-image {
      order: 1;
      height: auto;

      img {
        width: 90%;
      }
    }
  }

  // ABM video
  .video-container {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr;
      padding-top: 20px;

      .video {
        order: 2;
      }

      .text {
        grid-column: span 3;
        order: 1;
      }
    }
  }

  // ABM explenation
  .abm-explanation {
    .abm-explanation-container-1 {
      .agent-and-model {
        .paragraph-container {
          gap: 5;
          flex-direction: column;
        }
      }
    }
  }

  .abm-in-argeology {
    .abm-in-argeology-container {
      .examples {
        section {
          flex-direction: column;
        }
        .hunter,
        .trade {
          img {
            order: 1;
          }
          div {
            order: 2;
          }
        }
      }
    }
  }

  .learn-abm {
  .learn-abm-container {
    .course-tutorial {
      flex-direction: column;
    }
  }
}
}

// Small laptops
@media (max-width: 1024px) {}

// Desktops, large screens
@media (max-width: 1200px) {}

// TV, Extra large screens
@media (min-width: 1201px) {
  .banner {
    .banner-container {
      max-width: 1440px;
    }
  }

  .video-container {
    .grid-container {
      max-width: 1440px;
    }
  }

  .abm-explanation {
    .abm-explanation-container-1 {
      max-width: 1440px;
    }
  }
}</style>
