<template>
  <div style="margin-top:15px">
    <el-row>
      <h3>文件列表</h3>
      <div style="height: 20px"></div>
    </el-row>
    <el-table
    :style="{'background-color':'#EEEEEE' }"
        :data="documentlist"
        style="width: 100%">
      <el-table-column
          label="文件名"
          prop="document_name">
      </el-table-column>

      <el-table-column
          align="right">
           <template slot="header" >
         <el-button type="primary" @click="dialogVisible = true">新建</el-button>
        </template>
         
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="deleteFile(scope.row)">删除</el-button>
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

     <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <el-input v-model="value" placeholder="文档名称"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addFile">确 定</el-button>
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
      value:'',
      documentlist: [],
       dialogVisible: false,
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
    addFile() {
      let id=this.$route.params.id

      let s=id.split('JQ');
      let project_id=s[1];
      document.createdocument({document_name: this.value,project_id:project_id,folder_id:0,model_id:1}).then(res => {
        console.log(res)
        
          this.dialogVisible = false
          this.getprojectdocument()
        
      })
      
    },
    handleEdit(index, row) {
      console.log(index, row);

      this.$router.push({name:'NewDocument', params:{id:row.id}})
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
      let id=this.$route.params.id
      let s=id.split('JQ');
      let project_id=s[1];
      document.projectdocument({project_id:project_id}).then(res => {
        this.documentlist = res.data.documents
        console.log(this.documentlist)
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
