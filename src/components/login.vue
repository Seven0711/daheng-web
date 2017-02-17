<template>
  <div>
    <el-row class="logo">
      <el-col :span="18">
        <img src="../assets/logo-default.png" alt="" style="height: 70px;">
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <div class='banner' :gutter="10">
      <el-col :xs="24" :sm="24" :md="16" :lg="16">
        <img src="../assets/logo-banner.png" alt="" class="img-response">
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" class='loginbox'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" v-model="labelPosition" class="loginform" v-on:keyup.enter="submitForm('ruleForm')">
          <h1>账号登录</h1>
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" min-length="6" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="loginbt">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <footer>
      <p>2017&copy深圳市大恒数据安全科技有限责任公司</p>
    </footer>
    <!--系统提示-->
    <el-dialog title="系统提示" v-model="dialogVisible" size="tiny" top="35%" :close-on-click-modal="false" :close-on-press-escape="false"
      :show-close="false">
      <span>{{loginMsg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <!--<el-button type="primary" @click="delTodo(delId)">确 定</el-button>-->
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import MainService from 'services/MainService';
  const mainService = new MainService();
  export default {
    name: 'login',
    data() {
      return {
        labelPosition: 'top',
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        loginMsg: '',
        dialogVisible: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let param = {};
            param.username = this.ruleForm.username;
            param.password = this.ruleForm.password;
            mainService.userLogin(param, (res) => {
              console.log(res);
              if (res.data.success) {
                this.$router.push('evidencia');
              } else {
                // this.dialogVisible = true;
                // this.loginMsg = res.data.msg;
                this.$message.error(res.data.msg);
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>
<style>
  .loginbt {
    width: 100%;
    background-color: rgba(56, 116, 87, 1);
    border-color: rgba(56, 116, 87, 1);
    margin-top: 10px;
  }
  
  .banner {
    float: left;
    width: 100%;
    padding: 20px 0;
    background: rgba(56, 116, 87, 1);
  }
  
  .loginbox {
    margin-top: 30px;
  }
  
  .loginform {
    background: #fff;
    padding: 0 20px;
    width: 260px;
    height: 322px;
  }
  
  @media screen and (max-width: 991px) {
    .loginform {
      margin: 0 auto;
    }
  }
  
  @media screen and (min-width: 991px) {
    .logo {
      padding-left: 260px;
    }
  }
  
  .loginform>h1 {
    padding-top: 20px;
    font-weight: normal;
    color: #666;
  }
  
  .el-input {
    border-radius: 0px !important;
  }

  .el-input__inner{
    border-radius:0;
    height:40px;
  }
  
  .img-response {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
  
.el-button--primary:focus, .el-button--primary:hover{
      background: #25c377;
    border-color: #25c377;
    color: #fff;
}

  footer {
    width: 100%;
    text-align: center;
  }

</style>
