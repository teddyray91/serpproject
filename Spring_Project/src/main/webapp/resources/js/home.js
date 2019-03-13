/**
 * 
 */
var storageitem_search;

$(document).ready(function(){
	$(".1mg, .2mg, .3mg, .4mg, .5mg, .6mg, .7mg, .8mg, .9mg, .10mg, .11mg, .12mg").hover(
	function(){
		$('#totalcnt').css("display", "block");
		$('#totalcnt').children().css("display", "none");
		if($(this).attr('class') == '1mg'){
			$('#1m').css("display", "block");
		}else if($(this).attr('class') == '2mg'){
			$('#2m').css("display", "block");
		}else if($(this).attr('class') == '3mg'){
			$('#3m').css("display", "block");
		}else if($(this).attr('class') == '4mg'){
			$('#4m').css("display", "block");
		}else if($(this).attr('class') == '5mg'){
			$('#5m').css("display", "block");
		}else if($(this).attr('class') == '6mg'){
			$('#6m').css("display", "block");
		}else if($(this).attr('class') == '7mg'){
			$('#7m').css("display", "block");
		}else if($(this).attr('class') == '8mg'){
			$('#8m').css("display", "block");
		}else if($(this).attr('class') == '9mg'){
			$('#9m').css("display", "block");
		}else if($(this).attr('class') == '10mg'){
			$('#10m').css("display", "block");
		}else if($(this).attr('class') == '11mg'){
			$('#11m').css("display", "block");
		}else if($(this).attr('class') == '12mg'){
			$('#12m').css("display", "block");
		}
	},
	function(){
		$('#totalcnt').css("display", "none");
		if($(this).attr('class') == '1mg'){
			$('#1m').css("display", "none");
		}else if($(this).attr('class') == '2mg'){
			$('#2m').css("display", "none");
		}else if($(this).attr('class') == '3mg'){
			$('#3m').css("display", "none");
		}else if($(this).attr('class') == '4mg'){
			$('#4m').css("display", "none");
		}else if($(this).attr('class') == '5mg'){
			$('#5m').css("display", "none");
		}else if($(this).attr('class') == '6mg'){
			$('#6m').css("display", "none");
		}else if($(this).attr('class') == '7mg'){
			$('#7m').css("display", "none");
		}else if($(this).attr('class') == '8mg'){
			$('#8m').css("display", "none");
		}else if($(this).attr('class') == '9mg'){
			$('#9m').css("display", "none");
		}else if($(this).attr('class') == '10mg'){
			$('#10m').css("display", "none");
		}else if($(this).attr('class') == '11mg'){
			$('#11m').css("display", "none");
		}else if($(this).attr('class') == '12mg'){
			$('#12m').css("display", "none");
		}
	});
	// MAIN Content
	setTimeout(function(){
		unconfirm_list($('input#d1').val(), $('p.title').text().substr(0,2));
	}, 500);
	setTimeout(function(){
		confirmlist();
	}, 1000);
	setTimeout(function(){
		maingraph();
	}, 1500);
//	HEAD LOG CLICK MOVE to HOME
	$("#head_logo").click(function(){
		location.href="home";
	});
//	HEAD ICON MENU
	$('.head_menu').click(function(){
		if($(this).attr('id') == "user"){
			$('#profile_card').css("display", "block");
		}
		if($(this).attr('id') == "logout"){
			var path = location.protocol + '//' + location.host;
			location.href = path + '/springproject/logout';
		}
	});
	$('.bt_head_icon').click(function(){
		if($(this).attr('id') == "card_close"){
			$('#profile_card').css("display", "none");
		}
		if($(this).attr('id') == "user_modify"){ // 개인정보수정
			$('#member_modify').css("display", "block");
			user_modify_layout();
		}
	});
	// 개인정보 수정
	$(document).on("click", "#modify_close", function(){
		$('#member_modify').css("display", "none");
		$("#modify_layout").html("");
	});
	
	
// TOP NAVI ACTION to SubNAVI
	$("#main_transi, #main_mod, #main_item, #main_company, #main_groupware, #main_employee").hover(
	function(){
		$("#item").css("display", "none");
		$("#groupware").css("display", "none");
		if($(this).attr('id') == 'main_item'){
			$("#item").css("display", "block");
		}
		if($(this).attr('id') == 'main_groupware'){
			$("#groupware").css("display", "block");
		}
	},
	function(){
		
	});
//	TOP NAVI CLICK EVENT
	$("#main_item, #main_mod, #main_company, #main_groupware, #main_transi, #main_employee").click(function(){
		if($(this).attr('id') == 'main_transi'){
			$("#l_container").load('html/side_navi #l_menu_transi');
			table_transi_list();
		}
		if($(this).attr('id') == 'main_item'){
			$("#l_container").load('html/side_navi #l_menu_buy');
			buy_table_list();
		}
		if($(this).attr('id') == 'main_mod'){
			$("#l_container").load('html/side_navi #l_menu_item');
			storage_list();
		}
		if($(this).attr('id') == 'main_company'){
			$("#l_container").load('html/side_navi #l_com_inform');
			com_table_list();
		}
		if($(this).attr('id') == 'main_groupware'){
		}
		if($(this).attr('id') == 'main_employee'){
			$("#l_container").load('html/side_navi #l_employee_information');
			com_employee_information();
		}
		content_view_change();
	});
	
	
//	SUB NAVI CLICK EVENT
	$("#buy, #sell").click(function(){
		content_view_change();
		if($(this).attr('id') == 'buy'){
			$("#l_container").load('html/side_navi #l_menu_buy');
			buy_table_list();
		}
		if($(this).attr('id') == 'sell'){
			$("#l_container").load('html/side_navi #l_menu_sell');
			sell_table_list();
		}
	});
	
// 왼쪽 드롭박스 기능
	$(document).on("click", ".bt_dropdown",function(){
		this.classList.toggle("bt_dropdown_active");
		var content = this.nextElementSibling;
		if(content.style.display === "block"){
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
	
	$(document).on("click", ".main_bt_dropdown",function(){
		this.classList.toggle("main_bt_dropdown_active");
		var content = this.nextElementSibling;
		if(content.style.display === "block"){
			content.style.display = "none";
			$(this).css("margin-bottom", "15px");
		} else {
			content.style.display = "block";
			$(this).css("margin-bottom", "0px");
		}
	});
		
	
// 사업자 번호 찾아서 자동입력하는 기능
	$(document).on("click", "#search_busi_number", function(){
		$("#search_number").css("display", "block");
	});
	
	$(document).on("blur", "#bt_busi_number", function(){
		var i = 0;
		search_busi_number_list();
	});
	// 제품코드
	$(document).on("click", ".search_item_code", function(){
		$("#search_item").css("display", "block");
		storageitem_search = $(this);
	});
	$(document).on("blur", "#pro_code", function(){
		var i = 0;
		select_item_number_list($(this));
	});
// 사업자 번호 조회기 & 제품코드 조회기
	$(document).on("click", ".bt_search",function(){
		if($(this).attr('class') == 'bt_search search0'){
			var i = 0;
			var table = "" ;
			if($("#buy_trans input").html() == ""){
				$("#search_number").load('html/right_item #buy_add #handle_number, #buy_add  #number_search_body, #buy_add  #table_search_number');
			}else{
				$("#search_number").load('html/right_item #sell_add #handle_number, #sell_add  #number_search_body, #sell_add  #table_search_number');
			}
			$.ajax({
				url: "trans/likelist?busi_number=" + $('input[name=trans_number_input]').val(),
				type: "GET",
				cache: false, 
				success : function(data, status){
					if(status == "success"){
						if(data.state == "ok"){
							for(i=0; i < data.list.length; i++){
								table += "<tr class='search_data'>";
								table += "<td>" + (i+1) +"</td>";
								table += "<td>" + data.list[i].busi_number + "</td>";
								table += "<td>" + data.list[i].busi_name + "</td>";
								table += "<td>" + data.list[i].busi_owner + "</td>";
								table += "</tr>";
							}// for end
							$("table#table_search_number > tbody:last").append(table);
						}//if end
						else{
							alert("찾으시는 내용이 없습니다.");
						}
					}//if end
				}
			});
		}
		if($(this).attr('class') == 'bt_search search1'){
			var i = 0;
			var table = "" ;
			if($("#buy_trans input").html() == ""){
				$("#search_item").load('html/right_item #buy_add #handle_item, #buy_add #item_search_body, #buy_add #table_search_item');
			}else{
				$("#search_item").load('html/right_item #sell_add #handle_item, #sell_add #item_search_body, #sell_add #table_search_item');
			}
			$.ajax({
				url: "storageitem/search_storage_item_buy?item_code="+$('input[name=item_number_input]').val() ,
				type: "GET",
				cache: false, 
				success : function(data, status){
					if(status == "success"){
						if(data.state == "ok"){
							for(i=0; i < data.list.length; i++){
								table += "<tr class='search_data'>";
								table += "<td>" + (i+1) +"</td>";
								table += "<td>" + data.list[i].item_code + "</td>";
								table += "<td>" + data.list[i].item_name + "</td>";
								table += "</tr>";
							}// for end
							$("table#table_search_item > tbody:last").append(table);
						}//if end
						else{
							alert("찾으시는 내용이 없습니다.");
						}
					}//if end
				}
			});
		}
		if($(this).attr('class') == 'bt_search cancel0'){
			$("#search_number").css("display", "none");
			if($("#buy_trans input").html() == ""){
				$("#search_number").load('html/right_item #buy_add #handle_number, #buy_add  #number_search_body, #buy_add  #table_search_number');
			}else{
				$("#search_number").load('html/right_item #sell_add #handle_number, #sell_add  #number_search_body, #sell_add  #table_search_number');
			}
		}
		if($(this).attr('class') == 'bt_search cancel1'){
			$("#search_item").css("display", "none");
			if($("#buy_trans input").html() == ""){
				$("#search_item").load('html/right_item #buy_add #handle_item, #buy_add #item_search_body, #buy_add #table_search_item');
			}else{
				$("#search_item").load('html/right_item #sell_add #handle_item, #sell_add #item_search_body, #sell_add #table_search_item');
			}
		}
	});
	// 조회 후 tr 클릭시
	$(document).on("click", "table#table_search_number tr", function(){
		var tddata = $(this).children();
		var inputdata = tddata.eq(1).text();
		if(inputdata != "번호"){
			$('#bt_busi_number').val(inputdata);
			search_busi_number_list();
		}
	});
	
	// 아이템 코드 조회 후 tr 클릭시
	$(document).on("click", "table#table_search_item tr", function(){
		var tddata = $(this).children();
		var inputdata = tddata.eq(1).text();
		var data = storageitem_search.parent();
		if(inputdata != "제품코드"){
			$(data).children().eq(0).val(inputdata);
			search_item_number_list();
		}
	});
	
	// 거래처 변경 체크 실시간점검
	$(document).on("change", "input[name=check]", function(){
		if($("input[name=check]").is(":checked")){
	        trans_modify_change_input($(this));
	    }else{
	        trans_modify_change_input($(this));
	    }
	});
	// 거래처 선택 수정
	$(document).on("click", "#select_modify", function(){
		trans_modify_change();
	});
	// 거래 수량 변경시
	$(document).on("change", "input[name=productnum]", function(){
		Calc_Trans_Money($(this));
	});
	// 구매 상세 보기
	$(document).on("click", "table#buy_trans_list_table tr:gt(0)", function(){
		$('#Detail_View').css("display", "block");
		$('#Detail_View').load('html/right_item #detail_template');
		popup_layer();
		buy_trans_list_table_Detail($(this).children().eq(0).text());
	});
	// 판매 상세 보기
	$(document).on("click", "table#sell_trans_list_table tr:gt(0)", function(){
		$('#Detail_View').css("display", "block");
		$('#Detail_View').load('html/right_item #detail_template');
		popup_layer();
		buy_trans_list_table_Detail($(this).children().eq(0).text());
	});
	
}); // document.ready END


// 오른쪽 Container HTML
// 거래처(추가, 삭제, 정보)
function transi_add(){ // 추가
	$("#r_container").load('html/right_trans #trans_add');
}
function transi_modify_remove(){ // 삭제
	transmodifyremove();
	$("#r_container").load('html/right_trans #trans_modify_remove');
}
function table_transi_list(){ // 정보
	translist();
	$("#r_container").load('html/right_trans #trans_list');
}

// trans Action Function 
// 거래처 등록
function transadd(){
	$.ajax({
		url: "trans/add",
		type: "POST",
		cache: false,
		data: {
			"busi_number": $('input[name=busi_number]').val(), 
			"busi_name": $('input[name=busi_name]').val(), 
			"busi_address": $('input[name=busi_address]').val(),
			"busi_owner": $('input[name=busi_owner]').val(),
			"busi_phone": $('input[name=busi_phone]').val(),
			"busi_index": $('select[name=busi_index]').val()
			},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					alert('등록완료!!');
					$('input[name=busi_number]').val("");
					$('input[name=busi_name]').val("");
					$('input[name=busi_address]').val("");
					$('input[name=busi_owner]').val("");
					$('input[name=busi_phone]').val("");
					$('input[name=busi_number]').focus();
				}else{
					alert('서버의 문제가 있습니다.');
				}
			}else{
				alert('등록실패!!');
			}
		}
	});
	return false;
}

// 거래처 조회
function search_busi_number_list(){
	$.ajax({
		url: "trans/list?busi_number="+$('#bt_busi_number').val() ,
		type: "GET",
		cache: false, 
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('#order_input_text').val(data.list[0].busi_owner);
					Find_Trans_code($('#bt_busi_number').val());
				}else{
					$('#order_input_text').val("");
					$('#trans_code_input_text').val("");
				}
			}else{
				$('#order_input_text').val("");
				$('#trans_code_input_text').val("");
			}
		}
	});
}

