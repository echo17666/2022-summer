<template>
    <div>
        <iframe src="https://www.draw.io/index.html" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:0px;left: 0px;right:0px;bottom:0px;"></iframe>
    
    </div>
    
</template>
 
 
<script>
    export default {
          name: 'UML',
      
        data () {
            return {
            }
        },
        mounted(){
            /**
            * iframe-宽高自适应显示   
            */
            function changeMobsfIframe(){
                const mobsf = document.getElementById('mobsf');
                const deviceWidth = document.body.clientWidth;
                const deviceHeight = document.body.clientHeight;
                mobsf.style.width = (Number(deviceWidth)-50) + 'px'; //数字是页面布局宽度差值
                mobsf.style.height = (Number(deviceHeight)) + 'px'; //数字是页面布局高度差
            }

            changeMobsfIframe()

            window.onresize = function(){
                changeMobsfIframe()
            }
        }
    }
</script>
