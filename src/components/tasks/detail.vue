<template>
<div class="col-md-6 col-sm-12">
        <div class="box box-solid">
            <div class="box-header">
                <i class="fa fa-text-width"></i>
                <h3 class="box-title">Description</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <dl>
                    <dt>Description lists</dt>
                    <dd>A description list is perfect for defining terms.</dd>
                    <dt>Euismod</dt>
                    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                    <dt>Malesuada porta</dt>
                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                </dl>
            </div>
            <!-- /.box-body -->
        </div>
    </div>
    <div class="col-md-6 col-sm-12">
        <div class="row ">
            <img class="imgInfo" src="../../assets/image/photo3.jpg"></img>
        </div>
        <div class="row jsonvi">
            <jsonview></jsonview>
        </div>       
    </div>
     
</template>
<script>
import jsonview from '../common/jsonview'

export default {
    components:{
        jsonview
    }
}
</script>
<style scoped>
.imgInfo{
    width:100%;
    max-height:250px;
}

.jsonvi{
    margin-top:10px;
}

</style>