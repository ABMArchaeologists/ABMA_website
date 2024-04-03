<template>
  <div class="title-section">
    <div class="title-container">
      <h1>{{ $t("resource.title") }}</h1>
      <p>{{ $t("resource.description") }}</p>
    </div>
  </div>

  <div class="spacer layer1"></div>

  <div class="extra-options">
    <div class="extra-options-gridContainer">
      <h2 class="title">{{ $t('resource.extra.title') }}</h2>
      <div class="options">
        <div class="option" @click="openNetLogoDictionary">
          <img src="../assets/logos/NetLogo-Logo.png" alt="">
          <h3>{{ $t('resource.extra.netLogoDictionary.title') }}</h3>
          <p>{{ $t('resource.extra.netLogoDictionary.description') }}</p>
        </div>
        <div class="option" @click="openNetLogoModelLibrary">
          <img src="../assets/logos/NetLogo-Logo.png" alt="">
          <h3>{{ $t('resource.extra.netLogoModelLibrary.title') }}</h3>
          <p>{{ $t('resource.extra.netLogoModelLibrary.description') }}</p>
        </div>
        <div class="option" @click="openABMGithub">
          <img src="../assets/logos/github.png" alt="">
          <h3>{{ $t('resource.extra.gitHub.title') }}</h3>
          <p>{{ $t('resource.extra.gitHub.description') }}</p>
        </div>
        <div class="option" @click="openStackOverflow">
          <img src="../assets/logos/stack-overflow.png" alt="">
          <h3>{{ $t('resource.extra.stackOverflow.title') }}</h3>
          <p>{{ $t('resource.extra.stackOverflow.description') }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="spacer layer2"></div>


  <div class="book-section">
    <div class="books-container">
      <h2 class="title">{{ $t('resource.books.title') }}</h2>
      <div class="books">
        <div class="book" @click="openSimulatingTheComplexityOfSocieties">
          <div class="text">
            <h3>{{ $t("resource.books.simulatingTheComplexityOfSocieties.title") }}</h3>
            <p>{{ $t("resource.books.simulatingTheComplexityOfSocieties.description") }}</p>
            <br>
            <p><strong>{{ $t("resource.books.simulatingTheComplexityOfSocieties.labels.authorsLabel") }}</strong> {{
              $t("resource.books.simulatingTheComplexityOfSocieties.writtenBy") }}</p>
            <p><strong>{{ $t("resource.books.simulatingTheComplexityOfSocieties.labels.publisherAndImprintLabel")
            }}</strong> {{
  $t("resource.books.simulatingTheComplexityOfSocieties.publisherAndImprint") }}</p>
            <p><strong>{{ $t("resource.books.simulatingTheComplexityOfSocieties.labels.publicationDateLabel") }}</strong>
              {{
                $t("resource.books.simulatingTheComplexityOfSocieties.publicationDate") }}</p>
          </div>
          <img src="../assets/resources/Agent-Based-Modeling-for-Archaeology-Simulating-the-Complexity-of-Societies.png"
            alt="">
        </div>

        <div class="book" @click="openRCulturalEvolution">
          <div class="text">
            <h3>{{ $t("resource.books.RCultural.title") }}</h3>
            <p>{{ $t("resource.books.RCultural.description") }}</p>
            <br>
            <p><strong>{{ $t("resource.books.RCultural.labels.authorsLabel") }}</strong> {{
              $t("resource.books.RCultural.writtenBy") }}</p>
            <p><strong>{{ $t("resource.books.RCultural.labels.publisherAndImprintLabel")
            }}</strong> {{
  $t("resource.books.RCultural.publisherAndImprint") }}</p>
            <!-- <p><strong>{{ $t("resource.books.RCultural.labels.publicationDateLabel") }}</strong> -->
              <!-- {{ -->
                <!-- // $t("resource.books.RCultural.publicationDate") }}</p> -->
          </div>
          <img src="../assets/resources/usingR.jpg"
            alt="">
        </div>

        <div class="book" @click="OpenNetLogoEcology">
          <div class="text">
            <h3>{{ $t("resource.books.ecology.title") }}</h3>
            <p>{{ $t("resource.books.ecology.description") }}</p>
            <br>
            <p><strong>{{ $t("resource.books.ecology.labels.authorsLabel") }}</strong> {{
              $t("resource.books.ecology.writtenBy") }}</p>
            <p><strong>{{ $t("resource.books.ecology.labels.publisherAndImprintLabel")
            }}</strong> {{
  $t("resource.books.ecology.publisherAndImprint") }}</p>
            <p><strong>{{ $t("resource.books.ecology.labels.publicationDateLabel") }}</strong>
              {{
                $t("resource.books.ecology.publicationDate") }}</p>
          </div>
          <img src="../assets/resources/ecology.png"
            alt="">
        </div>

        <div class="book" @click="OpenNetLogoGeography">
          <div class="text">
            <h3>{{ $t("resource.books.geography.title") }}</h3>
            <p>{{ $t("resource.books.geography.description") }}</p>
            <br>
            <p><strong>{{ $t("resource.books.geography.labels.authorsLabel") }}</strong> {{
              $t("resource.books.geography.writtenBy") }}</p>
            <p><strong>{{ $t("resource.books.geography.labels.publisherAndImprintLabel")
            }}</strong> {{
  $t("resource.books.geography.publisherAndImprint") }}</p>
            <p><strong>{{ $t("resource.books.geography.labels.publicationDateLabel") }}</strong>
              {{
                $t("resource.books.geography.publicationDate") }}</p>
          </div>
          <img src="../assets/resources/geography.jpg"
            alt="">
        </div>

        <div class="book" @click="OpenNetLogoEconomics">
          <div class="text">
            <h3>{{ $t("resource.books.economics.title") }}</h3>
            <p>{{ $t("resource.books.economics.description") }}</p>
            <br>
            <p><strong>{{ $t("resource.books.economics.labels.authorsLabel") }}</strong> {{
              $t("resource.books.economics.writtenBy") }}</p>
            <p><strong>{{ $t("resource.books.economics.labels.publisherAndImprintLabel")
            }}</strong> {{
  $t("resource.books.economics.publisherAndImprint") }}</p>
            <p><strong>{{ $t("resource.books.economics.labels.publicationDateLabel") }}</strong>
              {{
                $t("resource.books.economics.publicationDate") }}</p>
          </div>
          <img src="../assets/resources/economics.jpg"
            alt="">
        </div>


      </div>
    </div>
  </div>

  <div class="spacer layer3"></div>


  <div class="courses">
    <div class="courses-container">
      <h2 class="title">{{ $t("resource.courses.title") }}</h2>
      <div class="examples">
        <div class="course-box" @click="openNetLogoTutorials">
          <div class="text">
            <h3>{{ $t("resource.courses.netlogo_tutorials.title") }}</h3>
            <!-- <h4>{{ $t("resource.tutorials.netlogo_tutorials.courseTitle") }}</h4> -->
            <h4>{{ $t("resource.courses.netlogo_tutorials.instructor") }}</h4>
            <p>{{ $t("resource.courses.netlogo_tutorials.description") }}</p>
          </div>
          <img src="../assets/logos/NetLogo-Logo.png" alt="">
        </div>


        <div class="course-box" @click="openComplexityExplorer">
          <div class="text">
            <h3>{{ $t("resource.courses.complexityExplorer.title") }}</h3>
            <!-- <h4>{{ $t("resource.courses.complexityExplorer.courseTitle") }}</h4> -->
            <h4>{{ $t("resource.courses.complexityExplorer.instructor") }}</h4>
            <p>{{ $t("resource.courses.complexityExplorer.description") }}</p>
          </div>
          <img src="../assets/logos/complexity-explorer.jpeg" alt="">
        </div>

        <div class="course-box" @click="openSeeingABM">
          <div class="text">
            <h3>{{ $t("resource.courses.seeing_abm.title") }}</h3>
            <!-- <h4>{{ $t("resource.tutorials.seeing_abm.courseTitle") }}</h4> -->
            <h4>{{ $t("resource.courses.seeing_abm.instructor") }}</h4>
            <p>{{ $t("resource.courses.seeing_abm.description") }}</p>
          </div>
          <img src="../assets/resources/complexity.png" alt="">
        </div>

      </div>
    </div>
  </div>



</template>

<script>

export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    openSimulatingTheComplexityOfSocieties () {
      const websiteURL = 'https://www.sfipress.org/books/agent-based-modeling-archaeology'
      window.open(websiteURL, '_blank')
    },
    simulationInArchaeology () {
      const websiteURL = 'https://link.springer.com/book/10.1007/978-3-319-00008-4'
      window.open(websiteURL, '_blank')
    },
    openNetLogoDictionary () {
      const websiteURL = 'https://ccl.northwestern.edu/netlogo/docs/dictionary.html'
      window.open(websiteURL, '_blank')
    },
    openNetLogoModelLibrary () {
      const websiteURL = 'https://ccl.northwestern.edu/netlogo/models/'
      window.open(websiteURL, '_blank')
    },
    openStackOverflow () {
      const websiteURL = 'https://stackoverflow.com/questions/tagged/netlogo'
      window.open(websiteURL, '_blank')
    },
    openABMGithub () {
      const websiteURL = 'https://archolen.github.io/The-ABM-in-Archaeology-Bibliography/'
      window.open(websiteURL, '_blank')
    },
    openRCulturalEvolution () {
      const websiteURL = 'https://osf.io/preprints/osf/32v6a'
      window.open(websiteURL, '_blank')
    },
    OpenNetLogoEcology () {a
      const websiteURL = 'https://www.railsback-grimm-abm-book.com/'
      window.open(websiteURL, '_blank')
    },
    OpenNetLogoEconomics () {
      const websiteURL = 'https://onlinelibrary.wiley.com/doi/book/10.1002/9781118945520'
      window.open(websiteURL, '_blank')
    },
    OpenNetLogoGeography() {
      const websiteURL = 'https://www.wiley.com/en-us/Spatial+Simulation%3A+Exploring+Pattern+and+Process-p-9781119970798'
      window.open(websiteURL, '_blank')
    },
    openComplexityExplorer() {
      const websiteURL = 'https://abm.complexityexplorer.org/'
      window.open(websiteURL, '_blank')
    },
    openNetLogoTutorials() {
      const websiteURL = 'https://ccl.northwestern.edu/netlogo/docs/tutorial1.html'
      window.open(websiteURL, '_blank')
    },
    openSeeingABM() {
      const websiteURL = 'https://vis.csh.ac.at/seeing-ABM/'
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
  padding-bottom: 3rem;

  .title-container {
    text-align: center;
    color: #B85800;
    width: 60%;
    max-width: 1440px;
    margin-top: 10rem;

    h1 {
      color: #596818;
    }

    p {
      color: #140A01;
    }
  }
}

.layer1 {
  width: 100%;
  aspect-ratio: 900/150;
  background-image: url('../assets/transitions/stacked-waves-haikei-FCF3EB-DFC19B.svg');
  margin-top: auto;
}


.courses {
  background-color: #B85800;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  padding-top: 3rem;

  .courses-container {
    width: 90%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title {
      color: #FCF3EB;
      text-align: center;
    }

    .examples {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-radius: 8px;

      .course-box {
        cursor: pointer;
        display: flex;
        gap: 2rem;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;

        .text {
          flex: 1;
        }

        img {
          width: 15rem;
          object-fit: cover;
          margin: 1rem;
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}


.layer2 {
  width: 100%;
  aspect-ratio: 900/150;
  background-image: url('../assets/transitions/stacked-waves-haikei-DFC19B-D9AA61.svg');
  margin-top: auto;
}

.videos {
  background-color: #B85800;
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

.layer3 {
  width: 100%;
  aspect-ratio: 900/150;
  background-image: url('../assets/transitions/stacked-waves-haikei-D9AA61-B85800.svg');
  margin-top: auto;
}

.book-section {
  background-color: #D9AA61;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  padding-top: 3rem;

  .books-container {
    width: 90%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title {
      color: #FCF3EB;
      text-align: center;
    }

    .books {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-radius: 8px;

      .book {
        cursor: pointer;
        display: flex;
        gap: 2rem;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;

        .text {
          flex: 1;
        }

        img {
          // width: 100%;
          // max-width: 300px;
          // height: auto;
          // object-fit: cover;
          // border-radius: 8px;
          // height: 20rem;
          // object-fit: cover;
          // margin: 1rem;
          width: 15rem;
          height: 100%;
          object-fit: cover;
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}

.layer4 {
  width: 100%;
  aspect-ratio: 900/150;
  background-image: url('../assets/transitions/stacked-waves-haikei-B85800-BA4219.svg');
  margin-top: auto;
}

.extra-options {
  background-color: #DFC19B;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  .extra-options-gridContainer {
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 1440px;
    margin: 20px auto;
    gap: 2rem;

    .title {
      text-align: center;
      color: #FCF3EB;
    }

    .options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;

      .option {
        cursor: pointer;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        background-color: #FCF3EB;
        transition: transform 0.3s ease-in-out;

        img {
          width: 75%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 8px;
        }

        h3 {
          margin: 10px 0;
          color: #B85800;
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

@media (max-width: 786px) {
  .title-section {
    .title-container {
      width: 90%;
    }
  }

  .coursera,
  .complexity-explorer {
    flex-direction: column;
  }

  .videos {

    .complexity-explorer {
      gap: 0;

      iframe {
        width: 90%;
      }
    }
  }

  .book {
    flex-direction: column;
  }

  .extra-options {

  .extra-options-gridContainer {
    width: 90%;
    .options {
      grid-template-columns: 1fr;
    }
  }
}
}
</style>
