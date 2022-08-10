<template>
  <div class="design" ref="app">
    <div class="components" :style="{'background-color':'#FFFFE0'}">
        <v-row >
          <v-col cols="12" md="3" :style="{'padding':'0px'}">
            <v-card :style="{'height':'110%','min-height':'100vh','z-index':'25'}">
          <el-collapse v-model="activeNames" style="margin-left:25px;margin-top:10px;">
            <el-collapse-item title="图形" name="1">
              <v-row style="margin-top:10px;margin-left:10px">
                <v-col cols="12" md="4">
                  <el-button class="rect" @click="addrect()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="circle" @click="addcircle()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="triangle" @click="addtriangle()"></el-button>
                </v-col>
              </v-row>
            </el-collapse-item>
            <el-collapse-item title="组件" name="2">
              <v-row style="margin-top:10px;margin-left:10px">
                <v-col cols="12" md="4">
                  <el-button class="input" @click="addinput()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="buttonbox" @click="addbutton()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="radio" @click="addradio()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="checkbox" @click="addcheckbox()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="option" @click="addoption()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="switch" @click="addswitch()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="imgbox" @click="addimg()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="carousel" @click="addcarousel()"></el-button>
                </v-col>
                <v-col cols="12" md="4">
                  <el-button class="tag" @click="addtag()"></el-button>
                </v-col>
              </v-row>
            </el-collapse-item>
            <el-collapse-item title="模板" name="3">
              <v-row style="margin-top:10px;margin-left:10px">
                <v-col cols="12" md="6">
                  <el-button style="height:50px;width:120px;" @click="addboard()">画布</el-button>
                </v-col>
                <v-col cols="12" md="6">
                  <el-button style="height:50px;width:120px;" @click="addPcshop()">电脑线上商城</el-button>
                </v-col>
                <v-col cols="12" md="6">
                  <el-button style="height:50px;width:120px" @click="addAndroidshop()">安卓线上商城</el-button>
                </v-col>
                <v-col cols="12" md="6">
                  <el-button style="height:50px;width:120px" @click="addPcresearch()">电脑学习平台</el-button>
                </v-col>
                <v-col cols="12" md="6">
                  <el-button style="height:50px;width:120px" @click="addAndroidresearch()">安卓学习平台</el-button>
                </v-col>
              </v-row>
              
            </el-collapse-item>
          </el-collapse>
          
          <v-row style="text-align:center;margin-top:10px;">
            <v-col cols="12" md="6" >
              <el-button :style="{'width':'100px','height':'40px'}" round type="primary" @click="save()">
                保存页面
              </el-button>
            </v-col>
            <v-col cols="12" md="6" >
              <el-button :style="{'width':'100px','height':'40px'}" round type="primary" @click="saveAsOthers()">
              导出页面
              </el-button>
            </v-col>
            <v-col cols="12" md="6">
              <el-button :style="{'width':'100px','height':'40px'}" round type="primary" @click="preview()">
              生成预览
              </el-button>
            </v-col>
            <v-col cols="12" md="6">
              <el-button :style="{'width':'100px','height':'40px'}" round type="primary" @click="cancelpreview()">
              取消预览
              </el-button>
            </v-col>
            <v-col cols="12" md="6">
              <el-button :style="{'width':'100px','height':'40px'}" round type="primary" @click="$router.go(-1)">
              返回上级
              </el-button>
            </v-col>
          </v-row>
          </v-card>
          </v-col>
