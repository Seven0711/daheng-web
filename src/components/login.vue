<template>
    <div>
        <el-row class="logo">
            <el-col :span="18">
                <img src="../assets/logo-default.png" alt="">
            </el-col>
            <el-col :span="6"></el-col>
        </el-row>
        <div class='banner' :gutter="10">
            <el-col :xs="24" :sm="24" :md="16" :lg="16">
                <img src="../assets/logo-banner.png" alt="" class="img-response">
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" class='loginbox'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" v-model="labelPosition" class='loginform'>
                    <h1>账号登陆</h1>
                    <el-form-item prop="name">
                        <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="ruleForm.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" class='loginbt'>登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </div>
        <footer>
            <p>2017&copy深圳市大恒数据有限科技公司</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                labelPosition: 'top',
                ruleForm: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
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

<style scoped>
    .loginbt {
        width: 100%;
        background-color: rgba(56, 116, 87, 1);
        border-color: rgba(56, 116, 87, 1);
        margin-top:10px;
    }
    
    .logo {
        height: 80px;
        vertical-align: middle;
        padding-top: 20px;
        padding-left:15px;
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
    @media screen and (max-width: 991px){
        .loginform {
            margin:0 auto;
        }
    }
    @media screen and (min-width: 991px){
        .logo {
            padding-left:260px;
        }
    }
    
    .loginform>h1 {
        padding-top:20px;
        font-weight: normal;
        color: #666;
    }
    
    .el-input{
        border-radius:0px !important;
        padding-top:10px;
    }
    
    .img-response {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    }
    
    footer {
        width: 100%;
        text-align: center;
    }
</style>