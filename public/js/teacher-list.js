define(['jquery','template'],function($,template){
   // console.log(123);
   //调用后台接口，获取列表数据
   $.ajax({
   	type:'get',
   	url:'/api/teacher',
   	dataType:'json',
   	success:function(data){
     console.log(data);
     //解析数据，渲染页面
     var html=template('teachertpl',{list:data.result});
     $('#teacherInfo').html(html);
   	}
   })
});