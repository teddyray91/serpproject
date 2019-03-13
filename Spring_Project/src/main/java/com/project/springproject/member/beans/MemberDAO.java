package com.project.springproject.member.beans;

import java.util.ArrayList;

public interface MemberDAO {
	public int JoinCommit(MemberDTO dto);
	public ArrayList<MemberLoginDTO> login(String id, String pw);
	public ArrayList<MemberDTO> SelectByID(String id, String email);
	public int oneUserModify(MemberDTO dto);
	public int selectID(String id);

	public ArrayList<MemberDTO> allSelectpaging(String memidx, String page);
	public int allSelecttotalpaging(String memidx);
	public ArrayList<MemberDTO> selectorbymember1_page(String page);
	public int selectorbymember1_totalpage();
	public ArrayList<MemberDTO> selectorbymember2_page(String page);
	public int selectorbymember2_totalpage();
	
	public int selectempModify(MemberDTO dto);//선택 회원 정보 수정
	public int selectempDelete(MemberDTO dto);//선택 회원 정보 삭제
	public int MemberAccept(String memidx);
	
	//index 별로 검색하기
	public ArrayList<MemberDTO> partSelectList_page(String searchword, String page);
	public int partSelectList_totalpage(String searchword);
	
	public ArrayList<MemberDTO> rankSelectList_page(String searchword, String page);
	public int rankSelectList_totalpage(String searchword);
	
	public ArrayList<MemberDTO> nameSelectList_page(String searchword, String page);
	public int nameSelectList_totalpage(String searchword);
	
	// 아이디 비밀번호 찾기 서비스
	public ArrayList<MemberDTO> searchfindid(MemberDTO dto);
	public ArrayList<MemberDTO> searchfindpw(MemberDTO dto);
	
	// 메인화면 미승인자 리스트
	public ArrayList<MemberDTO> unconfmemberlist();
	
}
