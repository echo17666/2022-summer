<template>
  <div class="design">
    <div class="components">
      <el-form label-width="40px">
        <el-form-item>
            <el-button @click="addinput()">添加输入框</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addbutton()">添加按钮</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addradio()">添加单选框</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addcheckbox()">添加多选框</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addswitch()">添加开关</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addoption()">添加选择器</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addimg()">添加图片</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addrect()">添加矩形</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addcircle()">添加圆</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addtriangle()">添加三角形</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addavatar()">添加头像</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addtag()">添加标签</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="addbread()">添加面包屑</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="save" >
      <el-button @click="save()">
        保存页面
      </el-button>
    </div>
    <div class="saveAsOthers" >
      <el-button @click="saveAsOthers()">
        导出页面
      </el-button>
    </div>
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
            DesignItem,
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