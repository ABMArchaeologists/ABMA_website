<template>
    <!-- <p style="padding-top: 5rem; padding-bottom: 0rem;">Overview of the different lessons in the tutorials.</p> -->
    <div id="table">
    <ExternalSite />
    </div>

    <!-- <div class="spacer layer2"></div>


    <div class="videos">
        <p>This document describes the various competences that are addressed in the tutorials for
        Agent-Based modelling for Archaeologistst. This is described using the competence area’s,
        competences and the proficiency levels from the Digital Competence Framework for Citizens (2.2).
        This document describes the starting levels and the levels gained when learning from the tutorials</p>
        <button onClick=download()>Download</button> -->
  <!-- </div> -->

  


  </template>
  
  <script>
  import ExternalSite from '../components/HowToGuide.vue'
  
  export default {
    components: {
      ExternalSite
    }, 
    methods: {
    download() {
      // Replace 'your-zip-file.zip' with the actual path to your zip file
      const filePath = '../assets/DigComp_ABMA.pdf'

      // Create a link element
      const link = document.createElement('a')
      link.href = zipFilePath

      // Set the download attribute with the desired file name
      link.download = 'DigitalCompetencies_ABMA.pdf'

      // Append the link to the document
      document.body.appendChild(link)

      // Trigger a click on the link to start the download
      link.click()

      // Remove the link from the document
      document.body.removeChild(link)
    },
  }
  } 
  </script>
  
  <style lang="scss" scoped>
  #table {
    background-color: #d9aa61;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    // height: 100vh;
  }

  .layer2 {
  width: 100%;
  aspect-ratio: 900/150;
  background-image: url('../assets/transitions/stacked-waves-haikei-FCF3EB-DFC19B.svg');
  margin-top: auto;
}

.videos {
  background-color: #DFC19B;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 3rem;
  padding-top: 3rem;

  .title {
    color: #FCF3EB;
    margin-bottom: 3rem;
  }

  .complexity-explorer {
    cursor: pointer;
    background-color: #FCF3EB;
    width: 90%;
    max-width: 1440px;
    display: flex;
    gap: 2rem;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;

    .text {
      padding: 1rem;
    }

    .video {
      border-radius: 8px;
      // width: 30rem;
      aspect-ratio: 16 / 9;
      height: 15rem;
      object-fit: cover;
      margin: 1rem;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
}
  </style>
  