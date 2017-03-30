<template>
  <main-layout>
    <intro/>
    <main-menu/>
    <section id="start"></section>
  </main-layout>
</template>

<style lang="scss">

  @import "../layouts/variables";

  #start {
    height: 100vh;
  }

</style>

<script>
  import MainMenu from '../components/MainMenu.vue'
  import MainLayout from '../layouts/Main.vue'
  import Intro from '../components/Intro.vue'

  export default {

    data: function() {
      return {
        
      }
    },

    components: {
      MainLayout,
      MainMenu,
      Intro
    },

    mounted() {


    }
  }
</script>