<v-col cols="12" md="7">
  <div class="prototype" ref="prototype"> 
    <div v-for="(info,index) in inputinfo"
             :key="index+'1'">
       <Inputbox :info="info"></Inputbox>
    </div>
    <div v-for="(info,index) in buttoninfo"
             :key="index+'2'">
       <ButtonBox :info="info"></ButtonBox>
    </div>
    <div v-for="(info,index) in radioinfo"
             :key="index+'3'">
       <RadioBox :info="info"></RadioBox>
    </div>
    <div v-for="(info,index) in checkboxinfo"
             :key="index+'4'">
       <CheckBox :info="info"></CheckBox>
    </div>
    <div v-for="(info,index) in switchinfo"
             :key="index+'5'">
       <SwitchBox :info="info"></SwitchBox>
    </div>
    <div v-for="(info,index) in avatarinfo"
             :key="index+'6'">
       <AvatarBox :info="info"></AvatarBox>
    </div>
    <div v-for="(info,index) in imginfo"
             :key="index+'7'">
       <ImgBox :info="info"></ImgBox>
    </div>
    <div v-for="(info,index) in rectinfo"
             :key="index+'8'">
       <RectBox :info="info"></RectBox>
    </div>
    <div v-for="(info,index) in optioninfo"
             :key="index+'9'">
       <OptionBox :info="info"></OptionBox>
    </div>
    <div v-for="(info,index) in circleinfo"
             :key="index+'10'">
       <CircleBox :info="info"></CircleBox>
    </div>
    <div v-for="(info,index) in triangleinfo"
             :key="index+'11'">
       <TriangleBox :info="info"></TriangleBox>
    </div>
    <div v-for="(info,index) in taginfo"
             :key="index+'12'">
       <TagBox :info="info"></TagBox>
    </div>
    <div v-for="(info,index) in breadinfo"
             :key="index+'13'">
       <BreadBox :info="info"></BreadBox>
    </div>
    <div v-for="(info,index) in boardinfo"
             :key="index+'14'">
       <BoardBox :info="info"></BoardBox>
    </div>
    </div>
    </v-col>
  <v-col cols="12" md="2" :style="{'padding':'0px'}">
 
      <v-card :style="{'height':'110%','min-height':'100vh','z-index':'25'}">
      <el-form :style="{'margin-left':'10px','margin-right':'10px', 'margin-top':'10px'}">
        <el-form-item label="宽度:">
          <el-input v-model="comwidth">
            </el-input>
        </el-form-item>
        <el-form-item label="高度:">
          <el-input v-model="comheight">
            </el-input>
        </el-form-item>
        <el-form-item label="x:">
          <el-input v-model="comleft">
            </el-input>
        </el-form-item>
        <el-form-item label="y:">
          <el-input v-model="comtop">
            </el-input>
        </el-form-item>
        <!-- <el-form-item label="id:">
          {{this.comid}}
        </el-form-item>
        <el-form-item label="number:">
          {{this.comnumber}}
        </el-form-item> -->
        <!-- <el-from-item> -->
          <v-btn @click="updatecom()">保存修改</v-btn>
        <!-- </el-from-item> -->
      </el-form>
      </v-card>
    
    <div>
      <v-dialog v-model="dialog" persistent max-width="600px">
     
      <v-card>
        <v-card-title >
          <span class="headline mx-auto">请选择画布尺寸</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
               <v-col col="12" md="6">
                <v-text-field
                    v-model="dialog_width"
                    
                    label="宽度"
                    required
                ></v-text-field>
              </v-col>
              <v-col col="12" md="6">
                <v-text-field
                    v-model="dialog_height"
                    
                    label="高度"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">从模板新建</v-btn>
          <v-btn color="blue darken-1" text @click="newBoard()">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
    
  </v-col>
        </v-row>
  
  </div>
   </div>
</template>
<script>
  import { Account } from "@/api/account.js";
  import VueDragResize from 'vue-drag-resize'
  import html2canvas from 'html2canvas'
   import Inputbox from '../com/inputbox.vue'
   import ButtonBox from '../com/button.vue'
   import RadioBox from '../com/radio.vue'
   import CheckBox from '../com/checkbox.vue'
   import SwitchBox from '../com/switch.vue'
   import AvatarBox from '../com/carousel.vue'
   import ImgBox from '../com/img.vue'
   import RectBox from '../com/rectangle.vue'
   import OptionBox from '../com/option.vue'
   import CircleBox from '../com/circle.vue'
   import TagBox from '../com/tag.vue'
   import TriangleBox from '../com/triangle.vue'
   import BreadBox from '../com/bread.vue'
   import BoardBox from '../com/drawboard.vue'

