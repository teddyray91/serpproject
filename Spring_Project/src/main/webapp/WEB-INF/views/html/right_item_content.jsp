<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!-- 구매 -->
	<!-- 구매입력 -->
	<div id='buy_add'>
		<h3>구매양식</h3>
		<div id='search_number' class='panel panel-default'>
			<div id='handle_number' class='panel-heading'>
				<span style='vertical-align: middle; line-height: 20px;'>사업자번호 조회기</span>
			</div>
			<div class='panel-body' id='number_search_body'>
				<input type='text' placeholder="사업자번호 입력하세요" maxlength="11" name='trans_number_input'/>&nbsp;&nbsp;
				<button class='bt_search search0'>검색</button>&nbsp;<button class='bt_search cancel0'>종료</button>
			</div>
			
			<table id='table_search_number' class='table table-hover' style='width:350px;'>
				<tr>
					<th>#</th>
					<th>번호</th>
					<th>상호명</th>
					<th>대표자</th>
				</tr>
			</table>
		</div>
				
		<div id='search_item' class='panel panel-default'>
			<div id='handle_item' class='panel-heading'>
				<span style='vertical-align: middle; line-height: 20px;'>제품코드 조회기</span>
			</div>
			<div class='panel-body' id='item_search_body'>
				<input type='text' placeholder="제품코드를 입력하세요" maxlength="11" name='item_number_input'/>&nbsp;&nbsp;
				<button class='bt_search search1'>검색</button>&nbsp;<button class='bt_search cancel1'>종료</button>
			</div>
			
			<table id='table_search_item' class='table table-hover' style='width:350px;'>
				<tr>
					<th>#</th>
					<th>제품코드</th>
					<th>제품명</th>
				</tr>
			</table>
		</div>
		
		
		<form method="post" onsubmit="return TransAddItem()">
		<div>
			<table id='buy_trans' class='table table-bordered'>
				<tr>
					<td>일자</td>
					<td><input type='text' id='Datepicker' placeholder='직접 입력' required></td>
					<td>사업자번호</td>
					<td><input type='text' id='bt_busi_number' size='50%' required> <i class="fas fa-search search" id='search_busi_number'></i></td>
				</tr>
				<tr>
					<td>담당자</td>
					<td><input type='text' disabled value='${name }'><input type="hidden" value='${memidx }'></td>
					<td>주문자</td>
					<td><input type='text' disabled id='order_input_text'></td>
				</tr>
				<tr>
					<td>거래코드</td>
					<td colspan='3'><input type='text' style="width:100%;" disabled id='trans_code_input_text' placeholder='일자/사업자번호 입력하세요.'></td>
				</tr>
				<tr>
					<td>건명</td>
					<td colspan='3'><input type='text' style="width:100%;" id='trans_subject' required></td>
				</tr>
			</table>
		</div>
			
		<hr>
			
		<button onclick='bt_item_add()' type="button">추가</button> <button onclick='bt_item_remove()' type="button">삭제</button> <button type="button" onclick='bt_select_item_cols_remove()'>선택삭제</button>
		<br><br>
		<div>
			<table id='item' class='table table-bordered'>
				<tr>
					<th><input type='checkbox' ></th>
					<th>제품코드</th>
					<th>카테고리</th>
					<th>제품명</th>
					<th>제품수량</th>
					<th>금액</th>
					<th>비고</th>
				</tr>
				<tr>
					<td><input type='checkbox' name='item_check'></td>
					<td><input type='text' name='productcode' id='pro_code' maxlength='15' class='bt_item_code' required> <i class="fas fa-search search search_item_code"></i></td>
					<td><input type='text' name='productcate' id='pro_cate' maxlength='15' disabled style='background-color:rgba(234,234,234,0.5);'></td>
					<td><input type='text' name='productname' id='pro_name' maxlength='15' disabled style='background-color:rgba(234,234,234,0.5);'></td>
					<td><input type='text' name='productnum' id='pro_cnt' maxlength='15' required></td>
					<td><input type='text' name='productmoney' id='pro_money' maxlength='15' required><input type="hidden" name="buy_money"/></td>
					<td><input type='text' name='productet' id='pro_et' maxlength='15'></td>
				</tr>
			</table>
		</div>
		<br>
		<button type="submit">저장</button> <button type="button">다시작성</button>
		</form>
	</div>


	<!-- 구매현황 -->
	<div id='buy_list'>
		<h3>구매현황</h3>
		<button onclick='DBTrans_Buy_List()'>전체</button> <button onclick='DBTrans_Confirm_Buy_List()'>확인</button> <button onclick='DBTrans_Unconfirm_Buy_List()'>미확인</button>
		<br>
		<div>
			<table class='table table-bordered table-hover' id='buy_trans_list_table'>
				<tr>
					<th>거래번호</th>
					<th>거래일시</th>
					<th>거래명</th>
					<th>사업자명</th>
					<th>총금액</th>
					<th>결제유무</th>
				</tr>
			</table>
		</div>
		<div align="center">
			<div class="pagination">
			
			</div>
		</div>
		<div align="center">
			<select name='searchbuyoption' id='searchbuyoption' class="form-control searchopt_sel">
				<option value='trans_subject'>거래명</option>
				<option value='trans_code'>거래번호</option>
			</select>
			<input type='text' id='searchbuyvalue' name="searchbuyvalue_name"> <button onclick='search_buy_option_list()'>검색</button><!-- <button>상세검색</button> -->
		</div>
	</div>
	
	
	
