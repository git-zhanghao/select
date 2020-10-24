function setRem(){
	//动态设置像素比
	var oPixelRatio = 1// / window.devicePixelRatio;
	//console.log(oPixelRatio)
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+oPixelRatio+',minimum-scale='+oPixelRatio+',maximum-scale='+oPixelRatio+',user-scalable=no" />');
	
	//调用setSize函数，自动刷新
	setSize();
	window.addEventListener("resize", setSize, false);
	window.addEventListener("orientationchange", setSize, false);
	function setSize(){
		//获取字体大小
		var html = document.getElementsByTagName('html')[0];
		var pageWidth = html.getBoundingClientRect().width;
		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			html.style.fontSize = pageWidth / 15 +"px";
		}else{
			html.style.fontSize = "50px";
		}
	}
}
setRem();

function pitch(obj) {
	if($(obj).hasClass('active')){
		$(obj).removeClass('active');
	}else{
		$(obj).addClass('active');
	}
}
function toggle(obj) {
	if($(obj).hasClass('toggle')){
		$(obj).removeClass('toggle');
		$(obj).parents('.subject').find('.js-toggle').css('height','1.8rem');
		$(obj).css('transform','rotate(180deg)');
	}else{
		$(obj).addClass('toggle');
		$(obj).parents('.subject').find('.js-toggle').css('height','auto');
		$(obj).css('transform','rotate(0)');
	}
}