function translist(){
	var i = 0;
	var page;
	$.ajax({
		url: "trans/list",
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_trans_list > tbody:last").append(pars_trans_list(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi_page_full'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					$("table#table_trans_list > tbody:last").append("<tr><td colspan='6'>입력된 테이블 또는 DB 문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi_page_full'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
$(document).on("click", "a.busi_page_full", function(){
	translist_page($(this).attr('id'));
});
function translist_page(page){
	$("table#table_trans_list tr:gt(0)").remove();
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url: "trans/list?page="+ requestpage,
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_trans_list > tbody:last").append(pars_trans_list(data));
				}else{
					$("table#table_trans_list > tbody:last").append("<tr><td colspan='6'>입력된 테이블 또는 DB 문제입니다.</td></tr>");
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
function pars_trans_list(data){
	var list = data.list;
	var html = "";
	for(var i = 0 ; i < list.length; i++){
		html += "<tr>";
		html += "<td>"+ Busi_number_Cenvert(list[i].busi_number) +"</td>";
		html += "<td>"+ list[i].busi_name +"</td>";
		html += "<td>"+ list[i].busi_address +"</td>";
		html += "<td>"+ list[i].busi_owner +"</td>";
		html += "<td>"+ list[i].busi_phone +"</td>";
		html += "<td>"+ list[i].busi_index +"</td>";
		html += "</tr>";
	}
	return html;
}
// 거래처 삭제 변경
function transmodifyremove(){
	var i = 0;
	$.ajax({
		url: "trans/list",
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_trans_list > tbody:last").append(pars_trans_modify_remove(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi_page_remove'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					$("table#table_trans_list > tbody:last").append("<tr><td colspan='8'>입력된 테이블 또는 DB 문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi_page_remove'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
$(document).on("click", "a.busi_page_remove", function(){
	transmodifyremove_page($(this).attr('id'));
});
function transmodifyremove_page(page){
	$("table#table_trans_list tr:gt(0)").remove();
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url: "trans/list?page="+ requestpage,
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_trans_list > tbody:last").append(pars_trans_modify_remove(data));
				}else{
					$("table#table_trans_list > tbody:last").append("<tr><td colspan='8'>입력된 테이블 또는 DB 문제입니다.</td></tr>");
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
function pars_trans_modify_remove(data){
	var list = data.list;
	var html = "";
	for(var i = 0 ; i < list.length; i++){
		html += "<tr>";
		html += "<td><input type='checkbox' name='check'></td>";
		html += "<td>"+ list[i].busi_number +"</td>";
		html += "<td>"+ list[i].busi_name +"</td>";
		html += "<td>"+ list[i].busi_address +"</td>";
		html += "<td>"+ list[i].busi_owner +"</td>";
		html += "<td>"+ list[i].busi_phone +"</td>";
		html += "<td>"+ list[i].busi_index +"</td>";
		html += "<td>"+ "<button onclick='TransDelete("+list[i].busi_number+")'>삭제</button>" +"</td>"; // list[i].busi_number를 참조하여 삭제 해야함
		html += "</tr>";
	}
	return html;
}

function trans_modify_change_input(checked){
	var tr = checked.parent().parent();
	var td = tr.children();
	var i = 0;
	if(checked.is(":checked")){
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" || i == "7" || i == "1")){
				td.eq(i).html("<input type='text' name='"+i+"' value='"+td.eq(i).text()+"'>");
			}
		}
	}else{
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" || i == "7" || i == "1")){
				td.eq(i).text($('input[name='+i+']').val());
			}
		}
	}
}
function trans_modify_change(){
	var row = new Array();
	var checked = $("input[name=check]:checked");
	var datalist = "";
	checked.each(function(i) {
		var tr = $(this).parent().parent();
		var td = tr.children();
		$.ajax({
			url : "trans/modify",
			type : "POST",
			cache : false,
			data : {
				"busi_number" : td.eq(1).eq(0).text(),
				"busi_name" : td.eq(2).children().eq(0).val(),
				"busi_address" : td.eq(3).children().eq(0).val(),
				"busi_phone" : td.eq(5).children().eq(0).val(),
				"busi_owner" : td.eq(4).children().eq(0).val(),
				"busi_index" : td.eq(6).children().eq(0).val()
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						datalist = data.state;
					}else{
						datalist = data.state;
					}
				}else{
				}
			}
		});
	});
	setTimeout(function() {
		if(datalist =="ok"){
			transi_modify_remove();
		}
	}, 300);
}



// 구매관련 조립 HTML
function buy_table_list(){
	$("#r_container").load('html/right_item #buy_list');
	// 함수
	DBTrans_Buy_List();
}
function buy_add(){
	calen();
	popup_layer();
	$("#r_container").load('html/right_item #buy_add');
}

// 판매 관련 조립 HTML
function sell_table_list(){
	$("#r_container").load('html/right_item #sell_table_list');
	DBTrans_Sell_List();
}

function sell_add(){
	calen();
	popup_layer();
	$("#r_container").load('html/right_item #sell_add');
}




// 버튼 클릭 컬럼 추가/삭제 함수
function bt_item_add(){
	var html = "";
	html += "<tr>";
	html +=	"<td>";
	html +=	"<input type='checkbox' name='item_check'>";
	html +=	"</td>";
	html +=	"<td>";
	html +=	"<input type='text' name='productcode' id='pro_code' maxlength='15' class='bt_item_code'> <i class='fas fa-search search_item_code' required></i>";
	html +=	"</td>";
	html +=	"<td>";
	html +=	"<input type='text' name='productcate' id='pro_cate' maxlength='15' disabled style='background-color:rgba(234,234,234,0.5);'>";
	html +=	"</td>";
	html += "<td>";
	html +=	"<input type='text' name='productname' id='pro_name' maxlength='15' disabled style='background-color:rgba(234,234,234,0.5);'>";
	html +=	"</td>";
	html += "<td>";
	html +=	"<input type='text' name='productnum' id='pro_cnt' maxlength='15' required>";
	html +=	"</td>";
	html +=	"<td>";
	html +=	"<input type='text' name='productmoney' id='pro_money' maxlength='15' required><input type='hidden' name='buy_money'/>";
	html +=	"</td>";
	html +=	"<td>";
	html +=	"<input type='text' name='productet' id='pro_et' maxlength='15'>";
	html +=	"</td>";
	html += "</tr>";
	$("table#item > tbody:last").append(html);
}
function bt_item_remove(){
	var tr = $('table#item').children().children();
	if(tr.length == "2"){
		alert('더 이상 삭제불가!');
	}else{
		$('table#item > tbody:last > tr:last').remove();
	}
}


// 개인정보 수정 폼 만들기 & 수정
function user_modify_layout(){
	var html = "";
	html += "<div style='text-align: justify; padding-top:10px; padding-left:10px;'><h3>개인정보 변경</h3><hr>";
	$.ajax({
		url:"member/SelectUser",
		type:"GET",
		cache:false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					html += "<div class='one_user_mod'>ID <input type='text' name='id' value='"+data.list[0].id+"' disabled></div>";
					html += "<div class='one_user_mod'>PW <input type='text' name='pw' value=''></div>";
					html += "<div class='one_user_mod'>NAME <input type='text' name='name' value='"+data.list[0].name+"' disabled></div>";
					html += "<div class='one_user_mod'>GENDER <select name='gender' class='form-control' disabled><option value='1'>남자</option><option value='2'>여자</option></select></div>";
					html += "<div class='one_user_mod'>EMAIL <input type='text' name='email' value='"+data.list[0].email+"'></div>";
					html += "<div class='one_user_mod'>PHONENUM <input type='text' name='phonenum' value='"+data.list[0].phonenum+"'></div>";
					html += "<div class='one_user_mod'>PART <select name='partidx' class='form-control' disabled><option value='1'>총괄</option><option value='2'>생산</option><option value='3'>인사</option></select></div>";
					html += "<div class='one_user_mod'>RANK <select name='rankidx' class='form-control' disabled><option value='0'>선택</option><option value='1'>회장</option><option value='2'>부회장</option><option value='3'>사장</option><option value='4'>부사장</option><option value='5'>전무</option><option value='6'>상무</option><option value='7'>이사</option><option value='8'>부장</option><option value='9'>차장</option><option value='10'>과장</option><option value='11'>대리</option><option value='12'>주임</option><option value='13'>사원</option></select></div>";
					html += "<div class='one_user_mod'>BIRTHDAY <input type='text' name='birthday' value='"+dateConvert(data.list[0].birthday)+"'></div>";
					html += "<div class='one_user_mod'>JOINDATE <input type='text' name='joindate' value='"+dateConvert(data.list[0].joindate)+"' disabled></div>";
					html+= "</div>";
					html += "<div style='text-align: center;'><button id='modify_accept' onclick='one_user_modify("+data.list[0].memidx+")'>변경</button> <button id='modify_close'>취소</button></div>"
					$("#modify_layout").html(html);
					$("select[name=gender] option:eq("+(data.list[0].gender-1)+")").attr("selected", "selected");
					$("select[name=partidx] option:eq("+(data.list[0].partidx-1)+")").attr("selected", "selected");
					$("select[name=rankidx] option:eq("+(data.list[0].rankidx)+")").attr("selected", "selected");
				}else{
					//state 가 fail 일 경우
				}
			}else{
				// status fail 일 경우
			}
		}
	});
}
function one_user_modify(memidx){
	var tempdate = $('input[name=birthday]').val()+" 00:00:00";
	$.ajax({
		url: "member/oneUserModify",
		type: "POST",
		cache: false,
		data:{
			"pw" : $('input[name=pw]').val(),
			"email" : $('input[name=email]').val(),
			"phonenum" : $('input[name=phonenum]').val(),
			"birthday" : tempdate,
			"memidx" : memidx
		},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					alert('정보가 수정되었습니다.');
					$('#member_modify').css("display", "none");
					$("#modify_layout").html("");
				}else{
					
				}
			}else{
				
			}
		}
	});
}

//Main -> Content View Change
function content_view_change(){
	$("#content").css("display", "none");
	$("#l_content").css("display", "block");
	$("#r_content").css("display", "block");
}

//일자 포맷 변경
function dateConvert(date){
	var year;
	var month;
	var day;
	var date = new Date(date);
	year = date.getFullYear();
	month = date.getMonth() + 1;
	month = month >= 10? month:'0'+month;
	day = date.getDate();
	day = day >= 10? day: '0'+day;
	return year+"-"+month+"-"+day;
}

// 일자 입력 달력 표시기 & 팝업레이어 설정
function calen(){
	$(document).on("focus", "#Datepicker", function(){
		$("#Datepicker").datepicker(
				{
					changeMonth : "true",
					changeYear : "true",
					nextText : "다음 달",
					prevText : "이전 달",
					showButtonPanel : "true",
					currentText : "오늘 날짜",
					closeText : "닫기",
					dateFormat : "yy-mm-dd",
					dayNames : [ '월요일', '화요일', '수요일', '목요일', '금요일', '토요일','일요일' ],
					dayNamesMin : [ '월', '화', '수', '목', '금', '토', '일' ],
					monthNamesShort : [ '1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12' ],
					monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
					constrainInput : true,
				});
	});
}
function popup_layer(){
	$(document).on("mouseenter", "#search_number, #search_item", function(){
		$( "#search_number" ).draggable({ handle: "div#handle_number" });
		$( "#search_item" ).draggable({ handle: "div#handle_item" });
		
	});
}

//아이템 코드 조합 조립
function search_item_number_list(){
	var tdArray = storageitem_search.parent().parent();
	if($("#buy_trans input").html() == ""){
		$.ajax({
			url: "storageitem/search_storage_item_buy?item_code="+ tdArray.children().eq(1).children().val() ,
			type: "GET",
			cache: false, 
			success: function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						tdArray.children().eq(2).children().val(data.list[0].item_category);
						tdArray.children().eq(3).children().val(data.list[0].item_name);
						tdArray.children().eq(4).children().val('1');
						tdArray.children().eq(5).children().val(data.list[0].buy_money);
						$("#search_item").css("display", "none");
						$("#search_item").load('html/right_item #buy_add #handle_item, #buy_add #item_search_body, #buy_add  #table_search_item');
					}else{
						tdArray.children().eq(1).children().val("");
						tdArray.children().eq(2).children().val("");
						tdArray.children().eq(3).children().val("");
						tdArray.children().eq(4).children().val("");
						tdArray.children().eq(5).children().val("");
					}
				}else{
					tdArray.children().eq(1).children().val("");
					tdArray.children().eq(2).children().val("");
					tdArray.children().eq(3).children().val("");
					tdArray.children().eq(4).children().val("");
					tdArray.children().eq(5).children().val("");
				}
			}
		});
	}else{
		$.ajax({
			url: "storageitem/search_storage_item_sell?item_code="+ tdArray.children().eq(1).children().val() ,
			type: "GET",
			cache: false, 
			success: function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						tdArray.children().eq(2).children().val(data.list[0].item_category);
						tdArray.children().eq(3).children().val(data.list[0].item_name);
						tdArray.children().eq(4).children().val('1');
						tdArray.children().eq(5).children().val(data.list[0].sell_money);
						$("#search_item").css("display", "none");
						$("#search_item").load('html/right_item #sell_add #handle_item, #sell_add #item_search_body, #sell_add #table_search_item');
					}else{
						tdArray.children().eq(1).children().val("");
						tdArray.children().eq(2).children().val("");
						tdArray.children().eq(3).children().val("");
						tdArray.children().eq(4).children().val("");
						tdArray.children().eq(5).children().val("");
					}
				}else{
					tdArray.children().eq(1).children().val("");
					tdArray.children().eq(2).children().val("");
					tdArray.children().eq(3).children().val("");
					tdArray.children().eq(4).children().val("");
					tdArray.children().eq(5).children().val("");
				}
			}
		});
	}
	
}
//아이템 코드 조합 조립
function select_item_number_list(selectitem_code){
	var trArray = selectitem_code.parent().parent();
	var tdArray = trArray.children();
	if($("#buy_trans input").html() == ""){
		$.ajax({
			url: "storageitem/select_storage_item_sell?item_code="+ selectitem_code.val(),
			type: "GET",
			cache: false, 
			success: function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						tdArray.eq(2).children().val(data.list[0].item_category);
						tdArray.eq(3).children().val(data.list[0].item_name);
						tdArray.eq(4).children().val('1');
						tdArray.eq(5).children().val(data.list[0].buy_money);
						$("#search_item").css("display", "none");
						$("#search_item").load('html/right_item #buy_add #handle_item, #buy_add #item_search_body, #buy_add  #table_search_item');
					}else{
						tdArray.eq(1).children().val("");
						tdArray.eq(2).children().val("");
						tdArray.eq(3).children().val("");
						tdArray.eq(4).children().val("");
						tdArray.eq(5).children().val("");
					}
				}else{
					tdArray.eq(1).children().val("");
					tdArray.eq(2).children().val("");
					tdArray.eq(3).children().val("");
					tdArray.eq(4).children().val("");
					tdArray.eq(5).children().val("");
				}
			}
		});
	}else{
		$.ajax({
			url: "storageitem/select_storage_item_sell?item_code="+ selectitem_code.val(),
			type: "GET",
			cache: false, 
			success: function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						tdArray.eq(2).children().val(data.list[0].item_category);
						tdArray.eq(3).children().val(data.list[0].item_name);
						tdArray.eq(4).children().val('1');
						tdArray.eq(5).children().val(data.list[0].sell_money);
						$("#search_item").css("display", "none");
						$("#search_item").load('html/right_item #sell_add #handle_item, #sell_add #item_search_body, #sell_add #table_search_item');
					}else{
						tdArray.eq(1).children().val("");
						tdArray.eq(2).children().val("");
						tdArray.eq(3).children().val("");
						tdArray.eq(4).children().val("");
						tdArray.eq(5).children().val("");
					}
				}else{
					tdArray.eq(1).children().val("");
					tdArray.eq(2).children().val("");
					tdArray.eq(3).children().val("");
					tdArray.eq(4).children().val("");
					tdArray.eq(5).children().val("");
				}
			}
		});
	}
	
}
// 기존 거래 현황으로 거래번호 찾기
function Find_Trans_code(busi_number){
	if($("#buy_trans input").html() == ""){
		$.ajax({
			url:"transitem/findtranslog",
			type:"POST",
			cache:false,
			data:{
				"busi_number" : busi_number,
				"trans_index" : "구매"
			},
			success: function(data, status){
				$('#trans_code_input_text').val('구매-'+busi_number+'-'+data);
			}
		});
	}else{
		$.ajax({
			url:"transitem/findtranslog",
			type:"POST",
			cache:false,
			data:{
				"busi_number" : busi_number,
				"trans_index" : "판매"
			},
			success: function(data, status){
				$('#trans_code_input_text').val('판매-'+busi_number+'-'+data);
			}
		});
	}
}

