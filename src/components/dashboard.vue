<template>
  <div class="row">
    <div class="col-lg-3 col-xs-6">
      <info-panel nums="9" bg="bg-green" icon="fa fa-cogs" info="队列作业"></info-panel>
    </div>
    <div class="col-lg-3 col-xs-6">
      <info-panel nums="310" icon="fa fa-database" info="数据集"></info-panel>
    </div>
    
  <div>
  
</template>

<script>
  import infoPanel from './common/info-panel';
  module.exports = {
    name: "Dashboard",
    data: function(){
      return{
      }
    },
    components:{
      infoPanel
    },
    route: {
      activate: function(t){
        this.$parent.$parent.$data.title = '控制台';
        t.next();
      }
    }
  }
</script>
<style>

.content {
  font-size:11px;
}

.sidebar-wrapper{
  width:600px;
}

</style>
