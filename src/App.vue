<template>
  <NavigationComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
</style>
