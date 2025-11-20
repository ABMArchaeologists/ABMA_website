<template>
    <div class="title-section">
      <div class="title-container">
        <h1>{{ $t("spoc.title") }}</h1>
        <p>{{ $t("spoc.description1") }}</p><br>
        <p>{{ $t("spoc.description2") }}</p><br>
        <!-- <p>{{ $t("spoc.description3") }}</p> -->
        <button @click='scrollToSection("videos")'>{{ $t("spoc.button_videos") }}</button>
        <button @click="OpenSpocPaper()">{{ $t("spoc.button_paper") }}</button>
      </div>
    </div>

    <div class="spacer layer1"></div>

    <div id="videos">
    <div class="video-section" >
      <div class="video-container">
        <div class="examples">

        <div class="row">
          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_bd9nzv3x&config[provider]={"widgetId":"0_1ohta2d9"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="1.2 Introduction" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video1.title") }}</h3>
            </div>
          </div>

          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_yvvhdhew&config[provider]={"widgetId":"0_2ld2g846"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="1.3 Why model?" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video2.title") }}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_dwdnujl8&config[provider]={"widgetId":"0_bf4v4djf"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="2.2 How to simulate?" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video3.title") }}</h3>
            </div>
          </div>

          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_xldw3qs4&config[provider]={"widgetId":"0_aj6sd7mx"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="4.3 Overview of simulation" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video4.title") }}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_3bm4mccw&config[provider]={"widgetId":"0_rx14x81p"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="5.2 10 steps of model development" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video5.title") }}</h3>
            </div>
          </div>

          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_egqfx3vy&config[provider]={"widgetId":"0_4h18sdmz"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="6.2 Data analysis" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video6.title") }}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_thl5co1i&config[provider]={"widgetId":"0_nuhu8uwi"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="6.3 Validation" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video7.title") }}</h3>
            </div>
          </div>

          <div class="course-block">
            <div class="video">
              <div style="position:relative;padding-bottom:65.25%"><iframe id="kaltura_player" type="text/javascript"  src='https://api.frp2.ovp.kaltura.com/p/10345/embedPlaykitJs/uiconf_id/23456908?iframeembed=true&entry_id=0_nsh5ccbm&config[provider]={"widgetId":"0_wbhsifti"}'  style="width: 720px;height: 405px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="7.2 Best practice" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe></div>
            </div>
            <div class="text">
              <h3>{{ $t("spoc.video8.title") }}</h3>
            </div>
          </div>
        </div>


        </div>
      </div>


    </div>
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
      OpenSpocPaper() {
        const websiteURL = 'https://doi.org/10.5334/jcaa.26';
        window.open(websiteURL, '_blank');
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

      button {
        background: transparent;
        color: #140A01;
        border: 2px solid #140A01;
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

  .layer1 {
    width: 100%;
    aspect-ratio: 900/150;
    background-image: url('../assets/transitions/stacked-waves-haikei-FCF3EB-DFC19B.svg');
    margin-top: auto;
  }

  .video-section {
    background-color: #DFC19B;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
    padding-top: 3rem;

    .video-container {
      width: 90%;
      max-width: 1440px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;



      .examples {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;


        .row{
            // overflow: auto;
            width: 100%;
            margin: auto;
            // display:inline-block;
            text-align: center;
        }

        .course-block {
        //   float:left;
          display:inline-block;
          flex: 1;
          width: 40%;
          margin: 10px;
        //   display: flex;
          background-color: #FCF3EB;
          color: #140A01;
          align-self: stretch;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          align-items: center;
          justify-content: center;
        //   transition: transform 0.3s ease-in-out;

          .text {
            width: 100%;
            display: flex;
            flex-direction: column;
            // padding: 1rem;
            margin-bottom: 20px;
            align-items: center;
            // gap: 1rem;
          }

          img {
            height: 15rem;
            object-fit: cover;
            margin: 1rem;
          }

          .video {
            // width: 200rem;
            object-fit: cover;
            margin: 1rem;
          }



          button {
            width: 20%;
            padding: 1rem;
            margin-top: auto;
            background: #596818;
            border: 2px solid #596818;
            color: #FCF3EB;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: clamp(0.8rem, 0.4rem + 1vw, 1.5rem);

            &:hover {
              color: #FCF3EB;
              border-color: #FCF3EB;
            }
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
