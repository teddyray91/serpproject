package com.project.springproject;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.springproject.beans.IOStorageDAO;
import com.project.springproject.beans.IOStorageDTO;
import com.project.springproject.member.beans.MemberDAO;
import com.project.springproject.member.beans.MemberDTO;
import com.project.springproject.member.beans.MemberResult;
import com.project.springproject.trans.beans.TransAndCashLogDAO;
import com.project.springproject.trans.beans.TransDTO;


@RestController
@RequestMapping(value="/member")
public class MemberRestController {
	// 회원 가입
	@RequestMapping(value="/joincommit", method = RequestMethod.POST)
	public MemberResult memberJoin(MemberDTO dto) {
		MemberResult result = new MemberResult();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		int cnt = 0;
		cnt = dao.JoinCommit(dto);
		if(cnt > 0) {
			result.setCnt(cnt);
			result.setState("ok");
		}else {
			result.setCnt(cnt);
			result.setState("fail");
		}
		return result;
	}
	// 개인정보(1유저) 가지고 오기
	@RequestMapping(value="/SelectUser")
	public MemberResult SelectUser(HttpSession session) {
		MemberResult result = new MemberResult();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		ArrayList<MemberDTO> list = new ArrayList<>(); 
		String auth = (String)session.getAttribute("auth");
		String email = (String)session.getAttribute("email");
		String id = (String)session.getAttribute("id");
		if(auth == null) {
			result.setState("fail");
			return result;
		}else {
			list = dao.SelectByID(id, email);
			result.setList(list);
			result.setCnt(list.size());
			result.setState("ok");
			return result;
		}
	}
	// 개인정보 수정
	@RequestMapping(value="/oneUserModify", method=RequestMethod.POST)
	public MemberResult oneUserModify(MemberDTO dto) {
		MemberResult result = new MemberResult();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		int cnt = 0;
		cnt = dao.oneUserModify(dto);
		if(cnt > 0) {
			result.setCnt(cnt);
			result.setState("ok");
		}else {
			result.setCnt(cnt);
			result.setState("fail");
		}
		return result;
	}
	
