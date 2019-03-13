package com.project.springproject.beans;

import java.util.ArrayList;

import com.project.springproject.trans.beans.TransDTO;

public interface IOStorageDAO {
	// 결제완료 리스트 전달 받기
	public int IOStorageADD(TransDTO dto);
	
	// 테이블 출력(전체)
	public ArrayList<IOStorageDTO> IOStorageListAll_page(String page);
	public int IOStorageListAll_totalpage();
	// 테이블 출력(확인), 테이블 출력(미확인)
	public ArrayList<IOStorageDTO> IOStorageListIndex_page(String index, String page);
	public int IOStorageListIndex_totalpage(String index);
	// 테이블 출력(검색)
	public ArrayList<IOStorageDTO> IOStorageListsearchByTranscode_page(String searchindex, String searchword, String page);
	public int IOStorageListsearchByTranscode_totalpage(String searchindex, String searchword);
	public ArrayList<IOStorageDTO> IOStorageListsearchByBusiNumber_page(String searchindex, String searchword, String page);
	public int IOStorageListsearchByBusiNumber_totalpage(String searchindex, String searchword);
	public ArrayList<IOStorageDTO> IOStorageListsearchByBusiName_page(String searchindex, String searchword, String page);
	public int IOStorageListsearchByBusiName_totalpage(String searchindex, String searchword);
	public ArrayList<IOStorageDTO> IOStorageListsearchByName_page(String searchindex, String searchword, String page);
	public int IOStorageListsearchByName_totalpage(String searchindex, String searchword);
	
	// 입출고처리
	public int Updateinout(String inout, String trans_code);
	
	// 담당자 결제 확인
	public ArrayList<IOStorageDTO> Delete_User_IOStorage_confirm(String memidx);
	
	public ArrayList<IOStorageDTO> unconfirmlist();
}
