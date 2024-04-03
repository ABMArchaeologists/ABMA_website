<template>
  <div class="title-section">
    <div class="title-container">
      <h1>{{ $t("about.title") }}</h1>
      <p>{{ $t("about.description") }}</p>
    </div>
  </div>
  <div class="organizers">
    <div class="organizers-container">
      <div @click="openErasmus" class="financier">
        <div class="text">
          <h3>{{ $t('about.organizers.erasmus.title') }}</h3>
          <p>{{ $t('about.organizers.erasmus.description') }}</p>
        </div>
        <div class="logo">
          <img src="../assets/logos/Erasmus+_Logo.svg" alt="">
        </div>
      </div>
      <div @click="openLandwardResearch" class="coordinator">
        <div class="text">
          <h3>{{ $t('about.organizers.landward.title') }}</h3>
          <p>{{ $t('about.organizers.landward.description') }}</p>
        </div>
        <div class="logo">
          <img src="../assets/logos/Landward-Research-logo.png" alt="">
        </div>
        <div class="text">
          <p>{{ $t('about.team-members') }}</p>
          <p>Kenneth Aitchison, Doug Rocks-Macqueen</p>
        </div>
      </div>
    </div>
  </div>
  <div class="partner-title">
    <div class="partner-title-container">
      <h2>{{ $t('about.partners.title') }}</h2>
    </div>
  </div>
  <div class="partners">
    <div class="spacer layer1"></div>
    <div class="partnerContainer">
      <div class="subContainer">
        <div class="options">
          <div @click="openAarhusUniversity" class="option">
            <h4>{{ $t('about.partners.aarhus') }}</h4>
            <div class="partner">
              <img src="../assets/logos/Aarhus_University_seal.svg.png" alt="">
            </div>
            <div class="team_members">
              <p>{{ $t('about.team-members') }}</p>
              <ul>
                <li>Tom Brughmans</li>
                <li>Iza Romanowska</li>
                <li>Adam Pažout</li>
              </ul> 
            </div>
          </div>
          <div @click="openUniversiteitLeiden" class="option">
            <h4>{{ $t('about.partners.leiden') }}</h4>
            <div class="partner">
              <img src="../assets/logos/1200px-Leiden_University_seal.svg.png" alt="">
            </div>
            <div class="team_members">
              <p>{{ $t('about.team-members') }}</p>
              <ul>
                <li>Laura van der Knaap</li>
                <li>Karsten Lambers</li>
              </ul> 
            </div>
          </div>
          <div @click="openSaxionHogeschool" class="option">
            <h4>{{ $t('about.partners.saxion') }}</h4>
            <div class="partner">
              <img src="../assets/logos/lg_saxion_uas_rgb.png" alt="">
            </div>
            <div class="team_members">
              <p>{{ $t('about.team-members') }}</p>
              <ul>
                <li>Ronald Visser</li>
                <li>Annemarie Jutte</li>
                <li>Jeroen Linssen</li>
              </ul> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer layer2"></div>
  </div>
  <div class="acknowledgements">
    <div class="container">
      <div class="text">
        <h2>{{ $t('about.acknowledgements.title') }}</h2>
        <p>{{ $t('about.acknowledgements.paragraph1') }}</p><br>
        <p>{{ $t('about.acknowledgements.students3') }}</p><br>
        <!-- <p>{{ $t('about.acknowledgements.paragraph2') }}</p><br> -->
        <p>{{ $t('about.acknowledgements.students2') }}</p><br>
        <p>{{ $t('about.acknowledgements.students1') }}</p><br>
      </div>
      <div class="image">
        <img src="../assets/VeldwerkerTransparent-flipped.png" alt="">
      </div>
    </div>
  </div>
  <div class="acknowledgements">
    <div class="container">
      <div class="image">
        <img src="../assets/papercut-abm-through-time.png" alt="">
      </div>
      <div class="text">
        <p>{{ $t('about.acknowledgements.paragraph2') }}</p><br>
        <p>{{ $t('about.acknowledgements.paragraph3') }}</p>
      </div>
    </div>
  </div>
  <div class="spacer layer3"></div>
