<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<!-- 회원정보 -->
<div id='employee_information'>
	<h3>회원정보</h3>
	<hr>
	<select id='grant_select' class="form-control busi_index_sel">
		<option value='all'>전체</option>
		<option value='accept'>승인</option>
		<option value='ready'>대기</option>
	</select>
		<br>
		<div>
	<table id='employee_information_list_table' class='table table-bordered table-hover'>
		<tr>
			<th>인덱스</th>
			<th>직급</th>
			<th>부서</th>
			<th>이름</th>
			<th>권한</th>
			<th>승인</th>
		</tr>
	</table>
	</div>
	<div align="center">
		<div class="pagination">
		
		</div>
	</div>
	<div style="text-align: center; padding-right: 30px;">
		<select id='member_index_select' class="form-control busi_index_sel">
			<option>직급</option>
			<option>부서</option>
			<option>이름</option>
		</select>
	 	<input type="text" id='member_search_input' />
			<button onclick="member_search_input_bt_action()">검색</button>
	</div>
</div>

<!-- 회원정보  상세보기 -->
<div id='detail_employee_information'>
	<div id='layout_employee'>
		<div id='handle_employee_detail' class='panel-heading' style='align-content: center; background-color: #e7e7e7;'>
			<span style='vertical-align: middle; line-height: 20px;'>회원 상세보기</span>
		</div>
	
		<div>
			<table id='member_detail_view' class='table table-bordered'>
				<tr>
					<td>인덱스</td>
					<td id="detail_memidx"></td>
					<td>권한</td>
					<td>
						<select name='grantidx' class="form-control long_member_sel">
							<option value=0>대기</option>
							<option value=1>일반</option>
							<option value=2>인사관리자</option>
							<option value=3>영업관리자</option>
							<option value=4>창고관리자</option>
							<option value=5>총관리자</option>
							<option value=6>퇴직</option>
						</select>
					</td>
				</tr>
	
				<tr>
					<td>부서</td>
					<td>
						<select name='partidx' class="form-control short_member_sel">
							<option value="1">총괄</option>
							<option value="2">생산</option>
							<option value="3">인사</option>
							<option value="4">영업</option>
						</select>
					</td>
					
					<td>직책</td>
					<td>
						<select name='rankidx' class="form-control short_member_sel">
						<option value="0">선택</option>
						<option value="1">회장</option>
						<option value="2">부회장</option>
						<option value="3">사장</option>
						<option value="4">부사장</option>
						<option value="5">전무</option>
						<option value="6">상무</option>
						<option value="7">이사</option>
						<option value="8">부장</option>
						<option value="9">차장</option>
						<option value="10">과장</option>
						<option value="11">대리</option>
						<option value="12">주임</option>
						<option value="13">사원</option>
						</select>
					</td>
				</tr>
	
				<tr>
					<td>아이디</td>
					<td><input type="text" name="detail_id" required></input></td>
					<td>패스워드</td>
					<td><input type="text" name="detail_pw" required></input></td>
				</tr>
	
				<tr>
					<td>이름</td>
					<td><input type="text" name="detail_name" required></input></td>
					<td>성별</td>
					<td id="detail_gender"><select name='gender' class="form-control short_member_sel"><option value="1">남자</option><option value="2">여자</option></select></td>
				</tr>
	
				<tr>
					<td>전화번호</td>
					<td><input type="text" name="detail_phonenum" required></input></td>
					<td>이메일</td>
					<td><input type="text" name="datail_email" required></input></td>
				</tr>
	
				<tr>
					<td>생년월일</td>
					<td id="detail_birthday"></td>
					<td>가입일</td>
					<td id="detail_joindate"></td>
				</tr>
			</table>
		</div>
		<br>
		<div>
			<button id="member_detail_modify" onclick="em_datail_modify_btn()">수정</button>
			<button id="member_detail_reset" onclick="em_datail_reset_btn()">초기화</button>
			<button id="member_detail_delete" onclick="em_datail_delete_btn()">삭제</button>
			<div style='float: right;'>
				<button id="employee_close_btn">닫기</button>
			</div>
		</div>
	</div>
</div>