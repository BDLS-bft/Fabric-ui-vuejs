<template>
  <div id="blockInfos">
      <v-container>
    <v-layout>
      <v-flex xs12 sm6>
        <v-card hover>

          <v-card-media
            src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
            height="150px"
          >
          </v-card-media>

          <v-card-title>
            <h2>v-card-title</h2>
          </v-card-title>

          <v-card-text>
                        <div
                class="productsItemContainer"
                v-for="blockInfo in blockInfos"
                :key="blockInfo.hieght"
                >
                <div class="productsItem">
                    <!-- The rest of the elements -->
                </div>
                </div>
            </div>
            line 1<br>
            line 2<br>
            line 3
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import axios from '../config/axios';

export default {
  name: 'blockInfos',

  data() {
    return {
      blockInfos: [],
    };
  },

  mounted() {
    axios.get('bolckinfo').then((response) => {
      this.blockInfos = response.data.blockInfos;
    });
  },
};
</script>
