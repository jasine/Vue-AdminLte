<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <h3>List !!!</h3>
      <p>
        Lorem ipsum Ad non ut aliquip Duis minim sit ex esse eiusmod anim minim 
        esse qui mollit elit do pariatur deserunt eu eiusmod tempor tempor sunt 
        fugiat ad dolore reprehenderit do labore ex.
      </p>
      <button class="btn btn-default btn-lg"
  @click="showRight = !showRight">
  Click to toggle alert on right
</button>
<button class="btn btn-default btn-lg"
  @click="showRight = !showRight">
  Click to toggle alert on right
</button>
 
<button class="btn btn-default btn-lg"
  @click="showTop = !showTop">
  Click to toggle alert on top
</button>
<hr>
<alert type="success" >
  <strong>Well Done!</strong>
  You successfully read this important alert message.
</alert>
 
<alert type="info" >
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</alert>
 
<alert type="danger" dismissable>
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</alert>
 
<alert type="warning" dismissable>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</alert>
 
<alert
  :show.sync="showRight"
  :duration="3000"
  type="success"
  width="400px"
  placement="top-right"
  dismissable
>
  <span class="icon-ok-circled alert-icon-float-left"></span>
  <strong>Well Done!</strong>
  <p>You successfully read this important alert message.</p>
</alert>
 
<alert
  :show.sync="showTop"
  :duration="3000"
  type="danger"
  width="400px"
  placement="top"
  dismissable>
  <span class="icon-info-circled alert-icon-float-left"></span>
  <strong>Heads up!</strong>
  <p>This alert needs your attention.</p>
</alert>
</template>

<script>
import alert from 'vue-strap/src/alert'
  module.exports = {
    name: "UserList",
    data: function(){
      return{
        showRight:false,
        showTop:false
      }
    },
    components:{
      alert
    },
    route: {
      activate: function(t){
        this.$parent.$parent.$data.title = 'User Lists';
        t.next();
      }
    }
  }
</script>

