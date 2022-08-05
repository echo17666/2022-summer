<template>
  <div class="design">
        <VueDragResize  v-show="info.isshown" :z="10" :isActive="true" :w="info.width" :h="info.height" :x="info.left" :y="info.top" v-on:resizing="resize" v-on:dragging="resize">
            <div :style="{'position':'relative'}">
              <el-avatar :fit="fill" :src="url" :width="info.width" :height="info.height"></el-avatar>
                
                <v-btn @click="deleted(info)" :style="{'position':'absolute','top':'0px','right':'0px'}" icon> <span class="material-icons-outlined">
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
        url:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"

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
            },
       
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
</style>