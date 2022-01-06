<template>
  <v-app>
    <toolbar />
    <hello-world />
    <asset />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Asset from './components/AssetBlock';
import Toolbar from './components/ToolBar';

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
