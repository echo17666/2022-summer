<template>
  <div class="design">
        <VueDragResize  v-show="info.isshown" :z="10" :isActive="true" :w="info.width" :h="info.height" 
        :x="info.left" :y="info.top" 
        v-on:resizing="resize" v-on:dragging="resize" v-on:clicked="showinformation"
        >
            <div :style="{'position':'relative'}">
                <v-textarea outlined v-model="text" :width="info.width" :height="info.height" ></v-textarea>
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
        text:''
       
      }
    },
    methods: {
        deleted(info){
          this.info.isshown = false;
        },

       resize(newRect) {
                this.info.width = newRect.width;
                this.info.height = newRect.height;
                this.info.top = newRect.top;
                this.info.left = newRect.left;
            },
        showinformation(newRect){
          this.$parent.comwidth=newRect.width;
          this.$parent.comheight = newRect.height;
          this.$parent.comtop = newRect.top;
          this.$parent.comleft = newRect.left;
          this.$parent.comid=this.info.comid;
          // this.$store.state.comcontent =this.text;
          // this.$store.state.content_disabled=false;
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
</style>