<template >
<div class="main">
  <div width="100vw" min-height="100vh" >
<v-card color="#EEEEEE" >
<v-row >
  <v-col cols="12" md="12" sm="8" >
    <v-row>
      <v-col cols="12" md="1" sm="12"/>
    <v-col cols="12" md="5" sm="12" class="d-flex justify-center">
      <v-row>
        <v-col cols="12" md="12" sm="2" :style="{'height':'14vh'}"/>
        <v-col cols="12" md="12" sm="4">
  <div id="logo" :style="{ width: '30vw', height: '250px' }" class="mx-auto"></div>
        </v-col>
        <v-col cols="12" md="12" sm="4">
            <v-img src="@/assets/logo.png" :style="{'width': '200px'}" class="mx-auto"/>
        </v-col>
         <v-col cols="12" md="12" sm="2"/>
      </v-row>
    </v-col>
  <v-col cols="12" md="5" sm="12" class="d-flex justify-center">
    <v-row>
       <v-col cols="12" md="12" sm="2" :style="{'height':'14vh'}"/>
        <v-col cols="12" md="12" sm="4" class="d-flex justify-center">
          <v-row>
          <h1 class="mx-auto">产品高效设计，简单快捷</h1>
          <h3 class="mx-auto">原创设计组件，快速团队管理，高效文档整合，构建强大管理平台</h3>
          </v-row>
        </v-col>
        <v-col cols="12" md="12" sm="4" class="d-flex justify-center">
         <v-btn outlined @click="start()" class="mx-auto" :style="{'width':'120px','height':'60px','font-size':'20px'}"> 开始使用</v-btn>
         </v-col>
        <v-col cols="12" md="12" sm="2"/>
    </v-row>
  </v-col>
  <v-col cols="12" md="1" sm="12" class="d-flex justify-center"/>
    </v-row>
  </v-col>
  <v-col cols="12" md="12" sm="4" class="d-flex justify-center" :style="{'min-height':'20vh'}">
  
  </v-col>
</v-row>
</v-card>
  </div>

  <div width="100vw" min-height="100vh">
<v-card>
<v-row :style="{'min-height':'70vh'}">
  <v-col cols="12" md="12" sm="4" class="d-flex justify-center" >
  <h1 :style="{'font-size':'60px'}">团队协作利器，专业协作平台</h1>
  </v-col>
  <v-col cols="12" md="12" sm="8" class="d-flex justify-center" >
    <v-col cols="12" md="2" sm="12" class="d-flex justify-center"/>
    <v-col cols="12" md="2" sm="12" class="d-flex justify-center">
      <v-row>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center">
      <h2 :style="{'font-size':'30px'}">使用方便快捷</h2>
        </v-col>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center" >
      <h5 :style="{'font-size':'16px','text-align':'center'}">无需繁琐认证，团队一键邀请，简洁明了快速入门</h5>
        </v-col>
        <v-col cols="12" md="12" sm="8" >
      <v-img src="./assets/main1.png" width="100px" class="mx-auto"></v-img>
        </v-col>
      </v-row>
      </v-col>
      <v-col cols="12" md="2" sm="12" class="d-flex justify-center">
      <v-row>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center">
      <h2 :style="{'font-size':'30px'}">高效团队管理</h2>
        </v-col>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center" >
      <h5 :style="{'font-size':'16px','text-align':'center'}">人员统一管理，项目状态呈现，团队信息展示清晰</h5>
        </v-col>
        <v-col cols="12" md="12" sm="8" >
      <v-img src="./assets/main3.png" width="100px" class="mx-auto"></v-img>
        </v-col>
      </v-row>
      </v-col><v-col cols="12" md="2" sm="12" class="d-flex justify-center">
      <v-row>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center">
      <h2 :style="{'font-size':'30px'}">快速原型设计</h2>
        </v-col>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center" >
      <h5 :style="{'font-size':'16px','text-align':'center'}">原创组件图标，即时导出查看，快速实现创意落地</h5>
        </v-col>
        <v-col cols="12" md="12" sm="8" >
      <v-img src="./assets/main2.png" width="100px" class="mx-auto"></v-img>
        </v-col>
      </v-row>
      </v-col><v-col cols="12" md="2" sm="12" class="d-flex justify-center">
      <v-row>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center">
      <h2 :style="{'font-size':'30px'}">文档统一管理</h2>
        </v-col>
        <v-col cols="12" md="12" sm="1" class="d-flex justify-center" >
      <h5 :style="{'font-size':'16px','text-align':'center'}">大量文档模板，随时保存导出，目录展示高效管理</h5>
        </v-col>
        <v-col cols="12" md="12" sm="8" >
      <v-img src="./assets/main4.png" width="100px" class="mx-auto"></v-img>
        </v-col>
      </v-row>
      </v-col>
      <v-col cols="12" md="2" sm="12" class="d-flex justify-center"/>
  </v-col>
</v-row>
</v-card>
  </div>
</div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'Main',
  data () {
      return {
        state:this.$store.state,
      }
    },
    methods: {
      start(){
          if(this.state.islogin){
            this.$router.push('/teams');
          }
          else{
            this.$router.push('/login');
          }
      },




      drawLogo() {
        var chartDom = document.getElementById('logo');
var myChart = echarts.init(chartDom);
var option;
      option = {
        graphic: {
          elements: [
            {
              type: "text",
              left: "center",
              top: "center",
              style: {
                text: "墨 书",
                fontSize: 140,
                fontWeight: "bold",
                lineDash: [0, 200],
                lineDashOffset: 0,
                fill: "transparent",
                stroke: "rgba(0,0,0,0.5)",
                lineWidth: 1,
              },
              keyframeAnimation: {
                duration: 3000,
                //loop: true,
                keyframes: [
                  {
                    percent: 0.7,
                    style: {
                      fill: "transparent",
                      lineDashOffset: 200,
                      lineDash: [200, 0],
                      color: "#000",
                    },
                  },
                  {
                    // Stop for a while.
                    percent: 0.8,
                    style: {
                      fill: "transparent",
                    },
                  },
                  {
                    percent: 1,
                    style: {
                      fill: "rgba(0,0,0,1)",
                    },
                  },
                ],
              },
            },
          ],
        },
      };
      option && myChart.setOption(option);
    },
    
    },
    mounted() {
    this.drawLogo();
    },  
    }

</script>