// 거래수량으로 금액 계산
function Calc_Trans_Money(clickdata){
	var trdata= clickdata.parent().parent();
	var tddata= trdata.children(); // 5: money 4: cnt
	if(tddata.eq(4).children().val() <= "0"){
		tddata.eq(4).children().val('1');
	}
	tddata.eq(5).children().eq(0).val(tddata.eq(4).children().val() * tddata.eq(5).children().eq(1).val());
	
}
// 구매 등록
function TransAddItem(){
	var totalmoney = parseInt(0);
	$("table#item tr:gt(0)").each(function(){
		totalmoney += parseInt($(this).eq(0).children().eq(5).children().eq(0).val());
	});
	
	DBTransCodeADD(totalmoney);
	return false;
}
// Trans_code ADD
function DBTransCodeADD(tmoney){
	if($("#buy_trans input").html() == ""){
		$.ajax({
			url:"transitem/transcodeadd",
			type:"POST",
			cache:false,
			data:{
				"trans_code" : $("#buy_trans input").eq(5).val(),
				"trans_index" : "구매",
				"busi_number" : $("#buy_trans input").eq(1).val(),
				"busi_name" : $("#buy_trans input").eq(4).val(),
				"trans_tmoney" : tmoney,
				"trans_subject" : $("#buy_trans input").eq(6).val(),
				"trans_date" : $("#buy_trans input").eq(0).val(),
				"trans_san" : "0",
				"memidx" : $("#buy_trans input").eq(3).val(),
				"name" : $("#buy_trans input").eq(2).val()
			},
			success: function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						DBCashLogADD();
						alert('완료');
						buy_table_list();
					}else{
						// data.state fail
					}
				}else{
					// status fail
				}
			}
		});
	}else{
		$.ajax({
			url:"transitem/transcodeadd",
			type:"POST",
			cache:false,
			data:{
				"trans_code" : $("#sell_trans input").eq(5).val(),
				"trans_index" : "판매",
				"busi_number" : $("#sell_trans input").eq(1).val(),
				"busi_name" : $("#sell_trans input").eq(4).val(),
				"trans_tmoney" : tmoney,
				"trans_subject" : $("#sell_trans input").eq(6).val(),
				"trans_date" : $("#sell_trans input").eq(0).val(),
				"trans_san" : "0",
				"memidx" : $("#sell_trans input").eq(3).val(),
				"name" : $("#sell_trans input").eq(2).val()
			},
			success: function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						DBCashLogADD();
						alert('완료');
						sell_table_list();
					}else{
						// data.state fail
					}
				}else{
					// status fail
				}
			}
		});
	}
}

// Cash_Log ADD
function DBCashLogADD(){
	// item[table]: 세부 내용(cashlog)
	// 라인 가지고 오기 $('table#item tr:gt(0)')
	if($("#buy_trans input").html() == ""){
		$('table#item tr:gt(0)').each(function(){
			$.ajax({
				url:"transitem/transcashlogbuy",
				type:"POST",
				cache:false,
				data:{
					"trans_code" : $("#buy_trans input").eq(5).val(),
					"item_code" : $(this).children().eq(1).children().eq(0).val(),
					"item_category" : $(this).children().eq(2).children().eq(0).val(),
					"item_name" : $(this).children().eq(3).children().eq(0).val(),
					"cash_cnt" : $(this).children().eq(4).children().eq(0).val(),
					"cash_money" : $(this).children().eq(5).children().eq(0).val()
				},
				success: function(data, status){
					if(status == "success"){
						if(data.state == "ok"){
							// success
						}else{
							// data.state fail
						}
					}else{
						// status fail
					}
				}
			});
		});
	}else{
		$('table#item tr:gt(0)').each(function(){
			$.ajax({
				url:"transitem/transcashlogsell",
				type:"POST",
				cache:false,
				data:{
					"trans_code" : $("#sell_trans input").eq(5).val(),
					"item_code" : $(this).children().eq(1).children().eq(0).val(),
					"item_category" : $(this).children().eq(2).children().eq(0).val(),
					"item_name" : $(this).children().eq(3).children().eq(0).val(),
					"cash_cnt" : $(this).children().eq(4).children().eq(0).val(),
					"cash_money" : $(this).children().eq(5).children().eq(0).val()
				},
				success: function(data, status){
					if(status == "success"){
						if(data.state == "ok"){
							// success
						}else{
							// data.state fail
						}
					}else{
						// status fail
					}
				}
			});
		});
	}
}






// 판매 현황 가지고 오기
function DBTrans_Sell_List(){
	$.ajax({
		url:"transitem/sell/transcodelist",
		type:"POST",
		cache:false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchselloption] option:eq(0)').prop("selected", true);
					$('input[name = searchsellvalue_name]').val("");
					// success
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='sell_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#sell_trans_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					$("table#sell_trans_list_table > tbody:last").append("<tr><td colspan='6'>등록된 견적서가 없거나, DB 문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				// status fail
			}
		}
	});
}
$(document).on("click", "a.item_sell_page", function(){
	DBTrans_Sell_List_page($(this).attr('id'));
});
function DBTrans_Sell_List_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url:"transitem/sell/transcodelist",
		type:"POST",
		cache:false,
		data : {"page" : requestpage},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchselloption] option:eq(0)').prop("selected", true);
					$('input[name = searchsellvalue_name]').val("");
					// success
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='sell_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#sell_trans_list_table > tbody:last").append(html);
				}else{
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					$("table#sell_trans_list_table > tbody:last").append("<tr><td colspan='6'>등록된 견적서가 없거나, DB 문제입니다.</td></tr>");
				}
			}else{
				// status fail
			}
		}
	});
}
// 판매 미확인 현황 가져오기
function DBTrans_Unconfirm_Sell_List(){
	$.ajax({
		url : "transitem/sell/transcodeunconfirmlist",
		type : "POST",
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchselloption] option:eq(0)').prop("selected", true);
					$('input[name = searchsellvalue_name]').val("");
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='sell_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#sell_trans_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_uconfirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					// data.state fail
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_uconfirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#sell_trans_list_table tr:gt(0)").remove();
					$("table#sell_trans_list_table > tbody:last").append("<tr><td colspan='6'>결제 미확인 데이터 없습니다.</td></tr>");
				}
			}else{
				// status fail
			}
		}
	});
}
$(document).on("click", "a.item_sell_uconfirm_page", function(){
	DBTrans_Unconfirm_Sell_List_page($(this).attr('id'));
});
function DBTrans_Unconfirm_Sell_List_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "transitem/sell/transcodeunconfirmlist",
		type : "POST",
		cache : false,
		data : {"page" : requestpage},
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchselloption] option:eq(0)').prop("selected", true);
					$('input[name = searchsellvalue_name]').val("");
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='sell_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#sell_trans_list_table > tbody:last").append(html);
				}else{
					// data.state fail
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_uconfirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#sell_trans_list_table tr:gt(0)").remove();
					$("table#sell_trans_list_table > tbody:last").append("<tr><td colspan='6'>결제 미확인 데이터 없습니다.</td></tr>");
				}
			}else{
				// status fail
			}
		}
	});
}
// 판매 확인 현황 가져오기
function DBTrans_Confirm_Sell_List(){
	$.ajax({
		url : "transitem/sell/transcodeconfirmlist",
		type : "POST",
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchselloption] option:eq(0)').prop("selected", true);
					$('input[name = searchsellvalue_name]').val("");
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='sell_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#sell_trans_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_confirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					// data.state fail
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_confirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#sell_trans_list_table tr:gt(0)").remove();
					$("table#sell_trans_list_table > tbody:last").append("<tr><td colspan='6'>결제 확인 데이터 없습니다.</td></tr>");
				}
			}else{
				// status fail
			}
		}
	});
}
$(document).on("click", "a.item_sell_confirm_page", function(){
	DBTrans_Confirm_Sell_List_page($(this).attr('id'));
});
function DBTrans_Confirm_Sell_List_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "transitem/sell/transcodeconfirmlist",
		type : "POST",
		cache : false,
		data : {"page" : requestpage},
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchselloption] option:eq(0)').prop("selected", true);
					$('input[name = searchsellvalue_name]').val("");
					for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#sell_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='sell_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#sell_trans_list_table > tbody:last").append(html);
				}else{
					// data.state fail
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_sell_confirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#sell_trans_list_table tr:gt(0)").remove();
					$("table#sell_trans_list_table > tbody:last").append("<tr><td colspan='6'>결제 확인 데이터 없습니다.</td></tr>");
				}
			}else{
				// status fail
			}
		}
	});
}

