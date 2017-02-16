<template>
  <div>
    <h1>Eve</h1>
    <span>{{data}}</span>
    <router-view></router-view>
  </div>
</template>
<script>
  import MainService from 'services/MainService';
  const mainService = new MainService();
  export default {
    name: 'eve',
    data() {
      return {
        data: 'heeeee'
      }
    },
    mounted() {
      mainService.getTest({}, (res) => {
        console.log(res);
      });
      this.getActions();
    },
    methods: {
      getActions() {
        let param = {};
        let pager = {};
        pager.page = 1;
        pager.pageSize = 10;
        pager.solt = '';
        param.pager = pager;
        param.type = 0;
        param.keyword = '';
        param.fromDate = '';
        param.toDate = '';
        mainService.getActions(param, (res) => {
          console.log(res);
        })
      }
    }
  }

</script>
<style scoped>


</style>
