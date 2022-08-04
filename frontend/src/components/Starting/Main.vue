<template>
  <div class="main d-flex justify-center" width="100vw" height="100vh" >


  <div id="logo" :style="{ width: '100vw', height: '100vh' }"></div>



  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'Main',
  data () {
      return {
       
      }
    },
    methods: {
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
                fontSize: 305,
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