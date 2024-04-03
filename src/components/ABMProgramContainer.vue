<template>
  <div id="program-container">
    <!-- ABM programs -->
    <ABMProgram :imageSource="require('../assets/logos/NetLogo-Logo.png')" title="NetLogo" content="" externalLink="https://www.netlogoweb.org/" />

    <ABMProgram :imageSource="require('../assets/logos/AnyLogic-logo.png')" title="AnyLogic" content="" externalLink="https://www.anylogic.com/" />

    <ABMProgram :imageSource="require('../assets/logos/Gama-logo.png')" title="GAMA" content="" externalLink="https://gama-platform.org/" />

    <ABMProgram :imageSource="require('../assets/logos/Mason-logo.png')" title="MASON" content="" externalLink="https://cs.gmu.edu/~eclab/projects/mason/" />

    <ABMProgram :imageSource="require('../assets/logos/Repast-logo.png')" title="Repast" content="" externalLink="https://repast.github.io/" />
  </div>
</template>

<script>
import ABMProgram from '../components/ABMProgram.vue'

export default {
  components: {
    ABMProgram
  }
}
</script>

<style lang="scss" scoped>
#program-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  gap: 40px;
  padding-bottom: 40px;
}

// Media queries
// Mobile devices
@media (max-width: 767px) {
  #program-container {
    grid-template-columns: 1fr; 
  }
}

// Tablets
@media (max-width: 1023px) {
  // section {
  //   #container {
  //     display: flex;
  //     align-items: center;
  //     flex-direction: column;
  //     gap: 10px;
  //     padding-top: 20px;
  //     padding-bottom: 0px;

  //     #text-container {
  //       h1 {
  //         color: #140A01;
  //         font-size: 30px;
  //       }

  //       p {
  //         color: #140A01;
  //         font-size: 15px;
  //       }
  //     }
  //   }
  // }
}

// Small laptops
@media (min-width: 1024px) and (max-width: 1365px) {}

// Large laptops and desktops
@media (min-width: 1366px) {}

// TV, Extra-large screens
@media (min-width: 1920px) {
  section {
    #text-container {
      max-width: 1440px;
    }

    #program-container {
      max-width: 1440px;
    }
  }
}
</style>
