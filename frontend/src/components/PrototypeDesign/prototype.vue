<template>
    <div class="app">
        <div id="parent">
                <el-form ref="form" :model="form" label-width="80px" size="medium">
                    <el-form-item label="输入框">
                        <el-input placeholder="请输入内容" :resize="none" :max="200"></el-input>                 
                    </el-form-item>
                </el-form>
            
            
        </div>
    </div>
    
</template>
<script>
    import VueDragResize from 'vue-drag-resize';
    export default{
        name: "prototype",
        components:{
            VueDragResize
        },
        data(){
            return{
                left:'123',
                top:0
            }
        },
        methods:{
            show(e){
                this.left=e.left;
                this.top=e.top;
                var button = document.createElement("div")
                button.className="el-input"
                var inner=document.createElement('input')
                inner.className="el-input__inner"
                button.appendChild(inner)
                var parent=document.getElementById('parent')
                parent.appendChild(button)
            }
        }

    }
</script>
<style>
.app{
    width: 100%;
}
#parent{
    position: relative;
    /* background-color:rgb(131, 129, 129); */
    height: 100%;
    width: 100%;
}
.input{
    border: 3px;
}
</style>