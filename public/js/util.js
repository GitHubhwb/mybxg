define(['jquery'],function($){
	return{
		setMenu:function(path){
			$('.nav a[href="'+path+'"]').addClass('active');
		}
	}
})