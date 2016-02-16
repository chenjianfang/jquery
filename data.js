/*
*
* @陈建芳
* @2016-2-14
* @QQ 1737752975
*
*/
;(function($,window,document,undefined){
	function FunAjax(ele,options,callback){
		this.$ele = ele;
		this.defaults={
			"$url":"",  //url地址
			"$data":"", //要传到后台的数据
			"$pageLoad":"",  //遮罩层
			"_data":""       //请求获得的数据
		};
		this.settings = $.extend({},this.defaults,options);
		this.callback() = callback;
	}
	FunAjax.prototype={
		getData:function(){
			var _this = this;
			$.ajax({
				type:"GET",
				url: this.settings.$url,
				dataType:"json",
				async:false,
				cache:false,
				data:this.settings.$data,
				beforeSend:function(){
					//发送请求前的操作
					_this.settings.$pageLoad.show();
				},
				success:function(data){
					_this.settings.$pageLoad.hide();
					_this.callback(data);
				},
				error:function(){
					alert("请求失败")
				},
				complete:function(){
					//请求后的操作，无论成功还是失败
				}

			});	
		},
	}

	$.fn.CJFAjax=function(options,callback){
		var cjfajax = new FunAjax(this,options,callback);

		//调用方法
		return cjfajax.getData();
		
	}
})(jQuery,window,document);
