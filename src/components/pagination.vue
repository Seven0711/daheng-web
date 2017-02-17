<template>
    <div id="pagination" width="100%">
        <el-button-group>
            <el-button type="primary" icon="arrow-left">上一页</el-button>
            <el-button type="default">...</el-button>
            <el-button type="default">1</el-button>
            <el-button type="default">2</el-button>
            <el-button type="default">3</el-button>
            <el-button type="default">4</el-button>
            <el-button type="default">5</el-button>
            <el-button type="default">...</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>
</template>

<script>
    export default {
        name:"pagination",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
     .el-button--primary{
        background-color:#387457;
        border-color:#387457;
    }
    .el-button:focus, .el-button:hover{
        color:#387457;
        border-color:#387457;
    }
    #pagination{
        text-align: center;
    }
</style>