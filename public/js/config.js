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
		uploadify:'uploadify/jquery.uploadify.min',
		region:'jquery-region/jquery.region',
		ckeditor:"ckeditor/ckeditor",
		nprogress:'nprogress/nprogress',
		jcrop:'jcrop/js/Jcrop',
		common:'../js/common',
		login:'../js/login',
		index:'../js/index',
		teacherlist:'../js/teacher-list',
		teacheradd:'../js/teacher-add',
		util:'../js/util',
		settings:'../js/settings',
		states:'../js/states',
		courseadd:'../js/courseadd',
		courselist:'../js/courselist',
		coursebasic:'../js/coursebasic',
		coursepicture:'../js/coursepicture',
		courselesson:'../js/courselesson'
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
      }, 
      uploadify : {
      	deps:['jquery']
      },
      ckeditor:{
      	exports:'CKEDITOR'
      },
      jcrop:{
      	deps:['jquery']
      }
  }
});

