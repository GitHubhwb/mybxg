require.config({
	baseUrl:'/public/assets',
	paths:{
		jquery:'jquery/jquery',
		cookie:'jquery-cookie/jquery.cookie',
		template:'artTemplate/template-web',
		bootstrap:'bootstrap/js/bootstrap.min',
		datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
		language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		form:'jquery-form/jquery.form',
		validate:'validate/jquery-validate.min',
		common:'../js/common',
		login:'../js/login',
		index:'../js/index',
		teacherlist:'../js/teacher-list',
		teacheradd:'../js/teacher-add',
		util:'../js/util',
		settings:'../js/settings'
	},
	//做兼容
	shim:{
		bootstrap:{
      	//依赖
      	deps:['jquery']
      },
      language:{
      	//依赖模块
      	deps:['jquery','datepicker']
      },
      validate :{
      	deps:['jquery']
      }  
  }
});

