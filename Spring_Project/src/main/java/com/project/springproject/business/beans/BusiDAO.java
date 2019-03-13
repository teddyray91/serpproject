package com.project.springproject.business.beans;

import java.util.ArrayList;

public interface BusiDAO {
	public int transadd(BusiDTO dto);
	
	public ArrayList<BusiDTO> translist();
	public ArrayList<BusiDTO> translist_page(String page);
	public int translist_totalpage();
	
	public ArrayList<BusiDTO> transselect(BusiDTO dto);
	
	public ArrayList<BusiDTO> translikeselect(String busi_number);
	public int transmodify(BusiDTO dto);
	// 백업
	public int transbackup(String busi_number);
	// 삭제
	public int BusiDelete(String busi_number);
	// 농장, 마트 선택하여 리스트 출력
	public ArrayList<BusiDTO> transselectfarmlist_page(String index, String page);
	public int transselectfarmlist_totalpage(String index);
	public ArrayList<BusiDTO> transselectmartlist_page(String index, String page);
	public int transselectmartlist_totalpage(String index);

	// 검색 (사업자번호, 사업장명, 대표자) 등 3개 
	public ArrayList<BusiDTO> transselect_businumber_page(String busi_number, String page);
	public int transselect_businumber_totalpage(String busi_number);
	
	public ArrayList<BusiDTO> transselect_businame_page(String busi_name, String page);
	public int transselect_businame_totalpage(String busi_name);
	
	public ArrayList<BusiDTO> transselect_busiowner_page(String busi_owner, String page);
	public int transselect_busiowner_totalpage(String busi_owner);
	
}