//구매 현황 가지고 오기
function DBTrans_Buy_List(){
	$.ajax({
		url:"transitem/buy/transcodelist",
		type:"POST",
		cache:false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchbuyoption] option:eq(0)').prop("selected", true);
					$('input[name = searchbuyvalue_name]').val("");
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					// success
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='buy_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#buy_trans_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_buy_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_buy_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#buy_trans_list_table > tbody:last").append("<tr><td colspan='6'>등록된 발주서가 없거나, DB 문제입니다.</td></tr>");
				}
			}else{
				// status fail
			}
		}
	});
}
$(document).on("click", "a.item_buy_page", function(){
	DBTrans_Buy_List_page($(this).attr('id'));
});
function DBTrans_Buy_List_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url:"transitem/buy/transcodelist",
		type:"POST",
		cache:false,
		data : {"page" : requestpage},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchbuyoption] option:eq(0)').prop("selected", true);
					$('input[name = searchbuyvalue_name]').val("");
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					// success
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='buy_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#buy_trans_list_table > tbody:last").append(html);
				}else{
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_buy_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#buy_trans_list_table > tbody:last").append("<tr><td colspan='6'>등록된 발주서가 없거나, DB 문제입니다.</td></tr>");
				}
			}else{
				// status fail
			}
		}
	});
}
// 구매 현황 중 결제 미확인 가져오기
function DBTrans_Unconfirm_Buy_List(){
	$.ajax({
		url : "transitem/buy/transcodeunconfirmlist",
		type : "POST",
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchbuyoption] option:eq(0)').prop("selected", true);
					$('input[name = searchbuyvalue_name]').val("");
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='buy_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#buy_trans_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_buy_unconfirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					// data.state fail
					$("table#buy_trans_list_table > tbody:last").append("<tr><td colspan='6'>결제 필요 데이터가 없습니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_buy_unconfirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				// status fail
			}
		}
	});
}
$(document).on("click", "a.item_buy_unconfirm_page", function(){
	DBTrans_Unconfirm_Buy_List_page($(this).attr('id'));
});
function DBTrans_Unconfirm_Buy_List_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "transitem/buy/transcodeunconfirmlist",
		type : "POST",
		cache : false,
		data : {"page" : requestpage},
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchbuyoption] option:eq(0)').prop("selected", true);
					$('input[name = searchbuyvalue_name]').val("");
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='buy_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#buy_trans_list_table > tbody:last").append(html);
				}else{
					// data.state fail
				}
			}else{
				// status fail
			}
		}
	});
}
// 구매현황 중 결제 확인 가져오기
function DBTrans_Confirm_Buy_List(){
	$.ajax({
		url : "transitem/buy/transcodeconfirmlist",
		type : "POST",
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchbuyoption] option:eq(0)').prop("selected", true);
					$('input[name = searchbuyvalue_name]').val("");
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='buy_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#buy_trans_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_buy_confirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					// data.state fail
					$('table#buy_trans_list_table tr:gt(0)').remove();
					$("table#buy_trans_list_table > tbody:last").append("<tr><td colspan='6'>결제 완료 데이터가 없습니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='item_buy_confirm_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				// status fail
			}
		}
	});
}
$(document).on("click", "a.item_buy_confirm_page", function(){
	DBTrans_Confirm_Buy_List_page($(this).attr('id'));
});
function DBTrans_Confirm_Buy_List_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "transitem/buy/transcodeconfirmlist",
		type : "POST",
		cache : false,
		data : {"page" : requestpage},
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchbuyoption] option:eq(0)').prop("selected", true);
					$('input[name = searchbuyvalue_name]').val("");
					for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#buy_trans_list_table tr").eq(i).remove();
						}
					}
					var html = "";
					var cashing = "";
					for(var i =0; i < data.list.length; i++){
						html += "<tr class='buy_trans_list_data'>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_subject+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].trans_tmoney+"원</td>";
						if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
							if(data.list[i].trans_san == 0){
								cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
							}else{
								cashing= "결제완료";
							}
						}else{
							if(data.list[i].trans_san == 0){
								cashing= "결제필요";
							}else{
								cashing= "결제완료";
							}
						}
						html += "<td>"+cashing+"</td>";
						html += "</tr>";
					}
					$("table#buy_trans_list_table > tbody:last").append(html);
				}else{
					// data.state fail
				}
			}else{
				// status fail
			}
		}
	});
}
// 선택한 레이아웃 레코드 삭제
function bt_select_item_cols_remove(){
	var trArray = $('table#item tr');
	$('table#item tr:gt(0)').each(function(i){
		var tr = $(this);
		var tdArray = tr.children().children();
		if(tdArray.eq(0).is(':checked')){
			$(this).remove();
		}
	});
	var retrArray = $('table#item tr');
	if(retrArray.length == "1"){
		bt_item_add();
	}
}
// 결제 완료시 버튼 액션
$(document).on("click", ".trans_san_bt", function(){
	var index = $(this).attr('id').substr(0,2);
	if(confirm('결제완료 변경 하시겠습니까?')){
		$.ajax({
			url:"transitem/transsan",
			type:"POST",
			cache:false,
			data:{
				"trans_code" : $(this).attr('id')
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						if(index == "구매"){
							DBTrans_Buy_List();
						}else{
							DBTrans_Sell_List();
						}
						alert('결제완료!');
					}else{
						if(index == "구매"){
							DBTrans_Buy_List();
						}else{
							DBTrans_Sell_List();
						}
						alert('결제 금액이 부족합니다.');
					}
				}
			}
		});
		
	}else{
	}
	setTimeout(function() {
		$('#Detail_View').css("display", "none");
		$('#Detail_View').html("");
	}, 5);
});
// 구매 클릭시 상세 보기
function buy_trans_list_table_Detail(trdata){
	var transdata = trdata;
	$.ajax({
		url:"transitem/buy/transdetaillist",
		type:"POST",
		cache:false,
		data: {"trans_code" : transdata},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					var html = "";
					$('div#handle_buy_detail_template span').text(data.list1[0].trans_subject + " 상세 보기");
					$('td#buy_detail_date').text(dateConvert(data.list1[0].trans_date));
					$('td#buy_detail_number').text(data.list1[0].busi_number);
					$('td#buy_detail_coname').text(data.list1[0].name);
					$('td#buy_detail_owner').text(data.list1[0].busi_name);
					$('td#buy_detail_transcode').text(data.list1[0].trans_code);
					$('input#comemidx').val(data.list1[0].memidx);
					$('td#buy_detail_subject').html("<input type='text' value='"+data.list1[0].trans_subject+"'/>");
					for(var i =0; i < data.list2.length ; i++){
						html += "<tr>";
						html += "<td><input type='checkbox' name='item_check'></td>";
						html += "<td><input type='text' value='"+data.list2[i].item_code+"'/><i class='fas fa-search search search_item_code'></i></td>";
						html += "<td><input type='text' value='"+data.list2[i].item_category+"'/></td>";
						html += "<td><input type='text' value='"+data.list2[i].item_name+"'/></td>";
						html += "<td><input type='text' value='"+data.list2[i].cash_cnt+"' name='detail_cnt'/></td>";
						html += "<td><input type='text' value='"+data.list2[i].cash_money+"' name='cashmoney'/>원<input type='hidden' name='cnt_money' value='"+data.list2[i].cash_money/data.list2[i].cash_cnt+"'/></td>";
						html += "<td></td>";
						html += "</tr>";
					}
					html += "<tr><td colspan='2'>총금액</td><td colspan='5'><input type='text' id='totalMoney' disabled value='"+data.list1[0].trans_tmoney+"'/>원</td></tr>";
					$('table#buy_detail_item').append(html);
					if($('input#comemidx').val() == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
						$('#bt_buy_detail_item_modify').show();
						$('#bt_buy_detail_item_reset').show();
						$('#bt_buy_detail_item_delete').show();
					}else{
						$('#bt_buy_detail_item_modify').hide();
						$('#bt_buy_detail_item_reset').hide();
						$('#bt_buy_detail_item_delete').hide();
					}
					
				}else{
					
				}
			}else{
				
			}
		}
	});
}
$(document).on("mouseenter", "#handle_buy_detail_template", function(){
	$("#Detail_View").draggable({ handle: "div#handle_buy_detail_template" });
});
$(document).on("click", "#bt_buy_detail_item", function(){
	$('#Detail_View').css("display", "none");
	$('#Detail_View').html("");
});
$(document).on("blur", 'input[name=detail_cnt]', function(){
	var total = 0;
	$(this).parent().parent().children().eq(5).children().eq(0).val($(this).val() * $(this).parent().parent().children().eq(5).children().eq(1).val());
	$('input[name=cashmoney]').each(function(i){
		total = parseInt(total) + parseInt($(this).val());
	});
	$('#totalMoney').val(total);
});


//회사정보 조립 HTML
function com_table_list(){//정보
	cominformlist();
	$("#r_container").load('html/right_cominform #company_inform');
	
}
function com_table_write(){//작성
	$("#r_container").load('html/right_cominform #company_inform_write');
	
}
function com_table_modify(){//수정
	cominformmodify();
	$("#r_container").load('html/right_cominform #company_inform_modify');
}
//회사 정보
//회사 정보 입력
function cominformadd() {
	$.ajax({
		url : "company/write",
		type : "POST",
		cache : false,
		data : {
			"comnumber" : $('input[name=comnumber]').val(),
			"comname" : $('input[name=comname]').val(),
			"comowner" : $('input[name=comowner]').val(),
			"comdate" : $('input[name=comdate]').val(),
			"commoney" : $('input[name=commoney]').val(),
			"comtel" : $('input[name=comtel]').val(),
			"comfax" : $('input[name=comfax]').val(),
			"comemail" : $('input[name=comemail]').val(),
			"comloc" : $('input[name=comloc]').val()
		},
		success : function(data, status) {
			if (status == "success") {
				if (data.state = "ok") {
					alert('입력완료!!');
					com_table_list();
				} else {
					alert('등록된 정보가 존재합니다.\n\n 회사정보창으로 이동합니다.');
					com_table_list();
				}
			} else {
				alert('등록실패!!');
			}
		}
	});
	return false;
}

//회사 정보 가져오기
function cominformlist(){
	$.ajax({
		url: "company/inform",
		type:"POST" ,
		cache:false,
		success: function(data, status){
			if(status=="success"){
				if(data.state=="ok"){
					var list = data.list;
					$('td#comnumber').append(data.list[0].comnumber);
					$('td#comname').append(data.list[0].comname);
					$('td#comowner').append(data.list[0].comowner);
					$('td#comdate').append(dateConvert(data.list[0].comdate));
					$('td#commoney').append(data.list[0].commoney + " 원");
					$('td#comtel').append(data.list[0].comtel);
					$('td#comfax').append(data.list[0].comfax);
					$('td#comemail').append(data.list[0].comemail);
					$('td#comloc').append(data.list[0].comloc);
					$('td#comemp').append(data.list[0].comemp);
					$('td#comtran').append(data.list[0].comtran);
					$('#l_com_inform a#S_com_inform_write').remove();// 등록된 자료가 있다면 입력은 메뉴에서 삭제합니다.
				}else{
					alert('DB에 회사정보가 입력되지 않았습니다.\n\n입력창으로 이동합니다.');
					com_table_write();
				}
			}else{
				alert('DB 문제');
			}
		}
		
	});
	return false;
}

//회사정보 수정
function cominformmodify() {
	$.ajax({
		url : "company/inform",
		type : "POST",
		cache : false,
		success : function(data, status) {
			if (status == "success") {
				if (data.state == "ok") {
					var list = data.list;
					var comnumber = data.list[0].comnumber;
					$('td#comnumber').append(data.list[0].comnumber);
					$('td#comname').append(data.list[0].comname);
					$('input[name=comowner]').attr('value', data.list[0].comowner);
					$('td#comdate').append(dateConvert(data.list[0].comdate));
					$('input[name=commoney]').attr('value', data.list[0].commoney);
					$('input[name=comtel]').attr('value', data.list[0].comtel);
					$('input[name=comfax]').attr('value', data.list[0].comfax);
					$('input[name=comemail]').attr('value', data.list[0].comemail);
					$('input[name=comloc]').attr('value', data.list[0].comloc);
					$('.modify').on('click', function() {
						$.ajax({
							url : "company/modify",
							type : "POST",
							cache : false,
							data : {
								"comowner": $('input[name=comowner]').val(),
								"commoney":  $('input[name=commoney]').val(),
								"comtel":  $('input[name=comtel]').val(),
								"comfax":  $('input[name=comfax]').val(),
								"comemail":  $('input[name=comemail]').val(),
								"comloc":  $('input[name=comloc]').val(),
								"comnumber": comnumber
							},
							success : function(data, status) {
								if (status == "success") {
									if (data.state == "ok") {
										alert("회사 정보가 수정되었습니다.");
									}else{
										alert('수정 실패');
									}
								}else{
									alert('수정 실패');
								}
							}
						});
					});
				} else {
					alert('DB에 회사정보가 입력되지 않았습니다.\n\n입력창으로 이동합니다.');
					com_table_write();
				}
			} else {
				alert('DB 문제');
			}
		}

	});
	return false;
}

//재고(추가,삭제,정보)
function storage_list(){
	storagelist();
	$("#r_container").load('html/right_storage #storage_list');
}

function storage_modify_remove(){
	storagemodifyremove();
	$("#r_container").load('html/right_storage #storage_modify_remove');
}
//재고 수정
$(document).on("change", "input[name=check1]", function(){
	if($("input[name=check]").is(":checked")){
        storage_modify_change_input($(this));
    }else{
        storage_modify_change_input($(this));
    }
});
$(document).on("change", "input[name=check2]", function(){
	if($("input[name=check]").is(":checked")){
		allstorage_modify_change_input($(this));
    }else{
    	allstorage_modify_change_input($(this));
    }
});


//재고 선택 수정
$(document).on("click", "#select_storage_modify", function(){
	select_storage_modify();
});

$(document).on("click","#select_storage_remove",function(){
	select_storage_remove();
});
//재고 리스트
function storagelist(){
	var i = 0;
	$.ajax({
		url: "storage/list",
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_storage_list > tbody:last").append(pars_storage_list(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='4'>등록된 재고가 없거나, DB에러 입니다.</td></tr>");
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
$(document).on("click", "a.storage_all_page", function(){
	storagelist_page($(this).attr('id'));
});
function storagelist_page(page){
	var i = 0;
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$("table#table_storage_list tr:gt(0)").remove();
	$.ajax({
		url: "storage/list?page="+requestpage,
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_storage_list > tbody:last").append(pars_storage_list(data));
				}else{
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='4'>등록된 재고가 없거나, DB에러 입니다.</td></tr>");
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
function pars_storage_list(data){
	var list = data.list;
	var html = "";
	for(var i = 0 ; i < list.length ; i++){
		html += "<tr>";
		html += "<td>"+ list[i].item_code +"</td>";
		html += "<td>"+ list[i].item_category +"</td>";
		html += "<td>"+ list[i].item_name +"</td>";
		html += "<td>"+ list[i].item_cnt +"</td>";
		html += "</tr>";
	}
	return html;
}

// 재고등록
function storageadd(){
	$.ajax({
		url: "storage/add",
		type: "POST",
		cache: false,
		data: {
			"item_code": $('input[name=item_code]').val(), 
			"item_category": $('input[name=item_category]').val(), 
			"item_name": $('input[name=item_name]').val(),
			"item_cnt": $('input[name=item_cnt]').val()
			},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					alert('등록완료!!');
					$('input[name=item_code]').val("");
					$('input[name=item_category]').val("");
					$('input[name=item_name]').val("");
					$('input[name=item_cnt]').val("");
				}else{
					alert('서버의 문제가 있습니다.');
				}
			}else{
				alert('등록실패!!');
			}
		}
	});
	return false;
}
//재고변경/삭제
function storagemodifyremove(){
	var i = 0;
	$.ajax({
		url: "storage/list",
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_storage_list > tbody:last").append(pars_stroage_modify_remove(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_modify_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='5'>등록된 재고가 없거나, DB문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_modify_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
$(document).on("click", "a.storage_modify_all_page", function(){
	storagemodifyremove_page($(this).attr('id'));
});
function storagemodifyremove_page(page){
	var i = 0;
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$("table#table_storage_list tr:gt(0)").remove();
	$.ajax({
		url: "storage/list?page=" + requestpage,
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_storage_list > tbody:last").append(pars_stroage_modify_remove(data));
				}else{
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='5'>등록된 재고가 없거나, DB문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_modify_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
function pars_stroage_modify_remove(data){
	var list = data.list;
	var html = "";
	for(var i = 0 ; i < list.length; i++){
		html += "<tr>";
		html += "<td><input type='checkbox' name='check1'></td>";
		html += "<td>"+ list[i].item_code +"</td>";
		html += "<td>"+ list[i].item_category +"</td>";
		html += "<td>"+ list[i].item_name +"</td>";
		html += "<td>"+ list[i].item_cnt +"</td>";
		html += "</tr>";
	}
	return html;
}
function storage_modify_change_input(checked){
	var tr = checked.parent().parent();
	var td = tr.children();
	var i = 0;
	if(checked.is(":checked")){
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" ||  i=="1" || i == "3"  || i =="2")){
				td.eq(i).html("<input type='text' name='"+i+"' value='"+td.eq(i).text()+"'>");
			}
		}
	}else{
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" ||  i=="1" || i == "3"  || i =="2")){
				td.eq(i).text($('input[name='+i+']').val());
			}
		}
	}
}
function storage_modify_change(){
	var row = new Array();
	var checked = $("input[name=check1]:checked");
 
	checked.each(function(i) {
		var tr = checked.parent().parent().eq(i);
		var td = tr.children();
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" ||  i=="1" || i == "3"  || i =="2")){
				row.push($('input[name='+i+']').val());
			}
		}
	});
}
function select_storage_modify(){
	var row = new Array();
	var checked = $("input[name=check1]:checked");
	var datalist = "";
	checked.each(function(i) {
		var tr = $(this).parent().parent();
		var td = tr.children();
		$.ajax({
			url : "storage/modify",
			type : "POST",
			cache : false,
			data : {
				"item_code" : td.eq(1).eq(0).text(),
				"item_category" : td.eq(2).eq(0).text(),
				"item_name" : td.eq(3).eq(0).text(),
				"item_cnt" : td.eq(4).children().eq(0).val()
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$('#table_storage_list tr:gt(0)').remove();
						datalist = data.state;
					}else{
						datalist = data.state;
					}
				}else{
				}
			}
			
		});
	});
	setTimeout(function() {
		if(datalist =="ok"){
			storagemodifyremove();
		}
	}, 300);
}
function select_storage_remove(){
	var row = new Array();
	var checked = $("input[name=check1]:checked");
	var datalist = "";
	checked.each(function(i) {
		var tr = $(this).parent().parent();
		var td = tr.children();
		$.ajax({
			url : "storage/remove",
			type : "POST",
			cache : false,
			data : {
				"item_code" : td.eq(1).eq(0).text(),
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$('#table_storage_list tr:gt(0)').remove();
						datalist = data.state;
					}else{
						datalist = data.state;
					}
				}else{
				}
			}
		});
	});
	setTimeout(function() {
		if(datalist =="ok"){
			storagemodifyremove();
		}
	}, 300);
}

