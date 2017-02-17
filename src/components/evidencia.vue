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
            <el-table-column label="序号" type="index" width="70"></el-table-column>
            <el-table-column label="证据编号" prop="evidenceId"></el-table-column>
            <el-table-column label="固证主题" prop="title"></el-table-column>
            <el-table-column label="文件名" prop="fileName"></el-table-column>
            <el-table-column label="文件大小" prop="fileSize">
                <template scope="scope">
                    <span>{{scope.row.fileSize | file-size}}</span>
                </template>
            </el-table-column>
            <el-table-column label="备注" prop="remark"></el-table-column>
            <el-table-column label="上传时间">
                <template scope="scope">
                    <span>{{ scope.row.evidenceCreated | my-date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态">
                <template scope="scope">
                    <span>{{ scope.row.statusCode|stateCode}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button type="primary" icon="view" size="mini" @click="showEvidencia(id)" style='background-color:#387457;border-color:#387457;'>查看</el-button>
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
    import MainService from 'services/MainService';
    const mainService = new MainService();
    export default {
        name: 'evidengcia',
        data() {
            return {
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
                evidengcia: []
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.getEvidencia();
            });
        },
        methods: {
            getEvidencia(page, pageSize) {
                let param = {};
                param.type = this.type;
                param.keyword = this.keyword;
                param.fromDate = this.fromDate;
                param.toDate = this.toDate;
                let pager = {};
                pager.page = page || 1;
                pager.pageSize = pageSize || 10;
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
                this.getEvidencia(val, 10);
                this.page = val;
            },
            handleCurrentChange(val) {
                this.getEvidencia(this.page, val);
                this.currentPage = val;
            },
            delEvidencia() {
                this.delbox = true;
            },
            showEvidencia() {
                this.dialogVisible = true;
            },
            isDel(id) {

            }
        },
        filters: {
            stateCode(status) {
                if (status) {
                    if (status === 1) {
                        return '录制中';
                    } else if (status === 2) {
                        return '打包中';
                    } else if (status === 3) {
                        return '签名中';
                    } else if (status === 4) {
                        return '上传证据中';
                    } else if (status === 5) {
                        return '上传证据完成';
                    }
                } else {
                    return '';
                }
            }
        }
    }

</script>
<style>
    #evidengcia {
        min-height: 754px;
    }
    
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