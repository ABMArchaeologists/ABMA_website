<template>
    <div id="tutorialContainer">
      <iframe :src="src" ref="frame" @load="load" v-show="loaded" width="100%" height="2200rem" frameborder="0"></iframe>
    </div>
</template>
  
  <script>
  export default {
    created () {
      console.log('Component created')
      // var element = document.getElementById('navigation');
      // element.style.display = 'none';
    },
    mounted () {
      console.log('Component mounted')
    },
    data () {
      return {
        src: './HowToGuide/howtoguide.html',
        loaded: false,
        isActive: true
      }
    },
    watch: {
      $route (to, from) {
        this.keepAlive = true
      }
    },
    methods: {
      load: function () {
        this.loaded = true
      }
    }
  }
  </script>
  
  <style scoped>
  #tutorialContainer {
    background-color: #FFFFFF;
    /* display: inline-block; */
    height: 100%;
    width: 100%;
    padding-top: 7rem;
  }
  </style>
  