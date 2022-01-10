<template>
  <div id="blockInfos">
      <v-container>
   <div channelId,
      hieght,
      previousHashID,
      currentBlockHash,
      transactionCount></div>
  </v-container>

</template>

<script>
import axios from '../config/axios';

export default {
  name: 'blockInfos',

  data() {
    return {
      channelId: '',
      hieght: '',
      previousHashID: '',
      currentBlockHash: '',
      transactionCount: '',
    };
  },

  async mounted() {
    axios.get('bolckinfo').then((response) => {
      const {
        channelId,
        hieght,
        previousHashID,
        currentBlockHash,
        transactionCount,
      } = response.data.blockInfos;

      this.channelId = channelId;
      this.hieght = hieght;
      this.previousHashID = previousHashID;
      this.currentBlockHash = currentBlockHash;
      this.transactionCount = transactionCount;

      //   console.log(this);
    });
  },
};
</script>
