package com.project.springproject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/html")
public class JsloadController {
	// 왼쪽 메뉴 조립 HTML
	@RequestMapping("/side_navi")
	public String SideNavigator() {
		return "html/side_navi";
	}
	// 오른쪽 컨텐츠 조립 HTML[거래처]
	@RequestMapping("/right_trans")
	public String RightTransContent() {
		return "html/right_trans_content";
	}
	// 오른쪽 컨텐츠 조립 HTML[재고]
	@RequestMapping("/right_item")
	public String RightItemContent() {
		return "html/right_item_content";
	}
	// 회사정보 조립 HTML
	@RequestMapping("/right_cominform")
	public String RightComInformContent() {
		return "html/right_cominform_content";
	}
	// 재고, 제품코드 HTML 조립
	@RequestMapping("/right_storage")
	public String RightStorageConent() {
		return "html/right_storage_content";
	}
	@RequestMapping("/right_allstorage")
	public String RightallStorageContent() {
		return "html/right_allstorage_content";
	}
	@RequestMapping("/right_employee")
	public String RightEmployeeContent() {
		return "html/right_employee_content";
	}
	//NAVI 호출
	@RequestMapping(value="/navi")
	public String navi() {
		return "home/headnav";
	}
	//FOOTER CALL
	@RequestMapping(value="/footer")
	public String footer() {
		return "home/footer";
	}
}
