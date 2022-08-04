<template>
  <div class="design">
        <VueDragResize  v-show="info.isshown" :z="10" :isActive="true" :w="info.width" :h="info.height" :x="info.left" :y="info.top" v-on:resizing="resize" v-on:dragging="resize">
            <div :style="{'position':'relative'}">
                <el-radio v-model="radio" label="1" :width="info.width" :height="info.height">单选1</el-radio>
                <el-radio v-model="radio" label="2" :width="info.width" :height="info.height">单选2</el-radio>
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
        radio:1
       
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
       
    }
    }

</script>