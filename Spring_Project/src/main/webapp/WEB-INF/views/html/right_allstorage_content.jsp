<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id='allstorage_list'>
	<h3>제품코드조회</h3><hr>
	<table id='table_allstorage_list' class='table table-bordered'>
	<tr>
	<th>물품코드</th>
	<th>카테고리</th>
	<th>이름</th>
	<th>수량</th>
	<th>구매금액</th>
	<th>판매금액</th>
	</tr>
	</table>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div style="text-align: center; padding-right: 30px;">
	<select name='allsearchstorage' id='allsearchstorage' class="form-control searchopt_sel"><option value="item_code">물품코드</option><option value="item_category">카테고리</option></select><input type='text' id="allstoragevalue" name="allstoragevalue_name"/> <button onclick='search_allstorage_option_list2()'>검색</button>
	</div>
</div>
<!-- 거래처 등록 -->
<div id='allstorage_add'>
<h3>제품코드 등록</h3><hr>
<form onsubmit='return allstorageadd()'>
	<input type='submit' value='등록'/> <input type='button' value='취소' onclick='allstorage_list'/><br>
	<table class='table table-bordered'>
		<tr>
			<td>물품코드</td>
			<td><input type='text' name='item_code' required/></td>
		</tr>
		<tr>
			<td>카테고리</td>
			<td><input type='text' name='item_category' required/></td>
		</tr>
		<tr>
			<td>이름</td>
			<td><input type='text' name='item_name' required/></td>
		</tr>
		<tr>
			<td>수량</td>
			<td><input type='text' name='item_cnt' required/></td>
		</tr>
		<tr>
			<td>구매금액</td>
			<td><input type='text' name='buy_money' required/></td>
		</tr>
		<tr>
			<td>판매금액</td>
			<td><input type='text' name='sell_money' required/></td>
		</tr>
		
	</table>
</form>
</div>
<!-- 거래처 변경/삭제 -->
<div id='allstorage_modify_remove'>
<h3>제품코드 변경/삭제</h3><hr>
	<div style="float: right; padding-right: 30px;">
		<button id='select_allstorage_modify'>선택수정</button> <button id="select_allstorage_remove">선택삭제</button>
	</div>
	<table id='table_allstorage_list' class='table table-bordered'>
	<tr>
	<th><input type='checkbox' id="checkall"></th>
	<th>품목코드</th>
	<th>카테고리</th>
	<th>품목명</th>
	<th>품목 갯수</th>
	<th>구매 금액</th>
	<th>판매 금액</th>
	</tr>
	</table>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div style="text-align: center; padding-right: 30px;">
	<select name='allsearchstorage' id='allsearchstorage' class="form-control searchopt_sel"><option value="item_code">물품코드</option><option value="item_category">카테고리</option></select><input type='text' id="allstoragevalue" name="allstoragevalue_name"/> <button onclick='search_allstorage_option_list()'>검색</button>
	</div>
</div>