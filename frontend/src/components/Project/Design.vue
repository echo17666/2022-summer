<template>
  <div class="design">
    <div class="components">
        <v-row >
          <v-col cols="12" md="3">
            <v-card outlined :style="{'padding':'10px','height':'100vh'}">
        <v-row :style="{'margin-left':'5px','margin-top':'5px'}">
          <v-col cols="12" md="4">

            <el-button @click="addinput()">输入框</el-button>

          </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addbutton()">按钮</el-button>

          </v-col>
        <v-col cols="12" md="4">

            <el-button @click="addradio()">单选框</el-button>

          </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addcheckbox()">多选框</el-button>

        </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addswitch()">开关</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addoption()">选择器</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addimg()">图片</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addrect()">矩形</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addcircle()">圆</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addtriangle()">三角形</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addavatar()">头像</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addtag()">标签</el-button>

         </v-col>
         <v-col cols="12" md="4">

            <el-button @click="addbread()">面包屑</el-button>

         </v-col>
<v-col cols="12" md="12">
         <div class="save" >
      <el-button :style="{'width':'100px','height':'45px'}" @click="save()">
        保存页面
      </el-button>
    </div>
    </v-col>
    <v-col cols="12" md="12">
    <div class="saveAsOthers" >
      <el-button :style="{'width':'100px','height':'45px'}" @click="saveAsOthers()">
        导出页面
      </el-button>
    </div>
    </v-col>
        </v-row>
        </v-card>
    </v-col>
<v-col cols="12" md="9">
    
      
   
    
    
    
    <div v-for="(info,index) in inputinfo"
             :key="index">
       <Inputbox :info="info"></Inputbox>
    </div>
    <div v-for="(info,index) in buttoninfo"
             :key="index">
       <ButtonBox :info="info"></ButtonBox>
    </div>
    <div v-for="(info,index) in radioinfo"
             :key="index">
       <RadioBox :info="info"></RadioBox>
    </div>
    <div v-for="(info,index) in checkboxinfo"
             :key="index">
       <CheckBox :info="info"></CheckBox>
    </div>
    <div v-for="(info,index) in switchinfo"
             :key="index">
       <SwitchBox :info="info"></SwitchBox>
    </div>
    <div v-for="(info,index) in avatarinfo"
             :key="index">
       <AvatarBox :info="info"></AvatarBox>
    </div>
    <div v-for="(info,index) in imginfo"
             :key="index">
       <ImgBox :info="info"></ImgBox>
    </div>
    <div v-for="(info,index) in rectinfo"
             :key="index">
       <RectBox :info="info"></RectBox>
    </div>
    <div v-for="(info,index) in optioninfo"
             :key="index">
       <OptionBox :info="info"></OptionBox>
    </div>
    <div v-for="(info,index) in circleinfo"
             :key="index">
       <CircleBox :info="info"></CircleBox>
    </div>
    <div v-for="(info,index) in triangleinfo"
             :key="index">
       <TriangleBox :info="info"></TriangleBox>
    </div>
    <div v-for="(info,index) in taginfo"
             :key="index">
       <TagBox :info="info"></TagBox>
    </div>
    <div v-for="(info,index) in breadinfo"
             :key="index">
       <BreadBox :info="info"></BreadBox>
    </div>
    </v-col>
        </v-row>
  </div>
   </div>
</template>
<script>
  import { Account } from "@/api/account.js";

   import Inputbox from '../com/inputbox.vue'
   import ButtonBox from '../com/button.vue'
   import RadioBox from '../com/radio.vue'
   import CheckBox from '../com/checkbox.vue'
   import SwitchBox from '../com/switch.vue'
   import AvatarBox from '../com/avatar.vue'
   import ImgBox from '../com/img.vue'
   import RectBox from '../com/rectangle.vue'
   import OptionBox from '../com/option.vue'
   import CircleBox from '../com/circle.vue'
   import TagBox from '../com/tag.vue'
   import TriangleBox from '../com/triangle.vue'
   import BreadBox from '../com/bread.vue'
export default {
  name: 'Design',
   components: {
            
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
            BreadBox

        },

  data () {
      return {
        inputinfo:[{}],
        buttoninfo:[{}],
        radioinfo:[{}],
        checkboxinfo:[{}],
        switchinfo:[{}],
        optioninfo:[{}],
        imginfo:[{}],
        avatarinfo:[{}],
        rectinfo:[{}],
        circleinfo:[{}],
        taginfo:[{}],
        triangleinfo:[{}],
        breadinfo:[{}]

      }
    },
    mounted:function(){
      show()
    },
    methods: {
      show(){
        let list=new list()
      },       
      save(){
        let list=new list()
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

        let formdata=new FormData()
        formdata.append('list',list)
        Account.saveProtype(formdata)
        .then((res)=>{
          console.log(res)
        })

      },
      saveAsOthers(){

      },
      addinput(){
        let a={width:200,height:100,top:200,left:200,isshown:true}
        this.inputinfo.push(a);
      },
      addbutton(){
        let a={width:100,height:50,top:200,left:200,isshown:true}
        this.buttoninfo.push(a);
      },
      addradio(){
        let a={width:100,height:50,top:200,left:200,isshown:true}
        this.radioinfo.push(a);
      },
      addcheckbox(){
        let a={width:100,height:50,top:200,left:200,isshown:true}
        this.checkboxinfo.push(a);
      },
      addswitch(){
        let a={width:100,height:50,top:200,left:200,isshown:true}
        this.switchinfo.push(a);
      },
      addoption(){
        let a={width:240,height:50,top:200,left:200,isshown:true}
        this.optioninfo.push(a);
      },
      addimg(){
        let a={width:200,height:100,top:200,left:200,isshown:true}
        this.imginfo.push(a);
      },
      addavatar(){
        let a={width:100,height:50,top:200,left:200,isshown:true}
        this.avatarinfo.push(a);
      },
      addrect(){
        let a={width:100,height:100,top:200,left:200,isshown:true}
        this.rectinfo.push(a);
      },
      addcircle(){
        let a={width:200,height:200,top:200,left:200,isshown:true}
        this.circleinfo.push(a);
      },
      addtag(){
        let a={width:100,height:50,top:200,left:200,isshown:true}
        this.taginfo.push(a);
      },
      addtriangle(){
        let a={width:200,height:150,top:200,left:200,isshown:true}
        this.triangleinfo.push(a);
      },
      addbread(){
        let a={width:250,height:50,top:200,left:200,isshown:true}
        this.breadinfo.push(a);
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
  width:90px;
  height:90px
}
.col-md-4.col-12{
  padding-left:4px;
  padding-right:4px;
  padding-top:2px;
  padding-bottom:2px;
  max-width:100px;
  height:100px
}
</style>