<template>
  <div id="pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: "pagination",
    props:['currentPage','total','pageSize'],
    data() {
      return {
        //  currentPage: 1,
        //  total:100,
        //  pageSize:10
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
  }

</script>
<style>
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

    .el-pager>li.active{
        border-color: #387457;
        background-color: #387457;
    }
</style>

