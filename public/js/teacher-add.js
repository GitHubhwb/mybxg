define(['jquery','template','util'],function($,template,util){
  util.setMenu('/teacher/list');
  //获取编辑的讲师id
  var tcId=util.qs('tc_id');
  if(tcId){
  	//编辑操作 (根据ID调用后台接口获取数据)
  	$.ajax({
  		type:'get',
  		url:'/api/teacher/edit',
  		data:{tc_id:tcId},
  		dataType:'json',
  		success:function(data){
         //解析数据，渲染页面
         data.result.oprate='编辑讲师';
         var html=template('teachertpl',data.result);
         $('#teacherInfo').html(html);
  		}
  	});
  }else{
  	//添加操作
  	 var html=template('teachertpl',{oprate:'添加讲师',tc_gender:1});
     $('#teacherInfo').html(html);
  }
})
