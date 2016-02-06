$(function(){

	// 1.单击调出菜单栏

	// 1.1 bFlag作为判断nav是否展开的标识符
	var bFlag = false;
	// 1.2函数：当单击时，nav发生宽度改变并显示文字
	function navClickChange(){
		if(!bFlag){
			var navWidth = 0;
			if( $(window).width()*0.11>=148 ){
				navWidth = $(window).width()*0.11;
			}else{
				navWidth = 148;
			}
			$('#nav span>p').css({
				'display':'block'
			});
			$('#nav span>p').animate({
				opacity: 1
			},'slow');
			$('#nav').animate({
				width: navWidth
			},'slow');
			$('.adaption').animate({
				width: $(window).width()*0.90
			},'slow');
			bFlag = true;
		}else{
			var navWidth = 0;
			if( $(window).width()*0.046>=60 ){
				navWidth = $(window).width()*0.046;
			}else{
				navWidth = 60;
			}
			$('#nav span>p').css({
				'display':'none',
				'opacity': '0'
			});
			$('#nav').animate({
				width: navWidth
			},'slow');
			$('.adaption').animate({
				width: $(window).width()*0.956
			},'slow');
			bFlag = false;
		}
	}
	// 1.3函数：当浏览器窗口改变时，adaption宽度相应改变
	function windowChange(){
		if(bFlag){
			$('.adaption').css({
				'width': $(window).width()*0.90
			});
		}else{
			$('.adaption').css({
				'width': $(window).width()*0.956
			});
		}
	}
	//1.4 单击菜单栏调用函数
	$('#nav .list').on('click',function(){
		navClickChange();
	});
	//1.5 浏览器窗口改变调用函数
	$(window).resize(function(){
		windowChange();
	});

	// 2.文字动态生成

	var i = 1;
	
	function appendText(){
		setInterval(function(){
		switch(i){
			case 1:
			  $('#home>p').append('生');
			  break;
			case 2:
			  $('#home>p').append('活');
			  break;
			case 3:
			  $('#home>p').append('不');
			  break;
			case 4:
			  $('#home>p').append('只');
			  break;
			case 5:
			  $('#home>p').append('是');
			  break;
			case 6:
			  $('#home>p').append('眼');
			  break;
			case 7:
			  $('#home>p').append('前');
			  break;
			case 8:
			  $('#home>p').append('的');
			  break;
			case 9:
			  $('#home>p').append('苟');
			  break;
			case 10:
			  $('#home>p').append('且');
			  break;
			case 11:
			  $('#home>h1').append('还');
			  break;
			case 12:
			  $('#home>h1').append('有');
			  break;
			case 13:
			  $('#home>h1').append('诗');
			  break;
			case 14:
			  $('#home>h1').append('和');
			  break;
			case 15:
			  $('#home>h1').append('远');
			  break;
			case 16:
			  $('#home>h1').append('方');
			  break;
			case 17:
			  break;
			case 18:
			  break;
			case 19:
			  break;
			case 20:
			  break;
			case 21:
			  break;
			case 22:
			  break;
			case 23:
			  $('#home>p').empty();
			  $('#home>h1').empty();
			  break;
			}
			i = i+1;
			if(i == 24){
				i = 1
			}
		},200);
	}
	// 2.1页面文档就绪后加载页面
	$(window).load(function(){
		appendText();
	});

	// 3.了解更多按钮
	var $button = $(".knowmore>button");

	$button.hover(
		function(){
			$button.css({
			'background':'black',
			'opacity':'0.2',
			'color':'white'
			}).animate({
				opacity:1
			},600);
		},
		function(){
			$button.css({
			'background':'white',
			'opacity':'1',
			'color':'#0a85c7'
			});
		}	
	);


})