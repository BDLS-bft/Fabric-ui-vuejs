<template>
  <v-app>
    <toolbar />
    <hello-world />
    <asset />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Asset from './components/AssetBlock.vue';
import Toolbar from './components/ToolBar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Asset,
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
