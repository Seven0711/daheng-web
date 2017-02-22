<template>
    <div>
        <p>{{pagefooter}}</p>
    </div>
</template>

<script>
    export default {
        name: 'pagefooter',
        data(){
            return {
                pagefooter:"2017&copy深圳市大恒数据安全科技有限责任公司"
            }
        }
    }

</script>

<style scoped>
    div{
        /*position:absolute;
        bottom:0;*/
        width:100%;
        line-height:60px;
        color:#fff;
        background:rgba(56, 116, 87, 1);
    }
    div>p{
        text-align:center;
        margin:0;
    }
</style>