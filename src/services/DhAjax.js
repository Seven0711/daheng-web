import axios from 'axios';
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// 集中处理所有请求返回结果
export default class DhAjax {
  dhGet (url, param, callback) {
    axios.get(url, {params: param}).then(res => {
      if (res.data.statusCode === 1005) {
        // console.log(Router)
        // Router.push('login')
        window.location = '/login';
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
        // Router.push('login');
        window.location = '/login';
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
        // Router.push('login');
        window.location = '/login';
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
        // Router.push('login');
        window.location = '/login';
      }else {
        callback(res);
      }
    }).catch(error => {
      return Promise.reject(error);
    });
  }
};
