<template>
    
     <!-- form start -->
     <form class="form-horizontal">
       <div class="box-body">
         <div class="form-group">
             <label for="taskName" class="col-sm-2 control-label">任务名称 *</label>
             <div class="col-sm-10">
                 <input type="text" class="form-control" id="taskName" placeholder="">
             </div>
         </div>
         <div class="form-group">
             <label for="taskLable" class="col-sm-2 control-label">任务标签 *</label>
             <div class="col-sm-10">
                 <input type="text" class="form-control" id="taskLable" placeholder="请输入包含deeplight alias(如@yanhuang) 帮助记忆">
             </div>
         </div>
         <div class="form-group">       
            <label class="col-sm-2 control-label" for="dataSet">数据集</label>
            <div class="col-sm-10">
                <select id="dataSet" class="form-control">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
                </select>
            </div>
            
         </div>
         <div class="form-group">
           <label for="picUrl" class="col-sm-2 control-label">图片URL</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="picUrl" placeholder="图片地址">
           </div>
         </div>
         <div class="form-group">       
            <label class="col-sm-2 control-label" for="compAlt">比对算法</label>
            <div class="col-sm-10">
                <select id="compAlt" class="form-control">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
                </select>
            </div>
            
         </div>
         <div class="form-group">
           <label for="repTimes" class="col-sm-2 control-label">重复次数</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="repTimes" placeholder="">
           </div>
         </div>
         <div class="form-group">
           <label for="currCount" class="col-sm-2 control-label">并发数</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="currCount" placeholder="">
           </div>
         </div>
         <div class="form-group">
           <label for="engAddr" class="col-sm-2 control-label">Engine地址</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="engAddr" placeholder="">
           </div>
         </div>
         <div class="form-group">
           <label for="engUser" class="col-sm-2 control-label">Engine用户</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="engUser" placeholder="">
           </div>
         </div>
         <div class="form-group">
           <label for="engPass" class="col-sm-2 control-label">Engine密码</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="engPass" placeholder="">
           </div>
         </div>
         <div class="form-group">
           <label for="engPort" class="col-sm-2 control-label">Engine端口</label>
           <div class="col-sm-10">
             <input type="password" class="form-control" id="engPort" placeholder="">
           </div>
         </div>
         
         <div class="">
         <button type="submit" class="btn btn-default">取消</button>
         <button type="submit" class="btn btn-info pull-right">提交</button>
       </div>
       </div><!-- /.box-body -->
       <!-- /.box-footer -->
     </form>
</template>
<script>
export default {
    components:{
    }
}
</script>
<style>

</style>