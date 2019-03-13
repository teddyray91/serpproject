/**
 * 
 */
$(document).ready(function() {
	date_birth();
});
function chk_id() {
	var id = document.getElementById('id').value.trim();
	document.getElementById('id_label').innerHTML = '';
	var pattern = /[^0-9a-zA-Z]/gi;
	if (pattern.test(id)) {
		document.getElementById('id_label').style.color = "red";
		document.getElementById('id_label').innerHTML = '영문, 숫자만 가능합니다.';
		return;
	}
	if (id.length < 6 || id.length > 20) {
		document.getElementById('id_label').style.color = "red";
		document.getElementById('id_label').innerHTML = '6 ~ 20자로 입력하세요.';
		id_isbol = false;
		return;
	}
	document.getElementById('id_label').style.color = "green";
	document.getElementById('id_label').innerHTML = '사용 가능한 아이디입니다.';
}// 아이디 입력값 가져와 중복체크
$(function() {
	$("#chkbtn").click(function() {
		// userid 를 param.
		var id = $("#id").val();
		$.ajax({
			url : "selectid",
			type : 'POST',
			cache : false,
			data : id,
			contentType : "application/json; charset=UTF-8",
			success : function(data, status) {
				if (status == "success") {
					if (data.cnt > 0) {
						alert("존재하는 아이디입니다. 다른 아이디를 입력해주세요.");
						$("#id").val('');
						$("#id").focus();
					} else {
						alert("사용가능한 아이디입니다.");
						$("#pw").focus();
						$('#id').attr('class', 'auth1');
					}
				} else {
					alert("status fail");
				}
			},
		});
	});
});
function chk_pw() {
	var pw = document.getElementById('pw').value.trim();
	document.getElementById('pw_label').innerHTML = '';
	var pattern = /[^0-9a-zA-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
	if (pattern.test(pw)) {
		document.getElementById('pw_label').style.color = 'red';
		document.getElementById('pw_label').innerHTML = '영문, 숫자, 특수문자만 가능합니다.';
		return;
	}
	if (pw.length < 8 || pw.length > 20) {
		document.getElementById('pw_label').style.color = "red";
		document.getElementById('pw_label').innerHTML = '8 ~ 20자로 입력하세요.';
		return;
	}
	document.getElementById('pw_label').style.color = "green";
	document.getElementById('pw_label').innerHTML = '사용 가능한 비밀번호입니다.';
}function chk_pw_try() {
	var pw = document.getElementById('pw').value.trim();
	var pw_try = document.getElementById('pw_try').value.trim();
	document.getElementById('pw_try_label').innerHTML = '';
	if (pw == pw_try && pw.length == pw_try.length && pw.length > 0) {
		document.getElementById('pw_try_label').style.color = "green";
		document.getElementById('pw_try_label').innerHTML = '비밀번호 확인';
		return;
	}
	document.getElementById('pw_try_label').style.color = "red";
	document.getElementById('pw_try_label').innerHTML = '비밀번호가 다릅니다.';
}function chk_name() {
	var name = document.getElementById('name').value.trim();
	document.getElementById('name_label').innerHTML = '';
	var pattern = /[^0-9a-zA-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
	if (pattern.test(name)) {
		document.getElementById('name_label').innerHTML = "";
		return;
	}
	document.getElementById('name_label').style.color = "red";
	document.getElementById('name_label').innerHTML = '한글 이름을 입력해주세요.';
}function chk_pnum() {
	var phonenum = document.getElementById('phonenum').value.trim();
	document.getElementById('p_label').innerHTML = '';
	if (phonenum.length == 9 || phonenum.length == 10 || phonenum.length == 11) {
		document.getElementById('p_label').innerHTML = '';
		return;
	}
	document.getElementById('p_label').style.color = "red";
	document.getElementById('p_label').innerHTML = '번호를 확인해주세요.';
}function chk_email() {
	var email = document.getElementById('email').value.trim();
	document.getElementById('email_label').innerHTML = '';
	var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	if (email.match(pattern)) {
		document.getElementById('emaila_label').innerHTML = '';
		return;
	}
	document.getElementById('email_label').style.color = "red";
	document.getElementById('email_label').innerHTML = '이메일을 확인해주세요.';
	
}function join_commit() {
	var year;
	var month;
	var day;
	year = $('select[name=year]').val();
	month = $('select[name=month]').val();
	month = month >= 10 ? month : '0' + month;
	day = $('select[name=day]').val();
	day = day >= 10 ? day : '0' + day;
	var tempdate = year + "-" + month + "-" + day + " 00:00:00";
	// 정합성 체크 필요
	if($('#id').attr('class') == 'auth1'){
		// 데이터 성공
		// 데이터 전달
		$.ajax({
			url : "joincommit",
			type : "POST",
			cache : false,
			data : {
				"partidx" : $('select[name=partidx]').val(),
				"rankidx" : $('select[name=rankidx]').val(),
				"id" : $('input[name=id]').val(),
				"pw" : $('input[name=pw]').val(),
				"name" : $('input[name=name]').val(),
				"gender" : $('select[name=gender]').val(),
				"phonenum" : $('input[name=phonenum]').val(),
				"email" : $('input[name=email]').val(),
				"birthday" : tempdate
			},
			success : function(data, status) {
				if (status == "success") {
					if (data.state == "ok") {
						alert('가입이 성공하였습니다.');
						location.href = location.protocol + '//' + location.host
								+ "/springproject";
					} else {
						alert('DB에 문제가 있습니다. 관리자에게 문의하세요.');
						location.href = location.protocol + '//' + location.host
								+ "/springproject";
					}
				} else {
					alert('가입 실패');
					location.href = location.protocol + '//' + location.host
							+ "/springproject";
				}
			}
		});
	}else{
		// 실패
		alert('중복체크를 실행하여 주세요.');
	}
	return false;
}// 자동 날짜 지정 및 셀렉트 날짜 자동입력
function date_birth() {
	var nowDate = new Date();
	var nowYear = nowDate.getFullYear();
	var nowMonth = eval(nowDate.getMonth()) + 1;
	var nowDay = eval(nowDate.getDate());
	var startYear = nowYear - 70;
	for (var i = 0; i <= 70; i++) {
		document.getElementById("year").options[i] = new Option(startYear + i,
				startYear + i);
	}
	for (var i = 0; i < 12; i++) {
		document.getElementById("month").options[i] = new Option(i + 1, i + 1);
	}
	document.getElementById("year").value = nowYear;
	document.getElementById("month").value = nowMonth;
	setDay();
	document.getElementById("day").value = nowDay;
}function setDay() {
	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	var dateDay = document.getElementById("day");
	var arrayMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		arrayMonth[1] = 29;
	}
	for (var i = dateDay.length; i > 0; i--) {
		dateDay.remove(dateDay.selectedIndex);
	}
	for (var i = 1; i <= arrayMonth[month - 1]; i++) {
		dateDay.options[i - 1] = new Option(i, i);
	}
	if (day != null || day != "") {
		if (day > arrayMonth[month - 1]) {
			dateDay.options.selectedIndex = arrayMonth[month - 1] - 1;
		} else {
			dateDay.options.selectedIndex = day - 1;
		}
	}
}