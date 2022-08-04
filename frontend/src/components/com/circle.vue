<template>
  <div class="design">
        <VueDragResize  v-show="info.isshown" :z="10" :isActive="true" :w="info.width" :h="info.height" :x="info.left" :y="info.top" v-on:resizing="resize" v-on:dragging="resize">
            <div :style="{'position':'relative'}" style="height:100%">
                <img id="img" src="../../assets/circle.png" width="100%" height="100%"/>
             
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
                document.getElementById('img').width=newRect.width;
                document.getElementById('img').height=newRect.height;
            },
       
    }
    }

</script>
<style>
/* .vdr.active:before {
  display:none;
} */
</style>