<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    html,body{
        margin:0;
        padding:0;
        font-family: "Microsoft YaHei", 微软雅黑, sans-serif;
        box-sizing: border-box;
    }
    
    .logo {
        height: 80px;
        vertical-align: middle;
        padding-top: 20px;
        padding-left:15px;
    }
</style>