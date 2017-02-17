<template>
  <div id="pagehead">
    <el-row class="logo">
      <el-col :span="18">
        <img src="../assets/logo-default.png" alt="" style="height:66px;">
      </el-col>
      <el-col :span="2">
        <el-dropdown @command="logout">
          <span class="el-dropdown-link" style='line-height:50px;'>{{username}}
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>-->
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import MainService from 'services/MainService';
  const mainService = new MainService();
  export default {
    name: 'pagehead',
    props: ['username'],
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      logout(command) {
        if (command === 'logout') {
          mainService.userLogout({
            temp: Math.random()
          }, (res) => {
            if (res.data.success) {
              this.$router.push('login');
            }
          });
        }
      }
    }
  }

</script>
<style>
  .logo {
    padding-top: 10px;
  }
  
  .el-menu {
    background-color: rgba(56, 116, 87, 1);
    color: #fff;
  }
  
  .el-dropdown {
    color: #387457;
    cursor: pointer;
  }

</style>

<style scoped>
  .el-dropdown-menu__item{
    font-size:12px;
    line-height:20px;
  }
</style>
