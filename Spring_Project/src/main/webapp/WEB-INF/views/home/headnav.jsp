<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<div id="head">
	<div id="h_container" style='text-align: left;'>
		<a id='head_logo'><img src="${pageContext.request.contextPath }/resources/img/logo.png" style="border-radius: 5px;" height="40px"></a>
		<div style="float: right; margin-right: 20px;">
			<a class='head_menu' id='user'><i style="color:#b2b2b2;" class="fas fa-user fa-2x"></i></a>&nbsp;
			<a class='head_menu' id='logout'><i style="color:#b2b2b2;" class='fas fa-sign-out-alt fa-2x'></i></a>
		</div>
		<div class="card" id='profile_card'>
			<input type="hidden" id='d1' value=${memidx }>
			<input type="hidden" id='d2' value=${auth }>
			<img src="${pageContext.request.contextPath }/resources/img/logo.png" alt='주석' style="width:100%">
			<h3 style="color:white;">${name }<br>${email }</h3>
			<p class="title">${part } / ${rank }</p>
			<p style="color:white;">SERP</p>
			<div style="margin: 24px 0;">
				<a href="#" class='card_a'><i class="fab fa-dribbble"></i></a> 
				<a href="#" class='card_a'><i class="fab fa-twitter"></i></a>  
				<a href="#" class='card_a'><i class="fab fa-instagram"></i></a>  
				<a href="#" class='card_a'><i class="fab fa-facebook-f"></i></a> 
			</div>
			<button class='btn bt_head_icon'>출근</button>
			<button class='btn bt_head_icon' id='user_modify'>개인정보변경</button>
			<button class='btn bt_head_icon' id='card_close'>닫기</button>
		</div>
	</div>
</div>

<div id="nav">
	<div id="n_container">
		<ul id="main_nav">
			<li><span id="main_transi">거래처</span></li>
			<li><span id="main_item">거래</span></li>
			<li><span id="main_mod">물품관리</span></li>
			<li><span id="main_company">회사</span></li>
			<c:if test="${empty auth || auth == 5 }">
				<li><span id="main_employee">웹관리자</span></li>
			</c:if>
		</ul>
	</div>
	<div id="sub_container">
		<ul id="item">
			<li><span id="buy">구매</span></li>
			<li><span id="sell">판매</span></li>
		</ul>
		<ul id="groupware" style="padding-left: 300px;">
			<li><span>메일</span></li>
			<li><span>접속자</span></li>
			<li><span>출근/퇴근</span></li>
		</ul>
	</div>
</div>