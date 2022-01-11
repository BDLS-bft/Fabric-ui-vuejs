import vue from 'vue';
// observable update the computed & watcher values
const state = vue.observable({
  channelId: '',
  hieght: '',
  previousHashID: '',
  currentBlockHash: '',
  transactionCount: '',
});
export default state;
