<template>
  <div id="blockInfos">
    <div class="blockchain-title">Blockchain Info</div>
    <div class="blockchain-label">Channel Id:</div>
    <div class="blockchain-data">{{ channelId }}</div>
    <div class="blockchain-label">Height:</div>
    <div class="blockchain-data">{{ hieght }}</div>
    <div class="blockchain-label">Previous Hash ID:</div>
    <div class="blockchain-data">{{ previousHashID }}</div>
    <div class="blockchain-label">Current BlockHash:</div>
    <div class="blockchain-data">{{ currentBlockHash }}</div>
    <div class="blockchain-label">TransactionCount:</div>
    <div class="blockchain-data">{{ transactionCount }}</div>
  </div>
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
    const response = await axios.get('bolckinfo');
    Object.assign(this, response.data);

    // ({
    //   channelId: this.channelId,
    //   hieght: this.hieght,
    //   previousHashID: this.previousHashID,
    //   currentBlockHash: this.currentBlockHash,
    //   transactionCount: this.transactionCount,
    // } = await axios.get('bolckinfo'));

    //   this.channelId = channelId;
    //   this.hieght = hieght;
    //   this.previousHashID = previousHashID;
    //   this.currentBlockHash = currentBlockHash;
    //   this.transactionCount = transactionCount;

    //   console.log(this);
  },
};
</script>

<style scoped>
.blockchain-label {
  font-weight: bold;
}
.blockchain-data {
  padding-left: 10px;
  margin-bottom: 10px;
}
.blockchain-title {
  font-weight: bold;
  font-size: 18px;
  color: rgb(255, 5, 5);
  margin-bottom: 12px;
}
</style>
