define(['jquery'],function($){
	return{
		//设置到导航菜单选中
		setMenu:function(path){
			$('.navs a[href="'+path+'"]').addClass('active').closest('ul').show();
		},
		//获取ul当中的参数值
		qs:function(key){
			//?username=lisi&age=12
           var param=location.search.substring(1);//去掉前面的？
           // console.dir(location);
           var result=null;
           if(param){
           	var kvs=param.split('&');
           	$.each(kvs,function(i,item) {
           		var kv=item.split('=');//键值对间用等号隔开
           		if(key==kv[0]){
           			result = kv[1];
           			return false;
           		}
           	});
           }
           return result;
		}
	}
});