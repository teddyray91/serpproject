/**
 * 
 */
function Busi_number_clear(){
	$('input[name=busi_number]').val("");
}
function Busi_number_Change(){
	var a = $('input[name=busi_number]').val();
	var b = "";
	if(a.length == $('input[name=busi_number]').attr('maxlength')){
		b += a.substr(0,4) + "-" + a.substr(4,3) + "-" + a.substr(7,11);
		$('input[name=busi_number]').val(b);
	}
}

function phonenum_clear(){
	$('input[name=busi_phone]').val("");
}
function phonenum_Change(){
	var a = $('input[name=busi_phone]').val();
	var b = "";
	if(a.length == $('input[name=busi_phone]').attr('maxlength')){
		b += a.substr(0,3) + "-" + a.substr(3,4) + "-" + a.substr(7,4);
		$('input[name=busi_phone]').val(b);
	}else if(a.length == 9){
		b += a.substr(0,2) + "-" + a.substr(2,3) + "-" + a.substr(5,4);
		$('input[name=busi_phone]').val(b);
	}else if(a.length == 10){
		b += a.substr(0,3) + "-" + a.substr(3,3) + "-" + a.substr(6,4);
		$('input[name=busi_phone]').val(b);
	}else if(a.length == 11){
		b += a.substr(0,3) + "-" + a.substr(3,4) + "-" + a.substr(7,4);
		$('input[name=busi_phone]').val(b);
	}
}

function Busi_number_Cenvert(obj){
	var b = "";
	b += obj.substr(0,4) + "-" + obj.substr(4,3) + "-" + obj.substr(7,11);
	return b;
}

function unconfirm_list(memidx, partidx){
	var url="";
	var html = "";
	if(memidx != null){
		if(partidx == '영업'){
			url = "transitem/main/unconflist";
		}else if(partidx == '생산'){
			url = "iostorage/main/unconflist";
		}else if(partidx == '인사'){
			url = "member/main/unconfmemberlist";
		}else if(partidx == '총괄'){
			url = "transitem/main/unconflist";
			memidx = "%";
		}
		if(url != ""){
			$.ajax({
				url: url,
				type:"POST",
				cache: false,
				data:{
					"memidx" : memidx,
					"partidx" : partidx
				},
				success: function(data,status){
					if(status == "success"){
						if(data.state == "ok"){
							$('table#table_unconfirm_list tr').remove();
							if(partidx == '영업'){
								html += "<tr><th>거래코드</th><th>거래명</th><th>거래일자</th><th>결제금액</th><th>담당자</th></tr>";
								for(var i =0; i < data.list.length; i++){
									html += "<tr>";
									html += "<td>"+data.list[i].trans_code+"</td>";
									html += "<td>"+data.list[i].trans_subject+"</td>";
									html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
									html += "<td>"+data.list[i].trans_tmoney+" 원</td>";
									html += "<td>"+data.list[i].name+"</td>";
									html += "</tr>";
								}
								$('table#table_unconfirm_list').html(html);
							}else if(partidx == '생산'){
								html += "<tr><th>거래코드</th><th>거래명</th><th>분류</th><th>담당자</th><th>전달일자</th></tr>";
								for(var i =0; i < data.list.length; i++){
									html += "<tr>";
									html += "<td>"+data.list[i].trans_code+"</td>";
									html += "<td>"+data.list[i].trans_subject+"</td>";
									html += "<td>"+data.list[i].trans_index+"</td>";
									html += "<td>"+data.list[i].name+"</td>";
									html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
									html += "</tr>";
								}
								$('table#table_unconfirm_list').html(html);
							}else if(partidx == '인사'){
								html += "<tr><th>사원번호</th><th>이름</th><th>부서</th><th>직급</th><th>가입일자</th></tr>";
								for(var i =0; i < data.list.length; i++){
									html += "<tr>";
									html += "<td>"+data.list[i].memidx+"</td>";
									html += "<td>"+data.list[i].name+"</td>";
									html += "<td>"+data.list[i].partidx+"</td>";
									html += "<td>"+data.list[i].rankidx+"</td>";
									html += "<td>"+dateConvert(data.list[i].joindate)+"</td>";
									html += "</tr>";
								}
								$('table#table_unconfirm_list').html(html);
							}else if(partidx == '총괄'){
								html += "<tr><th>거래코드</th><th>거래명</th><th>거래일자</th><th>결제금액</th><th>담당자</th></tr>";
								for(var i =0; i < data.list.length; i++){
									html += "<tr>";
									html += "<td>"+data.list[i].trans_code+"</td>";
									html += "<td>"+data.list[i].trans_subject+"</td>";
									html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
									html += "<td>"+data.list[i].trans_tmoney+" 원</td>";
									html += "<td>"+data.list[i].name+"</td>";
									html += "</tr>";
								}
								$('table#table_unconfirm_list').html(html);
							}
						}else{
							//fail
							$('table#table_unconfirm_list').append("<tr><td colspan='5'>미결제 내역이 없습니다.</td></tr>");
						}
					}else{
						// fail
					}
				}
			});
		}
	}
}
function confirmlist(){
	var html = "";
	$.ajax({
		url: "transitem/main/conflist",
		type:"POST",
		cache: false,
		success: function(data,status){
			if(status == "success"){
				if(data.state == "ok"){
					$('table#table_confirm_list tr').remove();
						html += "<tr><th>거래코드</th><th>거래명</th><th>거래일자</th><th>결제금액</th><th>담당자</th></tr>";
						for(var i =0; i < data.list.length; i++){
							html += "<tr>";
							html += "<td>"+data.list[i].trans_code+"</td>";
							html += "<td>"+data.list[i].trans_subject+"</td>";
							html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
							html += "<td>"+data.list[i].trans_tmoney+" 원</td>";
							html += "<td>"+data.list[i].name+"</td>";
							html += "</tr>";
						}
						$('table#table_confirm_list').html(html);
				}else{
					//fail
					$('table#table_confirm_list').append("<tr><td>결제 내역이 없습니다.</td></tr>");
				}
			}else{
				// fail
			}
		}
	});
}

function maingraph(){
	$.ajax({
		url: "transitem/main/graph",
		type:"POST",
		cache: false,
		success: function(data,status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i =0; i < data.cnt; i++){
						$('#'+(i+1)+'mbuy').css("height", data.list[i].bpercent+"%");
						$('#'+(i+1)+'msell').css("height", data.list[i].spercent+"%");
						$('#'+(i+1)+'muncon').css("height", data.list[i].upercent+"%");
						$('div#totalcnt #'+(i+1)+'m p').eq(0).text(data.list[i].btotal+" 건");
						$('div#totalcnt #'+(i+1)+'m p').eq(1).text(data.list[i].stotal+" 건");
						$('div#totalcnt #'+(i+1)+'m p').eq(2).text(data.list[i].utotal+" 건");
					}
				}else{
					//fail
				}
			}else{
				// fail
			}
		}
	});
}

