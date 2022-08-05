<template>
  <div>
    <v-card outlined class="mx-auto" :style="{'border-radius':'20px',height:'200px'}">
      <v-row>
        <v-col cols="12" md="10" sm="10">
            <router-link :to="{ name: 'Design', params: { id: design.url } }">
            <v-card-title>
              <h1>
             {{design.design_name}}
             </h1>
            </v-card-title>
            </router-link>
         
          <v-spacer></v-spacer>
     
           
       
          <v-card-actions>
                
          </v-card-actions>
            
        </v-col>
        <v-col cols="12" md="2" sm="10">
             <v-btn  @click="open()"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">edit</span>
    </v-btn>
    <v-btn  @click="open1()"  icon :style="{'margin-top':'10px'}" >
      <span class="material-icons-outlined">delete</span>
    </v-btn>
        </v-col>
        <v-col cols="12" md="12" sm="2">
            <v-card-text>
             大小:{{design.design_a}}x{{design.design_b}}
          </v-card-text>
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
          if(response.code==200){
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
 

};
</script>
<style scoped>

</style>
