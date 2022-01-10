import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_API_HOST}/api/`,
  // until backend changes - this is needed
  auth: {
    username: 'admin',
    password: '123',
  },
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
  },
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;
instance.Cancel = axios.Cancel;
instance.cancelSource = axios.CancelToken.source();
export default instance;
