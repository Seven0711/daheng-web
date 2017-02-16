<template>
  <div>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true" @select="handleSelect">
      <el-menu-item index="web1">处理中心</el-menu-item>
      <el-menu-item index="web2">我的工作台</el-menu-item>
      <el-menu-item index="web3">订单管理</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'main',
    data() {
      return {
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>