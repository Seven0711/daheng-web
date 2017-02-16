import axios from 'axios';

//集中处理所有请求返回结果
export default class DhAjax {
  dhGet (url, param, callback) {
    axios.get(url, {params: param}).then(res => {
      if (res.data.statusCode === 1005) {
        this.$router.push('login');
      }else {
        callback(res);
      }
    }).catch(error => {
      return Promise.reject(error);
    });
  }
  dhPost (url, param, callback) {
    axios.post(url, param).then(res => {
      if (res.data.statusCode === 1005) {
        this.$router.push('login');
      }else {
        callback(res);
      }
    }).catch(error => {
      return Promise.reject(error);
    });
  }
  dhDelete (url, param, callback) {
    axios.delete(url, param).then(res => {
      if (res.data.statusCode === 1005) {
        this.$router.push('login');
      }else {
        callback(res);
      }
    }).catch(error => {
      return Promise.reject(error);
    });
  }
  dhPatch (url, param, callback) {
    axios.patch(url, param).then(res => {
      if (res.data.statusCode === 1005) {
        this.$router.push('login');
      }else {
        callback(res);
      }
    }).catch(error => {
      return Promise.reject(error);
    });
  }
};
