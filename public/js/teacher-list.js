define(['jquery','template','util','bootstrap'],function($,template,util){
	// console.log(location.pathname);
	//左侧列表高亮显示 
	util.setMenu(location.pathname);
   // console.log(123);
   //调用后台接口，获取列表数据
   $.ajax({
   	type:'get',
   	url:'/api/teacher',
   	dataType:'json',
   	success:function(data){
     // console.log(data);
     //解析数据，渲染页面
     var html=template('teachertpl',{list:data.result});
     $('#teacherInfo').html(html);

     //预览查看功能
     $('.preview').click(function(){
       	//closest  离他最近的
       	//获取当前记录的ID
       	var td=$(this).closest('td');
       	var tcId=td.attr('data-tcId');
       	console.log(tcId);
         //根据id查询数据
         $.ajax({
         	type:'get',
         	url:'/api/teacher/view',
         	data:{
         		tc_id:tcId
         	},
         	dataType:'json',
         	success:function(data){
              //解析数据，渲染页面
              // console.log(data);
              var html=template('modalTpl',data.result);
              $('#modalInfo').html(html);
              //显示弹窗
              $('#teacherModal').modal();
          }
      });
     });
       //控制启用和注销
       $('.eod').click(function(){
       	var td=$(this).closest('td');
       	var tcId=td.attr('data-tcId'); 
       	var tcStatus=td.attr('data-status'); 
       	var that=this;
       	$.ajax({
       		type:'post',
       		url:'/api/teacher/handle',
       		data:{
       			tc_id:tcId,
       			tc_status:tcStatus
       		},
       		dataType:'json',
       		success:function(data){
       			// console.log(data);
       			if(data.code==200){
         		//修改当前的状态
         		td.attr('data-status',data.result.tc_status);

         		//修改文字信息
         		if(data.result.tc_status==0){
         			$(that).html('注 销');
         		}else{
         			$(that).html('启 用');
         		}
         	}
         }
     })
       })
   }

})

});