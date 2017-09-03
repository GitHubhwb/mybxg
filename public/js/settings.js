define(['jquery','template','util','ckeditor','uploadify','datepicker','language','region','validate','form'],function($,template,util,CKEDTOR){
   util.setMenu('/main/index');
   $.ajax({
    type:'get',
    url:'/api/teacher/profile',
    dataType:'json',
    success:function(data){
   	 	//解析数据，渲染页面
   	 	var html=template('settingsTpl',data.result);
   	 	$('#settingsInfo').html(html);
         //处理头像上传
         $('#upfile').uploadify({
            width:120,
            height:120,
            buttonText:'',
            swf:'/public/assets/uploadify/uploadify.swf',
            uploader:'/api/uploader/avatar',
            fileObjName:'tc_avatar',
            onUploadSuccess:function(f,data){
               var data=JSON.parse(data);
               console.log(data);
               //重置图片的地址
               $('.preview img').attr('src',data.result.path);
            }
         });
         //处理省市县三级联动
         $('#pcd').region({
            url:'/public/assets/jquery-region/region.json'
         });
         //处理文本域个人介绍
         CKEDTOR.replace('editor');

         //处理表单提交页面
         $('#settingsForm').validate({
            sendForm:false,
            valid:function(){
               //把富文本的数据同步到表单页面
               for(var instance in CKEDITOR.instances){
                  CKEDITOR.instances[instance].updateElement();
               }
               //获取家乡数据
               var p=$('#p options:selected').text();
               var c=$('#c options:selected').text();
               var d=$('#d options:selected').text();
               var hometown=p+'|'+c+'|'+d;
                $(this).ajaxSubmit({
                  itemTemplate:'<span></span>',
                  type:"post",
                  url:'/api/teacher/modify',
                  data:{tc_hometown:hometown},
                  dataType:'json',
                  success:function(data){
                    if(data.code==200){
                     //刷新页面
                     location.reload();
                    }
                }
             });
          }
         });

      } 
   });
});