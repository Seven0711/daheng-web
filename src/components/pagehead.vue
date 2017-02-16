<template>
    <div>
        <el-row class="logo">
            <el-col :span="18">
                <img src="../assets/logo-default.png" alt="" style="height:70px;">
            </el-col>
            <el-col :span="2">
                <el-dropdown>
                    <span class="el-dropdown-link" style='line-height:50px;'>用户名称
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'pagehead',
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>

<style>
    .logo {
        padding-top: 10px;
    }
    .el-menu{
        background-color:rgba(56, 116, 87, 1);
        color:#fff;
    }
    .el-dropdown{
        color:#387457;
        cursor: pointer;
    }
</style>