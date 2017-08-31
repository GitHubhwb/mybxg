define(['jquery','template','bootstrap'],function($,template){
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
              console.log(data);
              var html=template('modalTpl',data.result);
              $('#modalInfo').html(html);
              //显示弹窗
              $('#teacherModal').modal();
         	}
         })
       })
   	}

   })

});