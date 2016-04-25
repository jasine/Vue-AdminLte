<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
        <div class="box">
                <div class="box-header">
                  <button class="btn btn-success btn-xs" @click="largeModal = true">新建</button>
                </div><!-- /.box-header -->
                <div class="box-body no-padding">
                    <div  class="table-responsive">
                    <table class="table table-hover table-striped table-condensed">
                    <tbody><thead><tr>
                      <th>任务Id</th>
                      <th>任务名称</th>
                      <th>任务标签</th>
                      <th>任务状态</th>
                      <th>测试数据集ID</th>
                      <th>测试数据集名称</th>
                      <th>图片URI</th>
                      <th>测试功能</th>
                      <th>Model数</th>
                      <th>并发数</th>
                      <th>重复次数</th>
                      <th>比对算法</th>
                      <th>创建时间</th>
                      <th>开始时间</th>
                      <th>结束时间</th>
                       <th>Engine地址</th>
                      <th>Enging端口</th>
                      <th>Engine用户</th>
                      <th>Enging密码</th>
                    </tr></thead>
                    <tr @click="detail">
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-red">55%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar progress-bar-primary" style="width: 30%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-green">90%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar progress-bar-primary" style="width: 30%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-green">90%</span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-yellow">70%</span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar progress-bar-primary" style="width: 30%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-light-blue">30%</span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-green">90%</span></td>
                    </tr>
                  </tbody></table>
                    </div>
                  
                </div><!-- /.box-body -->
              </div>

    </div>
    
<div>
  <modal  :show.sync="largeModal" title="新建任务"  effect="fade">
  <div slot="modal-body" class="modal-body">
      <newtask></newtask>
  </div>
  <div slot="modal-footer" class="modal-footer">
  </div>
</modal>
</div>

<slide title="test" :opened.sync="sideOpen" :width="sideWid">
<detail></detail>
</slide>


</template>

<script>
  import slide from '../common/slide-panel';
  import {modal} from 'vue-strap/dist/vue-strap.js' ;
  import newtask from './new-task';
  import detail from './detail'
  module.exports = {
    name: "tasks",
    data: function(){
      return{
        sideOpen:false,
        sideWid:600,
        largeModal:false
      }
    },
    components:{
      slide,
      modal,
      newtask,
      detail
      
    },
    methods:{
      detail:function(){
        this.sideOpen=true;
      }
    },
    route: {
      activate: function(t){
        this.$parent.$parent.$data.title = '测试任务';
        t.next();
      }
    }
  }
</script>