	//아이디 가져와서 비교
	@RequestMapping(value = "/selectid", method = RequestMethod.POST)
	@ResponseBody
	public Map<Object, Object> SelectId(@RequestBody String id) {
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		int count = 0;
		Map<Object, Object> map = new HashMap<Object, Object>();

		count = dao.selectID(id);
		map.put("cnt", count);

		return map;
	}
	@RequestMapping(value="/allselect", method=RequestMethod.POST)
	public MemberResult memberAllSelect(String memidx, String page) {
		MemberResult result = new MemberResult();
		ArrayList<MemberDTO> list = new ArrayList<>();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		int total = 0;
		if(page == null) page = "1";
		//list= dao.allSelect((memidx == null)? "%" : memidx);
		list=dao.allSelectpaging((memidx == null)? "%" : memidx, page);
		total = dao.allSelecttotalpaging((memidx == null)? "%" : memidx);
		
		if(list.size() > 0) {
			if(memidx == null) {
				// 일반 리스트[전체]
				for(int i =0; i < list.size(); i++) {
					list.get(i).setId(null);
					list.get(i).setPw(null);
					list.get(i).setPhonenum(null);
					list.get(i).setEmail(null);
					list.get(i).setBirthday(null);
					list.get(i).setJoindate(null);
				}
			}
			result.setCnt(total);
			result.setState("ok");
			result.setList(list);
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	
	@RequestMapping(value="/selectorbymember1", method=RequestMethod.POST)
	public MemberResult selectorbymember1(String page) {
		MemberResult result = new MemberResult();
		ArrayList<MemberDTO> list = new ArrayList<>();
		int total = 0;
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		list = dao.selectorbymember1_page(page);
		total = dao.selectorbymember1_totalpage();
		if(list.size() > 0) {
			for(int i =0; i < list.size(); i++) {
				list.get(i).setId(null);
				list.get(i).setPw(null);
				list.get(i).setPhonenum(null);
				list.get(i).setEmail(null);
				list.get(i).setBirthday(null);
				list.get(i).setJoindate(null);
			}
			result.setList(list);
			result.setCnt(total);
			result.setState("ok");
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	} 
	@RequestMapping(value="/selectorbymember2", method=RequestMethod.POST)
	public MemberResult selectorbymember2(String page) {
		MemberResult result = new MemberResult();
		ArrayList<MemberDTO> list = new ArrayList<>();
		int total = 0;
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		list = dao.selectorbymember2_page(page);
		total = dao.selectorbymember2_totalpage();
		if(list.size() > 0) {
			for(int i =0; i < list.size(); i++) {
				list.get(i).setId(null);
				list.get(i).setPw(null);
				list.get(i).setPhonenum(null);
				list.get(i).setEmail(null);
				list.get(i).setBirthday(null);
				list.get(i).setJoindate(null);
			}
			result.setList(list);
			result.setCnt(total);
			result.setState("ok");
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	//회원정보 수정(관리자)
	@RequestMapping(value="/select/modify", method=RequestMethod.POST)
	public MemberResult selectModify(MemberDTO dto) {
		MemberResult result = new MemberResult();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		int cnt = 0;
		cnt = dao.selectempModify(dto);
		if(cnt > 0) {
			result.setCnt(cnt);
			result.setState("ok");
		}else {
			result.setCnt(cnt);
			result.setState("fail");
		}
		return result;
	}
			
	//회원정보 삭제
	@RequestMapping(value="/select/delete", method = RequestMethod.POST)
	public MemberResult selectDelete(MemberDTO dto) {
		MemberResult result = new MemberResult();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		TransAndCashLogDAO transdao = Session.sqlSession.getMapper(TransAndCashLogDAO.class);
		IOStorageDAO iostoragedao = Session.sqlSession.getMapper(IOStorageDAO.class);
		ArrayList<TransDTO> transdto = new ArrayList<>();
		ArrayList<IOStorageDTO> iostoragedto = new ArrayList<>();
		String msg = "";
		transdto = transdao.Delete_User_confirm(String.valueOf(dto.getMemidx()));
		iostoragedto = iostoragedao.Delete_User_IOStorage_confirm(String.valueOf(dto.getMemidx()));
		Boolean flag = false;
		if(transdto.size() > 0) {
			msg += "거래내역 결제가 : " + transdto.size() + "건 있습니다.";
		}else {
			if(iostoragedto.size() > 0) {
				msg += "재고 입,출고 결제가 : " + iostoragedto.size() + "건 있습니다.";
			}
			flag = true;
		}
		
		if(flag) {
			int cnt = 0;
			cnt = dao.selectempDelete(dto);
			if(cnt > 0) {
				result.setCnt(cnt);
				result.setState("ok");
			}
		}else {
			result.setCnt(0);
			result.setState(msg);				
		}
		return result;
	}
	// 회원 승인
	@RequestMapping(value="/accept", method = RequestMethod.POST)
	public MemberResult MemberAccept(String memidx) {
		MemberResult result = new MemberResult();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		int cnt = 0;
		cnt = dao.MemberAccept(memidx);
		if(cnt > 0) {
			result.setCnt(cnt);
			result.setState("ok");
		}else {
			result.setCnt(cnt);
			result.setState("fail");
		}
		return result;
	}
	// 검색버튼으로 리스트 가져오기
	@RequestMapping(value="/search/findstring", method = RequestMethod.POST)
	public MemberResult findstring(String index, String searchword, String page) {
		MemberResult result = new MemberResult();
		ArrayList<MemberDTO> list = new ArrayList<>();
		int total = 0;
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		if(index.equals("직급")) {
			list = dao.rankSelectList_page(searchword, page);
			total = dao.rankSelectList_totalpage(searchword);
		}else if(index.equals("부서")){
			list = dao.partSelectList_page(searchword, page);
			total = dao.partSelectList_totalpage(searchword);
		}else {
			list = dao.nameSelectList_page(searchword, page);
			total = dao.nameSelectList_totalpage(searchword);
		}
		if(list.size() > 0) {
			for(int i =0; i < list.size(); i++) {
				list.get(i).setId(null);
				list.get(i).setPw(null);
				list.get(i).setPhonenum(null);
				list.get(i).setEmail(null);
				list.get(i).setBirthday(null);
				list.get(i).setJoindate(null);
			}
			result.setList(list);
			result.setCnt(total);
			result.setState("ok");
		}else {
			result.setCnt(total);
			result.setState("fail");
		}
		return result;
	}
	
	// 아이디 찾기 서비스
	@RequestMapping(value="/search/findid", method = RequestMethod.POST)
	public MemberResult searchfindid(MemberDTO dto) {
		MemberResult result = new MemberResult();
		ArrayList<MemberDTO> list = new ArrayList<>();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		list = dao.searchfindid(dto);
		if(list.size() > 0) {
			result.setState("ok");
			result.setCnt(list.size());
			result.setList(list);
		}else {
			result.setState("fail");
		}
		return result;
	}
	// 비밀번호 찾기 서비스
	@RequestMapping(value="/search/findpw", method = RequestMethod.POST)
	public MemberResult searchfindpw(MemberDTO dto) {
		MemberResult result = new MemberResult();
		ArrayList<MemberDTO> list = new ArrayList<>();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		list = dao.searchfindpw(dto);
		if(list.size() > 0) {
			result.setState("ok");
			result.setCnt(list.size());
			result.setList(list);
		}else {
			result.setState("fail");
		}
		return result;
	}
	
	@RequestMapping(value="/main/unconfmemberlist", method=RequestMethod.POST)
	public MemberResult unconfmemberlist(String memidx, String partidx) {
		MemberResult result = new MemberResult();
		ArrayList<MemberDTO> list = new ArrayList<>();
		MemberDAO dao = Session.sqlSession.getMapper(MemberDAO.class);
		list = dao.unconfmemberlist();
		if(list.size() > 0) {
			result.setState("ok");
			result.setCnt(list.size());
			result.setList(list);
		}else {
			result.setState("fail");
			result.setCnt(list.size());
		}
		return result;
	}
	
	
}
