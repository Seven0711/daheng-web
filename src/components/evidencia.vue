<template>
    <div id="evidengcia">
        <!--证据管理表格-->
        <!--条件搜索表单-->
        <!--<el-form :inline="true" :model="searchForm" class="searchForm">
            <el-form-item style="float: right; margin-left:15px; margin-top:15px;">
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item label="时间" style='float: right; margin-top:15px; width:800px;'>
                <el-col :span="5">
                    <el-form-item prop="">
                        <el-date-picker type="date" placeholder="选择日期" v-model="searchForm.beginT"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="1">至</el-col>
                <el-col :span="5">
                    <el-form-item prop="">
                        <el-date-picker type="date" placeholder="选择日期" v-model="searchForm.endT"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item prop="">
                        <el-select v-model="searchForm.keyWord" placeholder="全部">
                            <el-option label="执法事件编号" value="num"></el-option>
                            <el-option label="执法主题" value="title"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item prop="">
                        <el-input v-model="searchForm.keyWord"></el-input>
                    </el-form-item>
                </el-col>
            </el-form-item>
        </el-form>-->
        <!--证据管理表格-->
        <el-table :data="evidengcia" stripe border class='evidengciaTable'>
            <el-table-column label="序号" prop="id"></el-table-column>
            <el-table-column label="执法事件编号" prop="executorId"></el-table-column>
            <el-table-column label="执法主题" prop="enforceName"></el-table-column>
            <el-table-column label="证据数量" prop="totalEvidences"></el-table-column>
            <el-table-column label="发起人" prop="executorName"></el-table-column>
            <el-table-column label="开始时间">
                <template scope="scope">
                    <span>{{ scope.row.startTime | my-date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="结束时间">
                <template scope="scope">
                    <span>{{ scope.row.endTime | my-date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="执法状态">
                <template scope="scope">
                    <span>{{ scope.row.statusCode|stateCode}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button type="primary" icon="view" size="mini" @click="showEvidencia(scope.row)" style='background-color:#387457;border-color:#387457;'>查看</el-button>
                    <!--<el-button type="warning" icon="delete" size="mini" @click="delEvidencia(id)">删除</el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <div id="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
                </el-pagination>
        </div>
        <!--<pagination :currentPage="currentPage" :total="total" :pageSize="pageSize" @size-change="changerPage"></pagination>-->
        <!--查看详情弹出窗-->
        <el-dialog title="证据详情" v-model="dialogVisible" size="tiny">
            <div :label-position="labelPosition" label-width="80px" :model="evidengcia">
                <el-form-item label='名称'></el-form-item>
            </div>
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
    import MainService from 'services/MainService';
    const mainService = new MainService();
    export default {
        name: 'evidengcia',
        data() {
            return {
                labelPosition: 'right',//
                dialogVisible: false, //查看弹出窗口
                delbox: false, //删除弹出窗口
                currentPage: 1, //当前页
                total: 100, //总条数
                page: 1, //第1页
                pageSize: 10, //当前页条数
                sort: 0,
                type: 0,
                keyword: '',
                fromDate: '',
                toDate: '',
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
        mounted() {
            this.$nextTick(() => {
                this.getEvidencia();
            });
        },
        methods: {
            getEvidencia() {
                let param = {};
                param.type = this.type;
                param.keyword = this.keyword;
                param.fromDate = this.fromDate;
                param.toDate = this.toDate;
                let pager = {};
                pager.page = this.page;
                pager.pageSize = this.pageSize;
                pager.sort = this.sort;
                mainService.getActions(pager, param, (res) => {
                    if (res.data.success) {
                        this.evidengcia = res.data.data;
                        this.currentPage = res.data.page;
                        this.total = res.data.total;
                    }
                });
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            delEvidencia() {
                this.delbox = true;
            },
            showEvidencia(data) {
                this.dialogVisible = true;
                console.log(data);
            },
            isDel(id) {
                alert(id);
            }
        },
        filters: {
            stateCode(value) {
                if (value == 1) {
                    return '正在执法';
                } else if (value == 2) {
                    return '执法结束';
                }
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
        margin: 0 auto;
    }
    
    .el-pager li.active {
        border-color: #387457;
        background-color: #387457;
    }
    
    .searchForm {
        width: 95%;
        margin: 0 auto;
        text-align: center;
    }
    
    .el-date-editor.el-input {
        width: 167px;
    }
</style>