// 제품코드 (조회,추가,삭제)
function allstorage_list(){ // 정보
	allstoragelist();
	$("#r_container").load('html/right_allstorage #allstorage_list');
}

function allstorage_add(){
	$("#r_container").load('html/right_allstorage #allstorage_add');
}

function allstorage_modify_remove(){
	allstoragemodifyremove();
	$("#r_container").load('html/right_allstorage #allstorage_modify_remove');
} 
//재고 선택 수정
$(document).on("click", "#select_allstorage_modify", function(){
	select_allstorage_modify();
});

$(document).on("click","#select_allstorage_remove",function(){
	select_allstorage_remove();
});
// 제품코드 조희
function allstoragelist(){
	var i = 0;
	$.ajax({
		url: "allstorage/list",
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_allstorage_list > tbody:last").append(pars_allstorage_list(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='6'>등록된 제품코드가 없거나, DB문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
			}
		}
	});
	return false;
}
$(document).on("click", "a.allstorage_all_page", function(){
	allstoragelist_page($(this).attr('id'));
});
function allstoragelist_page(page){
	var i = 0;
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	
	$.ajax({
		url: "allstorage/list",
		type: "GET",
		cache: false,
		data : {"page" : requestpage},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_allstorage_list tr:gt(0)").remove();
					$("table#table_allstorage_list > tbody:last").append(pars_allstorage_list(data));
				}else{
					$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='6'>등록된 제품코드가 없거나, DB문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
			}
		}
	});
	return false;
}
function pars_allstorage_list(data){
	var list = data.list;
	var html = "";
	for(var i = 0 ; i < list.length ; i++){
		html += "<tr>";
		html += "<td>"+ list[i].item_code +"</td>";
		html += "<td>"+ list[i].item_category +"</td>";
		html += "<td>"+ list[i].item_name +"</td>";
		html += "<td>"+ list[i].item_cnt +"</td>";
		html += "<td>"+ list[i].buy_money +"</td>";
		html += "<td>"+ list[i].sell_money +"</td>";
		html += "</tr>";
	}
	return html;
}

// 제품코드 등록
function allstorageadd(){
	$.ajax({
		url: "allstorage/add",
		type: "POST",
		cache: false,
		data: {
			"item_code": $('input[name=item_code]').val(), 
			"item_category": $('input[name=item_category]').val(), 
			"item_name": $('input[name=item_name]').val(),
			"item_cnt": $('input[name=item_cnt]').val(),
			"buy_money": $('input[name=buy_money]').val(),
			"sell_money": $('input[name=sell_money]').val()
			},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					alert('등록완료!!');
					$('input[name=item_code]').val("");
					$('input[name=item_category]').val("");
					$('input[name=item_name]').val("");
					$('input[name=item_cnt]').val("");
					$('input[name=buy_money]').val("");
					$('input[name=sell_money]').val("");
				}else{
					alert('서버의 문제가 있습니다.');
				}
			}else{
				alert('등록실패!!');
			}
		}
	});
	return false;
}

// 제품코드 등록/삭제
function allstoragemodifyremove(){
	var i = 0;
	$.ajax({
		url: "allstorage/list",
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_allstorage_list > tbody:last").append(pars_allstroage_modify_remove(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_all_modify_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='8'>등록된 제품코드가 없거나, DB문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_all_modify_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
$(document).on("click", "a.allstorage_all_modify_page", function(){
	allstoragemodifyremove_page($(this).attr('id'));
});
function allstoragemodifyremove_page(page){
	var i = 0;
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$("table#table_allstorage_list tr:gt(0)").remove();
	$.ajax({
		url: "allstorage/list?page="+requestpage,
		type: "GET",
		cache: false,
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$("table#table_allstorage_list > tbody:last").append(pars_allstroage_modify_remove(data));
				}else{
					$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='8'>등록된 제품코드가 없거나, DB문제입니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_all_modify_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}else{
				alert('DB에러가 발생하였습니다. 관리자에게 문의하세요!!');
			}
		}
	});
	return false;
}
function pars_allstroage_modify_remove(data){
	var list = data.list;
	var html = "";
	for(var i = 0 ; i < list.length; i++){
		html += "<tr>";
		html += "<td><input type='checkbox' name='check2'></td>";
		html += "<td>"+ list[i].item_code +"</td>";
		html += "<td>"+ list[i].item_category +"</td>";
		html += "<td>"+ list[i].item_name +"</td>";
		html += "<td>"+ list[i].item_cnt +"</td>";
		html += "<td>"+ list[i].buy_money +"</td>";
		html += "<td>"+ list[i].sell_money +"</td>";
		html += "</tr>";
	}
	return html;
}
//제품코드 수정
function allstorage_modify_change_input(checked){
	var tr = checked.parent().parent();
	var td = tr.children();
	var i = 0;
	if(checked.is(":checked")){
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" ||  i=="1" || i == "3"  || i =="2")){
				td.eq(i).html("<input type='text' name='"+i+"' value='"+td.eq(i).text()+"'>");
			}
		}
	}else{
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" ||  i=="1" || i == "3"  || i =="2")){
				td.eq(i).text($('input[name='+i+']').val());
			}
		}
	}
}
 
function allstorage_modify_change(){
	var row = new Array();
	var checked = $("input[name=check2]:checked");
 
	checked.each(function(i) {
		var tr = checked.parent().parent().eq(i);
		var td = tr.children();
		for(i = 0 ; i < tr.children().length; i++){
			if(!(i == "0" ||  i=="1" || i == "3"  || i =="2")){
				row.push($('input[name='+i+']').val());
			}
		}
	});
}
function select_allstorage_modify(){
	var row = new Array();
	var checked = $("input[name=check2]:checked");
	var datalist = "";
	checked.each(function(i) {
		var tr = $(this).parent().parent();
		var td = tr.children();
		$.ajax({
			url : "allstorage/modify",
			type : "POST",
			cache : false,
			data : {
				"item_code" : td.eq(1).eq(0).text(),
				"item_category" : td.eq(2).eq(0).text(),
				"item_name" : td.eq(3).eq(0).text(),
				"item_cnt" : td.eq(4).children().eq(0).val(),
				"buy_money" : td.eq(5).children().eq(0).val(),
				"sell_money" : td.eq(6).children().eq(0).val()
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$('#table_allstorage_list tr:gt(0)').remove();
						datalist = data.state;
					}else{
						datalist = data.state;
					}
				}else{
				}
			}
			
		});
	});
	setTimeout(function() {
		if(datalist =="ok"){
			allstoragemodifyremove();
		}
	}, 300);
}
function select_allstorage_remove(){
	var row = new Array();
	var checked = $("input[name=check2]:checked");
	var datalist = "";
	checked.each(function(i) {
		var tr = $(this).parent().parent();
		var td = tr.children();
		$.ajax({
			url : "allstorage/remove",
			type : "POST",
			cache : false,
			data : {
				"item_code" : td.eq(1).eq(0).text(),
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$('#table_allstorage_list tr:gt(0)').remove();
						datalist = data.state;
					}else{
						datalist = data.state;
					}
				}else{
				}
			}
		});
	});
	setTimeout(function() {
		if(datalist =="ok"){
			allstoragemodifyremove();
		}
	}, 300);
}

function search_storage_option_list(){
	$.ajax({
		url : "storage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = searchstorage]').val(),
			"searchvalue" : $('input[name = storagevalue_name]').val()
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_storage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_storage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td><input type='checkbox' name='check1'></td>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "</tr>";
					}
					$("table#table_storage_list > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_modify_search_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='5'>검색된 데이터가 없습니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_modify_search_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}	
		}		
	});
}
$(document).on("click", "a.storage_modify_search_page", function(){
	search_storage_option_list_page($(this).attr('id'));
});
function search_storage_option_list_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$("table#table_storage_list tr:gt(0)").remove();
	$.ajax({
		url : "storage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = searchstorage]').val(),
			"searchvalue" : $('input[name = storagevalue_name]').val(),
			"page" : requestpage
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_storage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_storage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td><input type='checkbox' name='check1'></td>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "</tr>";
					}
					$("table#table_storage_list > tbody:last").append(html);
				}else{
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='5'>검색된 데이터가 없습니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_modify_search_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}	
		}		
	});
}
function search_storage_option_list2(){
	$.ajax({
		url : "storage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = searchstorage]').val(),
			"searchvalue" : $('input[name = storagevalue_name]').val()
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_storage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_storage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "</tr>";
					}
					$("table#table_storage_list > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_list_search_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='4'>검색된 데이터가 없습니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_list_search_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}
		}		
	});
}
$(document).on("click", "a.storage_list_search_page", function(){
	search_storage_option_list2_page($(this).attr('id'));
});
function search_storage_option_list2_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$("table#table_storage_list tr:gt(0)").remove();
	$.ajax({
		url : "storage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = searchstorage]').val(),
			"searchvalue" : $('input[name = storagevalue_name]').val(),
			"page" : requestpage
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_storage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_storage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "</tr>";
					}
					$("table#table_storage_list > tbody:last").append(html);
				}else{
					$("table#table_storage_list > tbody:last").append("<tr><td colspan='4'>검색된 데이터가 없습니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='storage_list_search_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}
		}		
	});
}
function search_allstorage_option_list(){
	$.ajax({
		url : "allstorage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = allsearchstorage]').val(),
			"searchvalue" : $('input[name = allstoragevalue_name]').val()
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_allstorage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_allstorage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td><input type='checkbox' name='check2'></td>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "<td>"+ list[i].buy_money +"</td>";
						html += "<td>"+ list[i].sell_money +"</td>";
						html += "</tr>";
					}
					$("table#table_allstorage_list > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_search2_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
			}else{
				var pageing = "";
				for(var i = 0 ; i < data.cnt; i++){
					pageing += "<a id='"+(i+1)+"' class='allstorage_search2_page'> " + (i+1) + " </a>";
				}
				$('div.pagination').html(pageing);
				$('table#table_allstorage_list tr:gt(0)').remove();
				$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='7'>검색된 데이터가 없습니다.</td></tr>");
			}
		}
		}		
		
	});
}
$(document).on("click", "a.allstorage_search2_page", function(){
	search_allstorage_option_list_page($(this).attr('id'));
});
function search_allstorage_option_list_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "allstorage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = allsearchstorage]').val(),
			"searchvalue" : $('input[name = allstoragevalue_name]').val(),
			"page" : requestpage
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_allstorage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_allstorage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td><input type='checkbox' name='check2'></td>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "<td>"+ list[i].buy_money +"</td>";
						html += "<td>"+ list[i].sell_money +"</td>";
						html += "</tr>";
					}
					$("table#table_allstorage_list > tbody:last").append(html);
			}else{
				var pageing = "";
				for(var i = 0 ; i < data.cnt; i++){
					pageing += "<a id='"+(i+1)+"' class='allstorage_search2_page'> " + (i+1) + " </a>";
				}
				$('div.pagination').html(pageing);
				$('table#table_allstorage_list tr:gt(0)').remove();
				$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='7'>검색된 데이터가 없습니다.</td></tr>");
			}
		}
		}		
		
	});
}
function search_allstorage_option_list2(){
	$.ajax({
		url : "allstorage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = allsearchstorage]').val(),
			"searchvalue" : $('input[name = allstoragevalue_name]').val()
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_allstorage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_allstorage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "<td>"+ list[i].buy_money +"</td>";
						html += "<td>"+ list[i].sell_money +"</td>";
						html += "</tr>";
					}
					$("table#table_allstorage_list > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='allstorage_search_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
			}else{
				var pageing = "";
				for(var i = 0 ; i < data.cnt; i++){
					pageing += "<a id='"+(i+1)+"' class='allstorage_search_page'> " + (i+1) + " </a>";
				}
				$('div.pagination').html(pageing);
				$('table#table_allstorage_list tr:gt(0)').remove();
				$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='6'>검색된 데이터가 없습니다.</td></tr>");
			}
		}
		}		
		
	});
}
$(document).on("click", "a.allstorage_search_page", function(){
	search_allstorage_option_list2_page($(this).attr('id'));
});
function search_allstorage_option_list2_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "allstorage/searchstorage",
		type : "POST",
		data : {
			"searchoption" : $('select[name = allsearchstorage]').val(),
			"searchvalue" : $('input[name = allstoragevalue_name]').val(),
			"page" : requestpage
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					for(var i = $("table#table_allstorage_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_allstorage_list tr").eq(i).remove();
						}
					}
					var list = data.list;
					var html = "";
					for(var i = 0 ; i < list.length ; i++){
						html += "<tr>";
						html += "<td>"+ list[i].item_code +"</td>";
						html += "<td>"+ list[i].item_category +"</td>";
						html += "<td>"+ list[i].item_name +"</td>";
						html += "<td>"+ list[i].item_cnt +"</td>";
						html += "<td>"+ list[i].buy_money +"</td>";
						html += "<td>"+ list[i].sell_money +"</td>";
						html += "</tr>";
					}
					$("table#table_allstorage_list > tbody:last").append(html);
			}else{
				var pageing = "";
				for(var i = 0 ; i < data.cnt; i++){
					pageing += "<a id='"+(i+1)+"' class='allstorage_search_page'> " + (i+1) + " </a>";
				}
				$('div.pagination').html(pageing);
				$('table#table_allstorage_list tr:gt(0)').remove();
				$("table#table_allstorage_list > tbody:last").append("<tr><td colspan='6'>검색된 데이터가 없습니다.</td></tr>");
			}
		}
		}		
		
	});
}
// 거래처 삭제
function TransDelete(businumber){
	$.ajax({
		url: "trans/delete",
		cache : false,
		type : "POST",
		data : {
			"busi_number" : businumber
		},
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					transi_modify_remove();
				}
			}
		}
	});
}
function TransDeleteCheck(){
	var checked = $("input[name=check]:checked");
	var busi_number = [];
	checked.each(function(i) {
		var tr = $(this).parent().parent();
		var td = tr.children();
		busi_number.push(parseInt(td.eq(1).text()));
	});
	$.ajax({
		url: "trans/delete",
		cache : false,
		type : "POST",
		data : {
			"busi_number" : JSON.stringify(busi_number).slice(1).slice(0,-1)
		},
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					transi_modify_remove();
				}
			}
		}
	});
	
}

