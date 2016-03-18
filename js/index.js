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
	var sText = '我会一直相信';
	var sTitle = '相信努力的力量';
	// 2.2 开启定时器，动态生成文字
	function appendText(){
		console.log('haha');
		var iText = 0;
		var iTitle = 0;
		setInterval(function(){
			if(iText<(sText.length+2)){
				$('#home p').append(sText[iText]);
				iText++;
				//console.log('iText<sText.length');
			}else if(iTitle<(sTitle.length+6)){
				$('#home h1').append(sTitle[iTitle]);
				iTitle++;
				//console.log('iTitle<sTitle.length');
			}else if(iText>=(sText.length+2) && iTitle>=(sTitle.length+5)){
				$('#home p').empty();
				$('#home h1').empty();
				iText = 0;
				iTitle = 0;
				//console.log('清空');
			}
		},200)
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


	//7.like中的轮播图特效（左右滑动）

		var $Img = $('#like .img');
		var iImgIndex = 1;
		var $Title = $('#like .like-head-top');
		var $Underline= $('#like .like-head-underline');

		function fnImgPlay(){
			var sImgLeft = '-'+iImgIndex*100+'%';
			if(iImgIndex == 1){
				$Title.css({
					color:'black'
				});
				$Underline.css({
					background: 'black'
				});
			}else{
				$Title.css({
					color:'white'
				});
				$Underline.css({
					background: 'white'
				});
			}
			$Img.animate({
				left: sImgLeft
			},600,function(){
				if(iImgIndex == 3){
					iImgIndex = 1;
					$Img.css({
						left: 0
					});
				}else{
					iImgIndex++;
				}
			});
		}

		setInterval(function(){
			fnImgPlay();
		},5000);


	//8.上下滚动
	$scroll = $("#nav li>a");

	$scroll.click(function(event){		
		event.preventDefault();
		// 阻止默认行为
		$('html,body').animate({scrollTop:$(this.hash).offset().top},800);
	});

	//9.blog中按钮变色（事件代理，事件委托）

	$('#blog').on('mouseover','button',function(){
		$(this).animate({
			backgroundColor:'#333'
		},200);
	});
	$('#blog').on('mouseout','button',function(){
		$(this).stop().css({
			background:'#64c9db'
		});
	});

	//10.Ajax加载瀑布流

	var $btn = $('#blog .bottom button');
	var $loadi = 0;
	function fnGetMinUL(){
		var $uls = $('#blog .content ul');
		var minUl = $uls.eq(0);
		for(var i=1;i<$uls.length;i++){
			if( $uls.eq(i).height() < minUl.height() ){
				minUl = $uls.eq(i);
			}
		}
		return minUl;
	}

	function fnGetBlog(){
		$.get('blog/get_blog',{offset:$loadi},function(res){
			for(var i=0;i<res.length;i++){
				var oUl = fnGetMinUL();
				var $html = '<li>' +
						'<img src="'+ res[i].img +'" alt=""><br>' +
						'<h3>'+res[i].title+'</h3><br>' +
						'<span>'+ res[i].author +'</span> | <span>'+ res[i].addtime +'</span><br><br>'+
						'<p>' +
						res[i].summary +
						'</p>'+
						'<br>'+
						'<button data-id="'+ res[i].id +'">详 情</button>' +
						'<div></div>'+
						'</li>';
				oUl.append($html);
			}
			if(res.length<6){
				$btn.prop({
					disabled: true
				}).css({
					background: '#333'
				}).empty().append('Unload');
			}else{
				$btn.empty().append('More...');
			}
		},'json');
		$loadi++;
	}

	fnGetBlog();
	$btn.on('click',function(){
		$btn.empty().append('Loading...').prop({
			disabled: true
		});
		fnGetBlog();
	});

	$('#blog .content').on('click','button',function(){
		location.href = 'blog/get_single_blog?bid='+$(this).attr('data-id');
	});

	//11.留言提交

	var $name = $('#contact .name'),
		$email = $('#contact .email'),
		$phone = $('#contact .phone'),
		$content = $('#contact .content'),
		$send = $('#contact .send'),
		$contactInput = $('#contact input');
	$send.on('click',function(){
		$(this).prop({
			disabled: true
		});
		if($name.val() == ''||$email.val() == ''||$phone.val() == ''||$content.val() == ''){
			for(var i=0;i<$contactInput.length;i++){
				if($contactInput.eq(i).val() == ''){
					$contactInput.eq(i).css({
						border:'2px solid red'
					});
				}
			}
			if($content.val() == ''){
				$content.css({
					border:'2px solid red'
				});
			}
			alert('您有信息未填写');
			$send.css({
				background: '#00b4ff'
			});
			$send.removeProp('disabled');
		}else if($content.length>=100){
			alert('留言输入不可以超过100字');
		}else{
			$.get('message/save_message',{
				name:$name.val(),
				email:$email.val(),
				phone:$phone.val(),
				content:$content.val()
			},function(res){
				if(res){
					alert('提交成功');
				}else{
					alert('提交失败，请稍后再试');
				}
				$send.css({
					background: '#00b4ff'
				})
			},'text')
		}
	});
	$contactInput.on('focus',function(){
		$(this).css({
			border:''
		});
	});
	$content.on('focus',function(){
		$(this).css({
			border:''
		});
	});
	



});