export default {
  name: 'draw',
   components: {
            VueDragResize,
            Inputbox,
            ButtonBox,
            RadioBox,
            CheckBox,
            SwitchBox,
            AvatarBox,
            ImgBox,
            RectBox,
            OptionBox,
            CircleBox,
            TagBox,
            TriangleBox,
            BreadBox,
            BoardBox

        },

  data () {
      return {
        inputinfo:[],
        buttoninfo:[],
        radioinfo:[],
        checkboxinfo:[],
        switchinfo:[],
        optioninfo:[],
        imginfo:[],
        avatarinfo:[],
        rectinfo:[],
        circleinfo:[],
        taginfo:[],
        triangleinfo:[],
        breadinfo:[],
        boardinfo:[],
        drawwidth:500,
        drawheight:500,
        drawtop:100,
        drawleft:500,
        imgUrl: null,
        comid:-1,
        comnumber:0,
        comwidth:0,
        comheight:0,
        comleft:0,
        comtop:0,
        comcontent:'',
        content_disabled:false,
        dialog_width:500,
        dialog_height:500,
        dialog:false,
        activeNames:['3']

      }
    },
    mounted:function(){
      this.show();
    },
    methods: {
      preview(){
        let id=this.$route.params.id
        let s=id.split('DS');
        let prototype_id=s[1];
        

        let formdata = new FormData()
        formdata.append('design_id',prototype_id)
        // formdata.append('project_id',project_id)
        Account.setpreview(formdata)
        .then((response)=>{
          console.log(response)
          if(response.data.code==200){
            this.$notify({
            title:'生成预览成功',
            type:'success'
          })
          this.$router.go(-1)
          }else if(response.data.code==500){
            this.$notify({
            title:'生成预览失败',
            type:'error'
          })
          }else if(response.data.code==501){
            this.$notify({
            title:'已经生成预览',
            type:'warning'
          })
          }
        })
      },
      cancelpreview(){
        let id=this.$route.params.id
        let s=id.split('DS');
        let prototype_id=s[1];

        let formdata = new FormData()
        formdata.append('design_id',prototype_id)
        // formdata.append('project_id',project_id)
        Account.cancelpreview(formdata)
        .then((response)=>{
          console.log(response)
          if(response.data.code==200){
            this.$notify({
            title:'取消预览成功',
            type:'success'
          })
          // this.$router.go(-1)
          }else if(response.data.code==500){
            this.$notify({
            title:'取消预览失败',
            type:'error'
          })
          }else if(response.data.code==501){
            this.$notify({
            title:'未生成预览',
            type:'warning'
          })
          }
        })
      },
      cancel(){
        this.dialog=false;
      },
      showinformation(id){
        this.comid=id
        let list=new Array()
        list.push(this.inputinfo)
        list.push(this.buttoninfo)
        list.push(this.radioinfo)
        list.push(this.checkboxinfo)
        list.push(this.switchinfo)
        list.push(this.optioninfo)
        list.push(this.imginfo)
        list.push(this.avatarinfo)
        list.push(this.rectinfo)
        list.push(this.circleinfo)
        list.push(this.taginfo)
        list.push(this.triangleinfo)
        list.push(this.breadinfo)
        list.push(this.boardinfo)

        for(var i=0;i<14;i++){
          for(var j=0;j<list[i].length;j++){
            if(list[i][j].comid==this.comid){
              this.comwidth=list[i][j].width
              this.comheight=list[i][j].height
              this.comleft=list[i][j].left
              this.comtop=list[i][j].top
              break;
            }
          }
        }
      },
      newBoard(){
        if(this.dialog_width==0||this.dialog_height==0){
          this.$notify({
            title:'宽度和高度不能为0',
            type:'warning'
          })
        }
        let a={width:this.dialog_width,height:this.dialog_height,top:100,left:500,isshown:true,comid:this.comnumber}
        this.boardinfo.push(a);
        this.comnumber+=1
        this.dialog=false
      },
      updatecom(){
        let list=new Array()
        list.push(this.inputinfo)
        list.push(this.buttoninfo)
        list.push(this.radioinfo)
        list.push(this.checkboxinfo)
        list.push(this.switchinfo)
        list.push(this.optioninfo)
        list.push(this.imginfo)
        list.push(this.avatarinfo)
        list.push(this.rectinfo)
        list.push(this.circleinfo)
        list.push(this.taginfo)
        list.push(this.triangleinfo)
        list.push(this.breadinfo)
        list.push(this.boardinfo)

        for(var i=0;i<14;i++){
          for(var j=0;j<list[i].length;j++){
            if(list[i][j].comid==this.comid){
              list[i][j].width=this.comwidth
              list[i][j].height=this.comheight
              list[i][j].left=this.comleft
              list[i][j].top=this.comtop
              break;
            }
          }
        }
      },
      show(){
        let id=this.$route.params.id
        let s=id.split('DS');
        let prototype_id=s[1];

        let list=[]
        let formdata =new FormData()
        formdata.append('design_id',prototype_id)
        // formdata.append('design_id',2)
        Account.getProtype(formdata)
        .then((res)=>{
          console.log(res)
          list=res.data.list;
          this.comnumber=res.data.design.number
          
          this.inputinfo=list[0]
          this.buttoninfo=list[1]
          this.radioinfo=list[2]
          this.checkboxinfo=list[3]
          this.switchinfo=list[4]
          this.optioninfo=list[5]
          this.imginfo=list[6]
          this.avatarinfo=list[7]
          this.rectinfo=list[8]
          this.circleinfo=list[9]
          this.taginfo=list[10]
          this.triangleinfo=list[11]
          this.breadinfo=list[12]
          this.boardinfo=list[13]
          if(this.getnumberOfboard()==0){
            this.dialog=true
          }
        })
        
      },       
      save(){
        let id=this.$route.params.id
        let s=id.split('DS');
        let prototype_id=s[1];

        let list=new Array()
        list.push(this.inputinfo)
        list.push(this.buttoninfo)
        list.push(this.radioinfo)
        list.push(this.checkboxinfo)
        list.push(this.switchinfo)
        list.push(this.optioninfo)
        list.push(this.imginfo)
        list.push(this.avatarinfo)
        list.push(this.rectinfo)
        list.push(this.circleinfo)
        list.push(this.taginfo)
        list.push(this.triangleinfo)
        list.push(this.breadinfo)
        list.push(this.boardinfo)
      
        for(var i=0;i<this.boardinfo.length;i++){
          if(this.boardinfo[i].isshown==true){
            this.drawwidth=this.boardinfo[i].width;
            this.drawheight=this.boardinfo[i].height;
            break;
          }
        }
        let formdata=new FormData()
        formdata.append('list',JSON.stringify(list))
        formdata.append('design_a',this.drawwidth)
        formdata.append('design_b',this.drawheight)
        formdata.append('design_x',this.drawleft)
        formdata.append('design_y',this.drawtop)
        formdata.append('design_id',prototype_id)
        formdata.append('number',this.comnumber)
        // formdata.append('design_id',2)
        Account.saveProtype(formdata)
        .then((res)=>{
          console.log(res)
          if(res.data.code==200){
            this.$notify({
              title: '保存成功',
              type: 'success'
            })
            
          }else{
            this.$notify({
              title: '保存失败',
              type: 'error'
            })
          }
        })

      },
      getnumberOfboard(){
        var num=0
        for(var i=0;i<this.boardinfo.length;i++){
          if(this.boardinfo[i].isshown==true){
            num++
          }
        }
        return num
      },
      saveAsOthers(){
          // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
          html2canvas(this.$refs.prototype, {
            width: 1000, //截图宽度
            height: 1000, //截图高度
            backgroundColor: null, //画出来的图片有白色的边框,不要可设置背景为透明色（null）
            useCORS: true, //支持图片跨域
            scale: 1, //设置放大的倍数
          }).then((canvas) => {
            // 把生成的base64位图片上传到服务器,生成在线图片地址
            let url = canvas.toDataURL("image/png"); // toDataURL: 图片格式转成 base64
            this.fileDownload(url);
          });
      },
      fileDownload(downloadUrl) {
        		let aCreate = document.createElement("a");//创建a元素
       			 aCreate.style.display = "none";//隐藏a元素
        		 aCreate.href = downloadUrl;//把dataURL给a元素的href属性
       			 aCreate.download = "设计原型.png";
       			 document.body.appendChild(aCreate);//触发点击
        		 aCreate.click();
        		 document.body.removeChild(aCreate);//移除
     		},
      addboard(){
        if(this.getnumberOfboard()>0){
          this.$notify({
            title:"最多只能有一个画布",
            type:"warning"
          })
          return
        }
        let a={width:500,height:500,top:100,left:500,isshown:true,comid:this.comnumber}
        this.boardinfo.push(a);
        this.comnumber+=1
      },
      addinput(){
        let a={width:200,height:100,top:200,left:400,isshown:true,comid:this.comnumber}
        this.inputinfo.push(a);
        this.comnumber+=1
      },
      addbutton(){
        let a={width:100,height:50,top:200,left:400,isshown:true,comid:this.comnumber}
        this.buttoninfo.push(a);
        this.comnumber+=1
      },
      addradio(){
        let a={width:100,height:50,top:200,left:400,isshown:true,comid:this.comnumber}
        this.radioinfo.push(a);
        this.comnumber+=1
      },
      addcheckbox(){
        let a={width:100,height:50,top:200,left:400,isshown:true,comid:this.comnumber}
        this.checkboxinfo.push(a);
        this.comnumber+=1
      },
      addswitch(){
        let a={width:50,height:50,top:200,left:400,isshown:true,comid:this.comnumber}
        this.switchinfo.push(a);
        this.comnumber+=1
      },
      addoption(){
        let a={width:240,height:50,top:200,left:400,isshown:true,comid:this.comnumber}
        this.optioninfo.push(a);
        this.comnumber+=1
      },
      addimg(){
        let a={width:200,height:100,top:200,left:400,isshown:true,comid:this.comnumber}
        this.imginfo.push(a);
        this.comnumber+=1
      },
      addcarousel(){
        let a={width:300,height:100,top:200,left:400,isshown:true,comid:this.comnumber}
        this.avatarinfo.push(a);
        this.comnumber+=1
      },
      addrect(){
        let a={width:100,height:100,top:200,left:400,isshown:true,comid:this.comnumber}
        this.rectinfo.push(a);
        this.comnumber+=1
      },
      addcircle(){
        let a={width:200,height:200,top:200,left:400,isshown:true,comid:this.comnumber}
        this.circleinfo.push(a);
        this.comnumber+=1
      },
      addtag(){
        let a={width:100,height:50,top:200,left:400,isshown:true,comid:this.comnumber}
        this.taginfo.push(a);
        this.comnumber+=1
      },
      addtriangle(){
        let a={width:200,height:150,top:200,left:400,isshown:true,comid:this.comnumber}
        this.triangleinfo.push(a);
        this.comnumber+=1
      },
      addbread(){
        let a={width:250,height:50,top:200,left:400,isshown:true,comid:this.comnumber}
        this.breadinfo.push(a);
        this.comnumber+=1
      },
      addPcshop(){
        if(this.getnumberOfboard()>0){
          this.$notify({
            title:"最多只能有一个画布",
            type:"warning"
          })
          return
        }
        this.boardinfo.push({width:824,height:518,top:72,left:349,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.inputinfo.push({width:466,height:50,top:111,left:528,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.optioninfo.push({width:141,height:50,top:207,left:1018,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.avatarinfo.push({width:509,height:100,top:208,left:504,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.switchinfo.push({width:80,height:50,top:264,left:400,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.switchinfo.push({width:80,height:50,top:208,left:400,isshown:true,comid:this.comnumber})
        this.comnumber+=1

        this.imginfo.push({width:92,height:54,top:112,left:397,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:200,height:130,top:370,left:400,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:200,height:130,top:370,left:650,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:200,height:130,top:370,left:900,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:100,height:50,top:114,left:1026,isshown:true,comid:this.comnumber})
        this.comnumber+=1
      },
      addAndroidshop(){
        if(this.getnumberOfboard()>0){
          this.$notify({
            title:"最多只能有一个画布",
            type:"warning"
          })
          return
        }
        this.boardinfo.push({width:346,height:649,top:44,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.inputinfo.push({width:294,height:54,top:68,left:569,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:66,height:55,top:68,left:797,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:100,height:50,top:644,left:545,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:100,height:50,top:644,left:672,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:100,height:50,top:644,left:792,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.avatarinfo.push({width:346,height:100,top:250,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1

        this.imginfo.push({width:76,height:53,top:167,left:565,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:76,height:53,top:167,left:682,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:76,height:53,top:167,left:791,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:173,height:178,top:370,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:173,height:178,top:370,left:720,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        
      },
      addPcresearch(){
        if(this.getnumberOfboard()>0){
          this.$notify({
            title:"最多只能有一个画布",
            type:"warning"
          })
          return
        }
        this.boardinfo.push({width:824,height:518,top:72,left:349,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.inputinfo.push({width:550,height:50,top:111,left:528,isshown:true,comid:this.comnumber})
        this.comnumber+=1
       
        this.avatarinfo.push({width:728,height:100,top:466,left:403,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.radioinfo.push({width:387,height:50,top:174,left:528,isshown:true,comid:this.comnumber})
        this.comnumber+=1

        this.imginfo.push({width:92,height:54,top:111,left:400,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:154,height:212,top:211,left:403,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:348,height:212,top:211,left:587,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:154,height:212,top:211,left:968,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:79,height:56,top:110,left:998,isshown:true,comid:this.comnumber})
        this.comnumber+=1
      },
      addAndroidresearch(){
        if(this.getnumberOfboard()>0){
          this.$notify({
            title:"最多只能有一个画布",
            type:"warning"
          })
          return
        }
        this.boardinfo.push({width:346,height:649,top:44,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.inputinfo.push({width:215,height:50,top:61,left:557,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:66,height:56,top:61,left:705,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:100,height:50,top:383,left:779,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:100,height:50,top:492,left:547,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.buttoninfo.push({width:100,height:50,top:613,left:780,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.avatarinfo.push({width:346,height:100,top:250,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1

        this.imginfo.push({width:216,height:114,top:352,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:216,height:110,top:467,left:680,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:216,height:115,top:577,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:346,height:119,top:130,left:546,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        this.imginfo.push({width:76,height:53,top:62,left:793,isshown:true,comid:this.comnumber})
        this.comnumber+=1
        
      },
      resize(newRect) {
                this.width = newRect.width;
                this.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
      }
    }
    }

</script>
<style scoped>

.el-button{
  width:65px;
  height:65px;
  /* background-color: none !important;
  opacity: 0; */
}
@import "../../assets/com/com.css";
.col-md-4.col-12{
  padding-left:4px;
  padding-right:4px;
  padding-top:2px;
  padding-bottom:2px;
  max-width:100px;
  height:100px
}
.vdr-stick{
  color: rgba(136, 136, 136, 0);
  background-color: rgba(255, 255, 255, 0);
  border: none;
  width: 4px !important;
  height: 4px !important;
}
</style>