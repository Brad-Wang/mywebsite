<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>Login Page | Amaze UI Example</title>
  <base href="<?php echo site_url()?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <link rel="alternate icon" type="image/png" href="assets/i/favicon.png">
  <link rel="stylesheet" href="assets/css/amazeui.min.css"/>
  <style>
    .header {
      text-align: center;
    }
    .header h1 {
      font-size: 200%;
      color: #333;
      margin-top: 30px;
    }
    .header p {
      font-size: 14px;
    }
    .header .am-g p{
      font-size: 25px;
    }
  </style>
</head>
<body>
<div class="header">
  <div class="am-g">
    <h1>管 理 员 登 录</h1>
    <p>admin login</p>
  </div>
  <hr />
</div>
<div class="am-g">
  <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
    <form method="post" class="am-form" action="user/do_login">
      <label for="email">用户名:</label>
      <input type="text" name="user_name" id="email" value="">
      <br>
      <label for="password">密码:</label>
      <input type="password" name="user_pwd" id="password" value="">
      <br>
      <label for="remember-me">
        <input id="remember-me" type="checkbox" name="rem_login" value="1" checked>
        记住密码
      </label>
      <br />
      <div class="am-cf">
        <input type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl">
      </div>
    </form>
    <hr>
    <p>© 2014 0924</p>
  </div>
</div>
</body>
</html>