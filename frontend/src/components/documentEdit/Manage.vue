<template>
  <div class="peoplemanage">
    <div>
        <el-button type="primary" @click="dialogVisible = true">新建</el-button>
      </div>
    <div class="row">
      
      <v-col cols="12" md="2">
        <v-navigation-drawer
            permanent
            height="100vh"
        >

          <v-list dense>
            <v-list-item
                @click="$router.push({name:'NewDocument'})"
            >
              <v-list-item-icon>
            <span class="material-icons-outlined">
                stars</span>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>文档新建</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item
                @click="$router.push({name:'DocumentEdit'})"
            >
              <v-list-item-icon>
            <span class="material-icons-outlined">
                stars</span>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>文档列表</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider/>
          </v-list>
        </v-navigation-drawer>
      </v-col>

      <v-col cols="12" md="10">
        <router-view:style="{'background-color':'#EEEEEE'}"/>
      </v-col>

    </div>
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
export default {
  name: 'documentmanage',
  data() {
    return {
      dialogVisible: false,
      value: '',
      fileType: [
        {
          name: '文档',
          value: 'docx'
        },
        {
          name: 'pdf',
          value: 'pdf'
        },
        {
          name: 'excel',
          value: 'xlsx'
        },
      ]
    }
  },
  methods: {
    addFile() {
      document.createdocument({document_name: this.value,project_id: 1}).then(res => {
        console.log(res)
        if (res.data.errno == 0) {
          this.dialogVisible = false
        }
      })
    }
  }
}
</script>

<style>

</style>