$(document).on("change", "#select_busi_index_id", function(){
	search_busi_index_list();
});
	

// 거래처 선택 리스트 출력
function search_busi_index_list(){
	$.ajax({
		url : "trans/selectlist",
		type : "POST",
		data : {
			"busi_index" : $('#select_busi_index_id').val()
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchoption] option:eq(0)').prop("selected", true);
					$('input[name = searchvalue_name]').val("");
					for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_trans_list tr").eq(i).remove();
						}
					}
					$("table#table_trans_list > tbody:last").append(pars_trans_list(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi_index_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi_index_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}
		}
	});
}
$(document).on("click", "a.busi_index_page", function(){
	search_busi_index_list_page($(this).attr('id'));
});
function search_busi_index_list_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "trans/selectlist",
		type : "POST",
		data : {
			"busi_index" : $('#select_busi_index_id').val(),
			"page" : requestpage
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchoption] option:eq(0)').prop("selected", true);
					$('input[name = searchvalue_name]').val("");
					for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_trans_list tr").eq(i).remove();
						}
					}
					$("table#table_trans_list > tbody:last").append(pars_trans_list(data));
				}else{
					
				}
			}
		}
	});
}

// 검색

function search_busi_option_list(){
	if($('input[name = searchvalue_name]').val() != ""){
		$('select[name=select_busi_index_name] option:eq(0)').prop("selected", true);
		for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
			if(i != 0){
				$("table#table_trans_list tr").eq(i).remove();
			}
		}
		$.ajax({
			url : "trans/searchoptionlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchoption]').val(),
				"searchvalue" : $('input[name = searchvalue_name]').val()
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$("table#table_trans_list > tbody:last").append(pars_trans_list(data));
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='search_busi_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}else{
						$("table#table_trans_list > tbody:last").append("<tr><td colspan='6'>검색된 데이터가 없습니다.</td></tr>");
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='search_busi_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}
				}
			}
			
		});
	}else{
		alert('검색어를 입력하여 주세요.');
	}
}
$(document).on("click", "a.search_busi_page", function(){
	search_busi_option_list_page($(this).attr('id'));
});
function search_busi_option_list_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	if($('input[name = searchvalue_name]').val() != ""){
		$('select[name=select_busi_index_name] option:eq(0)').prop("selected", true);
		for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
			if(i != 0){
				$("table#table_trans_list tr").eq(i).remove();
			}
		}
		$.ajax({
			url : "trans/searchoptionlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchoption]').val(),
				"searchvalue" : $('input[name = searchvalue_name]').val(),
				"page" : requestpage
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$("table#table_trans_list > tbody:last").append(pars_trans_list(data));
					}else{
						
					}
				}
			}
			
		});
	}else{
		alert('검색어를 입력하여 주세요.');
	}
}


// 거래처 수정 삭제, 검색 및 인덱스 셀렉터
$(document).on("change", "#select_busi_index_id2", function(){
	search_busi_index_list2();
});


//거래처 선택 리스트 출력
function search_busi_index_list2(){
	$.ajax({
		url : "trans/selectlist",
		type : "POST",
		data : {
			"busi_index" : $('#select_busi_index_id2').val()
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchoption] option:eq(0)').prop("selected", true);
					$('input[name = searchvalue_name]').val("");
					for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_trans_list tr").eq(i).remove();
						}
					}
					$("table#table_trans_list > tbody:last").append(pars_trans_modify_remove(data));
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi2_index_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='busi2_index_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}
		}
	});
}
$(document).on("click", "a.busi2_index_page", function(){
	search_busi_index_list2_page($(this).attr('id'));
});
function search_busi_index_list2_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$.ajax({
		url : "trans/selectlist",
		type : "POST",
		data : {
			"busi_index" : $('#select_busi_index_id2').val(),
			"page" : requestpage
		},
		cache : false,
		success : function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					$('select[name=searchoption] option:eq(0)').prop("selected", true);
					$('input[name = searchvalue_name]').val("");
					for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
						if(i != 0){
							$("table#table_trans_list tr").eq(i).remove();
						}
					}
					$("table#table_trans_list > tbody:last").append(pars_trans_modify_remove(data));
				}else{
					
				}
			}
		}
	});
}
//검색
function search_busi_option_list2(){
	if($('input[name = searchvalue_name]').val() != ""){
		$('select[name=select_busi_index_name] option:eq(0)').prop("selected", true);
		for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
			if(i != 0){
				$("table#table_trans_list tr").eq(i).remove();
			}
		}
		$.ajax({
			url : "trans/searchoptionlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchoption]').val(),
				"searchvalue" : $('input[name = searchvalue_name]').val()
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$("table#table_trans_list > tbody:last").append(pars_trans_modify_remove(data));
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='search_busi_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}else{
						$("table#table_trans_list > tbody:last").append("<tr><td colspan='8'>검색된 데이터가 없습니다.</td></tr>");
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='search2_busi_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}
				}
			}
			
		});
	}else{
		alert('검색어를 입력하여 주세요.');
	}
}
$(document).on("click", "a.search2_busi_page", function(){
	search_busi_option_list2_page($(this).attr('id'));
});
function search_busi_option_list2_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	if($('input[name = searchvalue_name]').val() != ""){
		$('select[name=select_busi_index_name] option:eq(0)').prop("selected", true);
		for(var i = $("table#table_trans_list tr").length - 1 ; i >= 0 ; i--){
			if(i != 0){
				$("table#table_trans_list tr").eq(i).remove();
			}
		}
		$.ajax({
			url : "trans/searchoptionlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchoption]').val(),
				"searchvalue" : $('input[name = searchvalue_name]').val(),
				"page" : requestpage
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$("table#table_trans_list > tbody:last").append(pars_trans_modify_remove(data));
					}else{
						
					}
				}
			}
			
		});
	}else{
		alert('검색어를 입력하여 주세요.');
	}
}

// 디테일 초기화 버튼
function Item_Detail_Reset(){
	if($('#buy_detail_trans #buy_detail_transcode').text().substr(0,2) == "구매"){
		$('#Detail_View').css("display", "block");
		$('#Detail_View').load('html/right_item #detail_template');
		popup_layer();
		buy_trans_list_table_Detail($('#buy_detail_trans #buy_detail_transcode').text());
	}else{
		$('#Detail_View').css("display", "block");
		$('#Detail_View').load('html/right_item #detail_template');
		popup_layer();
		buy_trans_list_table_Detail($('#buy_detail_trans #buy_detail_transcode').text());
	}
}
// 디테일 삭제 버튼
function Item_Detail_Delete(){
	if(confirm('삭제 하시겠습니까?')){
		$.ajax({
			url:"transitem/delete",
			cache: false,
			type : "POST",
			data : {
				"trans_code" : $('#buy_detail_trans #buy_detail_transcode').text()
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						setTimeout(function() {
							if($('#buy_detail_trans #buy_detail_transcode').text().substr(0,2) == "구매"){
								buy_table_list();
							}else{
								sell_table_list();
							}
							$('#Detail_View').css("display", "none");
							$('#Detail_View').html("");
						}, 300);
						
					}
				}
			}
		});
	}else{
		
	}
}
// 디테일 수정 버튼
function Item_Detail_Modify(){
	if(confirm('수정하시겠습니까?')){
		// 캐쉬로그 삭제 필요
		// 업데이트 시작
		$.ajax({
			url:"transitem/modify/cashlogremove",
			type: "POST",
			cache : false,
			data : {
				"trans_code" : $('#buy_detail_trans #buy_detail_transcode').text()
			},
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						setTimeout(function() {
							alert('수정성공!');
						}, 300);
						$('#buy_detail_item tr:gt(0)').each(function(i){
							if($('#buy_detail_item tr:gt(0)').length-1 == i){
								$.ajax({
									url:"transitem/modify/transcodeupdate",
									type: "POST",
									cache : false,
									data : {
										"trans_code" : $('#buy_detail_trans #buy_detail_transcode').text(),
										"trans_subject" : $('#buy_detail_trans #buy_detail_subject input').val(),
										"trans_tmoney" : $(this).children().eq(1).children().eq(0).val()
									},
									success : function(data, status){
										
									}
								});
							}else{
								$.ajax({
									url:"transitem/modify/cashlogupdate",
									type: "POST",
									cache : false,
									data : {
										"trans_code" : $('#buy_detail_trans #buy_detail_transcode').text(),
										"item_code" : $(this).children().eq(1).children().val(),
										"item_category" : $(this).children().eq(2).children().val(),
										"item_name" : $(this).children().eq(3).children().val(),
										"cash_cnt" : $(this).children().eq(4).children().val(),
										"cash_money" : $(this).children().eq(5).children().eq(0).val()
									},
									success : function(data, status){
										if(status == "success"){
											if(data.state == "ok"){
												setTimeout(function() {
													
												}, 300);
											}
										}
									}
								});
							}
						});
					}else{
						return;
					}
				}else{
					return;
				}
			}
		});
	}else{
		
	}
}

//구매에서 검색 
function search_buy_option_list(){
	if($('input[name=searchbuyvalue_name]').val != "") {
		$('input[name=searchsellvalue_name]').val("");
		$.ajax({
			url : "transitem/buy/searchoptiontlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchbuyoption]').val(),
				"searchvalue" : $('input[name = searchbuyvalue_name]').val()
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
							if(i != 0){
								$("table#buy_trans_list_table tr").eq(i).remove();
							}
						}
						var html = "";
						var cashing = "";
						for(var i =0; i < data.list.length; i++){
							html += "<tr class='buy_trans_list_data'>";
							html += "<td>"+data.list[i].trans_code+"</td>";
							html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
							html += "<td>"+data.list[i].trans_subject+"</td>";
							html += "<td>"+data.list[i].busi_name+"</td>";
							html += "<td>"+data.list[i].trans_tmoney+"원</td>";
							if(data.list[i].memidx == $('#profile_card input#d1').val()){
								if(data.list[i].trans_san == 0){
									cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
								}else{
									cashing= "결제완료";
								}
							}else{
								if(data.list[i].trans_san == 0){
									cashing= "결제필요";
								}else{
									cashing= "결제완료";
								}
							}
							html += "<td>"+cashing+"</td>";
							html += "</tr>";
							
						}
						$("table#buy_trans_list_table > tbody:last").append(html);
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='item_buy_search_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}else{
						$("table#buy_trans_list_table tr:gt(0)").remove();
						$("table#buy_trans_list_table > tbody:last").append("<tr><td colspan='6'>검색된 데이터가 없습니다.</td></tr>");
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='item_buy_search_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}
				}
			}		
			
		});
	}else{
		alert('검색어를 입력하여주세요!');
	}
}
$(document).on("click", "a.item_buy_search_page", function(){
	search_buy_option_list_page($(this).attr('id'));
});
function search_buy_option_list_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	if($('input[name=searchbuyvalue_name]').val != "") {
		$('input[name=searchsellvalue_name]').val("");
		$.ajax({
			url : "transitem/buy/searchoptiontlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchbuyoption]').val(),
				"searchvalue" : $('input[name = searchbuyvalue_name]').val(),
				"page" : requestpage
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						for(var i = $("table#buy_trans_list_table tr").length - 1 ; i >= 0 ; i--){
							if(i != 0){
								$("table#buy_trans_list_table tr").eq(i).remove();
							}
						}
						var html = "";
						var cashing = "";
						for(var i =0; i < data.list.length; i++){
							html += "<tr class='buy_trans_list_data'>";
							html += "<td>"+data.list[i].trans_code+"</td>";
							html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
							html += "<td>"+data.list[i].trans_subject+"</td>";
							html += "<td>"+data.list[i].busi_name+"</td>";
							html += "<td>"+data.list[i].trans_tmoney+"원</td>";
							if(data.list[i].memidx == $('#profile_card input#d1').val()){
								if(data.list[i].trans_san == 0){
									cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
								}else{
									cashing= "결제완료";
								}
							}else{
								if(data.list[i].trans_san == 0){
									cashing= "결제필요";
								}else{
									cashing= "결제완료";
								}
							}
							html += "<td>"+cashing+"</td>";
							html += "</tr>";
							
						}
						$("table#buy_trans_list_table > tbody:last").append(html);
					}else{
						$("table#buy_trans_list_table > tbody:last").append("<tr><td colspan='6'>검색된 데이터가 없습니다.</td></tr>");
					}
				}
			}		
			
		});
	}else{
		alert('검색어를 입력하여주세요!');
	}
}



