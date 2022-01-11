import axios from '../config/axios';
import state from '../config/blockState';

export default async function getBlockchainInfo() {
  const response = await axios.get('bolckinfo');
  Object.assign(state, response.data);
  // return axios.get('bolckinfo'); The works alone
}
