define(['jquery','template','util'],function($,template,util){
	util.setMenu('/course/add');
	//获取基本信息cs_id
	var csId=util.qs('cs_id');
	// console.log(csId);
	//获取添加和编辑的标识位
	var flag=util.qs('flag');
	//根据id调用接口查询课程详细信息
	$.ajax({
		type:'get',
		url:'/api/course/basic',
		data:{cs_id:csId},
		dataType:"json",
		success:function(data){
			//解析数据，渲染页面
			if(flag){
				data.result.oprate='课程编辑';
			}else{
				data.result.oprate='课程添加';
			}
			var html=template('basicTpl',data.result);
			$('#basicInfo').html(html);
		}
	})
})