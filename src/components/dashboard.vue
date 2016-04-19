<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <h3>Welcome !!!</h3>
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
  width="500px"
  placement="top-right"
  
  class="alert"
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

<div class="progress">
  <progressbar :now="now" label type="warning" striped></progressbar>

  <progressbar :now="" label type="success" ></progressbar>

  <progressbar :now="" label type="danger"></progressbar>

  <progressbar :now="" label type="primary" striped animated></progressbar>
</div>
<div class="col-lg-3 col-xs-6">
 
<div class="small-box bg-aqua">
<div class="inner">
<h3>
150
</h3>
<p>
New Orders
</p>
</div>
<div class="icon">
<i class="ion ion-bag"></i>
</div>
<a href="#" class="small-box-footer">
More info <i class="fa fa-arrow-circle-right"></i>
</a>
</div>
</div>
    </div>
  </div>
  
</template>

<script>
import alert from 'vue-strap/src/alert'
import progressbar from 'vue-strap/src/progressbar'

  module.exports = {
    name: "Dashboard",
    data: function(){
      return{
        showRight:false,
        showTop:false,
        now:20
      }
    },
    components:{
      alert,
      progressbar
    },
    route: {
      activate: function(t){
        this.$parent.$parent.$data.title = 'Dashboard';
        t.next();
      }
    }
  }
</script>
<style>
.alert{
  margin-top:30px;
}
</style>
