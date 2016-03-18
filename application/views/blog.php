<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>博客详情</title>
	<base href="<?php echo site_url();?>">
	<link rel="stylesheet" href="css/blog.css" type="text/css">
	<link rel="alternate icon" type="image/png" href="img/favicon.png">
</head>
<body>
	<div id="top">
		<div class="blog-name">	
			<h1>博 客 详 情</h1>
			<p><a href="welcome/index">返回主页</a></p>
		</div>
	</div>
	<div id="content">
		<img src="<?php echo $result->img?>" alt="" class="first-img">
		<div class="text">
			<h1 class="title"><?php echo $result->title?></h1>
			<br>
			<p class="addtime"><?php echo $result->addtime?>&nbsp;&nbsp;&nbsp;form&nbsp;&nbsp;&nbsp;<?php echo $result->author?></p>
			<br>
			<p class="detail"><?php echo $result->content?></p>
		</div>
	</div>
</body>
</html>