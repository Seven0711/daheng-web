<template>
    <div id="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        data() {
            return {

            }
        },methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            }
            },
            data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        }
    }

</script>

<style scoped>
    .el-button--primary {
        background-color: #387457;
        border-color: #387457;
    }
    
    .el-button--default:focus,
    .el-button--default:hover {
        color: #387457;
        border-color: #387457;
    }
    
    #pagination {
        width: 95%;
        min-height: 411px;
        text-align: center;
        margin:0 auto;
    }

    .el-pager li.active{
        border-color: #387457;
        background-color: #387457;
    }
</style>