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
			$('#nav span>p').show();
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

	// 2.1 定义一个计数变量nTextAmount
	var nTextAmount = 1;
	
	// 2.2 开启定时器，动态生成文字
	function appendText(){
		setInterval(function(){
		switch(nTextAmount){
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
			nTextAmount++;
			if(nTextAmount == 24){
				nTextAmount = 1;
			}
		},200);
	}
	// 2.3 页面文档就绪后加载页面
	$(window).load(function(){
		appendText();
	});

	// 3. 了解更多按钮
	var $button = $(".knowmore>button");

	// 3.1 按钮划入划出产生效果

	// 3.1.1 一个很奇怪的问题（在IE8下）
	// 3.1.2 暂时不写动画效果
	$button.hover(
		function(){
			$(this).css({
				background:'#000',
				color:'#fff'
			});
		},
		function(){
			$(this).stop().css({
				'background':'#fff',
				'color':'#0a85c7'
			});
		}	
	);

	//4.portfolio划入划出效果

	var $workBlock = $('#portfolio .work-block'),
		$showMask = $('.show-mask',$workBlock),
		$showText = $('.show-text',$workBlock);
	$workBlock.hover(
		function(){
			$(this).animate({
				backgroundColor:'#262b30'
			},250);
		},
		function(){
			$(this).stop().css({
				'background':'#0875BD',
			});
		}
	);

	$showMask.hover(
		function(){
			$(this).stop().animate({
				opacity:1
			},250);
		},
		function(){
			$(this).stop().css({
				'opacity':'0'
			});
		}
	);

	//5.作品详情页点击出现，关闭消失

	var $titleClose = $('#por-details .title-close');

	$showMask.on('click',function(){
		$('#por-details').show();
		$('body').css({
			'overflow-y':'hidden'
		});
		$(this).siblings('.show-img')
				.addClass('selected')
				.children()
				.appendTo($('#por-details .body'));
	});

	$titleClose.hover(
		function(){
			$titleClose.animate({
				backgroundColor:'#00B4FF'
			},150);
		},function(){
			$titleClose.stop().css({
				'background':'#1D1D1D',
			});
		}
	).on('click',function(){
		$('body').css({
			'overflow-y':'scroll'
		});
		$('#por-details').animate({
			opacity:0
		},'slow',function(){
			$('#por-details').css({
				'opacity':'1',
				'display':'none'
			});
		});
		$(this).parent().siblings('.body')
				.children('img')
				.appendTo($('#portfolio .selected'));
		$('#portfolio .selected').removeClass('selected');
	});

	// 6.send按钮划过效果

	$('#contact .form-submit>input').hover(
		function(){
			$(this).animate({
				backgroundColor:'#333333'
			});
		},function(){
			$(this).stop().css({
				background:'#00b4ff'
			})
		}
	);

	// $("#like .change span").hover(
	// 	function(){
	// 		$(this).siblings().removeClass('selected').end().addClass('selected');
	// 		$("#like .img img").removeClass('selected');
	// 		$($("#like .img img")[$(this).index()]).addClass('selected');
	// 	}
	// );

	//7.like中的轮播图特效（利用渐变）

	var iChange = 1;

	$(window).load(
		function(){
			setInterval(
			function(){
				if(iChange == 3){
					iChange = 0;
				}
				$("#like .img img").animate({
					opacity:0
				},100).css({
					display:"none",
					opacity:1
				});
				$($("#like .img img")[iChange]).css({
					display:"block",
					opacity:0
				}).animate({
					opacity:1
				},400);
				$("#like .change span").removeClass('selected');
				$($("#like .change span")[iChange]).addClass('selected');
				iChange++;
			},6000)
		}	
	);

	//8.上下滚动
	$scroll = $("#nav li>a");

	$scroll.click(function(event){		
		event.preventDefault();
		// 阻止默认行为
		$('html,body').animate({scrollTop:$(this.hash).offset().top},800);
	});

	



});