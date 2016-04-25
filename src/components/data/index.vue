<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
        <div class="box">
                <div class="box-header">
                  <button class="btn btn-success btn-xs" @click="importModal = true">导入</button>
                </div><!-- /.box-header -->
                <div class="box-body no-padding">
                    <div  class="table-responsive">
                    <table class="table table-hover table-striped table-condensed">
                    <tbody><thead><tr>
                      <th>数据集ID</th>
                      <th>数据集名称</th>
                      <th>数据集类型</th>
                      <th>用户标签</th>
                      <th>生成时间</th>
                      <th>修改时间</th>
                      <th>URI</th>
                      <th>图片数量</th>
                      <th>标注数量</th>
                      <th>操作</th>
                    </tr></thead>
                    <tr @click="detail($index)" v-for="data in datasets">
                    <td>{{data.dataset_id}}</td>
                      <td>{{data.name}}</td>
                      <td>数据集类型</td>
                      <td>{{data.description}}</td>
                      <td>{{data.create_date}}</td>
                      <td>{{data.modify_date}}</td>
                      <td>{{data.uri}}</td>
                      <td>{{data.image_num}}</td>
                      <td>{{data.processed_num}}</td>
                      <td><button @click.stop="conform($index)" class="btn btn-xs btn-danger">删除</button></td>
                    </tr>
                    
                  </tbody></table>
                    </div>
                  
                </div><!-- /.box-body -->
              </div>

    </div>
    
<div>
  <modal  :show.sync="importModal" title="导入数据集"  effect="fade">
  <div slot="modal-body" class="modal-body">
      <newset></newset>
      
  </div>
  <div slot="modal-footer" class="modal-footer">
  </div>
</modal>
</div>
<modal  :show.sync="removeConform" title="确认"  effect="fade">
  <div slot="modal-body" class="modal-body">
     确认删除该数据集？      
  </div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click='removeConform = false'>取消</button>
    <button type="button" class="btn btn-danger" @click='remove'>确认</button>
  </div>
</modal>

<slide :title="currentSet.name" :opened.sync="sideOpen" :width="sideWid">
<detail :data-id="currentSet.dataset_id"></detail>
</slide>


</template>

<script>
  import slide from '../common/slide-panel';
  import {modal} from 'vue-strap/dist/vue-strap.js' ;
  import newset from './new-set';
  import detail from './detail'
  module.exports = {
    name: "datasets",
    data: function(){
      return{
        sideOpen:false,
        sideWid:800,
        importModal:false,
        removeConform:false,
        removeIndex:0,
        datasets:[],
        currentSet:{dataset_id:-1}
      }
    },
    ready:function(){
      var self=this;
      $.ajax({
					type:'GET',
					url:"api/querydatasets",
					cache:false,
					//data:JSON.stringify(data),
					//contentType:"application/json",
					//processData: false,
		      success:function(data){
              if(data.error_code==='OK'){
                //console.log(data.msg);
                // data.msg.forEach(function(item){
                //   //this.datasets.unshift(item);
                // });
                self.datasets=data.msg;
                //this.datasets=data.msg;
              }
		          
		      },
		      error:function(data){
		          console.log("error");
		          console.log(data);
		         alert("error: "+data)
		      }
				});	
    },
    components:{
      slide,
      modal,
      newset,
      detail
      
    },
    methods:{
      detail:function(index){
        this.currentSet=this.datasets[index];
        this.sideOpen=true;
      },
      conform:function(index){
        this.removeConform=true;
        this.removeIndex=index;
      },
      remove:function(){
        alert(this.removeIndex);
      }
    },
    route: {
      activate: function(t){
        this.$parent.$parent.$data.title = '数据集管理';
        t.next();
      }
    }
  }
</script>

