<template>
    <div>
        <!--证据管理表格-->
        <el-table :data="evidengcia" stripe border class='evidengciaTable'>
            <!--<el-table-column type="expand">
                    <template scope="props">

                        <p>省: {{ props.row.province }}</p>
                        <p>市: {{ props.row.city }}</p>
                        <p>住址: {{ props.row.detailAddress }}</p>
                        <p>邮编: {{ props.row.zip }}</p>

                        <el-table :data=" evidengcia ">
                            <el-table-column label="证据编号" prop='props.row.province'></el-table-column>
                            <el-table-column label="证据标题" prop='props.row.city'></el-table-column>
                            <el-table-column label="文件大小" prop='props.row.province'></el-table-column>
                            <el-table-column label="固证人" prop='props.row.province'></el-table-column>
                            <el-table-column label="存证时间" prop='props.row.province'></el-table-column>
                            <el-table-column label="证据类型" prop='props.row.province'></el-table-column>
                            <el-table-column label="证据来源" prop='props.row.province'></el-table-column>
                            <el-table-column label="状态" prop='props.row.province'></el-table-column>
                            <el-table-column label="备注" prop='props.row.province'></el-table-column>
                            <el-table-column label="操作" prop='props.row.province'></el-table-column>
                        </el-table>
                        
                    </template>
                </el-table-column>-->

            <el-table-column label="序号" prop="date"></el-table-column>
            <el-table-column label="执法事件编号" prop="name">123</el-table-column>
            <el-table-column label="执法主题" prop="name"></el-table-column>
            <el-table-column label="证据数量" prop="name"></el-table-column>
            <el-table-column label="发起人" prop="name"></el-table-column>
            <el-table-column label="开始时间" prop="name"></el-table-column>
            <el-table-column label="结束时间" prop="name"></el-table-column>
            <el-table-column label="执法状态" prop="name"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button type="primary" icon="view" size="mini" @click="showEvidencia(id)" style='background-color:#387457;border-color:#387457;'>查看</el-button>
                    <!--<el-button type="warning" icon="delete" size="mini" @click="delEvidencia(id)">删除</el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <pagination></pagination>

        <!--查看详情弹出窗-->
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
            <span>title</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">关 闭</el-button>
            </span>
        </el-dialog>
        <!--删除弹出框-->
        <!--<el-dialog title="提示" v-model="delbox" size="tiny">
            <span>确定删除该证据吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delbox = false">取 消</el-button>
                <el-button type="primary" @click="isDel(id)">确 认</el-button>
            </span>
        </el-dialog>-->

    </div>
</template>

<script>
    export default {
        name: 'evidengcia',
        data() {
            return {
                dialogVisible: false,//查看弹出窗口
                delbox: false,//删除弹出窗口
                evidengcia: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    detailAddress: '金沙江路 1518 弄',
                    zip: 200333
                }]
            }
        },
        methods: {
            delEvidencia() {
                this.delbox = true;
            },
            showEvidencia() {
                this.dialogVisible = true;
            },
            isDel(id) {
                alert(id);
            }
        },
        components: {
            pagination: require('components/pagination')
        }
    }

</script>

<style>
    .evidengciaTable {
        width: 95%;
        margin: 20px auto;
    }
    
    table,
    th>div {
        text-align: center;
    }
</style>