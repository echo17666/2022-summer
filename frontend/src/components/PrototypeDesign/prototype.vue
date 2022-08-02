<template>
    <div id="parent">
        <drag-it-dude>
            <div class="inner">
                <h1>here!</h1> 
            </div>
        </drag-it-dude>
    </div>
</template>
<script>
    import DragItDude from "vue-drag-it-dude";
    export default{
        name: "prototype",
        components:{
            DragItDude
        },

    }
</script>
<style>
#parent{
    position: relative;
}
</style>