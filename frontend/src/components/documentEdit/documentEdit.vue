<template>
  <div>
    <el-row>
      <h3>文件列表</h3>
      <div style="height: 20px"></div>
    </el-row>
    <el-table
        :data="list.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
      <el-table-column
          label="文件名"
          prop="title">
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
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "documentEdit",
  data(){
    return{
      search: '',
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
      debugger
      console.log(this.$store.state.listTemp)
      console.log(n);
      this.list.push(n)
    }
  },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
      this.list.forEach((ite,idx)=>{
        if(ite.title == row.title){
          console.log(ite.content);
          this.$router.push({name:'NewDocument'})
          this.$store.commit('content',ite.content)
        }
      })
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.list.forEach((ite,idx)=>{
        if(ite.title == row.title){
          this.list.splice(idx,1)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
