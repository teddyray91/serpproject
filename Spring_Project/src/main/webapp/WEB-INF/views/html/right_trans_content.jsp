<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 거래처 오른쪽 컨텐츠 모음 -->

<!-- 거래처 정보 -->
<div id='trans_list'>
<h3>거래처 리스트</h3>
<hr>
<select name= 'select_busi_index_name' class="form-control busi_index_sel" id='select_busi_index_id'><option value='%'>전체</option><option value='농장'>농장</option><option value='마트'>마트</option></select>
	<table id='table_trans_list' class='table table-bordered'>
	<tr>
	<th>사업자번호</th>
	<th>사업장명</th>
	<th>주소</th>
	<th>대표자</th>
	<th>연락처</th>
	<th>농장/마트</th>
	</tr>
	</table>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div style="text-align: center; padding-right: 30px;">
	<select id='searchoption' class="form-control searchopt_sel" name='searchoption'><option value= 'busi_number'>사업자번호</option><option value= 'busi_name'>사업장명</option><option value='busi_owner'>대표자</option></select><input type='text' id='searchvalue' name="searchvalue_name"/> <button id='searchstart' onclick='search_busi_option_list()'>검색</button>
	</div>
</div>
<!-- 거래처 등록 -->
<div id='trans_add'>
<h3>거래처 등록</h3>
<hr>
<form onsubmit='return transadd()'>
	<input type='submit' value='등록'/> <input type='button' value='취소' onclick='transi_list'/><br>
	<table class='table table-bordered'>
		<tr>
			<td>사업자번호</td>
			<td><input type='text' name='busi_number' required maxlength="11"/></td>
		</tr>
		<tr>
			<td>사업장명</td>
			<td><input type='text' name='busi_name' required/></td>
		</tr>
		<tr>
			<td>주소</td>
			<td><input type='text' name='busi_address' required/></td>
		</tr>
		<tr>
			<td>대표자</td>
			<td><input type='text' name='busi_owner' required/></td>
		</tr>
		<tr>
			<td>연락처</td>
			<td><input type='text' name='busi_phone' required maxlength="11"/></td>
		</tr>
		<tr>
			<td>농장/마트</td>
			<td><select name='busi_index' class="form-control busi_index_sel"><option value='농장'>농장</option><option value='마트'>마트</option></select></td>
		</tr>
	</table>
</form>
</div>
<!-- 거래처 변경/삭제 -->
<div id='trans_modify_remove'>
<h3>거래처 수정/삭제</h3>
<hr>
	<select name= 'select_busi_index_name' class="form-control busi_index_sel" id='select_busi_index_id2'><option value='%'>전체</option><option value='농장'>농장</option><option value='마트'>마트</option></select>
	<div style="float: right; padding-right: 30px;">
		<button id='select_modify'>선택수정</button> <button>선택삭제</button>
	</div><br>
	<table id='table_trans_list' class='table table-bordered'>
	<tr>
	<th><input type='checkbox' id='trans_all_check'></th>
	<th>사업자번호</th>
	<th>사업장명</th>
	<th>주소</th>
	<th>대표자</th>
	<th>연락처</th>
	<th>농장/마트</th>
	<th>삭제</th>
	</tr>
	</table>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div style="text-align: center; padding-right: 30px;">
	<select id='searchoption' name='searchoption' class="form-control searchopt_sel"><option value= 'busi_number'>사업자번호</option><option value= 'busi_name'>사업장명</option><option value='busi_owner'>대표자</option></select><input type='text' id='searchvalue' name="searchvalue_name"/> <button id='searchstart' onclick='search_busi_option_list2()'>검색</button>
	</div>
</div>