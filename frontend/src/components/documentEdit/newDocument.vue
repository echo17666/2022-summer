<template>
  <div>
    <el-tiptap v-model="content" :extensions="extensions" placeholder="Write something ..."/>
    <div style="height: 15px"></div>
    <el-row >
      <el-button style="float: right;margin-right: 15px" @click="saveFile()">保存</el-button>
      <el-button style="float: right" @click="clearTiptap()">清空内容</el-button>
    </el-row>
  </div>
</template>

<script>
import { document } from "@/api/document.js";
import {
  // all extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Link,
  Image,
  Blockquote,
  ListItem,
  BulletList, // use with ListItem
  OrderedList, // use with ListItem
  TodoItem,
  TodoList, // use with TodoItem
  TextAlign,
  Indent,
  HorizontalRule,
  HardBreak,
  History,
  // LineHeight,
  // Iframe,
  // CodeBlock,
  // TrailingNode,
  // Table, // use with TableHeader, TableCell, TableRow
  // TableHeader,
  // TableCell,
  // TableRow,
  // FormatClear,
  // TextColor,
  // TextHighlight,
  // Preview,
  // Print,
  Fullscreen,
  CodeView
  // SelectAll,
} from "element-tiptap";
import axios from 'axios'
import codemirror from "codemirror";
import "codemirror/lib/codemirror.css"; // import base style
import "codemirror/mode/xml/xml.js"; // language
import "codemirror/addon/selection/active-line.js"; // require active-line.js
import "codemirror/addon/edit/closetag.js";
import {createLogger, mapState} from "vuex"; // autoCloseTags

export default {

  name: "newDocument",
  data(){
    return{
      stats:false,
      gettime:'',
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Link({ bubble: true }),
        new Image(),
        new Blockquote(),
        new TextAlign(),
        new ListItem(),
        new BulletList({ bubble: true }),
        new OrderedList({ bubble: true }),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new HardBreak(),
        new HorizontalRule({ bubble: true }),
        new Fullscreen(),
        new CodeView({
          codemirror,
          codemirrorOptions: {
            styleActiveLine: true,
            autoCloseTags: true
          }
        }),
        new History()
      ],
      title:'',
      content: `<h2 style="text-align: center">Welcome To Element Tiptap Editor Demo</h2><p>🔥 <strong>Element Tiptap Editor </strong>🔥is a WYSIWYG rich-text editor using&nbsp; <a href="https://github.com/scrumpy/tiptap" rel="noopener noreferrer nofollow">tiptap</a>&nbsp;and <a href="https://github.com/ElemeFE/element" rel="noopener noreferrer nofollow">element-ui</a>&nbsp;for Vue.js <img src="https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png" alt="" title="" height="200" data-display="right"> that\'s easy to use, friendly to developers, fully extensible and clean in design.</p><p></p><p style="text-align: right">👉Click on the image to get started image features 👉</p><p></p><p>You can switch to <strong>Code View </strong>💻 mode and toggle <strong>Fullscreen</strong> 📺 in this demo.</p><p></p><p><strong>Got questions or need help or feature request?</strong></p><p>🚀 <strong>welcome to submit an <a href="https://github.com/Leecason/element-tiptap/issues" rel="noopener noreferrer nofollow">issue</a></strong> 😊</p><p>I\'m continuously working to add in new features.</p><p></p><blockquote><p>This demo is simple, switch tab for more features.</p><p>All demos source code: <a href="https://github.com/Leecason/element-tiptap/blob/master/examples/views/Index.vue" rel="noopener noreferrer nofollow">source code 🔗</a></p></blockquote>`
    }
  },
  computed:{
    ...mapState({
      contentNew: state => state.content
    })
  },
  watch:{
    contentNew:{
      handler(n){
        this.content = n;
      },
      immediate:true
    },
    $route:{
      handler(n){
        this.row = n.query.row;
        // const service = axios.create({
        //     // baseURL: 'http://127.0.0.1:8000',//本地
        //     baseURL: 'https://document-1310787519.cos.ap-beijing.myqcloud.com',//服务器
        //     // baseURL:'', 这里之后是部署的后端地址
        //     timeout: 50000 //超时时间
        // });
        // service(this.row.document_key, {
        //     method: 'get',
        // }).then(res => {
        //   console.log(res)
        // })
        this.content = this.row.document_content
        console.log(this.row)
      },
      immediate:true
    },
  },
  methods:{
    getCurrentTime() {
      //获取当前时间并打印
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
      return _this.gettime
    },
    clearTiptap(){
      this.content = ''
    },
    getContent(){
      let id = this.$route.params.id;
      let formdata=new FormData();
      formdata.append('document_id',id)
      document.getContent(formdata)
       .then((response) => {
         this.content=response.data.document.document_content;
        })
        .catch((error) => {
          console.log(error)
        });
    },
    saveFile(){
      console.log("保存文档");
      this.search()
    },
    search(){
      let temp = {
        title:this.title,
        time:this.getCurrentTime,
        status:'保存',
        content:this.content
      }
      let file =  new File([this.content], this.title + '.txt', {type: 'text/plain'})
      let formData = new FormData
      formData.append('document_id', this.$route.params.id)
      formData.append('document_content', this.content)
      document.updatedocument(formData).then(res => {
        console.log(res)
      })
      


    }
  },
  mounted(){
    this.getContent()
  }
}
</script>

<style scoped>

</style>
