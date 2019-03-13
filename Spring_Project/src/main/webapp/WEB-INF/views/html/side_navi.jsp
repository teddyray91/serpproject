<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!-- 거래처 왼쪽 메뉴 -->
<div id='l_menu_transi'>
	<a id='transi_list' onclick='table_transi_list()'>거래처 정보</a>
	<c:if test="${empty part || part == '영업' || part == '총괄' }">
		<a id='transi_add' onclick='transi_add()'>거래처 등록</a>
		<a id='transi_remove' onclick='transi_modify_remove()'>거래처 변경/삭제</a>
	</c:if>
</div>
<!-- 물품관리 왼쪽 메뉴 -->
<div id='l_menu_item'>
	<button class='bt_dropdown' id='bt_storage'><i class='fas fa-align-justify fa-fw'></i>재고</button>
	<div class='dropdown_content'>
		<a id='storage_list' onclick='storage_list()'>재고현황</a>
		<c:if test="${empty part || part == '생산' || part == '총괄' }">
			<a id='iostorage_list' onclick='iostorage_list()'>입고/출고</a>
			<a id='storage_modify_remove' onclick='storage_modify_remove()'>재고변경</a>
		</c:if>
	</div>
	<button class='bt_dropdown' id='bt_item'><i class='fas fa-align-justify fa-fw'></i>제품</button>
	<div class='dropdown_content'>
		<a id='allstorage_list' onclick='allstorage_list()'>제품코드조회</a>
		<c:if test="${empty part || part == '생산' || part == '총괄' }">
			<a id='allstorage_add' onclick='allstorage_add()'>제품코드입력</a>
			<a id='allstorage_modify_remove' onclick='allstorage_modify_remove()'>제품코드변경/삭제</a>
		</c:if>
	</div>
</div>
<!-- 재고 왼쪽 메뉴 -->
<!-- 구매 -->
<div id='l_menu_buy'>
	<a id='buy_list' onclick='buy_table_list()'>구매현황</a>
	<c:if test="${empty part || part == '영업' || part == '총괄' }">
		<a id='buy_add' onclick='buy_add()'>발주서</a>
	</c:if>
</div>
<!-- 판매 -->
<div id='l_menu_sell'>
	<a id='sell_list' onclick='sell_table_list()'>판매현황</a>
	<c:if test="${empty part || part == '영업' || part == '총괄' }">
		<a id='sell_add' onclick='sell_add()'>견적서</a>
	</c:if>
</div>
<!-- 회사정보 -->
<div id='l_com_inform'>
	<a id='S_com_inform' onclick='com_table_list()'>회사정보</a>
	<c:if test="${empty part || part == '인사' || part == '총괄' }">
		<a id='S_com_inform_write' onclick='com_table_write()'>회사정보 입력</a>
		<a id='S_com_inform_trans' onclick='com_table_modify()'>회사정보 수정</a>
		<a id='D_employee_inform' onclick='com_employee_information()'>회사인원</a>
	</c:if>
</div>
<!-- 회원정보 -->
<div id='l_employee_information'>
	<a id='D_employee_inform' onclick='com_employee_information()'>회원정보</a>
	<a id='D_employee_inform' onclick="alert('준비중인 서비스 입니다.');">메뉴관리</a>
</div>