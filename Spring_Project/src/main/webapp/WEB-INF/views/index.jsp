<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>SERP Project</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/fontawesome/css/all.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/bootstrap-3.3.2/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/css/index.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/bootstrap-3.3.2/js/bootstrap.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/js/index.js"></script>
</head>
<body>
<div id="main">
	<div id="loginform" style="background-color: rgba(247,247,247,1);">
		<div>
			<div>
				<img src="${pageContext.request.contextPath }/resources/img/logo.png" style="border-radius: 5px;">
			</div>
		</div>
		<form action='login' method="post">
			<div>
				<i class="fas fa-user fa-2x" style="color:#a0a0a0; margin-right:10px; "></i><input type="text" class="form-control id" placeholder="example" name='id' required/>
			</div>
			<div>
				<i class="fas fa-key fa-2x"  style="color:#a0a0a0; margin-right:10px; "></i><input type="text" class="form-control pw" placeholder="Password" name='pw' required/>
			</div>
			<div>
				<input type="submit" class="btn btn-default" value="로그인"/>
			</div>
		</form>
		<div align="center">
			<a class='findsearch' id="findid" >아이디</a> / <a class='findsearch' id="findpw" >비밀번호 찾기</a> 
			<input type="button" class="btn btn-outline-secondary btn-block" style="width: 300px;" id="join" value="등록"/>
		</div>
	</div>
</div>
<div id="findView">
	<div id="detail_find" align="center">
	</div>
	<div align="center">
		<input type="button" class="btn btn-default" id="cancel_bt" value="닫기"/>
	</div>
</div>
</body>
</html>