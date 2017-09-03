define(['jquery','template','util','uploadify','datepicker','language','region'],function($,template,util){
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
   	 } 
   });
});