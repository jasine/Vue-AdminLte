<template>
  <div>
        <div >
            <a @click="save" class="btn save-data">
                <i class="  fa fa-save"></i>
            </a>
        </div>
        <div id="jsoneditor" style="max-height:350px;" ></div> 
  </div>
</template>
<script>
require("!style!css!jsoneditor/dist/jsoneditor.css");
var JSONEditor=require('jsoneditor/dist/jsoneditor.js');

export default {
    // el: function(){
    //     // return '#jsoneditor';
    // },
    data: function(){        
        return {
            editor : null,
        }
    },
    ready: function () {
      var options = {
          mode:'form'
      };              
      this.editor=new JSONEditor(this.$el, options);
      // set json
      // get json
      //var json = editor.get();
    },
    components:{
        
    },
    props:{
        jsondata:{
            type:Object,
            twoWay:true,
            require:true
        }
    },
    methods:{
        save:function(){
            this.jsondata=this.editor.get();
            this.$dispatch('save');
        }
    },
    watch:{
        jsondata:function(val,oldval){
            //JSON.parse(val);
            //console.log(this.editor)
            // var options = {
            //     mode:'tree'
            // }; 
            // var editor=new JSONEditor(this.$el, options);
            // this.editor=editor;
            this.editor.set(val);
        }
    }
}
</script>
<style>

.jsoneditor{
    border: 0px solid #D2D6DE !important;
    padding-left:6px;
    margin-top:-38px;
}
.jsoneditor-menu{
    background-color:#D0D2D6 !important;
    border-bottom:0px solid #F9FAFC !important;
}
table.jsoneditor-search input{
    width:70px !important;
}

.save-data{
    color: #B5B7BA;
    position:relative;top:0px; 
    left:125px;
    z-index:100;
    font-size:19px;
}


</style>