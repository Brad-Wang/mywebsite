<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>提示</title>

    <base href="<?php echo site_url();?>">

    <link rel="stylesheet" href="css/ball-style.css" media="screen" type="text/css" />

</head>
<style>
    #container{
        margin-top: 50px;
        margin-bottom: 30px;
    }
    #container h1{
        color: white;
        text-align: center;
        margin-bottom: 20px;
    }
    #container p{
        color: white;
        text-align: center;
    }
</style>

<body>
<div id="container">
    <h1 class="messageh">
        <?php
            if($result === 'blog1'){
                echo '成功提交！';
            }else{
                echo '提交失败';
            }
        ?>

    </h1>
    <p class="messagep">三秒之后跳转</p>
</div>
<div style="text-align:center;clear:both">
    <script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
    <script src="/follow.js" type="text/javascript"></script>
</div>
<div style="text-align:center"><div id="stage"></div></div>

<script src='js/ball-matter-0.5.0.min.js'></script>

<script src="js/ball-index.js"></script>

<script>
    setInterval(function(){
        <?php
            if($result === 'blog1'){
                echo "location='blog/go_admin_blog_list';";
            }else{
                echo "location='blog/go_admin_push_blog';";
            }
        ?>
    },3000);
</script>

</body>

</html>