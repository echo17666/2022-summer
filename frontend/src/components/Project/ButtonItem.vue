<template>
  <div class="design">

<v-row>
  <v-col cols="12" md="9">

        <VueDragResize  v-show="info.isshown" :isActive="true" :w="info.width" :h="info.height" :x="info.left" :y="info.top" v-on:resizing="resize" v-on:dragging="resize">
           <div :style="{'position':'relative'}">
          <v-btn  :width="info.width" :height="info.height" >
           
            info
           
          </v-btn>
          <v-btn @click="deleted(info)" :style="{'position':'absolute','top':'0px','right':'0px'}" icon> <span class="material-icons-outlined">
                close</span></v-btn>
            
          </div>
        </VueDragResize>


 </v-col>
 <v-col cols="12" md="3">
  <v-card height="100vh">设计区域</v-card>
    
</v-col>
</v-row>
  </div>
</template>
<script>
   import VueDragResize from 'vue-drag-resize';
export default {
  name: 'ButtonItem',
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
            },
       
    }
    }

</script>