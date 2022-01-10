<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-img
              :src="require('../assets/hl-logo.png')"
              class="my-3"
              contain
              height="50"
            />
          </v-list-item-title>

          <v-list-item-subtitle> Blochchaine Info </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-divider></v-divider> -->

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Asset WebApp</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-img
        :src="require('../assets/Hyperledger-Fabric.png')"
        class="my-3"
        contain
        height="100"
      />
      <asset />
      <!-- <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Blockchain Data</h1>
      </v-col> -->
    </v-main>
  </v-app>
</template>

<script>
import Asset from './AssetBlock.vue';

export default {
  name: 'LandingPage',
  components: {
    Asset,
  },
  data: () => ({
    drawer: null,
    ecosystem: [],
    importantLinks: [],
    whatsNext: [],
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Channel Id', icon: 'mdi-image' },
      { title: 'hieght', icon: 'mdi-help-box' },
    ],
  }),
};
</script>
