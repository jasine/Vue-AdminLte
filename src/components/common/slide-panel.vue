<template>

 <div class=".sidebar-wrapper " >

   <!-- The Right Sidebar -->
    <aside :style="styleObject"  class="control-sidebar control-sidebar-light " :class="{'control-sidebar-open':opened}" >
  <!-- Content of the sidebar goes here control-sidebar-open-->
   <div class="aside-header">
        <button type="button" @click="close" class="close"><span>×</span>
      </button><h4   class="aside-title">{{title}}</h4>
   </div>
   <div class="inner">
       <slot></slot>
   </div>
   
</aside>

<!-- The sidebar's background -->
<!-- This div must placed right after the sidebar for it to work-->
<div class="control-sidebar-bg" :style="styleObject" ></div>
</div>




</template>

<script>
  module.exports = {
    name: "slidePanel",
    data: function(){
        var styO={                
            width: this.width+'px',
            right:null
        };
        if(!this.opened){    
            styO.right=(-this.width)+'px';
        }
      return{
          styleObject:styO
      }
    },
    components:{
        'alerts':require('vue-strap').alert
    },
    methods:{
        close:function(){
            this.opened=false;
            
        }
    },
    watch:{
	    ////////Data Watcher
	    opened:function(val,oldval){
            if(val==true){
                this.styleObject.right=null;
            }else{
                this.styleObject.right=(-this.width)+'px';
            }
	    }
	},
    props:{
        opened:{
            type:Boolean,
            default:false,
            twoWay:true
        },
        title: {
            type:String
        },
        width:{
            type:Number,
            default:700
        }
    }
    
  }
</script>

<style scoped>
.aside-header {
    border-bottom: 1.5px solid #e5e5e5;
    min-height: 10px;
    padding: 6px 15px;
    color: black;
}
.close {
    margin-right: 8px;
    margin-top:5px;
    padding: 4px 8px;
    color: black;
    font-size: 25px;
    opacity: .8;
}

.inner{
    margin:6px;
    margin-left:0px;
}

</style>