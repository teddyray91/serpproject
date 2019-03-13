<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 거래처 오른쪽 컨텐츠 모음 -->

<!-- 거래처 정보 -->
<div id='storage_list'>
	<h3>재고현황</h3>
	<hr>
	<table id='table_storage_list' class='table table-bordered'>
	<tr>
	<th>물품코드</th>
	<th>카테고리</th>
	<th>이름</th>
	<th>수량</th>
	</tr>
	</table>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div style="text-align: center; padding-right: 30px;">
	<select name='searchstorage' class="form-control searchopt_sel" id='searchstorage'><option value='item_code'>물품코드</option><option value='item_category'>카테고리</option></select><input type='text' id="storagevalue" name="storagevalue_name"/> <button onclick='search_storage_option_list2()'>검색</button>
	</div>
</div>

<!-- 거래처 변경/삭제 -->
<div id='storage_modify_remove'>
	<h3>재고변경</h3>
	<hr>
	<div style="float: right; padding-right: 30px;">
		<button id='select_storage_modify'>선택수정</button>
	</div><br>
	<table id='table_storage_list' class='table table-bordered'>
	<tr>
	<th><input type='checkbox'></th>
	<th id="item_code">품목코드</th>
	<th id="item_category">카테고리</th>
	<th id="item_name">품목명</th>
	<th id="item_cnt">품목 갯수</th>
	</tr>
	</table>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div style="text-align: center; padding-right: 30px;">
	<select name='searchstorage' id='searchstorage' class="form-control searchopt_sel"><option value='item_code'>물품코드</option><option value='item_category'>카테고리</option></select><input type='text' id="storagevalue" name="storagevalue_name"/> <button onclick='search_storage_option_list()'>검색</button>
	</div>
</div>

<!-- 재고 입출고  -->
<div id='iostorage'>
	<h3>입고/출고</h3>
	<hr>
	<button onclick="iostorage_list()">전체</button> <button onclick="iostorage_list_index('입고')">입고</button> <button onclick="iostorage_list_index('출고')">출고</button>
	<br>
	<div>
		<table class='table table-bordered table-hover' id='iostorage_table'>
			<tr>
				<th>인덱스</th>
				<th>거래일시</th>
				<th>거래코드</th>
				<th>분류</th>
				<th>사업자번호</th>
				<th>사업자대표</th>
				<th>담당자</th>
				<th>입출</th>
			</tr>
		</table>
	</div>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div align="center">
		<select name='searchindex' id='searchindex' class="form-control searchopt_sel">
			<option value='trans_code'>거래코드</option>
			<option value='busi_number'>사업자번호</option>
			<option value='busi_name'>사업자명</option>
			<option value='name'>담당자</option>
		</select>
		<input type='text' id='searchinput' name='searchinput'> <button onclick="iostorage_list_searchbar()">검색</button>
	</div>
	
	<div id='iostorage_Detail'>
		<div id='handle_iostorage_Detail' class='panel-heading' style='align-content: center; background-color: #e7e7e7;'>
		<span style='vertical-align: middle; line-height: 20px; font-weight: bold;'></span>
		</div>
		<h3></h3>
		<hr>
		<div>
			<table id='iostorage_Detail_item' class='table table-bordered'>
				<tr>
					<th>제품코드</th>
					<th>카테고리</th>
					<th>제품명</th>
					<th>제품수량</th>
				</tr>
			</table>
		</div><br>
		<div align="center">
			<button id='action_bt' onclick="bt_iostorage_inout()">입/출고</button> <button onclick="bt_iostorage_close()">닫기</button>
		</div>
	</div>
	
</div>
