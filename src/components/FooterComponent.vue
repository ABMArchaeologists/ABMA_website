<template>
  <footer>
    <div class="grid-container">
      <div id="branding">
        <img src="../assets/Logo_abma.png" alt="">
      </div>
      <div id="partners">
        <div>
          <h4>Contributors</h4>
          <p @click="openErasmus">{{ $t('about.organizers.erasmus.title') }}</p>
          <p @click="openLandwardResearch">{{ $t('about.organizers.landward.title') }}</p>
          <p @click="openAarhusUniversity">{{ $t('about.partners.aarhus') }}</p>
          <p @click="openUniversiteitLeiden">{{ $t('about.partners.leiden') }}</p>
          <p @click="openSaxionHogeschool">{{ $t('about.partners.saxion') }}</p>
        </div>
      </div>
      <div id="useful-links">
        <div>
          <h4>Quick links</h4>
          <router-link class="link" :to="{ name: 'home' }">
            <p class="link-text">{{ $t("navigation.home") }}</p>
          </router-link>
          <router-link class="link" :to="{ name: 'about-tutorial' }">
            <p>{{ $t("navigation.tutorial") }}</p>
          </router-link>
          <router-link class="link" :to="{ name: 'spoc-course' }">
            <p>{{ $t("navigation.spoc-course") }}</p>
          </router-link>
          <router-link class="link" :to="{ name: 'course' }">
            <p>{{ $t("navigation.course") }}</p>
          </router-link>

          <router-link class="link" :to="{ name: 'resources' }">
            <p>{{ $t("navigation.resources") }}</p>
          </router-link>
          <router-link class="link" :to="{ name: 'about' }">
            <p>{{ $t("navigation.about") }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
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
footer {
  background-color: #fff;
  color: #140A01;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 7rem;

  .grid-container {
    margin: auto;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    max-width: 1200px;

    #branding {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;

      img {
        width: 25rem;
      }
    }

    #partners,
    #useful-links {
      display: flex;
      justify-content: center;

      div {
        display: flex;
        flex-direction: column;

        .link {
          text-decoration: none;
          color: inherit;
        }

        p {
          cursor: pointer;
          border-bottom: 1px solid transparent;

          &:hover {
            border-color: #140A01;
          }
        }

        h2 {
          padding-left: 5px;
          padding-bottom: 10px;
          margin-bottom: 10px;
          width: 66%;
        }
      }
    }
  }
}

// Media queries
// Mobile devices
@media (max-width: 480px) {}

// Tablets, iPads
@media (max-width: 786px) {
  footer {
    .grid-container {
      grid-template-columns: 1fr;

      #branding {
        border-right: none;

        img {
          width: 15rem;
        }
      }
    }
  }
}

// Small laptops
@media (max-width: 1024px) {}

// Desktops, large screens
@media (max-width: 1200px) {}

// TV, Extra large screens
@media (min-width: 1201px) {}</style>
