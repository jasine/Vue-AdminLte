<template>
  <div class="small-box" :class="bg">
    <div class="inner">
      <h3>{{nums}}</h3>
      <p>
          {{info}}
      </p>
    </div>
    <div class="icon">
      <i class="{{icon}}"></i>
    </div>
    <a href="{{link}}" class="small-box-footer">{{linkText}} 
      <i class="fa fa-arrow-circle-right"></i>
    </a>
  <div>
</template>

<script>
  export default {
    props: {
      nums: {
        type: String,
        default:'10'
      },
      info: {
        type: String,
        default: 'Running Tasks'
      },
      link: {
        type: String,
        default: '#'
      },
      linkText: {
        type: String,
        default: 'More info'
      },
      bg:{
        type:String,
        default:'bg-aqua'
      },
      icon:{
        type:String
      }
    }
  }
</script>

<style>

</style>