<!-- 판매 -->
	<!-- 판매입력 -->
	<div id='sell_add'>
	<h3>판매양식</h3>
		<div id='search_number' class='panel panel-default'>
			<div id='handle_number' class='panel-heading'>
				<span style='vertical-align: middle; line-height: 20px;'>사업자번호 조회기</span>
			</div>
			<div class='panel-body' id='number_search_body'>
				<input type='text' placeholder="사업자번호 입력하세요" maxlength="11" name='trans_number_input'/>&nbsp;&nbsp;
				<button class='bt_search search0'>검색</button>&nbsp;<button class='bt_search cancel0'>종료</button>
			</div>
			
			<table id='table_search_number' class='table table-hover' style='width:350px;'>
				<tr>
					<th>#</th>
					<th>번호</th>
					<th>상호명</th>
					<th>대표자</th>
				</tr>
			</table>
		</div>
				
		<div id='search_item' class='panel panel-default'>
			<div id='handle_item' class='panel-heading'>
				<span style='vertical-align: middle; line-height: 20px;'>제품코드 조회기</span>
			</div>
			<div class='panel-body' id='item_search_body'>
				<input type='text' placeholder="제품코드를 입력하세요" maxlength="11" name='item_number_input'/>&nbsp;&nbsp;
				<button class='bt_search search1'>검색</button>&nbsp;<button class='bt_search cancel1'>종료</button>
			</div>
			
			<table id='table_search_item' class='table table-hover' style='width:350px;'>
				<tr>
					<th>#</th>
					<th>제품코드</th>
					<th>제품명</th>
				</tr>
			</table>
		</div>
		
		
		<form method="post" onsubmit="return TransAddItem()">
		<div>
			<table id='sell_trans' class='table table-bordered'>
				<tr>
					<td>일자</td>
					<td><input type='text' id='Datepicker' placeholder='직접 입력' required></td>
					<td>사업자번호</td>
					<td><input type='text' id='bt_busi_number' size='50%' required> <i class="fas fa-search search" id='search_busi_number'></i></td>
				</tr>
				<tr>
					<td>담당자</td>
					<td><input type='text' disabled value='${name }'><input type="hidden" value='${memidx }'></td>
					<td>주문자</td>
					<td><input type='text' disabled id='order_input_text'></td>
				</tr>
				<tr>
					<td>거래코드</td>
					<td colspan='3'><input type='text' style="width:100%;" disabled id='trans_code_input_text' placeholder='일자/사업자번호 입력하세요.'></td>
				</tr>
				<tr>
					<td>건명</td>
					<td colspan='3'><input type='text' style="width:100%;" id='trans_subject' required></td>
				</tr>
			</table>
		</div>
			
		<hr>
			
		<button onclick='bt_item_add()' type="button">추가</button> <button onclick='bt_item_remove()' type="button">삭제</button> <button type="button" onclick='bt_select_item_cols_remove()'>선택삭제</button>
		<br><br>
		<div>
			<table id='item' class='table table-bordered'>
				<tr>
					<th><input type='checkbox' ></th>
					<th>제품코드</th>
					<th>카테고리</th>
					<th>제품명</th>
					<th>제품수량</th>
					<th>금액</th>
					<th>비고</th>
				</tr>
				<tr>
					<td><input type='checkbox' name='item_check'></td>
					<td><input type='text' name='productcode' id='pro_code' maxlength='15' class='bt_item_code' required> <i class="fas fa-search search search_item_code"></i></td>
					<td><input type='text' name='productcate' id='pro_cate' maxlength='15' disabled style='background-color:rgba(234,234,234,0.5);'></td>
					<td><input type='text' name='productname' id='pro_name' maxlength='15' disabled style='background-color:rgba(234,234,234,0.5);'></td>
					<td><input type='text' name='productnum' id='pro_cnt' maxlength='15' required></td>
					<td><input type='text' name='productmoney' id='pro_money' maxlength='15' required><input type="hidden" name="buy_money"/></td>
					<td><input type='text' name='productet' id='pro_et' maxlength='15'></td>
				</tr>
			</table>
		</div>
		<br>
		<button type="submit">저장</button> <button type="button">다시작성</button>
		</form>
	</div>
	
	
	<!-- 판매현황 -->
