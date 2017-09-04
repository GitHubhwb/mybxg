define(['jquery','template','util','uploadify'],function($,template,util){
	util.setMenu('/course/add');
	//获取·课程图片id
	var csId=util.qs('cs_id');
	$.ajax({
		type:'get',
		url:'/api/course/picture',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			//渲染页面
			var html=template('pictureTpl',data.result);
			$('#pictureInfo').html(html);
			//处理封面上传
			$('#upfile').uploadify({
				width:80,
				height:'auto',
				buttonText:'选择图片',
				buttonClass:'btn btn-success btn-sm',
				itemTemplate:'<span></span>',
				swf:'/public/assets/uploadify/uploadify.swf',
				uploader:'/api/uploader/cover',
				fileObjName:'cs_cover_original',
				formData:{cs_id:csId},
                onUploadSuccess:function(f,data){
                	
                	// var data=eval('('+data+')');
                	 data=JSON.parse(data.trim());
                    $('.preview img').attr('src',data.result.path);
                }
			});
		}
	})
})