// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import router from './router';

/**global filters */
Vue.filter('my-date', function (time) {
  if (time) {
    let date = new Date(time * 1),
      year = date.getFullYear(),
      month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
      day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
      hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
      minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
      seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes + ':' + seconds;
  } else {
    return '';
  }
});
Vue.filter('file-size', function (size) {
  if (size) {
    if (size > 1024 * 1024) {
      return (size * 100 / (1024 * 1024) / 100).toFixed(2) + 'MB';
    } else {
      return ((size * 100 / 1024) / 100).toFixed(2) + 'KB';
    }
  } else {
    return '';
  }
});
Vue.filter('reinforceStatus', function (status) {
  if (status) {
      if (status === 1) {
        return '录制中';
      } else if (status === 2) {
        return '打包中';
      } else if (status === 3) {
        return '签名中';
      } else if (status === 4) {
        return '上传证据中';
      } else if (status === 5) {
        return '上传证据完成';
      }
    } else {
      return '';
    }
});

/* eslint-disable no-new */
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
  App}
});
