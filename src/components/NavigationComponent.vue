<template>
  <div id="navigation" v-if="isFooterVisible()" >
  <header :class="{ 'scrolled-nav': scrollPosition > 50 }">
    <nav>
      <div id="nav-bar">
        <div class="branding">
          <img src="../assets/Logo_abma.png" alt="">
        </div>
        <ul v-show="!mobile" class="navigation">
          <li><router-link class="link" :to="{ name: 'home' }">{{ $t("navigation.home") }}</router-link></li>
          <li><router-link class="link" :to="{ name: 'about-tutorial' }">{{ $t("navigation.tutorial") }}</router-link></li>
          <li><router-link class="link" :to="{ name: 'spoc-course' }">{{ $t("navigation.spoc-course") }}</router-link></li>
          <li><router-link class="link" :to="{ name: 'course' }">{{ $t("navigation.course") }}</router-link></li>
          <li><router-link class="link" :to="{ name: 'resources' }">{{ $t("navigation.resources") }}</router-link></li>
          <li><router-link class="link" :to="{ name: 'about' }">{{ $t("navigation.about") }}</router-link></li>
        </ul>
        <div v-show="!mobile" id="flags">
          <img id="git" @click="openGitHub" src="../assets/logos/github_orange.png" alt="">
          <img @click="changeToEnglish" src="../assets/flags/English-flag.png" alt="">
          <img @click="changeToDutch" src="../assets/flags/Netherlands-flag.png" alt="">
        </div>



        <div class="icon">
          <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
        </div>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'home' }">{{ $t("navigation.home") }}</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'about-tutorial' }">{{ $t("navigation.tutorial") }}</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'spoc-course' }">{{ $t("navigation.spoc-course") }}</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'course' }">{{ $t("navigation.course") }}</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'resources' }">{{ $t("navigation.resources") }}</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'about' }">{{ $t("navigation.about") }}</router-link></li>
          <li id="flags">
            <img id="git" @click="openGitHub" src="../assets/logos/github_orange.png" alt="">
            <img @click="changeToEnglish" src="../assets/flags/English-flag.png" alt="">
            <img @click="changeToDutch" src="../assets/flags/Netherlands-flag.png" alt="">
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</div>
</template>

<script>
export default {
  name: 'navigation-bar',
  data () {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      // showNav: this.$route.name !== 'about-tutorial' // Set to false in the specific view where you don't want to show the footer
    }
  },
  computed: {

  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    openGitHub() {
      const websiteURL = 'https://github.com/ABMArchaeologists';
      window.open(websiteURL, '_blank');
    },
    isFooterVisible() {
      // Check if the current route is the specific view where you want to hide the footer
      return this.$route.name !== 'tutorial'; // Adjust 'SpecificView' to match your route name
    },
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },

    updateScroll () {
      this.scrollPosition = window.scrollY
    },

    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 786) {
        console.log('mobile nav on')
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    },

    changeToEnglish () {
      this.$i18n.locale = 'en'
    },
    changeToDutch () {
      this.$i18n.locale = 'nl'
    }
  }
  
}
</script>

<style lang="scss" scoped>
header {
  z-index: 1000;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: #B85800;

  nav {
    z-index: 100;
    position: relative;
    padding: 10px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    justify-content: center;

    @media(min-width: 1440px) {
      max-width: 1440px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #B85800;
      list-style: none;
      text-decoration: none;
    }

    li {
      white-space: nowrap;
      text-transform: uppercase;
      padding: 10px;
    }

    .link {
      font-size: 18px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: #B85800;
      }
    }

    #nav-bar {
      z-index: 100;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      position: relative;

      #flags {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;

        #git {
            width: 1.7rem;
            margin-right: 10px;
          }

        img {
          width: 2rem;
          height: auto;
          transition: opacity 0.3s ease;

          &:hover {
            filter: brightness(0.7);
          }


        }
      }


      .branding {
        font-size: 2em;
        display: flex;
        align-items: center;
        transition: font-size 0.3s ease;

        img {
          width: 130px;
          transition: .5s ease all;
        }
      }

      .navigation {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        z-index: 99;
        margin-left: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 24px;
        height: 100%;

        i {
          cursor: pointer;
          font-size: 24px;
          transition: 0.8s ease all;
        }
      }

      .icon-active {
        transform: rotate(180deg);
      }
    }

    .dropdown-nav {
      z-index: 98;
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      height: auto;
      position: fixed;
      background-color: #FCF3EB;
      margin-top: 49.8px;
      top: 0;
      right: 0;
      transform-origin: bottom center;
      transition: transform 0.5s ease;

      ul {
        font-weight: 500;
        color: #B85800;
        list-style: none;
        text-decoration: none;
      }

      li {
        margin-left: 0;
        text-transform: uppercase;
        padding: 12px;
        margin-left: 12px;

        .link {
          color: #000;
        }
      }

      #flags {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;

        img {
          width: 3rem;
          height: auto;
          transition: opacity 0.3s ease;

          &:hover {
            filter: brightness(0.7);
          }
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: transform 0.5s ease;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(100%);
    }

    .mobile-nav-enter-to {
      transform: translateY(0);
    }
  }
}

.scrolled-nav {
  background-color: #FCF3EB;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    // padding: 8px 0;

    .branding {
      font-size: unset;
      // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: font-size 0.3s ease;
    }
  }
}

// // Mobile devices
// @media (max-width: 480px) {
//   header {
//     nav {

//       // border-bottom: 1px solid #B85800;
//     }
//   }

//   .scrolled-nav {
//     nav {}

//     ;
//   }
// }
</style>
