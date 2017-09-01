define(['jquery','template','util','datepicker','language'],function($,template,util){
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
         //提交编辑修改讲师表单
			submitForm('/api/teacher/update');
  		}
  	});
  }else{
  	//添加操作
  	 var html=template('teachertpl',{oprate:'添加讲师',tc_gender:1});
     $('#teacherInfo').html(html);
      //提交添加讲师表单
      submitForm('/api/teacher/add');
  }
  //提交表单共用方法
  function submitForm(url){
    $('#teacherBtn').click(function(){
    	$.ajax({
    	  type:'post',
    	  url:url,
    	  data:$('#teacherForm').serialize(),
    	  dataType:'json',
    	  success:function(data){
    	  	if(data.code==200){
				location.href='/teacher/list';
			}
    	  }
    	})
    })
  }
})
