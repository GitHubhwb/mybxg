define(['jquery','template','util','uploadify','jcrop','form'],function($,template,util){
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
			//处理裁切图片
			var img=$('.preview img');
            var nowCrop=null;//保证页面只有一个实例

			//图片裁切功能方法
			function cropImage(){
				img.Jcrop({
					aspectRatio:2,//比例
					boxWidth:400
				},function(){
					//销毁之前的实例
					nowCrop && nowCrop.destory();
					//缓冲当前实例
					nowCrop=this;
					//设置预览效果  左上角显示图片的宽高
					this.initComponent('Thumbnailer', { 
						width: 240,
						height: 120,
						mypos:'.thumb',
					});
					//动态创建选区
					//选取坐标计算
					console.log(this);
					var width=this.ui.stage.width;
					var height=this.ui.stage.height;

					var x=0;
					var y=(height-width/2)/2;
					var w=width;
					var h=width/2;

					// 创建选区
					this.newSelection();
					this.setSelect([x,y,w,h]);

                    //设置预览区的位置
                    $('.jcrop-thumb').css({
                    	top:0,
                    	left:0,
                    });
                
                //初始化选取
                var inputs=$('#cropForm').find('input');
				inputs.eq(0).val(x);
				inputs.eq(1).val(y);
				inputs.eq(2).val(w);
				inputs.eq(3).val(h);

				//处理选取数据
				img.closest('div').on('cropstart cropmove cropend',function(a,s,c){
					//初始化选区
					var inputs=$('#cropForm').find('input');
					inputs.eq(0).val(c.x);
					inputs.eq(1).val(c.y);
					inputs.eq(2).val(c.w);
					inputs.eq(3).val(c.h);
				});
			});
			}

			//处理按钮的点击状态
			$('#cropBtn').click(function(){
				var flag=$(this).attr('data-flag');
				if(flag){
               	//再次点击
               	$('#cropForm').ajaxSubmit({
               		type:'post',
               		url:'/api/course/update/picture',
               		data:{cs_id:csId},
               		dataType:'json',
               		success:function(data){
               			if(data.code==200){
               				location.href='/course/lesson?cs_id='+data.result.cs_id;
               			}
               		}
               	})
               }else{
               	console.log(2);
               	//进行图片裁切
               	cropImage();
               	//第一次点击,点击之后修改按钮状态
               	$(this).attr('data-flag',true);
               	$(this).html('保存图片');
               }
           })
		}
	})
})