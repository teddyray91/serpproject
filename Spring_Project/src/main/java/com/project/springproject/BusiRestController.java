package com.project.springproject;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.business.beans.BusiDAO;
import com.project.springproject.business.beans.BusiDTO;
import com.project.springproject.business.beans.BusiResult;
import com.project.springproject.command.BusiDataRemove;


@RestController
@RequestMapping(value="/trans")
public class BusiRestController {
	
	// 추가
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public BusiResult add(BusiDTO dto) {
		BusiResult result = new BusiResult();
		BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
		int temp = 0;
		temp = dao.transadd(dto);
		if(temp > 0) {
			result.setState("ok");
			result.setCnt(temp);
		}else {
			result.setState("fail");
			result.setCnt(temp);
		}
		return result;
	}
	// 삭제
	@RequestMapping(value = "/remove", method = RequestMethod.GET)
	public String remove() {
		
		return "member/joinok";
	}
	// 조회
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public BusiResult list(BusiDTO dto, String page) {
		BusiResult result = new BusiResult();
		BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
		int total =0;
		int temp = 0;
		ArrayList<BusiDTO> list = new ArrayList<>();
		if(dto.getBusi_number() == null) {
			if(page == null) {
				page = "1";
			}
			list = dao.translist_page(page);
			total = dao.translist_totalpage();
			temp = list.size();
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(total);
				result.setList(list);
			}else {
				result.setState("fail");
				result.setCnt(total);
				result.setList(list);
			}
		}else {
			list= dao.transselect(dto);
			temp=list.size();
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
				result.setList(list);
			}else {
				result.setState("fail");
				result.setCnt(temp);
				result.setList(list);
			}
		}
		return result;
			
		}
	
	//사업자 번호 조회기
	@RequestMapping(value="/likelist", method=RequestMethod.GET)
	public BusiResult likelist(String busi_number) {
		BusiResult result = new BusiResult();
		BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
		int temp = 0;
		ArrayList<BusiDTO> list = new ArrayList<>();
		list = dao.translikeselect(busi_number);
		
		temp = list.size();
		if(temp>0) {
			result.setState("ok");
			result.setCnt(temp);
			result.setList(list);
		}else {
			result.setState("fail");
			result.setCnt(temp);
			result.setList(list);
		}
		
		
		return result;
	}
		
	// 거래처 정보 수정
		@RequestMapping(value = "/modify", method = RequestMethod.POST)
		public BusiResult modify(BusiDTO dto) {
			BusiResult result = new BusiResult();
			BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
			int temp = 0;
			temp = dao.transmodify(dto);
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(temp);
			}else {
				result.setState("fail");
				result.setCnt(temp);
			}
			return result;
		}
	// 거래처 삭제
		@RequestMapping(value = "/delete", method= {RequestMethod.GET, RequestMethod.POST})
		public BusiResult delete(String[] busi_number) {
			BusiResult result = new BusiResult();
			System.out.println(Arrays.toString(busi_number));
			if(busi_number.length == 1) {
				//단일
				System.out.println(Arrays.toString(busi_number));
				if(BusiDataRemove.BusiBackup(busi_number) > 0) {
					// 삭제
					BusiDataRemove.BusiDelete(busi_number);
					result.setState("ok");
				}else {
					// PASS
					result.setState("fail");
				}
			}else {
				//복수
				System.out.println("복수");
				if(BusiDataRemove.BusiBackup(busi_number) > 0) {
					// 삭제
					BusiDataRemove.BusiDelete(busi_number);
					result.setState("ok");
				}else {
					// PASS
					result.setState("fail");
				}
			}
			
			return result;
		}
	// (농장) 또는 (마트) 선택 시 리스트 출력
			@RequestMapping(value= "/selectlist", method = RequestMethod.POST)
			public BusiResult selectlist(BusiDTO dto, String page) {
				BusiResult result = new BusiResult();
				BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
				int temp = 0;
				int total = 0;
				ArrayList<BusiDTO> list = new ArrayList<>();
				if(page == null) {
					page = "1";
				}
				if(dto.getBusi_index() != null) {
					if(dto.getBusi_index().equals("농장")) {
						list = dao.transselectfarmlist_page(dto.getBusi_index(), page);
						total = dao.transselectfarmlist_totalpage(dto.getBusi_index());
						temp = list.size();
					}
					else if(dto.getBusi_index().equals("마트")) {
						list = dao.transselectmartlist_page(dto.getBusi_index(), page);
						total = dao.transselectmartlist_totalpage(dto.getBusi_index());
						temp = list.size();
					}else {
						list = dao.translist_page(page);
						total = dao.translist_totalpage();
						temp = list.size();
					}
				}
				if(temp > 0) {
					result.setState("ok");
					result.setCnt(total);
					result.setList(list);
				}else {
					result.setState("fail");
					result.setCnt(total);
					result.setList(list);
				}
				
				return result;
			}


	// 선택 검색 하기
		@RequestMapping(value="/searchoptionlist", method = RequestMethod.POST)
		public BusiResult searchoptionlist(String searchoption, String searchvalue, String page) {
			BusiResult result = new BusiResult();
			BusiDAO dao = Session.sqlSession.getMapper(BusiDAO.class);
			int total = 0;
			int temp = 0;
			if(page == null) {
				page = "1";
			}
			ArrayList<BusiDTO> list = new ArrayList<>();
			if(searchoption.equals("busi_number")) {
				list = dao.transselect_businumber_page(searchvalue, page);
				total = dao.transselect_businumber_totalpage(searchvalue);
			}
			else if(searchoption.equals("busi_owner")) {
				list = dao.transselect_busiowner_page(searchvalue, page);
				total = dao.transselect_busiowner_totalpage(searchvalue);
			}else {
				list = dao.transselect_businame_page(searchvalue, page);
				total = dao.transselect_businame_totalpage(searchvalue);
			}
			temp = list.size();
			if(temp > 0) {
				result.setState("ok");
				result.setCnt(total);
				result.setList(list);
			}else {
				result.setState("fail");
				result.setCnt(total);
				result.setList(list);
			}
			return result;
		}
}
