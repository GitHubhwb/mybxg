define(['jquery','template','util','bootstrap'],function($,template,util){
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
    		//添加课时
    		$('#addBtn').click(function(){
    			var html=template('modalTpl',{operate:'添加课时'});
    		    $('#modalInfo').html(html);
    			$('#chapterModal').modal();
    		});
    		//处理编辑课时
    		$('.editBtn').click(function(){
    			//查询数据
    			$.ajax({
    				type:'get',
    				url:'/api/course/chapter/edit',
    				data:{ct_id:$(this).attr('data-ctId')},
    				dataType:'json',
    				success:function(data){
    					//渲染模版
    					data.result.operate='编辑课时';
    					var html=template('modalTpl',data.result);
    					$('#modalInfo').html(html);
    					//显示弹窗
    					$('#chapterModal').modal();
    				}
    			})
    		})
    	}
    });
});