<template>

  <main>
    <main-menu/>
    <slot></slot>
  </main>

</template>

<style lang="scss">
  @import "main.scss";
  @import "variables";
  @import "typography";
  @import "admin-bar";
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