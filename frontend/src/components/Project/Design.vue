<template>
  <div class="design">
<v-btn @click="add()">add</v-btn>
     <div v-for="(info,index) in info"
             :key="index">

       <DesignItem :info="info">
     
       </DesignItem>
     

    </div>
 

  </div>
</template>
<script>
   import DesignItem from './DesignItem.vue';
export default {
  name: 'Design',
   components: {
            DesignItem
        },

  data () {
      return {
        info:[
          {width:100,height:200,top:300,left:400,isshown:true},
          {width:200,height:400,top:100,left:300,isshown:true},
          {width:700,height:100,top:500,left:200,isshown:true},
        ],
       
      }
    },
    methods: {
       
      addh1(){
        let a={width:200,height:200,top:200,left:200,isshown:true}
        this.info.push(a);
      },

       resize(newRect) {
                this.width = newRect.width;
                this.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
            }
    }
    }

</script>