// 판매에서 검색 
function search_sell_option_list(){
	if($('input[name=searchsellvalue_name]').val != "") {
		$.ajax({
			url : "transitem/sell/searchoptiontlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchselloption]').val(),
				"searchvalue" : $('input[name = searchsellvalue_name]').val()
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
							if(i != 0){
								$("table#sell_trans_list_table tr").eq(i).remove();
							}
						}
						var html = "";
						var cashing = "";
						for(var i =0; i < data.list.length; i++){
							html += "<tr class='buy_trans_list_data'>";
							html += "<td>"+data.list[i].trans_code+"</td>";
							html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
							html += "<td>"+data.list[i].trans_subject+"</td>";
							html += "<td>"+data.list[i].busi_name+"</td>";
							html += "<td>"+data.list[i].trans_tmoney+"원</td>";
							if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
								if(data.list[i].trans_san == 0){
									cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
								}else{
									cashing= "결제완료";
								}
							}else{
								if(data.list[i].trans_san == 0){
									cashing= "결제필요";
								}else{
									cashing= "결제완료";
								}
							}
							html += "<td>"+cashing+"</td>";
							html += "</tr>";
						
						}
						$("table#sell_trans_list_table > tbody:last").append(html);
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='item_sell_search_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}else{
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='item_sell_search_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
						$("table#sell_trans_list_table tr:gt(0)").remove();
						$("table#sell_trans_list_table > tbody:last").append("<tr><td colspan='6'>검색된 데이터가 없습니다.</td></tr>");
					}
				}
			}	
		});
	}else{
		alert('검색어를 입력하세요.');
	}
}
$(document).on("click", "a.item_sell_search_page", function(){
	search_sell_option_list_page($(this).attr('id'));
});
function search_sell_option_list_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	if($('input[name=searchsellvalue_name]').val != "") {
		$.ajax({
			url : "transitem/sell/searchoptiontlist",
			type : "POST",
			data : {
				"searchoption" : $('select[name = searchselloption]').val(),
				"searchvalue" : $('input[name = searchsellvalue_name]').val(),
				"page" : requestpage
			},
			cache : false,
			success : function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						for(var i = $("table#sell_trans_list_table tr").length - 1 ; i >= 0 ; i--){
							if(i != 0){
								$("table#sell_trans_list_table tr").eq(i).remove();
							}
						}
						var html = "";
						var cashing = "";
						for(var i =0; i < data.list.length; i++){
							html += "<tr class='buy_trans_list_data'>";
							html += "<td>"+data.list[i].trans_code+"</td>";
							html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
							html += "<td>"+data.list[i].trans_subject+"</td>";
							html += "<td>"+data.list[i].busi_name+"</td>";
							html += "<td>"+data.list[i].trans_tmoney+"원</td>";
							if(data.list[i].memidx == $('#profile_card #d1').val() || $('#profile_card #d2').val() == 5){
								if(data.list[i].trans_san == 0){
									cashing= "<input type='button' value='결제필요' class='trans_san_bt' id='"+data.list[i].trans_code+"'>";
								}else{
									cashing= "결제완료";
								}
							}else{
								if(data.list[i].trans_san == 0){
									cashing= "결제필요";
								}else{
									cashing= "결제완료";
								}
							}
							html += "<td>"+cashing+"</td>";
							html += "</tr>";
						
						}
						$("table#sell_trans_list_table > tbody:last").append(html);
					}
				}
			}	
		});
	}else{
		alert('검색어를 입력하세요.');
	}
}




//재고 입고,출고
// 전체
function iostorage_list(){
	$("#r_container").load('html/right_storage #iostorage');
	var html = "";
	$.ajax({
		url:"iostorage/search/list",
		type:"POST",
		cache:false,
		success:function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					// ok
					$('select[name=searchindex] option:eq(0)').prop("selected", true);
					$('input[name=searchinput]').val("");
					for(var i =0; i< data.list.length; i++){
						html += "<tr>";
						html += "<td>"+data.list[i].iostorageidx+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+data.list[i].trans_index+"</td>";
						html += "<td>"+data.list[i].busi_number+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].name+"</td>";
						html += "<td>"+data.list[i].inout+"</td>";
						html += "</tr>";
					}
					$('#iostorage_table > tbody:last').append(html);
					$('#iostorage_table td').each(function(i){
						if($(this).text() == "미확인"){
							$(this).css("background", "rgba(255,0,0,0.7)");
						}
					});
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='iostorage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					// fail
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='iostorage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>데이터가 없습니다.</td></tr>");
				}
			}
		}
	});
}
$(document).on("click", "a.iostorage_all_page", function(){
	iostorage_list_page($(this).attr('id'));
});
function iostorage_list_page(page){
	var html = "";
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$('#iostorage_table tr:gt(0)').remove();
	$.ajax({
		url:"iostorage/search/list",
		type:"POST",
		cache:false,
		data : {"page" : requestpage},
		success:function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					// ok
					$('select[name=searchindex] option:eq(0)').prop("selected", true);
					$('input[name=searchinput]').val("");
					for(var i =0; i< data.list.length; i++){
						html += "<tr>";
						html += "<td>"+data.list[i].iostorageidx+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+data.list[i].trans_index+"</td>";
						html += "<td>"+data.list[i].busi_number+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].name+"</td>";
						html += "<td>"+data.list[i].inout+"</td>";
						html += "</tr>";
					}
					$('#iostorage_table > tbody:last').append(html);
					$('#iostorage_table td').each(function(i){
						if($(this).text() == "미확인"){
							$(this).css("background", "rgba(255,0,0,0.7)");
						}
					});
				}else{
					// fail
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='iostorage_all_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
					$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>데이터가 없습니다.</td></tr>");
				}
			}
		}
	});
}
// 입고, 출고 검색 버튼
function iostorage_list_index(index){
	var html = "";
	$('#iostorage_table tr:gt(0)').remove();
	$.ajax({
		url:"iostorage/search/listok",
		type:"POST",
		cache:false,
		data:{"index" : index},
		success:function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					// ok
					$('select[name=searchindex] option:eq(0)').prop("selected", true);
					$('input[name=searchinput]').val("");
					for(var i =0; i< data.list.length; i++){
						html += "<tr>";
						html += "<td>"+data.list[i].iostorageidx+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+data.list[i].trans_index+"</td>";
						html += "<td>"+data.list[i].busi_number+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].name+"</td>";
						html += "<td>"+data.list[i].inout+"</td>";
						html += "</tr>";
					}
					$('#iostorage_table > tbody:last').append(html);
					$('#iostorage_table td').each(function(i){
						if($(this).text() == "미확인"){
							$(this).css("background", "rgba(255,0,0,0.7)");
						}
					});
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='iostorage_index_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}else{
					// fail
					if(index == "입고"){
						$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>완료한 입고가 없습니다.</td></tr>");
					}else{
						$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>완료한 출고가 없습니다.</td></tr>");
					}
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='iostorage_index_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}
		}
	});
}
$(document).on("click", "a.iostorage_index_page", function(){
	iostorage_list_index_page($(this).attr('id'));
});
function iostorage_list_index_page(page){
	var html = "";
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	var index = $('#iostorage_table tr').eq(1).children().eq(7).text();
	$('#iostorage_table tr:gt(0)').remove();
	$.ajax({
		url:"iostorage/search/listok",
		type:"POST",
		cache:false,
		data:{"index" : index, "page" : requestpage},
		success:function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					// ok
					$('select[name=searchindex] option:eq(0)').prop("selected", true);
					$('input[name=searchinput]').val("");
					for(var i =0; i< data.list.length; i++){
						html += "<tr>";
						html += "<td>"+data.list[i].iostorageidx+"</td>";
						html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
						html += "<td>"+data.list[i].trans_code+"</td>";
						html += "<td>"+data.list[i].trans_index+"</td>";
						html += "<td>"+data.list[i].busi_number+"</td>";
						html += "<td>"+data.list[i].busi_name+"</td>";
						html += "<td>"+data.list[i].name+"</td>";
						html += "<td>"+data.list[i].inout+"</td>";
						html += "</tr>";
					}
					$('#iostorage_table > tbody:last').append(html);
					$('#iostorage_table td').each(function(i){
						if($(this).text() == "미확인"){
							$(this).css("background", "rgba(255,0,0,0.7)");
						}
					});
				}else{
					// fail
					if(index == "입고"){
						$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>완료한 입고가 없습니다.</td></tr>");
					}else{
						$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>완료한 출고가 없습니다.</td></tr>");
					}
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='iostorage_index_page'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			}
		}
	});
}
// 검색으로 찾기
function iostorage_list_searchbar(){
	var html = "";
	var searchword = "";
	var searchindex = "";
	searchword = $('input[name=searchinput]').val();
	searchindex = $('select[name=searchindex]').val();
	if(searchword == ""){
		alert('검색어를 입력해주세요.');
	}else{
		$('#iostorage_table tr:gt(0)').remove();
		
		$.ajax({
			url:"iostorage/search/listsearch",
			type:"POST",
			cache:false,
			data:{
					"searchword" : searchword,
					"searchindex" : searchindex
				},
			success:function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						// ok
						for(var i =0; i< data.list.length; i++){
							html += "<tr>";
							html += "<td>"+data.list[i].iostorageidx+"</td>";
							html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
							html += "<td>"+data.list[i].trans_code+"</td>";
							html += "<td>"+data.list[i].trans_index+"</td>";
							html += "<td>"+data.list[i].busi_number+"</td>";
							html += "<td>"+data.list[i].busi_name+"</td>";
							html += "<td>"+data.list[i].name+"</td>";
							html += "<td>"+data.list[i].inout+"</td>";
							html += "</tr>";
						}
						$('#iostorage_table > tbody:last').append(html);
						$('#iostorage_table td').each(function(i){
							if($(this).text() == "미확인"){
								$(this).css("background", "rgba(255,0,0,0.7)");
							}
						});
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='iostorage_search_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}else{
						// fail
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='iostorage_search_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
						$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>검색한 내용을 찾을 수 없습니다.</td></tr>");
					}
				}
			}
		});
	}
}
$(document).on("click", "a.iostorage_search_page", function(){
	iostorage_list_searchbar_page($(this).attr('id'));
});
function iostorage_list_searchbar_page(page){
	var html = "";
	var searchword = "";
	var searchindex = "";
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	searchword = $('input[name=searchinput]').val();
	searchindex = $('select[name=searchindex]').val();
	if(searchword == ""){
		alert('검색어를 입력해주세요.');
	}else{
		$('#iostorage_table tr:gt(0)').remove();
		
		$.ajax({
			url:"iostorage/search/listsearch",
			type:"POST",
			cache:false,
			data:{
					"searchword" : searchword,
					"searchindex" : searchindex,
					"page" : requestpage
				},
			success:function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						// ok
						for(var i =0; i< data.list.length; i++){
							html += "<tr>";
							html += "<td>"+data.list[i].iostorageidx+"</td>";
							html += "<td>"+dateConvert(data.list[i].trans_date)+"</td>";
							html += "<td>"+data.list[i].trans_code+"</td>";
							html += "<td>"+data.list[i].trans_index+"</td>";
							html += "<td>"+data.list[i].busi_number+"</td>";
							html += "<td>"+data.list[i].busi_name+"</td>";
							html += "<td>"+data.list[i].name+"</td>";
							html += "<td>"+data.list[i].inout+"</td>";
							html += "</tr>";
						}
						$('#iostorage_table > tbody:last').append(html);
						$('#iostorage_table td').each(function(i){
							if($(this).text() == "미확인"){
								$(this).css("background", "rgba(255,0,0,0.7)");
							}
						});
					}else{
						// fail
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='iostorage_search_page'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
						$('#iostorage_table > tbody:last').append("<tr><td colspan='8'>검색한 내용을 찾을 수 없습니다.</td></tr>");
					}
				}
			}
		});
	}
}




// 상세보기
$(document).on('click','#iostorage_table tr:gt(0)', function(){
	var trans_code = $(this).children().eq(2).text(); //거래코드
	var index = trans_code.slice(0, 2);
	var html = "";
	$('#iostorage_Detail_item tr:gt(0)').remove();
	$('#iostorage_Detail').css("display", "block");
	//내용 추가
	if(index == "구매"){
		$('#handle_iostorage_Detail span').text(trans_code + " 입고 내역서");
		$('#iostorage_Detail h3').text("입고 내역서");
	}else{
		$('#handle_iostorage_Detail span').text(trans_code + " 출고 내역서");
		$('#iostorage_Detail h3').text("출고 내역서");
	}
	if($(this).children().eq(7).text() == "입고" || $(this).children().eq(7).text() == "출고"){
		$('#action_bt').hide();
	}else{
		$('#action_bt').show();
	}
	$.ajax({
		url:"transitem/selectbycashlog",
		type:"POST",
		cache:false,
		data:{
			"trans_code" : trans_code
		},
		success:function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					//ok
					for(var i =0; i< data.list.length; i++){
						html += "<tr>";
						html += "<td>"+data.list[i].item_code+"</td>";
						html += "<td>"+data.list[i].item_category+"</td>";
						html += "<td>"+data.list[i].item_name+"</td>";
						html += "<td>"+data.list[i].cash_cnt+"</td>";
						html += "</tr>";
					}
					$('#iostorage_Detail_item > tbody:last').append(html);
				}else{
					//fail
				}
			}
		}
	});
});
$(document).on("mouseenter", "#iostorage_Detail", function(){
	$( "#iostorage_Detail" ).draggable({ handle: "div#handle_iostorage_Detail" });
});
function bt_iostorage_close(){
	$('#iostorage_Detail_item tr:gt(0)').remove();
	$('#iostorage_Detail').css("display", "none");
}

function bt_iostorage_inout(){
	var trans_code = $('#iostorage_Detail span').text().slice(0 , -6).trim();
	var index = $('#iostorage_Detail span').text().substr(0,2);
	$.ajax({
		url:"iostorage/inout",
		type:"POST",
		cache:false,
		data:{"trans_code" : trans_code, "trans_index" : index},
		success: function(data, status){
			if(status == "success"){
				if(data.state == "ok"){
					bt_iostorage_close();
					iostorage_list();
				}else{
					alert(data.state);
				}
			}else{
				
			}
		}
	});
}

//회원 정보
function com_employee_information(){//정보
	Employee_table_list();
	$("#r_container").load('html/right_employee #employee_information, #detail_employee_information');
}

