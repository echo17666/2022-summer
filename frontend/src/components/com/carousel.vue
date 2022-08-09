<template>
  <div class="design">
        <VueDragResize  v-show="info.isshown" :z="10" v-on:clicked="showinformation" :isActive="true" :w="info.width" :h="info.height" :x="info.left" :y="info.top" v-on:resizing="resize" v-on:dragging="resize">
            <div :style="{'position':'relative'}">
              <el-carousel height="100px" class="carouselitem" :width="info.width">
                <el-carousel-item v-for="item in 3" :key="item">
                  
                </el-carousel-item>
              </el-carousel>
                
                <v-btn @click="deleted(info)" :style="{'position':'absolute','top':'0px','right':'-30px'}" icon> <span class="material-icons-outlined">
                        close</span></v-btn>
            </div>
        </VueDragResize>
  </div>
</template>
<script>
   import VueDragResize from 'vue-drag-resize';
export default {
  name: 'DesignInfo',
  props:['info'],
   components: {
            VueDragResize
        },

  data () {
      return {
       

      }
    },
    methods: {
        deleted(info){
          this.info.isshown = false;
        },
        formatTooltip(val) {
          return val / 100;
        },

       resize(newRect) {
                this.info.width = newRect.width;
                this.info.height = newRect.height;
                this.info.top = newRect.top;
                this.info.left = newRect.left;
                document.getElementsByClassName("carouselitem").height=newRect.height+"px"
                this.showinformation()
            },
        showinformation(){
          this.$parent.showinformation(this.info.comid)
        }
       
    }
    }

</script>
<style>
.vdr-stick{
  color: rgba(68, 68, 68, 0);
  background-color: rgba(255, 255, 255, 0);
  border: none;
  width: 4px !important;
  height: 4px !important;
}
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.carouselitem{
  height: '${info.height}';
}
</style>