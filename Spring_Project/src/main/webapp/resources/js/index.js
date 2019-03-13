/**
 * 
 */
$(document).ready(function(){
	$("#join").click(function(){
		location.href='member/join';
	});
	
	
	$(document).on("click", ".findsearch", function(){
		if($(this).attr('id') == "findid"){
			findid();
		}else{
			findpw();
		}
	});
	
	
	$("#cancel_bt").click(function(){
		$("#findView").css("display", "none");
		$("detail_find").html("");
	});
	
	
});


function findid(){
	var html = "";
	$("#findView").css("display", "block");
	html += "<h3>아이디 찾기 서비스</h3><hr><form onsubmit='return searchid()'>";
	html += "<input type='text' class='form-control find' id='data1' placeholder='사용자 이름' required/>";
	html += "<input type='text' class='form-control find' id='data2' placeholder='연락처 - 없이 입력' required/>";
	html += "<input type='text' class='form-control find' id='data3' placeholder='example@text.com' required/>";
	html += "<input type='submit' class='btn btn-default' value='아이디찾기'/>&nbsp;&nbsp;&nbsp;<input type='reset' class='btn btn-default' id='reset' value='재입력'/>"; 
	html += "</form>";
	
	$("#detail_find").html(html);
}

function findpw(){
	var html = "";
	$("#findView").css("display", "block");
	html += "<h3>비밀번호 찾기 서비스</h3><hr><form onsubmit='return searchpw()'>";
	html += "<input type='text' class='form-control find' id='data1' placeholder='아이디' required/>";
	html += "<input type='text' class='form-control find' id='data2' placeholder='연락처 - 없이 입력' required/>";
	html += "<input type='text' class='form-control find' id='data3' placeholder='example@text.com' required/>";
	html += "<input type='submit' class='btn btn-default' value='비밀번호찾기'/>&nbsp;&nbsp;&nbsp;<input type='reset' class='btn btn-default' id='reset' value='재입력'/>"; 
	html += "</form>";
	
	$("#detail_find").html(html);
}


function searchid(){
	$.ajax({
		url:"member/search/findid",
		cache:false,
		type:"POST",
		data : {
			"name" : $("input#data1").val(),
			"phonenum" : $("input#data2").val(),
			"email" : $("input#data3").val()
		},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("detail_find").html("");
					var html = "";
					html += "<h3>아이디 찾기 서비스</h3><hr>";
					html += "<input type='text' class='form-control find' id='data2' disabled/>";
					html += "<input type='button' class='btn btn-default' id='idok' value='로그인하기'>";
					$("#detail_find").html(html);
					$("input#data2").val(data.list[0].id);
					$('#idok').click(function(){
						$("input[name=id]").val($('input#data2').val());
						$("#findView").css("display", "none");
						$("detail_find").html("");
					});
				}else{
					alert('해당 정보의 아이디가 존재하지 않습니다.');
					$("input#data1").val("");
					$("input#data2").val("");
					$("input#data3").val("");
				}
			}else{
				alert('DB Error');
			}
		}
	});
	return false;
}

function searchpw(){
	$.ajax({
		url:"member/search/findpw",
		cache:false,
		type:"POST",
		data : {
			"id" : $("input#data1").val(),
			"phonenum" : $("input#data2").val(),
			"email" : $("input#data3").val()
		},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("detail_find").html("");
					var html = "";
					html += "<h3>비밀번호 찾기 서비스</h3><hr>";
					html += "<input type='text' class='form-control find' id='data1' disabled/>";
					html += "<input type='text' class='form-control find' id='data2' disabled/>";
					$("#detail_find").html(html);
					$("input#data1").val("ID : " + data.list[0].id);
					$("input#data2").val("PW : " + data.list[0].pw);
				}else{
					alert('해당 정보의 아이디가 존재하지 않습니다.');
					$("input#data1").val("");
					$("input#data2").val("");
					$("input#data3").val("");
				}
			}else{
				alert('DB Error');
			}
		}
	});
	return false;
}