//회원 정보 가져오기 [ 전체 ]
function Employee_table_list() {
	var page;
	var html ="";
	$.ajax({
		url : "member/allselect",
		cache : false,
		type : "POST",
		success : function(data, status) {
			if (status == "success") {
				if (data.state == "ok") {
					$('table#employee_information_list_table tr:gt(0)').remove();
					for(var i= 0; i < data.list.length; i++){
						if(data.list[i].grantidx != '퇴직'){
							html += "<tr id='"+data.list[i].memidx+"'>";
							html += "<td>"+data.list[i].rnum+"</td>";
							html += "<td>"+data.list[i].rankidx+"</td>";
							html += "<td>"+data.list[i].partidx+"</td>";
							html += "<td>"+data.list[i].name+"</td>";
							html += "<td>"+data.list[i].grantidx+"</td>";
							if(data.list[i].grantidx == "대기"){
								html += "<td><button onclick='acceptmember("+data.list[i].memidx+")'>승인</button></td>";
							}else{
								html += "<td>승인완료</td>";
							}
							html += "</tr>";
						}
					}
					$("table#employee_information_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='page_full'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				} else {
					$("table#employee_information_list_table > tbody:last").append("<tr><td colspan='6'>회원 정보가 존재하지 않습니다.</td></tr>");
				}
			} else {
				
			}
		}
	});
}
$(document).on("click", "a.page_full", function(){
	//$(this).attr('id') 페이지 수 
	Employee_table_list_page($(this).attr('id'));
});
function Employee_table_list_page(page) {
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	var html ="";
	$.ajax({
		url : "member/allselect",
		cache : false,
		type : "POST",
		data : {"page" : requestpage},
		success : function(data, status) {
			if (status == "success") {
				if (data.state == "ok") {
					$('table#employee_information_list_table tr:gt(0)').remove();
					for(var i= 0; i < data.list.length; i++){
						if(data.list[i].grantidx != '퇴직'){
							html += "<tr id='"+data.list[i].memidx+"'>";
							html += "<td>"+data.list[i].rnum+"</td>";
							html += "<td>"+data.list[i].rankidx+"</td>";
							html += "<td>"+data.list[i].partidx+"</td>";
							html += "<td>"+data.list[i].name+"</td>";
							html += "<td>"+data.list[i].grantidx+"</td>";
							if(data.list[i].grantidx == "대기"){
								html += "<td><button onclick='acceptmember("+data.list[i].memidx+")'>승인</button></td>";
							}else{
								html += "<td>승인완료</td>";
							}
							html += "</tr>";
						}
					}
					$("table#employee_information_list_table > tbody:last").append(html);
				} else {
					$("table#employee_information_list_table > tbody:last").append("<tr><td colspan='6'>회원 정보가 존재하지 않습니다.</td></tr>");
				}
			} else {
				
			}
		}
	});
}
// 회원 정보 셀렉터 가져오기
$(document).on("change", "select#grant_select", function(){
	var requestpage = "1";
	$('table#employee_information_list_table tr:gt(0)').remove();
	$('select#member_index_select option:eq(0)').prop("selected", true);
	$('div.pagination').html("");
	$('input#member_search_input').val("");
	if($(this).val() != "all"){
		var html ="";
		var url = "";
		if($(this).val() == "accept"){
			url = "member/selectorbymember2";
		}else{
			url = "member/selectorbymember1";
		}
		$.ajax({
			url : url,
			cache : false,
			type : "POST",
			data : {"page" : requestpage},
			success : function(data, status) {
				if (status == "success") {
					if (data.state == "ok") {
						$('table#employee_information_list_table tr:gt(0)').remove();
						for(var i= 0; i < data.list.length; i++){
							if(data.list[i].grantidx != '퇴직'){
								html += "<tr id='"+data.list[i].memidx+"'>";
								html += "<td>"+data.list[i].rnum+"</td>";
								html += "<td>"+data.list[i].rankidx+"</td>";
								html += "<td>"+data.list[i].partidx+"</td>";
								html += "<td>"+data.list[i].name+"</td>";
								html += "<td>"+data.list[i].grantidx+"</td>";
								if(data.list[i].grantidx == "대기"){
									html += "<td><button onclick='acceptmember("+data.list[i].memidx+")'>승인</button></td>";
								}else{
									html += "<td>승인완료</td>";
								}
								html += "</tr>";
							}
						}
						$("table#employee_information_list_table > tbody:last").append(html);
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='page_accept'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					} else {
						$("table#employee_information_list_table > tbody:last").append("<tr><td colspan='6'>회원 정보가 존재하지 않습니다.</td></tr>");
						var pageing = "";
						for(var i = 0 ; i < data.cnt; i++){
							pageing += "<a id='"+(i+1)+"' class='page_accept'> " + (i+1) + " </a>";
						}
						$('div.pagination').html(pageing);
					}
				} else {

				}
			}
		});
	}else{
		Employee_table_list();
	}
});

function selector_grant(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$('table#employee_information_list_table tr:gt(0)').remove();
	$('select#member_index_select option:eq(0)').prop("selected", true);
	$('input#member_search_input').val("");
	
	if($('select#grant_select').val() != "all"){
		var html ="";
		var url = "";
		if($('select#grant_select').val() == "accept"){
			url = "member/selectorbymember2";
		}else{
			url = "member/selectorbymember1";
		}
		$.ajax({
			url : url,
			cache : false,
			type : "POST",
			data : {"page" : requestpage},
			success : function(data, status) {
				if (status == "success") {
					if (data.state == "ok") {
						$('table#employee_information_list_table tr:gt(0)').remove();
						for(var i= 0; i < data.list.length; i++){
							if(data.list[i].grantidx != '퇴직'){
								html += "<tr id='"+data.list[i].memidx+"'>";
								html += "<td>"+data.list[i].rnum+"</td>";
								html += "<td>"+data.list[i].rankidx+"</td>";
								html += "<td>"+data.list[i].partidx+"</td>";
								html += "<td>"+data.list[i].name+"</td>";
								html += "<td>"+data.list[i].grantidx+"</td>";
								if(data.list[i].grantidx == "대기"){
									html += "<td><button onclick='acceptmember("+data.list[i].memidx+")'>승인</button></td>";
								}else{
									html += "<td>승인완료</td>";
								}
								html += "</tr>";
							}
						}
						$("table#employee_information_list_table > tbody:last").append(html);
					} else {
						$("table#employee_information_list_table > tbody:last").append("<tr><td colspan='6'>회원 정보가 존재하지 않습니다.</td></tr>");
					}
				} else {

				}
			}
		});
	}else{
		Employee_table_list();
	}
}

$(document).on("click", ".page_accept", function(){
	selector_grant($(this).attr('id'));
});

// 검색버튼으로 회원정보 가져오기
function member_search_input_bt_action(){
	var requestpage = "1";
	$('table#employee_information_list_table tr:gt(0)').remove();
	var html ="";
	$.ajax({
		url : "member/search/findstring",
		cache : false,
		type : "POST",
		data : {
			"index" : $('select#member_index_select').val(),
			"searchword" : $('input#member_search_input').val(),
			"page" : requestpage
		},
		success : function(data, status) {
			if (status == "success") {
				if (data.state == "ok") {
					$('select#grant_select option:eq(0)').prop("selected", true);
					for(var i= 0; i < data.list.length; i++){
						if(data.list[i].grantidx != '퇴직'){
							html += "<tr id='"+data.list[i].memidx+"'>";
							html += "<td>"+data.list[i].rnum+"</td>";
							html += "<td>"+data.list[i].rankidx+"</td>";
							html += "<td>"+data.list[i].partidx+"</td>";
							html += "<td>"+data.list[i].name+"</td>";
							html += "<td>"+data.list[i].grantidx+"</td>";
							if(data.list[i].grantidx == "대기"){
								html += "<td><button onclick='acceptmember("+data.list[i].memidx+")'>승인</button></td>";
							}else{
								html += "<td>승인완료</td>";
							}
							html += "</tr>";
						}
					}
					$("table#employee_information_list_table > tbody:last").append(html);
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='page_input_search'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				} else {
					$("table#employee_information_list_table > tbody:last").append("<tr><td colspan='6'>회원 정보가 존재하지 않습니다.</td></tr>");
					var pageing = "";
					for(var i = 0 ; i < data.cnt; i++){
						pageing += "<a id='"+(i+1)+"' class='page_input_search'> " + (i+1) + " </a>";
					}
					$('div.pagination').html(pageing);
				}
			} else {
				
			}
		}
	});
}
$(document).on("click", "a.page_input_search", function(){
	input_search_page($(this).attr('id'));
});
function input_search_page(page){
	var requestpage = "1";
	if(page != "1"){
		requestpage = page;
	}
	$('table#employee_information_list_table tr:gt(0)').remove();
	var html ="";
	$.ajax({
		url : "member/search/findstring",
		cache : false,
		type : "POST",
		data : {
			"index" : $('select#member_index_select').val(),
			"searchword" : $('input#member_search_input').val(),
			"page" : requestpage
		},
		success : function(data, status) {
			if (status == "success") {
				if (data.state == "ok") {
					$('select#grant_select option:eq(0)').prop("selected", true);
					for(var i= 0; i < data.list.length; i++){
						if(data.list[i].grantidx != '퇴직'){
							html += "<tr id='"+data.list[i].memidx+"'>";
							html += "<td>"+data.list[i].rnum+"</td>";
							html += "<td>"+data.list[i].rankidx+"</td>";
							html += "<td>"+data.list[i].partidx+"</td>";
							html += "<td>"+data.list[i].name+"</td>";
							html += "<td>"+data.list[i].grantidx+"</td>";
							if(data.list[i].grantidx == "대기"){
								html += "<td><button onclick='acceptmember("+data.list[i].memidx+")'>승인</button></td>";
							}else{
								html += "<td>승인완료</td>";
							}
							html += "</tr>";
						}
					}
					$("table#employee_information_list_table > tbody:last").append(html);
				} else {
					$("table#employee_information_list_table > tbody:last").append("<tr><td colspan='6'>회원 정보가 존재하지 않습니다.</td></tr>");
				}
			} else {
				
			}
		}
	});
}

// 회원정보 상세 보기
$(document).on("click", "table#employee_information_list_table tr:gt(0)", function(){
	$('#detail_employee_information').css("display", "block");
	$('#detail_employee_information').load('html/right_employee #layout_employee');
	//memberDetailSearch($(this).children().eq(0).text());
	memberDetailSearch($(this).attr('id'));
});
// 회원 정보 상세 검색
function memberDetailSearch(memidx){
	var html ="";
	var	cashing="";
	$.ajax({
		url : "member/allselect",
		cache : false,
		type : "POST",
		data : {"memidx" : memidx},
		success : function(data, status) {
			if (status == "success") {
				if (data.state == "ok") {
					$('td#detail_memidx').text(data.list[0].memidx);
					$('input[name=detail_id]').val(data.list[0].id);
					$('input[name=detail_pw]').val(data.list[0].pw);
					$('input[name=detail_name]').val(data.list[0].name);
					$('input[name=detail_phonenum]').val(data.list[0].phonenum);
					$('input[name=datail_email]').val(data.list[0].email);
					$('td#detail_birthday').text(dateConvert(data.list[0].birthday));
					$('td#detail_joindate').text(dateConvert(data.list[0].joindate));
					$("select[name=gender] option:eq("+(data.list[0].gender-1)+")").prop("selected", true);
					$("select[name=partidx] option").each(function(i){
						if($("select[name=partidx] option:eq("+i+")").text() == data.list[0].partidx){
							$("select[name=partidx] option:eq("+i+")").prop("selected", true);
						}
					});
					$("select[name=rankidx] option").each(function(i){
						if($("select[name=rankidx] option:eq("+i+")").text() == data.list[0].rankidx){
							$("select[name=rankidx] option:eq("+i+")").prop("selected", true);
						}
					});
					$("select[name=grantidx] option").each(function(i){
						if($("select[name=grantidx] option:eq("+i+")").text() == data.list[0].grantidx){
							$("select[name=grantidx] option:eq("+i+")").prop("selected", true);
						}
					});
				} else {
					
				}
			} else {

			}
		}
	});
}

// 드래그 핸들러
$(document).on("mouseenter", "#handle_employee_detail", function(){
	$("#detail_employee_information").draggable({ handle: "div#handle_employee_detail" });
});
// 회원정보 상세 닫기
$(document).on("click", "#employee_close_btn", function(){
	$('#detail_employee_information').css("display", "none");
	$('#member_detail_view tr:gt(0)').remove();
});
// 가입 승인
function acceptmember(memidx){
	if(confirm('승인 변경 하시겠습니까?')){
		$.ajax({
			url:"member/accept",
			type:"POST",
			cache:false,
			data: {"memidx" : memidx},
			success: function(data, status){
				if(status == "success"){
					if(data.state == "ok"){
						$('table#employee_information_list_table tr:gt(0)').remove();
						Employee_table_list();
					}else{
						
					}
				}
			}
		});
	}else{
		
	}
	setTimeout(function() {
		$('#detail_employee_information').css("display", "none");
		$('#member_detail_view tr:gt(0)').remove();
	}, 5);
}

//회원 정보 수정(관리자)
function em_datail_modify_btn(){
	var memidx = $('td#detail_memidx').text();
	$.ajax({
		url: "member/select/modify",
		cache: false,
		type: "POST",
		data:{
			"memidx":  memidx,
			"grantidx": parseInt($('select[name=grantidx]').val()),
			"partidx": parseInt($('select[name=partidx]').val()),
			"rankidx": parseInt($('select[name=rankidx]').val()),
			"id": $('input[name=detail_id]').val(),
			"pw": $('input[name=detail_pw]').val(),
			"name": $('input[name=detail_name]').val(),
			"phonenum": $('input[name=detail_phonenum]').val(),
			"email": $('input[name=datail_email]').val()
		},success: function(data, status){
			if(status=="success"){
				if(data.state=="ok"){
					alert('변경 성공');
					$('#detail_employee_information').css("display", "none");
					$("#layout_employee").html("");
					$('table#employee_information_list_table tr:gt(0)').remove();
					Employee_table_list();
				}else{
					
				}
			}else{
				
			}
			
			
		}
	});
}

//초기화 버튼
function em_datail_reset_btn(){
	var memidx = $('td#detail_memidx').text();
	memberDetailSearch(memidx);
}

//삭제 버튼
function em_datail_delete_btn(){
	var memidx = $('td#detail_memidx').text();
	$.ajax({
		url: "member/select/delete",
		type: "POST",
		cache: false,
		data:{"memidx": memidx},
		success: function(data, status){
			if(status=="success"){
				if(data.state=="ok"){
					alert("삭제하였습니다.");
					$('#detail_employee_information').css("display", "none");
					$("#layout_employee").html("");
					$('table#employee_information_list_table tr:gt(0)').remove();
					Employee_table_list();
				}else{
					alert(data.state);
				}	
			
			}else{
					
				}
			}
	});
}



//전체 선택 기능 작업 중 !!!!!
$(document).on("change", "#trans_all_check", function(){
	var i = 0;
	console.log($('input[name=check]'));
	if($(this).is(':checked')){
	}else{
	}
});





