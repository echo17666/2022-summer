<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'250px','position':'relative', 'width':'380px'}">
         <v-img
      :src="imgurl"
      height="70%"
    ></v-img>
     <div :style="{'z-index':'100','position':'absolute','bottom':'0px','right':'0px','margin-bottom':'10px','margin-right':'10px'}">
       <v-btn  @click="open()"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">edit</span>
    </v-btn>
    <v-btn  @click="open1()"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">delete</span>
    </v-btn>
    <v-btn  @click="open2()" v-show="design.is_displaying"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">preview</span>
    </v-btn>
     </div>
      
      <v-row>
        <v-col cols="12" md="10" sm="10">
            <router-link :to="{ name: 'Design', params: { id: design.url } }">
            <v-card-title>
              <h3>
             {{design.design_name}}
             </h3>
            </v-card-title>
            </router-link>
         
       
            
        </v-col>
        
      </v-row>

    </v-card>



    <v-dialog v-model="dialog" persistent max-width="600px">
     
      <v-card>
        <v-card-title >
          <span class="headline mx-auto">重命名</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
               <v-col col="12" md="12">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="原型名称"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">取消</v-btn>
          <v-btn color="blue darken-1" text @click="update()">更改</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog1" persistent max-width="600px">
     
      <v-card>
        <v-card-title >
          <span class="headline mx-auto">是否删除</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel1()">手滑了</v-btn>
          <v-btn color="blue darken-1" text @click="deleteDesign()">狠心删除</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>

import {Design} from "@/api/design.js";
export default {
  name: "DesignItem",
  props: ["design"],
  data() {
    return {
        dialog:false,
         imgurl:"",
        dialog1:false,
        name:"",
        intro:"",
        id:"xxx",
    };
  },
  methods: {
    open(){
        this.name=this.design.design_name
        this.dialog=true;
    },
    open1(){
        this.dialog1=true;
    },
    open2(){
      // let id=this.$route.params.id

      // var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // var a = key.split("");
      let s="";
      // for(let j=0;j<id.length;j++){
      //   let b = id.charCodeAt(j);
      //   s+=a[b%36];
      // }
      // s+="PV"
      s+=this.design.id;

      var newPreview = this.$router.resolve({name:'Preview',params: { id: s }})
      window.open(newPreview.href,'_blank')

    },
    deleteDesign(){
        let formdata = new FormData()
        formdata.append('design_id',this.design.id)
        
        Design.deleteDesign(formdata)
        .then((response) => { 
          
            this.$notify({
              title: '删除成功',
              type: 'success'
            })
            this.dialog1 = false;
            this.$parent.getDesigns();
          
         
         
        })
        .catch((error) => {    
          console.log(error) 
        });
    },
    update(){
        if(this.name.length>10){
          this.$notify({
              title: '字数过多',
              type: 'warning'
            })
            return
        }
        let formdata = new FormData()
        formdata.append('design_name',this.name)
        
        formdata.append('design_id',this.design.id)
        
        Design.updatedesign(formdata)
        .then((response) => { 
          if(response.data.code==200){
            this.$notify({
              title: '重命名成功',
              type: 'success'
            })
            this.dialog = false;
            console.log(response.data)
            this.design.design_name=this.name
          }
          else{
            this.$notify({
              title: '名字重复，换一个吧',
              type: 'warning'
            })
            this.dialog = false;
            console.log(response.data)
          }
         
        })
        .catch((error) => {    
          console.log(error) 
        });
    },
    cancel(){
        this.name=this.design.design_name,

        this.dialog = false;
    },
     cancel1(){
        this.dialog1 = false;
    },
    
  },
  mounted(){
    this.i=this.design.id%10;
    this.imgurl=require("../../assets/design/"+this.i+".jpg");
    console.log(this.imgurl)
  }

};
</script>
<style scoped>
  
</style>
