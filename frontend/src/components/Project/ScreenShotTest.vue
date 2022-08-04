<template>
  <div class="test">
     <el-button  title="生成图片" @click="toImage()" icon="el-icon-download"></el-button>
        <div ref="name">
            <v-card color="#00AAEE" height="300px" width="700px">
                <v-btn>Hi</v-btn>
                <v-img src="../../assets/triangle.png" height="150px" width="180px"></v-img>
            </v-card>
        </div>
  </div>
</template>
<script>
import Home from "../Starting/Home.vue"
import html2canvas from 'html2canvas';
export default {
  name: 'Test',
  data () {
      return {
       
      }
    },
    methods: {
        toImage () {  
            const canvas = document.createElement("canvas")
            let canvasBox = this.$refs.name

            const width = parseInt(window.getComputedStyle(canvasBox).width)
            const height = parseInt(window.getComputedStyle(canvasBox).height)
            canvas.width = width * 2
            canvas.height = height * 2
            canvas.style.width = width + 'px'
            canvas.style.height = height + 'px'
            const context = canvas.getContext("2d");
            context.scale(2, 2);
            const options = {
                backgroundColor: null,
                canvas: canvas,
                useCORS: true
            }
            html2canvas(canvasBox, options).then((canvas) => {
                let dataURL = canvas.toDataURL("image/png")
                console.log(dataURL)
                this.downloadImage(dataURL)
            })
        },
        downloadImage(url) {
            let a = document.createElement('a')
            a.href = url
            a.download = '截图'
            a.click()
        },
    }
    }

</script>