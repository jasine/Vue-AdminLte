<template>
    
     <!-- form start -->
     <form class="form-horizontal">
       <div class="box-body">
         <div class="form-group">
             <label for="dsName" class="col-sm-2 control-label">数据集名称 *</label>
             <div class="col-sm-10">
                 <input type="text" class="form-control" id="dsName" placeholder="">
             </div>
         </div>
         <div class="form-group">       
            <label class="col-sm-2 control-label" for="dsType">数据集类型</label>
            <div class="col-sm-10">
                <select id="dsType" class="form-control">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
                </select>
            </div>
            
         </div>
         <div class="form-group">
             <label for="dsLable" class="col-sm-2 control-label">标签 *</label>
             <div class="col-sm-10">
                 <input type="text" class="form-control" id="dsLable" placeholder="请输入包含deeplight alias(如@yanhuang) 帮助记忆">
             </div>
         </div>
         <div class="form-group">
               <label class="col-sm-2 control-label" for="modify">允许再修改</label>
                <div class="col-sm-10">
                    <input type="checkbox" checked class="minimal" id="modify "   checked>
                </div>
           </div>
         <div class="form-group">
           <label for="picUrl" class="col-sm-2 control-label">URI</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="picUrl" placeholder="">
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