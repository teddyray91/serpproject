<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>team00 Project:회원가입</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/fontawesome/css/all.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/bootstrap-3.3.2/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/css/index.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/bootstrap-3.3.2/js/bootstrap.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/js/joinmember.js"></script>
</head>
<body>
<div id="main" style="text-align: center;">
	<form method="post" onsubmit="return join_commit()">
		<div id="joinform" align="center" style="text-align: center;">
			<h4>회원가입</h4>
			<table id='join_table'>
				<tr>
					<td>ID</td>
					<td><input type="text" name='id' id='id' class='auth0' placeholder="아이디를 입력해주세요" onkeyup="chk_id()" onblur="chk_id()" autocomplete="off" required/>
					</td>
					<td><input class='bt_check' type="button" value="ID 중복체크" id="chkbtn" name="chkbtn"/></td>
				</tr>
				<tr>
					<td colspan="3"><label id='id_label'></label></td>
				</tr>
				<tr>
					<td>PW</td>
					<td><input type="password" name='pw' id='pw'  placeholder="비밀번호를 입력해주세요."  onkeyup="chk_pw()" onblur="chk_pw()" autocomplete="off" required/></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label id='pw_label'></label></td>
				</tr>
				<tr>
					<td>PW try</td>
					<td><input type="password" name='pw_try' id='pw_try' placeholder="비밀번호 확인." onkeyup="chk_pw_try()" onblur="chk_pw_try()" autocomplete="off" required/></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label id='pw_try_label'></label></td>
				</tr>
				<tr>
					<td>NAME</td>
					<td><input type="text" name='name' id='name' placeholder="이름을 입력해주세요." onkeyup="chk_name()" onblur="chk_name()" autocomplete="off" required/></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label id='name_label'></label></td>
				</tr>
				<tr>
					<td>Gender</td>
					<td><select name='gender' class="form-control"><option value="1">남자</option><option value="2">여자</option></select></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label></label></td>
				</tr>
				<tr>
					<td>Phone</td>
					<td><input type="number" maxlength="11" name='phonenum' id='phonenum' placeholder="ex) 01011112222"  onkeyup="chk_pnum()" onblur="chk_pnum()" autocomplete="off" required/></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label id='p_label'></label></td>
				</tr>
				<tr>
					<td>E-Mail</td>
					<td><input type="text" name='email' id='email' placeholder="ex) hong@gmail.com"  onkeyup="chk_email()" onblur="chk_email()" autocomplete="off" required/></td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label id='email_label'></label></td>
				</tr>
				<tr>
					<td>PART</td>
					<td>
					<select name='partidx' class="form-control">
						<option value="1">총괄</option>
						<option value="2">생산</option>
						<option value="3">인사</option>
						<option value="4">영업</option>
					</select>
					</td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label></label></td>
				</tr>
				<tr>
					<td>RANK</td>
					<td>
					<select name='rankidx' class="form-control">
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
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label></label></td>
				</tr>
				<tr>
					<td>BIRTHDAY</td>
					<td colspan="2">
						<select name="year" id="year" class="form-control date" onchange="setDay()">
						</select>
						<select name="month" id="month" class="form-control date" onchange="setDay()">
						</select>
						<select name="day" id="day" class="form-control date">
						</select>
					</td>
					<td></td>
				</tr>
				<tr>
					<td colspan="3"><label></label></td>
				</tr>
				<tr>
					<td colspan="3" align="center"><input class='bt_check' type="submit" value="가입"/><input class='bt_check' type="button" value="취소" onclick="location.href='${pageContext.request.contextPath}'"/></td>
				</tr>
			</table>
			
		</div>
	</form>
</div>
</body>
</html>