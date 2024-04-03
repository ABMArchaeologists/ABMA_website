<template>
  <div id="title-section">
    <div id="course-text">
      <h1>{{ $t("course.title") }}</h1>
      <p>{{ $t("course.description") }}</p>
      <button @click="downloadZip">Download</button>
    </div>
  </div>

  <div class="test">
    <div class="spacer layer5"></div>
    <div v-if="showDiv" class="course-options">
    <div id="course-gridContainer">
      <div class="lesson-field" @click="scrollToSection('presentation')">
        <img src="../assets/powerpoint-abm.png" alt="">
        <h3>{{ $t("course.courseOptions.presentation.title") }}</h3>
      </div>
      <div class="lesson-field" @click="scrollToSection('worksheet')">
        <img src="../assets/foto-werkbladen.jpg" alt="">
        <h3>{{ $t("course.courseOptions.worksheet.title") }}</h3>
      </div>
      <div class="lesson-field" @click="scrollToSection('teacherGuide')">
        <img src="../assets/lesbrief.png" alt="">
        <h3>{{ $t("course.courseOptions.teacherGuide.title") }}</h3>
      </div>
    </div>
  </div>
  <div ref="presentation" class="spacer layer6"></div>
  </div>

  <div class="explanations">
    <div class="explanations-container">
      <div class="topics">
        <h2 id="presentation">{{ $t("course.topics.presentation.title") }}</h2>
        <div class="presentation">
          <CourseTopic headingText="course.topics.presentation.description.title"
            paragraphText="course.topics.presentation.description.description" :imageSource="powerpointSource"
            sectionClass="description" :isImage="true" :contentOrder="true" :roundedTop="true" />

          <div class="spacer layer1"></div>

          <CourseTopic headingText="course.topics.presentation.illustrations.title"
            paragraphText="course.topics.presentation.illustrations.description" :imageSource="IllustratieAgentsSource"
            sectionClass="illustrations" :isImage="true" :contentOrder="false" />

          <div class="spacer layer2"></div>

          <CourseTopic headingText="course.topics.presentation.animations.title"
            paragraphText="course.topics.presentation.animations.description" :imageSource="hunterSource"
            sectionClass="animations" :isImage="true" :contentOrder="true" :roundedBottom="true" />

          <!-- <div ref="worksheet" class="spacer layer3"></div> -->

          <!-- <CourseTopic headingText="course.topics.presentation.video.title"
            paragraphText="course.topics.presentation.video.description" :videoSource="videoSource" sectionClass="video"
            :isImage="false" :contentOrder="false" :roundedBottom="true" /> -->
        </div>

        <h2  id="worksheet">{{ $t("course.topics.worksheet.title") }}</h2>
        <div class="worksheet">
          <CourseTopic headingText="course.topics.worksheet.description.title"
            paragraphText="course.topics.worksheet.description.description" :imageSource="workSheetsSource"
            sectionClass="description" :isImage="true" :contentOrder="true" :roundedTop="true" />

          <div class="spacer layer1"></div>

          <CourseTopic headingText="course.topics.worksheet.exercises.title"
            paragraphText="course.topics.worksheet.exercises.description" :imageSource="exampleExerciseSource"
            sectionClass="exercises" :isImage="true" :contentOrder="false" />

          <div ref="teacherGuide" class="spacer layer2" id="teacherGuide"></div>

          <CourseTopic headingText="course.topics.worksheet.classroomExercise.title"
            paragraphText="course.topics.worksheet.classroomExercise.description" :imageSource="classroomExerciseSource"
            sectionClass="classroom-exercise" :isImage="true" :contentOrder="true" :roundedBottom="true" />
        </div>

        <h2>{{ $t("course.topics.teacherGuide.title") }}</h2>
        <div class="teacher-guide">
          <CourseTopic headingText="course.topics.teacherGuide.description.title"
            paragraphText="course.topics.teacherGuide.description.description" :imageSource="teacherGuideSource"
            sectionClass="description" :isImage="true" :contentOrder="true" :roundedTop="true" />

          <div class="spacer layer1"></div>

          <CourseTopic headingText="course.topics.teacherGuide.presentationInstructions.title"
            paragraphText="course.topics.teacherGuide.presentationInstructions.description"
            :imageSource="presentationInstructionSource" sectionClass="presentation-instructions" :isImage="true"
            :contentOrder="false" />

          <div class="spacer layer2"></div>

          <CourseTopic headingText="course.topics.teacherGuide.possibleAnswers.title"
            paragraphText="course.topics.teacherGuide.possibleAnswers.description"
            :imageSource="classroomExerciseExplanationSource" sectionClass="possible-answers" :isImage="true"
            :roundedBottom="true" :contentOrder="true" />
        </div>
      </div>
    </div>
  </div>

  <div class="spacer layer4"></div>
</template>

<script>
import CourseTopic from '@/components/CourseTopic.vue'

export default {
  data () {
    return {
      powerpointSource: require('../assets/powerpoint-abm.png'),
      IllustratieAgentsSource: require('../assets/Illustratie_agents.png'),
      hunterSource: require('../assets/Hunter.gif'),
      workSheetsSource: require('../assets/foto-werkbladen.jpg'),
      exampleExerciseSource: require('../assets/opdracht-voorbeeld.png'),
      classroomExerciseSource: require('../assets/klassikale-oefening.png'),
      teacherGuideSource: require('../assets/teacherGuide.png'),
      presentationInstructionSource: require('../assets/powerpoint-instructions.png'),
      classroomExerciseExplanationSource: require('../assets/exerciseExplenations.png'),
      showDiv: true,
      windowWidth: window.innerWidth
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
    CourseTopic
  },
  methods: {
    downloadZip () {
      if(this.$i18n.locale === 'nl')
      {
        // Replace 'your-zip-file.zip' with the actual path to your zip file
        const zipFilePath = '../assets/Lesmateriaal-ABMA.zip'

        // Create a link element
        const link = document.createElement('a')
        link.href = zipFilePath

        // Set the download attribute with the desired file name
        link.download = 'Lesmateriaal-ABMA.zip'
      } else {
        // Replace 'your-zip-file.zip' with the actual path to your zip file
        const zipFilePath = '../assets/ClassroomMaterial-ABMA.zip'

        // Create a link element
        const link = document.createElement('a')
        link.href = zipFilePath

        // Set the download attribute with the desired file name
        link.download = 'ClassroomMaterial-ABMA.zip'
      }


 

      // Append the link to the document
      document.body.appendChild(link)

      // Trigger a click on the link to start the download
      link.click()

      // Remove the link from the document
      document.body.removeChild(link)
    },
    scrollToSection (refName) {
      var section = document.getElementById(refName);
      if (section) {
        section.scrollIntoView({
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

    button {
      background: transparent;
      color: #140A01;
      border: 2px solid #140A01;
      border-radius: 5px;
      margin-top: 16px;
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

.test {
  background-image: url('../assets/Papercut_achtergrond.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
      background-color: #fff;
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
