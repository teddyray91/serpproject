<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
	<!-- 회사 정보 -->
	<div id='company_inform'>
	<h3>회사 정보</h3>
	<br>	 
	<div>
		<table class='table'>
		<tr><td>사업 번호</td><td id="comnumber"></td></tr>
		<tr><td>회사 명</td><td id="comname"></td></tr>
		<tr><td>대표자</td><td id="comowner"></td></tr>
		<tr><td>설립 일자</td><td id="comdate"></td></tr>
		<tr><td>회사 자본</td><td id="commoney"></td></tr>
		<tr><td>대표 전화번호</td><td id="comtel"></td></tr>
		<tr><td>팩스 번호</td><td id="comfax"></td></tr>
		<tr><td>이메일</td><td id="comemail"></td></tr>
		<tr><td>회사 위치</td><td id="comloc"></td></tr>
		<tr><td>직원 수</td><td id="comemp"></td></tr>
		<tr><td>거래처 수</td><td id="comtran"></td></tr>
		</table>
	</div>
	</div>
	
	<!-- 회사 정보 입력 -->
	<div id='company_inform_write'>
	<h3>회사 정보 입력</h3>
	<br>	 
	<div>
	<form onsubmit="return cominformadd()">
		<table class='table'>
		<tr><td>사업 번호</td><td id="comnumber"><input type="text" name="comnumber" required maxlength="11"></input> </td></tr>
		<tr><td>회사 명</td><td id="comname"><input type="text" name="comname" required></input></td></tr>
		<tr><td>대표자</td><td id="comowner"><input type="text" name="comowner" required></input></td></tr>
		<tr><td>설립 일자</td><td id="comdate"><input type="text" name="comdate" required></input></td></tr>
		<tr><td>회사 자본</td><td id="commoney"><input type="text" name="commoney" required></input></td></tr>
		<tr><td>대표 전화번호</td><td id="comtel"><input type="text" name="comtel" required maxlength="11"></input></td></tr>
		<tr><td>팩스 번호</td><td id="comfax"><input type="text" name="comfax" required maxlength="11"></input></td></tr>
		<tr><td>이메일</td><td id="comemail"><input type="text" name="comemail" required></input></td></tr>
		<tr><td>회사 위치</td><td id="comloc"><input type="text" name="comloc" required></input></td></tr>
		</table>
		<input type='submit' value='저장'/>	
	</form>
	</div>
	</div>
	
	<!-- 회사 정보 수정 -->
	<div id='company_inform_modify'>
	<h3>회사 정보 수정</h3>
	<br>	 
	<div>
	<form>
		<table class='table'>
		<tr><td>사업 번호</td><td id="comnumber"></td></tr>
		<tr><td>회사 명</td><td id="comname"></td></tr>
		<tr><td>대표자</td><td><input type="text" name="comowner" required></input></td></tr>
		<tr><td>설립 일자</td><td id="comdate"></td></tr>
		<tr><td>회사 자본</td><td><input type="text" name="commoney" required></input></td></tr>
		<tr><td>대표 전화번호</td><td><input type="text" name="comtel" required></input></td></tr>
		<tr><td>팩스 번호</td><td><input type="text" name="comfax" required></input></td></tr>
		<tr><td>이메일</td><td><input type="text" name="comemail" required></input></td></tr>
		<tr><td>회사 위치</td><td><input type="text" name="comloc" required></input></td></tr>
		</table>
	<button class="modify">수정</button>	
	</form>
	</div>
	</div>



