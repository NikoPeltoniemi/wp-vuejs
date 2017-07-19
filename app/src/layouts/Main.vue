<template>

  <main>
    <main-menu/>
    <slot></slot>
  </main>

</template>

<style lang="scss">
  @import "../styles/main.scss";
  @import "../styles/variables";
  @import "../styles/typography";
  @import "../styles/admin-bar";
</style>

<script>
  import MainMenu from '../components/MainMenu.vue'

  export default {

    data: function() {
      return {
        
      }
    },

    components: {
      MainMenu
    }

  }
</script>