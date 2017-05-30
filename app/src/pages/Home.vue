<template>
  <main-layout>
    <h1>Wordpress VueJS Starter Theme</h1>
  </main-layout>
</template>

<style lang="scss">

  @import "../layouts/variables";

  h1 {
    text-align: center;
  }

</style>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {

    data: function() {
      return {
        
      }
    },

    components: {
      MainLayout
    },

    mounted() {


    }
  }
</script>