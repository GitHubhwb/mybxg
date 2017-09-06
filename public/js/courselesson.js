define(['jquery','template','util'],function($,template,util){
	util.setMenu('/course/list');
	//获取课程id
	var csId=util.qs('cs_id');
    //查询课程数据
    $.ajax({
    	type:'get',
    	url:'/api/course/lesson',
    	data:{cs_id:csId},
    	dataType:'json',
    	success:function(data){
    		var html=template('lessonTpl',data.result);
    		$('#lessonInfo').html(html);
    	}
    });
});