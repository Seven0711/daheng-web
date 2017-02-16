<template>
  <div>
    <h1>{{hehe}}</h1>
    <span>用户名</span><input type="text" v-model="username">
    <span>密码</span><input type="password" v-model="password">
    <input type="button" value="登录" @click="doLogin()">
  </div>
</template>
<script>
  import MainService from 'services/MainService';
  const mainService = new MainService();
  export default {
    name: 'word',
    data() {
      return {
        hehe: '登录',
        username: '',
        password: ''
      }
    },
    methods: {
      doLogin() {
        let param = {};
        param.username = this.username;
        param.password = this.password;
        mainService.userLogin(param, (res) => {
          console.log(res);
          if (res.data.success) {
            this.$router.replace('/hello');
          }else{
              
          }
        });
      }
    }
  }

</script>
<style>


</style>