<div id='sell_table_list'>
<h3>판매현황</h3>
<button onclick='DBTrans_Sell_List()'>전체</button> <button onclick=' DBTrans_Confirm_Sell_List()'>확인</button> <button onclick='DBTrans_Unconfirm_Sell_List()'>미확인</button>
	
<br>
 
	<div>
		<table class='table table-bordered table-hover' id='sell_trans_list_table'>
			<tr>
				<th>거래번호</th>
				<th>거래일시</th>
				<th>거래명</th>
				<th>사업자명</th>
				<th>총금액</th>
				<th>결제유무</th>
			</tr>
		</table>
	</div>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div align="center">
		<select name='searchselloption' id='searchselloption' class="form-control searchopt_sel">
			<option value='trans_subject'>거래명</option>
			<option value='trans_code'>거래번호</option>
		</select>
		<input type='text' id='searchsellvalue' name="searchsellvalue_name"> <button onclick='search_sell_option_list()'>검색</button><!-- <button>상세검색</button> -->
	</div>
</div>

<!-- 구매 상세 Template -->
<div id='detail_template'>
	<div id='handle_buy_detail_template' class='panel-heading' style='align-content: center; background-color: #e7e7e7;'>
		<span style='vertical-align: middle; line-height: 20px;'></span>
	</div>
	<div>
	<input type="hidden" id="comemidx"/>
		<table id='buy_detail_trans' class='table table-bordered'>
			<tr>
				<td>일자</td>
				<td id='buy_detail_date'></td>
				<td>사업자번호</td>
				<td id='buy_detail_number'></td>
			</tr>
			<tr>
				<td>담당자</td>
				<td id='buy_detail_coname'></td>
				<td>주문자</td>
				<td id='buy_detail_owner'></td>
			</tr>
			<tr>
				<td>거래코드</td>
				<td colspan='3' id='buy_detail_transcode'></td>
			</tr>
			<tr>
				<td>건명</td>
				<td colspan='3' id='buy_detail_subject'></td>
			</tr>
		</table>
	</div>
		
	<hr>
	<h3>물품내역</h3>
	<div>
		<table id='buy_detail_item' class='table table-bordered'>
			<tr>
				<th><input type='checkbox' ></th>
				<th>제품코드</th>
				<th>카테고리</th>
				<th>제품명</th>
				<th>제품수량</th>
				<th>금액</th>
				<th>비고</th>
			</tr>
		</table>
	</div>
	<br>
	<div id='user'>
		<button type="button" id='bt_buy_detail_item_modify' onclick='Item_Detail_Modify()' class='bt_detail'>수정</button> <button type="button" id='bt_buy_detail_item_reset' onclick='Item_Detail_Reset()' class='bt_detail'>초기화</button> <button type="button" id='bt_buy_detail_item_delete' onclick='Item_Detail_Delete()' class='bt_detail'>삭제</button>
		<div style='float: right;'><button type="button" id='bt_buy_detail_item' class='bt_detail'>닫기</button></div>
	</div>
</div>

