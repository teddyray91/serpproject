<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:choose>
	<c:when test="${empty auth}">
		<script>alert('아이디 또는 비밀번호를 확인하여주세요.'); location.href = "loginfail";</script>
	</c:when>
	<c:when test="${auth == 0 }">
		<script>alert('가입 승인을 받아주세요.'); location.href = "loginfail";</script>
	</c:when>
	<c:when test="${auth == 5 }">
		<script>alert('웹 관리자님 어서오세요.'); location.href = "admin";</script>
	</c:when>
	<c:otherwise>
		<script>alert('로그인 성공'); location.href = "home";</script>
	</c:otherwise>
</c:choose>