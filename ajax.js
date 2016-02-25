/**
* @2016-1-16  by陈建芳
* @qq:1737752975
*  
*/
;(function($,window,document,undefined){
	function Box(ele,options,callback){
		this.$ele = ele;
		this.defaults = {
			"$url" : "/ZZSQJ/yw/getslyy",
			"$button" : $(".select-py1.op-click"), //页面点击出来弹出层的按钮
			"$pageItem" : $(".why")             //页面的要显示的值
		};
		this.settings = $.extend({},this.defaults,options);
		this.callback = callback;
	}

	Box.prototype.appendPage = function(){
		var _this = this , container = "";
		$(".box-message").remove();

		$().CJFAjax({
			"$url":_this.settings.$url,

		},function(data){
			$.each(data,function(index,ele){
				container += '<li>'+ele.mc+'</li>';
			});
			var aa = '<div class="box-message"><div class="box-content"><ul>'+container+'</ul></div></div>';
			$(".main").append(aa);  //页面生成元素
			$.each($(".box-content li"),function(index,ele){  //弹出层的内容项和页面的值一样的就变色
				if($(_this.pageItem).html() == $(ele).html()){
					$(ele).addClass("displayActive");
				}
			});

			$(".box-message").show();         /////////////////////////////////这里要改
			var allLi = $(".box-content li");
			$.each(allLi,function(ee,vv){
				//字长度超过20个的操作
				if($(vv).html().length>10){
					vv.style.fontSize= "23px";
					vv.style.paddingTop= "22px";
				};
				//项少于
			});
			$(".box-message").click(function(){  //点击即隐藏
				$(this).hide();
			});
			$(".box-content li").click(function(){   //点击的值打印到页面
				$(_this.pageItem).html($(this).html()) ;
				$(".way_input").val($(this).html()) ;
			});

		});
		
	}

	$.fn.CJFBox = function(options,callback){
		var cjfbox = new Box(this,options,callback);
		//调用方法
		return cjfbox.appendPage();
	}
})(jQuery,window,document)

