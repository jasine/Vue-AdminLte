<template>
  <div v-if="!login">
    <app-header></app-header>
    <app-menu></app-menu>
    <app-content :title="title"></app-content>
    <!--<app-footer></app-footer>-->
  </div>



  <div v-if="login">
    <app-login></app-login>
  </div>

<div style="z-index:100">

</div>  


<alerts style="z-index:1200"
  :show.sync="showMsg"
  :duration="alertInfo.duration"
  :type="alertInfo.type"
  width="200px"
  placement="top-right"
  dismissable
>

  <span class="alert-icon-float-left" :class="alertInfo.icon"></span>
  <p>{{alertInfo.msg}}</p>
</alerts>
</template>

<script>

  module.exports = {
    name : 'Container',
    data: function(){
      return {
        showMsg:false,
        rightSide:true,
        login: false,
        title: "HOGO",
        body_class: "hold-transition login-page skin-blue sidebar-mini", 
        menus: require('./../config/menus.js') || [],
        alertInfo:{type:"success",msg:"success", icon:'fa fa-info-circle',duration:1000
}
      }
    },
    replace: false,
    components: {
      'app-header' : require('./layout/header.vue'),
      'app-menu': require('./layout/menu.vue'),
      'app-content': require('./layout/content.vue'),
      'app-footer': require('./layout/footer.vue'),
      'app-login': require('./login.vue'),
      'alerts':require('vue-strap').alert
    },
    events:{
      'msg':function(type,msg){
        this.alertInfo.msg=msg;
        this.alertInfo.type=type;
        if(type==='warning' || type==='error'){
          this.alertInfo.icon='fa fa-exclamation-triangle';
          this.alertInfo.duration=2500;
        }else{
          this.alertInfo.icon='fa fa-info-circle';
          this.alertInfo.duration=1000;
        }
        this.showMsg=true;
        
        
      }
    },
    filters:{
      
    }
  }

</script>
<style>
.alert{
  margin-top:28px;
  padding:6px;
}
.content-wrapper, .right-side, .main-footer{
  margin-left:135px;
}
.alert-icon-float-left{
  font-size:20px;
  float:left;
  margin-right:8px
}
.alert.top-right{
  right:20px !important;
}
table{
  cursor:pointer
}
</style>