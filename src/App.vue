<template>
  <v-app>
    <HomePage />
    <!-- <asset /> -->
  </v-app>
</template>

<script>
import HomePage from './components/LandingPage.vue';
// import Asset from './components/AssetBlock.vue';
// import Toolbar from './components/ToolBar.vue';

export default {
  name: 'App',

  components: {
    HomePage,
    // Asset,
    // Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
