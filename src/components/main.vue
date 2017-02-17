<template>
  <div>
    <pageHead></pageHead>
    <el-menu theme="default" :default-active="defaultActive" mode="horizontal" :router="true" @select="handleSelect">
      <el-menu-item index="evidencia">证据管理</el-menu-item>
      <!--<el-menu-item index="web2">我的工作台</el-menu-item>
      <el-menu-item index="web3">订单管理</el-menu-item>-->
    </el-menu>
    <router-view></router-view>
    <pagefooter></pagefooter>
  </div>
</template>

<script>
  import pageHead from 'components/pagehead'
  import pagefooter from 'components/pagefooter'
  export default {
    name: 'main',
    data() {
      return {
        defaultActive:this.$router.currentRoute.name
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components:{
      pageHead:pageHead,
      pagefooter:pagefooter
    }
  }

</script>
<style scoped>
  .el-menu-item{
    color:#fff;
  }
  .el-menu--horizontal>.el-menu-item:hover,.el-menu-item.is-active{
    border-bottom:5px solid #387457;
    color:#387457;
  }
  .el-menu-item.is-active{
    background-color:#eef1f6;
    }
</style>