define(['jquery','template','util'],function($,template,util){
	util.setMenu('/course/add');
	//获取·课程图片id
	var csId=util.qs('cs_id');
	$.ajax({
		type:'get',
		url:'/api/course/picture',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			var html=template('pictureTpl',data.result);
			$('#pictureInfo').html(html);
		}
	})
})