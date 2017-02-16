// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'

/**global filters */
Vue.filter('my-date', function (time) {
  let date = new Date(time * 1),
    year = date.getFullYear(),
    month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
    day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes + ':' + seconds;
});

/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