</template>

<script>
export default {
  methods: {
    openAarhusUniversity () {
      const websiteURL = 'https://international.au.dk/'
      window.open(websiteURL, '_blank')
    },
    openUniversiteitLeiden () {
      const websiteURL = 'https://www.universiteitleiden.nl/'
      window.open(websiteURL, '_blank')
    },
    openLandwardResearch () {
      const websiteURL = 'https://landward.eu/'
      window.open(websiteURL, '_blank')
    },
    openSaxionHogeschool () {
      const websiteURL = 'https://www.saxion.nl/'
      window.open(websiteURL, '_blank')
    },
    openErasmus () {
      const websiteURL = 'https://erasmus-plus.ec.europa.eu/nl/projects/search/details/2021-2-IE01-KA220-VET-000049054'
      window.open(websiteURL, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-section {
  background-color: #FCF3EB;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;

  .title-container {
    color: #B85800;
    width: 90%;
    max-width: 1440px;
    margin-top: 5rem;

    h1 {
      color: #596818;
    }

    p {
      color: #140A01;
    }
  }
}

.organizers {
  background-color: #FCF3EB;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;

  .organizers-container {
    display: flex;
    gap: 2rem;
    width: 90%;
    max-width: 1440px;

    .financier,
    .coordinator {
      flex: 1;
      display: flex;
      flex-direction: column;
      border: 8px solid #596818;
      border-radius: 10px;
      padding: 1rem;
      display: flex;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      .text {
        h3 {
          color: #140A01;
        }
      }

      .logo {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          max-width: 100%;
          align-self: center;
        }
      }
    }
  }
}

.partner-title {
  background-color: #FCF3EB;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  color: #596818;

  .partner-title-container {
    width: 90%;
    max-width: 1440px;
  }
}

.partners {
  background-image: url('../assets/Papercut_achtergrond.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .partnerContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    .subContainer {
      width: 90%;
      max-width: 1440px;

      .options {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4rem;

        .option {
          display: grid;
          grid-template-rows: 1fr 4fr;
          cursor: pointer;
          text-align: center;
          padding: 20px;
          border-radius: 10px;
          background-color: #FCF3EB;
          transition: transform 0.3s ease-in-out;

          div {
            //display: flex;
            align-items: center;
            justify-content: center;
          }

          // .partner {
            // flex: 1;
            // display: flex;
            // align-items: center;
            // justify-content: center;

            .partner {
              flex: 1;
              width: 100%;
              height: 25rem; /* Set the fixed height here */
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .partner img {
              width: auto;
              height: 100%;
              object-fit: contain; /* Ensure the image fits inside the container */
            }

            // img {
            //   width: 100%;
            //   height: 25rem;
            //   object-fit: cover;
            // }
          // }

          .team_members {
            ul li { 
              list-style-type: none; /* Remove bullets */
              font-size: 18px;
            }
          }

          img {
            width: 100%;
            max-width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          h3 {
            margin: 10px 0;
            color: #140A01;
          }

          p {
            margin: 10px 0;
          }

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
}

.acknowledgements {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FCF3EB;
  padding-top: 3rem;
  padding-bottom: 1rem;

  .container {
    width: 90%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .text {
      width: 250%;
      h2 {
        color: #596818;
      }
    }

    .image {
      img {
        width: 85%;
        border-radius: 10px;
      }
    }
  }
}

.layer1 {
  aspect-ratio: 900/20;
  background-image: url('../assets/transitions/wave-haikei-FCF3EB-Transparent.svg');
}

.layer2 {
  aspect-ratio: 900/20;
  background-image: url('../assets/transitions/wave-haikei-Transparent-FCF3EB.svg');
}

.layer3 {
  aspect-ratio: 900/20;
  background-image: url('../assets/transitions/wave-haikei-FCF3EB-white-fff-whiter.svg');
}

@media (max-width: 786px) {
  .title-section {
    .title-container {

      margin-top: 5rem;
    }
  }

  .partners {

    .partnerContainer {

      .subContainer {

        .options {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
