<template>
  <div>
    <el-row>
      <h3>文件列表</h3>
      <div style="height: 20px"></div>
    </el-row>
    <el-table
        :data="documentlist"
        style="width: 100%">
      <el-table-column
          label="文件名"
          prop="document_name">
      </el-table-column>
      <el-table-column
          label="日期"
          prop="time">
      </el-table-column>
      <el-table-column
          align="right">
        <template slot="header" slot-scope="scope">
          <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteFile(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="isshowEdit"
      width="30%">
      <!-- <el-input v-model="form.document_name" placeholder="文档名称"></el-input> -->
      <el-upload
  class="upload-demo"
  action=""
  :auto-upload="false"
  :on-change="beforeupload"
  :limit="1"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isshowEdit = false">取 消</el-button>
        <el-button type="primary" @click="editFile">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import { document } from "@/api/document.js";
import { createLogger, mapState } from 'vuex'
export default {
  name: "documentEdit",
  data(){
    return{
      search: '',
      documentlist: [],
      fileList: [],
      isshowEdit: false,
      formData: undefined,
      form: {},
      list:[
          {
            title:'名称',
            status:'状态',
            time:'时间'
          },
          {
            title:'名称',
            status:'状态',
            time:'时间'
          }]
    }
  },
  computed:{
    ...mapState({
      listTemp: state => state.listTemp
    }),
    getList(){
      return this.$store.state.listTemp
    }
  },
  mounted() {
    console.log(this.$store.state.listTemp)
  },
  watch:{
    listTemp:{
      handler(n){
        console.log(n)
        this.list.push(n)
      },
      immediate:true
    },
    getList(n){
      console.log(this.$store.state.listTemp)
      console.log(n);
      this.list.push(n)
    }
  },
  created() {
this.getprojectdocument()
  },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({name:'NewDocument', query: {row: row}})
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.list.forEach((ite,idx)=>{
        if(ite.title == row.title){
          this.list.splice(idx,1)
        }
      })
    },
    getprojectdocument() {
      document.projectdocument({project_id: 1}).then(res => {
        this.documentlist = res.data.documents
      })
    },
    showEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.isshowEdit = true
    },
    editFile() {
      console.log(this.formData)
      this.formData.append('document_id', this.form.id)
      document.updatedocument(this.formData).then(res => {
        this.isshowEdit = false
        this.getprojectdocument()
      })
    },
    deleteFile(row) {
      document.deletedocument({document_id: row.id}).then(res => {
        this.getprojectdocument()
      })
    },
    beforeupload(file) {
      this.formData = new FormData
      console.log(file)
      this.formData.append('document_file', file.raw)
    }
  }
}
</script>

<style scoped>

</style>
