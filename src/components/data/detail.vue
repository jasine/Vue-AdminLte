<template>
<div class="col-md-6 col-sm-12 ">
    
    
        <div class="box ">
            <div class="box-header">
                    <img class="imgInfo left" :src="currentTag.image_uri | imgPath"></img>
            </div>
            <div class="box-body no-padding ">
                <div class="table-responsive">
                    <table class="table table-hover table-striped table-condensed">
                        <tbody>
                            <thead>
                                <tr>
                                    <th>数据项</th>
                                    <th>JPG</th>
                                    <th>JSON</th>

                                </tr>
                            </thead>
                            <tr @click=getInfo($index) v-for="item in datatags">
                                <td>{{item.datatag_id}}</td>
                                <td>{{item.image_name}}</td>
                                <td>{{item.image_uri}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <!-- /.box-body -->
        </div>
    
    

</div>

<div class="col-md-6 col-sm-12">

    <div class="row ">
        <jsonview  :jsondata.sync="currentTag.image_label"></jsonview>
    </div>
</div>
     
</template>
<script>
import jsonview from '../common/jsonview'

export default {
    data:function(){
        return{
            datatags:[],
            currentTag:{}
        }
    },
    components:{
        jsonview
    },
    props:{
        dataId:{
            type:Number,
            required: true
        }
    },
    methods:{
      getDetail: function(dataId){
          var self=this;
          $.ajax({
            type:'POST',
            url:"api/querydatatags",
            cache:false,
            data:JSON.stringify({
                "dataset_id":dataId
            }),
            contentType:"application/json",
            //processData: false,
            success:function(data){
            if(data.error_code==='OK'){
                self.datatags=data.msg;
                {
                    if(data.msg && data.msg.length>0){    
                        self.datasets=data.msg;               
                        self.currentTag=self.datatags[0];
                    }
                }
                
             }
                
            },
            error:function(data){
                console.log("error");
                console.log(data);
                alert("error: "+data)
            }
            });	
        },
      getInfo:function(index){
          this.currentTag=this.datatags[index];
      } 
    },
    ready:function(){
      
    },
    watch:{
        dataId:function(val,oldval){
            if(val>0){
                this.getDetail(val);
            }
        }
    },
    events:{
        'save':function(){
            var self=this;
            $.ajax({
            type:'POST',
            url:"api/modify",
            cache:false,
            data:JSON.stringify(this.currentTag),
            contentType:"application/json",
            //processData: false,
            success:function(data){
                if(data.error_code==='OK'){
                    self.$dispatch('msg','success','更新成功');
                }else{
                    self.$dispatch('msg','error','更新失败'+data.msg);
                }
                
            },
            error:function(data){
                self.$dispatch('msg','error','更新失败');
            }
            });
        }
    }
}
</script>
<style scoped>
.imgInfo{
    width:100%;
    max-height:250px;
}



</style>