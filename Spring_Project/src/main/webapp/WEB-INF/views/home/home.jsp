<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>team1 Project HOME</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/jquery-ui/jquery-ui.min.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/fontawesome/css/all.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/bootstrap-3.3.2/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/resources/css/home.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/bootstrap-3.3.2/js/bootstrap.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/js/home.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resources/js/action.js"></script>
</head>
<body>
<jsp:include page="/html/navi"/>
<!-- Content START -->
<div id="l_content">
	<div id="l_container">
	</div>
</div>
<div id="r_content">
	<div id="r_container">
	</div>
</div>
<div id="content">
	<div id="c_container">
		<button class='btn btn-default main_bt_dropdown' id='bt_main1'>
		<p align="left" style="display:inline-block; float: left;">
		<i class='fas fa-align-justify fa-fw'></i>
		</p>
		매출현황
		</button>
		<div id ='main_content1'>
			<div id='graphy'>
			<table>
			<tr>
				<td></td>
			</tr>
			<tr>
				<td></td>
			</tr>
			<tr>
				<td></td>
			</tr>
			</table>
			</div>
			<div id='graphx'>
				<table id='graphx_table'>
				<tr>
					<td class='g_month'></td>
					<td class='g_month'>1월</td>
					<td class='g_month'>2월</td>
					<td class='g_month'>3월</td>
					<td class='g_month'>4월</td>
					<td class='g_month'>5월</td>
					<td class='g_month'>6월</td>
					<td class='g_month'>7월</td>
					<td class='g_month'>8월</td>
					<td class='g_month'>9월</td>
					<td class='g_month'>10월</td>
					<td class='g_month'>11월</td>
					<td class='g_month'>12월</td>
					<td class='g_month'></td>
				</tr>
				</table>				
			</div>
			<div id='selectorgraph'>
				<div style="line-height: 25px; padding: 0; margin: 0;">
				<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
				<p style="display: inline-block;">구매(결제완료)</p>
				</div>
				<div style="line-height: 25px; padding: 0; margin: 0;">
				<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
				<p style="display: inline-block;">판매(결제완료)</p>
				</div>
				<div style="line-height: 25px; padding: 0; margin: 0;">
				<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
				<p style="display: inline-block;">미결제</p>
				</div>
			</div>
			<div id='totalcnt'>
				<div id='1m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='2m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='3m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='4m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='5m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='6m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='7m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='8m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='9m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='10m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='11m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
				<div id='12m' style='color:white'>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #4CAF50; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #2296F3; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
					<div style="line-height: 25px; padding: 0; margin: 0;">
					<div style="background: #00bcd4; width:15px; height:15px; margin:0; margin-top:15px; margin-left:5px; display: inline-block;"></div>
					<p style="display: inline-block;"></p>
					</div>
				</div>
			</div>
			<div id='trans_graph' align="center">
				<ul class="ratio" style="text-align: center;">
					<li><div class='1mg' id='1mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='1mg' id='1msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='1mg' id='1muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='2mg' id='2mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='2mg' id='2msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='2mg' id='2muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='3mg' id='3mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='3mg' id='3msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='3mg' id='3muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='4mg' id='4mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='4mg' id='4msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='4mg' id='4muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='5mg' id='5mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='5mg' id='5msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='5mg' id='5muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='6mg' id='6mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='6mg' id='6msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='6mg' id='6muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='7mg' id='7mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='7mg' id='7msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='7mg' id='7muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='8mg' id='8mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='8mg' id='8msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='8mg' id='8muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='9mg' id='9mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='9mg' id='9msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='9mg' id='9muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='10mg' id='10mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='10mg' id='10msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='10mg' id='10muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='11mg' id='11mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='11mg' id='11msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='11mg' id='11muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
					<li class='graphblock'></li>
					<li><div class='12mg' id='12mbuy' style="width: 25px; height:0%; background-color: #4CAF50;"></div></li>
					<li><div class='12mg' id='12msell' style="width: 25px; height:0%; background-color: #2296F3;"></div></li>
					<li><div class='12mg' id='12muncon' style="width: 25px; height:0%; background-color: #00bcd4;"></div></li>
				</ul>
			</div>
		</div>
		<div id='main_layout_lr'>
			<div id ='main_content_l'>
				<button class='btn btn-default main_bt_dropdown' style="min-width:540px;" id='bt_main2'>
				<p align="left" style="display:inline-block; float: left;">
				<i class='fas fa-align-justify fa-fw'></i>
				</p>
				미승인내역
				</button>
				<div id='content_unconfirm_list'>
					<table id="table_unconfirm_list" class='table table-hover'>
						
					</table>
				</div>
			</div>
			<div id ='main_content_r'>
				<button class='btn btn-default main_bt_dropdown' style="min-width:540px;" id='bt_main3'>
				<p align="left" style="display:inline-block; float: left;">
				<i class='fas fa-align-justify fa-fw'></i>
				</p>
				최근결제내역
				</button>
				<div id='last_confirm_list'>
					<table id="table_confirm_list" class='table table-hover'>
						
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 사용자 변경 틀입니다. -->
<div id='member_modify'>
	<div id='modify_layout'>
	
	</div>
</div>
<!-- 상세보기 -->
<div id='Detail_View'>
	
</div>
<!-- Content END -->
<jsp:include page="/html/footer"/>
</body>
</html>